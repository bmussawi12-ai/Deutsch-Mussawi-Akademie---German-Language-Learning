import React, { useState, useMemo } from 'react';
import { CEFRLevel, LanguageCode, ExerciseQuestion, ExerciseChapter } from '../types';
import { CUMULATIVE_REVIEWS, CURRICULUM_LESSONS } from '../data/curriculum';
import { playHighGermanAudio } from '../utils/speech';
import { isRTL } from '../utils/translationHelper';
import { 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  Award, 
  Sparkles, 
  ArrowRight, 
  Volume2, 
  BookOpen, 
  Layers, 
  Languages, 
  Bookmark,
  ChevronRight,
  Filter
} from 'lucide-react';

interface ExercisesViewProps {
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

export const ExercisesView: React.FC<ExercisesViewProps> = ({
  currentLevel,
  language: initialLanguage,
  speechRate,
  onNavigateToLesson
}) => {
  const [selectedBookLevel, setSelectedBookLevel] = useState<CEFRLevel>(currentLevel);
  const [exerciseMode, setExerciseMode] = useState<'by_lesson' | 'cumulative'>('by_lesson');
  const [selectedLessonNum, setSelectedLessonNum] = useState<number>(1);
  const [selectedCumulativeChapterId, setSelectedCumulativeChapterId] = useState<string>('');
  const [activeLang, setActiveLang] = useState<LanguageCode>(initialLanguage);
  
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [checkedAnswers, setCheckedAnswers] = useState<boolean>(false);
  const [reorderBuffers, setReorderBuffers] = useState<Record<string, string[]>>({});

  // Sync initial language
  React.useEffect(() => {
    setActiveLang(initialLanguage);
  }, [initialLanguage]);

  // Sync book level when currentLevel changes externally
  React.useEffect(() => {
    setSelectedBookLevel(currentLevel);
    const book = BOOKS.find(b => b.level === currentLevel) || BOOKS[0];
    setSelectedLessonNum(book.startLesson);
  }, [currentLevel]);

  const currentBookInfo = useMemo(() => {
    return BOOKS.find(b => b.level === selectedBookLevel) || BOOKS[0];
  }, [selectedBookLevel]);

  // Cumulative review chapters available for this book level
  const cumulativeChaptersForBook = useMemo(() => {
    const list = CUMULATIVE_REVIEWS.filter(r => r.level === selectedBookLevel);
    if (list.length === 0 && CUMULATIVE_REVIEWS.length > 0) {
      return [CUMULATIVE_REVIEWS[0]];
    }
    return list;
  }, [selectedBookLevel]);

  // Set default chapter if changed
  React.useEffect(() => {
    if (cumulativeChaptersForBook.length > 0) {
      setSelectedCumulativeChapterId(cumulativeChaptersForBook[0].id);
    }
  }, [cumulativeChaptersForBook]);

  // Lessons available in current book
  const lessonsInCurrentBook = useMemo(() => {
    return CURRICULUM_LESSONS[selectedBookLevel] || [];
  }, [selectedBookLevel]);

  // Active question set based on mode
  const activeQuestions: ExerciseQuestion[] = useMemo(() => {
    if (exerciseMode === 'by_lesson') {
      const targetLesson = lessonsInCurrentBook.find(l => l.lektionNumber === selectedLessonNum);
      if (targetLesson && targetLesson.exercises && targetLesson.exercises.length > 0) {
        return targetLesson.exercises;
      }
      return [];
    } else {
      const activeChapter = cumulativeChaptersForBook.find(c => c.id === selectedCumulativeChapterId) || cumulativeChaptersForBook[0];
      return activeChapter ? activeChapter.questions : [];
    }
  }, [exerciseMode, lessonsInCurrentBook, selectedLessonNum, cumulativeChaptersForBook, selectedCumulativeChapterId]);

  const handleSelectOption = (questionId: string, value: string) => {
    setUserAnswers(prev => ({ ...prev, [questionId]: value }));
    setCheckedAnswers(false);
  };

  const handleReorderClick = (questionId: string, word: string) => {
    const current = reorderBuffers[questionId] || [];
    let updated: string[];
    if (current.includes(word)) {
      updated = current.filter(w => w !== word);
    } else {
      updated = [...current, word];
    }
    setReorderBuffers(prev => ({ ...prev, [questionId]: updated }));
    setUserAnswers(prev => ({ ...prev, [questionId]: updated.join(' ') }));
    setCheckedAnswers(false);
  };

  const handleReset = () => {
    setUserAnswers({});
    setCheckedAnswers(false);
    setReorderBuffers({});
  };

  // Calculate score
  const totalQuestions = activeQuestions.length;
  let correctCount = 0;
  if (checkedAnswers && totalQuestions > 0) {
    activeQuestions.forEach(q => {
      const ans = (userAnswers[q.id] || '').trim().toLowerCase();
      const cor = String(q.correctAnswer).trim().toLowerCase();
      if (ans === cor) {
        correctCount++;
      }
    });
  }

  const scorePercentage = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
  const rtl = isRTL(activeLang);

  return (
    <div className="space-y-4">
      {/* 1. Top Bar: Book Selector & Translation Language */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded bg-blue-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
              <CheckCircle2 size={16} />
            </div>
            <div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-1.5">
                <span>تمرین‌ها و آزمون‌های طبقه‌بندی‌شده (Deutsch Mussawi)</span>
                <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                  تفکیک کتاب و درس
                </span>
              </h2>
              <p className="text-[11px] text-slate-500">
                تمرین‌های استاندارد درس‌به‌درس و آزمون‌های میان‌دوره‌ای تجمعی برای سنجش دقیق یادگیری.
              </p>
            </div>
          </div>

          {/* Subtitle Translation Language Switcher */}
          <div className="flex flex-wrap items-center gap-1.5 bg-slate-50 p-1 px-2.5 rounded border border-slate-200 text-xs">
            <div className="flex items-center gap-1 text-[11px] font-bold text-slate-700">
              <Languages size={13} className="text-blue-600" />
              <span>زبان توضیحات:</span>
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
          </div>
        </div>

        {/* Independent Book Tabs */}
        <div className="space-y-1.5">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
            <span>انتخاب کتاب (Buch auswählen):</span>
            <span className="text-blue-600 font-normal">
              کتاب انتخابی: <strong>{currentBookInfo.bookTitle}</strong> ({currentBookInfo.level})
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
                    setSelectedLessonNum(book.startLesson);
                    handleReset();
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

      {/* 2. Mode Selector: By Lesson VS Cumulative Review */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700">حالت تمرین:</span>
            <div className="flex bg-slate-100 p-1 rounded border border-slate-200 text-xs font-bold">
              <button
                onClick={() => {
                  setExerciseMode('by_lesson');
                  handleReset();
                }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                  exerciseMode === 'by_lesson'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Bookmark size={13} />
                <span>تمرین‌های درس‌به‌درس (Lektionsübungen)</span>
              </button>
              <button
                onClick={() => {
                  setExerciseMode('cumulative');
                  handleReset();
                }}
                className={`px-3 py-1 rounded transition-colors cursor-pointer flex items-center gap-1.5 ${
                  exerciseMode === 'cumulative'
                    ? 'bg-blue-600 text-white shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Layers size={13} />
                <span>آزمون‌های مروری تجمعی (Zwischentests)</span>
              </button>
            </div>
          </div>

          <span className="text-xs text-slate-500 font-medium">
            تعداد سوالات فعال: <strong className="text-blue-700">{activeQuestions.length}</strong>
          </span>
        </div>

        {/* Dynamic selector based on mode */}
        {exerciseMode === 'by_lesson' ? (
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>انتخاب درس در {currentBookInfo.bookTitle}:</span>
              <span className="text-[11px] text-slate-400">
                با انتخاب هر درس، سوالات تثبیت مفاهیم همان درس ظاهر می‌شوند
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 no-scrollbar text-xs">
              {lessonsInCurrentBook.map(les => {
                const isSelected = selectedLessonNum === les.lektionNumber;
                return (
                  <button
                    key={les.id}
                    onClick={() => {
                      setSelectedLessonNum(les.lektionNumber);
                      handleReset();
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-bold whitespace-nowrap transition-colors cursor-pointer flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-600 shadow-xs ring-2 ring-blue-100'
                        : 'bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-blue-50/50'
                    }`}
                  >
                    <Bookmark size={12} className={isSelected ? 'text-white' : 'text-blue-500'} />
                    <span>درس {les.lektionNumber}</span>
                    <span className={`text-[10px] font-normal max-w-[120px] truncate hidden sm:inline ${
                      isSelected ? 'text-blue-100' : 'text-slate-400'
                    }`}>
                      ({les.titleGerman})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ) : (
          <div className="space-y-1.5">
            <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
              <span>فصل‌های مروری تجمعی برای سطح {selectedBookLevel}:</span>
              <span className="text-[11px] text-slate-400">
                مرور ترکیبی ۳ تا ۴ درس متوالی
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-1.5 text-xs">
              {cumulativeChaptersForBook.map(ch => {
                const isSelected = selectedCumulativeChapterId === ch.id;
                return (
                  <button
                    key={ch.id}
                    onClick={() => {
                      setSelectedCumulativeChapterId(ch.id);
                      handleReset();
                    }}
                    className={`px-3 py-1.5 rounded text-xs font-bold transition-colors cursor-pointer flex items-center gap-1.5 border ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-xs'
                        : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <Layers size={12} className={isSelected ? 'text-blue-400' : 'text-slate-500'} />
                    <span>{ch.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* 3. Main Exercise Area & Score Card */}
      {activeQuestions.length === 0 ? (
        <div className="bg-white border border-slate-200 rounded p-8 text-center space-y-3">
          <BookOpen size={32} className="mx-auto text-slate-400" />
          <h4 className="font-bold text-sm text-slate-800">
            برای این درس در حال حاضر سوال ثبت نشده است
          </h4>
          <p className="text-xs text-slate-500">
            لطفاً درس دیگری را انتخاب فرمایید یا به بخش «آزمون‌های مروری تجمعی» بروید.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-12 gap-4">
          {/* Questions Column (8 cols) */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <div className="bg-white border border-slate-200 rounded shadow-xs p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <h3 className="font-bold text-sm text-slate-900 flex items-center gap-2">
                    <span>
                      {exerciseMode === 'by_lesson' 
                        ? `تمرین‌های درس ${selectedLessonNum} (${currentBookInfo.bookTitle})`
                        : cumulativeChaptersForBook.find(c => c.id === selectedCumulativeChapterId)?.title || 'فصل مروری'
                      }
                    </span>
                    <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      {totalQuestions} سوال
                    </span>
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  {onNavigateToLesson && exerciseMode === 'by_lesson' && (
                    <button
                      onClick={() => onNavigateToLesson(selectedBookLevel, selectedLessonNum)}
                      className="text-[11px] font-bold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-2.5 py-1 rounded transition-colors flex items-center gap-1 cursor-pointer"
                      title="مشاهده درس در کتاب"
                    >
                      <BookOpen size={12} />
                      <span>متن کامل درس</span>
                      <ChevronRight size={12} className="rtl:rotate-180" />
                    </button>
                  )}
                  <button
                    onClick={handleReset}
                    className="text-[11px] font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 cursor-pointer"
                    title="شروع مجدد این تمرین"
                  >
                    <RotateCcw size={12} />
                    <span>شروع مجدد</span>
                  </button>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {activeQuestions.map((q, idx) => {
                  const currentAnswer = userAnswers[q.id] || '';
                  const isChecked = checkedAnswers;
                  const isCorrect = currentAnswer.trim().toLowerCase() === String(q.correctAnswer).trim().toLowerCase();
                  const instructionText = q.instruction[activeLang] || q.instruction.prs || q.instruction.fa || q.instruction.en;
                  const explanationText = q.explanation[activeLang] || q.explanation.prs || q.explanation.fa || q.explanation.en;

                  return (
                    <div key={q.id} className="p-3.5 bg-slate-50 rounded border border-slate-200 space-y-2.5">
                      {/* Question Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-start gap-2">
                          <span className="w-5 h-5 rounded-full bg-blue-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <p className="text-xs font-bold text-slate-900">
                                {q.prompt}
                              </p>
                              <button
                                onClick={() => playHighGermanAudio(q.prompt, speechRate)}
                                className="text-slate-400 hover:text-blue-600 p-0.5 cursor-pointer shrink-0"
                                title="تلفظ صوتی آلمانی معیار"
                              >
                                <Volume2 size={13} />
                              </button>
                            </div>
                            <p className="text-[11px] text-slate-500 italic mt-0.5 font-sans" dir={rtl ? 'rtl' : 'ltr'}>
                              {instructionText}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Multiple Choice Options */}
                      {q.type === 'multiple_choice' && q.options && (
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
                          {q.options.map(opt => {
                            const isSelected = currentAnswer === opt;
                            return (
                              <button
                                key={opt}
                                onClick={() => handleSelectOption(q.id, opt)}
                                className={`p-2 rounded text-xs font-bold text-center border transition-colors cursor-pointer flex items-center justify-center gap-1.5 ${
                                  isSelected
                                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                <span>{opt}</span>
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    playHighGermanAudio(opt, speechRate);
                                  }}
                                  className={`p-0.5 rounded cursor-pointer ${
                                    isSelected ? 'text-blue-200 hover:text-white' : 'text-slate-400 hover:text-blue-600'
                                  }`}
                                  title="تلفظ گزینه"
                                >
                                  <Volume2 size={11} />
                                </button>
                              </button>
                            );
                          })}
                        </div>
                      )}

                      {/* Sentence Reorder */}
                      {q.type === 'sentence_reorder' && q.options && (
                        <div className="space-y-2 pt-1">
                          <div className="text-[11px] text-slate-600">
                            روی کلمات به ترتیب کلیک کنید تا جمله صحیح ساخته شود:
                          </div>

                          {/* Built Sentence Container */}
                          <div className="p-2.5 min-h-10 bg-white rounded border border-dashed border-slate-300 flex flex-wrap gap-1.5 items-center">
                            {(reorderBuffers[q.id] || []).map((w, wIdx) => (
                              <span
                                key={wIdx}
                                onClick={() => handleReorderClick(q.id, w)}
                                className="px-2 py-1 rounded bg-blue-100 text-blue-800 text-xs font-bold cursor-pointer hover:bg-rose-100 hover:text-rose-700 transition-colors flex items-center gap-1"
                                title="کلیک برای حذف"
                              >
                                <span>{w}</span>
                                <span className="text-[10px]">×</span>
                              </span>
                            ))}
                            {(reorderBuffers[q.id] || []).length === 0 && (
                              <span className="text-[11px] text-slate-400 italic">
                                کلمات را از زیر انتخاب کنید...
                              </span>
                            )}
                          </div>

                          {/* Word Bank Chips */}
                          <div className="flex flex-wrap gap-1.5">
                            {q.options.map((word) => {
                              const isUsed = (reorderBuffers[q.id] || []).includes(word);
                              return (
                                <button
                                  key={word}
                                  onClick={() => handleReorderClick(q.id, word)}
                                  disabled={isUsed}
                                  className={`px-2.5 py-1 rounded text-xs font-bold border transition-colors ${
                                    isUsed
                                      ? 'bg-slate-200 text-slate-400 border-slate-200 cursor-not-allowed'
                                      : 'bg-white text-slate-800 border-slate-300 hover:border-blue-400 hover:bg-blue-50 cursor-pointer'
                                  }`}
                                >
                                  {word}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}

                      {/* Feedback & Localized Explanation */}
                      {isChecked && currentAnswer && (
                        <div className={`p-2.5 rounded text-xs border ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                            : 'bg-rose-50 border-rose-200 text-rose-900'
                        }`}>
                          <div className="flex items-center justify-between font-bold mb-1">
                            <div className="flex items-center gap-1.5">
                              {isCorrect ? (
                                <>
                                  <CheckCircle2 size={14} className="text-emerald-600" />
                                  <span>پاسخ کاملاً صحیح است! (Richtig)</span>
                                </>
                              ) : (
                                <>
                                  <XCircle size={14} className="text-rose-600" />
                                  <span>نادرست. پاسخ صحیح: <strong>{String(q.correctAnswer)}</strong></span>
                                </>
                              )}
                            </div>
                            <button
                              onClick={() => playHighGermanAudio(String(q.correctAnswer), speechRate)}
                              className="text-slate-600 hover:text-slate-900 flex items-center gap-1 p-0.5 cursor-pointer text-[10px]"
                              title="تلفظ پاسخ صحیح"
                            >
                              <Volume2 size={12} />
                              <span>تلفظ</span>
                            </button>
                          </div>
                          <p className="text-[11px] leading-relaxed mt-1 font-sans" dir={rtl ? 'rtl' : 'ltr'}>
                            {explanationText}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Action Button */}
              <button
                onClick={() => setCheckedAnswers(true)}
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-xs shadow-xs transition-colors cursor-pointer flex items-center justify-center gap-1.5"
              >
                <CheckCircle2 size={14} />
                <span>بررسی و تصحیح تمام پاسخ‌ها</span>
              </button>
            </div>
          </div>

          {/* Sidebar / Score & Performance Analytics (4 cols) */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {/* Score Box */}
            <div className="bg-white border border-slate-200 rounded shadow-xs p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                  <Award size={15} className="text-amber-500" />
                  <span>کارنامه و نتیجه تمرین</span>
                </h4>
                <span className="text-[10px] font-mono text-slate-400">
                  {currentBookInfo.level}
                </span>
              </div>

              {checkedAnswers ? (
                <div className="space-y-3 text-center py-2">
                  <div className="text-3xl font-black text-slate-900 font-mono">
                    {scorePercentage}%
                  </div>
                  <div className="text-xs text-slate-600">
                    تعداد پاسخ‌های درست: <strong className="text-emerald-600">{correctCount}</strong> از {totalQuestions}
                  </div>

                  {/* Progress bar */}
                  <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        scorePercentage >= 80
                          ? 'bg-emerald-500'
                          : scorePercentage >= 60
                          ? 'bg-amber-500'
                          : 'bg-rose-500'
                      }`}
                      style={{ width: `${scorePercentage}%` }}
                    />
                  </div>

                  <p className="text-xs text-slate-600 font-medium">
                    {scorePercentage >= 80
                      ? 'بسیار عالی! مفاهیم این بخش را با تسلط کامل فرا گرفته‌اید.'
                      : scorePercentage >= 60
                      ? 'نتیجه قبولی است، اما می‌توانید با مرور مجدد قواعد نمره بهتری کسب کنید.'
                      : 'پیشنهاد می‌شود پیش از آزمون، توضیحات گرامر و واژگان این درس را مرور کنید.'}
                  </p>
                </div>
              ) : (
                <div className="py-6 text-center space-y-2 text-slate-500">
                  <Sparkles size={24} className="mx-auto text-blue-500 opacity-60" />
                  <p className="text-xs">
                    پس از پاسخ‌دهی، روی دکمه «بررسی و تصحیح تمام پاسخ‌ها» کلیک کنید تا نمره و تحلیل کامل را دریافت نمایید.
                  </p>
                </div>
              )}
            </div>

            {/* Didactic Advice for Deutsch Mussawi */}
            <div className="bg-white border border-slate-200 rounded shadow-xs p-4 space-y-2">
              <h4 className="font-bold text-xs text-slate-900 flex items-center gap-1.5">
                <BookOpen size={14} className="text-blue-600" />
                <span>روش مطالعه استاندارد Deutsch Mussawi</span>
              </h4>
              <ul className="text-[11px] text-slate-600 space-y-1.5 leading-relaxed">
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>گام ۱:</strong> مطالعه متن درس و گوش دادن به دیالوگ‌ها (Mussawi A-C).</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>گام ۲:</strong> تحلیل فرمول ریاضی گرامر در Mussawi E و کتاب گرامر مستقل.</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>گام ۳:</strong> انجام تمرین‌های همین درس جهت تثبیت در حافظه بلندمدت.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
