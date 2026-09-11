import React, { useState, useEffect, useRef } from 'react';
import { Flame, CheckCircle2, Calendar, Sparkles, ChevronRight, Trophy, X } from 'lucide-react';
import { LanguageCode } from '../types';
import { loadUserStats, logLearningActivity, getTodayDateString } from '../utils/userProgress';

interface DailyStreakProps {
  language: LanguageCode;
  onNavigateToDashboard?: () => void;
}

export const DailyStreak: React.FC<DailyStreakProps> = ({
  language,
  onNavigateToDashboard
}) => {
  const [stats, setStats] = useState(() => loadUserStats());
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isPersian = language === 'fa' || language === 'prs';

  // Synchronize state with localStorage and custom window events
  useEffect(() => {
    const handleUpdate = () => {
      setStats(loadUserStats());
    };

    window.addEventListener('mussawi_user_progress_updated', handleUpdate);
    window.addEventListener('storage', handleUpdate);

    return () => {
      window.removeEventListener('mussawi_user_progress_updated', handleUpdate);
      window.removeEventListener('storage', handleUpdate);
    };
  }, []);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const today = getTodayDateString();
  const isActiveToday = stats.lastActiveDate === today;

  const handleQuickStudyToday = () => {
    const updated = logLearningActivity(
      'lesson',
      isPersian ? 'ثبت جلسه مطالعه و استمرار روزانه' : 'Tägliche Lerneinheit erfasst',
      isPersian ? '۱۰ دقیقه تمرین مؤثر در سیستم آموزشی' : '10 Minuten aktives Deutschlernen',
      { words: 5, rules: 1 }
    );
    setStats(updated);
  };

  // Day names for 7-day streak representation
  const daysOfWeek = isPersian
    ? ['ش', 'ی', 'د', 'س', 'چ', 'پ', 'ج']
    : ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

  // Current day index (0 to 6, considering Saturday start in Persian or Monday in Western)
  const currentDayIndex = new Date().getDay();

  return (
    <div className="relative" ref={popoverRef}>
      {/* Navbar Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 sm:gap-1.5 px-2 py-1 sm:px-2.5 sm:py-1 rounded-lg border text-xs font-bold transition-all cursor-pointer shadow-xs ${
          isActiveToday
            ? 'bg-gradient-to-r from-amber-500/15 via-orange-500/20 to-amber-500/15 text-amber-900 border-amber-300 hover:border-amber-400 ring-1 ring-amber-200'
            : 'bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200'
        }`}
        title={
          isPersian
            ? `زنجیره یادگیری روزانه: ${stats.dailyStreak} روز متوالی - برای مشاهده جزئیات کلیک کنید`
            : `Lernsträhne: ${stats.dailyStreak} Tage in Folge - Details anzeigen`
        }
      >
        <div className="relative">
          <Flame
            size={15}
            className={`transition-transform duration-300 ${
              isActiveToday
                ? 'text-orange-500 fill-orange-500 animate-bounce'
                : 'text-amber-500'
            }`}
          />
          {isActiveToday && (
            <span className="absolute -top-1 -right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping" />
          )}
        </div>

        <span className="font-mono font-black text-xs text-orange-600">
          {stats.dailyStreak}
        </span>

        <span className="hidden md:inline font-bold text-[11px] text-amber-900">
          {isPersian ? 'روز متوالی' : 'Tage'}
        </span>
      </button>

      {/* Popover Card */}
      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 z-50 animate-in fade-in zoom-in-95 duration-150 ${
            isPersian ? 'right-0 sm:right-auto sm:left-0 text-right' : 'left-0 text-left'
          }`}
          dir={isPersian ? 'rtl' : 'ltr'}
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shadow-xs">
                <Flame size={18} className="fill-orange-500" />
              </div>
              <div>
                <h4 className="font-bold text-xs sm:text-sm text-slate-900">
                  {isPersian ? 'زنجیره استمرار روزانه' : 'Tägliche Lernsträhne'}
                </h4>
                <p className="text-[10px] text-slate-500">
                  {isPersian ? 'یادگیری پیوسته آلمانی' : 'Tägliche Kontinuität'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
            >
              <X size={15} />
            </button>
          </div>

          {/* Large Streak Display */}
          <div className="my-3.5 p-3 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 flex items-center justify-between">
            <div>
              <div className="text-[11px] font-semibold text-amber-800">
                {isPersian ? 'رکورد فعال شما' : 'Aktuelle Strähne'}
              </div>
              <div className="text-2xl font-black text-amber-900 flex items-baseline gap-1 mt-0.5">
                <span>{stats.dailyStreak}</span>
                <span className="text-xs font-bold text-amber-700">
                  {isPersian ? 'روز متوالی' : 'Tage in Folge'}
                </span>
              </div>
            </div>

            <div className="text-right flex flex-col items-end">
              <span
                className={`inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isActiveToday
                    ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                    : 'bg-amber-100 text-amber-800 border-amber-300'
                }`}
              >
                <CheckCircle2 size={11} />
                <span>{isActiveToday ? (isPersian ? 'امروز فعال شد' : 'Heute aktiv') : (isPersian ? 'هنوز ثبت نشده' : 'Offen')}</span>
              </span>
              <span className="text-[10px] text-slate-500 mt-1">
                {isPersian ? 'انرژی روزانه ۱۰۰٪' : 'Volle Energie'}
              </span>
            </div>
          </div>

          {/* 7-Day Visual Mini Calendar */}
          <div className="mb-3">
            <div className="text-[10px] font-bold text-slate-600 mb-1.5 flex items-center justify-between">
              <span>{isPersian ? 'روزهای هفته' : 'Wochenverlauf'}</span>
              <span className="text-[9px] text-slate-600 font-bold">
                {isPersian ? 'هدف: هر روز حداقل ۱۰ دقیقه' : 'Ziel: 10 Min / Tag'}
              </span>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center">
              {daysOfWeek.map((day, idx) => {
                // Determine active state for visual calendar
                const isCompleted = idx <= (currentDayIndex === 0 ? 6 : currentDayIndex);
                const isCurrent = idx === (currentDayIndex === 0 ? 6 : currentDayIndex);

                return (
                  <div key={idx} className="flex flex-col items-center">
                    <span className="text-[9px] text-slate-500 mb-1 font-semibold">
                      {day}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold transition-all ${
                        isCurrent
                          ? 'bg-orange-500 text-white ring-2 ring-orange-200 shadow-xs'
                          : isCompleted
                          ? 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                          : 'bg-slate-100 text-slate-400'
                      }`}
                    >
                      {isCompleted ? '✓' : idx + 1}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Encouragement text */}
          <p className="text-[11px] text-slate-600 bg-slate-50 p-2 rounded-lg border border-slate-200 leading-relaxed mb-3">
            {isPersian
              ? '✨ مطالعه پیوسته حتی ۱۰ دقیقه در روز، طبق متد موسوی تسلط تضمین‌شده بر زبان آلمانی به همراه دارد.'
              : '✨ Kontinuierliches Lernen von 10 Minuten pro Tag festigt Grammatik und Wortschatz dauerhaft.'}
          </p>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={handleQuickStudyToday}
              className="flex-1 py-1.5 px-2.5 rounded-xl bg-orange-600 hover:bg-orange-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <Sparkles size={13} />
              <span>{isPersian ? 'ثبت مطالعه امروز (+۱)' : 'Heute lernen (+1)'}</span>
            </button>

            {onNavigateToDashboard && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onNavigateToDashboard();
                }}
                className="py-1.5 px-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center gap-1 cursor-pointer"
                title="مشاهده داشبورد و مدال‌ها"
              >
                <Trophy size={13} className="text-amber-600" />
                <span>{isPersian ? 'مدال‌ها' : 'Abzeichen'}</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
