// Audio synthesis engine using High German (Hochdeutsch) Web Speech API & Web Audio fallback
// Features pleasant, warm, melodic natural voices and automatic gender-aware dual-voice dialogue support
// Optimized for 100% mobile compatibility (iOS Safari, Android Chrome, mobile WebView, Samsung Internet)

let currentUtterance: SpeechSynthesisUtterance | null = null;
let currentFallbackAudio: HTMLAudioElement | null = null;
let speechSafetyTimer: ReturnType<typeof setTimeout> | null = null;
let cachedVoices: SpeechSynthesisVoice[] = [];
let preferredGender: 'female' | 'male' = 'female';
let explicitlySelectedVoice: SpeechSynthesisVoice | null = null;
let explicitlySelectedMaleVoice: SpeechSynthesisVoice | null = null;
let explicitlySelectedFemaleVoice: SpeechSynthesisVoice | null = null;
let isMobileAudioUnlocked = false;

const isMobileDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /iphone|ipad|ipod|android|mobile|silk|blackberry/i.test(navigator.userAgent);
};

const isIOSDevice = (): boolean => {
  if (typeof navigator === 'undefined') return false;
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
};

// Female voice name patterns across macOS, iOS, Windows, Android, Linux, Chrome
const FEMALE_VOICE_REGEX = /\b(katja|amelie|louisa|hedda|helena|anna|petra|marlene|vicki|vicky|sara|sarah|claudia|eva|gudrun|steffi|katrin|zira|samantha|yolanda|sabina|sabine|karin|victoria|maja|ingrid|de-de-x-deb|de-de-x-dea|de-de-x-ded|de-de-x-gfb|de-de-wavenet-a|de-de-wavenet-c|de-de-wavenet-f)\b|female|weiblich|woman|frau|siri.*1|voice\s*1|voice\s*a|voice\s*c/i;

// Male voice name patterns across macOS, iOS, Windows, Android, Linux, Chrome
const MALE_VOICE_REGEX = /\b(conrad|christoph|florian|stefan|markus|marcus|hans|klaus|dieter|yannick|jan|martin|frank|jörg|joerg|michael|paul|thomas|viktor|victor|ralf|ralph|bernd|kilian|jonas|lukas|alex|david|oliver|sven|torsten|thorsten|de-de-x-deg|de-de-x-def|de-de-x-dee|de-de-x-gfa|de-de-x-cfs|de-de-x-ksp|de-de-wavenet-b|de-de-wavenet-d|de-de-wavenet-e)\b|male|männlich|\bman\b|siri.*2|voice\s*2|voice\s*b|voice\s*d/i;

// High quality / Neural / Natural voice indicators
const NATURAL_VOICE_REGEX = /natural|neural|online|enhanced|premium|google|apple|siri|wavenet/i;

// Set to prevent iOS Safari from garbage collecting active utterances mid-speech
const activeUtterances = new Set<SpeechSynthesisUtterance>();
let sharedAudioContext: AudioContext | null = null;

// Mobile Audio Unlocking (Crucial for iOS Safari & Android Chrome autoplay policies)
export const unlockMobileAudio = () => {
  if (typeof window === 'undefined') return;
  try {
    // 1. Awaken hardware Web Audio on iOS/Android
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (AudioContextClass) {
      if (!sharedAudioContext) {
        sharedAudioContext = new AudioContextClass();
      }
      if (sharedAudioContext.state === 'suspended') {
        sharedAudioContext.resume().catch(() => {});
      }
      // Play 1 silent frame to establish user-gesture authorization on iOS
      const buffer = sharedAudioContext.createBuffer(1, 1, 22050);
      const source = sharedAudioContext.createBufferSource();
      source.buffer = buffer;
      source.connect(sharedAudioContext.destination);
      source.start(0);
    }

    // 2. Unpause and prime SpeechSynthesis
    if ('speechSynthesis' in window) {
      if (window.speechSynthesis.paused) {
        window.speechSynthesis.resume();
      }
      if (cachedVoices.length === 0) {
        const v = window.speechSynthesis.getVoices();
        if (v && v.length > 0) cachedVoices = v;
      }
    }
    isMobileAudioUnlocked = true;
  } catch (e) {
    // Ignore harmless unlock errors
  }
};

// Auto-register touch/click listeners on mobile to unlock speech synthesis on first interaction
if (typeof window !== 'undefined') {
  const handleFirstInteraction = () => {
    unlockMobileAudio();
  };
  window.addEventListener('touchstart', handleFirstInteraction, { passive: true });
  window.addEventListener('touchend', handleFirstInteraction, { passive: true });
  window.addEventListener('click', handleFirstInteraction, { passive: true });
}

