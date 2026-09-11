import React, { useState } from 'react';
import { 
  Award, 
  Trophy, 
  CheckCircle2, 
  Lock, 
  Sparkles, 
  Medal, 
  ShieldCheck, 
  X, 
  Calendar, 
  Download,
  Share2,
  ExternalLink
} from 'lucide-react';
import { CEFRBadge, LanguageCode, LevelProgress } from '../types';
import { INITIAL_BADGES, saveUserStats, loadUserStats } from '../utils/userProgress';

interface CEFRBadgesProps {
  language: LanguageCode;
  macroLevelData: LevelProgress[];
  onSelectLevel?: (level: string) => void;
}

export const CEFRBadges: React.FC<CEFRBadgesProps> = ({
  language,
  macroLevelData,
  onSelectLevel
}) => {
  const isPersian = language === 'fa' || language === 'prs';
  const isRtl = language === 'fa' || language === 'prs' || language === 'ar' || language === 'ps';

  const [selectedBadge, setSelectedBadge] = useState<CEFRBadge | null>(null);
  const [userStats, setUserStats] = useState(() => loadUserStats());

  // Compute unlock status dynamically based on user progress and earned badges
  const badgesWithStatus: CEFRBadge[] = INITIAL_BADGES.map((badge) => {
    // If already in user's earnedBadgeIds
    const isSavedUnlocked = userStats.earnedBadgeIds.includes(badge.id);

    // Calculate level mastery from macroLevelData
    const targetLevelData = macroLevelData.find(m => m.level === badge.requiredLevel);
    const avgMastery = targetLevelData
      ? Math.round((targetLevelData.vocabulary + targetLevelData.grammar + targetLevelData.examPractice) / 3)
      : 0;

    const qualifiesForUnlock = avgMastery >= badge.minMastery || isSavedUnlocked;

    return {
      ...badge,
      isUnlocked: qualifiesForUnlock,
      unlockedAt: qualifiesForUnlock ? (badge.unlockedAt || 'امروز') : undefined
    };
  });

  const handleClaimBadge = (badge: CEFRBadge) => {
    if (!userStats.earnedBadgeIds.includes(badge.id)) {
      const updated = {
        ...userStats,
        earnedBadgeIds: [...userStats.earnedBadgeIds, badge.id],
        recentActivities: [
          {
            id: `act_${Date.now()}`,
            type: 'exam' as const,
            title: isPersian ? `دریافت نشان رسمی: ${badge.titleFa}` : `Abzeichen erhalten: ${badge.titleDe}`,
            timestamp: 'همین الان',
            detail: isPersian ? 'ثبت در نمایه رسمی زبان‌آموز' : 'Erfolgreich im Profil registriert'
          },
          ...userStats.recentActivities.slice(0, 6)
        ]
      };
      saveUserStats(updated);
      setUserStats(updated);
    }
  };

  const unlockedCount = badgesWithStatus.filter(b => b.isUnlocked).length;

  const getTierBadgeStyle = (tier: CEFRBadge['tier'], isUnlocked: boolean) => {
    if (!isUnlocked) {
      return {
        bg: 'bg-slate-100 border-slate-200 text-slate-400',
        ring: 'border-slate-300',
        iconBg: 'bg-slate-200 text-slate-400',
        label: isPersian ? 'قفل‌شده' : 'Gesperrt'
      };
    }
    switch (tier) {
      case 'diamond':
        return {
          bg: 'bg-gradient-to-br from-cyan-50 via-sky-50 to-blue-50 border-cyan-300 text-cyan-950 shadow-sm',
          ring: 'border-cyan-400',
          iconBg: 'bg-cyan-500 text-white shadow-xs',
          label: isPersian ? 'نشان الماس' : 'Diamant'
        };
      case 'platinum':
        return {
          bg: 'bg-gradient-to-br from-indigo-50 via-purple-50 to-slate-50 border-indigo-300 text-indigo-950 shadow-sm',
          ring: 'border-indigo-400',
          iconBg: 'bg-indigo-600 text-white shadow-xs',
          label: isPersian ? 'نشان پلاتین' : 'Platin'
        };
      case 'gold':
        return {
          bg: 'bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 border-amber-300 text-amber-950 shadow-sm',
          ring: 'border-amber-400',
          iconBg: 'bg-amber-500 text-white shadow-xs',
          label: isPersian ? 'نشان طلا' : 'Gold'
        };
      case 'silver':
      default:
        return {
          bg: 'bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-100 border-slate-300 text-slate-900 shadow-sm',
          ring: 'border-slate-400',
          iconBg: 'bg-slate-600 text-white shadow-xs',
          label: isPersian ? 'نشان نقره' : 'Silber'
        };
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 sm:p-7 shadow-xs space-y-5">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center shadow-xs">
              <Trophy size={18} />
            </div>
            <h3 className="text-lg font-black text-slate-900">
              {isPersian ? 'مدال‌ها و جوایز دیجیتال سطوح CEFR' : 'Digitale CEFR-Abschlussabzeichen'}
            </h3>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            {isPersian
              ? 'پاداش‌های دیجیتال با تکمیل هر سطح از استاندارد اروپایی (A1 تا C2) و ثبت در نمایه زبان‌آموز'
              : 'Verdienen Sie offizielle digitale Leistungsabzeichen nach Abschluss jeder CEFR-Stufe'}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-600">
            {isPersian ? 'مدال‌های دریافت‌شده:' : 'Freigeschaltet:'}
          </span>
          <span className="px-2.5 py-1 rounded-full bg-amber-100 text-amber-800 font-mono font-black text-xs border border-amber-300">
            {unlockedCount} / {badgesWithStatus.length}
          </span>
        </div>
      </div>

      {/* Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        {badgesWithStatus.map((badge) => {
          const style = getTierBadgeStyle(badge.tier, badge.isUnlocked);
          const targetLevelData = macroLevelData.find(m => m.level === badge.requiredLevel);
          const avg = targetLevelData
            ? Math.round((targetLevelData.vocabulary + targetLevelData.grammar + targetLevelData.examPractice) / 3)
            : 0;

          return (
            <div
              key={badge.id}
              onClick={() => setSelectedBadge(badge)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between hover:shadow-md relative overflow-hidden group ${style.bg}`}
            >
              {/* Top Row: Tier badge + Lock/Check */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/80 border border-slate-200">
                  {style.label}
                </span>

                {badge.isUnlocked ? (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-100/90 px-2 py-0.5 rounded-full border border-emerald-300">
                    <CheckCircle2 size={11} />
                    <span>{isPersian ? 'دریافت شد' : 'Erreicht'}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[10px] font-bold text-slate-500 bg-slate-200/90 px-2 py-0.5 rounded-full">
                    <Lock size={10} />
                    <span>{avg}% / {badge.minMastery}%</span>
                  </span>
                )}
              </div>

              {/* Icon & Title */}
              <div className="flex items-start gap-3 my-1">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${style.iconBg}`}>
                  {badge.isUnlocked ? (
                    <Medal size={22} className="animate-pulse" />
                  ) : (
                    <Lock size={18} />
                  )}
                </div>

                <div className="min-w-0">
                  <h4 className="font-bold text-xs sm:text-sm text-slate-900 leading-snug truncate">
                    {isPersian ? badge.titleFa : badge.titleDe}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-2 mt-1 leading-relaxed">
                    {isPersian ? badge.descriptionFa : badge.descriptionDe}
                  </p>
                </div>
              </div>

              {/* Progress Bar / Unlock Date */}
              <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-[10px]">
                {badge.isUnlocked ? (
                  <div className="text-emerald-700 font-semibold flex items-center gap-1">
                    <Sparkles size={11} />
                    <span>{isPersian ? 'گواهی دیجیتال فعال' : 'Zertifikat aktiv'}</span>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="flex justify-between text-slate-500 mb-1 font-semibold">
                      <span>{isPersian ? 'پیشرفت تا دریافت مدال' : 'Fortschritt'}</span>
                      <span>{avg}%</span>
                    </div>
                    <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full transition-all duration-500"
                        style={{ width: `${Math.min(100, Math.round((avg / badge.minMastery) * 100))}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Certificate Modal */}
      {selectedBadge && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 z-50 animate-in fade-in">
          <div
            className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-150"
            dir={isRtl ? 'rtl' : 'ltr'}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedBadge(null)}
              className="absolute top-4 left-4 sm:left-auto sm:right-4 p-1.5 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {/* Certificate Header */}
            <div className="text-center pt-2 pb-4">
              <div className="w-16 h-16 rounded-3xl bg-amber-100 text-amber-600 mx-auto flex items-center justify-center mb-3 shadow-md">
                <Trophy size={32} />
              </div>
              <span className="text-[11px] font-mono uppercase tracking-widest text-blue-700 font-bold bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                DEUTSCH MUSSAWI AKADEMIE
              </span>
              <h3 className="text-xl font-black text-slate-900 mt-2">
                {isPersian ? selectedBadge.titleFa : selectedBadge.titleDe}
              </h3>
              <p className="text-xs text-slate-500 mt-1 font-mono">
                {selectedBadge.titleDe}
              </p>
            </div>

            {/* Certificate Card Preview */}
            <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-50 to-amber-50/40 border-2 border-dashed border-amber-300 my-2 space-y-2.5">
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>{isPersian ? 'سطح استاندارد:' : 'CEFR-Niveau:'}</span>
                <span className="font-bold text-slate-900 font-mono">
                  {selectedBadge.level}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>{isPersian ? 'وضعیت دستاورد:' : 'Status:'}</span>
                <span className={`font-bold ${selectedBadge.isUnlocked ? 'text-emerald-700' : 'text-amber-700'}`}>
                  {selectedBadge.isUnlocked ? (isPersian ? 'تکمیل‌شده و معتبر ✓' : 'Erreicht & Verifiziert') : (isPersian ? 'در حال تکمیل' : 'In Bearbeitung')}
                </span>
              </div>
              <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
                <span>{isPersian ? 'کد دیجیتال گواهی:' : 'Zertifikats-Code:'}</span>
                <span className="font-mono text-[11px] bg-slate-200 px-2 py-0.5 rounded text-slate-800">
                  {selectedBadge.rewardCode || 'DMA-REWARD-2026'}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed pt-2 border-t border-slate-200">
                {isPersian ? selectedBadge.descriptionFa : selectedBadge.descriptionDe}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5 mt-5">
              {!selectedBadge.isUnlocked ? (
                <button
                  onClick={() => {
                    handleClaimBadge(selectedBadge);
                    setSelectedBadge({ ...selectedBadge, isUnlocked: true });
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles size={14} />
                  <span>{isPersian ? 'دریافت نشان افتخار' : 'Abzeichen einlösen'}</span>
                </button>
              ) : (
                <button
                  onClick={() => setSelectedBadge(null)}
                  className="flex-1 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <CheckCircle2 size={14} />
                  <span>{isPersian ? 'تایید و ثبت در پروفایل' : 'Bestätigen'}</span>
                </button>
              )}

              <button
                onClick={() => setSelectedBadge(null)}
                className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                {isPersian ? 'بستن' : 'Schließen'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
