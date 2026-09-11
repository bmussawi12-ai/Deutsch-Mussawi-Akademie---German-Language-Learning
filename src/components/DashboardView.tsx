import React, { useState, useMemo, useEffect } from 'react';
import { CEFRLevel, LanguageCode, MainTab, LevelProgress, Language } from '../types';
import { CURRICULUM_LESSONS } from '../data/curriculum';
import { GLOSSARY_DATA } from '../data/glossary';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { INITIAL_CEFR_DATA, getCEFRTranslation } from '../data/cefrData';
import { CEFRRadarChart } from './CEFRRadarChart';
import { CEFRBarChart } from './CEFRBarChart';
import { LevelDetailCard } from './LevelDetailCard';
import { CEFRBadges } from './CEFRBadges';
import { loadUserStats, logLearningActivity, saveUserStats } from '../utils/userProgress';
import {
  TrendingUp,
  Award,
  BookOpen,
  Layers,
  FileText,
  CheckCircle2,
  BarChart3,
  Radar as RadarIcon,
  Sparkles,
  GraduationCap,
  ChevronRight,
  RotateCcw,
  LayoutGrid,
  Maximize2,
  Plus,
  Clock,
  Trophy,
  Flame
} from 'lucide-react';

interface DashboardViewProps {
  currentLevel: CEFRLevel;
  onSelectLevel: (level: CEFRLevel) => void;
  onNavigateToTab: (tab: MainTab, level?: CEFRLevel, lessonId?: string) => void;
  language: LanguageCode;
}

const ALL_SUB_LEVELS: CEFRLevel[] = [
  'A1.1', 'A1.2',
  'A2.1', 'A2.2',
  'B1.1', 'B1.2',
  'B2.1', 'B2.2',
  'C1.1', 'C1.2',
  'C2.1', 'C2.2'
];

const MACRO_LEVELS = ['A1', 'A2', 'B1', 'B2', 'C1', 'C2'] as const;

const LEVEL_DESCRIPTIONS: Record<string, { de: string; fa: string; en: string }> = {
  A1: {
    de: 'Elementare Sprachverwendung (Anfänger & Alltag)',
    fa: 'استفاده ابتدایی از زبان (مکالمات روزمره و پایه)',
    en: 'Elementary Language Use (Everyday Basics)'
  },
  A2: {
    de: 'Grundlegende Kenntnisse (Beruf & Umwelt)',
    fa: 'دانش پایه (محیط کار و ارتباطات روزمره گسترده)',
    en: 'Basic Knowledge (Work & Extended Social Life)'
  },
  B1: {
    de: 'Selbstständige Sprachverwendung (B1-Zertifikat)',
    fa: 'استفاده مستقل از زبان (مدرک اقامت و شهروندی)',
    en: 'Independent Language Use (Citizenship & Work)'
  },
  B2: {
    de: 'Fließende Kommunikation (Fachsprache & Beruf)',
    fa: 'ارتباطات روان و تخصصی (پذیرش شغلی و تحصیلی)',
    en: 'Upper Intermediate (Professional & Academic)'
  },
  C1: {
    de: 'Fachkundige Sprachkenntnisse (Universitätsniveau)',
    fa: 'تسلط تخصصی و دانشگاهی (DSH / TestDaF)',
    en: 'Effective Operational Proficiency (University)'
  },
  C2: {
    de: 'Annähernd muttersprachliche Kompetenz (Exzellenz)',
    fa: 'تسلط کامل در سطح زبان مادری (فلسفه و حقوق)',
    en: 'Mastery & Near-Native Fluency (Literature & Law)'
  }
};

const STORAGE_KEY = 'mussawi_cefr_dashboard_v3';

