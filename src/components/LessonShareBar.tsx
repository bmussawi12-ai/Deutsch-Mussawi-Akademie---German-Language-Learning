import React, { useState } from 'react';
import { Lesson, LanguageCode } from '../types';
import { 
  Share2, 
  Copy, 
  Check, 
  Send, 
  QrCode, 
  MessageCircle, 
  Link as LinkIcon, 
  Smartphone,
  ExternalLink
} from 'lucide-react';

interface LessonShareBarProps {
  lesson: Lesson;
  language: LanguageCode;
  onOpenModal?: () => void;
}

export const LessonShareBar: React.FC<LessonShareBarProps> = ({
  lesson,
  language,
  onOpenModal
}) => {
  const [copied, setCopied] = useState(false);
  const [showQR, setShowQR] = useState(false);

  // Exact unique URL for this specific lesson
  const shareUrl = typeof window !== 'undefined'
    ? `${window.location.origin}${window.location.pathname}?level=${encodeURIComponent(lesson.level)}&lesson=${encodeURIComponent(lesson.id)}`
    : `https://deutsch-mussawi.app/?level=${lesson.level}&lesson=${lesson.id}`;

  const shareTitle = `Deutsch Mussawi ${lesson.level} - Lektion ${lesson.lektionNumber}: ${lesson.title}`;
  const shareText = `🇩🇪 آموزش زبان آلمانی - سطح ${lesson.level}\nدرس ${lesson.lektionNumber}: ${lesson.title}\n\nلینک مستقیم برای مطالعه این درس:\n${shareUrl}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      // Fallback
      const input = document.createElement('input');
      input.value = shareUrl;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: `Deutsch Mussawi - ${lesson.title}`,
          url: shareUrl,
        });
      } catch (e) {
        // User cancelled or not supported
      }
    } else if (onOpenModal) {
      onOpenModal();
    } else {
      handleCopy();
    }
  };

  const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText)}`;
  const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`;

  return (
    <div 
      id="lesson-share-bar"
      className="bg-amber-50/70 border border-amber-200 rounded p-2.5 text-xs text-amber-950 space-y-2 select-none"
    >
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 font-bold">
          <div className="p-1 bg-amber-500 text-white rounded shrink-0">
            <Share2 size={13} />
          </div>
          <div>
            <span className="text-amber-900 font-bold">
              اشتراک‌گذاری اختصاصی همین درس (Nur diese Lektion teilen)
            </span>
            <span className="hidden sm:inline text-[10px] text-amber-700 font-normal ml-2">
              • کاربر با باز کردن این لینک دقیقاً به درس {lesson.lektionNumber} ({lesson.title}) هدایت می‌شود
            </span>
          </div>
        </div>

        {/* Quick Share Buttons */}
        <div className="flex items-center gap-1 shrink-0">
          {/* WhatsApp Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-emerald-600 hover:bg-emerald-500 text-white rounded text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
            title="اشتراک در واتساپ (In WhatsApp teilen)"
          >
            <MessageCircle size={12} />
            <span className="hidden xs:inline">واتساپ</span>
          </a>

          {/* Telegram Button */}
          <a
            href={telegramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 px-2 py-1 bg-sky-500 hover:bg-sky-400 text-white rounded text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
            title="اشتراک در تلگرام (In Telegram teilen)"
          >
            <Send size={12} />
            <span className="hidden xs:inline">تلگرام</span>
          </a>

          {/* Device Native Share */}
          <button
            onClick={handleNativeShare}
            className="flex items-center gap-1 px-2 py-1 bg-amber-600 hover:bg-amber-500 text-white rounded text-[11px] font-bold transition-colors cursor-pointer shadow-2xs"
            title="منوی اشتراک‌گذاری دستگاه (System-Share)"
          >
            <Smartphone size={12} />
            <span>ارسال</span>
          </button>

          {/* QR Code toggle */}
          <button
            onClick={() => setShowQR(!showQR)}
            className={`p-1 rounded border text-[11px] transition-colors cursor-pointer ${
              showQR 
                ? 'bg-amber-200 border-amber-400 text-amber-900' 
                : 'bg-white border-amber-300 text-amber-800 hover:bg-amber-100'
            }`}
            title="نمایش بارکد QR این درس برای اسکن با گوشی"
          >
            <QrCode size={13} />
          </button>
        </div>
      </div>

      {/* Direct Link Input Box with 1-Click Copy */}
      <div className="flex items-center gap-1.5">
        <div className="relative flex-1 min-w-0">
          <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-none text-slate-400">
            <LinkIcon size={12} />
          </div>
          <input
            type="text"
            readOnly
            value={shareUrl}
            onClick={(e) => (e.target as HTMLInputElement).select()}
            className="w-full pl-6 pr-2 py-1 bg-white border border-amber-300 rounded text-[11px] font-mono text-slate-700 select-all focus:outline-hidden focus:ring-1 focus:ring-amber-500"
          />
        </div>

        <button
          onClick={handleCopy}
          className={`flex items-center gap-1 px-3 py-1 rounded text-[11px] font-bold transition-all cursor-pointer shrink-0 shadow-2xs ${
            copied
              ? 'bg-emerald-600 text-white ring-1 ring-emerald-400'
              : 'bg-amber-500 hover:bg-amber-600 text-white'
          }`}
        >
          {copied ? <Check size={12} /> : <Copy size={12} />}
          <span>{copied ? 'کپی شد! ✓' : 'کپی لینک درس'}</span>
        </button>
      </div>

      {/* In-page QR Code display when toggled */}
      {showQR && (
        <div className="bg-white border border-amber-300 rounded p-3 flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left mt-2">
          <img
            src={`https://api.qrserver.com/v1/create-qr-code/?size=140x140&data=${encodeURIComponent(shareUrl)}`}
            alt="QR Code for Lesson"
            className="w-24 h-24 border border-slate-200 rounded p-1 bg-white shrink-0"
            referrerPolicy="no-referrer"
          />
          <div className="space-y-1">
            <div className="font-bold text-slate-900 text-xs">
              اسکن مستقیم بارکد QR این درس با دوربین موبایل
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              با اسکن این بارکد، شاگردان یا دوستان شما مستقیماً همین درس را بدون نیاز به جستجو در گوشی خود باز خواهند کرد.
            </p>
            <div className="text-[10px] font-mono text-blue-700 truncate max-w-sm">
              {shareUrl}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
