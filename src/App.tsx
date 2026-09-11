import React, { useState, useMemo, useEffect } from 'react';
import { CEFRLevel, MainTab, LanguageCode, Lesson } from './types';
import { CURRICULUM_LESSONS } from './data/curriculum';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { LessonView } from './components/LessonView';
import { GlossaryView } from './components/GlossaryView';
import { GrammarView } from './components/GrammarView';
import { ExercisesView } from './components/ExercisesView';
import { ExamView } from './components/ExamView';
import { WritingView } from './components/WritingView';
import { PronunciationView } from './components/PronunciationView';
import { DashboardView } from './components/DashboardView';
import { PrintModal } from './components/PrintModal';
import { ShareModal } from './components/ShareModal';
import { BookAnswerKeyModal } from './components/BookAnswerKeyModal';
import { DesktopInstallModal } from './components/DesktopInstallModal';
import { DesktopInstallFloatingButton } from './components/DesktopInstallFloatingButton';
import { OfflineIndicator } from './components/OfflineIndicator';

export default function App() {
  // Read initial level, lesson & tab from URL query params (e.g. ?level=A1.1&lesson=a1_1_lek1&tab=grammar)
  const initialParams = useMemo(() => {
    if (typeof window === 'undefined') return { level: 'A1.1' as CEFRLevel, lesson: 'a1_1_lek1', tab: 'dashboard' as MainTab };
    try {
      const params = new URLSearchParams(window.location.search);
      const urlLevel = params.get('level') as CEFRLevel | null;
      const urlLesson = params.get('lesson');
      const urlTab = params.get('tab') as MainTab | null;

      const validLevels: CEFRLevel[] = [
        'A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2', 
        'B2.1', 'B2.2', 'C1.1', 'C1.2', 'C2.1', 'C2.2'
      ];
      const level = (urlLevel && validLevels.includes(urlLevel)) ? urlLevel : 'A1.1';
      
      const lessonsInLevel = CURRICULUM_LESSONS[level] || [];
      const lesson = (urlLesson && lessonsInLevel.some(l => l.id === urlLesson))
        ? urlLesson
        : (lessonsInLevel[0]?.id || 'a1_1_lek1');

      const validTabs: MainTab[] = ['dashboard', 'lesson', 'grammar', 'glossary', 'exercises', 'exams', 'writing', 'pronunciation'];
      const tab = (urlTab && validTabs.includes(urlTab)) ? urlTab : 'dashboard';

      return { level, lesson, tab };
    } catch (e) {
      return { level: 'A1.1' as CEFRLevel, lesson: 'a1_1_lek1', tab: 'dashboard' as MainTab };
    }
  }, []);

  const [currentLevel, setCurrentLevel] = useState<CEFRLevel>(initialParams.level);
  const [activeTab, setActiveTab] = useState<MainTab>(initialParams.tab);
  const [language, setLanguage] = useState<LanguageCode>('prs'); // Default to Dari / Persian friendly
  const [speechRate, setSpeechRate] = useState<number>(0.9);
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isAnswerKeyOpen, setIsAnswerKeyOpen] = useState<boolean>(false);
  const [isDesktopInstallOpen, setIsDesktopInstallOpen] = useState<boolean>(false);

  // Dual sidebars & focus reading mode states
  const [isLeftSidebarCollapsed, setIsLeftSidebarCollapsed] = useState<boolean>(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState<boolean>(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState<boolean>(true);
  const [isFocusReadingMode, setIsFocusReadingMode] = useState<boolean>(false);

  const handleToggleFocusReadingMode = () => {
    setIsFocusReadingMode(prev => {
      const next = !prev;
      if (next) {
        setIsLeftSidebarCollapsed(true);
        setIsRightPanelOpen(false);
      } else {
        setIsLeftSidebarCollapsed(false);
        setIsRightPanelOpen(true);
      }
      return next;
    });
  };

  // Retrieve lessons for current level
  const lessonsForCurrentLevel = useMemo(() => {
    return CURRICULUM_LESSONS[currentLevel] || [];
  }, [currentLevel]);

  // Current selected lesson ID
  const [currentLessonId, setCurrentLessonId] = useState<string>(() => {
    return initialParams.lesson || lessonsForCurrentLevel[0]?.id || 'a1_1_lek1';
  });

  // Keep URL search parameters strictly synchronized with the selected lesson and tab
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        const url = new URL(window.location.href);
        url.searchParams.set('level', currentLevel);
        if (currentLessonId) {
          url.searchParams.set('lesson', currentLessonId);
        }
        if (activeTab) {
          url.searchParams.set('tab', activeTab);
        }
        window.history.replaceState(null, '', url.toString());
      } catch (e) {
        // Safe fallback in restrictive iframes
      }
    }
  }, [currentLevel, currentLessonId, activeTab]);

  // Keep lesson in sync when level changes
  const activeLesson: Lesson | null = useMemo(() => {
    const found = lessonsForCurrentLevel.find(l => l.id === currentLessonId);
    if (found) return found;
    return lessonsForCurrentLevel[0] || null;
  }, [lessonsForCurrentLevel, currentLessonId]);

  const handleSelectLevel = (newLevel: CEFRLevel) => {
    setCurrentLevel(newLevel);
    const newLevelLessons = CURRICULUM_LESSONS[newLevel] || [];
    if (newLevelLessons.length > 0) {
      setCurrentLessonId(newLevelLessons[0].id);
    }
  };

  const handleNavigateToLesson = (level: CEFRLevel, lektionNum: number) => {
    setCurrentLevel(level);
    const targetLessons = CURRICULUM_LESSONS[level] || [];
    const target = targetLessons.find(l => l.lektionNumber === lektionNum) || targetLessons[0];
    if (target) {
      setCurrentLessonId(target.id);
    }
    setActiveTab('lesson');
  };

  const handleDashboardNavigate = (tab: MainTab, level?: CEFRLevel, lessonId?: string) => {
    if (level) {
      handleSelectLevel(level);
    }
    if (lessonId) {
      setCurrentLessonId(lessonId);
    }
    setActiveTab(tab);
  };

  // Compute progress percent for current level
  const progressPercent = useMemo(() => {
    if (lessonsForCurrentLevel.length === 0) return 0;
    const currentIndex = lessonsForCurrentLevel.findIndex(l => l.id === (activeLesson?.id || ''));
    if (currentIndex === -1) return 25;
    return Math.min(100, Math.round(((currentIndex + 1) / lessonsForCurrentLevel.length) * 100));
  }, [lessonsForCurrentLevel, activeLesson]);

  // Exact share URL for the active lesson
  const activeLessonShareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?level=${encodeURIComponent(currentLevel)}&lesson=${encodeURIComponent(activeLesson?.id || currentLessonId)}`
    : `https://deutsch-mussawi.app/?level=${currentLevel}&lesson=${activeLesson?.id || currentLessonId}`;

  return (
    <div className="w-full h-screen bg-[#F1F5F9] flex overflow-hidden font-sans text-slate-900 select-text">
      {/* Sidebar matching High Density Design HTML with Desktop Mini-Rail & Mobile Drawer */}
      <Sidebar
        currentLevel={currentLevel}
        onSelectLevel={handleSelectLevel}
        currentLessonId={activeLesson?.id || currentLessonId}
        onSelectLesson={(id) => setCurrentLessonId(id)}
        activeTab={activeTab}
        onSelectTab={(tab) => setActiveTab(tab)}
        language={language}
        onSelectLanguage={(lang) => setLanguage(lang)}
        progressPercent={progressPercent}
        onOpenAnswerKey={() => setIsAnswerKeyOpen(true)}
        onOpenDesktopInstall={() => setIsDesktopInstallOpen(true)}
        isCollapsed={isLeftSidebarCollapsed}
        onToggleCollapse={() => setIsLeftSidebarCollapsed(prev => !prev)}
        isMobileOpen={isMobileSidebarOpen}
        onCloseMobile={() => setIsMobileSidebarOpen(false)}
      />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col bg-white overflow-hidden min-w-0">
        {/* Top Header matching High Density Design HTML with Sidebars & Voice Controls */}
        <Header
          activeTab={activeTab}
          onSelectTab={(tab) => setActiveTab(tab)}
          language={language}
          onOpenPrintModal={() => setIsPrintModalOpen(true)}
          speechRate={speechRate}
          onSelectSpeechRate={(rate) => setSpeechRate(rate)}
          progressPercent={progressPercent}
          onOpenAnswerKey={() => setIsAnswerKeyOpen(true)}
          onOpenDesktopInstall={() => setIsDesktopInstallOpen(true)}
          isLeftSidebarCollapsed={isLeftSidebarCollapsed}
          onToggleLeftSidebar={() => setIsLeftSidebarCollapsed(prev => !prev)}
          onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
          isRightPanelOpen={isRightPanelOpen}
          onToggleRightPanel={() => setIsRightPanelOpen(prev => !prev)}
          isFocusReadingMode={isFocusReadingMode}
          onToggleFocusReadingMode={handleToggleFocusReadingMode}
        />

        {/* Dynamic View Canvas */}
        <div className="flex-1 p-3 sm:p-4 md:p-6 overflow-y-auto bg-[#F8FAFC]">
          {activeTab === 'lesson' && activeLesson && (
            <LessonView
              lesson={activeLesson}
              allLessons={lessonsForCurrentLevel}
              onSelectLesson={(id) => setCurrentLessonId(id)}
              language={language}
              speechRate={speechRate}
              onNavigateTab={(tab) => setActiveTab(tab)}
              onOpenShareModal={() => setIsShareModalOpen(true)}
              isRightPanelOpen={isRightPanelOpen}
              onToggleRightPanel={() => setIsRightPanelOpen(prev => !prev)}
            />
          )}

          {activeTab === 'dashboard' && (
            <DashboardView
              currentLevel={currentLevel}
              onSelectLevel={handleSelectLevel}
              onNavigateToTab={handleDashboardNavigate}
              language={language}
            />
          )}

          {activeTab === 'glossary' && (
            <GlossaryView
              currentLevel={currentLevel}
              language={language}
              speechRate={speechRate}
              onNavigateToLesson={handleNavigateToLesson}
            />
          )}

          {activeTab === 'grammar' && (
            <GrammarView
              currentLevel={currentLevel}
              language={language}
              speechRate={speechRate}
              onNavigateToLesson={handleNavigateToLesson}
            />
          )}

          {activeTab === 'exercises' && (
            <ExercisesView
              currentLevel={currentLevel}
              language={language}
              speechRate={speechRate}
              onNavigateToLesson={handleNavigateToLesson}
            />
          )}

          {activeTab === 'exams' && (
            <ExamView
              currentLevel={currentLevel}
              language={language}
              speechRate={speechRate}
            />
          )}

          {activeTab === 'writing' && (
            <WritingView
              currentLevel={currentLevel}
              language={language}
              speechRate={speechRate}
            />
          )}

          {activeTab === 'pronunciation' && (
            <PronunciationView
              language={language}
              speechRate={speechRate}
            />
          )}
        </div>
      </main>

      {/* PDF / Print Modal */}
      <PrintModal
        isOpen={isPrintModalOpen}
        onClose={() => setIsPrintModalOpen(false)}
        currentLevel={currentLevel}
        currentLesson={activeLesson}
        language={language}
      />

      {/* Specific Lesson Share Modal */}
      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
        title={`Deutsch Mussawi: ${activeLesson?.title || 'Lektion'}`}
        text={`آموزش آلمانی سطح ${currentLevel} - درس ${activeLesson?.lektionNumber}: ${activeLesson?.title}\nلینک مستقیم این درس:`}
        url={activeLessonShareUrl}
      />

      {/* Complete Book Answer Key Modal (Lösungen für alle Lektionen & Prüfungen) */}
      <BookAnswerKeyModal
        isOpen={isAnswerKeyOpen}
        onClose={() => setIsAnswerKeyOpen(false)}
        currentLevel={currentLevel}
        language={language}
      />

      {/* Comprehensive Desktop Installation Modal */}
      <DesktopInstallModal
        isOpen={isDesktopInstallOpen}
        onClose={() => setIsDesktopInstallOpen(false)}
        language={language}
      />

      {/* Floating PWA Install Button for Desktop Users */}
      <DesktopInstallFloatingButton onOpenModal={() => setIsDesktopInstallOpen(true)} />

      {/* PWA Offline Mode Indicator */}
      <OfflineIndicator />
    </div>
  );
}
