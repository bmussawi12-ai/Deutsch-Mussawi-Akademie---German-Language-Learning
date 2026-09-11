import React, { useState, useMemo } from 'react';
import { CEFRLevel, LanguageCode, GlossaryEntry } from '../types';
import { GLOSSARY_DATA } from '../data/glossary';
import { playHighGermanAudio } from '../utils/speech';
import { getTranslation, isRTL } from '../utils/translationHelper';

const GENDER_SUFFIX_RULES = {
  maskulin: ['er', 'ling', 'or', 'ismus', 'ist', 'ant'],
  feminin: ['ung', 'heit', 'keit', 'schaft', 'tion', 'tät', 'ur', 'ei', 'in'],
  neutral: ['chen', 'lein', 'ment', 'um', 'ma', 'tum']
};
import { 
  Search, 
  Volume2, 
  BookOpen, 
  Filter, 
  ShieldCheck, 
  Grid, 
  Sparkles,
  ChevronRight,
  Languages,
  Bookmark,
  X
} from 'lucide-react';

interface GlossaryViewProps {
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

interface BookInfo {
  level: CEFRLevel;
  bookTitle: string;
  bookSubtitle: string;
  lessonRange: string;
  startLesson: number;
  endLesson: number;
}

const BOOKS: BookInfo[] = [
  { level: 'A1.1', bookTitle: 'Deutsch Mussawi 1', bookSubtitle: 'سطح آغازین • درس‌های ۱ تا ۷', lessonRange: 'Lektion 1 – 7', startLesson: 1, endLesson: 7 },
  { level: 'A1.2', bookTitle: 'Deutsch Mussawi 2', bookSubtitle: 'تکمیل سطح A1 • درس‌های ۸ تا ۱۴', lessonRange: 'Lektion 8 – 14', startLesson: 8, endLesson: 14 },
  { level: 'A2.1', bookTitle: 'Deutsch Mussawi 3', bookSubtitle: 'متوسط مقدماتی • درس‌های ۱ تا ۷', lessonRange: 'Lektion 1 – 7', startLesson: 1, endLesson: 7 },
  { level: 'A2.2', bookTitle: 'Deutsch Mussawi 4', bookSubtitle: 'تکمیل سطح A2 • درس‌های ۸ تا ۱۴', lessonRange: 'Lektion 8 – 14', startLesson: 8, endLesson: 14 },
  { level: 'B1.1', bookTitle: 'Deutsch Mussawi 5', bookSubtitle: 'متوسط پیشرفته • درس‌های ۱ تا ۷', lessonRange: 'Lektion 1 – 7', startLesson: 1, endLesson: 7 },
  { level: 'B1.2', bookTitle: 'Deutsch Mussawi 6', bookSubtitle: 'آمادگی مدرک B1 • درس‌های ۸ تا ۱۴', lessonRange: 'Lektion 8 – 14', startLesson: 8, endLesson: 14 },
  { level: 'B2.1', bookTitle: 'Deutsch Mussawi 7 (B2.1)', bookSubtitle: 'سطح عالی شغلی • درس‌های ۱ تا ۶', lessonRange: 'Lektion 1 – 6', startLesson: 1, endLesson: 6 },
  { level: 'B2.2', bookTitle: 'Deutsch Mussawi 8 (B2.2)', bookSubtitle: 'تکمیل سطح B2 • درس‌های ۱ تا ۶', lessonRange: 'Lektion 1 – 6', startLesson: 1, endLesson: 6 },
  { level: 'C1.1', bookTitle: 'C1.1 Fachsprache', bookSubtitle: 'زبان تخصصی و دانشگاهی', lessonRange: 'Lektion 1 – 5', startLesson: 1, endLesson: 5 },
  { level: 'C1.2', bookTitle: 'C1.2 Oberstufe', bookSubtitle: 'تسلط کامل زبانی', lessonRange: 'Lektion 1 – 5', startLesson: 1, endLesson: 5 },
  { level: 'C2.1', bookTitle: 'C2.1 Meisterschaft', bookSubtitle: 'مهارت عالی ادبی', lessonRange: 'Lektion 1 – 5', startLesson: 1, endLesson: 5 },
  { level: 'C2.2', bookTitle: 'C2.2 Muttersprachlich', bookSubtitle: 'تسلط هم‌سطح زبان مادری', lessonRange: 'Lektion 1 – 5', startLesson: 1, endLesson: 5 }
];

export const GlossaryView: React.FC<GlossaryViewProps> = ({
  currentLevel,
  language: initialLanguage,
  speechRate,
  onNavigateToLesson
}) => {
  const [activeTab, setActiveTab] = useState<'words' | 'genderRules' | 'declension'>('words');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGender, setSelectedGender] = useState<'all' | 'der' | 'die' | 'das' | 'other'>('all');
  const [selectedBookLevel, setSelectedBookLevel] = useState<CEFRLevel>(currentLevel);
  const [selectedLessonFilter, setSelectedLessonFilter] = useState<number | 'all'>('all');
  const [activeLang, setActiveLang] = useState<LanguageCode>(initialLanguage);

