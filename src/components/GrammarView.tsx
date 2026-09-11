import React, { useState, useMemo } from 'react';
import { CEFRLevel, LanguageCode, GrammarRule } from '../types';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { playHighGermanAudio } from '../utils/speech';
import { getTranslation, isRTL } from '../utils/translationHelper';
import { 
  Volume2, 
  BookOpen, 
  Layers, 
  CheckCircle2, 
  Languages, 
  Eye, 
  EyeOff, 
  Sparkles, 
  Filter, 
  ChevronRight,
  Bookmark,
  GraduationCap,
  ArrowRight
} from 'lucide-react';

interface GrammarViewProps {
  currentLevel: CEFRLevel;
  language: LanguageCode;
  speechRate: number;
  onNavigateToLesson?: (level: CEFRLevel, lektionNumber: number) => void;
}

const AVAILABLE_LANGUAGES: { code: LanguageCode; label: string; flag: string; nativeName: string }[] = [
  { code: 'prs', label: 'دری (Dari)', flag: '🇦🇫', nativeName: 'فارسی دری' },
  { code: 'fa', label: 'فارسی (Persian)', flag: '🇮🇷', nativeName: 'فارسی' },
  { code: 'en', label: 'English', flag: '🇬🇧', nativeName: 'English' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦', nativeName: 'العربية' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷', nativeName: 'Türkçe' },
  { code: 'es', label: 'Español', flag: '🇪🇸', nativeName: 'Español' },
  { code: 'ps', label: 'پښتو', flag: '🇦🇫', nativeName: 'پښتو' }
];

export interface BookInfo {
  level: CEFRLevel;
  bookTitle: string;
  bookSubtitle: string;
  lessonRange: string;
  startLesson: number;
  endLesson: number;
  description: {
    prs: string;
    fa: string;
    en: string;
  };
}

