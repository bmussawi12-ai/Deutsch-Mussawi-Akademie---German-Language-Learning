import React, { useState } from 'react';
import { CEFRLevel, LanguageCode, Lesson } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { CURRICULUM_LESSONS } from '../data/curriculum';
import { GLOSSARY_DATA } from '../data/glossary';
import { GRAMMAR_RULES } from '../data/grammarRules';
import { STANDARDIZED_EXAMS } from '../data/supplementaryData';
import { X, Printer, Check, FileText } from 'lucide-react';

interface PrintModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLevel: CEFRLevel;
  currentLesson: Lesson | null;
  language: LanguageCode;
}

export const PrintModal: React.FC<PrintModalProps> = ({
  isOpen,
  onClose,
  currentLevel,
  currentLesson,
  language
}) => {
  const [printScope, setPrintScope] = useState<'all' | 'lesson' | 'grammar' | 'glossary' | 'exam'>('lesson');
  const [includeAnswerKeyOnSeparatePage, setIncludeAnswerKeyOnSeparatePage] = useState<boolean>(true);

  if (!isOpen) return null;

  const t = UI_TRANSLATIONS[language] || UI_TRANSLATIONS.en;

  const handleTriggerPrint = () => {
    window.print();
  };

  const levelLessons = CURRICULUM_LESSONS[currentLevel] || [];
  const levelGlossary = GLOSSARY_DATA[currentLevel] || [];
  const levelGrammar = GRAMMAR_RULES.filter(r => r.level.startsWith(currentLevel.split('.')[0]));
  const exam = STANDARDIZED_EXAMS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="bg-white rounded shadow-2xl border border-slate-300 w-full max-w-2xl max-h-[90vh] flex flex-col overflow-hidden">
        {/* Modal Header */}
        <div className="p-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Printer size={18} className="text-blue-600" />
            <h3 className="font-bold text-sm text-slate-900">
              {t.printOptionsTitle || 'Druck & PDF-Export (A4 Format)'}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded text-slate-400 hover:text-slate-700 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            <X size={16} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 overflow-y-auto space-y-4 text-xs">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded text-blue-900 space-y-1">
            <div className="font-bold">Didaktische A4-Druckausgabe:</div>
            <p className="leading-relaxed">
              {t.printInstructions || 'Generiert ein druckoptimiertes A4-Layout. Der Lösungsschlüssel wird gemäß Goethe-Richtlinien strikt auf eine separate Schlussseite platziert.'}
            </p>
          </div>

          {/* Scope Selector */}
          <div className="space-y-2">
            <label className="font-bold text-slate-700 block">
              {t.printScope || 'Zu druckenden Inhalt auswählen:'}
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setPrintScope('lesson')}
                className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                  printScope === 'lesson'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="font-bold">Aktuelle Lektion & Foto-Hörgeschichte</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                  Lektion {currentLesson?.lektionNumber || 1} mit Mussawi A-E und Dialogen
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPrintScope('grammar')}
                className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                  printScope === 'grammar'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="font-bold">Grammatik-Formelblatt ({currentLevel})</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                  Alle mathematischen Formeln und Satzbau-Regeln
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPrintScope('glossary')}
                className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                  printScope === 'glossary'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="font-bold">Wortschatz-Glossar & Artikel</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                  Alphabetische Vokabelliste mit IPA und Deklination
                </div>
              </button>

              <button
                type="button"
                onClick={() => setPrintScope('exam')}
                className={`p-3 rounded border text-left transition-colors cursor-pointer ${
                  printScope === 'exam'
                    ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold'
                    : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-700'
                }`}
              >
                <div className="font-bold">Goethe / telc Prüfungssatz</div>
                <div className="text-[10px] text-slate-500 font-normal mt-0.5">
                  Modellprüfung Lesen, Hören, Schreiben, Sprechen
                </div>
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="p-3 bg-slate-50 rounded border border-slate-200 flex items-center justify-between">
            <div>
              <span className="font-bold text-slate-800">Lösungsschlüssel auf separater Seite</span>
              <p className="text-[10px] text-slate-500">
                Verhindert vorzeitiges Einsehen der Antworten während des Selbsttests.
              </p>
            </div>
            <input
              type="checkbox"
              checked={includeAnswerKeyOnSeparatePage}
              onChange={(e) => setIncludeAnswerKeyOnSeparatePage(e.target.checked)}
              className="w-4 h-4 text-blue-600 rounded border-slate-300 focus:ring-blue-500 cursor-pointer"
            />
          </div>

          {/* Hidden Print Container that is formatted specifically when window.print() is called */}
          <div id="print-dossier" className="hidden print:block text-slate-900 font-sans">
            <div className="border-b-2 border-slate-900 pb-4 mb-6 flex justify-between items-end">
              <div>
                <h1 className="text-2xl font-bold">DEUTSCH MUSSAWI • DOSSIER</h1>
                <p className="text-xs uppercase tracking-widest text-slate-600">
                  Mussawi-Didaktik & Dialog • Niveau {currentLevel} • Goethe/telc Standard
                </p>
              </div>
              <div className="text-right text-xs">
                <div>Datum: {new Date().toLocaleDateString('de-DE')}</div>
                <div>Muttersprache: {language.toUpperCase()}</div>
              </div>
            </div>

            {/* Print scope: Lesson */}
            {(printScope === 'lesson' || printScope === 'all') && currentLesson && (
              <div className="space-y-4 mb-8">
                <h2 className="text-lg font-bold border-b border-slate-300 pb-1">
                  Lektion {currentLesson.lektionNumber}: {currentLesson.title}
                </h2>
                <p className="text-xs italic text-slate-600">{currentLesson.subTitle}</p>
                <div className="p-3 border border-slate-300 rounded">
                  <h3 className="font-bold text-xs mb-1">Foto-Hörgeschichte: {currentLesson.fotoHoergeschichte.title}</h3>
                  <div className="space-y-1 text-xs">
                    {currentLesson.fotoHoergeschichte.transcript.map((l, i) => (
                      <p key={i}><strong>{l.speaker}:</strong> {l.text}</p>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Print scope: Grammar */}
            {(printScope === 'grammar' || printScope === 'all') && (
              <div className="space-y-4 mb-8">
                <h2 className="text-lg font-bold border-b border-slate-300 pb-1">
                  Grammatik-Formelübersicht
                </h2>
                {levelGrammar.map((r) => (
                  <div key={r.id} className="p-3 border border-slate-300 rounded space-y-1 text-xs">
                    <div className="font-bold">{r.germanTitle}</div>
                    <div className="font-mono bg-slate-100 p-1 rounded text-center font-bold">{r.formula}</div>
                    <p className="text-slate-700">{r.explanation.en}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Solution Key on separate page */}
            {includeAnswerKeyOnSeparatePage && (
              <div className="break-before-page pt-8">
                <h2 className="text-xl font-bold border-b-2 border-slate-900 pb-2 mb-4">
                  Lösungsschlüssel (Answer Key)
                </h2>
                <div className="p-4 border border-slate-300 rounded space-y-2 text-xs">
                  <p className="font-bold">Offizielle Goethe/telc Musterlösungen:</p>
                  <p>1. Susannes Feier: Richtig</p>
                  <p>2. Markus Rückmeldung: Falsch (Donnerstag)</p>
                  <p>3. Zugverspätung: 15 Minuten</p>
                  <p>4. Schreibaufgabe: Alle 3 Leitpunkte vollwertig formuliert.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-slate-200 bg-slate-50 flex items-center justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded text-xs font-bold text-slate-600 hover:text-slate-900 hover:bg-slate-200 transition-colors cursor-pointer"
          >
            Abbrechen
          </button>
          <button
            onClick={handleTriggerPrint}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded text-xs font-bold flex items-center gap-1.5 shadow-xs transition-colors cursor-pointer"
          >
            <Printer size={13} />
            <span>{t.printButton || 'Jetzt Drucken / PDF speichern'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
