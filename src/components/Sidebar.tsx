import React from 'react';
import { CEFRLevel, MainTab, LanguageCode } from '../types';
import { SUPPORTED_LANGUAGES, UI_TRANSLATIONS } from '../data/translations';
import { CURRICULUM_LESSONS } from '../data/curriculum';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { PWAInstallButton } from './PWAInstallButton';
import { 
  BookOpen, 
  Layers, 
  FileText, 
  CheckSquare, 
  Award, 
  PenTool, 
  Volume2, 
  Globe, 
  ChevronDown,
  KeyRound,
  Cloud,
  PanelLeftClose,
  PanelLeftOpen,
  X,
  GraduationCap,
  Laptop,
  BarChart3,
  Search
} from 'lucide-react';

interface SidebarProps {
  currentLevel: CEFRLevel;
  onSelectLevel: (lvl: CEFRLevel) => void;
  currentLessonId: string;
  onSelectLesson: (id: string) => void;
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  language: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  progressPercent: number;
  onOpenAnswerKey?: () => void;
  onOpenDesktopInstall?: () => void;
  isCollapsed?: boolean;
  onToggleCollapse?: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

const ALL_LEVELS: CEFRLevel[] = [
  'A1.1', 'A1.2',
  'A2.1', 'A2.2',
  'B1.1', 'B1.2',
  'B2.1', 'B2.2',
  'C1.1', 'C1.2',
  'C2.1', 'C2.2'
];

export const Sidebar: React.FC<SidebarProps> = ({
  currentLevel,
  onSelectLevel,
  currentLessonId,
  onSelectLesson,
  activeTab,
  onSelectTab,
  language,
  onSelectLanguage,
  progressPercent,
  onOpenAnswerKey,
  onOpenDesktopInstall,
  isCollapsed = false,
  onToggleCollapse,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const [showLangMenu, setShowLangMenu] = React.useState(false);
  const [showLevelMenu, setShowLevelMenu] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState('');

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const currentLangObj = SUPPORTED_LANGUAGES.find(l => l.code === language) || SUPPORTED_LANGUAGES[0];

  const lessonsForLevel = CURRICULUM_LESSONS[currentLevel] || [];
  const activeLessonIndex = lessonsForLevel.findIndex(l => l.id === currentLessonId);

  const searchResults = React.useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return null;

    const matchedLessons: { level: CEFRLevel; lesson: (typeof CURRICULUM_LESSONS)['A1.1'][0] }[] = [];
    Object.entries(CURRICULUM_LESSONS).forEach(([lvl, list]) => {
      list.forEach((lek) => {
        const matchTitle = lek.title.toLowerCase().includes(q);
        const matchSubtitle = lek.subTitle?.toLowerCase().includes(q);
        const matchTopic = lek.topic?.toLowerCase().includes(q);
        const matchSectionE = lek.sectionE?.title?.toLowerCase().includes(q);
        const matchNum = `lektion ${lek.lektionNumber}`.includes(q) || `درس ${lek.lektionNumber}`.includes(q);
        if (matchTitle || matchSubtitle || matchNum || matchTopic || matchSectionE) {
          matchedLessons.push({ level: lvl as CEFRLevel, lesson: lek });
        }
      });
    });

    const matchedGrammar = GRAMMAR_RULES.filter((rule) => {
      const matchDe = rule.germanTitle.toLowerCase().includes(q);
      const matchFormula = rule.formula.toLowerCase().includes(q);
      const matchFa = rule.explanation.fa?.toLowerCase().includes(q);
      const matchEn = rule.explanation.en?.toLowerCase().includes(q);
      return matchDe || matchFormula || matchFa || matchEn;
    });

    return {
      lessons: matchedLessons.slice(0, 8),
      grammar: matchedGrammar.slice(0, 8),
      totalCount: matchedLessons.length + matchedGrammar.length,
    };
  }, [searchQuery]);

  // When clicking an item on mobile, automatically close the drawer
  const handleItemClick = (action: () => void) => {
    action();
    if (onCloseMobile) {
      onCloseMobile();
    }
  };