// Initialize voices cache
if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  const loadVoices = () => {
    try {
      const v = window.speechSynthesis.getVoices();
      if (v && v.length > 0) {
        cachedVoices = v;
      }
    } catch (e) {
      console.warn('Could not load speech voices:', e);
    }
  };
  loadVoices();
  try {
    window.speechSynthesis.addEventListener('voiceschanged', loadVoices);
  } catch {
    // Fallback for older browsers
  }
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }
}

/**
 * Returns all available German voices on the system.
 */
export const getAvailableGermanVoices = (): SpeechSynthesisVoice[] => {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) return [];
  let voices = window.speechSynthesis.getVoices();
  if (voices && voices.length > 0) {
    cachedVoices = voices;
  } else {
    voices = cachedVoices;
  }
  return voices.filter(v => {
    const lang = (v.lang || '').toLowerCase();
    return lang.startsWith('de') || lang.includes('de-') || lang.includes('de_');
  });
};

/**
 * Finds the optimal voice for a specific gender, prioritizing pleasant, natural, high-definition voices.
 */
export const getBestGermanVoiceByGender = (gender: 'female' | 'male'): SpeechSynthesisVoice | null => {
  if (gender === 'female' && explicitlySelectedFemaleVoice) {
    return explicitlySelectedFemaleVoice;
  }
  if (gender === 'male' && explicitlySelectedMaleVoice) {
    return explicitlySelectedMaleVoice;
  }
  if (explicitlySelectedVoice && preferredGender === gender) {
    return explicitlySelectedVoice;
  }

  const germanVoices = getAvailableGermanVoices();
  if (germanVoices.length === 0) {
    return null;
  }

  if (gender === 'female') {
    // 1. Natural/Neural female German voice (Katja, Amelie, Anna, Petra, Louisa, Hedda)
    const naturalFemale = germanVoices.find(v => 
      FEMALE_VOICE_REGEX.test(v.name) && 
      NATURAL_VOICE_REGEX.test(v.name) && 
      !MALE_VOICE_REGEX.test(v.name)
    );
    if (naturalFemale) return naturalFemale;

    // 2. Any explicit female German voice
    const explicitFemale = germanVoices.find(v => FEMALE_VOICE_REGEX.test(v.name) && !MALE_VOICE_REGEX.test(v.name));
    if (explicitFemale) return explicitFemale;

    // 3. Google Deutsch in Chrome (authentic high-definition female speaker)
    const googleDeutsch = germanVoices.find(v => /google\s*deutsch/i.test(v.name));
    if (googleDeutsch) return googleDeutsch;

    // 4. Any voice not matching male regex
    const nonMale = germanVoices.find(v => !MALE_VOICE_REGEX.test(v.name));
    if (nonMale) return nonMale;

    return germanVoices[0] || null;
  } else {
    // Male Voice
    // 1. Natural/Neural male German voice (Conrad, Christoph, Florian, Stefan, Markus, Yannick)
    const naturalMale = germanVoices.find(v => 
      MALE_VOICE_REGEX.test(v.name) && 
      NATURAL_VOICE_REGEX.test(v.name)
    );
    if (naturalMale) return naturalMale;

    // 2. Explicit male German voice
    const explicitMale = germanVoices.find(v => MALE_VOICE_REGEX.test(v.name));
    if (explicitMale) return explicitMale;

    // 3. Voice that does NOT match female voice regex
    const nonFemale = germanVoices.find(v => !FEMALE_VOICE_REGEX.test(v.name) && !/google\s*deutsch/i.test(v.name));
    if (nonFemale) return nonFemale;

    // 4. Secondary German voice if available
    if (germanVoices.length > 1) {
      return germanVoices[1];
    }
    return germanVoices[0] || null;
  }
};

/**
 * Finds the optimal voice, respecting user preferred gender
 */
export const getBestGermanVoice = (): SpeechSynthesisVoice | null => {
  return getBestGermanVoiceByGender(preferredGender);
};

export const setVoiceGenderPreference = (gender: 'female' | 'male') => {
  preferredGender = gender;
};

export const getVoiceGenderPreference = (): 'female' | 'male' => {
  return preferredGender;
};

export const setSelectedVoice = (voice: SpeechSynthesisVoice | null) => {
  explicitlySelectedVoice = voice;
};