const BOOKS: BookInfo[] = [
  {
    level: 'A1.1',
    bookTitle: 'Deutsch Mussawi 1',
    bookSubtitle: 'سطح آغازین • درس‌های ۱ تا ۷',
    lessonRange: 'Lektion 1 – 7',
    startLesson: 1,
    endLesson: 7,
    description: {
      prs: 'کتاب اول Deutsch Mussawi: آموزش ساختار اولیه جملات، افعال کمکی و حروف اضافه ساده.',
      fa: 'کتاب اول Deutsch Mussawi: ساختار پایه جملات، افعال کمکی و صرف مقدماتی افعال.',
      en: 'Deutsch Mussawi Book 1: Basic sentence syntax, modal verbs, and initial accusative.'
    }
  },
  {
    level: 'A1.2',
    bookTitle: 'Deutsch Mussawi 2',
    bookSubtitle: 'تکمیل سطح A1 • درس‌های ۸ تا ۱۴',
    lessonRange: 'Lektion 8 – 14',
    startLesson: 8,
    endLesson: 14,
    description: {
      prs: 'کتاب دوم Deutsch Mussawi: مفعول داتیو، حروف اضافه داتیو، افعال امری و جملات پیرو با weil.',
      fa: 'کتاب دوم Deutsch Mussawi: حالت داتیو، ضمایر اشاره، جملات علّی با weil و جمع‌بندی سطح A1.',
      en: 'Deutsch Mussawi Book 2: Dative case, directional prepositions, imperative, and causal clauses.'
    }
  },
  {
    level: 'A2.1',
    bookTitle: 'Deutsch Mussawi 3',
    bookSubtitle: 'سطح متوسط مقدماتی • درس‌های ۱ تا ۷',
    lessonRange: 'Lektion 1 – 7',
    startLesson: 1,
    endLesson: 7,
    description: {
      prs: 'کتاب سوم Deutsch Mussawi: زمان گذشته پرفکت، حروف اضافه متغیر (Wechselpräpositionen)، صرف صفت و افعال انعکاسی.',
      fa: 'کتاب سوم Deutsch Mussawi: گذشته کامل، حروف اضافه دوگانه، صرف صفت و افعال بازتابی.',
      en: 'Deutsch Mussawi Book 3: Perfekt tense, two-way prepositions, adjective endings, and reflexive verbs.'
    }
  },
  {
    level: 'A2.2',
    bookTitle: 'Deutsch Mussawi 4',
    bookSubtitle: 'تکمیل سطح A2 • درس‌های ۸ تا ۱۴',
    lessonRange: 'Lektion 8 – 14',
    startLesson: 8,
    endLesson: 14,
    description: {
      prs: 'کتاب چهارم Deutsch Mussawi: جملات موصولی، کونیونکتیو ۲، سوالات غیرمستقیم و تفاوت wenn و als.',
      fa: 'کتاب چهارم Deutsch Mussawi: جملات موصولی، وجه التزامی مؤدبانه، جملات شرطی و زمانی.',
      en: 'Deutsch Mussawi Book 4: Relative clauses, polite Konjunktiv II, indirect questions, and temporal conjunctions.'
    }
  },
  {
    level: 'B1.1',
    bookTitle: 'Deutsch Mussawi 5',
    bookSubtitle: 'سطح متوسط پیشرفته • درس‌های ۱ تا ۷',
    lessonRange: 'Lektion 1 – 7',
    startLesson: 1,
    endLesson: 7,
    description: {
      prs: 'کتاب پنجم Deutsch Mussawi: ساختار مصدر با zu، جملات تضاد با obwohl، حالت گنیتو و حروف ربط دوتایی.',
      fa: 'کتاب پنجم Deutsch Mussawi: ساختار Infinitiv با zu، جملات تضاد با obwohl، مالکیت گنیتو و حروف ربط دوتایی.',
      en: 'Deutsch Mussawi Book 5: Infinitives with zu, concessive clauses, genitive case, and correlative conjunctions.'
    }
  },
  {
    level: 'B1.2',
    bookTitle: 'Deutsch Mussawi 6',
    bookSubtitle: 'آمادگی مدرک B1 گوته • درس‌های ۸ تا ۱۴',
    lessonRange: 'Lektion 8 – 14',
    startLesson: 8,
    endLesson: 14,
    description: {
      prs: 'کتاب ششم Deutsch Mussawi: مجهول فرآیندی (Passiv)، کونیونکتیو ۲ فرضی، صرف اسامی ضعیف (N-Deklination) و زمان آینده.',
      fa: 'کتاب ششم Deutsch Mussawi: مجهول فرآیندی، فرضیات Konjunktiv II، صرف مذکر ضعیف و زمان آینده Futur I.',
      en: 'Deutsch Mussawi Book 6: Process passive, hypothetical Konjunktiv II, N-declension, and Futur I.'
    }
  },
  {
    level: 'B2.1',
    bookTitle: 'Deutsch Mussawi 7 (B2.1)',
    bookSubtitle: 'سطح عالی مسلکی • درس‌های ۱ تا ۶',
    lessonRange: 'Lektion 1 – 6',
    startLesson: 1,
    endLesson: 6,
    description: {
      prs: 'کتاب هفتم: اسم فاعل (Partizip I)، ساختار مجهول با افعال وجهی و اصطلاحات رسمی کاری.',
      fa: 'کتاب هفتم: صفت فاعلی، مجهول همراه با افعال کمکی و ترکیبات اسمی-فعلی.',
      en: 'Book 7: Partizip I as adjective, passive with modal verbs, and professional collocations.'
    }
  },
  {
    level: 'B2.2',
    bookTitle: 'Deutsch Mussawi 8 (B2.2)',
    bookSubtitle: 'تکمیل سطح B2 و آمادگی آزمون',
    lessonRange: 'Lektion 1 – 6',
    startLesson: 1,
    endLesson: 6,
    description: {
      prs: 'کتاب هشتم: کونیونکتیو ۱ در اخبار، مجهول وضعیتی و ترکیبات پیشرفته ساختار جمله.',
      fa: 'کتاب هشتم: نقل قول غیرمستقیم با Konjunktiv I، مجهول حالتی و ساختارهای توصیفی.',
      en: 'Book 8: Konjunktiv I indirect speech, stative passive, and extended participial attributes.'
    }
  },
  {
    level: 'C1.1',
    bookTitle: 'C1.1 Fachsprache',
    bookSubtitle: 'زبان تخصصی و دانشگاهی',
    lessonRange: 'Lektion 1 – 5',
    startLesson: 1,
    endLesson: 5,
    description: {
      prs: 'سطح C1.1: ساختارهای مصدری مجهول (sein + zu + Infinitiv) و سبک اسمی علمی.',
      fa: 'سطح C1.1: ساختارهای جایگزین مجهول و سبک نوشتار رسمی دانشگاهی.',
      en: 'Level C1.1: Modal infinitive constructions (sein + zu) and academic nominal style.'
    }
  },
  {
    level: 'C1.2',
    bookTitle: 'C1.2 Oberstufe',
    bookSubtitle: 'تسلط کامل زبانی',
    lessonRange: 'Lektion 1 – 5',
    startLesson: 1,
    endLesson: 5,
    description: {
      prs: 'سطح C1.2: کاربرد ذهنی افعال وجهی برای حدس و گمان، ساختارهای شرطی پیچیده.',
      fa: 'سطح C1.2: افعال وجهی ذهنی (درجه اطمینان) و جملات مرکب پیشرفته.',
      en: 'Level C1.2: Subjective modal verbs (epistemic modality) and advanced complex syntax.'
    }
  },
  {
    level: 'C2.1',
    bookTitle: 'C2.1 Meisterschaft',
    bookSubtitle: 'مهارت عالی و ادبی',
    lessonRange: 'Lektion 1 – 5',
    startLesson: 1,
    endLesson: 5,
    description: {
      prs: 'سطح C2.1: وارونگی سبک‌شناختی و آرایه‌های بلاغی پیشرفته.',
      fa: 'سطح C2.1: وارونگی سبکی، بلاغت ادبی و تاکید در پیشگاه جمله.',
      en: 'Level C2.1: Stylistic inversion, rhetorical topicalization, and nuanced sentence structures.'
    }
  },
  {
    level: 'C2.2',
    bookTitle: 'C2.2 Muttersprachliches Niveau',
    bookSubtitle: 'تسلط هم‌سطح زبان مادری',
    lessonRange: 'Lektion 1 – 5',
    startLesson: 1,
    endLesson: 5,
    description: {
      prs: 'سطح C2.2: ظرافت‌های معنایی حداکثری و عبارات فشرده حقوقی و فلسفی.',
      fa: 'سطح C2.2: نگارش حقوقی، متون فلسفی و تسلط کامل مانند زبان مادری.',
      en: 'Level C2.2: Condensed participial phrasing, legal and philosophical registers, native-like mastery.'
    }
  }
];

