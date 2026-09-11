import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Lesson, LanguageCode, LessonSection, MainTab, VideoClip } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { GLOSSARY_DATA } from '../data/glossary';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { playHighGermanAudio, playDialogueTurn, detectSpeakerGender, stopGermanAudio } from '../utils/speech';
import { getTranslation, isRTL } from '../utils/translationHelper';
import { LessonVideoPlayer } from './LessonVideoPlayer';
import { PracticeSpeaking } from './PracticeSpeaking';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  Play, 
  Pause, 
  Volume2, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Video, 
  FileText, 
  Headphones, 
  MessageSquare, 
  Award,
  Sparkles,
  Info,
  Languages,
  Eye,
  Download,
  BookOpen,
  PanelRightClose,
  PanelRightOpen,
  Type,
  Users,
  Mic,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface LessonViewProps {
  lesson: Lesson;
  allLessons?: Lesson[];
  onSelectLesson?: (lessonId: string) => void;
  language: LanguageCode;
  speechRate: number;
  onNavigateTab: (tab: MainTab) => void;
  onOpenShareModal?: () => void;
  isRightPanelOpen?: boolean;
  onToggleRightPanel?: () => void;
}

type MussawiStep = 'A' | 'B' | 'C' | 'D' | 'E';

export const LessonView: React.FC<LessonViewProps> = ({
  lesson,
  allLessons,
  onSelectLesson,
  language,
  speechRate,
  onNavigateTab,
  onOpenShareModal,
  isRightPanelOpen: externalRightPanelOpen,
  onToggleRightPanel: externalToggleRightPanel
}) => {
  const [activeSchritt, setActiveSchritt] = useState<MussawiStep>('A');
  const [isPlayingAudioStory, setIsPlayingAudioStory] = useState(false);
  const [activeTranscriptIndex, setActiveTranscriptIndex] = useState<number | null>(null);
  const [grammarSubtitleLang, setGrammarSubtitleLang] = useState<LanguageCode>(language);
  const [readingSize, setReadingSize] = useState<'normal' | 'large' | 'xl'>('normal');
  const [activeSectionLineIdx, setActiveSectionLineIdx] = useState<number | null>(null);
  const [isPlayingSectionDialogue, setIsPlayingSectionDialogue] = useState(false);

  // Practice Speaking with microphone state
  const [isPracticeSpeakingOpen, setIsPracticeSpeakingOpen] = useState(false);
  const [activePracticePhrase, setActivePracticePhrase] = useState<string>('');
  const practiceSpeakingRef = React.useRef<HTMLDivElement>(null);

  // Lesson list navigation context
  const currentLessonIndex = allLessons ? allLessons.findIndex(l => l.id === lesson.id) : -1;
  const prevLesson = (currentLessonIndex > 0 && allLessons) ? allLessons[currentLessonIndex - 1] : null;
  const nextLesson = (currentLessonIndex >= 0 && allLessons && currentLessonIndex < allLessons.length - 1) ? allLessons[currentLessonIndex + 1] : null;

  const nextStepMap: Record<MussawiStep, MussawiStep | null> = {
    'A': 'B',
    'B': 'C',
    'C': 'D',
    'D': 'E',
    'E': null
  };
  const prevStepMap: Record<MussawiStep, MussawiStep | null> = {
    'A': null,
    'B': 'A',
    'C': 'B',
    'D': 'C',
    'E': 'D'
  };

  const handleOpenPracticeSpeaking = (phrase: string, speaker?: string) => {
    setActivePracticePhrase(phrase);
    setIsPracticeSpeakingOpen(true);
    setTimeout(() => {
      practiceSpeakingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, 120);
  };

  // Internal state fallback if not controlled by parent
  const [internalRightPanelOpen, setInternalRightPanelOpen] = useState(true);
  const isPanelOpen = externalRightPanelOpen !== undefined ? externalRightPanelOpen : internalRightPanelOpen;
  const togglePanel = externalToggleRightPanel || (() => setInternalRightPanelOpen(p => !p));

  // Sync if language changes
  React.useEffect(() => {
    setGrammarSubtitleLang(language);
  }, [language]);

  // Guaranteed active VideoClip for this lesson
  const activeVideoClip: VideoClip = useMemo(() => {
    if (lesson.videoClip) {
      return lesson.videoClip;
    }
    // Generate high-quality video clip from fotoHoergeschichte
    const transcript = lesson.fotoHoergeschichte?.transcript || [];
    const germanLines = transcript.map(t => `${t.speaker}: ${t.text}`);
    const translatedLines = transcript.map(t => ({
      en: t.text,
      fa: t.text,
      prs: t.text,
      tr: t.text,
      ar: t.text,
      es: t.text,
      ps: t.text
    }));
    const uniqueSpeakers = Array.from(new Set(transcript.map(t => t.speaker)));

    return {
      title: `Interaktives Video-Labor: ${lesson.title}`,
      scenario: lesson.fotoHoergeschichte?.imageTheme || lesson.topic,
      category: 'dialog',
      duration: lesson.fotoHoergeschichte?.audioDuration || '01:45',
      germanTranscript: germanLines.length > 0 ? germanLines : [lesson.title],
      translatedTranscript: translatedLines.length > 0 ? translatedLines : [{
        en: lesson.title,
        fa: lesson.title,
        prs: lesson.title,
        tr: lesson.title,
        ar: lesson.title,
        es: lesson.title
      }],
      speakers: uniqueSpeakers.length >= 2 ? uniqueSpeakers : [uniqueSpeakers[0] || 'Sayed Bashir', 'Dialogpartner'],
      keyPhrases: [lesson.title, ...transcript.slice(0, 3).map(t => t.text)]
    };
  }, [lesson]);
  
  // Exercises state
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  // Filter glossary for this lesson
  const allLevelGlossary = GLOSSARY_DATA[lesson.level] || [];
  const lessonGlossary = allLevelGlossary.filter(g => g.lektion === lesson.lektionNumber);
  // If no words tagged specifically with this lesson number, take up to 8 from the level
  const displayedGlossary = lessonGlossary.length > 0 
    ? lessonGlossary 
    : allLevelGlossary.slice(0, 8);

  const audioStoryTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const sectionDialogueTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Stop all active speech and timers when section changes or component unmounts
  useEffect(() => {
    return () => {
      if (audioStoryTimerRef.current) {
        clearTimeout(audioStoryTimerRef.current);
        audioStoryTimerRef.current = null;
      }
      if (sectionDialogueTimerRef.current) {
        clearTimeout(sectionDialogueTimerRef.current);
        sectionDialogueTimerRef.current = null;
      }
      stopGermanAudio();
      setIsPlayingAudioStory(false);
      setIsPlayingSectionDialogue(false);
      setActiveTranscriptIndex(null);
      setActiveSectionLineIdx(null);
    };
  }, [activeSchritt, lesson.id]);

  const handlePlayFullStory = () => {
    if (audioStoryTimerRef.current) {
      clearTimeout(audioStoryTimerRef.current);
      audioStoryTimerRef.current = null;
    }

    if (isPlayingAudioStory) {
      stopGermanAudio();
      setIsPlayingAudioStory(false);
      setActiveTranscriptIndex(null);
      return;
    }

    if (!lesson.fotoHoergeschichte?.transcript || lesson.fotoHoergeschichte.transcript.length === 0) return;

    setIsPlayingAudioStory(true);
    let currentIndex = 0;

    const playNextLine = () => {
      if (currentIndex >= lesson.fotoHoergeschichte.transcript.length) {
        setIsPlayingAudioStory(false);
        setActiveTranscriptIndex(null);
        return;
      }

      setActiveTranscriptIndex(currentIndex);
      const line = lesson.fotoHoergeschichte.transcript[currentIndex];
      const turnIndex = currentIndex;
      currentIndex++;

      playDialogueTurn(
        line.speaker,
        line.text,
        speechRate,
        () => {
          const delay = typeof window !== 'undefined' && /iphone|ipad|ipod|android/i.test(navigator.userAgent) ? 80 : 380;
          audioStoryTimerRef.current = setTimeout(playNextLine, delay);
        },
        turnIndex
      );
    };

    playNextLine();
  };

  const handlePlaySingleLine = (speaker: string, text: string, index: number) => {
    if (audioStoryTimerRef.current) {
      clearTimeout(audioStoryTimerRef.current);
      audioStoryTimerRef.current = null;
    }
    setIsPlayingAudioStory(false);
    stopGermanAudio();
    setActiveTranscriptIndex(index);
    playDialogueTurn(speaker, text, speechRate, () => {
      setActiveTranscriptIndex(null);
    }, index);
  };

  const currentSection: LessonSection = (() => {
    switch (activeSchritt) {
      case 'A': return lesson.sectionA;
      case 'B': return lesson.sectionB;
      case 'C': return lesson.sectionC;
      case 'D': return lesson.sectionD;
      case 'E': return lesson.sectionE;
      default: return lesson.sectionA;
    }
  })();

  // Parse current section dialogue lines for interactive male/female dialogue playing
  const parsedSectionLines = useMemo(() => {
    if (!currentSection.content) return [];
    
    const rawLines = currentSection.content
      .split('\n')
      .map(l => l.trim())
      .filter(l => l.length > 0);

    const result: { raw: string; speaker: string; text: string; gender: 'female' | 'male'; isNote?: boolean }[] = [];
    let turnCounter = 0;

    const NON_SPEAKER_LABELS = /^(grammatik|hinweis|regel|tipp|beispiel|formell|informell|übung|aussagesatz|fragesatz|w-frage|ja\/nein|satzstruktur|konjugation|vokabeln|wortschatz|erklärung|struktur|info|thema|sprechen|schreiben|lesen|hören)/i;

    rawLines.forEach((line) => {
      // If line contains multiple conversational turns separated by " / " or " - "
      if (line.includes(' / ') && (line.includes(' - ') || line.includes('?'))) {
        const segments = line.split(' / ').map(s => s.trim()).filter(Boolean);
        segments.forEach((seg) => {
          if (seg.includes(' - ')) {
            const parts = seg.split(' - ').map(p => p.trim()).filter(Boolean);
            parts.forEach((p) => {
              const spk = turnCounter % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
              const g = detectSpeakerGender(spk, turnCounter, p);
              result.push({ raw: p, speaker: spk, text: p, gender: g });
              turnCounter++;
            });
          } else {
            const spk = turnCounter % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
            const g = detectSpeakerGender(spk, turnCounter, seg);
            result.push({ raw: seg, speaker: spk, text: seg, gender: g });
            turnCounter++;
          }
        });
        return;
      }

      // Check if line is formatted as "Speaker: Text"
      if (line.includes(':')) {
        const colonIdx = line.indexOf(':');
        const prefix = line.slice(0, colonIdx).trim();
        const content = line.slice(colonIdx + 1).trim();

        if (NON_SPEAKER_LABELS.test(prefix)) {
          if (content) {
            result.push({
              raw: line,
              speaker: prefix,
              text: content,
              gender: 'male',
              isNote: true
            });
          }
          return;
        }

        const spk = prefix || (turnCounter % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber');
        const g = detectSpeakerGender(spk, turnCounter, content);
        result.push({
          raw: line,
          speaker: spk,
          text: content || prefix,
          gender: g
        });
        turnCounter++;
        return;
      }

      // If line starts with "-" or bullet
      if (line.startsWith('-') || line.startsWith('•')) {
        const cleanText = line.replace(/^[-•\s]+/, '').trim();
        if (cleanText) {
          const spk = turnCounter % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
          const g = detectSpeakerGender(spk, turnCounter, cleanText);
          result.push({
            raw: line,
            speaker: spk,
            text: cleanText,
            gender: g
          });
          turnCounter++;
        }
        return;
      }

      // Regular line
      const spk = turnCounter % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
      const g = detectSpeakerGender(spk, turnCounter, line);
      result.push({
        raw: line,
        speaker: spk,
        text: line,
        gender: g
      });
      turnCounter++;
    });

    return result;
  }, [currentSection.content]);

  const handlePlaySectionDialogue = () => {
    if (sectionDialogueTimerRef.current) {
      clearTimeout(sectionDialogueTimerRef.current);
      sectionDialogueTimerRef.current = null;
    }

    if (isPlayingSectionDialogue) {
      stopGermanAudio();
      setIsPlayingSectionDialogue(false);
      setActiveSectionLineIdx(null);
      return;
    }
    if (parsedSectionLines.length === 0) return;

    setIsPlayingSectionDialogue(true);
    let lineIdx = 0;

    const playNext = () => {
      if (lineIdx >= parsedSectionLines.length) {
        setIsPlayingSectionDialogue(false);
        setActiveSectionLineIdx(null);
        return;
      }
      setActiveSectionLineIdx(lineIdx);
      const item = parsedSectionLines[lineIdx];
      const curIdx = lineIdx;
      lineIdx++;

      playDialogueTurn(item.speaker, item.text, speechRate, () => {
        const delay = typeof window !== 'undefined' && /iphone|ipad|ipod|android/i.test(navigator.userAgent) ? 80 : 380;
        sectionDialogueTimerRef.current = setTimeout(playNext, delay);
      }, curIdx);
    };

    playNext();
  };

  const handlePlaySingleSectionLine = (speaker: string, text: string, idx: number) => {
    if (sectionDialogueTimerRef.current) {
      clearTimeout(sectionDialogueTimerRef.current);
      sectionDialogueTimerRef.current = null;
    }
    setIsPlayingSectionDialogue(false);
    stopGermanAudio();
    setActiveSectionLineIdx(idx);
    playDialogueTurn(speaker, text, speechRate, () => {
      setActiveSectionLineIdx(null);
    }, idx);
  };

  // Practice Speaking phrases aggregated from all lesson dialogues and key expressions
  const lessonPracticePhrases = useMemo(() => {
    const list: { speaker?: string; text: string; translation?: string; category?: string }[] = [];

    // 1. From Foto-Hörgeschichte
    lesson.fotoHoergeschichte?.transcript?.forEach(t => {
      list.push({
        speaker: t.speaker,
        text: t.text,
        category: 'Foto-Hörgeschichte'
      });
    });

    // 2. From Section dialogues
    parsedSectionLines.forEach(l => {
      list.push({
        speaker: l.speaker,
        text: l.text,
        category: `Mussawi ${activeSchritt}`
      });
    });

    // 3. From VideoClip key phrases & transcript
    if (activeVideoClip?.keyPhrases) {
      activeVideoClip.keyPhrases.forEach(kp => {
        list.push({
          speaker: 'Sayed Bashir',
          text: kp,
          category: 'Redemittel'
        });
      });
    }

    if (activeVideoClip?.germanTranscript) {
      activeVideoClip.germanTranscript.forEach((gt, idx) => {
        let sp = 'Sayed Bashir';
        let tx = gt;
        if (gt.includes(':')) {
          const parts = gt.split(':');
          sp = parts[0].trim();
          tx = parts.slice(1).join(':').trim();
        }
        const trans = activeVideoClip.translatedTranscript?.[idx];
        list.push({
          speaker: sp,
          text: tx,
          translation: trans ? (trans[language] || trans.en) : undefined,
          category: 'Video-Dialog'
        });
      });
    }

    // De-duplicate by text
    const seen = new Set<string>();
    return list.filter(item => {
      const clean = item.text.trim().toLowerCase();
      if (!clean || seen.has(clean)) return false;
      seen.add(clean);
      return true;
    });
  }, [lesson, parsedSectionLines, activeSchritt, activeVideoClip, language]);

  const mussawiTabs: { key: MussawiStep; label: string; desc: string }[] = [
    { key: 'A', label: 'A: Hören & Sprechen', desc: 'Mussawi A: Sprechen' },
    { key: 'B', label: 'B: Wortschatz', desc: 'Mussawi B: Wortschatz' },
    { key: 'C', label: 'C: Dialoge', desc: 'Mussawi C: Dialoge' },
    { key: 'D', label: 'D: Lesen & Text', desc: 'Mussawi D: Lesen' },
    { key: 'E', label: 'E: Grammatik', desc: 'Mussawi E: Schreiben' },
  ];

  return (
    <div className="grid grid-cols-12 gap-4 bg-[#F8FAFC]">
      {/* Main Center Section: 8 cols if right panel open, full width centered if right panel collapsed */}
      <div className={`col-span-12 space-y-4 transition-all duration-300 ${
        isPanelOpen ? 'lg:col-span-8' : 'max-w-4xl mx-auto w-full'
      }`}>
        {/* Lesson Title Header with Reading Size and Right Panel Toggle */}
        <div className="bg-white border border-slate-200 rounded shadow-xs p-3 sm:p-4 flex flex-wrap items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                Lektion {lesson.lektionNumber} • {lesson.level}
              </span>
              <span className="text-xs text-slate-500 font-medium">
                Mussawi-Didaktik & Dialog
              </span>
              {!isPanelOpen && (
                <span className="text-[10px] font-bold bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-200">
                  حالت مطالعه متمرکز در وسط صفحه
                </span>
              )}
            </div>
            <h2 className={`font-bold text-slate-900 mt-1 tracking-tight ${
              readingSize === 'large' ? 'text-lg sm:text-xl' : readingSize === 'xl' ? 'text-xl sm:text-2xl' : 'text-base sm:text-lg'
            }`}>
              {lesson.title}
            </h2>
            <p className="text-xs text-slate-600 mt-0.5">
              {lesson.subTitle}
            </p>
          </div>

          <div className="flex items-center gap-2">
            {/* Practice Speaking Button */}
            <button
              onClick={() => {
                setIsPracticeSpeakingOpen(prev => !prev);
                if (!isPracticeSpeakingOpen) {
                  setTimeout(() => {
                    practiceSpeakingRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                  }, 100);
                }
              }}
              className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                isPracticeSpeakingOpen
                  ? 'bg-rose-600 text-white border-rose-700 shadow-xs'
                  : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
              }`}
              title="تمرین مکالمه و مقایسه تلفظ صوتی با میکروفون"
            >
              <Mic size={13} className={isPracticeSpeakingOpen ? 'animate-pulse' : ''} />
              <span className="hidden sm:inline">
                {isPracticeSpeakingOpen ? 'بستن تمرین مکالمه' : 'تمرین مکالمه (میکروفون)'}
              </span>
            </button>

            {/* Reading Font Size Adjuster */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 border border-slate-200 text-xs font-bold" title="تنظیم اندازه خط برای خواندن آسان">
              <span className="px-1 text-slate-400"><Type size={12} /></span>
              {(['normal', 'large', 'xl'] as const).map((sz) => (
                <button
                  key={sz}
                  onClick={() => setReadingSize(sz)}
                  className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                    readingSize === sz ? 'bg-blue-600 text-white shadow-xs' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {sz === 'normal' ? 'A' : sz === 'large' ? 'A+' : 'A++'}
                </button>
              ))}
            </div>

            {/* Right Panel Toggle Button */}
            <button
              onClick={togglePanel}
              className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
                isPanelOpen
                  ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                  : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
              }`}
              title={isPanelOpen ? 'خورد کردن منوی واژگان راست برای باز شدن فضای درس' : 'نمایش منوی واژگان راست'}
            >
              {isPanelOpen ? <PanelRightClose size={13} /> : <PanelRightOpen size={13} />}
              <span className="hidden sm:inline">
                {isPanelOpen ? 'خورد کردن منوی راست' : 'نمایش واژگان'}
              </span>
            </button>

            <button
              onClick={() => playHighGermanAudio(lesson.title, speechRate)}
              className="p-1.5 rounded-full bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-600 border border-slate-200 transition-colors cursor-pointer shrink-0"
              title="Titel anhören"
            >
              <Volume2 size={16} />
            </button>
          </div>
        </div>

        {/* 1. Interactive Video & Audio Studio Player - Prominent on screen */}
        <div className="space-y-1">
          <div className="flex items-center justify-between px-1 text-xs">
            <span className="font-bold text-slate-800 flex items-center gap-1.5">
              <Video size={14} className="text-blue-600" />
              <span>ویدیو و استودیوی دیالوگ درس (Video & Dialog-Studio)</span>
            </span>
            <span className="text-[10px] text-slate-500">
              قابل استفاده در همه کشورها به صورت کاملاً آفلاین
            </span>
          </div>
          <LessonVideoPlayer
            videoClip={activeVideoClip}
            language={language}
            speechRate={speechRate}
            lessonTitle={lesson.title}
          />
        </div>

        {/* 2. Interactive Practice Speaking with Microphone Deck */}
        <div ref={practiceSpeakingRef} className="space-y-1">
          {isPracticeSpeakingOpen ? (
            <PracticeSpeaking
              lessonTitle={lesson.title}
              availablePhrases={lessonPracticePhrases}
              activePhraseText={activePracticePhrase}
              language={language}
              speechRate={speechRate}
              onClose={() => setIsPracticeSpeakingOpen(false)}
            />
          ) : (
            <div className="bg-white border border-slate-200 rounded-lg p-3 flex flex-wrap items-center justify-between gap-3 shadow-xs">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0">
                  <Mic size={16} />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                    تمرین مکالمه و مقایسه تلفظ با میکروفون (Sprechtraining)
                  </h4>
                  <p className="text-[11px] text-slate-500">
                    صدای خود را ضبط کنید، با تلفظ اصیل آلمانی گویندگان (مرد و زن) مقایسه کنید و نمره بگیرید.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsPracticeSpeakingOpen(true)}
                className="px-3 py-1.5 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <Mic size={13} />
                <span>شروع تمرین مکالمه با میکروفون</span>
              </button>
            </div>
          )}
        </div>

        {/* 3. Foto-Hörgeschichte Card (Styled matching Design HTML) */}
        <div className="bg-white border border-slate-200 rounded shadow-sm overflow-hidden flex flex-col sm:flex-row sm:h-52">
          {/* Visual Storyboard Thumbnail */}
          <div className="w-full sm:w-1/3 bg-slate-800 relative group cursor-pointer flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <button
                onClick={handlePlayFullStory}
                className="w-12 h-12 bg-white hover:bg-blue-50 rounded-full flex items-center justify-center shadow-lg transition-transform transform group-hover:scale-105 cursor-pointer"
                title={isPlayingAudioStory ? 'Audio pausieren' : 'Foto-Hörgeschichte abspielen'}
              >
                {isPlayingAudioStory ? (
                  <Pause size={18} className="text-blue-600" />
                ) : (
                  <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-blue-600 border-b-[8px] border-b-transparent ml-1" />
                )}
              </button>
              <span className="text-[11px] font-bold text-white mt-2 drop-shadow-sm">
                {isPlayingAudioStory ? 'Wiedergabe läuft...' : 'Audio abspielen'}
              </span>
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/70 text-white text-[10px] font-medium truncate">
              Foto-Hörgeschichte: {lesson.fotoHoergeschichte.imageTheme}
            </div>
          </div>

          {/* Synchronized Audio Transcription */}
          <div className="w-full sm:w-2/3 p-4 flex flex-col bg-white">
            <div className="flex items-center justify-between mb-1.5">
              <div className="text-[10px] font-bold text-blue-600 uppercase tracking-wider flex items-center gap-1.5">
                <Headphones size={12} />
                <span>Audio-Transkription & Untertitel</span>
              </div>
              <span className="text-[10px] text-slate-500 font-mono">
                {lesson.fotoHoergeschichte.audioDuration}
              </span>
            </div>

            <div className="flex-1 bg-slate-50 rounded p-3 text-xs leading-relaxed overflow-y-auto border border-slate-100 max-h-36 space-y-2">
              {lesson.fotoHoergeschichte.transcript.map((line, idx) => {
                const isActive = activeTranscriptIndex === idx;
                const gender = detectSpeakerGender(line.speaker, idx);
                return (
                  <div
                    key={idx}
                    onClick={() => handlePlaySingleLine(line.speaker, line.text, idx)}
                    className={`p-1.5 rounded cursor-pointer transition-colors flex items-start justify-between gap-2 ${
                      isActive
                        ? 'bg-blue-100 text-blue-950 font-medium border-l-3 border-blue-600 shadow-xs'
                        : 'hover:bg-slate-200/60 text-slate-800'
                    }`}
                  >
                    <div className="flex items-start gap-1.5 min-w-0">
                      <span className={`inline-flex items-center gap-0.5 text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 mt-0.5 ${
                        gender === 'female'
                          ? 'bg-purple-100 text-purple-800 border border-purple-200'
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}>
                        {gender === 'female' ? '♀ زن' : '♂ مرد'}
                      </span>
                      <p className="leading-snug">
                        <span className="font-bold text-slate-900 mr-1">{line.speaker}:</span>
                        <span>{line.text}</span>
                      </p>
                    </div>
                    <div className="flex items-center gap-1 shrink-0 mt-0.5">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleOpenPracticeSpeaking(line.text, line.speaker);
                        }}
                        className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                        title="تمرین تلفظ این جمله با میکروفون (Sprechen üben)"
                      >
                        <Mic size={12} />
                      </button>
                      <Volume2 size={12} className={`shrink-0 ${isActive ? 'text-blue-600' : 'text-slate-400 opacity-60 hover:opacity-100'}`} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Localized Story Summary */}
            <div className="mt-2 text-[11px] text-slate-600 italic bg-white p-2 rounded border border-slate-100 flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5 flex-1 min-w-0" dir={isRTL(grammarSubtitleLang) ? 'rtl' : 'ltr'}>
                <Info size={12} className="text-blue-500 shrink-0" />
                <span className="truncate">
                  {getTranslation(lesson.fotoHoergeschichte.summary, grammarSubtitleLang)}
                </span>
              </div>
              <div className="flex items-center gap-1 shrink-0">
                {(['prs', 'fa', 'en'] as LanguageCode[]).map(lCode => (
                  <button
                    key={lCode}
                    onClick={() => setGrammarSubtitleLang(lCode)}
                    className={`text-[9px] px-1.5 py-0.5 rounded font-bold border transition-colors cursor-pointer ${
                      grammarSubtitleLang === lCode
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    {lCode === 'prs' ? 'دری' : lCode === 'fa' ? 'فارسی' : 'EN'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 2. Mussawi 5-Schritte Navigation (Mobile 5-column grid, no clipping) */}
        <div className="grid grid-cols-5 gap-1 sm:gap-2">
          {mussawiTabs.map((tab) => {
            const isActive = activeSchritt === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveSchritt(tab.key)}
                className={`py-2 px-1 rounded text-center text-xs font-bold transition-all cursor-pointer flex flex-col items-center justify-center ${
                  isActive
                    ? 'bg-blue-600 text-white ring-2 ring-blue-200 shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
                }`}
              >
                <span className="text-[11px] sm:text-xs font-black">Schritt {tab.key}</span>
                <span className="text-[9px] sm:text-[10px] font-normal truncate max-w-full opacity-90 hidden sm:inline">
                  {tab.key === 'A' ? 'Hören' : tab.key === 'B' ? 'Wortschatz' : tab.key === 'C' ? 'Dialoge' : tab.key === 'D' ? 'Lesen' : 'Grammatik'}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3. Active Schritt Content Card */}
        <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
            <div>
              <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider">
                {currentSection.title}
              </span>
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                Schwerpunkt: {currentSection.focus}
              </h3>
            </div>
            <span className="text-[11px] font-mono bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
              Schritt {activeSchritt}
            </span>
          </div>

          {/* Localized Pedagogical Description */}
          <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700 flex items-start gap-2">
            <Sparkles size={14} className="text-blue-500 shrink-0 mt-0.5" />
            <p>
              {currentSection.description[language] || currentSection.description.en}
            </p>
          </div>

          {/* Interactive Dual-Voice Dialogue Player & Content */}
          {currentSection.content && (
            <div className="p-3.5 bg-white rounded-lg border border-slate-200 shadow-xs space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
                <div className="flex items-center gap-1.5">
                  <Users size={14} className="text-blue-600" />
                  <span className="font-bold text-slate-900 text-xs sm:text-sm">
                    {activeSchritt === 'C' ? 'گفتگو و مکالمه دونفره (صدای زن و مرد)' : 'Musterdialog & Sprachstrukturen'}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-50 text-indigo-700 font-medium border border-indigo-200">
                    دو صدای مجزا
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={handlePlaySectionDialogue}
                    className={`flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-md transition-colors cursor-pointer ${
                      isPlayingSectionDialogue 
                        ? 'bg-amber-600 text-white shadow-xs' 
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-xs'
                    }`}
                  >
                    {isPlayingSectionDialogue ? <Pause size={12} /> : <Play size={12} />}
                    <span>{isPlayingSectionDialogue ? 'توقف پخش' : 'پخش دیالوگ کامل'}</span>
                  </button>
                </div>
              </div>

              {/* Interactive Lines List */}
              <div className="space-y-1.5">
                {parsedSectionLines.map((lineItem, idx) => {
                  const isActive = activeSectionLineIdx === idx;
                  const isFemale = lineItem.gender === 'female';

                  if (lineItem.isNote) {
                    return (
                      <div
                        key={idx}
                        onClick={() => handlePlaySingleSectionLine(lineItem.speaker, lineItem.text, idx)}
                        className={`p-2.5 rounded-lg cursor-pointer transition-all flex items-start justify-between gap-2 border ${
                          isActive
                            ? 'bg-amber-50 border-amber-400 shadow-xs ring-1 ring-amber-300'
                            : 'bg-amber-50/50 hover:bg-amber-50 border-amber-200/70 text-slate-800'
                        }`}
                      >
                        <div className="flex items-start gap-2 min-w-0">
                          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300 shrink-0 mt-0.5">
                            <Info size={11} />
                            <span>نکته / ساختار</span>
                          </span>
                          <div className="min-w-0">
                            <span className="font-bold text-xs text-amber-950 mr-1.5 font-sans">
                              {lineItem.speaker}:
                            </span>
                            <span className={`text-slate-800 font-sans leading-relaxed ${
                              readingSize === 'large' ? 'text-sm sm:text-base' : readingSize === 'xl' ? 'text-base sm:text-lg' : 'text-xs'
                            }`}>
                              {lineItem.text}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 shrink-0 mt-1">
                          <Volume2 size={13} className={`transition-colors ${
                            isActive ? 'text-amber-700 animate-pulse' : 'text-slate-400 hover:text-amber-700'
                          }`} />
                        </div>
                      </div>
                    );
                  }

                  return (
                    <div
                      key={idx}
                      onClick={() => handlePlaySingleSectionLine(lineItem.speaker, lineItem.text, idx)}
                      className={`p-2 rounded-lg cursor-pointer transition-all flex items-start justify-between gap-2 border ${
                        isActive
                          ? 'bg-blue-50 border-blue-400 shadow-xs ring-1 ring-blue-300'
                          : 'bg-slate-50/70 hover:bg-slate-100 border-slate-200/80 text-slate-800'
                      }`}
                    >
                      <div className="flex items-start gap-2 min-w-0">
                        <span className={`inline-flex items-center gap-0.5 text-[10px] font-bold px-2 py-0.5 rounded shrink-0 mt-0.5 ${
                          isFemale
                            ? 'bg-purple-100 text-purple-800 border border-purple-200'
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {isFemale ? '♀ خانم' : '♂ آقا'}
                        </span>
                        <div className="min-w-0">
                          <span className="font-bold text-xs text-slate-900 mr-1.5 font-sans">
                            {lineItem.speaker}:
                          </span>
                          <span className={`font-mono leading-relaxed ${
                            readingSize === 'large' ? 'text-sm sm:text-base' : readingSize === 'xl' ? 'text-base sm:text-lg' : 'text-xs'
                          }`}>
                            {lineItem.text}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 shrink-0 mt-1">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenPracticeSpeaking(lineItem.text, lineItem.speaker);
                          }}
                          className="p-1 rounded text-slate-400 hover:text-rose-600 hover:bg-rose-50 transition-colors cursor-pointer"
                          title="تمرین تلفظ این جمله با میکروفون (Sprechen üben)"
                        >
                          <Mic size={13} />
                        </button>
                        <Volume2 size={13} className={`transition-colors ${
                          isActive ? 'text-blue-600 animate-pulse' : 'text-slate-400 hover:text-blue-600'
                        }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Authentic Reading Text Excerpt (for Section D or when available) */}
          {currentSection.readingText && (
            <div className="p-3.5 bg-blue-50/50 rounded border border-blue-100 space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="font-bold text-blue-900 uppercase">
                  {currentSection.readingText.type}
                </span>
                <span className="text-blue-600 font-mono text-[10px]">
                  Authentisches Lesematerial
                </span>
              </div>
              <h4 className="font-bold text-xs text-slate-900">
                {currentSection.readingText.title}
              </h4>
              <p className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded border border-blue-100/70">
                {currentSection.readingText.body}
              </p>
            </div>
          )}

          {/* Formula Grammar Snippet / Schritt E (Matching Design HTML dark formula banner) */}
          {(() => {
            const activeGrammar = currentSection.grammarSnippet || currentSection.grammarRule || (
              activeSchritt === 'E' ? GRAMMAR_RULES.find(r => r.level === lesson.level && r.lektion === lesson.lektionNumber) : null
            );
            if (!activeGrammar) return null;
            const explanationText = getTranslation(activeGrammar.explanation, grammarSubtitleLang);
            const rtl = isRTL(grammarSubtitleLang);

            return (
              <div className="border border-blue-100 rounded shadow-xs p-3.5 bg-white space-y-3">
                <div className="flex flex-wrap justify-between items-center gap-2">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-xs text-slate-900">
                      {activeGrammar.germanTitle}
                    </h4>
                    <button
                      onClick={() => playHighGermanAudio(activeGrammar.germanTitle, speechRate)}
                      className="text-slate-400 hover:text-blue-600 p-0.5 cursor-pointer"
                      title="Titel vorlesen"
                    >
                      <Volume2 size={12} />
                    </button>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] font-mono bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-bold">
                      Formel: {activeGrammar.id}
                    </span>
                  </div>
                </div>

                {/* Language Switcher Bar for Grammar */}
                <div className="flex flex-wrap items-center justify-between gap-1.5 bg-slate-50 p-1.5 px-2.5 rounded border border-slate-200 text-xs">
                  <div className="flex items-center gap-1 text-[11px] font-bold text-slate-600">
                    <Languages size={13} className="text-blue-600" />
                    <span>زبان ترجمه زیرنویس:</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1">
                    {[
                      { code: 'prs' as LanguageCode, label: 'دری' },
                      { code: 'fa' as LanguageCode, label: 'فارسی' },
                      { code: 'en' as LanguageCode, label: 'EN' },
                      { code: 'ar' as LanguageCode, label: 'العربية' },
                      { code: 'tr' as LanguageCode, label: 'TR' },
                      { code: 'es' as LanguageCode, label: 'ES' },
                      { code: 'ps' as LanguageCode, label: 'پښتو' }
                    ].map(l => (
                      <button
                        key={l.code}
                        onClick={() => setGrammarSubtitleLang(l.code)}
                        className={`text-[10px] px-1.5 py-0.5 rounded font-bold border transition-colors cursor-pointer ${
                          grammarSubtitleLang === l.code
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mathematical Formula Banner */}
                <div className="p-3 bg-slate-900 rounded font-mono text-center text-xs tracking-wider">
                  <span className="text-blue-400 font-bold">
                    {activeGrammar.formula}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                  {/* German rule */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100 pb-1">
                      Deutsche Regel / Standard
                    </div>
                    <p className="text-xs text-slate-700 leading-normal">
                      {activeGrammar.explanation.de || activeGrammar.explanation.en}
                    </p>
                  </div>

                  {/* Localized Explanation with Selectable Subtitle & RTL */}
                  <div className="space-y-1">
                    <div className="text-[10px] font-bold text-blue-600 uppercase border-b border-slate-100 pb-1 flex justify-between items-center">
                      <span>توضیحات گرامر ({grammarSubtitleLang.toUpperCase()})</span>
                      {rtl && <span className="text-[9px] bg-blue-50 text-blue-700 px-1 rounded font-normal">RTL</span>}
                    </div>
                    <p 
                      className={`text-xs text-slate-700 leading-relaxed font-sans ${rtl ? 'text-right' : 'text-left'}`}
                      dir={rtl ? 'rtl' : 'ltr'}
                    >
                      {explanationText}
                    </p>
                  </div>
                </div>

                {/* Examples with breakdown and dual subtitle */}
                {activeGrammar.examples && activeGrammar.examples.length > 0 && (
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] font-bold text-slate-400 uppercase border-b border-slate-100 pb-1">
                      Beispiele & Satzanalyse (زیرنویس کلمه به کلمه و روان)
                    </div>
                    {activeGrammar.examples.map((ex, exIdx) => {
                      const literalEx = getTranslation(ex.literalTranslation, grammarSubtitleLang);
                      const fluentEx = getTranslation(ex.fluentTranslation, grammarSubtitleLang);

                      return (
                        <div key={exIdx} className="p-2.5 bg-blue-50/50 rounded border border-blue-100 text-xs space-y-1.5">
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-slate-900">{ex.german}</span>
                            <button
                              onClick={() => playHighGermanAudio(ex.german, speechRate)}
                              className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                              title="Satz anhören"
                            >
                              <Volume2 size={13} />
                            </button>
                          </div>
                          <div className="text-[10px] font-mono text-blue-800 bg-white/80 px-2 py-0.5 rounded border border-blue-100">
                            {ex.formulaBreakdown}
                          </div>
                          <div 
                            className={`grid grid-cols-1 gap-1 text-[11px] pt-1 border-t border-blue-100/60 ${rtl ? 'text-right font-sans' : 'text-left'}`}
                            dir={rtl ? 'rtl' : 'ltr'}
                          >
                            <div className="text-slate-500 flex items-baseline gap-1">
                              <span className="font-bold text-[9px] uppercase text-slate-400 shrink-0">
                                {rtl ? 'کلمه به کلمه:' : 'Wort-für-Wort:'}
                              </span>
                              <span className="italic">{literalEx}</span>
                            </div>
                            <div className="text-slate-800 font-medium flex items-baseline gap-1">
                              <span className="font-bold text-[9px] uppercase text-emerald-600 shrink-0">
                                {rtl ? 'روان:' : 'Fließend:'}
                              </span>
                              <span>{fluentEx}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">
                    قاعده گرامر مربوط به درس {lesson.lektionNumber} (سطح {lesson.level})
                  </span>
                  <button
                    onClick={() => onNavigateTab('grammar')}
                    className="text-xs font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded transition-colors flex items-center gap-1.5 cursor-pointer"
                  >
                    <BookOpen size={13} />
                    <span>مشاهده در کتاب گرامر مستقل</span>
                  </button>
                </div>
              </div>
            );
          })()}

          {/* Practice Tasks */}
          {currentSection.practiceTasks && currentSection.practiceTasks.length > 0 && (
            <div className="space-y-1.5 pt-1">
              <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                Didaktische Übungsaufgaben (Mussawi-Methode)
              </div>
              <ul className="space-y-1 text-xs text-slate-700">
                {currentSection.practiceTasks.map((task, taskIdx) => (
                  <li key={taskIdx} className="flex items-start gap-2 bg-slate-50 p-2 rounded border border-slate-100">
                    <span className="font-bold text-blue-600 shrink-0">{taskIdx + 1}.</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* 4. Situational Video-Clip Section */}
        {lesson.videoClip && (
          <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <div className="flex items-center gap-2">
                <Video size={16} className="text-blue-600" />
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                  Video-Clip: {lesson.videoClip.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">
                  {lesson.videoClip.duration}
                </span>
                <span className="text-[10px] uppercase font-bold px-1.5 py-0.5 rounded bg-blue-100 text-blue-700">
                  {lesson.videoClip.category}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-600 italic">
              Szenario: {lesson.videoClip.scenario}
            </p>

            {/* Video Dialogue Transcript */}
            <div className="bg-slate-50 rounded border border-slate-100 p-3 max-h-48 overflow-y-auto space-y-2">
              {lesson.videoClip.germanTranscript.map((line, lIdx) => {
                const trans = lesson.videoClip.translatedTranscript[lIdx];
                let speaker = lIdx % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
                let textToSpeak = line;
                if (line.includes(':')) {
                  const parts = line.split(':');
                  speaker = parts[0].trim();
                  textToSpeak = parts.slice(1).join(':').trim();
                }
                const gender = detectSpeakerGender(speaker, lIdx);

                return (
                  <div key={lIdx} className="text-xs border-b border-slate-100 last:border-b-0 pb-1.5">
                    <div className="flex items-center justify-between text-slate-900 font-medium">
                      <div className="flex items-center gap-1.5 min-w-0">
                        <span className={`text-[9px] font-bold px-1.5 py-0.2 rounded shrink-0 ${
                          gender === 'female' 
                            ? 'bg-purple-100 text-purple-800 border border-purple-200' 
                            : 'bg-blue-100 text-blue-800 border border-blue-200'
                        }`}>
                          {gender === 'female' ? '♀ زن' : '♂ مرد'}
                        </span>
                        <span className="truncate">{line}</span>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleOpenPracticeSpeaking(textToSpeak, speaker);
                          }}
                          className="text-slate-400 hover:text-rose-600 p-0.5 cursor-pointer"
                          title="تمرین تلفظ این جمله با میکروفون (Sprechen üben)"
                        >
                          <Mic size={12} />
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            playDialogueTurn(speaker, textToSpeak, speechRate, undefined, lIdx);
                          }}
                          className="text-slate-400 hover:text-blue-600 p-0.5 cursor-pointer"
                          title={gender === 'female' ? 'شنیدن با صدای زن' : 'شنیدن با صدای مرد'}
                        >
                          <Volume2 size={12} />
                        </button>
                      </div>
                    </div>
                    {trans && (
                      <p className="text-[11px] text-slate-500 mt-0.5" dir={isRTL(language) ? 'rtl' : 'ltr'}>
                        {trans[language] || trans.en}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 5. Lesson Micro-Exercises */}
        {lesson.exercises && lesson.exercises.length > 0 && (
          <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-2">
              <h3 className="font-bold text-xs sm:text-sm text-slate-900 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600" />
                <span>Interaktive Verständnisfragen ({lesson.exercises.length})</span>
              </h3>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => {
                    setUserAnswers({});
                    setIsAnswerChecked(false);
                  }}
                  className="text-[10px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw size={11} />
                  <span>Zurücksetzen</span>
                </button>
              </div>
            </div>

            <div className="space-y-3">
              {(lesson.exercises || []).map((ex, exIdx) => {
                const selected = userAnswers[ex.id];
                const isCorrect = selected === ex.correctAnswer;
                return (
                  <div key={ex.id} className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2">
                    <div className="text-xs font-semibold text-slate-800 flex items-start gap-1.5">
                      <span className="text-blue-600 font-bold">{exIdx + 1}.</span>
                      <span>{ex.prompt}</span>
                    </div>

                    <div className="text-[11px] text-slate-500 italic">
                      {ex.instruction[language] || ex.instruction.en}
                    </div>

                    {/* Options list */}
                    {ex.options && (
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
                        {ex.options.map((opt) => {
                          const isOptSelected = selected === opt;
                          return (
                            <button
                              key={opt}
                              onClick={() => {
                                setUserAnswers(prev => ({ ...prev, [ex.id]: opt }));
                                setIsAnswerChecked(false);
                              }}
                              className={`text-left p-2 rounded text-xs font-medium border transition-colors cursor-pointer ${
                                isOptSelected
                                  ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                              }`}
                            >
                              {opt}
                            </button>
                          );
                        })}
                      </div>
                    )}

                    {/* Feedback when checked */}
                    {isAnswerChecked && selected && (
                      <div className={`p-2 rounded text-xs mt-2 border ${
                        isCorrect
                          ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                          : 'bg-rose-50 border-rose-200 text-rose-900'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          {isCorrect ? (
                            <>
                              <CheckCircle2 size={14} className="text-emerald-600" />
                              <span>Richtig! Sehr gut gelöst.</span>
                            </>
                          ) : (
                            <>
                              <XCircle size={14} className="text-rose-600" />
                              <span>Leider falsch. Richtige Antwort: {String(ex.correctAnswer)}</span>
                            </>
                          )}
                        </div>
                        <p className="text-[11px] leading-relaxed">
                          {ex.explanation[language] || ex.explanation.en}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => setIsAnswerChecked(true)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-xs shadow-xs transition-colors cursor-pointer"
            >
              Antworten überprüfen
            </button>
          </div>
        )}

        {/* Mobile & Desktop Bottom Lesson Navigator */}
        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between border-b border-slate-100 pb-2">
            <span className="text-xs font-bold text-slate-800">
              راهنمای حرکت بین بخش‌ها و درس‌ها
            </span>
            <span className="text-[11px] text-blue-600 font-semibold bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
              مرحله {activeSchritt} از ۵
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            {/* Step navigation within this lesson */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
              {prevStepMap[activeSchritt] ? (
                <button
                  onClick={() => {
                    const prev = prevStepMap[activeSchritt];
                    if (prev) setActiveSchritt(prev);
                  }}
                  className="px-3 py-2 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <ChevronLeft size={14} />
                  <span>گام قبلی (Schritt {prevStepMap[activeSchritt]})</span>
                </button>
              ) : <div />}

              {nextStepMap[activeSchritt] && (
                <button
                  onClick={() => {
                    const next = nextStepMap[activeSchritt];
                    if (next) setActiveSchritt(next);
                  }}
                  className="px-3 py-2 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>گام بعدی (Schritt {nextStepMap[activeSchritt]})</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>

            {/* Inter-lesson navigation */}
            <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-end pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
              {prevLesson && onSelectLesson && (
                <button
                  onClick={() => {
                    onSelectLesson(prevLesson.id);
                    setActiveSchritt('A');
                  }}
                  className="px-3 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                  title={`درس قبلی: ${prevLesson.title}`}
                >
                  <ChevronLeft size={14} />
                  <span>درس قبلی ({prevLesson.lektionNumber})</span>
                </button>
              )}

              {nextLesson && onSelectLesson && (
                <button
                  onClick={() => {
                    onSelectLesson(nextLesson.id);
                    setActiveSchritt('A');
                  }}
                  className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
                  title={`درس بعدی: ${nextLesson.title}`}
                >
                  <span>درس بعدی ({nextLesson.lektionNumber})</span>
                  <ChevronRight size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 4-Column Right Column (Matching Design HTML exactly) or Collapsed Dock */}
      {isPanelOpen ? (
        <div className="col-span-12 lg:col-span-4 flex flex-col space-y-4 animate-in fade-in duration-200">
          {/* Glossar Card */}
          <div className="bg-white border border-slate-200 rounded shadow-sm flex-1 flex flex-col overflow-hidden min-h-[380px]">
            <div className="p-3 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-500">
                  Glossar (Lektion {lesson.lektionNumber})
                </h4>
                <span className="text-[10px] text-blue-600 font-bold uppercase">
                  {displayedGlossary.length} NEUE WÖRTER
                </span>
              </div>
              <button
                onClick={togglePanel}
                className="text-slate-400 hover:text-slate-700 p-1 rounded hover:bg-slate-200 transition-colors cursor-pointer"
                title="خورد کردن این منو برای باز شدن فضای درس"
              >
                <PanelRightClose size={14} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto max-h-[460px]">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-100 text-[10px] text-slate-500">
                    <th className="p-2 font-medium border-b border-slate-200">Wort (Artikel)</th>
                    <th className="p-2 font-medium border-b border-slate-200">Übersetzung</th>
                  </tr>
                </thead>
                <tbody className="text-[11px]">
                  {displayedGlossary.map((entry) => {
                    let genderClass = 'text-slate-600';
                    if (entry.article === 'der') genderClass = 'text-blue-500';
                    else if (entry.article === 'die') genderClass = 'text-pink-500';
                    else if (entry.article === 'das') genderClass = 'text-emerald-500';

                    return (
                      <tr
                        key={entry.id}
                        className="border-b border-slate-100 hover:bg-slate-50 transition-colors group cursor-pointer"
                        onClick={() => playHighGermanAudio(`${entry.article} ${entry.word}`, speechRate)}
                      >
                        <td className="p-2 font-bold text-slate-900">
                          {entry.article && (
                            <span className={`${genderClass} mr-1 font-bold`}>
                              {entry.article}
                            </span>
                          )}
                          <span>{entry.word}</span>
                          {entry.plural && (
                            <span className="text-[10px] text-slate-400 font-normal ml-1">
                              , {entry.plural}
                            </span>
                          )}
                        </td>
                        <td className="p-2 text-slate-500 flex items-center justify-between">
                          <span>{entry.translation[language] || entry.translation.en}</span>
                          <Volume2 size={11} className="text-slate-400 opacity-0 group-hover:opacity-100 ml-1 shrink-0" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center">
              <button
                onClick={() => onNavigateTab('glossary')}
                className="text-[11px] font-bold text-blue-600 hover:text-blue-800 cursor-pointer"
              >
                Gesamten Wortschatz aufrufen →
              </button>
            </div>
          </div>

          {/* Exam Readiness Widget (Matching Design HTML exactly) */}
          <div className="bg-emerald-600 text-white p-4 rounded-lg shadow-md">
            <div className="flex items-center space-x-3 mb-2">
              <div className="p-2 bg-white/20 rounded">
                <Award size={18} className="text-white" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wide">
                  Nächste Prüfung
                </div>
                <div className="text-[10px] opacity-80">
                  Zertifikat Deutsch {lesson.level} Simulation
                </div>
              </div>
            </div>

            <div className="bg-black/20 h-1.5 rounded-full overflow-hidden my-2">
              <div className="bg-white h-full w-[85%]" />
            </div>

            <div className="mt-2 flex justify-between text-[10px] font-medium">
              <span>Prüfungsreife</span>
              <span className="font-bold">85%</span>
            </div>

            <button
              onClick={() => onNavigateTab('exams')}
              className="w-full mt-3 py-1.5 bg-white hover:bg-slate-100 text-emerald-800 text-xs font-bold rounded shadow-xs transition-colors cursor-pointer text-center"
            >
              Modellsatz starten →
            </button>
          </div>
        </div>
      ) : (
        <div className="col-span-12 text-center py-3">
          <button
            onClick={togglePanel}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-blue-600 hover:border-blue-300 shadow-xs text-xs font-bold transition-all cursor-pointer hover:shadow-sm"
          >
            <PanelRightOpen size={14} className="text-blue-600" />
            <span>نمایش پنل کناری واژگان و آمادگی آزمون (باز کردن ستون راست)</span>
          </button>
        </div>
      )}
    </div>
  );
};
