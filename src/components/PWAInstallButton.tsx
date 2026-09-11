import React, { useState } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { getPublicBaseUrl } from '../utils/shareUrl';
import { QRCodeDisplay } from './QRCodeDisplay';
import { 
  Download, 
  Share, 
  X, 
  Check, 
  Laptop, 
  Smartphone, 
  ExternalLink, 
  Sparkles,
  ArrowUpRight
} from 'lucide-react';

interface PWAInstallButtonProps {
  compact?: boolean;
}

export const PWAInstallButton: React.FC<PWAInstallButtonProps> = ({ compact = false }) => {
  const { isInstallable, isInstalled, isIOS, isAndroid, isInIframe, install } = usePWAInstall();
  const [showModal, setShowModal] = useState(false);
  const [installing, setInstalling] = useState(false);

  const publicUrl = getPublicBaseUrl();

  // If already running in standalone mode (already installed as PWA)
  if (isInstalled) {
    return (
      <div 
        className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200"
        title="App ist installiert und läuft als eigenständige PWA"
      >
        <Check size={11} className="text-emerald-600 shrink-0" />
        <span>PWA Aktiv (نصب شده)</span>
      </div>
    );
  }

  const handleInstallClick = async () => {
    // If browser supports direct native prompt and event captured
    if (isInstallable) {
      setInstalling(true);
      try {
        const success = await install();
        if (!success) {
          setShowModal(true);
        }
      } finally {
        setInstalling(false);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleOpenStandaloneTab = () => {
    const directUrl = typeof window !== 'undefined' ? window.location.href : publicUrl;
    window.open(directUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        disabled={installing}
        className={`flex items-center gap-1.5 font-bold rounded cursor-pointer transition-all ${
          compact
            ? 'px-2 py-1 text-[11px] bg-amber-500 hover:bg-amber-600 text-slate-950 shadow-xs'
            : 'px-3 py-1.5 text-xs bg-amber-400 hover:bg-amber-500 text-slate-950 font-semibold shadow-xs'
        }`}
        title="App auf Computer oder Handy installieren (100% Offline-fähig)"
      >
        <Download size={14} className="shrink-0 animate-bounce" />
        <span>{installing ? 'Wird installiert...' : 'App installieren / نصب برنامه'}</span>
      </button>

      {/* Installation Hub Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-3 animate-fadeIn">
          <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 p-5 space-y-4 text-slate-800 text-xs max-h-[92vh] overflow-y-auto">
            
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 bg-amber-100 text-amber-800 rounded-lg">
                  <Download size={20} />
                </div>
                <div>
                  <h3 className="font-extrabold text-sm text-slate-900">
                    نصب برنامه روی کامپیوتر و موبایل (PWA Install)
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    قابل اجرا و استفاده ۱۰۰٪ آفلاین در سراسر جهان بدون نیاز به اینترنت
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1 rounded-lg transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* In-Iframe Primary Action (AI Studio Preview Solution) */}
            {isInIframe && (
              <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-lg space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                  <Sparkles size={15} className="text-amber-600" />
                  <span>راهنمای مهم: فعال‌سازی نصب مستقیم در مرورگر</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  مرورگرها (کروم، اج و سافاری) به دلایل امنیتی، دکمه نصب مستقیم را درون کادر پیش‌نمایش قفل می‌کنند. برای فعال‌سازی فوری نصب، روی دکمه زیر کلیک کنید تا برنامه در یک تب مستقل باز شده و دکمه نصب سیستم فعال گردد:
                </p>
                <button
                  onClick={handleOpenStandaloneTab}
                  className="w-full py-2 px-3 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-lg flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer text-xs"
                >
                  <ExternalLink size={15} />
                  <span>باز کردن در تب مستقل برای نصب مستقیم روی سیستم</span>
                </button>
              </div>
            )}

            {/* Direct Direct Prompt for Chrome if available outside iframe */}
            {isInstallable && !isInIframe && (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg space-y-2">
                <div className="flex items-center gap-1.5 font-bold text-emerald-900 text-xs">
                  <Check size={16} className="text-emerald-600" />
                  <span>آماده نصب مستقیم روی این مرورگر</span>
                </div>
                <button
                  onClick={install}
                  className="w-full py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer text-xs"
                >
                  <Download size={15} />
                  <span>تایید و نصب فوری روی دستگاه (Install Now)</span>
                </button>
              </div>
            )}

            {/* QR Code Quick Scan for Mobile Installation */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center gap-3">
              <div className="shrink-0">
                <QRCodeDisplay value={publicUrl} size={110} />
              </div>
              <div className="space-y-1 text-center sm:text-right">
                <div className="font-bold text-slate-900 text-xs flex items-center justify-center sm:justify-start gap-1.5">
                  <Smartphone size={15} className="text-blue-600" />
                  <span>نصب فوری روی موبایل با اسکن دوربین</span>
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  دوربین گوشی (اندروید یا آیفون) خود را مقابل این بارکد بگیرید تا برنامه مستقیماً باز شده و با ۱ کلیک به صفحه اصلی گوشی شما اضافه شود.
                </p>
                <div className="text-[10px] text-emerald-700 font-semibold">
                  ✓ بدون نیاز به حساب گوگل یا ثبت‌نام
                </div>
              </div>
            </div>

            {/* OS Specific Guides */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {/* iOS Safari */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                  <Smartphone size={14} className="text-blue-600" />
                  <span>روی آیفون (iOS Safari):</span>
                </div>
                <ol className="text-slate-600 text-[10px] space-y-1 list-decimal list-inside leading-relaxed">
                  <li>لینک برنامه را در مرورگر <strong>Safari</strong> باز کنید.</li>
                  <li>
                    دکمه <Share size={11} className="inline text-blue-600 mx-0.5" /> (Share) در پایین مرورگر را بزنید.
                  </li>
                  <li>
                    گزینه <strong>Add to Home Screen</strong> (افزودن به صفحه اصلی) را انتخاب کنید.
                  </li>
                </ol>
              </div>

              {/* Android & PC */}
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-slate-900 text-[11px]">
                  <Laptop size={14} className="text-slate-800" />
                  <span>روی اندروید و کامپیوتر (Chrome):</span>
                </div>
                <ol className="text-slate-600 text-[10px] space-y-1 list-decimal list-inside leading-relaxed">
                  <li>لینک برنامه را در <strong>Google Chrome</strong> باز کنید.</li>
                  <li>
                    منوی ۳ نقطه را بزنید و گزینه <strong>Install App</strong> یا <strong>افزودن به صفحه اصلی</strong> را انتخاب کنید.
                  </li>
                  <li>روی کامپیوتر، دکمه <strong>Install</strong> در نوار آدرس ظاهر می‌شود.</li>
                </ol>
              </div>
            </div>

            {/* Offline Benefit Card */}
            <div className="p-2.5 bg-blue-50 text-blue-900 rounded-lg border border-blue-200 text-[11px] flex items-center gap-2">
              <Check size={16} className="text-blue-600 shrink-0" />
              <span>
                پس از نصب، تمام بخش‌های گرامر، متون، فایل‌های صوتی و ویدیوها به صورت <strong>۱۰۰٪ آفلاین</strong> کار خواهند کرد.
              </span>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleOpenStandaloneTab}
                className="flex-1 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <ArrowUpRight size={14} />
                <span>باز کردن برنامه در تب جدید</span>
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-bold text-xs transition-colors cursor-pointer"
              >
                بستن
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
