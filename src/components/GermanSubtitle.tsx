import React, { useState } from 'react';
import { LanguageCode, TranslatedText } from '../types';
import { getTranslation, isRTL } from '../utils/translationHelper';
import { playHighGermanAudio } from '../utils/speech';
import { Volume2, Languages, Eye, EyeOff } from 'lucide-react';

interface GermanSubtitleProps {
  german: string;
  translation?: TranslatedText;
  currentLanguage: LanguageCode;
  speechRate?: number;
  showAudioButton?: boolean;
  className?: string;
  germanClassName?: string;
  subtitleClassName?: string;
  allowLanguageSwitch?: boolean;
  onLanguageChange?: (lang: LanguageCode) => void;
  defaultVisible?: boolean;
}

const SUBTITLE_LANGS: { code: LanguageCode; label: string }[] = [
  { code: 'prs', label: 'دری (Dari)' },
  { code: 'fa', label: 'فارسی (Persian)' },
  { code: 'en', label: 'English' },
  { code: 'ar', label: 'العربية' },
  { code: 'tr', label: 'Türkçe' },
  { code: 'es', label: 'Español' },
  { code: 'ps', label: 'پښتو' }
];

export const GermanSubtitle: React.FC<GermanSubtitleProps> = ({
  german,
  translation,
  currentLanguage,
  speechRate = 0.9,
  showAudioButton = false,
  className = '',
  germanClassName = 'font-bold text-slate-900',
  subtitleClassName = '',
  allowLanguageSwitch = true,
  onLanguageChange,
  defaultVisible = true
}) => {
  const [selectedLang, setSelectedLang] = useState<LanguageCode>(currentLanguage);
  const [isVisible, setIsVisible] = useState<boolean>(defaultVisible);

  // Sync if currentLanguage changes
  React.useEffect(() => {
    setSelectedLang(currentLanguage);
  }, [currentLanguage]);

  const subText = getTranslation(translation, selectedLang);
  const rtl = isRTL(selectedLang);

  const handleLangChange = (lang: LanguageCode) => {
    setSelectedLang(lang);
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
  };

  return (
    <div className={`space-y-1 ${className}`}>
      {/* German primary text row */}
      <div className="flex items-start justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className={germanClassName}>{german}</span>
          {showAudioButton && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                playHighGermanAudio(german, speechRate);
              }}
              className="p-1 rounded text-blue-600 hover:text-blue-800 hover:bg-blue-50 transition-colors cursor-pointer"
              title="Aussprache anhören"
            >
              <Volume2 size={13} />
            </button>
          )}
        </div>

        {allowLanguageSwitch && translation && (
          <div className="flex items-center gap-1 shrink-0 text-[10px]">
            <button
              onClick={() => setIsVisible(!isVisible)}
              className={`p-1 rounded transition-colors cursor-pointer ${
                isVisible ? 'text-blue-600 hover:bg-blue-50' : 'text-slate-400 hover:bg-slate-100'
              }`}
              title={isVisible ? 'زیرنویس را پنهان کن' : 'زیرنویس را نشان بده'}
            >
              {isVisible ? <Eye size={12} /> : <EyeOff size={12} />}
            </button>

            {isVisible && (
              <select
                value={selectedLang}
                onChange={(e) => handleLangChange(e.target.value as LanguageCode)}
                className="bg-slate-100 border border-slate-200 rounded px-1.5 py-0.5 text-[10px] text-slate-700 font-medium cursor-pointer focus:outline-none focus:border-blue-400"
                title="تغییر زبان زیرنویس / Subtitle Language"
              >
                {SUBTITLE_LANGS.map((l) => (
                  <option key={l.code} value={l.code}>
                    {l.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}
      </div>

      {/* Subtitle / Underneath translation */}
      {isVisible && subText && (
        <div
          dir={rtl ? 'rtl' : 'ltr'}
          className={`text-xs text-blue-900 bg-blue-50/70 border-l-2 sm:border-l-0 sm:border-r-0 border-blue-400 px-2 py-0.5 rounded font-sans leading-relaxed flex items-center gap-1.5 ${
            rtl ? 'text-right border-r-2 border-l-0' : 'text-left'
          } ${subtitleClassName}`}
        >
          <span className="text-[9px] font-mono uppercase px-1 py-0.2 bg-blue-200/60 text-blue-800 rounded font-bold shrink-0">
            {selectedLang.toUpperCase()}
          </span>
          <span className="opacity-95">{subText}</span>
        </div>
      )}
    </div>
  );
};
