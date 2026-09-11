import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { getPublicBaseUrl } from '../utils/shareUrl';
import { LanguageCode } from '../types';
import { 
  Laptop, 
  MonitorDown, 
  WifiOff, 
  X, 
  Check, 
  Download, 
  ExternalLink, 
  Chrome, 
  Compass, 
  Layers, 
  Share2, 
  Sparkles,
  Apple,
  FileCode,
  ShieldCheck
} from 'lucide-react';

interface DesktopInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  language?: LanguageCode;
}

export const DesktopInstallModal: React.FC<DesktopInstallModalProps> = ({
  isOpen,
  onClose,
  language = 'prs'
}) => {
  const { isInstallable, isInstalled, isInIframe, install } = usePWAInstall();
  const [installing, setInstalling] = useState(false);
  const [installSuccess, setInstallSuccess] = useState(false);
  const [activeBrowserTab, setActiveBrowserTab] = useState<'chrome' | 'edge' | 'safari' | 'shortcut'>('chrome');
  const [downloadedShortcut, setDownloadedShortcut] = useState(false);

  if (!isOpen) return null;

  const isFaOrPrs = language === 'prs' || language === 'fa';

  const handleDirectInstall = async () => {
    if (isInstallable) {
      setInstalling(true);
      try {
        const success = await install();
        if (success) {
          setInstallSuccess(true);
        }
      } catch (err) {
        console.warn('Install error:', err);
      } finally {
        setInstalling(false);
      }
    } else if (isInIframe) {
      handleOpenInNewTab();
    }
  };

  const handleOpenInNewTab = () => {
    const publicUrl = getPublicBaseUrl();
    const targetUrl = typeof window !== 'undefined' ? (window.location.href.includes('http') ? window.location.href : publicUrl) : publicUrl;
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDownloadWindowsShortcut = () => {
    try {
      const targetUrl = typeof window !== 'undefined' && window.location.href.startsWith('http') 
        ? window.location.href 
        : getPublicBaseUrl();
      
      const iconUrl = `${window.location.origin}/favicon.ico`;
      
      const shortcutContent = [
        '[InternetShortcut]',
        `URL=${targetUrl}`,
        `IconFile=${iconUrl}`,
        'IconIndex=0',
        'HotKey=0',
        `[{000214A0-0000-0000-C000-000000000046}]`,
        `Prop3=19,11`,
      ].join('\r\n');

      const blob = new Blob([shortcutContent], { type: 'application/x-mswinurl;charset=utf-8' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'Deutsch-Mussawi-Akademie.url';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(link.href);
      setDownloadedShortcut(true);
      setTimeout(() => setDownloadedShortcut(false), 5000);
    } catch (err) {
      console.error('Failed to create shortcut:', err);
    }
  };

  return (
    <div 
      id="desktop-install-modal"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 backdrop-blur-xs p-3 sm:p-4 overflow-y-auto animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="desktop-install-modal-title"
    >
      <div className="w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-blue-950 text-white p-4 sm:p-5 flex items-center justify-between border-b border-slate-700/80">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-blue-500/20 border border-blue-400/30 text-blue-300 rounded-xl shrink-0">
              <Laptop size={22} className="stroke-[2.2]" />
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h3 id="desktop-install-modal-title" className="font-extrabold text-base sm:text-lg text-white">
                  {isFaOrPrs ? 'نصب آسان روی کامپیوتر (ویندوز / مک)' : 'Easy Desktop Install (PC & Mac)'}
                </h3>
                <span className="bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1">
                  <WifiOff size={10} />
                  <span>۱۰۰٪ آفلاین</span>
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                {isFaOrPrs 
                  ? 'اجرا مانند نرم‌افزار بدون نیاز به اینترنت و بدون افت سرعت' 
                  : 'Run as a standalone offline desktop application on Windows, macOS & Linux'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-2 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer shrink-0"
            aria-label="Close"
          >
            <X size={19} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-4 sm:p-5 overflow-y-auto space-y-4 text-slate-800 text-xs sm:text-sm">
          
          {/* Status / Quick Action Banner */}
          {isInstalled || installSuccess ? (
            <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-950 flex items-start gap-3">
              <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg shrink-0 mt-0.5">
                <Check size={18} className="stroke-[2.5]" />
              </div>
              <div>
                <h4 className="font-bold text-emerald-900 text-sm">
                  {isFaOrPrs ? 'برنامه با موفقیت نصب شده است!' : 'App is Installed Successfully!'}
                </h4>
                <p className="text-xs text-emerald-800/90 mt-1 leading-relaxed">
                  {isFaOrPrs 
                    ? 'این برنامه اکنون در منوی استارت یا دسکتاپ شما موجود است و تمامی سطوح A1 تا C2، دیکشنری، آزمون‌ها و تمرین‌ها به صورت کامل بدون اینترنت کار می‌کنند.' 
                    : 'The app is now installed on your desktop and operates 100% offline with all curriculum materials cached.'}
                </p>
              </div>
            </div>
          ) : isInIframe ? (
            /* Warning & Solution for iFrame preview */
            <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-xl space-y-3">
              <div className="flex items-start gap-2.5">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-lg shrink-0 mt-0.5">
                  <Sparkles size={18} className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-amber-950 text-xs sm:text-sm">
                    {isFaOrPrs 
                      ? 'چرا مستقیماً در این پنجره نصب نمی‌شود؟' 
                      : 'Why is installation blocked inside this window?'}
                  </h4>
                  <p className="text-xs text-amber-900/90 mt-1 leading-relaxed">
                    {isFaOrPrs 
                      ? 'این صفحه در حال حاضر داخل یک قاب پیش‌نمایش (iFrame) قرار دارد و مرورگرهای کروم و اج به دلایل امنیتی نصب برنامه را داخل قاب غیرفعال می‌کنند. برای نصب فوری با یک کلیک، دکمه زیر را بزنید تا برنامه در صفحه مستقل باز شود:'
                      : 'This preview runs inside a sandbox iframe. Modern desktop browsers require the main window to trigger native installation. Click below to open directly:'}
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-1">
                <button
                  onClick={handleOpenInNewTab}
                  className="flex-1 py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer text-xs sm:text-sm"
                >
                  <ExternalLink size={16} />
                  <span>{isFaOrPrs ? '۱. باز کردن در صفحه اصلی و نصب با یک کلیک' : '1. Open Standalone Page to Install'}</span>
                </button>

                <button
                  onClick={handleDownloadWindowsShortcut}
                  className="py-2.5 px-3 bg-white hover:bg-slate-50 text-slate-800 font-semibold border border-amber-300 rounded-xl flex items-center justify-center gap-1.5 transition-all cursor-pointer text-xs shrink-0"
                  title="دانلود فایل میانبر برای دسکتاپ ویندوز"
                >
                  <Download size={14} className="text-amber-600" />
                  <span>{downloadedShortcut ? (isFaOrPrs ? 'دانلود شد!' : 'Downloaded!') : (isFaOrPrs ? 'دانلود فایل میانبر دسکتاپ' : 'Download Shortcut')}</span>
                </button>
              </div>
            </div>
          ) : isInstallable ? (
            /* Native Install Ready */
            <div className="p-4 bg-blue-50 border border-blue-300 rounded-xl space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-blue-950 text-sm">
                  <MonitorDown size={18} className="text-blue-600" />
                  <span>{isFaOrPrs ? 'نصب مستقیم با یک کلیک آماده است' : 'One-Click Direct Install Ready'}</span>
                </div>
                <span className="text-[10px] bg-blue-200 text-blue-900 font-bold px-2 py-0.5 rounded">
                  PWA Ready
                </span>
              </div>
              <p className="text-xs text-blue-900/90 leading-relaxed">
                {isFaOrPrs 
                  ? 'مرورگر شما آماده است تا این برنامه را به صورت یک نرم‌افزار کامل، سریع و مستقل به کامپیوتر شما اضافه کند.' 
                  : 'Your browser is ready to install Deutsch Mussawi as a native standalone desktop app.'}
              </p>
              <button
                onClick={handleDirectInstall}
                disabled={installing}
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer text-sm disabled:opacity-75"
              >
                <Download size={18} className={installing ? 'animate-bounce' : ''} />
                <span>
                  {installing 
                    ? (isFaOrPrs ? 'در حال اجرای پنجره نصب...' : 'Opening install dialog...') 
                    : (isFaOrPrs ? 'نصب فوری برنامه روی کامپیوتر (Install)' : 'Install on Desktop Now')}
                </span>
              </button>
            </div>
          ) : (
            /* Direct shortcut option */
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between gap-3">
              <div>
                <div className="font-bold text-slate-900 text-xs sm:text-sm flex items-center gap-1.5">
                  <FileCode size={16} className="text-blue-600" />
                  <span>{isFaOrPrs ? 'راهکار سریع: فایل میانبر دسکتاپ (Windows Shortcut)' : 'Quick Method: Windows Desktop Shortcut'}</span>
                </div>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  {isFaOrPrs 
                    ? 'فایل میانبر را دانلود کرده و روی دسکتاپ قرار دهید تا با یک کلیک باز شود.' 
                    : 'Download a desktop shortcut file to launch directly with one double-click.'}
                </p>
              </div>
              <button
                onClick={handleDownloadWindowsShortcut}
                className="py-2 px-3 bg-slate-900 hover:bg-blue-900 text-white font-bold rounded-xl flex items-center gap-1.5 text-xs transition-colors shrink-0 cursor-pointer shadow-xs"
              >
                <Download size={14} />
                <span>{downloadedShortcut ? (isFaOrPrs ? 'دانلود شد!' : 'Downloaded!') : (isFaOrPrs ? 'دانلود میانبر' : 'Download')}</span>
              </button>
            </div>
          )}

          {/* Step-by-Step Browser Guides */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <span className="font-bold text-slate-800 text-xs">
                {isFaOrPrs ? 'راهنمای گام‌به‌گام برای مرورگرهای مختلف:' : 'Browser-Specific Installation Steps:'}
              </span>
            </div>

            {/* Browser Tabs */}
            <div className="flex rounded-xl bg-slate-100 p-1 gap-1">
              <button
                onClick={() => setActiveBrowserTab('chrome')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeBrowserTab === 'chrome'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Chrome size={14} className="text-amber-500" />
                <span>Chrome</span>
              </button>

              <button
                onClick={() => setActiveBrowserTab('edge')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeBrowserTab === 'edge'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Compass size={14} className="text-blue-500" />
                <span>Edge</span>
              </button>

              <button
                onClick={() => setActiveBrowserTab('safari')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeBrowserTab === 'safari'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Apple size={14} className="text-slate-700" />
                <span>Mac (Safari)</span>
              </button>

              <button
                onClick={() => setActiveBrowserTab('shortcut')}
                className={`flex-1 py-1.5 px-2 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                  activeBrowserTab === 'shortcut'
                    ? 'bg-white text-blue-700 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers size={14} className="text-emerald-600" />
                <span>{isFaOrPrs ? 'سایر روش‌ها' : 'Other'}</span>
              </button>
            </div>

            {/* Tab Content */}
            <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-xl">
              {activeBrowserTab === 'chrome' && (
                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Chrome size={14} className="text-amber-500" />
                    <span>{isFaOrPrs ? 'نصب در گوگل کروم (Google Chrome روی ویندوز و مک):' : 'Installing via Google Chrome:'}</span>
                  </div>
                  <ol className="space-y-1.5 list-decimal list-inside pl-1 text-[11px] sm:text-xs">
                    <li>
                      {isFaOrPrs 
                        ? 'در بالای مرورگر، سمت راست نوار آدرس URL، به دنبال آیکون ' 
                        : 'In the address bar on top right, look for the '}
                      <strong className="text-slate-950 bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300 font-mono">⊕ نصب برنامه (Install)</strong>
                      {isFaOrPrs ? ' بگردید و روی آن کلیک کنید.' : ' icon and click it.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'یا روی منوی سه نقطه (⋮) بالای کروم کلیک کنید > گزینه ' 
                        : 'Or click the 3 dots (⋮) menu in Chrome > '}
                      <strong>ذخیره و اشتراک‌گذاری (Cast, save and share)</strong>
                      {isFaOrPrs ? ' > سپس ' : ' > '}
                      <strong className="text-blue-700">نصب به عنوان اپلیکیشن (Install this site as an app)</strong>
                      {isFaOrPrs ? ' را انتخاب کنید.' : '.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'روی دکمه Install کلیک کنید؛ برنامه بلافاصله با پنجره مستقل باز شده و آیکون آن روی دسکتاپ قرار می‌گیرد.' 
                        : 'Click Install; the app opens in its own window with an icon on your desktop.'}
                    </li>
                  </ol>
                </div>
              )}

              {activeBrowserTab === 'edge' && (
                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Compass size={14} className="text-blue-500" />
                    <span>{isFaOrPrs ? 'نصب در مایکروسافت اج (Microsoft Edge در ویندوز ۱۰ و ۱۱):' : 'Installing via Microsoft Edge:'}</span>
                  </div>
                  <ol className="space-y-1.5 list-decimal list-inside pl-1 text-[11px] sm:text-xs">
                    <li>
                      {isFaOrPrs 
                        ? 'در نوار آدرس اج، روی علامت ' 
                        : 'In Edge URL bar, click the '}
                      <strong className="text-slate-950 bg-blue-100 px-1.5 py-0.5 rounded border border-blue-300">نصب برنامه (App available ⊕)</strong>
                      {isFaOrPrs ? ' کلیک کنید.' : '.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'یا روی منوی سه‌نقطه (...) > گزینه ' 
                        : 'Or click (...) > '}
                      <strong>Apps (برنامه‌ها)</strong>
                      {isFaOrPrs ? ' > گزینه ' : ' > '}
                      <strong className="text-blue-700">Install this site as an app</strong>
                      {isFaOrPrs ? ' را بزنید.' : '.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'تیک Pin to taskbar (سنجاق به نوار وظیفه) و Create Desktop shortcut را بزنید تا برنامه همیشه دم دستتان باشد.' 
                        : 'Check "Pin to taskbar" and "Create Desktop shortcut" for instant access.'}
                    </li>
                  </ol>
                </div>
              )}

              {activeBrowserTab === 'safari' && (
                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Apple size={14} className="text-slate-800" />
                    <span>{isFaOrPrs ? 'نصب در مک اپل (Apple macOS Safari):' : 'Installing on macOS (Safari):'}</span>
                  </div>
                  <ol className="space-y-1.5 list-decimal list-inside pl-1 text-[11px] sm:text-xs">
                    <li>
                      {isFaOrPrs 
                        ? 'در سافاری مک، از نوار منوی بالای صفحه روی ' 
                        : 'In Safari, click the '}
                      <strong>File (فایل)</strong>
                      {isFaOrPrs ? ' کلیک کنید.' : ' menu on top bar.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'گزینه ' 
                        : 'Select '}
                      <strong className="text-blue-700 bg-slate-200 px-1.5 py-0.5 rounded">Add to Dock (افزودن به داک)</strong>
                      {isFaOrPrs ? ' را انتخاب نمایید.' : '.'}
                    </li>
                    <li>
                      {isFaOrPrs 
                        ? 'نام را تایید کرده و روی Add بزنید؛ برنامه با آیکون اختصاصی به Dock مک اضافه می‌شود.' 
                        : 'Click Add; the app is added to your macOS Dock as a native Mac app.'}
                    </li>
                  </ol>
                </div>
              )}

              {activeBrowserTab === 'shortcut' && (
                <div className="space-y-2.5 text-xs text-slate-700 leading-relaxed">
                  <div className="font-bold text-slate-900 flex items-center gap-1.5">
                    <Layers size={14} className="text-emerald-600" />
                    <span>{isFaOrPrs ? 'روش‌های دیگر برای دسترسی سریع آفلاین:' : 'Alternative Quick Access Methods:'}</span>
                  </div>
                  <ul className="space-y-1.5 list-disc list-inside pl-1 text-[11px] sm:text-xs">
                    <li>
                      <strong>{isFaOrPrs ? 'بوک‌مارک فوری:' : 'Bookmark:'}</strong> {isFaOrPrs ? 'کلیدهای Ctrl + D (در مک Cmd + D) را فشار دهید تا صفحه همیشه در دسترس باشد.' : 'Press Ctrl+D (or Cmd+D on Mac) to bookmark.'}
                    </li>
                    <li>
                      <strong>{isFaOrPrs ? 'کشیدن به دسکتاپ (Drag & Drop):' : 'Drag to Desktop:'}</strong> {isFaOrPrs ? 'آیکون قفل کنار آدرس URL را بگیرید و روی صفحه دسکتاپ بکشید و رها کنید.' : 'Drag the lock icon beside the URL to your Desktop.'}
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Offline Assurance Box */}
          <div className="p-3 bg-emerald-50/70 border border-emerald-200 rounded-xl flex items-center gap-2.5 text-emerald-950 text-xs">
            <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
            <p className="leading-snug text-[11px] sm:text-xs">
              {isFaOrPrs 
                ? 'پس از نصب، کل حافظه پنهان برنامه با استاندارد PWA و Service Worker ذخیره می‌شود و حتی هنگام قطعی کامل اینترنت، تمامی بخش‌ها به سرعت باز می‌شوند.'
                : 'After installation, all curriculum data is permanently cached offline via service worker.'}
            </p>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-3.5 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
          <button
            onClick={handleDownloadWindowsShortcut}
            className="text-xs text-slate-600 hover:text-blue-700 font-semibold flex items-center gap-1.5 cursor-pointer py-1 px-2 rounded hover:bg-slate-200/60 transition-colors"
          >
            <Download size={13} />
            <span>{isFaOrPrs ? 'دانلود میانبر دسکتاپ (.url)' : 'Download .url shortcut'}</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold text-xs rounded-xl transition-colors cursor-pointer"
          >
            {isFaOrPrs ? 'بستن' : 'Close'}
          </button>
        </div>

      </div>
    </div>
  );
};