  // Sync initial language
  React.useEffect(() => {
    setActiveLang(initialLanguage);
  }, [initialLanguage]);

  // Sync level externally
  React.useEffect(() => {
    setSelectedBookLevel(currentLevel);
    setSelectedLessonFilter('all');
  }, [currentLevel]);

  const currentBookInfo = useMemo(() => {
    return BOOKS.find(b => b.level === selectedBookLevel) || BOOKS[0];
  }, [selectedBookLevel]);

  // All entries for selected book level
  const bookEntries: GlossaryEntry[] = useMemo(() => {
    return GLOSSARY_DATA[selectedBookLevel] || [];
  }, [selectedBookLevel]);

  // Available lessons inside this book
  const availableLessons = useMemo(() => {
    const set = new Set<number>();
    bookEntries.forEach(entry => {
      if (entry.lektion) set.add(entry.lektion);
    });
    // Also include default book range
    for (let i = currentBookInfo.startLesson; i <= currentBookInfo.endLesson; i++) {
      set.add(i);
    }
    return Array.from(set).sort((a, b) => a - b);
  }, [bookEntries, currentBookInfo]);

  // Filter entries
  const filteredEntries = useMemo(() => {
    return bookEntries.filter(item => {
      // Lesson filter
      if (selectedLessonFilter !== 'all' && item.lektion !== selectedLessonFilter) {
        return false;
      }

      // Gender / article filter
      if (selectedGender !== 'all') {
        if (selectedGender === 'other') {
          if (item.article) return false;
        } else if (item.article !== selectedGender) {
          return false;
        }
      }

      // Search term
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const trans = getTranslation(item.translation as any, activeLang).toLowerCase();
        const enTrans = (item.translation.en || '').toLowerCase();
        const faTrans = (item.translation.fa || '').toLowerCase();
        const prsTrans = (item.translation.prs || '').toLowerCase();
        const wordMatch = item.word.toLowerCase().includes(q);
        const exMatch = (item.exampleGerman || '').toLowerCase().includes(q);

        return wordMatch || trans.includes(q) || enTrans.includes(q) || faTrans.includes(q) || prsTrans.includes(q) || exMatch;
      }

      return true;
    });
  }, [bookEntries, selectedLessonFilter, selectedGender, searchTerm, activeLang]);

  // Counts by article
  const articleCounts = useMemo(() => {
    let der = 0;
    let die = 0;
    let das = 0;
    let other = 0;
    bookEntries.forEach(e => {
      if (e.article === 'der') der++;
      else if (e.article === 'die') die++;
      else if (e.article === 'das') das++;
      else other++;
    });
    return { der, die, das, other, total: bookEntries.length };
  }, [bookEntries]);

  const rtl = isRTL(activeLang);

  return (
    <div className="space-y-4">
      {/* 1. Header Card: Title & Sub-tabs */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-2.5">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                Wortschatz & Systematik
              </span>
              <span className="text-xs text-slate-500 font-medium">
                واژه‌نامه تفکیک‌شده Deutsch Mussawi (A1–C2)
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5 flex items-center gap-2">
              <span>بانک جامع واژگان و قواعد آرتیکل</span>
              <span className="text-xs font-normal text-blue-600 font-mono bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                {currentBookInfo.bookTitle}
              </span>
            </h2>
          </div>

          {/* Sub-tabs & Translation Language */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Translation Language Switcher */}
            <div className="flex items-center gap-1 bg-slate-50 p-1 px-2 rounded border border-slate-200 text-xs">
              <Languages size={13} className="text-blue-600" />
              <div className="flex items-center gap-0.5">
                {AVAILABLE_LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    onClick={() => setActiveLang(l.code)}
                    className={`px-1.5 py-0.5 rounded text-[10px] font-bold cursor-pointer transition-colors ${
                      activeLang === l.code
                        ? 'bg-blue-600 text-white shadow-xs'
                        : 'text-slate-600 hover:bg-slate-200'
                    }`}
                    title={`${l.label} (${l.nativeName})`}
                  >
                    <span>{l.flag}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Sub-tab pills */}
            <div className="flex bg-slate-100 p-1 rounded border border-slate-200 text-xs font-bold">
              <button
                onClick={() => setActiveTab('words')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'words' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                واژه‌نامه ({filteredEntries.length})
              </button>
              <button
                onClick={() => setActiveTab('genderRules')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'genderRules' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                قواعد تشخیص آرتیکل
              </button>
              <button
                onClick={() => setActiveTab('declension')}
                className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                  activeTab === 'declension' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                جداول صرف آرتیکل
              </button>
            </div>
          </div>
        </div>

        {/* Independent Book Tabs (Deutsch Mussawi 1 to 8 + C1/C2) */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>انتخاب کتاب مستقل (Buch auswählen):</span>
            <span className="text-blue-600 font-normal">
              واژگان فعال: <strong>{currentBookInfo.bookTitle}</strong> ({currentBookInfo.level})
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
                    setSelectedLessonFilter('all');
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

      {/* View 1: Main Vocabulary List */}
      {activeTab === 'words' && (
        <div className="bg-white border border-slate-200 rounded shadow-xs overflow-hidden space-y-0">
          {/* Lesson Filter & Search & Article Filters Bar */}
          <div className="p-3 bg-slate-50 border-b border-slate-200 space-y-2.5">
            {/* Lesson Filter Pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              <span className="text-[11px] font-bold text-slate-500 whitespace-nowrap mr-1 flex items-center gap-1">
                <Bookmark size={12} className="text-blue-600" />
                <span>فیلتر درس:</span>
              </span>
              <button
                onClick={() => setSelectedLessonFilter('all')}
                className={`px-2.5 py-1 rounded text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                  selectedLessonFilter === 'all'
                    ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                تمام درس‌های {currentBookInfo.bookTitle} ({bookEntries.length})
              </button>
              {availableLessons.map(lesNum => {
                const isSelected = selectedLessonFilter === lesNum;
                const countForLesson = bookEntries.filter(e => e.lektion === lesNum).length;
                return (
                  <button
                    key={lesNum}
                    onClick={() => setSelectedLessonFilter(lesNum)}
                    className={`px-2.5 py-1 rounded text-xs font-bold whitespace-nowrap transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    درس {lesNum} {countForLesson > 0 && `(${countForLesson})`}
                  </button>
                );
              })}
            </div>

            {/* Search Input and Article Filter */}
            <div className="flex flex-wrap items-center justify-between gap-2.5 pt-1 border-t border-slate-200/60">
              {/* Search Box */}
              <div className="relative flex-1 min-w-[220px] max-w-md">
                <Search size={14} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="جستجوی کلمه آلمانی، معنی یا جمله نمونه..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-8 pr-8 py-1.5 bg-white text-xs border border-slate-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    <X size={13} />
                  </button>
                )}
              </div>

              {/* Gender / Article Badges Filter */}
              <div className="flex items-center gap-1 text-xs">
                <button
                  onClick={() => setSelectedGender('all')}
                  className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    selectedGender === 'all'
                      ? 'bg-slate-800 text-white border-slate-800 shadow-xs'
                      : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  همه ({bookEntries.length})
                </button>
                <button
                  onClick={() => setSelectedGender('der')}
                  className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    selectedGender === 'der'
                      ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                      : 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                  }`}
                >
                  der ({articleCounts.der})
                </button>
                <button
                  onClick={() => setSelectedGender('die')}
                  className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    selectedGender === 'die'
                      ? 'bg-rose-600 text-white border-rose-600 shadow-xs'
                      : 'bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100'
                  }`}
                >
                  die ({articleCounts.die})
                </button>
                <button
                  onClick={() => setSelectedGender('das')}
                  className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    selectedGender === 'das'
                      ? 'bg-emerald-600 text-white border-emerald-600 shadow-xs'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100'
                  }`}
                >
                  das ({articleCounts.das})
                </button>
                <button
                  onClick={() => setSelectedGender('other')}
                  className={`px-2 py-1 rounded text-[11px] font-bold border transition-colors cursor-pointer ${
                    selectedGender === 'other'
                      ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                      : 'bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100'
                  }`}
                >
                  افعال و صفات ({articleCounts.other})
                </button>
              </div>
            </div>
          </div>

          {/* High Density Table */}
          {filteredEntries.length === 0 ? (
            <div className="p-8 text-center space-y-2 text-slate-500">
              <BookOpen size={28} className="mx-auto text-slate-400" />
              <p className="text-xs font-bold text-slate-700">هیچ کلمه‌ای با فیلتر انتخابی یافت نشد</p>
              <p className="text-[11px]">عبارت جستجو را تغییر دهید یا فیلتر آرتیکل را بر روی «همه» بگذارید.</p>
            </div>
          ) : (
            <div className="overflow-x-auto max-h-[600px] overflow-y-auto">
              <table className="w-full text-left border-collapse">
                <thead className="sticky top-0 bg-slate-100 text-[10px] uppercase font-bold text-slate-500 border-b border-slate-200 z-10">
                  <tr>
                    <th className="p-2.5 w-10 text-center">صدا</th>
                    <th className="p-2.5 w-16">آرتیکل</th>
                    <th className="p-2.5">واژه آلمانی (Wort)</th>
                    <th className="p-2.5 w-24">جمع (Plural)</th>
                    <th className="p-2.5 w-24">تلفظ (IPA)</th>
                    <th className="p-2.5">ترجمه به {AVAILABLE_LANGUAGES.find(l => l.code === activeLang)?.label}</th>
                    <th className="p-2.5 hidden md:table-cell">جمله کاربردی در بافت (Beispielsatz)</th>
                    <th className="p-2.5 w-20 text-center">درس</th>
                  </tr>
                </thead>
                <tbody className="text-[11px] divide-y divide-slate-100">
                  {filteredEntries.map((item) => {
                    let genderBadge = 'bg-slate-100 text-slate-600 border-slate-200';
                    if (item.article === 'der') genderBadge = 'bg-blue-50 text-blue-600 border-blue-200';
                    else if (item.article === 'die') genderBadge = 'bg-rose-50 text-rose-600 border-rose-200';
                    else if (item.article === 'das') genderBadge = 'bg-emerald-50 text-emerald-600 border-emerald-200';

                    const translatedWord = getTranslation(item.translation as any, activeLang);
                    const translatedExample = item.exampleTranslation 
                      ? getTranslation(item.exampleTranslation as any, activeLang)
                      : '';

                    return (
                      <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                        <td className="p-2 text-center">
                          <button
                            onClick={() => playHighGermanAudio(item.article ? `${item.article} ${item.word}` : item.word, speechRate)}
                            className="p-1 rounded text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors cursor-pointer"
                            title="پخش تلفظ آلمانی معیار"
                          >
                            <Volume2 size={13} />
                          </button>
                        </td>
                        <td className="p-2">
                          {item.article ? (
                            <span className={`px-1.5 py-0.5 rounded text-[10px] font-bold border ${genderBadge}`}>
                              {item.article}
                            </span>
                          ) : (
                            <span className="text-slate-400 text-[10px] italic">-</span>
                          )}
                        </td>
                        <td className="p-2 font-bold text-slate-900">
                          {item.word}
                        </td>
                        <td className="p-2 font-mono text-[10px] text-slate-600">
                          {item.plural || '-'}
                        </td>
                        <td className="p-2 font-mono text-[10px] text-slate-400">
                          {item.ipa || '-'}
                        </td>
                        <td className="p-2 text-slate-800 font-medium" dir={rtl ? 'rtl' : 'ltr'}>
                          {translatedWord}
                        </td>
                        <td className="p-2 hidden md:table-cell text-slate-600 text-[10px]">
                          <div className="flex flex-col gap-0.5">
                            <div className="flex items-center justify-between gap-2">
                              <span className="italic truncate max-w-xs">{item.exampleGerman}</span>
                              {item.exampleGerman && (
                                <button
                                  onClick={() => playHighGermanAudio(item.exampleGerman, speechRate)}
                                  className="text-slate-400 hover:text-blue-600 p-0.5 shrink-0 opacity-0 group-hover:opacity-100 cursor-pointer"
                                  title="تلفظ جمله کامل"
                                >
                                  <Volume2 size={11} />
                                </button>
                              )}
                            </div>
                            {translatedExample && (
                              <span 
                                className="text-[10px] text-slate-400 truncate max-w-xs font-sans"
                                dir={rtl ? 'rtl' : 'ltr'}
                              >
                                {translatedExample}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="p-2 text-center text-[10px] font-mono text-slate-500">
                          {onNavigateToLesson && item.lektion ? (
                            <button
                              onClick={() => onNavigateToLesson(selectedBookLevel, item.lektion)}
                              className="text-blue-600 hover:underline cursor-pointer flex items-center justify-center gap-0.5 mx-auto"
                              title="مشاهده این درس در کتاب"
                            >
                              <span>درس {item.lektion}</span>
                              <ChevronRight size={10} className="rtl:rotate-180" />
                            </button>
                          ) : (
                            <span>درس {item.lektion || '-'}</span>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* View 2: Gender Rules (Artikelableitung) */}
      {activeTab === 'genderRules' && (
        <div className="bg-white border border-slate-200 rounded shadow-xs p-4 space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <ShieldCheck size={16} className="text-blue-600" />
              <span>قواعد قطعی تشخیص آرتیکل (Artikelableitungsregeln)</span>
            </h3>
            <p className="text-xs text-slate-500">
              با یادگیری پسوندهای زیر می‌توانید جنسیت بیش از ۸۰٪ اسامی زبان آلمانی را به طور دقیق پیش‌بینی کنید.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Maskulin: der */}
            <div className="p-3.5 bg-blue-50/50 border border-blue-200 rounded space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-blue-900 bg-blue-100 px-2 py-0.5 rounded">
                  der (Maskulin)
                </span>
                <span className="text-[10px] font-bold text-blue-700">مذکر</span>
              </div>
              <p className="text-[11px] text-slate-600">
                اسامی دارای این پسوندها تقریباً همیشه <strong>der</strong> هستند:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {GENDER_SUFFIX_RULES.maskulin.map(suf => (
                  <span key={suf} className="px-2 py-0.5 bg-white border border-blue-200 rounded text-blue-800 font-mono text-[11px] font-bold">
                    -{suf}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-blue-100 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-700">دسته‌بندی‌های معنایی:</div>
                <div>• روزهای هفته، ماه‌ها و فصل‌ها (der Montag, der Juli, der Sommer)</div>
                <div>• جهت‌های جغرافیایی (der Norden, der Süden)</div>
                <div>• پدیده‌های جوی و بادها (der Regen, der Schnee, der Wind)</div>
              </div>
            </div>

            {/* Feminin: die */}
            <div className="p-3.5 bg-rose-50/50 border border-rose-200 rounded space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-rose-900 bg-rose-100 px-2 py-0.5 rounded">
                  die (Feminin)
                </span>
                <span className="text-[10px] font-bold text-rose-700">مؤنث</span>
              </div>
              <p className="text-[11px] text-slate-600">
                اسامی دارای این پسوندها ۱۰۰٪ <strong>die</strong> هستند:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {GENDER_SUFFIX_RULES.feminin.map(suf => (
                  <span key={suf} className="px-2 py-0.5 bg-white border border-rose-200 rounded text-rose-800 font-mono text-[11px] font-bold">
                    -{suf}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-rose-100 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-700">دسته‌بندی‌های معنایی:</div>
                <div>• مشاغل مؤنث با پسوند -in (die Lehrerin, die Ärztin)</div>
                <div>• نام بیشتر درختان، گل‌ها و میوه‌ها (die Rose, die Banane)</div>
                <div>• نام کشتی‌ها و هواپیماها (die Titanic, die Boeing)</div>
              </div>
            </div>

            {/* Neutral: das */}
            <div className="p-3.5 bg-emerald-50/50 border border-emerald-200 rounded space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-xs text-emerald-900 bg-emerald-100 px-2 py-0.5 rounded">
                  das (Neutral)
                </span>
                <span className="text-[10px] font-bold text-emerald-700">خنثی</span>
              </div>
              <p className="text-[11px] text-slate-600">
                اسامی مصغر و دارای این پسوندها ۱۰۰٪ <strong>das</strong> هستند:
              </p>
              <div className="flex flex-wrap gap-1.5 pt-1">
                {GENDER_SUFFIX_RULES.neutral.map(suf => (
                  <span key={suf} className="px-2 py-0.5 bg-white border border-emerald-200 rounded text-emerald-800 font-mono text-[11px] font-bold">
                    -{suf}
                  </span>
                ))}
              </div>
              <div className="pt-2 border-t border-emerald-100 text-[11px] text-slate-600 space-y-1">
                <div className="font-bold text-slate-700">دسته‌بندی‌های معنایی:</div>
                <div>• مصادرهایی که به اسم تبدیل شده‌اند (das Essen, das Leben)</div>
                <div>• پسوندهای تصغیر -chen و -lein (das Mädchen, das Brötchen)</div>
                <div>• نام بیشتر فلزات و عناصر شیمیایی (das Gold, das Silber)</div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* View 3: Declension Tables (Deklinationstabellen) */}
      {activeTab === 'declension' && (
        <div className="bg-white border border-slate-200 rounded shadow-xs p-4 space-y-4">
          <div className="border-b border-slate-100 pb-2">
            <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
              <Grid size={16} className="text-blue-600" />
              <span>جدول جامع صرف حروف تعریف (Deklination der Artikel)</span>
            </h3>
            <p className="text-xs text-slate-500">
              صرف حروف تعریف معین، نامعین و منفی در ۴ حالت دستوری: Nominativ, Akkusativ, Dativ, Genitiv.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-center text-xs border-collapse">
              <thead>
                <tr className="bg-slate-100 font-bold text-slate-700 border-b border-slate-200">
                  <th className="p-2.5 text-right">حالت (Kasus)</th>
                  <th className="p-2.5 text-blue-700">Maskulin (مذکر)</th>
                  <th className="p-2.5 text-rose-700">Feminin (مؤنث)</th>
                  <th className="p-2.5 text-emerald-700">Neutral (خنثی)</th>
                  <th className="p-2.5 text-purple-700">Plural (جمع)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-right text-slate-800 bg-slate-50/50">
                    Nominativ (فاعلی)
                  </td>
                  <td className="p-2.5 font-bold text-blue-800">der / ein / kein</td>
                  <td className="p-2.5 font-bold text-rose-800">die / eine / keine</td>
                  <td className="p-2.5 font-bold text-emerald-800">das / ein / kein</td>
                  <td className="p-2.5 font-bold text-purple-800">die / - / keine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-right text-slate-800 bg-slate-50/50">
                    Akkusativ (مفعول مستقیم)
                  </td>
                  <td className="p-2.5 font-bold text-blue-800 bg-blue-50/40">den / einen / keinen</td>
                  <td className="p-2.5 font-bold text-rose-800">die / eine / keine</td>
                  <td className="p-2.5 font-bold text-emerald-800">das / ein / kein</td>
                  <td className="p-2.5 font-bold text-purple-800">die / - / keine</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-right text-slate-800 bg-slate-50/50">
                    Dativ (مفعول غیرمستقیم)
                  </td>
                  <td className="p-2.5 font-bold text-blue-800">dem / einem / keinem</td>
                  <td className="p-2.5 font-bold text-rose-800">der / einer / keiner</td>
                  <td className="p-2.5 font-bold text-emerald-800">dem / einem / keinem</td>
                  <td className="p-2.5 font-bold text-purple-800">den / - / keinen (+n)</td>
                </tr>
                <tr className="hover:bg-slate-50">
                  <td className="p-2.5 font-bold text-right text-slate-800 bg-slate-50/50">
                    Genitiv (مالکیت و اضافه)
                  </td>
                  <td className="p-2.5 font-bold text-blue-800">des / eines / keines (+s/es)</td>
                  <td className="p-2.5 font-bold text-rose-800">der / einer / keiner</td>
                  <td className="p-2.5 font-bold text-emerald-800">des / eines / keines (+s/es)</td>
                  <td className="p-2.5 font-bold text-purple-800">der / - / keiner</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};
