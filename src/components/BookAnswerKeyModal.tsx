import React, { useState, useMemo } from 'react';
import { 
  KeyRound, 
  BookOpen, 
  CheckCircle2, 
  Printer, 
  X, 
  Search, 
  Award, 
  HelpCircle, 
  ChevronRight, 
  FileText, 
  Sparkles,
  Layers
} from 'lucide-react';
import { CEFRLevel, LanguageCode, Lesson } from '../types';
import { CURRICULUM_LESSONS, CUMULATIVE_REVIEWS } from '../data/curriculum';
import { STANDARDIZED_EXAMS } from '../data/supplementaryData';

interface BookAnswerKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: CEFRLevel;
  language: LanguageCode;
}

const ALL_LEVELS: CEFRLevel[] = [
  'A1.1', 'A1.2',
  'A2.1', 'A2.2',
  'B1.1', 'B1.2',
  'B2.1', 'B2.2',
  'C1.1', 'C1.2',
  'C2.1', 'C2.2'
];

export const BookAnswerKeyModal: React.FC<BookAnswerKeyModalProps> = ({
  isOpen,
  onClose,
  currentLevel: initialLevel,
  language
}) => {
  const [selectedLevel, setSelectedLevel] = useState<CEFRLevel>(initialLevel);
  const [selectedSection, setSelectedSection] = useState<'lessons' | 'reviews' | 'exams'>('lessons');
  const [searchQuery, setSearchQuery] = useState('');

  // Keep synced if opened with another level
  React.useEffect(() => {
    setSelectedLevel(initialLevel);
  }, [initialLevel, isOpen]);

  const isFaOrPrs = language === 'fa' || language === 'prs';

  const lessonsForLevel: Lesson[] = useMemo(() => {
    return CURRICULUM_LESSONS[selectedLevel] || [];
  }, [selectedLevel]);

  const reviewsForLevel = useMemo(() => {
    return CUMULATIVE_REVIEWS.filter(r => r.level.startsWith(selectedLevel.slice(0, 2)));
  }, [selectedLevel]);

  const examsForLevel = useMemo(() => {
    return STANDARDIZED_EXAMS.filter(e => e.level.startsWith(selectedLevel.slice(0, 2)));
  }, [selectedLevel]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 z-50 animate-fadeIn print:p-0 print:bg-white print:fixed-none">
      <div 
        className="bg-white rounded-xl shadow-2xl border border-slate-200 w-full max-w-5xl max-h-[94vh] flex flex-col overflow-hidden print:max-h-none print:shadow-none print:border-none"
        dir={isFaOrPrs ? 'rtl' : 'ltr'}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 bg-gradient-to-r from-emerald-700 via-teal-800 to-slate-900 text-white flex items-center justify-between shrink-0 print:bg-white print:text-black print:border-b">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-white/15 rounded-lg backdrop-blur-xs print:hidden">
              <KeyRound size={24} className="text-white" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base sm:text-lg font-bold">
                  {isFaOrPrs 
                    ? `کلید جامع جوابات و پاسخنامه تشریحی سطح ${selectedLevel}` 
                    : `Official Answer Key & Solutions: Level ${selectedLevel}`}
                </h2>
                <span className="bg-emerald-400/30 text-emerald-200 border border-emerald-300/40 text-[10px] font-bold px-2 py-0.5 rounded-full print:hidden">
                  Lösungsschlüssel
                </span>
              </div>
              <p className="text-xs text-teal-100 mt-0.5 print:hidden">
                {isFaOrPrs 
                  ? 'پاسخ‌های قطعی و توضیحات دستوری تمام تمرینات، مرورها و نمونه سوالات امتحانی به همراه تحلیل خط به خط'
                  : 'Definitive solutions and comprehensive grammatical analyses for all lessons, review chapters and exams.'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 print:hidden">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-lg text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer border border-white/20"
              title="چاپ یا ذخیره PDF پاسخنامه"
            >
              <Printer size={14} />
              <span>{isFaOrPrs ? 'چاپ پاسخنامه (PDF)' : 'Print / PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Level Selector Bar */}
        <div className="p-3 bg-slate-100 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 shrink-0 print:hidden">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            <span className="text-xs font-bold text-slate-700 ml-1">
              {isFaOrPrs ? 'انتخاب کتاب:' : 'Select Level:'}
            </span>
            {ALL_LEVELS.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedLevel(lvl)}
                className={`px-2.5 py-1 rounded text-xs font-bold transition-all cursor-pointer ${
                  selectedLevel === lvl
                    ? 'bg-emerald-700 text-white shadow-xs'
                    : 'bg-white text-slate-700 border border-slate-300 hover:bg-slate-200'
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          {/* Section Filter */}
          <div className="flex bg-white rounded-lg p-1 border border-slate-300 text-xs font-bold">
            <button
              onClick={() => setSelectedSection('lessons')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedSection === 'lessons' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isFaOrPrs ? 'تمرینات دروس' : 'Lessons'}
            </button>
            <button
              onClick={() => setSelectedSection('reviews')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedSection === 'reviews' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isFaOrPrs ? 'فصل‌های مرور' : 'Review Chapters'}
            </button>
            <button
              onClick={() => setSelectedSection('exams')}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                selectedSection === 'exams' ? 'bg-emerald-600 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {isFaOrPrs ? 'آزمون‌ها (Prüfung)' : 'Exams'}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-3 bg-white border-b border-slate-200 shrink-0 print:hidden">
          <div className="relative">
            <Search size={15} className={`absolute top-2.5 ${isFaOrPrs ? 'right-3' : 'left-3'} text-slate-400`} />
            <input
              type="text"
              placeholder={isFaOrPrs ? 'جستجو در سوالات، پاسخ‌ها یا مباحث گرامری...' : 'Search questions, solutions or grammar rules...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full ${isFaOrPrs ? 'pr-9 pl-3' : 'pl-9 pr-3'} py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500`}
            />
          </div>
        </div>

        {/* Content Body */}
        <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6 text-slate-800">
          {/* SECTION 1: LESSONS ANSWER KEY */}
          {selectedSection === 'lessons' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-2 border-b border-slate-200">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-emerald-700" />
                  <h3 className="text-sm font-bold text-slate-900">
                    {isFaOrPrs ? `پاسخنامه تمام دروس کتاب ${selectedLevel} (${lessonsForLevel.length} درس کامل)` : `Full Solutions for Level ${selectedLevel} (${lessonsForLevel.length} Lessons)`}
                  </h3>
                </div>
                <span className="text-xs text-slate-500 font-medium">
                  {isFaOrPrs ? 'از درس اول تا درس آخر' : 'All Lektionen included'}
                </span>
              </div>

              {lessonsForLevel.map((lek) => {
                const lekExercises = lek.exercises || [];
                return (
                  <div key={lek.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3 print:bg-white print:border-b print:rounded-none">
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-2.5">
                      <div className="flex items-center gap-2">
                        <span className="bg-emerald-700 text-white font-bold text-xs px-2.5 py-0.5 rounded">
                          Lektion {lek.lektionNumber}
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900">
                          {lek.title}
                        </h4>
                      </div>
                      <span className="text-[11px] text-slate-500 font-medium italic">
                        {lek.topic}
                      </span>
                    </div>

                    {/* Exercises in this lesson */}
                    {lekExercises.length > 0 ? (
                      <div className="space-y-3 pt-1">
                        {lekExercises.map((ex, exIdx) => {
                          const isMatch = searchQuery === '' || 
                            ex.prompt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            String(ex.correctAnswer).toLowerCase().includes(searchQuery.toLowerCase());
                          if (!isMatch) return null;

                          return (
                            <div key={ex.id} className="p-3 bg-white rounded-lg border border-slate-200 space-y-2">
                              <div className="flex items-start justify-between gap-2">
                                <div className="text-xs font-semibold text-slate-900">
                                  <span className="text-emerald-700 font-bold ml-1.5">{exIdx + 1}.</span>
                                  <span>{ex.prompt}</span>
                                </div>
                                <span className="text-[10px] font-mono bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded shrink-0">
                                  {ex.type}
                                </span>
                              </div>

                              {/* Correct Answer Banner */}
                              <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-md text-xs flex items-start gap-2">
                                <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                                <div>
                                  <div className="font-bold text-emerald-950">
                                    {isFaOrPrs ? 'پاسخ صحیح:' : 'Correct Answer:'}{' '}
                                    <span className="text-emerald-800 font-mono underline font-extrabold text-xs sm:text-sm">
                                      {String(ex.correctAnswer)}
                                    </span>
                                  </div>
                                  <p className="text-[11px] text-emerald-900 mt-1 leading-relaxed">
                                    <strong>{isFaOrPrs ? 'تحلیل دستوری:' : 'Explanation:'}</strong>{' '}
                                    {ex.explanation[language] || ex.explanation.en}
                                  </p>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="text-xs text-slate-500 italic p-2">
                        {isFaOrPrs ? 'تمرینات این درس در متن درس موجود است.' : 'No standalone quiz exercises recorded for this unit.'}
                      </div>
                    )}

                    {/* Mussawi A-E Model Answers */}
                    <div className="mt-3 pt-3 border-t border-slate-200 bg-white p-3 rounded-lg text-xs space-y-1.5">
                      <div className="font-bold text-slate-800 flex items-center gap-1.5">
                        <Sparkles size={14} className="text-amber-500" />
                        <span>{isFaOrPrs ? 'نمونه جملات و ساختار کلیدی بخش‌های Mussawi A تا E:' : 'Mussawi A-E Model Responses:'}</span>
                      </div>
                      <p className="text-slate-600 text-[11px] leading-relaxed">
                        • <strong>Mussawi A (مکالمه و دیالوگ):</strong> {lek.sectionA?.content || 'Konversation und Sprechübungen'}<br />
                        • <strong>Mussawi B (واژگان و ساختار):</strong> {lek.sectionB?.content || 'Hörverstehen und Wortschatz'}<br />
                        • <strong>Mussawi C (دستور زبان کاربردی):</strong> {lek.sectionC?.content || 'Grammatik und Satzbau'}<br />
                        • <strong>Mussawi D (نگارش و خواندن):</strong> {lek.sectionD?.content || 'Lesen und Schreiben'}<br />
                        • <strong>Mussawi E (مکالمه و کار عملی):</strong> {lek.sectionE?.content || 'Praktische Anwendung und Phonetik'}
                      </p>
                    </div>
                  </div>
                );
              })}

              {lessonsForLevel.length === 0 && (
                <div className="p-8 text-center text-slate-500 bg-slate-50 rounded-xl border border-slate-200">
                  {isFaOrPrs ? 'هنوز برای این سطح پاسخی بارگذاری نشده است.' : 'No lessons found for this level.'}
                </div>
              )}
            </div>
          )}

          {/* SECTION 2: CUMULATIVE REVIEWS */}
          {selectedSection === 'reviews' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Layers size={18} className="text-blue-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isFaOrPrs ? `پاسخنامه فصل‌های جامع مرور و ارزشیابی (Übungskapitel)` : `Cumulative Review Chapters Solutions`}
                </h3>
              </div>

              {reviewsForLevel.map((ch) => (
                <div key={ch.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <h4 className="font-bold text-slate-900 text-xs sm:text-sm">
                      {ch.title} ({ch.lektionRef})
                    </h4>
                    <span className="text-[10px] font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                      Level {ch.level}
                    </span>
                  </div>

                  <div className="space-y-3">
                    {ch.questions.map((q, qIdx) => (
                      <div key={q.id} className="p-3 bg-white rounded-lg border border-slate-200 space-y-2">
                        <div className="text-xs font-semibold text-slate-900">
                          <span className="text-blue-600 font-bold ml-1.5">{qIdx + 1}.</span>
                          <span>{q.prompt}</span>
                        </div>
                        <div className="p-2 bg-emerald-50 border border-emerald-200 rounded-md text-xs flex items-start gap-2">
                          <CheckCircle2 size={16} className="text-emerald-700 shrink-0 mt-0.5" />
                          <div>
                            <div className="font-bold text-emerald-950">
                              {isFaOrPrs ? 'جواب صحیح:' : 'Correct Answer:'}{' '}
                              <span className="text-emerald-800 font-mono underline font-extrabold text-xs sm:text-sm">
                                {String(q.correctAnswer)}
                              </span>
                            </div>
                            <p className="text-[11px] text-emerald-900 mt-1 leading-relaxed">
                              <strong>{isFaOrPrs ? 'تحلیل دستوری:' : 'Explanation:'}</strong>{' '}
                              {q.explanation[language] || q.explanation.en}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {reviewsForLevel.length === 0 && (
                <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-lg">
                  {isFaOrPrs ? 'فصل مروری برای این سطح ثبت نشده است.' : 'No review chapters recorded for this level.'}
                </div>
              )}
            </div>
          )}

          {/* SECTION 3: STANDARDIZED EXAMS */}
          {selectedSection === 'exams' && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-200">
                <Award size={18} className="text-rose-700" />
                <h3 className="text-sm font-bold text-slate-900">
                  {isFaOrPrs ? `کلید آزمون‌های رسمی گوته و تلک (Goethe / telc Prüfungen)` : `Official Exam Modellsatz Solutions`}
                </h3>
              </div>

              {examsForLevel.map((exam) => (
                <div key={exam.id} className="bg-slate-50 border border-slate-200 rounded-xl p-4 sm:p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">{exam.title}</h4>
                      <p className="text-[11px] text-slate-500 mt-0.5">
                        {exam.standard} | حدنصاب قبولی: {exam.passingScore}
                      </p>
                    </div>
                  </div>

                  {/* Lesen Key */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-blue-900 flex items-center gap-1.5">
                      <FileText size={14} className="text-blue-600" />
                      <span>کلید بخش درک خواندن (Modul Lesen)</span>
                    </h5>
                    <div className="space-y-2">
                      {exam.lesen.texts.map((t) => (
                        <div key={t.title} className="p-3 bg-white rounded-lg border border-slate-200 space-y-2 text-xs">
                          <div className="font-bold text-slate-800">{t.title}</div>
                          {t.questions.map((q, idx) => (
                            <div key={q.id} className="flex items-start gap-2 bg-emerald-50 p-2 rounded border border-emerald-200">
                              <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-slate-800">سوال {idx + 1}: </span>
                                <span>{q.question} &rarr; </span>
                                <strong className="text-emerald-800 font-mono font-bold">{q.correctAnswer}</strong>
                                <p className="text-[10.5px] text-emerald-950 mt-0.5">
                                  {q.explanation[language] || q.explanation.en}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hören Key */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-indigo-900 flex items-center gap-1.5">
                      <FileText size={14} className="text-indigo-600" />
                      <span>کلید بخش شنیداری (Modul Hören)</span>
                    </h5>
                    <div className="space-y-2">
                      {exam.hoeren.audioItems.map((item) => (
                        <div key={item.id} className="p-3 bg-white rounded-lg border border-slate-200 space-y-2 text-xs">
                          <div className="font-bold text-slate-800">{item.title}</div>
                          {item.questions.map((q, idx) => (
                            <div key={q.id} className="flex items-start gap-2 bg-emerald-50 p-2 rounded border border-emerald-200">
                              <CheckCircle2 size={14} className="text-emerald-700 shrink-0 mt-0.5" />
                              <div>
                                <span className="font-bold text-slate-800">سوال {idx + 1}: </span>
                                <span>{q.question} &rarr; </span>
                                <strong className="text-emerald-800 font-mono font-bold">{q.correctAnswer}</strong>
                                <p className="text-[10.5px] text-emerald-950 mt-0.5">
                                  {q.explanation[language] || q.explanation.en}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Schreiben Sample Solution */}
                  <div className="space-y-2">
                    <h5 className="font-bold text-xs text-cyan-900 flex items-center gap-1.5">
                      <FileText size={14} className="text-cyan-600" />
                      <span>نمونه نگارش نمره کامل (Musterlösung Schreiben)</span>
                    </h5>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 space-y-2 text-xs">
                      <div className="font-mono bg-slate-50 p-2.5 rounded border border-slate-200 text-slate-800 whitespace-pre-wrap leading-relaxed">
                        {exam.schreiben.sampleSolution}
                      </div>
                      <p className="text-[11px] text-slate-600">
                        <strong>معیار تصحیح:</strong> {exam.schreiben.scoringCriteria[language] || exam.schreiben.scoringCriteria.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {examsForLevel.length === 0 && (
                <div className="p-6 text-center text-slate-500 bg-slate-50 rounded-lg">
                  {isFaOrPrs ? 'آزمون استانداردی برای این سطح اضافه نشده است.' : 'No exam registered for this level.'}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0 print:hidden">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <CheckCircle2 size={16} className="text-emerald-600" />
            <span>
              {isFaOrPrs ? 'پاسخنامه بر اساس آخرین استانداردهای رسمی آموزش و آزمون آلمان تدوین شده است.' : 'Official solution key verified against CEFR guidelines.'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-lg text-xs shadow-xs transition-colors cursor-pointer"
          >
            {isFaOrPrs ? 'بستن پاسخنامه' : 'Close Answer Key'}
          </button>
        </div>
      </div>
    </div>
  );
};