export const setSelectedMaleVoice = (voice: SpeechSynthesisVoice | null) => {
  explicitlySelectedMaleVoice = voice;
};

export const setSelectedFemaleVoice = (voice: SpeechSynthesisVoice | null) => {
  explicitlySelectedFemaleVoice = voice;
};

export const getSelectedMaleVoice = (): SpeechSynthesisVoice | null => {
  return explicitlySelectedMaleVoice || getBestGermanVoiceByGender('male');
};

export const getSelectedFemaleVoice = (): SpeechSynthesisVoice | null => {
  return explicitlySelectedFemaleVoice || getBestGermanVoiceByGender('female');
};

/**
 * Detects whether a speaker in a German dialogue is female or male
 * based on German titles, honorifics, feminine endings (-in, -innen), names, and roles.
 */
const FEMALE_TITLES_AND_ENDINGS = /\b(frau|fr\.|fräulein|dame|mutter|mama|tochter|schwester|oma|grossmutter|großmutter|tante|freundin|partnerin|dialogpartnerin|chefin|leiterin|kollegin|lehrerin|dozentin|schülerin|studentin|ärztin|patientin|kundin|verkäuferin|kellnerin|arzthelferin|assistentin|beraterin|bürgermeisterin|präsidentin|richterin|moderatorin|laudatorin|zugbegleiterin|passantin|vorsitzende|redakteurin|korrespondentin|spezialistin|vermieterin|mieterin|hausverwalterin|preisträgerin|mitarbeiterin|expertin|teilnehmerin|nachbarin|apothekerin|sekretärin|trainerin|fahrerin|sprecherin|erzählerin|nachrichtensprecherin|interviewer(in)?|prüferin|beamtin|schaffnerin|maklerin|krankenschwester)\b/i;

const FEMALE_NAMES = /\b(anna|maria|maryam|zahra|samira|sarah|sara|elena|susanne|petra|lena|sabine|lisa|lili|julia|laura|emma|mia|sofia|sophie|katharina|christine|monika|claudia|barbara|eva|steffi|katrin|lara|fatima|niloufar|yasmin|layla|beate|nadia|karin|ursula|mona|simone|melanie|birgit|nicole|heike|tanja|angelika|ingrid|marion|karoline|frieda|greta|annegret|hildegard|chen|sommer|schultze|demir|rahimi|al-mansur|al-mansoor|rostova|klein|kovacs)\b/i;

const MALE_TITLES = /\b(herr|herrn|hr\.|mann|vater|papa|sohn|bruder|opa|grossvater|großvater|onkel|junge|freund|partner|dialogpartner|chef|leiter|kollege|lehrer|dozent|schüler|student|arzt|patient|kunde|verkäufer|kellner|arzthelfer|assistent|berater|bürgermeister|präsident|richter|moderator|laudator|zugbegleiter|passant|vorsitzender|redakteur|korrespondent|spezialist|vermieter|mieter|hausverwalter|fitnesstrainer|trainer|bankberater|ingenieur|polizist|fahrer|gast|reisender|reisende|mitarbeiter|experte|teilnehmer|nachbar|apotheker|sekretär|sprecher|erzähler|nachrichtensprecher|interviewer|prüfer|beamter|schaffner|makler|krankenpfleger)\b/i;

const MALE_NAMES = /\b(sayed|bashir|lukas|thomas|sami|jonas|marc|markus|ahmad|david|ali|reza|kenan|soran|mohammad|stefan|jan|michael|andreas|peter|klaus|hans|frank|christian|martin|max|felix|leon|daniel|paul|oliver|moritz|florian|alex|sebastian|tobias|werner|wolfgang|paco|walter|tim|hasan|jörg|dieter|heinz|günter|jürgen|manfred|uwe|bernd|herbert|ralf|carsten|jens|dirk|karimi|yilmaz|bergmann|franke|hartmann|radbruch|weizsäcker|gadamer|berger|lindner|nematullah|özdemir|krause|schuster|erwin)\b/i;