export const DashboardView: React.FC<DashboardViewProps> = ({
  currentLevel,
  onSelectLevel,
  onNavigateToTab,
  language
}) => {
  const t = getCEFRTranslation(language);
  const isPersian = language === 'fa' || language === 'prs';
  const isRtl = language === 'fa' || language === 'prs' || language === 'ar' || language === 'ps';

  // Chart layout modes: 'both' (Mixed dual view), 'radar', or 'bar'
  const [chartViewMode, setChartViewMode] = useState<'both' | 'radar' | 'bar'>('both');
  // Granularity mode: 'macro' (A1-C2) vs 'all' (12 sub-levels)
  const [levelGranularity, setLevelGranularity] = useState<'macro' | 'all'>('macro');
  // Selected level for inspection in LevelDetailCard
  const [selectedInspectLevel, setSelectedInspectLevel] = useState<string>(() => {
    return currentLevel.split('.')[0] || 'A1';
  });

  // Custom user overrides for interactive value tuning
  const [customOverrides, setCustomOverrides] = useState<
    Record<string, { vocabulary?: number; grammar?: number; examPractice?: number }>
  >(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) return JSON.parse(saved);
      } catch (e) {
        // ignore
      }
    }
    return {};
  });

  // Save changes to localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(customOverrides));
      } catch (e) {
        // ignore
      }
    }
  }, [customOverrides]);

  const [userStats, setUserStats] = useState(() => loadUserStats());
  const [logFeedback, setLogFeedback] = useState<string | null>(null);

  // Sync userStats with storage events and progress updates
  useEffect(() => {
    const handleProgressUpdate = () => {
      setUserStats(loadUserStats());
    };
    window.addEventListener('mussawi_user_progress_updated', handleProgressUpdate);
    window.addEventListener('storage', handleProgressUpdate);
    return () => {
      window.removeEventListener('mussawi_user_progress_updated', handleProgressUpdate);
      window.removeEventListener('storage', handleProgressUpdate);
    };
  }, []);

  const handleLogPractice = (
    type: 'word' | 'grammar' | 'exam' | 'lesson',
    count: number,
    label: string
  ) => {
    const targetMacro = selectedInspectLevel.split('.')[0] || 'A2';

    // Log in persistent user stats
    const updatedStats = logLearningActivity(
      type,
      isPersian ? `ثبت تمرین: ${label}` : `Lerneinheit: ${label}`,
      isPersian ? `ارتقای مهارت در سطح ${targetMacro} با متد موسوی` : `Fortschritt auf Niveau ${targetMacro}`,
      {
        words: type === 'word' ? count : 0,
        rules: type === 'grammar' ? count : 0,
        exams: type === 'exam' ? count : 0,
        lessons: type === 'lesson' ? count : 0
      }
    );
    setUserStats(updatedStats);

    // Also update customOverrides for this level so the charts immediately grow!
    setCustomOverrides((prev) => {
      const current = prev[targetMacro] || {};
      const baseLvl = INITIAL_CEFR_DATA.find((m) => m.level === targetMacro);
      const currentVocab = current.vocabulary !== undefined ? current.vocabulary : (baseLvl?.vocabulary || 70);
      const currentGram = current.grammar !== undefined ? current.grammar : (baseLvl?.grammar || 70);
      const currentExam = current.examPractice !== undefined ? current.examPractice : (baseLvl?.examPractice || 70);

      const delta = type === 'word' ? 3 : type === 'grammar' ? 3 : type === 'exam' ? 4 : 2;

      return {
        ...prev,
        [targetMacro]: {
          vocabulary: type === 'word' || type === 'lesson' ? Math.min(100, currentVocab + delta) : currentVocab,
          grammar: type === 'grammar' || type === 'lesson' ? Math.min(100, currentGram + delta) : currentGram,
          examPractice: type === 'exam' ? Math.min(100, currentExam + delta) : currentExam
        }
      };
    });

    setLogFeedback(
      isPersian
        ? `✓ ${label} ثبت شد و نمودارها به‌روز شدند!`
        : `✓ ${label} erfasst & Diagramme aktualisiert!`
    );
    setTimeout(() => setLogFeedback(null), 3000);
  };

  // Handle tuning from LevelDetailCard
  const handleUpdateMetric = (
    level: string,
    metric: 'vocabulary' | 'grammar' | 'examPractice',
    value: number
  ) => {
    setCustomOverrides((prev) => ({
      ...prev,
      [level]: {
        ...prev[level],
        [metric]: Math.max(0, Math.min(100, Math.round(value)))
      }
    }));
  };

  const handleResetData = () => {
    setCustomOverrides({});
  };

  // Compile Macro CEFR Levels Data (A1 - C2)
  const macroLevelData = useMemo<LevelProgress[]>(() => {
    return INITIAL_CEFR_DATA.map((base) => {
      const override = customOverrides[base.level] || {};
      const vocab = override.vocabulary !== undefined ? override.vocabulary : base.vocabulary;
      const gram = override.grammar !== undefined ? override.grammar : base.grammar;
      const exam = override.examPractice !== undefined ? override.examPractice : base.examPractice;

      const avg = Math.round((vocab + gram + exam) / 3);
      let status: 'mastered' | 'in-progress' | 'upcoming' = 'upcoming';
      if (avg >= 75) status = 'mastered';
      else if (avg > 15) status = 'in-progress';

      return {
        ...base,
        vocabulary: vocab,
        grammar: gram,
        examPractice: exam,
        vocabWordsLearned: Math.round((vocab / 100) * base.vocabWordsTotal),
        grammarRulesMastered: Math.round((gram / 100) * base.grammarRulesTotal),
        mockExamsCompleted: Math.round((exam / 100) * base.mockExamsTotal),
        status
      };
    });
  }, [customOverrides]);

  // Compile 12 Sub-levels Data (A1.1 to C2.2)
  const subLevelData = useMemo<LevelProgress[]>(() => {
    return ALL_SUB_LEVELS.map((subLvl) => {
      const macro = subLvl.split('.')[0] as 'A1' | 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
      const macroBase = INITIAL_CEFR_DATA.find((m) => m.level === macro) || INITIAL_CEFR_DATA[0];
      const lessons = CURRICULUM_LESSONS[subLvl] || [];
      const vocabList = GLOSSARY_DATA[subLvl] || [];
      const grammarList = GRAMMAR_RULES.filter((r) => r.level === subLvl);

      const totalLessons = Math.max(lessons.length, 1);
      const totalVocab = Math.max(vocabList.length, 50);
      const totalGrammar = Math.max(grammarList.length, 6);
      const totalExams = 2;

      // Check sub-level override or inherit from macro
      const override = customOverrides[subLvl] || customOverrides[macro] || {};
      const isSub1 = subLvl.endsWith('.1');
      const offset = isSub1 ? 5 : -5;

      const baseVocab = Math.max(0, Math.min(100, macroBase.vocabulary + offset));
      const baseGram = Math.max(0, Math.min(100, macroBase.grammar + offset));
      const baseExam = Math.max(0, Math.min(100, macroBase.examPractice + offset));

      const vocab = override.vocabulary !== undefined ? override.vocabulary : baseVocab;
      const gram = override.grammar !== undefined ? override.grammar : baseGram;
      const exam = override.examPractice !== undefined ? override.examPractice : baseExam;

      const avg = Math.round((vocab + gram + exam) / 3);
      let status: 'mastered' | 'in-progress' | 'upcoming' = 'upcoming';
      if (avg >= 75) status = 'mastered';
      else if (avg > 15) status = 'in-progress';

      return {
        level: subLvl,
        levelNameEn: `${subLvl} - ${macroBase.levelNameEn.split('/')[0].trim()} Part ${isSub1 ? 'I' : 'II'}`,
        levelNameFa: `${subLvl} - ${macroBase.levelNameFa.split('/')[0].trim()} بخش ${isSub1 ? 'اول' : 'دوم'}`,
        vocabulary: vocab,
        grammar: gram,
        examPractice: exam,
        vocabWordsLearned: Math.round((vocab / 100) * totalVocab),
        vocabWordsTotal: totalVocab,
        grammarRulesMastered: Math.round((gram / 100) * totalGrammar),
        grammarRulesTotal: totalGrammar,
        mockExamsCompleted: exam >= 70 ? 2 : exam >= 35 ? 1 : 0,
        mockExamsTotal: totalExams,
        status,
        descriptionEn: macroBase.descriptionEn,
        descriptionFa: macroBase.descriptionFa
      };
    });
  }, [customOverrides]);

  // Active chart data based on granularity
  const currentChartData = useMemo<LevelProgress[]>(() => {
    return levelGranularity === 'macro' ? macroLevelData : subLevelData;
  }, [levelGranularity, macroLevelData, subLevelData]);

  // Active inspect level data for the LevelDetailCard
  const activeInspectLevelData = useMemo<LevelProgress>(() => {
    const found = currentChartData.find((d) => d.level === selectedInspectLevel);
    if (found) return found;
    return currentChartData[0] || macroLevelData[0];
  }, [currentChartData, selectedInspectLevel, macroLevelData]);

  // Global aggregate metrics
  const globalStats = useMemo(() => {
    const totalVocab = macroLevelData.reduce((acc, m) => acc + m.vocabWordsLearned, 0);
    const totalGrammar = macroLevelData.reduce((acc, m) => acc + m.grammarRulesMastered, 0);
    const totalExams = macroLevelData.reduce((acc, m) => acc + m.mockExamsCompleted, 0);
    const avgOverall = Math.round(
      macroLevelData.reduce((acc, m) => acc + (m.vocabulary + m.grammar + m.examPractice) / 3, 0) /
        macroLevelData.length
    );

    return {
      overallPercent: avgOverall,
      totalVocab,
      totalGrammar,
      totalExams
    };
  }, [macroLevelData]);

  return (
    <div
      className={`space-y-6 max-w-7xl mx-auto pb-16 font-sans ${isRtl ? 'rtl' : 'ltr'}`}
      dir={isRtl ? 'rtl' : 'ltr'}
      id="dashboard-view-container"
    >
      {/* Hero Header & Academy Banner */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
          <div>
            <div className="flex items-center gap-2 mb-2 flex-wrap">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white tracking-wide shadow-xs">
                DEUTSCH MUSSAWI AKADEMIE
              </span>
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded-full border border-slate-200">
                CEFR Standard (A1 - C2)
              </span>
              <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 flex items-center gap-1">
                <CheckCircle2 size={12} />
                <span>Goethe & telc Ready</span>
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {t.dashboardTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl leading-relaxed">
              {t.dashboardSubtitle}
            </p>
          </div>

          {/* Quick Jump Action Controls */}
          <div className="flex items-center gap-2.5 self-stretch sm:self-auto flex-wrap">
            <button
              onClick={() => onNavigateToTab('lesson', currentLevel)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <BookOpen size={16} />
              <span>
                {isPersian ? `ادامه درس (${currentLevel})` : `Lektion (${currentLevel})`}
              </span>
            </button>
            <button
              onClick={() => onNavigateToTab('exams', currentLevel)}
              className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors cursor-pointer"
            >
              <Award size={16} />
              <span>{isPersian ? 'آزمون شبیه‌سازی' : 'Prüfungssimulation'}</span>
            </button>
          </div>
        </div>

        {/* Global Statistics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-6 pt-6 border-t border-slate-100">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>{t.overallMastery}</span>
              <TrendingUp size={16} className="text-blue-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {globalStats.overallPercent}%
            </div>
            <div className="w-full bg-slate-200 h-2 rounded-full mt-2 overflow-hidden">
              <div
                className="bg-blue-600 h-full rounded-full transition-all duration-500"
                style={{ width: `${globalStats.overallPercent}%` }}
              />
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>{t.wordsLearned}</span>
              <FileText size={16} className="text-indigo-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {globalStats.totalVocab.toLocaleString()}
              <span className="text-xs font-normal text-slate-500 ml-1 mr-1">Wörter</span>
            </div>
            <div className="text-[11px] text-indigo-600 font-semibold mt-1 flex items-center gap-1">
              <CheckCircle2 size={12} />
              <span>{isPersian ? 'با آرتیکل و تلفظ طبیعی' : 'Mit Artikeln & Audio'}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>{t.rulesMastered}</span>
              <Layers size={16} className="text-teal-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              {globalStats.totalGrammar}
              <span className="text-xs font-normal text-slate-500 ml-1 mr-1">Regeln</span>
            </div>
            <div className="text-[11px] text-teal-600 font-semibold mt-1 flex items-center gap-1">
              <Sparkles size={12} />
              <span>{isPersian ? 'فرمول‌های دیداری زبان' : 'Systematische Didaktik'}</span>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
            <div className="flex items-center justify-between text-slate-500 text-xs font-semibold mb-1">
              <span>{isPersian ? 'سطح فعال' : 'Aktive Stufe'}</span>
              <GraduationCap size={16} className="text-amber-600" />
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              Level {currentLevel}
            </div>
            <div className="text-[11px] text-amber-600 font-semibold mt-1 flex items-center gap-1">
              <Award size={12} />
              <span>{isPersian ? 'آماده امتحان تِلک و گوته' : 'Goethe / telc Training'}</span>
            </div>
          </div>
        </div>

        {/* Reader's Personal Practice & Activity Logger */}
        <div className="mt-6 pt-5 border-t border-slate-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center">
                <Sparkles size={15} />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {isPersian ? 'ثبت مستقیم تمرینات خواننده و ارتقای آنی نمودارها' : 'Lernaktivität des Lesers erfassen'}
                </h4>
                <p className="text-[11px] text-slate-500">
                  {isPersian
                    ? 'هر تمرین لغات، فرمول گرامر یا آزمون در این بخش ثبت و مستقیماً به تسلط شما افزوده می‌شود.'
                    : 'Erfasste Wörter, Grammatik-Regeln und Prüfungen aktualisieren die Diagramme sofort.'}
                </p>
              </div>
            </div>

            {logFeedback && (
              <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full animate-fade-in flex items-center gap-1">
                <CheckCircle2 size={12} />
                <span>{logFeedback}</span>
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <button
              onClick={() => handleLogPractice('word', 10, isPersian ? 'حفظ ۱۰ واژه جدید با آرتیکل و تلفظ' : '10 neue Wörter mit Artikel')}
              className="p-2.5 rounded-xl bg-indigo-50 hover:bg-indigo-100 text-indigo-900 border border-indigo-200 font-bold text-xs flex items-center justify-between transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Plus size={14} className="text-indigo-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">{isPersian ? '+۱۰ واژه با آرتیکل' : '+10 Wörter'}</span>
              </div>
              <span className="text-[10px] bg-indigo-200/80 px-1.5 py-0.5 rounded font-mono shrink-0">Wort</span>
            </button>

            <button
              onClick={() => handleLogPractice('grammar', 2, isPersian ? 'تثبیت ۲ فرمول دیداری گرامر' : '2 Grammatik-Formeln')}
              className="p-2.5 rounded-xl bg-teal-50 hover:bg-teal-100 text-teal-900 border border-teal-200 font-bold text-xs flex items-center justify-between transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Plus size={14} className="text-teal-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">{isPersian ? '+۲ فرمول گرامر' : '+2 Regeln'}</span>
              </div>
              <span className="text-[10px] bg-teal-200/80 px-1.5 py-0.5 rounded font-mono shrink-0">Regel</span>
            </button>

            <button
              onClick={() => handleLogPractice('exam', 1, isPersian ? 'پاسخ به ۱ بخش آزمون گوته / تِلک' : '1 Prüfungsteil Goethe/telc')}
              className="p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 font-bold text-xs flex items-center justify-between transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Plus size={14} className="text-amber-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">{isPersian ? '+۱ بخش امتحان' : '+1 Prüfung'}</span>
              </div>
              <span className="text-[10px] bg-amber-200/80 px-1.5 py-0.5 rounded font-mono shrink-0">Test</span>
            </button>

            <button
              onClick={() => handleLogPractice('lesson', 1, isPersian ? 'تکمیل ۱ درس با متد موسوی' : '1 Mussawi-Lerneinheit')}
              className="p-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-900 border border-blue-200 font-bold text-xs flex items-center justify-between transition-colors cursor-pointer group"
            >
              <div className="flex items-center gap-1.5 truncate">
                <Plus size={14} className="text-blue-600 group-hover:scale-110 transition-transform shrink-0" />
                <span className="truncate">{isPersian ? '+۱ درس کامل' : '+1 Lektion'}</span>
              </div>
              <span className="text-[10px] bg-blue-200/80 px-1.5 py-0.5 rounded font-mono shrink-0">Lektion</span>
            </button>
          </div>
        </div>
      </div>

      {/* Control Switcher Bar: Chart Mode (Both / Radar / Bar) & Granularity (Macro / 12 Sub-levels) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-4 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">{t.chartView}:</span>
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-bold">
            <button
              onClick={() => setChartViewMode('both')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                chartViewMode === 'both'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="نمایش همزمان و میکس هردو فایل نمودار"
            >
              <LayoutGrid size={14} />
              <span>{t.both}</span>
            </button>
            <button
              onClick={() => setChartViewMode('radar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                chartViewMode === 'radar'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="فقط نمودار راداری"
            >
              <RadarIcon size={14} />
              <span>{t.radar}</span>
            </button>
            <button
              onClick={() => setChartViewMode('bar')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                chartViewMode === 'bar'
                  ? 'bg-blue-600 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              title="فقط نمودار ستونی"
            >
              <BarChart3 size={14} />
              <span>{t.bar}</span>
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">{t.level}:</span>
          <div className="inline-flex rounded-xl border border-slate-200 bg-slate-100 p-1 text-xs font-bold">
            <button
              onClick={() => setLevelGranularity('macro')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                levelGranularity === 'macro'
                  ? 'bg-slate-800 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isPersian ? 'سطوح اصلی (A1 - C2)' : 'Hauptstufen (A1-C2)'}
            </button>
            <button
              onClick={() => setLevelGranularity('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                levelGranularity === 'all'
                  ? 'bg-slate-800 text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isPersian ? 'ریزسطوح (۱۲ سطح)' : '12 Unterstufen'}
            </button>
          </div>
        </div>
      </div>

      {/* Main Charts Canvas: Dual Mixed View or Single Expanded View */}
      {chartViewMode === 'both' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* 1. Radar Chart Panel */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                  <RadarIcon size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800">
                    {t.radarChartTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {t.radarChartDesc}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChartViewMode('radar')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="تمام صفحه کردن رادار"
              >
                <Maximize2 size={14} />
              </button>
            </div>
            <div className="w-full flex-1">
              <CEFRRadarChart
                data={currentChartData}
                language={language}
                selectedLevel={selectedInspectLevel}
                onSelectLevel={(lvl) => {
                  if (lvl) setSelectedInspectLevel(lvl);
                }}
              />
            </div>
          </div>

          {/* 2. Bar Chart Panel */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs flex flex-col justify-between">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-slate-100">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                  <BarChart3 size={18} />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-800">
                    {t.barChartTitle}
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    {t.barChartDesc}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setChartViewMode('bar')}
                className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
                title="تمام صفحه کردن ستونی"
              >
                <Maximize2 size={14} />
              </button>
            </div>
            <div className="w-full flex-1">
              <CEFRBarChart
                data={currentChartData}
                language={language}
                selectedLevel={selectedInspectLevel}
                onSelectLevel={(lvl) => {
                  if (lvl) setSelectedInspectLevel(lvl);
                }}
              />
            </div>
          </div>
        </div>
      ) : chartViewMode === 'radar' ? (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold">
                <RadarIcon size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  {t.radarChartTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.radarChartDesc}
                </p>
              </div>
            </div>
            <button
              onClick={() => setChartViewMode('both')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              {t.both}
            </button>
          </div>
          <div className="w-full">
            <CEFRRadarChart
              data={currentChartData}
              language={language}
              selectedLevel={selectedInspectLevel}
              onSelectLevel={(lvl) => {
                if (lvl) setSelectedInspectLevel(lvl);
              }}
            />
          </div>
        </div>
      ) : (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold">
                <BarChart3 size={20} />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-800">
                  {t.barChartTitle}
                </h3>
                <p className="text-xs text-slate-500">
                  {t.barChartDesc}
                </p>
              </div>
            </div>
            <button
              onClick={() => setChartViewMode('both')}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 transition-colors"
            >
              {t.both}
            </button>
          </div>
          <div className="w-full">
            <CEFRBarChart
              data={currentChartData}
              language={language}
              selectedLevel={selectedInspectLevel}
              onSelectLevel={(lvl) => {
                if (lvl) setSelectedInspectLevel(lvl);
              }}
            />
          </div>
        </div>
      )}

      {/* Digital CEFR Level Badges & Rewards System */}
      <CEFRBadges
        language={language}
        macroLevelData={macroLevelData}
        onSelectLevel={(lvl) => {
          onSelectLevel(lvl as CEFRLevel);
          setSelectedInspectLevel(lvl);
        }}
      />

      {/* Interactive Level Detail Inspection & Simulation Sliders (LevelDetailCard) */}
      <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 mb-4 border-b border-slate-100">
          <div>
            <h3 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-2">
              <Sparkles size={16} className="text-amber-500" />
              <span>{t.interactiveEditor}</span>
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                {selectedInspectLevel}
              </span>
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              {t.interactiveEditorDesc}
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500 font-medium">
              {isPersian ? 'انتخاب سریع سطح برای تنظیم:' : 'Stufe wählen:'}
            </span>
            <div className="flex items-center gap-1">
              {(levelGranularity === 'macro' ? MACRO_LEVELS : ALL_SUB_LEVELS.slice(0, 6)).map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedInspectLevel(lvl)}
                  className={`px-2 py-1 rounded-md text-xs font-bold transition-colors cursor-pointer ${
                    selectedInspectLevel === lvl
                      ? 'bg-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>
            <button
              onClick={handleResetData}
              className="px-3 py-1 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer ml-1 mr-1"
              title={t.resetData}
            >
              <RotateCcw size={12} />
              <span>{t.resetData}</span>
            </button>
          </div>
        </div>

        {/* Render LevelDetailCard for activeInspectLevelData */}
        <LevelDetailCard
          levelData={activeInspectLevelData}
          language={language}
          onUpdateMetric={handleUpdateMetric}
          isSelected={true}
        />
      </div>

      {/* Reader's Recent Learning Activity Stream */}
      {userStats.recentActivities && userStats.recentActivities.length > 0 && (
        <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-xs">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-blue-600" />
              <h3 className="text-sm sm:text-base font-bold text-slate-800">
                {isPersian ? 'تمرینات ثبت‌شده اخیر خواننده' : 'Zuletzt erfasste Lernaktivitäten'}
              </h3>
            </div>
            <span className="text-xs text-slate-400 font-mono">
              {userStats.recentActivities.length} {isPersian ? 'رویداد ثبت‌شده' : 'Einträge'}
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {userStats.recentActivities.map((act) => (
              <div
                key={act.id}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start justify-between gap-2.5 text-xs hover:bg-slate-100/70 transition-colors"
              >
                <div className="flex items-start gap-2 min-w-0">
                  <span
                    className={`w-2 h-2 rounded-full mt-1.5 shrink-0 ${
                      act.type === 'word'
                        ? 'bg-indigo-500'
                        : act.type === 'grammar'
                        ? 'bg-teal-500'
                        : act.type === 'exam'
                        ? 'bg-amber-500'
                        : 'bg-blue-500'
                    }`}
                  />
                  <div className="min-w-0">
                    <div className="font-bold text-slate-900 truncate">{act.title}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5 truncate">{act.detail}</div>
                  </div>
                </div>
                <span className="text-[10px] text-slate-400 font-mono shrink-0 whitespace-nowrap bg-white px-1.5 py-0.5 rounded border border-slate-200">
                  {act.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Comprehensive CEFR Level Breakdown Grid (12 Sub-levels with Direct Jump Action Buttons) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-slate-900">
              {t.levelDetails}
            </h3>
            <p className="text-xs text-slate-500">
              {isPersian
                ? 'برای ورود مستقیم به هر درس، واژگان تخصصی یا آزمون استاندارد، دکمه‌های مربوطه را انتخاب کنید.'
                : 'Direkter Zugriff auf Lerneinheiten, Fachwortschatz und Prüfungssimulationen je Stufe.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {subLevelData.map((lvlProg) => {
            const isCurrent = currentLevel === lvlProg.level;
            const macro = lvlProg.level.split('.')[0];
            const macroDesc = LEVEL_DESCRIPTIONS[macro];

            return (
              <div
                key={lvlProg.level}
                className={`bg-white rounded-2xl border p-5 transition-all duration-200 shadow-xs flex flex-col justify-between ${
                  isCurrent
                    ? 'border-blue-500 ring-2 ring-blue-100 shadow-md'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-xs shadow-xs ${
                          isCurrent
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-900 text-white'
                        }`}
                      >
                        {lvlProg.level}
                      </span>
                      <div>
                        <h4 className="font-bold text-sm text-slate-900 flex items-center gap-1.5">
                          <span>{lvlProg.level}</span>
                          {isCurrent && (
                            <span className="text-[10px] text-blue-600 font-bold bg-blue-50 px-2 py-0.5 rounded-full border border-blue-200">
                              {isPersian ? 'سطح فعال' : 'Aktiv'}
                            </span>
                          )}
                        </h4>
                        <span className="text-[11px] text-slate-500">
                          {lvlProg.vocabWordsTotal} Wörter • {lvlProg.grammarRulesTotal} Regeln
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-lg font-black text-slate-900">
                        {Math.round((lvlProg.vocabulary + lvlProg.grammar + lvlProg.examPractice) / 3)}%
                      </span>
                    </div>
                  </div>

                  <p className="text-[11px] text-slate-600 line-clamp-1 mb-3">
                    {macroDesc ? (isPersian ? macroDesc.fa : macroDesc.de) : ''}
                  </p>

                  {/* 3 Progress Bars: Wortschatz, Grammatik, Prüfung */}
                  <div className="space-y-2 text-xs">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-600 mb-0.5">
                        <span className="flex items-center gap-1 font-medium">
                          <FileText size={11} className="text-indigo-600" />
                          <span>{t.vocabulary}</span>
                        </span>
                        <span className="font-bold text-indigo-700">{lvlProg.vocabulary}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-indigo-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${lvlProg.vocabulary}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-600 mb-0.5">
                        <span className="flex items-center gap-1 font-medium">
                          <Layers size={11} className="text-teal-600" />
                          <span>{t.grammar}</span>
                        </span>
                        <span className="font-bold text-teal-700">{lvlProg.grammar}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-teal-600 h-full rounded-full transition-all duration-300"
                          style={{ width: `${lvlProg.grammar}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-[11px] text-slate-600 mb-0.5">
                        <span className="flex items-center gap-1 font-medium">
                          <Award size={11} className="text-amber-600" />
                          <span>{t.examPractice}</span>
                        </span>
                        <span className="font-bold text-amber-700">{lvlProg.examPractice}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-amber-500 h-full rounded-full transition-all duration-300"
                          style={{ width: `${lvlProg.examPractice}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <button
                    onClick={() => {
                      onSelectLevel(lvlProg.level as CEFRLevel);
                      onNavigateToTab('lesson', lvlProg.level as CEFRLevel);
                    }}
                    className="flex-1 py-1.5 px-2.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold text-xs transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>{isPersian ? 'درس‌ها' : 'Lektionen'}</span>
                    <ChevronRight size={13} className={isRtl ? 'rotate-180' : ''} />
                  </button>

                  <button
                    onClick={() => {
                      onSelectLevel(lvlProg.level as CEFRLevel);
                      onNavigateToTab('glossary', lvlProg.level as CEFRLevel);
                    }}
                    className="py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
                    title="واژگان این سطح"
                  >
                    {t.vocabulary}
                  </button>

                  <button
                    onClick={() => {
                      onSelectLevel(lvlProg.level as CEFRLevel);
                      onNavigateToTab('exams', lvlProg.level as CEFRLevel);
                    }}
                    className="py-1.5 px-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-800 font-semibold text-xs transition-colors cursor-pointer"
                    title="آزمون این سطح"
                  >
                    {isPersian ? 'آزمون' : 'Prüfung'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
