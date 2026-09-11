import React, { useState, useEffect } from 'react';
import { CEFRLevel, LanguageCode, StandardizedExam } from '../types';
import { STANDARDIZED_EXAMS } from '../data/supplementaryData';
import { playHighGermanAudio } from '../utils/speech';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  XCircle, 
  Volume2, 
  FileText, 
  BookOpen, 
  PenTool, 
  MessageSquare, 
  KeyRound,
  RotateCcw
} from 'lucide-react';

interface ExamViewProps {
  currentLevel: CEFRLevel;
  language: LanguageCode;
  speechRate: number;
}

export const ExamView: React.FC<ExamViewProps> = ({
  currentLevel,
  language,
  speechRate
}) => {
  const [selectedLevelFilter, setSelectedLevelFilter] = useState<string>(
    currentLevel ? currentLevel.split('.')[0] : 'B1'
  );
  const [activeExamId, setActiveExamId] = useState<string>(STANDARDIZED_EXAMS[0]?.id || '');
  const [activeModule, setActiveModule] = useState<'lesen' | 'hoeren' | 'schreiben' | 'sprechen'>('lesen');
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [isExamSubmitted, setIsExamSubmitted] = useState<boolean>(false);
  const [showAnswerKey, setShowAnswerKey] = useState<boolean>(false);
  const [essayText, setEssayText] = useState<string>('');
  
  // Interactive Countdown Timer (65 minutes for A1)
  const [secondsRemaining, setSecondsRemaining] = useState<number>(65 * 60);
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);

  const filteredExams = selectedLevelFilter === 'Alle'
    ? STANDARDIZED_EXAMS
    : STANDARDIZED_EXAMS.filter(e => e.level.startsWith(selectedLevelFilter));

  const exam = STANDARDIZED_EXAMS.find(e => e.id === activeExamId) || filteredExams[0] || STANDARDIZED_EXAMS[0];

  useEffect(() => {
    let interval: any = null;
    if (isTimerRunning && secondsRemaining > 0) {
      interval = setInterval(() => {
        setSecondsRemaining(prev => prev - 1);
      }, 1000);
    } else if (secondsRemaining === 0) {
      setIsTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, secondsRemaining]);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const wordCount = essayText.trim() === '' ? 0 : essayText.trim().split(/\s+/).length;

  // Compute Lesen score
  let lesenCorrect = 0;
  let lesenTotal = 0;
  exam.lesen.texts.forEach(t => {
    t.questions.forEach(q => {
      lesenTotal++;
      if (userAnswers[q.id] === q.correctAnswer) {
        lesenCorrect++;
      }
    });
  });

  // Compute Hören score
  let hoerenCorrect = 0;
  let hoerenTotal = 0;
  exam.hoeren.audioItems.forEach(item => {
    item.questions.forEach(q => {
      hoerenTotal++;
      if (userAnswers[q.id] === q.correctAnswer) {
        hoerenCorrect++;
      }
    });
  });

  const totalAutoQuestions = lesenTotal + hoerenTotal;
  const totalAutoCorrect = lesenCorrect + hoerenCorrect;
  const autoScorePercent = totalAutoQuestions > 0 ? Math.round((totalAutoCorrect / totalAutoQuestions) * 100) : 0;
  const isPassed = autoScorePercent >= 60;

  return (
    <div className="space-y-4">
      {/* Exam Switcher Bar */}
      <div className="bg-white border border-slate-200 rounded p-3 space-y-2.5 shadow-xs">
        {/* Level Tabs */}
        <div className="flex items-center gap-1.5 flex-wrap border-b border-slate-100 pb-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-1">Niveau:</span>
          {['Alle', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2'].map(lvl => {
            const count = lvl === 'Alle' 
              ? STANDARDIZED_EXAMS.length 
              : STANDARDIZED_EXAMS.filter(e => e.level.startsWith(lvl)).length;
            const isLvlActive = selectedLevelFilter === lvl;
            return (
              <button
                key={lvl}
                onClick={() => {
                  setSelectedLevelFilter(lvl);
                  const matching = lvl === 'Alle'
                    ? STANDARDIZED_EXAMS
                    : STANDARDIZED_EXAMS.filter(e => e.level.startsWith(lvl));
                  if (matching.length > 0 && !matching.some(e => e.id === activeExamId)) {
                    const first = matching[0];
                    setActiveExamId(first.id);
                    setSecondsRemaining(first.totalDurationMinutes * 60);
                    setIsTimerRunning(false);
                    setUserAnswers({});
                    setIsExamSubmitted(false);
                    setShowAnswerKey(false);
                    setEssayText('');
                  }
                }}
                className={`px-2.5 py-1 rounded text-xs font-bold cursor-pointer transition-all flex items-center gap-1.5 ${
                  isLvlActive
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{lvl}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded font-mono ${
                  isLvlActive ? 'bg-slate-700 text-slate-200' : 'bg-slate-200 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Exams list for current filter */}
        <div className="flex flex-wrap items-center gap-2 max-h-48 overflow-y-auto pr-1">
          {filteredExams.map(item => {
            const isExamActive = activeExamId === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveExamId(item.id);
                  setSecondsRemaining(item.totalDurationMinutes * 60);
                  setIsTimerRunning(false);
                  setUserAnswers({});
                  setIsExamSubmitted(false);
                  setShowAnswerKey(false);
                  setEssayText('');
                }}
                className={`px-3 py-1.5 rounded text-xs font-semibold cursor-pointer transition-all flex items-center gap-1.5 text-left border ${
                  isExamActive
                    ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                    : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                }`}
              >
                <span className={`text-[9px] font-bold px-1 rounded uppercase font-mono ${
                  isExamActive ? 'bg-blue-800 text-blue-100' : 'bg-slate-200 text-slate-600'
                }`}>
                  {item.standard.split('-')[0]}
                </span>
                <span className="truncate max-w-[220px]">
                  {item.title.split(':')[0]}
                </span>
                <span className={`text-[10px] px-1 rounded font-bold ${
                  isExamActive ? 'text-blue-100' : 'text-slate-500'
                }`}>
                  ({item.level})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-rose-100 text-rose-800 px-2 py-0.5 rounded">
              {exam.standard}
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Offizielle Modellprüfung nach Goethe-Institut & telc Standard
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            {exam.title}
          </h2>
        </div>

        {/* Timer & Controls */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 px-3 py-1 bg-slate-900 text-white rounded font-mono text-xs font-bold">
            <Clock size={13} className="text-blue-400" />
            <span>{formatTime(secondsRemaining)}</span>
          </div>
          <button
            onClick={() => setIsTimerRunning(!isTimerRunning)}
            className={`px-3 py-1 text-xs font-bold rounded border transition-colors cursor-pointer ${
              isTimerRunning
                ? 'bg-amber-50 text-amber-700 border-amber-300'
                : 'bg-blue-600 text-white border-blue-600'
            }`}
          >
            {isTimerRunning ? 'Pause' : 'Timer starten'}
          </button>
        </div>
      </div>

      {/* Module Navigation Tabs */}
      <div className="flex bg-slate-100 p-1 rounded border border-slate-200 text-xs font-bold">
        <button
          onClick={() => setActiveModule('lesen')}
          className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer ${
            activeModule === 'lesen' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          1. Lesen ({exam.lesen.durationMinutes} Min)
        </button>
        <button
          onClick={() => setActiveModule('hoeren')}
          className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer ${
            activeModule === 'hoeren' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          2. Hören ({exam.hoeren.durationMinutes} Min)
        </button>
        <button
          onClick={() => setActiveModule('schreiben')}
          className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer ${
            activeModule === 'schreiben' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          3. Schreiben ({exam.schreiben.durationMinutes} Min)
        </button>
        <button
          onClick={() => setActiveModule('sprechen')}
          className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer ${
            activeModule === 'sprechen' ? 'bg-white text-blue-600 shadow-xs' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          4. Sprechen ({exam.sprechen.durationMinutes} Min)
        </button>
      </div>

      {/* Main Module Content */}
      <div className="grid grid-cols-12 gap-4">
        {/* Module Content Area (Col 8) */}
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {/* 1. LESEN MODULE */}
          {activeModule === 'lesen' && (
            <div className="space-y-4">
              {exam.lesen.texts.map((textItem, tIdx) => (
                <div key={tIdx} className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {textItem.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500">
                      Quelle: {textItem.sourceType}
                    </span>
                  </div>

                  {/* Reading Passage */}
                  <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-800 leading-relaxed font-sans whitespace-pre-line">
                    {textItem.body}
                  </div>

                  {/* Questions */}
                  <div className="space-y-3 pt-1">
                    {textItem.questions.map((q) => {
                      const selected = userAnswers[q.id];
                      const isCorrect = selected === q.correctAnswer;

                      return (
                        <div key={q.id} className="p-3 bg-white rounded border border-slate-100 space-y-2">
                          <p className="text-xs font-bold text-slate-900">
                            {q.question}
                          </p>

                          <div className="flex flex-wrap gap-2">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                                className={`px-4 py-2 rounded text-xs font-bold border transition-colors cursor-pointer text-left ${
                                  selected === opt
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          {(isExamSubmitted || showAnswerKey) && (
                            <div className={`p-2 rounded text-xs mt-1 border ${
                              isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
                            }`}>
                              <span className="font-bold">Richtige Lösung: {q.correctAnswer}. </span>
                              <span>{q.explanation[language] || q.explanation.en}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 2. HÖREN MODULE */}
          {activeModule === 'hoeren' && (
            <div className="space-y-4">
              {exam.hoeren.audioItems.map((audioItem) => (
                <div key={audioItem.id} className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span className="text-xs font-bold text-blue-600 uppercase">
                      {audioItem.title}
                    </span>
                    <button
                      onClick={() => playHighGermanAudio(audioItem.transcript, speechRate)}
                      className="flex items-center gap-1.5 px-3 py-1 bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold rounded cursor-pointer transition-colors shadow-xs"
                    >
                      <Volume2 size={14} />
                      <span>Audio-Durchsage abspielen</span>
                    </button>
                  </div>

                  <p className="text-xs text-slate-600 italic">
                    Situation: {audioItem.situation}
                  </p>

                  {/* Audio Transcript (revealed if Answer Key is clicked or after submission) */}
                  {(isExamSubmitted || showAnswerKey) && (
                    <div className="p-3 bg-slate-900 text-slate-200 rounded text-xs font-mono">
                      <div className="text-[10px] text-blue-400 font-bold uppercase mb-1">
                        Hörtext Transkript:
                      </div>
                      <p>{audioItem.transcript}</p>
                    </div>
                  )}

                  {/* Questions */}
                  <div className="space-y-3 pt-1">
                    {audioItem.questions.map((q) => {
                      const selected = userAnswers[q.id];
                      const isCorrect = selected === q.correctAnswer;

                      return (
                        <div key={q.id} className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2">
                          <p className="text-xs font-bold text-slate-900">
                            {q.question}
                          </p>

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {q.options.map((opt) => (
                              <button
                                key={opt}
                                onClick={() => setUserAnswers(prev => ({ ...prev, [q.id]: opt }))}
                                className={`p-2 rounded text-xs font-bold text-left border transition-colors cursor-pointer ${
                                  selected === opt
                                    ? 'bg-blue-600 text-white border-blue-600'
                                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                                }`}
                              >
                                {opt}
                              </button>
                            ))}
                          </div>

                          {(isExamSubmitted || showAnswerKey) && (
                            <div className={`p-2 rounded text-xs mt-1 border ${
                              isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-900' : 'bg-rose-50 border-rose-200 text-rose-900'
                            }`}>
                              <span className="font-bold">Richtige Lösung: {q.correctAnswer}. </span>
                              <span>{q.explanation[language] || q.explanation.en}</span>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 3. SCHREIBEN MODULE */}
          {activeModule === 'schreiben' && (
            <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-4">
              <div className="border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-blue-600 uppercase">
                  {exam.schreiben.taskType}
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-1">
                  Schreibaufgabe: E-Mail verfassen
                </h3>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-200 text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                {exam.schreiben.prompt}
              </div>

              <div className="p-3 bg-blue-50/50 rounded border border-blue-100 space-y-1.5 text-xs">
                <div className="font-bold text-blue-900 text-[11px] uppercase">
                  Leitpunkte (unbedingt alle 3 Punkte behandeln):
                </div>
                <ul className="list-disc pl-4 text-slate-700 space-y-0.5">
                  {exam.schreiben.guidingPoints.map((pt, pIdx) => (
                    <li key={pIdx}>{pt}</li>
                  ))}
                </ul>
              </div>

              {/* Textarea for Writing */}
              <div className="space-y-1.5">
                <div className="flex justify-between items-center text-xs">
                  <label className="font-bold text-slate-700">Ihre schriftliche Antwort:</label>
                  <span className={`font-mono font-bold ${wordCount >= 25 ? 'text-emerald-600' : 'text-slate-500'}`}>
                    Wortanzahl: {wordCount} Wörter (Ziel: {exam.schreiben.targetWordCount})
                  </span>
                </div>
                <textarea
                  rows={6}
                  placeholder="Sehr geehrte Frau Meyer, ich schreibe Ihnen, weil..."
                  value={essayText}
                  onChange={(e) => setEssayText(e.target.value)}
                  className="w-full p-3 text-xs bg-white border border-slate-300 rounded focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 font-sans leading-relaxed"
                />
              </div>

              {/* Sample Solution toggle */}
              {(isExamSubmitted || showAnswerKey) && (
                <div className="p-3 bg-emerald-50 rounded border border-emerald-200 space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 flex items-center justify-between">
                    <span>Musterlösung (10 / 10 Punkte):</span>
                    <button
                      onClick={() => playHighGermanAudio(exam.schreiben.sampleSolution, speechRate)}
                      className="text-emerald-700 hover:text-emerald-900 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={14} />
                    </button>
                  </div>
                  <p className="font-mono text-emerald-950 bg-white/80 p-2.5 rounded whitespace-pre-line border border-emerald-100">
                    {exam.schreiben.sampleSolution}
                  </p>
                  <p className="text-[11px] text-slate-600">
                    <strong>Bewertungskriterien:</strong> {exam.schreiben.scoringCriteria[language] || exam.schreiben.scoringCriteria.en}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 4. SPRECHEN MODULE */}
          {activeModule === 'sprechen' && (
            <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-4">
              <div className="border-b border-slate-100 pb-2">
                <span className="text-xs font-bold text-blue-600 uppercase">
                  Mündliche Paarprüfung ({exam.sprechen.durationMinutes} Minuten)
                </span>
                <h3 className="font-bold text-sm text-slate-900 mt-1">
                  Prüfungsteile & Redemittel
                </h3>
              </div>

              {/* Teil 1 */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-xs">
                  {exam.sprechen.teil1.name}
                </div>
                <p className="text-slate-600">
                  {exam.sprechen.teil1.instruction[language] || exam.sprechen.teil1.instruction.en}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {exam.sprechen.teil1.prompts.map(pr => (
                    <span key={pr} className="px-2 py-0.5 bg-blue-100 text-blue-800 rounded font-bold text-[10px]">
                      {pr}
                    </span>
                  ))}
                </div>
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-700 mt-2">
                  <div className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                    <span>Musterantwort:</span>
                    <button
                      onClick={() => playHighGermanAudio(exam.sprechen.teil1.sampleResponse, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p>{exam.sprechen.teil1.sampleResponse}</p>
                </div>
              </div>

              {/* Teil 2 */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-xs">
                  {exam.sprechen.teil2.name}
                </div>
                <p className="text-slate-600">
                  {exam.sprechen.teil2.instruction[language] || exam.sprechen.teil2.instruction.en}
                </p>
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-700 mt-2">
                  <div className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                    <span>Musterdialog:</span>
                    <button
                      onClick={() => playHighGermanAudio(exam.sprechen.teil2.sampleResponse, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p>{exam.sprechen.teil2.sampleResponse}</p>
                </div>
              </div>

              {/* Teil 3 */}
              <div className="p-3 bg-slate-50 rounded border border-slate-200 space-y-2 text-xs">
                <div className="font-bold text-slate-900 text-xs">
                  {exam.sprechen.teil3.name}
                </div>
                <p className="text-slate-600">
                  {exam.sprechen.teil3.instruction[language] || exam.sprechen.teil3.instruction.en}
                </p>
                <div className="p-2 bg-white rounded border border-slate-200 text-[11px] text-slate-700 mt-2">
                  <div className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                    <span>Musterbitte & Reaktion:</span>
                    <button
                      onClick={() => playHighGermanAudio(exam.sprechen.teil3.sampleResponse, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                  <p>{exam.sprechen.teil3.sampleResponse}</p>
                </div>
              </div>
            </div>
          )}

          {/* Action Bar */}
          <div className="flex gap-3">
            <button
              onClick={() => setIsExamSubmitted(true)}
              className="flex-1 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded text-xs shadow-xs transition-colors cursor-pointer"
            >
              Prüfung abschließen & Ergebnis berechnen
            </button>
            <button
              onClick={() => setShowAnswerKey(!showAnswerKey)}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 font-bold rounded text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <KeyRound size={14} className="text-blue-600" />
              <span>{showAnswerKey ? 'Lösungsschlüssel verbergen' : 'Lösungsschlüssel einblenden'}</span>
            </button>
          </div>
        </div>

        {/* Right Sidebar: Exam Score & Evaluation (Col 4) */}
        <div className="col-span-12 lg:col-span-4 space-y-4">
          <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3">
            <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
              <Award size={16} className="text-blue-600" />
              <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
                Prüfungsbewertung (CEFR)
              </h4>
            </div>

            <div className="text-center py-4 bg-slate-50 rounded border border-slate-100">
              <div className={`text-3xl font-black font-mono ${
                !isExamSubmitted ? 'text-slate-400' : isPassed ? 'text-emerald-600' : 'text-rose-600'
              }`}>
                {isExamSubmitted ? `${autoScorePercent}%` : '--'}
              </div>
              <div className="text-xs font-bold mt-1">
                {isExamSubmitted
                  ? isPassed ? 'BESTANDEN (Pass)' : 'NICHT BESTANDEN (Fail)'
                  : 'Prüfung noch nicht eingereicht'}
              </div>
              <div className="text-[10px] text-slate-500 mt-0.5">
                Goethe / telc Bestehensgrenze: 60%
              </div>
            </div>

            <div className="text-xs space-y-2 text-slate-600">
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span>Modul Lesen:</span>
                <span className="font-bold font-mono">{lesenCorrect} / {lesenTotal}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span>Modul Hören:</span>
                <span className="font-bold font-mono">{hoerenCorrect} / {hoerenTotal}</span>
              </div>
              <div className="flex justify-between border-b border-slate-100 pb-1">
                <span>Modul Schreiben:</span>
                <span className="font-bold font-mono">{wordCount} Wörter</span>
              </div>
            </div>

            <div className="p-3 bg-blue-50/50 rounded border border-blue-100 text-[11px] text-blue-900 leading-relaxed">
              <strong>Zeitmanagement-Tipp:</strong> Teilen Sie die 25 Minuten für Lesen genau ein: Pro Textteil maximal 8 Minuten, um Zeit für die Überprüfung zu behalten.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