  // Minimized / Collapsed Desktop Mini-Rail View
  if (isCollapsed) {
    return (
      <aside className="hidden lg:flex w-16 bg-[#1E293B] text-slate-300 flex-col shadow-xl shrink-0 select-none z-20 border-r border-slate-700 items-center py-3 justify-between transition-all duration-300">
        <div className="flex flex-col items-center gap-3 w-full">
          {/* Expand Button */}
          <button
            onClick={onToggleCollapse}
            className="p-2 rounded-lg bg-slate-800 text-slate-300 hover:text-white hover:bg-blue-600 transition-colors cursor-pointer"
            title="باز کردن منوی سمت چپ (Seitenleiste ausklappen)"
          >
            <PanelLeftOpen size={18} />
          </button>

          {/* Level Badge Pill */}
          <button
            onClick={() => onToggleCollapse && onToggleCollapse()}
            className="w-10 h-10 rounded-lg bg-blue-600/20 border border-blue-500/40 text-blue-400 font-bold text-xs flex flex-col items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
            title={`Level ${currentLevel} (کلیک برای تغییر سطح)`}
          >
            <span className="text-[9px] font-mono">LVL</span>
            <span className="font-black text-[10px] leading-tight">{currentLevel.replace('.', '')}</span>
          </button>

          <div className="w-8 h-px bg-slate-700 my-1" />

          {/* Tab Icon Rail */}
          <div className="flex flex-col items-center gap-1.5 w-full px-2">
            {[
              { id: 'lesson' as MainTab, icon: BookOpen, label: 'Lektion' },
              { id: 'dashboard' as MainTab, icon: BarChart3, label: 'Dashboard' },
              { id: 'grammar' as MainTab, icon: Layers, label: 'Grammatik' },
              { id: 'glossary' as MainTab, icon: FileText, label: 'Wortschatz' },
              { id: 'exercises' as MainTab, icon: CheckSquare, label: 'Übungen' },
              { id: 'exams' as MainTab, icon: Award, label: 'Prüfung' },
              { id: 'writing' as MainTab, icon: PenTool, label: 'Schreiben' },
              { id: 'pronunciation' as MainTab, icon: Volume2, label: 'Aussprache' },
            ].map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onSelectTab(item.id)}
                  className={`p-2.5 rounded-lg w-full flex justify-center transition-colors cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                  title={item.label}
                >
                  <Icon size={18} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Bottom Mini Controls */}
        <div className="flex flex-col items-center gap-2 w-full px-2">
          {onOpenAnswerKey && (
            <button
              onClick={onOpenAnswerKey}
              className="p-2 rounded-lg bg-amber-500/20 text-amber-300 hover:bg-amber-500/40 border border-amber-500/30 transition-colors cursor-pointer"
              title="پاسخنامه و کلید تمرینات (Lösungsheft)"
            >
              <KeyRound size={16} />
            </button>
          )}

          <div 
            className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center text-sm border border-slate-700 cursor-pointer"
            onClick={onToggleCollapse}
            title={currentLangObj.name}
          >
            {currentLangObj.flag}
          </div>
        </div>
      </aside>
    );
  }

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div 
          onClick={onCloseMobile}
          className="fixed inset-0 bg-black/60 backdrop-blur-xs z-40 lg:hidden transition-opacity duration-300"
          aria-hidden="true"
        />
      )}

      {/* Main Sidebar (Slide-over drawer on mobile, static on desktop) */}
      <aside 
        className={`
          fixed lg:static inset-y-0 left-0 z-50
          w-72 sm:w-64 bg-[#1E293B] text-slate-300 flex flex-col shadow-2xl lg:shadow-xl shrink-0 select-none border-r border-slate-700
          transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        {/* Brand Header with Collapse / Close Button */}
        <div className="p-4 sm:p-5 border-b border-slate-700 bg-[#0F172A]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white font-bold">
                <GraduationCap size={16} />
              </div>
              <h1 className="text-white font-bold text-base sm:text-lg tracking-tight font-sans">
                DEUTSCH MEISTER
              </h1>
            </div>

            <div className="flex items-center gap-1">
              <span className="text-[10px] font-mono bg-blue-600/30 text-blue-400 px-1.5 py-0.5 rounded border border-blue-500/30 font-semibold">
                CEFR
              </span>

              {/* Desktop Collapse Button */}
              {onToggleCollapse && (
                <button
                  onClick={onToggleCollapse}
                  className="hidden lg:flex p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
                  title="خورد کردن منوی چپ برای باز شدن فضای درس (Seitenleiste einklappen)"
                >
                  <PanelLeftClose size={16} />
                </button>
              )}

              {/* Mobile Close Button */}
              {onCloseMobile && (
                <button
                  onClick={onCloseMobile}
                  className="lg:hidden p-1.5 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer ml-1"
                  title="بستن منو"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          <p className="text-[10px] text-slate-400 mt-1 uppercase tracking-widest font-semibold">
            Mussawi-Didaktik & Dialog
          </p>
        </div>

        {/* Navigation Body */}
        <nav className="flex-1 p-3.5 space-y-3.5 overflow-y-auto text-xs">
          {/* Quick Search Bar */}
          <div className="relative">
            <div className="relative flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === 'fa' || language === 'prs'
                    ? 'جستجوی درس یا مبحث گرامر...'
                    : 'Lektion / Grammatik suchen...'
                }
                className="w-full bg-[#1E293B] border border-slate-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-xs text-white placeholder-slate-400 rounded-lg pl-8 pr-7 py-2 transition-all outline-none"
              />
              <Search
                size={14}
                className="absolute left-2.5 text-slate-400 pointer-events-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2 text-slate-400 hover:text-white p-0.5 rounded cursor-pointer"
                  title="پاک کردن"
                >
                  <X size={12} />
                </button>
              )}
            </div>

            {/* Live Search Results Overlay */}
            {searchResults && (
              <div className="absolute top-full left-0 right-0 mt-1.5 bg-[#1E293B] border border-slate-600 rounded-xl shadow-2xl p-2.5 z-40 max-h-72 overflow-y-auto space-y-2.5">
                <div className="flex items-center justify-between px-1 text-[10px] text-slate-400 border-b border-slate-700/80 pb-1.5">
                  <span className="font-semibold text-slate-300">
                    {language === 'fa' || language === 'prs'
                      ? `${searchResults.totalCount} نتیجه یافت شد`
                      : `${searchResults.totalCount} Treffer gefunden`}
                  </span>
                  <button
                    onClick={() => setSearchQuery('')}
                    className="text-blue-400 hover:underline text-[10px]"
                  >
                    {language === 'fa' || language === 'prs' ? 'بستن' : 'Schließen'}
                  </button>
                </div>

                {searchResults.lessons.length > 0 && (
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-blue-400 px-1 mb-1 flex items-center gap-1">
                      <BookOpen size={11} />
                      <span>{language === 'fa' || language === 'prs' ? 'درس‌ها' : 'Lektionen'} ({searchResults.lessons.length})</span>
                    </div>
                    <div className="space-y-1">
                      {searchResults.lessons.map((item) => (
                        <button
                          key={`${item.level}-${item.lesson.id}`}
                          onClick={() => {
                            handleItemClick(() => {
                              onSelectLevel(item.level);
                              onSelectLesson(item.lesson.id);
                              onSelectTab('lesson');
                              setSearchQuery('');
                            });
                          }}
                          className="w-full text-left p-1.5 rounded hover:bg-slate-700/80 text-slate-200 text-xs flex items-center justify-between group cursor-pointer transition-colors"
                        >
                          <div className="truncate pr-1">
                            <span className="text-[9px] bg-blue-600 text-white font-mono px-1 rounded mr-1">
                              {item.level}
                            </span>
                            <span className="font-medium text-[11px]">
                              Lek. {item.lesson.lektionNumber}: {item.lesson.title.split('!')[0]}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {searchResults.grammar.length > 0 && (
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 px-1 mb-1 flex items-center gap-1">
                      <Layers size={11} />
                      <span>{language === 'fa' || language === 'prs' ? 'قواعد گرامر' : 'Grammatik'} ({searchResults.grammar.length})</span>
                    </div>
                    <div className="space-y-1">
                      {searchResults.grammar.map((rule) => (
                        <button
                          key={rule.id}
                          onClick={() => {
                            handleItemClick(() => {
                              onSelectLevel(rule.level as CEFRLevel);
                              onSelectTab('grammar');
                              setSearchQuery('');
                            });
                          }}
                          className="w-full text-left p-1.5 rounded hover:bg-slate-700/80 text-slate-200 text-xs block group cursor-pointer transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium text-[11px] truncate text-indigo-200">
                              {rule.germanTitle}
                            </span>
                            <span className="text-[9px] bg-indigo-900/60 text-indigo-300 font-mono px-1 rounded shrink-0 border border-indigo-700/50">
                              {rule.level}
                            </span>
                          </div>
                          <div className="text-[9px] text-slate-400 truncate mt-0.5 font-mono">
                            {rule.formula}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {searchResults.totalCount === 0 && (
                  <div className="p-3 text-center text-xs text-slate-400 italic">
                    {language === 'fa' || language === 'prs'
                      ? 'موردی مطابق با جستجوی شما یافت نشد.'
                      : 'Keine passenden Lektionen oder Regeln gefunden.'}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Level Switcher Card */}
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1.5 px-1 tracking-wider flex justify-between items-center">
              <span>{t.currentLevel || 'Aktuelles Level'}</span>
              <span className="text-emerald-400 font-mono text-[9px] font-semibold bg-emerald-950/70 border border-emerald-800/80 px-1.5 py-0.5 rounded">
                100% Offen
              </span>
            </div>

            <div className="relative">
              <button
                onClick={() => setShowLevelMenu(!showLevelMenu)}
                className="w-full flex items-center justify-between p-2 rounded bg-[#334155] text-white shadow-sm border border-slate-600 hover:bg-slate-700 transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2 font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Level {currentLevel}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span 
                    className="text-[10px] bg-blue-600 px-2 py-0.5 rounded-full font-semibold font-mono"
                    title={`Lektion ${activeLessonIndex >= 0 ? activeLessonIndex + 1 : 1} von ${lessonsForLevel.length}`}
                  >
                    {activeLessonIndex >= 0 ? `Lek. ${activeLessonIndex + 1}/${lessonsForLevel.length}` : `${lessonsForLevel.length} Lek.`}
                  </span>
                  <ChevronDown size={14} className="text-slate-400" />
                </div>
              </button>

              {/* Free Access Info */}
              <div className="mt-1 px-1 flex items-center justify-between text-[10px] text-slate-400">
                <span className="text-emerald-400/90 font-medium">✓ دسترسی آزاد تمام درس‌ها</span>
                <span className="font-mono text-slate-400">{lessonsForLevel.length} Lektionen</span>
              </div>

              {showLevelMenu && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-[#1E293B] border border-slate-600 rounded shadow-xl py-1 z-30 max-h-52 overflow-y-auto">
                  {ALL_LEVELS.map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => {
                        onSelectLevel(lvl);
                        setShowLevelMenu(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-700 ${
                        currentLevel === lvl ? 'bg-blue-600 text-white font-bold' : 'text-slate-300'
                      }`}
                    >
                      <span>{lvl}</span>
                      <span className="text-[10px] text-emerald-400 bg-emerald-950/60 px-1.5 py-0.5 rounded border border-emerald-800/40">
                        {(CURRICULUM_LESSONS[lvl] || []).length} Lektionen
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Primary Sections (Tabs) */}
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 px-1 tracking-wider">
              Lernbereiche
            </div>
            <div className="space-y-0.5">
              {[
                { id: 'lesson' as MainTab, icon: BookOpen, color: 'text-blue-400', label: t.navLesson || 'Lerneinheit (Mussawi A-E)' },
                { id: 'dashboard' as MainTab, icon: BarChart3, color: 'text-amber-400', label: language === 'fa' || language === 'prs' ? 'داشبورد پیشرفت (CEFR)' : 'Fortschritts-Dashboard' },
                { id: 'grammar' as MainTab, icon: Layers, color: 'text-indigo-400', label: t.navGrammar || 'Grammatik-Formeln' },
                { id: 'glossary' as MainTab, icon: FileText, color: 'text-emerald-400', label: t.navGlossary || 'Wortschatz & Artikel' },
                { id: 'exercises' as MainTab, icon: CheckSquare, color: 'text-amber-400', label: t.navExercises || 'Übungskapitel' },
                { id: 'exams' as MainTab, icon: Award, color: 'text-rose-400', label: t.navExams || 'Goethe / telc Prüfung' },
                { id: 'writing' as MainTab, icon: PenTool, color: 'text-cyan-400', label: t.navWriting || 'Schreib-Leitfaden' },
                { id: 'pronunciation' as MainTab, icon: Volume2, color: 'text-purple-400', label: t.navPronunciation || 'Aussprache & IPA' }
              ].map((item) => {
                const Icon = item.icon;
                const isCurrent = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleItemClick(() => onSelectTab(item.id))}
                    className={`w-full flex items-center gap-2 px-2.5 py-2 text-xs rounded font-medium transition-colors cursor-pointer ${
                      isCurrent
                        ? 'bg-blue-600 text-white shadow-xs font-semibold'
                        : 'text-slate-300 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    <Icon size={14} className={isCurrent ? 'text-white' : item.color} />
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Answer Key & Free Cloud Hosting Tools */}
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 px-1 tracking-wider">
              Hilfen & Cloud
            </div>
            <div className="space-y-1">
              {onOpenAnswerKey && (
                <button
                  onClick={() => handleItemClick(onOpenAnswerKey)}
                  className="w-full flex items-center justify-between px-2.5 py-2 text-xs rounded font-medium transition-colors bg-amber-500/15 text-amber-300 hover:bg-amber-500/25 border border-amber-500/30 cursor-pointer shadow-xs"
                  title="Antwortschlüssel und Lösungen für alle Übungen und Prüfungen"
                >
                  <div className="flex items-center gap-2">
                    <KeyRound size={14} className="text-amber-400" />
                    <span className="font-semibold">{t.navAnswerKey || 'Lösungsheft (Antworten)'}</span>
                  </div>
                  <span className="text-[9px] bg-amber-500/30 text-amber-200 px-1 rounded font-mono">
                    A1-C2
                  </span>
                </button>
              )}

              {onOpenDesktopInstall && (
                <button
                  onClick={() => handleItemClick(onOpenDesktopInstall)}
                  className="w-full flex items-center justify-between px-2.5 py-2 text-xs rounded font-medium transition-colors bg-blue-500/15 text-blue-300 hover:bg-blue-500/25 border border-blue-500/30 cursor-pointer shadow-xs"
                  title="نصب آسان برنامه روی کامپیوتر (ویندوز و مک) - آفلاین"
                >
                  <div className="flex items-center gap-2">
                    <Laptop size={14} className="text-blue-400" />
                    <span className="font-semibold">
                      {language === 'fa' || language === 'prs' ? 'نصب روی کامپیوتر' : 'App auf PC installieren'}
                    </span>
                  </div>
                  <span className="text-[9px] bg-blue-500/30 text-blue-200 px-1.5 py-0.5 rounded font-bold">
                    PC / Mac
                  </span>
                </button>
              )}
            </div>
          </div>

          {/* Lesson List (Syllabus) */}
          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1.5 px-1 tracking-wider flex justify-between items-center">
              <span>Lektionen in {currentLevel}</span>
              <span className="text-slate-400 font-mono text-[9px] bg-slate-800 px-1.5 py-0.5 rounded">
                {lessonsForLevel.length} درس
              </span>
            </div>

            <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
              {lessonsForLevel.map((lek) => {
                const isSelected = activeTab === 'lesson' && currentLessonId === lek.id;
                return (
                  <button
                    key={lek.id}
                    onClick={() => handleItemClick(() => {
                      onSelectLesson(lek.id);
                      onSelectTab('lesson');
                    })}
                    className={`w-full text-left p-2 rounded text-xs transition-colors flex items-center justify-between cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600/20 text-white rounded font-medium border-l-4 border-blue-400'
                        : 'text-slate-400 hover:bg-white/5 hover:text-slate-200'
                    }`}
                  >
                    <span className="truncate pr-1">
                      Lektion {lek.lektionNumber}: {lek.title.split('!')[0].split('.')[0]}
                    </span>
                    <span className="text-[9px] font-mono px-1 rounded bg-slate-700/60 text-slate-300 shrink-0">
                      A-E
                    </span>
                  </button>
                );
              })}

              {lessonsForLevel.length === 0 && (
                <div className="p-2.5 text-[11px] text-slate-400 bg-slate-900/40 rounded border border-slate-700/50 italic">
                  Keine Lektionen für Level {currentLevel} gefunden.
                </div>
              )}
            </div>
          </div>
        </nav>

        {/* PWA Install & Language Selector Footer */}
        <div className="p-3 border-t border-slate-700 bg-[#0F172A] relative space-y-2">
          <div className="flex items-center justify-between">
            <div className="text-[10px] text-slate-400 font-bold uppercase px-1 tracking-wider">
              Offline App
            </div>
            <PWAInstallButton compact={true} />
          </div>

          <div>
            <div className="text-[10px] text-slate-400 font-bold uppercase mb-1 px-1 tracking-wider">
              Muttersprache
            </div>
            <button
              onClick={() => setShowLangMenu(!showLangMenu)}
              className="w-full flex items-center justify-between p-1.5 px-2 rounded bg-slate-800 border border-slate-700 text-xs text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-1.5">
                <span>{currentLangObj.flag}</span>
                <span className="font-bold">{currentLangObj.name.toUpperCase()}</span>
              </div>
              <ChevronDown size={12} className="text-slate-400" />
            </button>
          </div>

          {showLangMenu && (
            <div className="absolute bottom-full left-3 right-3 mb-1 bg-[#1E293B] border border-slate-600 rounded shadow-xl py-1 z-30">
              {SUPPORTED_LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    onSelectLanguage(lang.code);
                    setShowLangMenu(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between hover:bg-slate-700 cursor-pointer ${
                    language === lang.code ? 'bg-blue-600 text-white font-bold' : 'text-slate-300'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName} ({lang.name})</span>
                  </span>
                  {lang.dir === 'rtl' && (
                    <span className="text-[9px] bg-slate-700 px-1 rounded text-slate-300">RTL</span>
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};
