import React, { useState, useEffect, useRef } from 'react';
import { VideoClip, LanguageCode } from '../types';
import { playDialogueTurn, detectSpeakerGender, stopSpeech, playHighGermanAudio } from '../utils/speech';
import { getTranslation, isRTL } from '../utils/translationHelper';
import { 
  Play, 
  Pause, 
  RotateCcw, 
  Volume2, 
  Maximize2, 
  Minimize2, 
  Video, 
  Languages, 
  Sparkles, 
  SkipForward, 
  SkipBack, 
  Tv, 
  Globe,
  Radio,
  CheckCircle2,
  Clock
} from 'lucide-react';

interface LessonVideoPlayerProps {
  videoClip: VideoClip;
  language: LanguageCode;
  speechRate: number;
  lessonTitle: string;
  onShare?: () => void;
}

const AVAILABLE_LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'prs', label: 'دری', flag: '🇦🇫' },
  { code: 'fa', label: 'فارسی', flag: '🇮🇷' },
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'tr', label: 'TR', flag: '🇹🇷' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫' },
  { code: 'es', label: 'ES', flag: '🇪🇸' }
];

export const LessonVideoPlayer: React.FC<LessonVideoPlayerProps> = ({
  videoClip,
  language: initialLanguage,
  speechRate: initialSpeechRate,
  lessonTitle,
  onShare
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeLineIdx, setActiveLineIdx] = useState<number>(0);
  const [activeLang, setActiveLang] = useState<LanguageCode>(initialLanguage);
  const [playbackSpeed, setPlaybackSpeed] = useState<number>(initialSpeechRate || 0.9);
  const [viewMode, setViewMode] = useState<'interactive' | 'youtube'>('interactive');
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [autoAdvance, setAutoAdvance] = useState(true);
  
  // Elapsed video time simulator (seconds)
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const transcriptLines = videoClip.germanTranscript || [];
  const rtl = isRTL(activeLang);

  // Parse duration in seconds (e.g. "02:30" -> 150s)
  const totalDurationSeconds = React.useMemo(() => {
    if (!videoClip.duration) return Math.max(60, transcriptLines.length * 8);
    const parts = videoClip.duration.split(':').map(Number);
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      return parts[0] * 60 + parts[1];
    }
    return Math.max(60, transcriptLines.length * 8);
  }, [videoClip.duration, transcriptLines.length]);

  useEffect(() => {
    setActiveLang(initialLanguage);
  }, [initialLanguage]);

  // Reset when video clip changes
  useEffect(() => {
    stopSpeech();
    setIsPlaying(false);
    setActiveLineIdx(0);
    setElapsedSeconds(0);
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, [videoClip.title]);

  // Running clock interval while playing
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = setInterval(() => {
        setElapsedSeconds(prev => {
          if (prev >= totalDurationSeconds) {
            return totalDurationSeconds;
          }
          return prev + 1;
        });
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isPlaying, totalDurationSeconds]);

  // Extract speakers
  const speakersList = React.useMemo(() => {
    if (videoClip.speakers && videoClip.speakers.length >= 2) {
      return videoClip.speakers;
    }
    const found: string[] = [];
    transcriptLines.forEach(l => {
      if (l.includes(':')) {
        const s = l.split(':')[0].trim();
        if (!found.includes(s)) found.push(s);
      }
    });
    if (found.length >= 2) return found;
    if (found.length === 1) return [found[0], 'Dialogpartner'];

    const scen = `${videoClip.scenario || ''} ${videoClip.title || ''}`.toLowerCase();
    if (scen.includes('weber')) return ['Frau Weber', 'Sayed Bashir'];
    if (scen.includes('maria')) return ['Sayed Bashir', 'Maria'];
    if (scen.includes('lukas')) return ['Sayed Bashir', 'Lukas'];
    if (scen.includes('schuster') || scen.includes('hausmeister')) return ['Herr Schuster', 'Sayed Bashir'];
    return ['Sayed Bashir', 'Dialogpartnerin'];
  }, [videoClip.speakers, videoClip.scenario, videoClip.title, transcriptLines]);

  const activeSpeaker = React.useMemo(() => {
    const line = transcriptLines[activeLineIdx] || '';
    if (line.includes(':')) {
      return line.split(':')[0].trim();
    }
    return speakersList[activeLineIdx % speakersList.length];
  }, [transcriptLines, activeLineIdx, speakersList]);

  const activeDialogueContent = React.useMemo(() => {
    const line = transcriptLines[activeLineIdx] || '';
    if (line.includes(':')) {
      return line.split(':').slice(1).join(':').trim();
    }
    return line;
  }, [transcriptLines, activeLineIdx]);

  const activeTranslation = React.useMemo(() => {
    const transObj = videoClip.translatedTranscript?.[activeLineIdx];
    if (!transObj) return '';
    return getTranslation(transObj, activeLang);
  }, [videoClip.translatedTranscript, activeLineIdx, activeLang]);

  const autoAdvanceTimerRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  React.useEffect(() => {
    return () => {
      if (autoAdvanceTimerRef.current) {
        clearTimeout(autoAdvanceTimerRef.current);
        autoAdvanceTimerRef.current = null;
      }
      stopSpeech();
    };
  }, []);

  // Play line implementation
  const playCurrentLine = (index: number) => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }

    if (index >= transcriptLines.length) {
      setIsPlaying(false);
      setActiveLineIdx(0);
      setElapsedSeconds(totalDurationSeconds);
      return;
    }

    setActiveLineIdx(index);
    setIsPlaying(true);

    // Sync elapsed seconds proportional to index
    const approxSec = Math.floor((index / transcriptLines.length) * totalDurationSeconds);
    setElapsedSeconds(approxSec);

    const lineText = transcriptLines[index];
    let speaker = speakersList[index % speakersList.length];
    let textToSpeak = lineText;
    if (lineText.includes(':')) {
      const parts = lineText.split(':');
      speaker = parts[0].trim();
      textToSpeak = parts.slice(1).join(':').trim();
    }

    playDialogueTurn(speaker, textToSpeak, playbackSpeed, () => {
      if (autoAdvance && index + 1 < transcriptLines.length) {
        autoAdvanceTimerRef.current = setTimeout(() => {
          playCurrentLine(index + 1);
        }, 450);
      } else if (index + 1 >= transcriptLines.length) {
        setIsPlaying(false);
      }
    }, index);
  };

  const togglePlayPause = () => {
    if (autoAdvanceTimerRef.current) {
      clearTimeout(autoAdvanceTimerRef.current);
      autoAdvanceTimerRef.current = null;
    }
    if (isPlaying) {
      stopSpeech();
      setIsPlaying(false);
    } else {
      playCurrentLine(activeLineIdx);
    }
  };

  const handleRestart = () => {
    stopSpeech();
    setActiveLineIdx(0);
    setElapsedSeconds(0);
    playCurrentLine(0);
  };

  const handleLineClick = (idx: number) => {
    stopSpeech();
    playCurrentLine(idx);
  };

  const handleNextLine = () => {
    if (activeLineIdx < transcriptLines.length - 1) {
      stopSpeech();
      playCurrentLine(activeLineIdx + 1);
    }
  };

  const handlePrevLine = () => {
    if (activeLineIdx > 0) {
      stopSpeech();
      playCurrentLine(activeLineIdx - 1);
    }
  };

  const formatTime = (totalSec: number) => {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = transcriptLines.length > 0 
    ? Math.round(((activeLineIdx + 1) / transcriptLines.length) * 100) 
    : 0;

  const isSpeakerLeft = activeSpeaker === speakersList[0];

  return (
    <div 
      ref={containerRef}
      id="lesson-video-player"
      className={`bg-white border border-slate-200 rounded shadow-xs overflow-hidden transition-all ${
        isFullscreen ? 'fixed inset-0 z-50 p-4 bg-slate-950 text-white overflow-y-auto' : ''
      }`}
    >
      {/* Top Header Bar - High Density Studio Bar */}
      <div className="bg-slate-900 text-white px-3 py-2 flex flex-wrap items-center justify-between gap-2 text-xs select-none">
        <div className="flex items-center gap-2 min-w-0">
          <div className="p-1 bg-red-600 text-white rounded shrink-0 flex items-center justify-center animate-pulse">
            <Video size={13} />
          </div>
          <div className="truncate">
            <span className="font-bold text-slate-100">{videoClip.title}</span>
            <span className="ml-2 text-[10px] text-slate-400 font-mono">({videoClip.duration || '02:30'})</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 shrink-0">
          {/* Global / Offline Live Badge */}
          <div 
            className="flex items-center gap-1 bg-slate-800 text-emerald-400 px-2 py-0.5 rounded text-[10px] font-mono border border-slate-700"
            title="Dieser Videoplayer funktioniert weltweit und 100% offline ohne Blockaden"
          >
            <Radio size={11} className={`text-emerald-400 ${isPlaying ? 'animate-pulse' : ''}`} />
            <span>{isPlaying ? 'Wiedergabe aktiv' : 'Offline Studio'}</span>
          </div>

          {/* YouTube vs Interactive Simulator Mode Switcher */}
          {videoClip.youtubeId && (
            <div className="flex items-center bg-slate-800 rounded p-0.5 border border-slate-700">
              <button
                onClick={() => setViewMode('interactive')}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                  viewMode === 'interactive' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Video-Labor
              </button>
              <button
                onClick={() => {
                  stopSpeech();
                  setIsPlaying(false);
                  setViewMode('youtube');
                }}
                className={`px-2 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                  viewMode === 'youtube' ? 'bg-red-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                YouTube
              </button>
            </div>
          )}

          {/* Fullscreen Toggle */}
          <button
            onClick={() => setIsFullscreen(!isFullscreen)}
            className="p-1 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded border border-slate-700 transition-colors cursor-pointer"
            title="Vollbild umschalten"
          >
            {isFullscreen ? <Minimize2 size={12} /> : <Maximize2 size={12} />}
          </button>
        </div>
      </div>

      {/* Main Video Stage */}
      {viewMode === 'youtube' && videoClip.youtubeId ? (
        <div className="aspect-video bg-black w-full">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${videoClip.youtubeId}?rel=0&autoplay=1`}
            title={videoClip.title}
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        /* Standalone High-Tech Animated Video Laboratory Canvas */
        <div className="relative bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white p-3.5 sm:p-5 min-h-[240px] flex flex-col justify-between border-b border-slate-800 select-none overflow-hidden">
          {/* Ambient Studio Lighting Effect */}
          <div className="absolute top-0 left-1/4 w-96 h-40 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-40 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

          {/* Scenario Backdrop Header Tag */}
          <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pb-2 border-b border-slate-800/80">
            <span className="truncate max-w-[65%]">
              📍 <strong className="text-slate-200">Szene:</strong> {videoClip.scenario}
            </span>
            <div className="flex items-center gap-2 font-mono text-[11px]">
              <span className="text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40 flex items-center gap-1">
                <Clock size={10} />
                <span>{formatTime(elapsedSeconds)} / {formatTime(totalDurationSeconds)}</span>
              </span>
              <span className="text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-800/40">
                Satz {activeLineIdx + 1}/{transcriptLines.length}
              </span>
            </div>
          </div>

          {/* Interactive Animated Dialogue Theater Stage */}
          <div className="relative z-10 my-auto py-3 space-y-3">
            {/* Dual Speaking Characters Stage Display */}
            <div className="grid grid-cols-2 gap-3 items-center">
              {/* Speaker 1 (Left: e.g. Sayed Bashir) */}
              <div className={`p-2 rounded-lg border transition-all flex items-center gap-2.5 ${
                isSpeakerLeft 
                  ? 'bg-blue-950/70 border-blue-500 shadow-md ring-1 ring-blue-400/50 scale-[1.02]' 
                  : 'bg-slate-900/40 border-slate-800 opacity-60'
              }`}>
                <div className={`relative w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-transform ${
                  isSpeakerLeft && isPlaying ? 'scale-110 ring-2 ring-emerald-400 bg-blue-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {speakersList[0].charAt(0).toUpperCase()}
                  {isSpeakerLeft && isPlaying && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-ping" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-white truncate flex items-center gap-1">
                    <span>{speakersList[0]}</span>
                    {detectSpeakerGender(speakersList[0], 0) === 'female' ? (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 font-bold border border-purple-500/40">
                        ♀ صدای دلنشین خانم
                      </span>
                    ) : (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-300 font-bold border border-blue-500/40">
                        ♂ صدای دلنشین آقا
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">Dialogpartner</div>
                </div>
              </div>

              {/* Speaker 2 (Right: e.g. Frau Schneider / Dialogpartner) */}
              <div className={`p-2 rounded-lg border transition-all flex items-center gap-2.5 ${
                !isSpeakerLeft 
                  ? 'bg-indigo-950/70 border-indigo-500 shadow-md ring-1 ring-indigo-400/50 scale-[1.02]' 
                  : 'bg-slate-900/40 border-slate-800 opacity-60'
              }`}>
                <div className={`relative w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs shrink-0 transition-transform ${
                  !isSpeakerLeft && isPlaying ? 'scale-110 ring-2 ring-emerald-400 bg-indigo-600 text-white' : 'bg-slate-800 text-slate-300'
                }`}>
                  {(speakersList[1] || 'B').charAt(0).toUpperCase()}
                  {!isSpeakerLeft && isPlaying && (
                    <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-900 animate-ping" />
                  )}
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-xs text-white truncate flex items-center gap-1">
                    <span>{speakersList[1] || 'Dialogpartner'}</span>
                    {detectSpeakerGender(speakersList[1] || 'Frau', 1) === 'female' ? (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-purple-500/30 text-purple-300 font-bold border border-purple-500/40">
                        ♀ صدای دلنشین خانم
                      </span>
                    ) : (
                      <span className="text-[9px] px-1.5 py-0.2 rounded bg-blue-500/30 text-blue-300 font-bold border border-blue-500/40">
                        ♂ صدای دلنشین آقا
                      </span>
                    )}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">Dialogpartner</div>
                </div>
              </div>
            </div>

            {/* German Speech Bubble with Synchronized High-Contrast Subtitle */}
            <div className="bg-slate-900/90 border border-slate-700 rounded-lg p-3.5 space-y-2 relative shadow-lg">
              {/* Audio visualizer wave indicator in top-right */}
              <div className="absolute top-3 right-3 flex items-center gap-0.5 h-4">
                {[5, 14, 20, 10, 18, 8, 16, 11].map((h, i) => (
                  <div
                    key={i}
                    className={`w-0.5 rounded-full transition-all duration-150 ${
                      isPlaying ? 'bg-emerald-400 animate-pulse' : 'bg-slate-700'
                    }`}
                    style={{
                      height: isPlaying ? `${Math.max(4, h)}px` : '3px',
                      animationDelay: `${i * 80}ms`
                    }}
                  />
                ))}
              </div>

              {/* German sentence with active speaker label */}
              <div className="pr-16">
                <div className="text-[10px] uppercase tracking-wider text-blue-400 font-bold mb-0.5">
                  {activeSpeaker}:
                </div>
                <p className="text-sm sm:text-base font-bold text-white tracking-wide leading-relaxed drop-shadow-xs">
                  "{activeDialogueContent}"
                </p>
              </div>

              {/* Active Multi-language Subtitle Translation */}
              {activeTranslation && (
                <div 
                  className={`pt-2 border-t border-slate-800/80 text-xs text-amber-300 font-medium leading-normal ${
                    rtl ? 'text-right font-sans' : 'text-left'
                  }`}
                  dir={rtl ? 'rtl' : 'ltr'}
                >
                  <span className="text-[9px] uppercase tracking-wider text-slate-400 mr-1.5 font-mono">
                    [{activeLang.toUpperCase()}]:
                  </span>
                  <span>{activeTranslation}</span>
                </div>
              )}
            </div>
          </div>

          {/* Interactive Progress Timeline Bar */}
          <div className="relative z-10 w-full bg-slate-800 h-2 rounded-full overflow-hidden mb-2 cursor-pointer">
            <div 
              className="bg-gradient-to-r from-blue-500 to-emerald-400 h-full transition-all duration-300"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Control Bar - High Density Playback Controls */}
          <div className="relative z-10 flex flex-wrap items-center justify-between gap-2 pt-1">
            {/* Playback Controls */}
            <div className="flex items-center gap-1.5">
              <button
                onClick={handlePrevLine}
                disabled={activeLineIdx === 0}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Vorheriger Satz (Shift + Links)"
              >
                <SkipBack size={13} />
              </button>

              <button
                onClick={togglePlayPause}
                className="px-3.5 py-1.5 rounded bg-blue-600 hover:bg-blue-500 text-white font-bold flex items-center gap-1.5 text-xs shadow-md transition-transform active:scale-95 cursor-pointer"
              >
                {isPlaying ? <Pause size={13} /> : <Play size={13} />}
                <span>{isPlaying ? 'Pause' : 'Abspielen / پخش'}</span>
              </button>

              <button
                onClick={handleNextLine}
                disabled={activeLineIdx >= transcriptLines.length - 1}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 disabled:opacity-30 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Nächster Satz (Shift + Rechts)"
              >
                <SkipForward size={13} />
              </button>

              <button
                onClick={handleRestart}
                className="p-1.5 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                title="Von Beginn an neu abspielen"
              >
                <RotateCcw size={13} />
              </button>

              {/* Speed Switcher */}
              <div className="flex items-center bg-slate-800 rounded px-1.5 py-0.5 border border-slate-700 text-[10px]">
                <span className="text-slate-400 mr-1">Tempo:</span>
                {[0.75, 0.9, 1.1].map(spd => (
                  <button
                    key={spd}
                    onClick={() => setPlaybackSpeed(spd)}
                    className={`px-1 py-0.2 rounded font-mono font-bold cursor-pointer ${
                      playbackSpeed === spd ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {spd}x
                  </button>
                ))}
              </div>
            </div>

            {/* Subtitle Language Switcher inside Player */}
            <div className="flex items-center gap-1 bg-slate-900 p-1 rounded border border-slate-800">
              <Languages size={12} className="text-blue-400 shrink-0" />
              <div className="flex items-center gap-0.5">
                {AVAILABLE_LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setActiveLang(l.code)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold transition-colors cursor-pointer ${
                      activeLang === l.code
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-400 hover:bg-slate-800'
                    }`}
                    title={l.label}
                  >
                    {l.flag} {l.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Transcript List below video - High Density */}
      <div className="p-3 bg-slate-50 space-y-2">
        <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 border-b border-slate-200 pb-1.5">
          <div className="flex items-center gap-1.5">
            <span className="uppercase text-[10px] text-slate-500">Dialog-Drehbuch ({transcriptLines.length} Sätze):</span>
            <span className="text-[10px] text-blue-600 font-normal">Klicken zum Vorspielen</span>
          </div>
          <label className="flex items-center gap-1 cursor-pointer text-[10px] text-slate-600 select-none">
            <input
              type="checkbox"
              checked={autoAdvance}
              onChange={(e) => setAutoAdvance(e.target.checked)}
              className="rounded text-blue-600 text-[10px]"
            />
            <span>Automatisch weiter</span>
          </label>
        </div>

        <div className="space-y-1.5 max-h-52 overflow-y-auto pr-1">
          {transcriptLines.map((line, idx) => {
            const isActive = idx === activeLineIdx;
            const transObj = videoClip.translatedTranscript?.[idx];
            const transText = transObj ? getTranslation(transObj, activeLang) : '';

            return (
              <div
                key={idx}
                onClick={() => handleLineClick(idx)}
                className={`p-2 rounded border transition-all cursor-pointer text-xs ${
                  isActive
                    ? 'bg-blue-50 border-blue-300 shadow-xs ring-1 ring-blue-400/30'
                    : 'bg-white border-slate-200 hover:border-blue-200 hover:bg-slate-50/80'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="font-mono text-[10px] font-bold text-slate-400 shrink-0">
                      #{idx + 1}
                    </span>
                    {line.includes(':') ? (
                      <span className="flex items-baseline gap-1.5 flex-wrap min-w-0">
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 shrink-0">
                          {line.split(':')[0].trim()}
                        </span>
                        <span className={`font-semibold ${isActive ? 'text-blue-900 font-bold' : 'text-slate-900'}`}>
                          {line.split(':').slice(1).join(':').trim()}
                        </span>
                      </span>
                    ) : (
                      <span className={`font-semibold ${isActive ? 'text-blue-900 font-bold' : 'text-slate-900'}`}>
                        {line}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLineClick(idx);
                    }}
                    className={`p-1 rounded shrink-0 cursor-pointer ${
                      isActive ? 'text-blue-600 bg-blue-100' : 'text-slate-400 hover:text-blue-600'
                    }`}
                  >
                    <Volume2 size={12} />
                  </button>
                </div>

                {transText && (
                  <p 
                    className={`text-[11px] text-slate-500 mt-1 pt-1 border-t border-slate-100 ${
                      rtl ? 'text-right font-sans' : 'text-left'
                    }`}
                    dir={rtl ? 'rtl' : 'ltr'}
                  >
                    {transText}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Key Phrases from Video Clip if available */}
        {videoClip.keyPhrases && videoClip.keyPhrases.length > 0 && (
          <div className="pt-2 border-t border-slate-200">
            <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">
              Wichtige Redemittel aus diesem Clip:
            </div>
            <div className="flex flex-wrap gap-1">
              {videoClip.keyPhrases.map((phrase, pIdx) => {
                let speaker = pIdx % 2 === 0 ? 'Sayed Bashir' : 'Frau Weber';
                let text = phrase;
                if (phrase.includes(':')) {
                  const parts = phrase.split(':');
                  speaker = parts[0].trim();
                  text = parts.slice(1).join(':').trim();
                }
                const gender = detectSpeakerGender(speaker, pIdx);
                return (
                  <span 
                    key={pIdx}
                    onClick={() => {
                      if (phrase.includes(':')) {
                        playDialogueTurn(speaker, text, playbackSpeed, undefined, pIdx);
                      } else {
                        playHighGermanAudio(phrase, playbackSpeed);
                      }
                    }}
                    className="text-[11px] bg-white border border-blue-200 text-blue-800 px-2 py-0.5 rounded font-medium cursor-pointer hover:bg-blue-50 flex items-center gap-1"
                    title={phrase.includes(':') ? (gender === 'female' ? 'صدای زن' : 'صدای مرد') : 'پخش تلفظ'}
                  >
                    <span>{phrase}</span>
                    <Volume2 size={10} className={gender === 'female' ? 'text-purple-500' : 'text-blue-500'} />
                  </span>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
