import React, { useState, useMemo } from 'react';
import { CEFRLevel, MainTab, Lesson } from '../types';
import { CURRICULUM_LESSONS } from '../data/curriculum';
import { buildShareUrl, getPublicBaseUrl } from '../utils/shareUrl';
import { QRCodeDisplay } from './QRCodeDisplay';
import { 
  Share2, 
  Copy, 
  Check, 
  X, 
  QrCode, 
  Send, 
  MessageCircle, 
  Mail, 
  Globe, 
  Smartphone,
  ExternalLink,
  BookOpen,
  Layers,
  FileText,
  Headphones,
  Video,
  Sparkles
} from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel?: CEFRLevel;
  currentLesson?: Lesson | null;
  currentTab?: MainTab;
  title?: string;
  text?: string;
  url?: string;
}

type ShareCategory = 'current' | 'all_lessons' | 'sections' | 'entire_app';

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  currentLevel = 'A1.1',
  currentLesson = null,
  currentTab = 'lesson',
  title: initialTitle,
  text: initialText,
  url: initialUrl,
}) => {
  const [activeCategory, setActiveCategory] = useState<ShareCategory>('current');
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(true);

  // Selected level & lesson for the "all_lessons" tab
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(currentLevel as CEFRLevel);
  const lessonsInSelectedLevel = useMemo(() => {
    return CURRICULUM_LESSONS[selectedLevel] || [];
  }, [selectedLevel]);

  const [selectedLessonId, setSelectedLessonId] = useState<string>(() => {
    return currentLesson?.id || lessonsInSelectedLevel[0]?.id || 'a1_1_lek1';
  });

  // Keep selected lesson updated when selected level changes
  React.useEffect(() => {
    if (!lessonsInSelectedLevel.some(l => l.id === selectedLessonId)) {
      if (lessonsInSelectedLevel[0]) {
        setSelectedLessonId(lessonsInSelectedLevel[0].id);
      }
    }
  }, [selectedLevel, lessonsInSelectedLevel, selectedLessonId]);

  // Selected section for "sections" tab
  const [selectedSection, setSelectedSection] = useState<MainTab>('grammar');

  if (!isOpen) return null;

  // Compute exact public share URL and details based on activeCategory
  let targetUrl = '';
  let shareTitle = '';
  let shareText = '';
  let subtitle = '';

  const publicBase = getPublicBaseUrl();

  const safeLevel = (currentLevel || 'A1.1') as CEFRLevel;
  const safeTab = (currentTab || 'lesson') as MainTab;

  if (activeCategory === 'current') {
    if (initialUrl) {
      targetUrl = initialUrl;
      shareTitle = initialTitle || `Deutsch Mussawi ${safeLevel}`;
      shareText = initialText || `Deutsch Mussawi ${safeLevel}\n${initialUrl}`;
      subtitle = initialTitle || `Deutsch Mussawi ${safeLevel}`;
    } else if (safeTab === 'lesson' && currentLesson) {
      targetUrl = buildShareUrl({ level: safeLevel, lessonId: currentLesson.id, tab: 'lesson' });
      shareTitle = `Deutsch Mussawi ${safeLevel} - Lektion ${currentLesson.lektionNumber}: ${currentLesson.title}`;
      shareText = `🇩🇪 آموزش زبان آلمانی Deutsch Mussawi\nسطح ${safeLevel} - درس ${currentLesson.lektionNumber}: ${currentLesson.title}\n\nلینک مستقیم باز کردن این درس در موبایل و کامپیوتر:\n${targetUrl}`;
      subtitle = `همین درس باز شده در صفحه: درس ${currentLesson.lektionNumber} (${currentLesson.title})`;
    } else {
      targetUrl = buildShareUrl({ level: safeLevel, tab: safeTab });
      const tabNames: Record<MainTab, string> = {
        lesson: 'درس اصلی',
        dashboard: 'داشبورد پیشرفت CEFR',
        grammar: 'دستور زبان و گرامر',
        glossary: 'واژه‌نامه و اصطلاحات',
        exercises: 'تمرینات تعاملی',
        exams: 'شبیه‌ساز آزمون استاندارد',
        writing: 'نامه‌نگاری و مکاتبات',
        pronunciation: 'آزمایشگاه تلفظ و فونتیک'
      };
      shareTitle = `Deutsch Mussawi ${safeLevel} - بخش ${tabNames[safeTab] || safeTab}`;
      shareText = `🇩🇪 آموزش آلمانی - سطح ${safeLevel} - بخش ${tabNames[safeTab] || safeTab}\n\nلینک مستقیم باز کردن در موبایل و کامپیوتر:\n${targetUrl}`;
      subtitle = `بخش فعلی: ${tabNames[safeTab] || safeTab} در سطح ${safeLevel}`;
    }
  } else if (activeCategory === 'all_lessons') {
    const chosenLesson = lessonsInSelectedLevel.find(l => l.id === selectedLessonId) || lessonsInSelectedLevel[0];
    if (chosenLesson) {
      targetUrl = buildShareUrl({ level: selectedLevel, lessonId: chosenLesson.id, tab: 'lesson' });
      shareTitle = `Deutsch Mussawi ${selectedLevel} - Lektion ${chosenLesson.lektionNumber}: ${chosenLesson.title}`;
      shareText = `🇩🇪 آموزش زبان آلمانی Deutsch Mussawi\nسطح ${selectedLevel} - درس ${chosenLesson.lektionNumber}: ${chosenLesson.title}\nموضوع: ${chosenLesson.topic}\n\nلینک مستقیم باز کردن این درس:\n${targetUrl}`;
      subtitle = `درس ${chosenLesson.lektionNumber}: ${chosenLesson.title} (${selectedLevel})`;
    } else {
      targetUrl = buildShareUrl({ level: selectedLevel, tab: 'lesson' });
      shareTitle = `Deutsch Mussawi ${selectedLevel}`;
      shareText = `🇩🇪 آموزش زبان آلمانی Deutsch Mussawi سطح ${selectedLevel}\n${targetUrl}`;
      subtitle = `سطح ${selectedLevel}`;
    }
  } else if (activeCategory === 'sections') {
    targetUrl = buildShareUrl({ level: selectedLevel, tab: selectedSection });
    const sectionInfo: Record<MainTab, { name: string; desc: string }> = {
      lesson: { name: 'درس‌های صوتی و تصویری', desc: 'شامل Foto-Hörgeschichte، دیالوگ‌ها و تمرینات گام‌به‌گام' },
      dashboard: { name: 'داشبورد ارزیابی و نمودار سطح CEFR', desc: 'مشاهده نمودار مهارت‌ها، درصد واژگان، گرامر و آمادگی آزمون' },
      grammar: { name: 'دستور زبان و گرامر (Grammatik)', desc: 'جدول فرمول‌ها، الگوهای جمله‌سازی و تمرینات ساختار' },
      glossary: { name: 'واژه‌نامه و اصطلاحات (Wortschatz)', desc: 'کلمات درس به همراه مثال، ترجمه و تلفظ صوتی' },
      exercises: { name: 'تمرینات تعاملی (Übungen)', desc: 'تمرینات تست، جای خالی و مرتب‌سازی جملات' },
      exams: { name: 'آزمون‌های استاندارد (Prüfung)', desc: 'شبیه‌ساز امتحانات گوته و ÖSD و تلک' },
      writing: { name: 'نامه‌نگاری و مکاتبات اداری (Schreiben)', desc: 'قالب‌های رسمی و دوستانه نگارش ایمیل و نامه با بررسی اشتباهات' },
      pronunciation: { name: 'آزمایشگاه فونتیک و تلفظ (Aussprache)', desc: 'تمرین آواشناسی زبان آلمانی، آهنگ کلام و تفاوت لهجه‌ها' }
    };
    const info = sectionInfo[selectedSection] || { name: selectedSection, desc: '' };
    shareTitle = `Deutsch Mussawi ${selectedLevel} - ${info.name}`;
    shareText = `🇩🇪 آموزش تخصصی آلمانی: ${info.name} (سطح ${selectedLevel})\n${info.desc}\n\nلینک مستقیم باز کردن در موبایل:\n${targetUrl}`;
    subtitle = `${info.name} - سطح ${selectedLevel}`;
  } else {
    // entire_app
    targetUrl = publicBase;
    shareTitle = 'Deutsch Mussawi Akademie (A1 - C2)';
    shareText = `🇩🇪 آکادمی جامع آموزش زبان آلمانی Deutsch Mussawi (سطوح A1 تا C2)\nشامل ویدیوها، دیالوگ‌های صوتی، گرامر، متون خواندن، نامه‌نگاری و حالت ۱۰۰٪ آفلاین رایگان\n\nلینک ورود به برنامه:\n${targetUrl}`;
    subtitle = 'دسترسی کامل به تمام سطوح از A1.1 تا C2.2';
  }

  const handleCopyLink = async () => {
    let success = false;
    // 1. Try modern clipboard API
    if (typeof navigator !== 'undefined' && navigator.clipboard && navigator.clipboard.writeText) {
      try {
        await navigator.clipboard.writeText(targetUrl);
        success = true;
      } catch (err) {
        // Fall through to fallback
      }
    }
    // 2. Fallback to execCommand copy (works in sandboxed iframes & older mobile browsers)
    if (!success && typeof document !== 'undefined') {
      try {
        const textarea = document.createElement('textarea');
        textarea.value = targetUrl;
        textarea.setAttribute('readonly', '');
        textarea.style.position = 'fixed';
        textarea.style.top = '-9999px';
        textarea.style.left = '-9999px';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand('copy');
        document.body.removeChild(textarea);
      } catch (err) {
        // Safe fail
      }
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleNativeShare = async () => {
    if (typeof navigator !== 'undefined' && typeof navigator.share === 'function') {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url: targetUrl,
        });
        return;
      } catch (err) {
        // Ignore user cancellation or iframe policy error, fall back to copy
      }
    }
    handleCopyLink();
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(targetUrl)}&text=${encodeURIComponent(shareText)}`;
  const mailUrl = `mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareText)}`;

  const levels: CEFRLevel[] = [
    'A1.1', 'A1.2', 'A2.1', 'A2.2', 'B1.1', 'B1.2', 
    'B2.1', 'B2.2', 'C1.1', 'C1.2', 'C2.1', 'C2.2'
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 animate-fadeIn select-text">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl border border-slate-200 p-5 space-y-4 text-slate-800 text-xs max-h-[92vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-blue-100 text-blue-800 rounded-lg">
              <Share2 size={20} />
            </div>
            <div>
              <h3 className="font-extrabold text-sm text-slate-900">
                مرکز اشتراک‌گذاری آکادمی (Share Studio)
              </h3>
              <p className="text-[11px] text-slate-500">
                لینک‌های عمومی و مستقیم برای ارسال به موبایل دوستان و شاگردان
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
          >
            <X size={18} />
          </button>
        </div>

        {/* Navigation Categories Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
          <button
            onClick={() => setActiveCategory('current')}
            className={`flex-1 min-w-[110px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
              activeCategory === 'current'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            همین درس / بخش جاری
          </button>
          <button
            onClick={() => setActiveCategory('all_lessons')}
            className={`flex-1 min-w-[110px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
              activeCategory === 'all_lessons'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            انتخاب از همه درس‌ها
          </button>
          <button
            onClick={() => setActiveCategory('sections')}
            className={`flex-1 min-w-[110px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
              activeCategory === 'sections'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            بخش‌های تخصصی
          </button>
          <button
            onClick={() => setActiveCategory('entire_app')}
            className={`flex-1 min-w-[110px] py-1.5 px-2 rounded-md transition-all text-center cursor-pointer ${
              activeCategory === 'entire_app'
                ? 'bg-white text-blue-700 shadow-xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            کل برنامه آکادمی
          </button>
        </div>

        {/* Filter controls based on activeCategory */}
        {activeCategory === 'all_lessons' && (
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
            <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1.5">
              <BookOpen size={14} className="text-blue-600" />
              <span>انتخاب سطح و درس مورد نظر جهت اشتراک‌گذاری:</span>
            </div>

            {/* Level selector pills */}
            <div className="flex flex-wrap gap-1">
              {levels.map((lvl) => (
                <button
                  key={lvl}
                  onClick={() => setSelectedLevel(lvl)}
                  className={`px-2 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                    selectedLevel === lvl
                      ? 'bg-blue-600 text-white'
                      : 'bg-white border border-slate-300 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {lvl}
                </button>
              ))}
            </div>

            {/* Lesson dropdown */}
            <div>
              <label className="block text-[10px] font-bold text-slate-600 mb-1">
                درس‌های سطح {selectedLevel}:
              </label>
              <select
                value={selectedLessonId}
                onChange={(e) => setSelectedLessonId(e.target.value)}
                className="w-full p-2 bg-white border border-slate-300 rounded text-xs font-medium text-slate-800 focus:outline-blue-500"
              >
                {lessonsInSelectedLevel.map((les) => (
                  <option key={les.id} value={les.id}>
                    درس {les.lektionNumber}: {les.title} ({les.topic})
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {activeCategory === 'sections' && (
          <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg space-y-2.5">
            <div className="font-bold text-slate-800 text-[11px] flex items-center gap-1.5">
              <Layers size={14} className="text-blue-600" />
              <span>انتخاب بخش تخصصی برای سطح {selectedLevel}:</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
              {[
                { id: 'grammar' as MainTab, name: 'دستور زبان (Grammatik)', icon: Layers },
                { id: 'glossary' as MainTab, name: 'واژه‌نامه (Wortschatz)', icon: FileText },
                { id: 'exercises' as MainTab, name: 'تمرینات (Übungen)', icon: Sparkles },
                { id: 'exams' as MainTab, name: 'آزمون‌ها (Prüfung)', icon: BookOpen },
                { id: 'writing' as MainTab, name: 'نامه‌نگاری (Schreiben)', icon: BookOpen },
                { id: 'pronunciation' as MainTab, name: 'تلفظ (Aussprache)', icon: Headphones },
              ].map((item) => {
                const Icon = item.icon;
                const isSelected = selectedSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedSection(item.id)}
                    className={`p-2 rounded border text-center flex flex-col items-center gap-1 cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-blue-50 border-blue-500 text-blue-800 font-bold shadow-xs'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    <Icon size={16} className={isSelected ? 'text-blue-600' : 'text-slate-500'} />
                    <span className="text-[11px]">{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Mobile Opening & Installation Helper Notice */}
        <div className="p-2.5 bg-blue-50/80 border border-blue-200 rounded-lg text-[11px] text-blue-900 space-y-1">
          <div className="font-bold flex items-center gap-1.5">
            <Smartphone size={14} className="text-blue-600" />
            <span>راهنمای باز کردن و نصب روی موبایل (iPhone / Android):</span>
          </div>
          <p className="text-blue-800 leading-relaxed text-[10.5px]">
            • برای باز کردن در گوشی خودتان: کافیست این لینک را در مرورگر <strong>Chrome</strong> یا <strong>Safari</strong> موبایل باز کنید.
            <br />
            • برای نصب روی موبایل: در آیفون گزینه <strong>Share &gt; Add to Home Screen</strong> و در اندروید منوی سه نقطه &gt; <strong>Install app</strong> را بزنید تا برنامه بدون نیاز به اینترنت و با آیکون اختصاصی روی گوشی ذخیره شود.
          </p>
        </div>

        {/* Selected Target Preview Banner */}
        <div className="p-3 bg-amber-50/80 border border-amber-200 rounded-lg space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-amber-900">
              لینک آماده اشتراک‌گذاری:
            </span>
            <span className="text-[10px] text-amber-700 font-semibold">
              عمومی و بدون نیاز به ورود (Direct Public Link)
            </span>
          </div>
          <div className="font-bold text-slate-900 text-xs truncate">
            {subtitle}
          </div>
          <div className="font-mono text-[11px] text-slate-600 bg-white/90 p-1.5 rounded border border-amber-200/80 break-all select-all">
            {targetUrl}
          </div>
        </div>

        {/* Main Share Actions: WhatsApp, Telegram, Copy, System */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg font-bold text-xs transition-all cursor-pointer shadow-xs ${
              copied
                ? 'bg-emerald-600 text-white shadow-emerald-200'
                : 'bg-slate-900 hover:bg-slate-800 text-white'
            }`}
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
            <span>{copied ? 'کپی شد! ✓' : 'کپی لینک'}</span>
          </button>

          {/* WhatsApp */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <MessageCircle size={15} />
            <span>واتساپ</span>
          </a>

          {/* Telegram */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-sky-500 hover:bg-sky-400 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <Send size={15} />
            <span>تلگرام</span>
          </a>

          {/* Native Share */}
          <button
            onClick={handleNativeShare}
            className="flex items-center justify-center gap-1.5 py-2 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 rounded-lg font-bold text-xs transition-colors cursor-pointer shadow-xs"
          >
            <Smartphone size={15} />
            <span>ارسال به موبایل</span>
          </button>
        </div>

        {/* Real Scannable QR Code Section */}
        <div className="border-t border-slate-100 pt-3">
          <button
            onClick={() => setShowQR(!showQR)}
            className="w-full flex items-center justify-between p-2 rounded-lg bg-slate-50 hover:bg-slate-100 transition-colors text-slate-700 cursor-pointer font-bold text-xs"
          >
            <div className="flex items-center gap-2">
              <QrCode size={15} className="text-blue-600" />
              <span>نمایش بارکد QR برای اسکن با دوربین موبایل</span>
            </div>
            <span className="text-[10px] text-blue-600">
              {showQR ? 'مخفی کردن ▲' : 'نمایش بارکد ▼'}
            </span>
          </button>

          {showQR && (
            <div className="mt-2.5 p-4 bg-slate-50 rounded-lg border border-slate-200 flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-right">
              <div className="shrink-0">
                <QRCodeDisplay value={targetUrl} size={130} />
              </div>
              <div className="space-y-1.5 max-w-xs">
                <div className="font-extrabold text-slate-900 text-xs">
                  اسکن مستقیم با دوربین تلفن همراه
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  کافیست دوربین هر گوشی هوشمند (آیفون یا اندروید) را روبه‌روی این بارکد بگیرید تا این درس یا بخش فوراً روی موبایل باز شود.
                </p>
                <div className="text-[10px] text-emerald-700 font-bold">
                  ✓ تست شده و کاملاً سازگار با گوشی‌های همراه
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer info & close */}
        <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[11px] text-slate-500">
          <span>قابلیت استفاده ۱۰۰٪ آفلاین بعد از باز شدن اولیه</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold transition-colors cursor-pointer"
          >
            بستن
          </button>
        </div>

      </div>
    </div>
  );
};