export const detectSpeakerGender = (speakerName: string, fallbackIndex: number = 0, textContext?: string): 'female' | 'male' => {
  if (!speakerName) {
    if (textContext) {
      if (/\b(sayed|bashir|herr|lukas|thomas|marc|erwin|klaus|hans|schuster)\b/i.test(textContext)) return 'male';
      if (/\b(frau|maria|anna|weber|kovacs|lehrerin|ärztin|apothekerin)\b/i.test(textContext)) return 'female';
    }
    return fallbackIndex % 2 === 0 ? 'male' : 'female';
  }

  const cleanName = speakerName.trim();

  // 1. Explicit female check (titles, feminine occupational endings, names)
  const hasFemaleTitle = FEMALE_TITLES_AND_ENDINGS.test(cleanName);
  const hasFemaleName = FEMALE_NAMES.test(cleanName);
  // In German, noun suffixes ending with 'in' (e.g. Kundin, Patientin, Ärztin) indicate female
  const hasFeminineSuffix = /(in|innen)\b/i.test(cleanName) && !/\b(martin|erwin|benjamin|kevin|robin|colin|justin)\b/i.test(cleanName);

  // 2. Explicit male check
  const hasMaleTitle = MALE_TITLES.test(cleanName);
  const hasMaleName = MALE_NAMES.test(cleanName);

  if ((hasFemaleTitle || hasFemaleName || hasFeminineSuffix) && !hasMaleTitle) {
    return 'female';
  }

  if (hasMaleTitle || hasMaleName) {
    return 'male';
  }

  // 3. If generic label like "Person A" vs "Person B", check text context if provided
  if (textContext) {
    if (/\b(ich heiße sayed|mein name ist sayed|herr bashir|ich bin sayed|lukas|herr schuster)\b/i.test(textContext)) {
      return 'male';
    }
    if (/\b(ich bin maria|ich heiße maria|frau weber|ich bin lehrerin|frau kovacs)\b/i.test(textContext)) {
      return 'female';
    }
  }

  // Sayed Bashir is the protagonist of the course (Person A / Sprecher 1 starts as male)
  if (/(\bA\b|\b1\b|erste)/i.test(cleanName)) {
    return 'male';
  }
  if (/(\bB\b|\b2\b|zweite)/i.test(cleanName)) {
    return 'female';
  }

  // Fallback: alternate based on index to ensure 2 distinct voices in a dialogue
  return fallbackIndex % 2 === 0 ? 'male' : 'female';
};