export const GrammarView: React.FC<GrammarViewProps> = ({
  currentLevel,
  language: initialLanguage,
  speechRate,
  onNavigateToLesson
}) => {
  // Independent Book Selection: Defaults to the current user's level book
  const [selectedBookLevel, setSelectedBookLevel] = useState<CEFRLevel>(currentLevel);
  // Independent Lesson Selection: 'all' means all lessons of this book, or a specific lesson number
  const [selectedLessonNumber, setSelectedLessonNumber] = useState<number | 'all'>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeLang, setActiveLang] = useState<LanguageCode>(initialLanguage);
  const [showSubtitles, setShowSubtitles] = useState<boolean>(true);

  // Sync if initialLanguage changes
  React.useEffect(() => {
    setActiveLang(initialLanguage);
  }, [initialLanguage]);

  // Keep selectedBookLevel in sync when currentLevel prop changes externally
  React.useEffect(() => {
    setSelectedBookLevel(currentLevel);
    setSelectedLessonNumber('all');
  }, [currentLevel]);

  const currentBookInfo = useMemo(() => {
    return BOOKS.find(b => b.level === selectedBookLevel) || BOOKS[0];
  }, [selectedBookLevel]);

  // Grammar rules strictly belonging to the currently selected independent book
  const bookRules = useMemo(() => {
    return GRAMMAR_RULES.filter(rule => rule.level === selectedBookLevel);
  }, [selectedBookLevel]);

  // Available lessons in this book
  const lessonsInBook = useMemo(() => {
    const lessonSet = new Set<number>();
    for (const rule of bookRules) {
      if (rule.lektion) {
        lessonSet.add(rule.lektion);
      }
    }
    // Also guarantee range from book metadata
    for (let i = currentBookInfo.startLesson; i <= currentBookInfo.endLesson; i++) {
      lessonSet.add(i);
    }
    return Array.from(lessonSet).sort((a, b) => a - b);
  }, [bookRules, currentBookInfo]);

  // Filter rules by lesson and category within this independent book
  const filteredRules = useMemo(() => {
    return bookRules.filter(rule => {
      // Filter by lesson
      if (selectedLessonNumber !== 'all') {
        if (rule.lektion !== selectedLessonNumber) return false;
      }
      // Filter by category
      if (selectedCategory !== 'all') {
        if (selectedCategory === 'subjunctive') {
          if (!rule.category?.includes('subjunctive') && !rule.id.includes('konjunktiv')) return false;
        } else if (selectedCategory === 'passive_voice') {
          if (!rule.category?.includes('passive') && !rule.id.includes('passiv') && !rule.id.includes('gerundiv')) return false;
        } else if (rule.category !== selectedCategory) {
          return false;
        }
      }
      return true;
    });
  }, [bookRules, selectedLessonNumber, selectedCategory]);

  const rtl = isRTL(activeLang);

  return (
    <div className="space-y-4">
      {/* 1. Independent Book Selector Bar (هر کتاب کاملاً مستقل) */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <BookOpen size={15} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span>کتاب‌های جامع دستور زبان آلمانی (Deutsch Mussawi)</span>
                <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  تفکیک درس به درس
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                هر کتاب به صورت کاملاً مستقل، منظم و منطبق بر درس‌های همان کتاب تدوین شده است.
              </p>
            </div>
          </div>

          {/* Subtitle Translation Language Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1 px-2.5 rounded border border-slate-200 text-xs">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
              <Languages size={13} className="text-blue-600" />
              <span>زبان ترجمه:</span>
            </div>
            <div className="flex flex-wrap items-center gap-1">
              {AVAILABLE_LANGUAGES.map(l => (
                <button
                  key={l.code}
                  onClick={() => setActiveLang(l.code)}
                  className={`px-2 py-0.5 rounded text-[11px] font-bold transition-colors cursor-pointer flex items-center gap-1 ${
                    activeLang === l.code
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100'
                  }`}
                  title={`${l.label} (${l.nativeName})`}
                >
                  <span>{l.flag}</span>
                  <span>{l.label}</span>
                </button>
              ))}
            </div>

            {/* Subtitle Visibility Toggle */}
            <button
              onClick={() => setShowSubtitles(!showSubtitles)}
              className={`ml-1 px-2 py-0.5 rounded text-[11px] font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
                showSubtitles
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
            >
              {showSubtitles ? <Eye size={12} /> : <EyeOff size={12} />}
              <span>{showSubtitles ? 'زیرنویس فعال' : 'بدون ترجمه'}</span>
            </button>
          </div>
        </div>

        {/* Independent Book Tabs (A1.1, A1.2, A2.1, A2.2, B1.1, B1.2, etc.) */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>انتخاب کتاب (Buch auswählen):</span>
            <span className="text-blue-600 font-normal">
              کتاب فعال: <strong>{currentBookInfo.bookTitle}</strong> ({currentBookInfo.level})
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-1.5">
            {BOOKS.map(book => {
              const isSelected = selectedBookLevel === book.level;
              return (
                <button
                  key={book.level}
                  onClick={() => {
                    setSelectedBookLevel(book.level);
                    setSelectedLessonNumber('all');
                  }}
                  className={`p-2 rounded text-right transition-all cursor-pointer border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-200'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold px-1.5 py-0.2 rounded ${
                      isSelected ? 'bg-white text-blue-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {book.level}
                    </span>
                    <span className="text-[10px] opacity-80">{book.lessonRange}</span>
                  </div>
                  <div className="font-bold text-xs mt-1 truncate">
                    {book.bookTitle}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 2. Active Book Banner & Lesson Selector (ناوبری درس به درس برای کتاب فعال) */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-3.5 space-y-3">
        {/* Book Header Information */}
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded font-mono">
                {currentBookInfo.level} • {currentBookInfo.lessonRange}
              </span>
              <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                {currentBookInfo.bookTitle}
              </h3>
            </div>
            <p className="text-xs text-slate-600 mt-0.5" dir={rtl ? 'rtl' : 'ltr'}>
              {currentBookInfo.description[activeLang === 'prs' ? 'prs' : activeLang === 'fa' ? 'fa' : 'en'] || currentBookInfo.description.prs}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium">
              تعداد قواعد این کتاب: <strong className="text-blue-700">{bookRules.length}</strong>
            </span>
          </div>
        </div>

        {/* Lesson-by-Lesson Pills for this Book */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>درس‌های مربوط به این کتاب (Lektionen dieses Buches):</span>
            <span className="text-[11px] text-slate-400">
              با انتخاب هر درس، صرفاً گرامر همان درس نمایش داده می‌شود
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
            {/* All lessons button */}
            <button
              onClick={() => setSelectedLessonNumber('all')}
              className={`px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                selectedLessonNumber === 'all'
                  ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                  : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
              }`}
            >
              همه درس‌های کتاب ({currentBookInfo.lessonRange})
            </button>

            {/* Individual Lesson Buttons */}
            {lessonsInBook.map(lekNum => {
              const isSelected = selectedLessonNumber === lekNum;
              const ruleForLek = bookRules.find(r => r.lektion === lekNum);
              return (
                <button
                  key={lekNum}
                  onClick={() => setSelectedLessonNumber(lekNum)}
                  className={`px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 border ${
                    isSelected
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-100'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                  }`}
                  title={ruleForLek?.germanTitle || `Lektion ${lekNum}`}
                >
                  <Bookmark size={12} className={isSelected ? 'text-white' : 'text-blue-500'} />
                  <span>درس {lekNum}</span>
                  {ruleForLek && (
                    <span className={`text-[10px] font-normal max-w-[120px] truncate hidden sm:inline ${
                      isSelected ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      ({ruleForLek.germanTitle.split(':')[0]})
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* 3. Empty State or Rules List */}
      {filteredRules.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded p-8 text-center space-y-3">
          <BookOpen size={32} className="mx-auto text-slate-400" />
          <h4 className="font-bold text-sm text-slate-800">
            هیچ قاعده گرامری برای فیلتر انتخابی یافت نشد
          </h4>
          <p className="text-xs text-slate-500">
            لطفاً فیلتر درس را روی «همه درس‌های کتاب» قرار دهید تا تمام قواعد این کتاب را مشاهده کنید.
          </p>
          <button
            onClick={() => {
              setSelectedLessonNumber('all');
              setSelectedCategory('all');
            }}
            className="text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded cursor-pointer"
          >
            مشاهده همه درس‌های {currentBookInfo.bookTitle}
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredRules.map((rule) => {
            const explanationText = getTranslation(rule.explanation, activeLang);

            return (
              <div
                key={rule.id}
                className="bg-white border border-slate-200 rounded shadow-xs p-4 flex flex-col justify-between hover:border-blue-300 transition-all space-y-3"
              >
                <div className="space-y-3">
                  {/* Card Header */}
                  <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                          کتاب {rule.level} • درس {rule.lektion}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 uppercase">
                          {rule.category}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                          {rule.germanTitle}
                        </h3>
                        <button
                          onClick={() => playHighGermanAudio(rule.germanTitle, speechRate)}
                          className="text-slate-400 hover:text-blue-600 p-0.5 cursor-pointer shrink-0"
                          title="Titel vorlesen"
                        >
                          <Volume2 size={14} />
                        </button>
                      </div>
                    </div>

                    {/* Direct Button: Jump to Lesson in Book */}
                    {onNavigateToLesson && rule.lektion && (
                      <button
                        onClick={() => onNavigateToLesson(rule.level, rule.lektion!)}
                        className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded transition-colors flex items-center gap-1 shrink-0 cursor-pointer"
                        title={`رفتن به درس ${rule.lektion} کتاب ${rule.level}`}
                      >
                        <BookOpen size={12} />
                        <span>رفتن به درس</span>
                        <ArrowRight size={11} className="rtl:rotate-180" />
                      </button>
                    )}
                  </div>

                  {/* Mathematical Syntax Formula Banner */}
                  <div className="p-2.5 bg-slate-900 rounded font-mono text-center text-xs tracking-wider flex items-center justify-between gap-2 px-3">
                    <span className="text-blue-400 font-bold text-right ltr:text-left flex-1">
                      {rule.formula}
                    </span>
                    <button
                      onClick={() => playHighGermanAudio(rule.formula, speechRate)}
                      className="text-slate-400 hover:text-white p-0.5 cursor-pointer shrink-0"
                      title="Formel vorlesen"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>

                  {/* Localized Explanation with Selectable Language and RTL support */}
                  <div 
                    className={`p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-700 leading-relaxed ${
                      rtl ? 'text-right' : 'text-left'
                    }`} 
                    dir={rtl ? 'rtl' : 'ltr'}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide flex items-center gap-1">
                        <span>توضیح قاعده گرامری:</span>
                        <span className="bg-blue-100 text-blue-800 px-1.5 py-0.2 rounded font-sans">
                          {AVAILABLE_LANGUAGES.find(l => l.code === activeLang)?.nativeName || activeLang}
                        </span>
                      </span>
                    </div>
                    <p className="font-sans leading-normal">
                      {explanationText}
                    </p>
                  </div>

                  {/* Real-life Examples with Subtitles */}
                  <div className="space-y-2">
                    <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                      <span>جملات کاربردی و تجزیه فرمول:</span>
                      <span className="text-[9px] text-blue-600 font-medium">
                        {showSubtitles ? 'زیرنویس دوگانه فعال' : ''}
                      </span>
                    </div>
                    {rule.examples.map((ex, exIdx) => {
                      const literalText = getTranslation(ex.literalTranslation, activeLang);
                      const fluentText = getTranslation(ex.fluentTranslation, activeLang);

                      return (
                        <div
                          key={exIdx}
                          className="p-2.5 bg-blue-50/50 rounded border border-blue-100/80 text-xs space-y-1.5"
                        >
                          <div className="flex items-center justify-between font-bold text-slate-900">
                            <span>{ex.german}</span>
                            <button
                              onClick={() => playHighGermanAudio(ex.german, speechRate)}
                              className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer shrink-0"
                              title="Satz anhören"
                            >
                              <Volume2 size={13} />
                            </button>
                          </div>

                          {/* Tokenized formula breakdown */}
                          <div className="font-mono text-[10px] text-blue-800 bg-white/90 px-2 py-1 rounded border border-blue-100">
                            {ex.formulaBreakdown}
                          </div>

                          {/* Dual Subtitles (Word-for-Word & Fluent) */}
                          {showSubtitles && (
                            <div 
                              className={`grid grid-cols-1 gap-1 text-[11px] pt-1 border-t border-blue-100/60 ${
                                rtl ? 'text-right font-sans' : 'text-left'
                              }`}
                              dir={rtl ? 'rtl' : 'ltr'}
                            >
                              <div className="text-slate-500 flex items-baseline gap-1">
                                <span className="font-bold text-[9px] uppercase text-slate-400 shrink-0">
                                  {rtl ? 'کلمه به کلمه:' : 'Wort-für-Wort:'}
                                </span>
                                <span className="italic">{literalText}</span>
                              </div>
                              <div className="text-slate-800 font-medium flex items-baseline gap-1">
                                <span className="font-bold text-[9px] uppercase text-emerald-600 shrink-0">
                                  {rtl ? 'روان / سلیس:' : 'Fließend:'}
                                </span>
                                <span>{fluentText}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer Action */}
                {onNavigateToLesson && rule.lektion && (
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-[11px] text-slate-400">
                      مربوط به درس {rule.lektion} در کتاب {rule.level}
                    </span>
                    <button
                      onClick={() => onNavigateToLesson(rule.level, rule.lektion!)}
                      className="text-xs font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1 cursor-pointer"
                    >
                      <span>مطالعه کل درس در کتاب</span>
                      <ChevronRight size={13} className="rtl:rotate-180" />
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
