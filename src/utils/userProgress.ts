import { CEFRBadge, UserLearningStats, CEFRLevel } from '../types';

const USER_PROGRESS_STORAGE_KEY = 'mussawi_user_learning_profile_v1';

export const INITIAL_BADGES: CEFRBadge[] = [
  {
    id: 'badge_a1',
    level: 'A1',
    titleDe: 'A1-Zertifikat: Entdecker',
    titleFa: 'نشان طلایی A1: کاشف آلمانی',
    titleEn: 'A1 Certificate: Explorer',
    descriptionDe: 'Erfolgreicher Abschluss aller A1-Grundlagen (Wortschatz & Alltagssätze).',
    descriptionFa: 'تکمیل موفقیت‌آمیز تمام مبانی سطح A1 (واژگان پایه‌ای، افعال باقاعده و آرتیکل‌ها).',
    descriptionEn: 'Successfully mastered all A1 elementary fundamentals.',
    tier: 'gold',
    requiredLevel: 'A1',
    minMastery: 75,
    isUnlocked: true,
    unlockedAt: '2026-08-15',
    rewardCode: 'DMA-CERT-A1-MASTER'
  },
  {
    id: 'badge_a2',
    level: 'A2',
    titleDe: 'A2-Zertifikat: Reisender',
    titleFa: 'نشان نقره‌ای A2: مسافر آلمانی',
    titleEn: 'A2 Certificate: Traveler',
    descriptionDe: 'Sichere Verständigung in Arbeit, Einkauf und erweiterten Zeitformen (Perfekt/Präteritum).',
    descriptionFa: 'ارتباطات کاری، خریدهای روزمره و تسلط بر زمان‌های گذشته و داتیو.',
    descriptionEn: 'Confident daily and workplace communication in German.',
    tier: 'silver',
    requiredLevel: 'A2',
    minMastery: 75,
    isUnlocked: false,
    rewardCode: 'DMA-CERT-A2-PROGRESS'
  },
  {
    id: 'badge_b1',
    level: 'B1',
    titleDe: 'B1-Zertifikat: Brückenbauer',
    titleFa: 'نشان زرین B1: استقلال زبانی و اقامت',
    titleEn: 'B1 Certificate: Independent User',
    descriptionDe: 'Zertifikat Deutsch B1: Sprachliche Selbstständigkeit für Einbürgerung & Beruf.',
    descriptionFa: 'تسلط مستقل بر زبان آلمانی جهت اخذ اقامت دائم و اشتغال حرفه‌ای.',
    descriptionEn: 'Language independence for citizenship, residency and work.',
    tier: 'gold',
    requiredLevel: 'B1',
    minMastery: 75,
    isUnlocked: false,
    rewardCode: 'DMA-CERT-B1-GOETHE'
  },
  {
    id: 'badge_b2',
    level: 'B2',
    titleDe: 'B2-Zertifikat: Fachkraft',
    titleFa: 'نشان یاقوتی B2: تخصص و حرفه',
    titleEn: 'B2 Certificate: Professional',
    descriptionDe: 'Fließende Fachsprache für Berufsanerkennung, Studium und gehobene Kommunikation.',
    descriptionFa: 'زبان تخصصی کاری، تایید مدارک تحصیلی و مکالمات اداری پیچیده.',
    descriptionEn: 'Fluent professional and academic communication.',
    tier: 'platinum',
    requiredLevel: 'B2',
    minMastery: 75,
    isUnlocked: false,
    rewardCode: 'DMA-CERT-B2-PRO'
  },
  {
    id: 'badge_c1',
    level: 'C1',
    titleDe: 'C1-Zertifikat: Akademiker',
    titleFa: 'نشان الماس C1: دانشگاهی و DSH',
    titleEn: 'C1 Certificate: Academic Scholar',
    descriptionDe: 'Universitäres Sprachniveau für DSH / TestDaF und anspruchsvolle Texte.',
    descriptionFa: 'سطح دانشگاهی پیشرفته جهت قبولی در آزمون‌های TestDaF و DSH.',
    descriptionEn: 'University-level proficiency for higher academic study.',
    tier: 'diamond',
    requiredLevel: 'C1',
    minMastery: 75,
    isUnlocked: false,
    rewardCode: 'DMA-CERT-C1-ACADEMIC'
  },
  {
    id: 'badge_c2',
    level: 'C2',
    titleDe: 'C2-Zertifikat: Großes Diplom',
    titleFa: 'مدال افتخار C2: تسلط زبان مادری',
    titleEn: 'C2 Certificate: Mastery',
    descriptionDe: 'Annähernd muttersprachliche Beherrschung in Literatur, Philosophie und Recht.',
    descriptionFa: 'تسلط در سطح زبان مادری، ادبیات، فلسفه، حقوق و ترجمه همزمان.',
    descriptionEn: 'Near-native linguistic excellence across literature and law.',
    tier: 'diamond',
    requiredLevel: 'C2',
    minMastery: 75,
    isUnlocked: false,
    rewardCode: 'DMA-CERT-C2-DIPLOM'
  },
  {
    id: 'badge_vocab_6000',
    level: 'milestone',
    titleDe: 'Wortschatz-Meister (6.400+)',
    titleFa: 'ابرقهرمان واژگان (۶,۴۰۴ لغت)',
    titleEn: 'Vocabulary Master (6,400+ Words)',
    descriptionDe: 'Über 6.400 deutsche Wörter mit Artikeln (der, die, das) und Audio gelernt.',
    descriptionFa: 'یادگیری بیش از ۶,۴۰۴ واژه آلمانی همراه با آرتیکل‌ها، جمع و تلفظ طبیعی.',
    descriptionEn: 'Mastered over 6,400 German words with articles and audio.',
    tier: 'gold',
    requiredLevel: 'A2.1',
    minMastery: 50,
    isUnlocked: true,
    unlockedAt: '2026-09-01',
    rewardCode: 'DMA-VOCAB-6400'
  },
  {
    id: 'badge_grammar_180',
    level: 'milestone',
    titleDe: 'Grammatik-König (180 Regeln)',
    titleFa: 'سلطان گرامر (۱۸۰ قاعده و فرمول)',
    titleEn: 'Grammar King (180 Rules)',
    descriptionDe: '180 visuelle Grammatik-Formeln der Mussawi-Didaktik verinnerlicht.',
    descriptionFa: 'تثبیت و تسلط بر ۱۸۰ فرمول دیداری گرامر متد استاد موسوی.',
    descriptionEn: 'Mastered 180 visual grammar formulas.',
    tier: 'gold',
    requiredLevel: 'A2.1',
    minMastery: 50,
    isUnlocked: true,
    unlockedAt: '2026-09-08',
    rewardCode: 'DMA-GRAMMAR-180'
  }
];