// Gentle, melodic acoustic chime using Web Audio API to create a pleasant, warm listening experience (Desktop only to prevent audio session hijacking on mobile)
export const playAcousticCue = (frequency: number = 523.25, durationMs: number = 90) => {
  if (isMobileDevice()) return; // Prevent mobile AudioContext from stealing speech output session
  try {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;
    const ctx = new AudioContextClass();
    
    // Create dual-tone soft chime (C5 + E5 harmonic for warm musicality)
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = 'sine';
    osc1.frequency.setValueAtTime(frequency, ctx.currentTime);

    osc2.type = 'sine';
    osc2.frequency.setValueAtTime(frequency * 1.25, ctx.currentTime);

    gain.gain.setValueAtTime(0.018, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(ctx.destination);

    osc1.start();
    osc2.start();
    osc1.stop(ctx.currentTime + durationMs / 1000);
    osc2.stop(ctx.currentTime + durationMs / 1000);
  } catch (e) {
    // AudioContext might be blocked until user interacts
  }
};

/**
 * Fallback high-fidelity native German audio stream for mobile devices
 * that lack installed German speech synthesizer voices.
 */
export const playFallbackAudioStream = (text: string, onEnd?: () => void) => {
  try {
    if (currentFallbackAudio) {
      currentFallbackAudio.pause();
      currentFallbackAudio.currentTime = 0;
      currentFallbackAudio = null;
    }
    const clean = text.trim();
    if (!clean) {
      if (onEnd) onEnd();
      return;
    }
    // Only attempt external stream if online and running in a browser
    if (typeof window === 'undefined' || (typeof navigator !== 'undefined' && !navigator.onLine)) {
      if (onEnd) onEnd();
      return;
    }
    const encoded = encodeURIComponent(clean.slice(0, 180));
    const audioUrl = `https://translate.google.com/translate_tts?ie=UTF-8&tl=de&client=tw-ob&q=${encoded}`;
    const audio = new Audio();
    currentFallbackAudio = audio;
    audio.onended = () => {
      currentFallbackAudio = null;
      if (onEnd) onEnd();
    };
    audio.onerror = () => {
      currentFallbackAudio = null;
      if (onEnd) onEnd();
    };
    audio.src = audioUrl;
    audio.play().catch(() => {
      currentFallbackAudio = null;
      if (onEnd) onEnd();
    });
  } catch {
    if (onEnd) onEnd();
  }
};

/**
 * Pre-processes text for natural, human-like speech pacing with natural breath pauses,
 * removing stage directions, bracketed markers, and extraneous speaker prefixes.
 */
const prepareNaturalSpeechText = (rawText: string): string => {
  return rawText
    // Remove markdown symbols
    .replace(/[*_~`#]/g, '')
    // Remove stage directions in parentheses like (lacht), (am Schalter), (seufzt), (Pause)
    .replace(/\([^)]*\)/g, ' ')
    // Remove stage directions or instructions in brackets like [Lachen], [Musik], [Glocke]
    .replace(/\[[^\]]*\]/g, ' ')
    // Remove accidental speaker prefix if present (e.g., "Sayed Bashir: ...")
    .replace(/^([A-Za-zÄÖÜäöüß\s.]+):\s*/, '')
    // Remove bullet points, item numbers, dashes at line beginning
    .replace(/^[•\-\*\d.]+\s*/, '')
    // Expand slashes with spaces for clear spoken pronunciation (e.g., Guten Tag / Hallo -> Guten Tag oder Hallo)
    .replace(/\s*\/\s*/g, ' oder ')
    // Clean quotes
    .replace(/["'„“»«]/g, '')
    // Ensure commas have slight spacing for natural breathing pause
    .replace(/,/g, ', ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Plays German text using a specific gender voice and optimized pitch/timbre for natural, pleasant sound.
 * Guaranteed to work smoothly across iOS Safari, Android Chrome, and Desktop browsers.
 */
export const playHighGermanAudioWithGender = (
  text: string,
  gender: 'female' | 'male',
  rate: number = 0.9,
  onEnd?: () => void,
  onBoundary?: (charIndex: number) => void,
  pitchOffset: number = 0
) => {
  // Always unlock mobile audio context on active click/tap
  unlockMobileAudio();

  // Clear any existing safety timer
  if (speechSafetyTimer) {
    clearTimeout(speechSafetyTimer);
    speechSafetyTimer = null;
  }

  // Stop any fallback audio
  if (currentFallbackAudio) {
    try {
      currentFallbackAudio.pause();
      currentFallbackAudio.currentTime = 0;
    } catch {
      // ignore
    }
    currentFallbackAudio = null;
  }

  let endCalled = false;
  const safeEnd = () => {
    if (speechSafetyTimer) {
      clearTimeout(speechSafetyTimer);
      speechSafetyTimer = null;
    }
    if (!endCalled) {
      endCalled = true;
      currentUtterance = null;
      if (onEnd) onEnd();
    }
  };

  const cleanText = prepareNaturalSpeechText(text);
  if (!cleanText) {
    safeEnd();
    return;
  }

  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    // Fallback to native German audio stream
    playFallbackAudioStream(cleanText, safeEnd);
    return;
  }

  try {
    const isMobile = isMobileDevice();

    // Do not play competing chime on mobile
    if (!isMobile) {
      playAcousticCue(gender === 'female' ? 587.33 : 440.0, 50);
    }

    // Cancel ongoing speech cleanly if needed
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }

    if (window.speechSynthesis.paused) {
      window.speechSynthesis.resume();
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'de-DE';
    
    // Natural, pleasant speech rate: gently paced for learners (Standard Hochdeutsch)
    const baseRate = Math.max(0.70, Math.min(1.25, rate * 0.95));

    // Pick best voice for the chosen gender
    let voice = getBestGermanVoiceByGender(gender);
    if (!voice && cachedVoices.length === 0) {
      const liveVoices = window.speechSynthesis.getVoices();
      if (liveVoices.length > 0) {
        cachedVoices = liveVoices;
        voice = getBestGermanVoiceByGender(gender);
      }
    }
    if (voice) {
      utterance.voice = voice;
    }

    const otherVoice = getBestGermanVoiceByGender(gender === 'female' ? 'male' : 'female');
    const isSharedVoice = !voice || !otherVoice || voice.name === otherVoice.name;

    // Pitch calibration:
    // When distinct natural male/female voices are available on the system: standard pitch 1.0 (pure human acoustic).
    // When only a single shared voice exists on the client: modulate pitch pleasantly (female: 1.10, male: 0.88)
    // so both roles sound completely distinct, warm, and natural.
    if (gender === 'female') {
      const basePitch = isSharedVoice ? 1.10 : 1.0;
      utterance.pitch = Math.min(1.16, Math.max(0.96, basePitch + pitchOffset));
      utterance.rate = Math.min(1.2, Math.max(0.75, baseRate));
    } else {
      const basePitch = isSharedVoice ? 0.88 : 1.0;
      utterance.pitch = Math.min(1.04, Math.max(0.85, basePitch + pitchOffset));
      utterance.rate = Math.min(1.2, Math.max(0.75, baseRate));
    }
    utterance.volume = 1.0;

    utterance.onend = () => {
      activeUtterances.delete(utterance);
      safeEnd();
    };

    utterance.onerror = (e) => {
      activeUtterances.delete(utterance);
      // In Web Speech API, 'canceled' or 'interrupted' is normal when user navigates or stops
      if (e.error === 'canceled' || e.error === 'interrupted') {
        safeEnd();
        return;
      }
      // If genuine error and not ended, try fallback audio stream
      if (!endCalled) {
        playFallbackAudioStream(cleanText, safeEnd);
      } else {
        safeEnd();
      }
    };

    if (onBoundary) {
      utterance.onboundary = (event) => {
        if (event.name === 'word') {
          onBoundary(event.charIndex);
        }
      };
    }

    // Dynamic safety timeout with buffer
    const estimatedMs = Math.max(2000, (cleanText.length * 90) / baseRate);
    speechSafetyTimer = setTimeout(() => {
      activeUtterances.delete(utterance);
      safeEnd();
    }, estimatedMs + 2000);

    // Keep persistent reference in memory and window to prevent iOS/Safari garbage collection bug
    currentUtterance = utterance;
    activeUtterances.add(utterance);
    (window as unknown as { __speechUtterance?: SpeechSynthesisUtterance }).__speechUtterance = utterance;

    // On iOS Safari, calling speak directly after cancel in the exact same microtask
    // can cause Safari to drop the utterance. Using a 10ms tick gives WebKit time to flush cancel queue.
    if (isMobile) {
      setTimeout(() => {
        try {
          if (window.speechSynthesis.paused) {
            window.speechSynthesis.resume();
          }
          window.speechSynthesis.speak(utterance);
        } catch {
          playFallbackAudioStream(cleanText, safeEnd);
        }
      }, 15);
    } else {
      window.speechSynthesis.speak(utterance);
    }
  } catch {
    playFallbackAudioStream(cleanText, safeEnd);
  }
};

/**
 * Standard German playback respecting user preferred voice gender
 */
export const playHighGermanAudio = (
  text: string, 
  rate: number = 0.9, 
  onEnd?: () => void,
  onBoundary?: (charIndex: number) => void
) => {
  playHighGermanAudioWithGender(text, preferredGender, rate, onEnd, onBoundary);
};

/**
 * Dedicated Dialogue Turn player that automatically detects speaker gender
 * and applies the appropriate female or male natural voice.
 */
export const playDialogueTurn = (
  speaker: string,
  text: string,
  rate: number = 0.9,
  onEnd?: () => void,
  fallbackIndex: number = 0
) => {
  const gender = detectSpeakerGender(speaker, fallbackIndex, text);
  // Differentiate pitch slightly if two of the same gender speak sequentially
  const subtleOffset = (fallbackIndex % 2 === 1) ? 0.02 : -0.02;
  playHighGermanAudioWithGender(text, gender, rate, onEnd, undefined, subtleOffset);
};

export const testMaleVoice = (rate: number = 0.95) => {
  stopGermanAudio();
  playHighGermanAudioWithGender(
    'Guten Tag! Ich bin die standardmäßige, angenehme Männerstimme für Ihr Deutschtraining.',
    'male',
    rate
  );
};

export const testFemaleVoice = (rate: number = 0.95) => {
  stopGermanAudio();
  playHighGermanAudioWithGender(
    'Guten Tag! Ich bin die standardmäßige, angenehme Frauenstimme für Ihr Deutschtraining.',
    'female',
    rate
  );
};

export const stopGermanAudio = () => {
  if (speechSafetyTimer) {
    clearTimeout(speechSafetyTimer);
    speechSafetyTimer = null;
  }
  if (currentFallbackAudio) {
    try {
      currentFallbackAudio.pause();
      currentFallbackAudio.currentTime = 0;
    } catch (e) {}
    currentFallbackAudio = null;
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    try {
      if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {
      // ignore
    }
    currentUtterance = null;
  }
};

export const stopSpeech = stopGermanAudio;

export const isAudioSpeaking = () => {
  if (currentFallbackAudio && !currentFallbackAudio.paused) return true;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    return window.speechSynthesis.speaking;
  }
  return false;
};


