import React, { useState } from 'react';
import { MainTab, LanguageCode } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { 
  Printer, 
  VolumeX, 
  Sparkles, 
  Wifi, 
  WifiOff, 
  User, 
  KeyRound, 
  Cloud,
  Menu,
  PanelLeftClose,
  PanelLeftOpen,
  PanelRightClose,
  PanelRightOpen,
  BookOpen,
  Volume2,
  Sliders,
  Laptop
} from 'lucide-react';
import { stopGermanAudio, setVoiceGenderPreference, getVoiceGenderPreference, playHighGermanAudioWithGender, unlockMobileAudio } from '../utils/speech';
import { PWAInstallButton } from './PWAInstallButton';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { VoiceSettingsModal } from './VoiceSettingsModal';
import { DailyStreak } from './DailyStreak';

interface HeaderProps {
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  language: LanguageCode;
  onOpenPrintModal: () => void;
  speechRate: number;
  onSelectSpeechRate: (rate: number) => void;
  progressPercent: number;
  onOpenAnswerKey?: () => void;
  onOpenDesktopInstall?: () => void;
  // Responsive sidebar and layout toggles
  isLeftSidebarCollapsed?: boolean;
  onToggleLeftSidebar?: () => void;
  onOpenMobileSidebar?: () => void;
  isRightPanelOpen?: boolean;
  onToggleRightPanel?: () => void;
  isFocusReadingMode?: boolean;
  onToggleFocusReadingMode?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  language,
  onOpenPrintModal,
  speechRate,
  onSelectSpeechRate,
  progressPercent,
  onOpenAnswerKey,
  onOpenDesktopInstall,
  isLeftSidebarCollapsed = false,
  onToggleLeftSidebar,
  onOpenMobileSidebar,
  isRightPanelOpen = true,
  onToggleRightPanel,
  isFocusReadingMode = false,
  onToggleFocusReadingMode
}) => {
  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;
  const isOnline = useOnlineStatus();
  const [voiceGender, setVoiceGender] = useState<'female' | 'male'>(getVoiceGenderPreference());
  const [isVoiceModalOpen, setIsVoiceModalOpen] = useState<boolean>(false);

  const handleToggleVoiceGender = () => {
    unlockMobileAudio();
    const next = voiceGender === 'female' ? 'male' : 'female';
    setVoiceGenderPreference(next);
    setVoiceGender(next);
    // Immediate audible confirmation so mobile users can hear and test the pleasant voice
    playHighGermanAudioWithGender(
      next === 'female' ? 'Guten Tag! Ich spreche mit der natürlichen Frauenstimme.' : 'Guten Tag! Ich spreche mit der natürlichen Männerstimme.',
      next,
      speechRate
    );
  };

  const tabs: { id: MainTab; label: string }[] = [
    { id: 'lesson', label: 'LERNEINHEIT' },
    { id: 'dashboard', label: 'DASHBOARD' },
    { id: 'glossary', label: 'WORTSCHATZ' },
    { id: 'grammar', label: 'GRAMMATIK' },
    { id: 'exercises', label: 'ÜBUNGEN' },
    { id: 'exams', label: 'PRÜFUNG' },
    { id: 'writing', label: 'SCHREIBEN' },
    { id: 'pronunciation', label: 'AUSSPRACHE' }
  ];

  // Calculate filled pills (4 pills total)
  const filledPills = Math.min(4, Math.max(1, Math.round((progressPercent / 100) * 4)));

  return (
    <header className="h-14 border-b border-slate-200 flex items-center justify-between px-3 sm:px-6 bg-white shrink-0 z-10 select-none gap-2">
      {/* Left section: Sidebar toggle buttons + Horizontal Tabs */}
      <div className="flex items-center space-x-2 sm:space-x-4 h-full min-w-0">
        {/* Mobile Hamburger Button */}
        {onOpenMobileSidebar && (
          <button
            onClick={onOpenMobileSidebar}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
            title="باز کردن فهرست و کتاب‌ها (Menü öffnen)"
          >
            <Menu size={20} />
          </button>
        )}

        {/* Desktop Left Sidebar Collapse/Expand Toggle Button */}
        {onToggleLeftSidebar && (
          <button
            onClick={onToggleLeftSidebar}
            className="hidden lg:flex p-1.5 rounded-lg text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer shrink-0 border border-slate-200"
            title={
              isLeftSidebarCollapsed
                ? 'باز کردن منوی سمت چپ (Seitenleiste ausklappen)'
                : 'خورد کردن منوی چپ برای خواندن راحت‌تر درس در وسط (Seitenleiste einklappen)'
            }
          >
            {isLeftSidebarCollapsed ? <PanelLeftOpen size={16} /> : <PanelLeftClose size={16} />}
          </button>
        )}

        {/* Primary Horizontal Tabs */}
        <div className="flex space-x-4 sm:space-x-6 h-full items-center overflow-x-auto no-scrollbar py-1">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => onSelectTab(tab.id)}
                className={`h-full px-1.5 sm:px-2 text-[11px] sm:text-xs uppercase tracking-wider font-bold transition-all flex items-center whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'border-b-2 border-blue-600 text-blue-600'
                    : 'text-slate-500 hover:text-slate-900 border-b-2 border-transparent'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Controls: Reading Focus Mode, Voice gender, Speed, Print/PDF */}
      <div className="flex items-center space-x-1.5 sm:space-x-2.5 shrink-0">
        {/* Daily Streak Flame Widget */}
        <DailyStreak
          language={language}
          onNavigateToDashboard={() => onSelectTab('dashboard')}
        />

        {/* Focus Reading Mode Toggle (خورد کردن هر دو منو برای باز شدن کامل وسط) */}
        {onToggleFocusReadingMode && (
          <button
            onClick={onToggleFocusReadingMode}
            className={`flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-bold border transition-all cursor-pointer ${
              isFocusReadingMode
                ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-200'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
            title="حالت مطالعه متمرکز: بستن منوهای دو طرف برای نمایش فراخ و خوانای درس در وسط صفحه"
          >
            <BookOpen size={13} className={isFocusReadingMode ? 'text-white' : 'text-blue-600'} />
            <span className="hidden xl:inline">
              {isFocusReadingMode ? 'حالت متمرکز فعال' : 'حالت خواندن وسط'}
            </span>
          </button>
        )}

        {/* Right Panel Toggle (when in lesson tab) */}
        {activeTab === 'lesson' && onToggleRightPanel && (
          <button
            onClick={onToggleRightPanel}
            className={`hidden md:flex items-center gap-1 px-2 py-1.5 rounded-lg text-[11px] font-bold border transition-colors cursor-pointer ${
              isRightPanelOpen
                ? 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                : 'bg-amber-50 text-amber-800 border-amber-300'
            }`}
            title={
              isRightPanelOpen
                ? 'خورد کردن پنل کناری واژگان برای عریض‌تر شدن متن درس'
                : 'باز کردن پنل واژگان و آمادگی آزمون'
            }
          >
            {isRightPanelOpen ? <PanelRightClose size={13} /> : <PanelRightOpen size={13} />}
            <span className="hidden 2xl:inline">
              {isRightPanelOpen ? 'بستن پنل واژگان' : 'نمایش پنل واژگان'}
            </span>
          </button>
        )}

        {/* Subtle Online / Offline Cache Indicator */}
        <div
          className={`hidden sm:flex items-center gap-1.5 px-2 py-1 rounded text-[10px] font-bold border transition-colors ${
            isOnline
              ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
              : 'bg-amber-50 text-amber-900 border-amber-300 animate-pulse'
          }`}
          title={
            isOnline
              ? 'Status: Online (Live-Verbindung aktiv & aktuell)'
              : 'Status: Offline (Lokal gespeicherter Cache - 100% offline nutzbar)'
          }
        >
          <span
            className={`w-2 h-2 rounded-full shrink-0 ${
              isOnline ? 'bg-emerald-500 shadow-xs shadow-emerald-400' : 'bg-amber-500'
            }`}
          />
          <span className="hidden md:inline font-semibold">
            {isOnline ? 'Online' : 'Offline'}
          </span>
        </div>

        {/* Pleasant Natural Voice Selector & Playback Speed */}
        <div className="flex items-center bg-slate-100 rounded-lg border border-slate-200 p-0.5 text-[10px] font-bold">
          <button
            onClick={handleToggleVoiceGender}
            title={
              voiceGender === 'female'
                ? 'صدای دلنشین: طبیعی خانم (ملودیک و واضح) - برای تعویض به آقا کلیک کنید'
                : 'صدای دلنشین: طبیعی آقا (گرم و رسا) - برای تعویض به خانم کلیک کنید'
            }
            className={`flex items-center gap-1 px-1.5 py-1 rounded transition-colors cursor-pointer ${
              voiceGender === 'female'
                ? 'bg-purple-100 text-purple-900 border border-purple-200 shadow-xs'
                : 'bg-blue-100 text-blue-900 border border-blue-200 shadow-xs'
            }`}
          >
            <Sparkles size={10} className={voiceGender === 'female' ? 'text-purple-600' : 'text-blue-600'} />
            <span className="font-semibold">
              {voiceGender === 'female' ? '♀ صدای دلنشین خانم' : '♂ صدای دلنشین آقا'}
            </span>
          </button>
          
          <span className="px-1 text-slate-300 hidden sm:inline">|</span>

          <div className="hidden sm:flex items-center">
            {[0.8, 1.0, 1.2].map((rate) => (
              <button
                key={rate}
                onClick={() => onSelectSpeechRate(rate)}
                className={`px-1.5 py-0.5 rounded transition-colors cursor-pointer ${
                  speechRate === rate
                    ? 'bg-blue-600 text-white font-bold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {rate}x
              </button>
            ))}
          </div>

          <button
            onClick={() => stopGermanAudio()}
            title="قطع صدا (Audio stoppen)"
            className="px-1.5 py-0.5 text-slate-400 hover:text-rose-600 cursor-pointer"
          >
            <VolumeX size={13} />
          </button>

          <button
            onClick={() => setIsVoiceModalOpen(true)}
            title="تنظیمات پیشرفته صدای استاندارد آلمانی (Deutsche Stimmen Einstellungen)"
            className="px-1.5 py-0.5 text-slate-500 hover:text-blue-600 cursor-pointer hover:bg-slate-200 rounded"
          >
            <Sliders size={12} />
          </button>
        </div>

        {/* Desktop Install Button */}
        {onOpenDesktopInstall && (
          <button
            onClick={onOpenDesktopInstall}
            className="bg-blue-50 hover:bg-blue-100 text-[10px] font-bold py-1.5 px-2.5 sm:px-3 rounded-lg border border-blue-200 text-blue-800 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer shrink-0"
            title="نصب آسان روی کامپیوتر (ویندوز، مک و لینوکس) - ۱۰۰٪ آفلاین"
          >
            <Laptop size={12} className="text-blue-600" />
            <span className="hidden md:inline">{language === 'fa' || language === 'prs' ? 'نصب روی کامپیوتر' : 'App installieren'}</span>
            <span className="md:hidden">{language === 'fa' || language === 'prs' ? 'نصب PC' : 'PC'}</span>
          </button>
        )}

        {/* PDF Export Button */}
        <button
          onClick={onOpenPrintModal}
          className="bg-slate-100 hover:bg-slate-200 text-[10px] font-bold py-1.5 px-2.5 sm:px-3 rounded-lg border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer shrink-0"
          title="خروجی PDF و چاپ"
        >
          <Printer size={12} className="text-blue-600" />
          <span className="hidden sm:inline">{t.printPdf || 'PDF EXPORT'}</span>
        </button>
      </div>

      {/* Standard Voice Settings Modal */}
      <VoiceSettingsModal
        isOpen={isVoiceModalOpen}
        onClose={() => {
          setIsVoiceModalOpen(false);
          setVoiceGender(getVoiceGenderPreference());
        }}
        speechRate={speechRate}
        onSelectSpeechRate={onSelectSpeechRate}
        language={language}
      />
    </header>
  );
};