export const getTodayDateString = (): string => {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const getInitialUserStats = (): UserLearningStats => {
  return {
    overallMasteryPercent: 54, // The reader's baseline mastery
    learnedWordsCount: 6404,  // Exact request: 6,404 Wörter
    masteredRulesCount: 180,  // Exact request: 180 Regeln
    completedExamsCount: 8,
    completedLessonsCount: 22,
    dailyStreak: 5,           // 5 consecutive learning days
    lastActiveDate: getTodayDateString(),
    activeLevel: 'A2.1',      // Exact request: Level A2.1
    earnedBadgeIds: ['badge_a1', 'badge_vocab_6000', 'badge_grammar_180'],
    recentActivities: [
      {
        id: 'act_1',
        type: 'word',
        title: 'مرور ۳۰ واژه در سطح A2.1 با تلفظ طبیعی',
        timestamp: 'امروز، ۱۰ دقیقه پیش',
        detail: 'واژگان بخش کار و اداره (Wortschatz Beruf & Arbeit)'
      },
      {
        id: 'act_2',
        type: 'grammar',
        title: 'فرمول دیداری: حروف اضافه داتیو و آکوزاتیو (Wechselpräpositionen)',
        timestamp: 'امروز، ۱ ساعت پیش',
        detail: 'تمرین فرمول Wo + Dativ / Wohin + Akkusativ'
      },
      {
        id: 'act_3',
        type: 'exam',
        title: 'شبیه‌سازی آزمون گوته / تلک A2 (بخش خواندن و درک مطلب)',
        timestamp: 'دیروز',
        detail: 'نمره کسب‌شده: ۲۲ از ۲۵ (قبول با امتیاز بالا)'
      }
    ]
  };
};

export const loadUserStats = (): UserLearningStats => {
  if (typeof window === 'undefined') return getInitialUserStats();
  try {
    const raw = localStorage.getItem(USER_PROGRESS_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      return {
        ...getInitialUserStats(),
        ...parsed
      };
    }
  } catch (e) {
    console.error('Failed to load user progress:', e);
  }
  const init = getInitialUserStats();
  saveUserStats(init);
  return init;
};

export const saveUserStats = (stats: UserLearningStats): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(USER_PROGRESS_STORAGE_KEY, JSON.stringify(stats));
    // Trigger storage event for same-window listeners
    window.dispatchEvent(new Event('mussawi_user_progress_updated'));
  } catch (e) {
    console.error('Failed to save user progress:', e);
  }
};

export const logLearningActivity = (
  type: 'word' | 'grammar' | 'exam' | 'lesson',
  title: string,
  detail: string,
  increments?: {
    words?: number;
    rules?: number;
    exams?: number;
    lessons?: number;
  }
): UserLearningStats => {
  const current = loadUserStats();
  const today = getTodayDateString();

  // Streak calculation
  let newStreak = current.dailyStreak;
  if (current.lastActiveDate !== today) {
    const lastDate = new Date(current.lastActiveDate);
    const currDate = new Date(today);
    const diffTime = Math.abs(currDate.getTime() - lastDate.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 1) {
      newStreak = current.dailyStreak + 1;
    } else if (diffDays > 1) {
      newStreak = 1;
    }
  }

  const updated: UserLearningStats = {
    ...current,
    dailyStreak: newStreak,
    lastActiveDate: today,
    learnedWordsCount: current.learnedWordsCount + (increments?.words || 0),
    masteredRulesCount: current.masteredRulesCount + (increments?.rules || 0),
    completedExamsCount: current.completedExamsCount + (increments?.exams || 0),
    completedLessonsCount: current.completedLessonsCount + (increments?.lessons || 0),
    recentActivities: [
      {
        id: `act_${Date.now()}`,
        type,
        title,
        timestamp: 'همین الان',
        detail
      },
      ...current.recentActivities.slice(0, 7)
    ]
  };

  // Re-evaluate mastery percentage
  const calculatedMastery = Math.min(
    100,
    Math.round(
      (updated.learnedWordsCount / 12000) * 40 +
      (updated.masteredRulesCount / 250) * 35 +
      (updated.completedExamsCount / 20) * 25
    )
  );
  updated.overallMasteryPercent = Math.max(54, calculatedMastery);

  saveUserStats(updated);
  return updated;
};
