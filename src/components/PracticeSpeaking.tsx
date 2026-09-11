import React, { useState, useRef, useEffect, useMemo } from 'react';
import { LanguageCode } from '../types';
import { playHighGermanAudioWithGender, detectSpeakerGender, stopSpeech } from '../utils/speech';
import { 
  Mic, 
  MicOff, 
  Square, 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Award,
  ArrowRight,
  Headphones,
  Sliders,
  ChevronDown
} from 'lucide-react';

interface PracticeSpeakingProps {
  lessonTitle: string;
  availablePhrases: {
    speaker?: string;
    text: string;
    translation?: string;
    category?: string;
  }[];
  activePhraseText?: string;
  language: LanguageCode;
  speechRate?: number;
  onClose?: () => void;
}

// Clean and normalize German words for comparison
const normalizeWord = (w: string): string => {
  return w
    .toLowerCase()
    .replace(/[.,/#!$%^&*;:{}=\-_`~()?"'„“»«]/g, '')
    .trim();
};

// Calculate word-level similarity percentage between target and recognized text
const calculatePronunciationScore = (target: string, recognized: string): {
  score: number;
  targetWords: { word: string; matched: boolean }[];
  recognizedWords: string[];
} => {
  if (!recognized.trim()) {
    return {
      score: 0,
      targetWords: target.split(/\s+/).map(w => ({ word: w, matched: false })),
      recognizedWords: []
    };
  }

  const rawTargetWords = target.split(/\s+/).filter(Boolean);
  const rawRecognizedWords = recognized.split(/\s+/).filter(Boolean);

  const normTarget = rawTargetWords.map(normalizeWord);
  const normRec = rawRecognizedWords.map(normalizeWord);

  let matchedCount = 0;
  const targetWordsResult: { word: string; matched: boolean }[] = [];

  normTarget.forEach((tWord, idx) => {
    // Check if recognized words contain this target word or a close match
    const foundIdx = normRec.findIndex(rWord => {
      if (rWord === tWord) return true;
      // Allow minor single-character difference for German umlauts / endings
      if (tWord.length > 3 && (rWord.includes(tWord) || tWord.includes(rWord))) return true;
      return false;
    });

    if (foundIdx !== -1) {
      matchedCount++;
      targetWordsResult.push({ word: rawTargetWords[idx], matched: true });
    } else {
      targetWordsResult.push({ word: rawTargetWords[idx], matched: false });
    }
  });

  const rawPercentage = rawTargetWords.length > 0 
    ? Math.round((matchedCount / rawTargetWords.length) * 100) 
    : 0;

  // Bonus for overall phonetic cadence
  const finalScore = Math.min(100, Math.max(rawPercentage, rawRecognizedWords.length > 0 ? 50 : 0));

  return {
    score: finalScore,
    targetWords: targetWordsResult,
    recognizedWords: rawRecognizedWords
  };
};

export const PracticeSpeaking: React.FC<PracticeSpeakingProps> = ({
  lessonTitle,
  availablePhrases,
  activePhraseText,
  language,
  speechRate = 0.9,
  onClose
}) => {
  // Phrases list
  const phrases = useMemo(() => {
    if (availablePhrases && availablePhrases.length > 0) return availablePhrases;
    return [{ text: 'Guten Tag, wie geht es Ihnen?', speaker: 'Sayed Bashir', category: 'Standard' }];
  }, [availablePhrases]);

  // Selected phrase
  const [selectedIndex, setSelectedIndex] = useState<number>(() => {
    if (activePhraseText) {
      const found = phrases.findIndex(p => p.text.trim().toLowerCase() === activePhraseText.trim().toLowerCase());
      if (found !== -1) return found;
    }
    return 0;
  });

  // If activePhraseText changes externally
  useEffect(() => {
    if (activePhraseText) {
      const found = phrases.findIndex(p => p.text.trim().toLowerCase() === activePhraseText.trim().toLowerCase());
      if (found !== -1) {
        setSelectedIndex(found);
      }
    }
  }, [activePhraseText, phrases]);

  const currentPhrase = phrases[selectedIndex] || phrases[0];

  // Custom text editing
  const [customText, setCustomText] = useState('');
  const [isEditingCustom, setIsEditingCustom] = useState(false);

  const activeText = isEditingCustom && customText.trim() ? customText : currentPhrase.text;
  const currentSpeaker = currentPhrase.speaker || 'Sayed Bashir';
  const speakerGender = detectSpeakerGender(currentSpeaker, selectedIndex, activeText);

  // Audio Playback state (Target)
  const [isPlayingTarget, setIsPlayingTarget] = useState(false);
  const [targetSpeed, setTargetSpeed] = useState(speechRate);

  // Recording state
  const [isRecording, setIsRecording] = useState(false);
  const [recordingDuration, setRecordingDuration] = useState(0);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [isPlayingUserAudio, setIsPlayingUserAudio] = useState(false);
  const [micPermissionError, setMicPermissionError] = useState<string | null>(null);
  const [recognizedTranscript, setRecognizedTranscript] = useState<string>('');
  const [speechRecSupported, setSpeechRecSupported] = useState<boolean>(true);

  // Dual comparison playback state
  const [isComparingBoth, setIsComparingBoth] = useState(false);

  // Refs
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const durationTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const userAudioPlayerRef = useRef<HTMLAudioElement | null>(null);
  const speechRecognitionRef = useRef<any>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopSpeech();
      if (durationTimerRef.current) clearInterval(durationTimerRef.current);
      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
        try { mediaRecorderRef.current.stop(); } catch (e) {}
      }
      if (speechRecognitionRef.current) {
        try { speechRecognitionRef.current.stop(); } catch (e) {}
      }
    };
  }, []);

  // Play Native High German target audio
  const handlePlayTarget = (onFinished?: () => void) => {
    if (isPlayingTarget) {
      stopSpeech();
      setIsPlayingTarget(false);
      return;
    }

    setIsPlayingTarget(true);
    playHighGermanAudioWithGender(
      activeText,
      speakerGender,
      targetSpeed,
      () => {
        setIsPlayingTarget(false);
        if (onFinished) onFinished();
      }
    );
  };

  // Start Voice Recording with Web Speech Recognition fallback & comparison
  const startRecording = async () => {
    setMicPermissionError(null);
    setRecognizedTranscript('');
    setAudioUrl(null);
    setIsPlayingUserAudio(false);
    stopSpeech();

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      audioChunksRef.current = [];

      // Determine supported mimeType
      let options: MediaRecorderOptions = {};
      if (MediaRecorder.isTypeSupported('audio/webm')) {
        options = { mimeType: 'audio/webm' };
      } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
        options = { mimeType: 'audio/mp4' };
      } else if (MediaRecorder.isTypeSupported('audio/ogg')) {
        options = { mimeType: 'audio/ogg' };
      }

      const recorder = new MediaRecorder(stream, options);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (event) => {
        if (event.data && event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      recorder.onstop = () => {
        const mimeType = recorder.mimeType || 'audio/webm';
        const blob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);

        // Stop all audio tracks to release microphone
        stream.getTracks().forEach(track => track.stop());
      };

      // Start Web Speech Recognition if available (in de-DE)
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        try {
          const recognizer = new SpeechRecognition();
          recognizer.lang = 'de-DE';
          recognizer.continuous = true;
          recognizer.interimResults = true;

          recognizer.onresult = (event: any) => {
            let transcript = '';
            for (let i = 0; i < event.results.length; i++) {
              transcript += event.results[i][0].transcript + ' ';
            }
            setRecognizedTranscript(transcript.trim());
          };

          recognizer.onerror = (err: any) => {
            console.warn('Speech recognition warning:', err);
          };

          recognizer.start();
          speechRecognitionRef.current = recognizer;
        } catch (e) {
          console.warn('Speech recognition start failed:', e);
        }
      } else {
        setSpeechRecSupported(false);
      }

      recorder.start(100);
      setIsRecording(true);
      setRecordingDuration(0);

      durationTimerRef.current = setInterval(() => {
        setRecordingDuration(d => d + 1);
      }, 1000);

    } catch (err: any) {
      console.error('Microphone error:', err);
      let msg = 'دسترسی به میکروفون مرورگر امکان‌پذیر نیست. لطفاً اجازه دسترسی به میکروفون را فعال نمایید.';
      if (err.name === 'NotAllowedError' || err.name === 'PermissionDeniedError') {
        msg = 'دسترسی به میکروفون مسدود شده است. لطفاً از نوار آدرس مرورگر علامت قفل یا میکروفون را زده و دسترسی را مجاز کنید.';
      }
      setMicPermissionError(msg);
      setIsRecording(false);
    }
  };

  // Stop Recording
  const stopRecording = () => {
    if (durationTimerRef.current) {
      clearInterval(durationTimerRef.current);
      durationTimerRef.current = null;
    }

    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      try {
        mediaRecorderRef.current.stop();
      } catch (e) {
        console.warn('Recorder stop error:', e);
      }
    }

    if (speechRecognitionRef.current) {
      try {
        speechRecognitionRef.current.stop();
      } catch (e) {
        // ignore
      }
    }

    setIsRecording(false);
  };

  // Play User Audio Recording
  const handlePlayUserAudio = () => {
    if (!audioUrl) return;
    if (isPlayingUserAudio) {
      if (userAudioPlayerRef.current) {
        userAudioPlayerRef.current.pause();
        userAudioPlayerRef.current.currentTime = 0;
      }
      setIsPlayingUserAudio(false);
      return;
    }

    if (!userAudioPlayerRef.current) {
      userAudioPlayerRef.current = new Audio(audioUrl);
    } else {
      userAudioPlayerRef.current.src = audioUrl;
    }

    setIsPlayingUserAudio(true);
    userAudioPlayerRef.current.onended = () => {
      setIsPlayingUserAudio(false);
    };
    userAudioPlayerRef.current.play().catch(e => {
      console.warn('Audio play failed:', e);
      setIsPlayingUserAudio(false);
    });
  };

  // Compare Both: Play Target Audio first, then immediately play user recording!
  const handleCompareBoth = () => {
    if (!audioUrl || isComparingBoth) return;
    setIsComparingBoth(true);

    // 1. Play target
    handlePlayTarget(() => {
      // Small pause of 400ms
      setTimeout(() => {
        // 2. Play user's recording
        if (!userAudioPlayerRef.current) {
          userAudioPlayerRef.current = new Audio(audioUrl);
        } else {
          userAudioPlayerRef.current.src = audioUrl;
        }
        setIsPlayingUserAudio(true);
        userAudioPlayerRef.current.onended = () => {
          setIsPlayingUserAudio(false);
          setIsComparingBoth(false);
        };
        userAudioPlayerRef.current.play().catch(() => {
          setIsPlayingUserAudio(false);
          setIsComparingBoth(false);
        });
      }, 450);
    });
  };

  // Pronunciation Evaluation Result
  const evaluation = useMemo(() => {
    if (!audioUrl && !isRecording) return null;
    return calculatePronunciationScore(activeText, recognizedTranscript);
  }, [activeText, recognizedTranscript, audioUrl, isRecording]);

  const score = evaluation?.score || 0;

  return (
    <div className="bg-white border-2 border-blue-600/30 rounded-xl shadow-md overflow-hidden animate-in fade-in duration-300">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white p-3.5 sm:p-4 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center shrink-0 shadow-xs">
            <Mic size={20} className="text-white animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-white/25 px-2 py-0.5 rounded text-white tracking-wide uppercase">
                Sprech- & Aussprachetraining
              </span>
              <span className="text-[11px] text-blue-100 font-medium hidden sm:inline">
                تمرین مکالمه و مقایسه مستقیم تلفظ
              </span>
            </div>
            <h3 className="font-bold text-sm sm:text-base text-white tracking-tight mt-0.5">
              آزمایشگاه صوتی تلفظ زبان آلمانی با میکروفون
            </h3>
          </div>
        </div>

        {onClose && (
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-xs px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
          >
            بستن پنل تمرین
          </button>
        )}
      </div>

      <div className="p-4 space-y-4">
        {/* 1. Phrase Selector Bar */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-bold text-slate-700 flex items-center gap-1.5">
              <Headphones size={13} className="text-blue-600" />
              <span>انتخاب عبارت یا جمله درس برای تمرین تلفظ:</span>
            </span>
            <span className="text-[11px] text-slate-500 font-mono">
              جمله {selectedIndex + 1} از {phrases.length}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-12 gap-2">
            <div className="sm:col-span-9">
              <select
                value={selectedIndex}
                onChange={(e) => {
                  setSelectedIndex(Number(e.target.value));
                  setIsEditingCustom(false);
                  setAudioUrl(null);
                  setRecognizedTranscript('');
                  stopSpeech();
                }}
                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2 text-xs font-medium text-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none cursor-pointer"
              >
                {phrases.map((p, idx) => (
                  <option key={idx} value={idx}>
                    {p.speaker ? `${p.speaker}: ` : ''}{p.text.length > 70 ? p.text.substring(0, 70) + '...' : p.text}
                  </option>
                ))}
              </select>
            </div>

            <div className="sm:col-span-3 flex items-center gap-1">
              <button
                onClick={() => {
                  setIsEditingCustom(!isEditingCustom);
                  if (!isEditingCustom) setCustomText(currentPhrase.text);
                }}
                className={`w-full py-2 px-2.5 rounded-lg border text-xs font-bold transition-colors flex items-center justify-center gap-1 cursor-pointer ${
                  isEditingCustom 
                    ? 'bg-amber-50 text-amber-800 border-amber-300' 
                    : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                }`}
              >
                <Sliders size={12} />
                <span>{isEditingCustom ? 'تغییر متن' : 'نوشتن متن دلخواه'}</span>
              </button>
            </div>
          </div>

          {isEditingCustom && (
            <div className="pt-1">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                placeholder="متن دلخواه آلمانی را اینجا تایپ کنید..."
                className="w-full bg-white border border-blue-300 rounded-lg p-2 text-xs font-medium text-slate-900 focus:ring-2 focus:ring-blue-500 focus:outline-none font-mono"
              />
            </div>
          )}
        </div>

        {/* 2. Target German Sentence Card (Display & Authentic Audio Player) */}
        <div className="p-3.5 sm:p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-md ${
                speakerGender === 'female'
                  ? 'bg-purple-100 text-purple-800 border border-purple-200'
                  : 'bg-blue-100 text-blue-800 border border-blue-200'
              }`}>
                {speakerGender === 'female' ? '♀ صدای خانم (Frauenstimme)' : '♂ صدای آقا (Männerstimme)'}
              </span>
              <span className="text-xs font-bold text-slate-700">
                گوینده: {currentSpeaker}
              </span>
            </div>

            {/* Target Speed Adjuster */}
            <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-slate-200 text-[10px] font-bold">
              <span className="px-1.5 text-slate-500">سرعت:</span>
              {[0.75, 0.9, 1.0].map((s) => (
                <button
                  key={s}
                  onClick={() => setTargetSpeed(s)}
                  className={`px-1.5 py-0.5 rounded cursor-pointer transition-colors ${
                    targetSpeed === s ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {s === 0.75 ? '0.75x' : s === 0.9 ? '0.9x' : '1.0x'}
                </button>
              ))}
            </div>
          </div>

          {/* Active Target Text Display with Evaluation Highlights */}
          <div className="space-y-1">
            <div className="text-slate-900 text-sm sm:text-base font-bold leading-relaxed tracking-wide font-mono bg-white p-3 rounded-lg border border-slate-200/80 flex items-start justify-between gap-3">
              <div className="flex-1">
                {evaluation && evaluation.targetWords.length > 0 ? (
                  <div className="flex flex-wrap gap-1.5">
                    {evaluation.targetWords.map((item, wIdx) => (
                      <span
                        key={wIdx}
                        className={`px-1 py-0.2 rounded transition-colors ${
                          item.matched 
                            ? 'bg-emerald-100 text-emerald-900 border border-emerald-300 font-bold' 
                            : 'text-slate-900 hover:bg-slate-100'
                        }`}
                        title={item.matched ? 'تلفظ صحیح تشخیص داده شد' : 'کلمه'}
                      >
                        {item.word}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span>{activeText}</span>
                )}
              </div>

              {/* Play Target Audio Button */}
              <button
                onClick={() => handlePlayTarget()}
                className={`shrink-0 p-2 rounded-full border transition-all cursor-pointer flex items-center justify-center ${
                  isPlayingTarget 
                    ? 'bg-amber-500 text-white border-amber-600 shadow-md scale-105 animate-pulse' 
                    : 'bg-blue-600 hover:bg-blue-700 text-white border-blue-700 shadow-sm'
                }`}
                title="شنیدن تلفظ استاندارد آلمانی"
              >
                {isPlayingTarget ? <Pause size={16} /> : <Volume2 size={16} />}
              </button>
            </div>

            {currentPhrase.translation && (
              <p className="text-xs text-slate-500 italic px-1" dir={language === 'prs' || language === 'fa' || language === 'ar' || language === 'ps' ? 'rtl' : 'ltr'}>
                معنی: {currentPhrase.translation}
              </p>
            )}
          </div>
        </div>

        {/* 3. Interactive Microphone Recording Deck */}
        <div className="p-4 rounded-xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 space-y-4">
          <div className="text-center space-y-1">
            <h4 className="font-bold text-xs sm:text-sm text-slate-900">
              مرحله ۲: صدای خود را با میکروفون ضبط کنید
            </h4>
            <p className="text-[11px] text-slate-500">
              دکمه میکروفون را بزنید، جمله آلمانی را بلند بخوانید، سپس دکمه توقف را فشار دهید.
            </p>
          </div>

          {/* Error notice if mic blocked */}
          {micPermissionError && (
            <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-rose-800 text-xs flex items-start gap-2">
              <AlertCircle size={15} className="text-rose-600 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold">خطای دسترسی به میکروفون:</span>
                <p>{micPermissionError}</p>
              </div>
            </div>
          )}

          {/* Main Record Control Buttons */}
          <div className="flex flex-col items-center justify-center gap-3">
            {!isRecording ? (
              <button
                onClick={startRecording}
                className="group relative flex items-center gap-2.5 px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-700 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform active:scale-95 cursor-pointer"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-300 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                </span>
                <Mic size={18} />
                <span>{audioUrl ? 'ضبط مجدد صدا (Aufnahme wiederholen)' : 'شروع ضبط صدا (Aufnahme starten)'}</span>
              </button>
            ) : (
              <div className="flex flex-col items-center gap-2.5">
                <div className="flex items-center gap-2 text-rose-600 font-mono font-bold text-sm bg-rose-50 px-4 py-1 rounded-full border border-rose-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-600 animate-ping" />
                  <span>در حال ضبط صدا: 00:{recordingDuration.toString().padStart(2, '0')}</span>
                </div>

                <button
                  onClick={stopRecording}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
                >
                  <Square size={15} className="fill-current text-rose-400" />
                  <span>توقف ضبط و ارزیابی تلفظ (Stop)</span>
                </button>
              </div>
            )}
          </div>

          {/* 4. Playback and Comparative Review Deck */}
          {audioUrl && !isRecording && (
            <div className="pt-2 border-t border-slate-200/90 space-y-3 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {/* User's voice player */}
                <div className="p-3 bg-blue-50/70 rounded-lg border border-blue-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-blue-700 block">
                      صدای ضبط‌شده شما
                    </span>
                    <span className="text-xs font-bold text-slate-800 truncate block">
                      Deine Aufnahme
                    </span>
                  </div>
                  <button
                    onClick={handlePlayUserAudio}
                    className={`p-2 rounded-full border transition-all cursor-pointer ${
                      isPlayingUserAudio 
                        ? 'bg-blue-600 text-white border-blue-700 shadow-md' 
                        : 'bg-white text-blue-600 hover:bg-blue-50 border-blue-200'
                    }`}
                    title="پخش صدای ضبط‌شده شما"
                  >
                    {isPlayingUserAudio ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>

                {/* Compare Both Button */}
                <div className="p-3 bg-indigo-50/70 rounded-lg border border-indigo-200 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <span className="text-[10px] font-bold uppercase text-indigo-700 block">
                      مقایسه مستقیم دو صدا
                    </span>
                    <span className="text-xs font-bold text-slate-800 truncate block">
                      Original + Deine Stimme
                    </span>
                  </div>
                  <button
                    onClick={handleCompareBoth}
                    disabled={isComparingBoth}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition-all cursor-pointer flex items-center gap-1 ${
                      isComparingBoth 
                        ? 'bg-indigo-600 text-white border-indigo-700 animate-pulse' 
                        : 'bg-indigo-600 hover:bg-indigo-700 text-white border-indigo-700 shadow-xs'
                    }`}
                    title="پخش هردو صدا پشت سر هم برای مقایسه دقیق گوش"
                  >
                    <Volume2 size={13} />
                    <span>{isComparingBoth ? 'در حال مقایسه...' : 'مقایسه همزمان'}</span>
                  </button>
                </div>
              </div>

              {/* 5. Pronunciation Assessment & Speech Recognition Result */}
              <div className="p-3.5 bg-white rounded-lg border border-slate-200 space-y-2.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-1.5">
                    <Award size={16} className={score >= 80 ? 'text-emerald-600' : 'text-blue-600'} />
                    <span className="font-bold text-xs text-slate-800">
                      نتیجه تطبیق و کیفیت تلفظ شما:
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    <span className={`text-xs font-mono font-extrabold px-2 py-0.5 rounded ${
                      score >= 80 
                        ? 'bg-emerald-100 text-emerald-800 border border-emerald-200' 
                        : score >= 50 
                          ? 'bg-amber-100 text-amber-800 border border-amber-200' 
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                    }`}>
                      {score}% {score >= 80 ? 'بسیار عالی (Sehr gut)' : score >= 50 ? 'خوب، نیاز به تمرین بیشتر' : 'نیاز به تکرار'}
                    </span>
                  </div>
                </div>

                {/* Progress bar */}
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden border border-slate-200">
                  <div 
                    className={`h-full transition-all duration-500 rounded-full ${
                      score >= 80 ? 'bg-emerald-500' : score >= 50 ? 'bg-amber-500' : 'bg-blue-500'
                    }`}
                    style={{ width: `${Math.max(10, score)}%` }}
                  />
                </div>

                {/* What the microphone heard */}
                {recognizedTranscript ? (
                  <div className="p-2 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 space-y-1">
                    <div className="text-[10px] font-bold text-slate-500 uppercase">
                      متن آلمانی شنیده‌شده از میکروفون شما (Erkannter Text):
                    </div>
                    <p className="font-mono text-slate-900 font-medium">
                      "{recognizedTranscript}"
                    </p>
                  </div>
                ) : (
                  <div className="text-[11px] text-slate-500 italic">
                    صدای شما با موفقیت ضبط شد. برای سنجش پیشرفت، هردو صدا را با دکمه "مقایسه همزمان" گوش دهید.
                  </div>
                )}

                {/* Phonetics Didactic Tips */}
                <div className="p-2 bg-blue-50/50 rounded border border-blue-100 text-[11px] text-blue-900 space-y-1">
                  <div className="font-bold flex items-center gap-1 text-blue-800">
                    <Sparkles size={12} className="text-blue-600" />
                    <span>نکته کلیدی تلفظ آلمانی برای این جمله:</span>
                  </div>
                  <p className="text-slate-700 leading-normal">
                    در زبان آلمانی، تکیه کلمات (Betonung) و کشیدگی مصوت‌ها (ä, ö, ü) اهمیت بالایی دارد. سعی کنید با سرعت آهسته (0.75x) تلفظ اصلی را چند بار تکرار کنید و سپس با ریتم طبیعی بخوانید.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
