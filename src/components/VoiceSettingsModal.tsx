import React, { useState, useEffect } from 'react';
import { 
  X, 
  Volume2, 
  Sparkles, 
  RotateCcw, 
  Check, 
  Play, 
  Sliders,
  UserCheck
} from 'lucide-react';
import { 
  getAvailableGermanVoices, 
  getSelectedMaleVoice, 
  getSelectedFemaleVoice, 
  setSelectedMaleVoice, 
  setSelectedFemaleVoice, 
  setVoiceGenderPreference, 
  getVoiceGenderPreference,
  testMaleVoice,
  testFemaleVoice,
  stopGermanAudio,
  unlockMobileAudio
} from '../utils/speech';
import { LanguageCode } from '../types';

interface VoiceSettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  speechRate: number;
  onSelectSpeechRate: (rate: number) => void;
  language: LanguageCode;
}

export const VoiceSettingsModal: React.FC<VoiceSettingsModalProps> = ({
  isOpen,
  onClose,
  speechRate,
  onSelectSpeechRate,
  language
}) => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentGender, setCurrentGender] = useState<'female' | 'male'>(getVoiceGenderPreference());
  const [selectedMaleName, setSelectedMaleName] = useState<string>('');
  const [selectedFemaleName, setSelectedFemaleName] = useState<string>('');

  useEffect(() => {
    if (!isOpen) return;
    unlockMobileAudio();

    const load = () => {
      const v = getAvailableGermanVoices();
      setVoices(v);
      const m = getSelectedMaleVoice();
      const f = getSelectedFemaleVoice();
      if (m) setSelectedMaleName(m.name);
      if (f) setSelectedFemaleName(f.name);
      setCurrentGender(getVoiceGenderPreference());
    };

    load();
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.onvoiceschanged = load;
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelectMaleVoice = (name: string) => {
    setSelectedMaleName(name);
    const found = voices.find(v => v.name === name) || null;
    setSelectedMaleVoice(found);
  };

  const handleSelectFemaleVoice = (name: string) => {
    setSelectedFemaleName(name);
    const found = voices.find(v => v.name === name) || null;
    setSelectedFemaleVoice(found);
  };

  const handleSetPreferredGender = (g: 'female' | 'male') => {
    setCurrentGender(g);
    setVoiceGenderPreference(g);
    if (g === 'male') {
      testMaleVoice(speechRate);
    } else {
      testFemaleVoice(speechRate);
    }
  };

  const handleResetToStandard = () => {
    setSelectedMaleVoice(null);
    setSelectedFemaleVoice(null);
    setSelectedMaleName('');
    setSelectedFemaleName('');
    const m = getSelectedMaleVoice();
    const f = getSelectedFemaleVoice();
    if (m) setSelectedMaleName(m.name);
    if (f) setSelectedFemaleName(f.name);
    stopGermanAudio();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 max-w-lg w-full overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in-95 duration-150"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
              <Sliders size={18} />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                تنظیمات صدای استاندارد و طبیعی (Deutsche Stimmen)
              </h3>
              <p className="text-[11px] text-slate-500">
                صدای استاندارد آلمانی (Hochdeutsch) برای مکالمات خانم و آقا
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              stopGermanAudio();
              onClose();
            }}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-200 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 overflow-y-auto space-y-5 text-xs text-slate-700">
          {/* Active Voice Gender Selector */}
          <div className="space-y-2">
            <label className="font-bold text-slate-900 block text-xs">
              گوینده پیش‌فرض درس و واژگان (Standardstimme):
            </label>
            <div className="grid grid-cols-2 gap-2.5">
              <button
                type="button"
                onClick={() => handleSetPreferredGender('female')}
                className={`p-3 rounded-lg border text-right flex items-center justify-between transition-all cursor-pointer ${
                  currentGender === 'female'
                    ? 'bg-purple-50 border-purple-500 text-purple-950 font-bold ring-2 ring-purple-200'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${currentGender === 'female' ? 'bg-purple-200 text-purple-800' : 'bg-slate-100 text-slate-500'}`}>
                    <Sparkles size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">♀ صدای دلنشین خانم</div>
                    <div className="text-[10px] text-slate-500">طبیعی، واضح و استاندارد</div>
                  </div>
                </div>
                {currentGender === 'female' && <Check size={16} className="text-purple-600" />}
              </button>

              <button
                type="button"
                onClick={() => handleSetPreferredGender('male')}
                className={`p-3 rounded-lg border text-right flex items-center justify-between transition-all cursor-pointer ${
                  currentGender === 'male'
                    ? 'bg-blue-50 border-blue-500 text-blue-950 font-bold ring-2 ring-blue-200'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="flex items-center gap-2">
                  <div className={`p-1.5 rounded-full ${currentGender === 'male' ? 'bg-blue-200 text-blue-800' : 'bg-slate-100 text-slate-500'}`}>
                    <UserCheck size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-bold">♂ صدای دلنشین آقا</div>
                    <div className="text-[10px] text-slate-500">طبیعی، گرم و رسا</div>
                  </div>
                </div>
                {currentGender === 'male' && <Check size={16} className="text-blue-600" />}
              </button>
            </div>
          </div>

          {/* Test Playback Controls */}
          <div className="p-3.5 bg-slate-50 rounded-lg border border-slate-200 space-y-2.5">
            <div className="font-bold text-slate-800 text-xs flex items-center justify-between">
              <span>تست و شنیدن نمونه صداها (Hörprobe):</span>
              <span className="text-[10px] font-mono text-slate-500">Standard Hochdeutsch</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => testFemaleVoice(speechRate)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                <Play size={13} fill="currentColor" />
                <span>تست صدای خانم</span>
              </button>
              <button
                type="button"
                onClick={() => testMaleVoice(speechRate)}
                className="flex items-center justify-center gap-1.5 py-2 px-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-bold text-xs shadow-xs transition-colors cursor-pointer"
              >
                <Play size={13} fill="currentColor" />
                <span>تست صدای آقا</span>
              </button>
            </div>
          </div>

          {/* Installed Voice Selection */}
          {voices.length > 0 && (
            <div className="space-y-3 pt-1">
              <div className="font-bold text-slate-900 block text-xs">
                انتخاب صدای اختصاصی از صداهای نصب‌شده روی دستگاه شما:
              </div>

              {/* Female Voice Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center justify-between">
                  <span>صدا برای گوینده خانم (Frauenstimme):</span>
                  <span className="text-[10px] text-purple-600 font-bold">♀ خانم</span>
                </label>
                <select
                  value={selectedFemaleName}
                  onChange={(e) => handleSelectFemaleVoice(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-mono text-slate-800 focus:outline-hidden focus:border-purple-500"
                >
                  <option value="">-- صدای خودکار و بهینه خانم (پیش‌فرض سیستم) --</option>
                  {voices.map(v => (
                    <option key={`f-${v.name}`} value={v.name}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>

              {/* Male Voice Selector */}
              <div className="space-y-1">
                <label className="text-[11px] font-semibold text-slate-700 flex items-center justify-between">
                  <span>صدا برای گوینده آقا (Männerstimme):</span>
                  <span className="text-[10px] text-blue-600 font-bold">♂ آقا</span>
                </label>
                <select
                  value={selectedMaleName}
                  onChange={(e) => handleSelectMaleVoice(e.target.value)}
                  className="w-full bg-white border border-slate-300 rounded-lg px-2.5 py-2 text-xs font-mono text-slate-800 focus:outline-hidden focus:border-blue-500"
                >
                  <option value="">-- صدای خودکار و بهینه آقا (پیش‌فرض سیستم) --</option>
                  {voices.map(v => (
                    <option key={`m-${v.name}`} value={v.name}>
                      {v.name} ({v.lang})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Playback Speed */}
          <div className="space-y-1.5 pt-1">
            <label className="font-bold text-slate-900 block text-xs">
              سرعت گویش آموزشی (Sprechgeschwindigkeit):
            </label>
            <div className="flex items-center gap-2">
              {[0.75, 0.85, 0.95, 1.05, 1.2].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => onSelectSpeechRate(r)}
                  className={`flex-1 py-1.5 rounded-lg border text-center font-bold text-xs transition-colors cursor-pointer ${
                    speechRate === r
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  {r}x
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 bg-slate-50 flex items-center justify-between">
          <button
            type="button"
            onClick={handleResetToStandard}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-200 rounded-lg font-semibold transition-colors cursor-pointer"
            title="بازنشانی به تنظیمات پیش‌فرض استاندارد"
          >
            <RotateCcw size={13} />
            <span>تنظیم مجدد به استاندارد</span>
          </button>

          <button
            type="button"
            onClick={() => {
              stopGermanAudio();
              onClose();
            }}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-bold shadow-xs transition-colors cursor-pointer"
          >
            تأیید و بستن
          </button>
        </div>
      </div>
    </div>
  );
};
