import React from 'react';
import { LanguageCode } from '../types';
import { PRONUNCIATION_RULES } from '../data/supplementaryData';
import { playHighGermanAudio } from '../utils/speech';
import { Volume2, Mic, Sparkles, BookOpen } from 'lucide-react';

interface PronunciationViewProps {
  language: LanguageCode;
  speechRate: number;
}

export const PronunciationView: React.FC<PronunciationViewProps> = ({
  language,
  speechRate
}) => {
  return (
    <div className="space-y-4">
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Deutsche Phonetik & IPA
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Standarddeutsche Hochlautung (Siebs / Duden Aussprachewörterbuch)
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            Aussprachetraining & Phonetische Regeln
          </h2>
        </div>
      </div>

      {/* Pronunciation Rule Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {PRONUNCIATION_RULES.map((rule) => (
          <div
            key={rule.id}
            className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-2">
                <h3 className="font-bold text-xs sm:text-sm text-slate-900">
                  {rule.title}
                </h3>
                <span className="font-mono text-[11px] font-bold bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">
                  {rule.ipaSymbol}
                </span>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed italic bg-slate-50 p-2.5 rounded border border-slate-100">
                {rule.explanation[language] || rule.explanation.en}
              </p>

              <div className="space-y-1.5 pt-1">
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Lautbeispiele (IPA & Audio):
                </div>

                <div className="space-y-1.5">
                  {rule.examples.map((ex, exIdx) => (
                    <div
                      key={exIdx}
                      className="p-2 rounded bg-blue-50/50 border border-blue-100 flex items-center justify-between text-xs hover:bg-blue-100/50 transition-colors"
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{ex.word}</span>
                        <span className="font-mono text-[10px] text-blue-800 bg-white px-1.5 py-0.5 rounded border border-blue-100">
                          {ex.ipa}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] text-slate-500 hidden sm:inline">
                          {ex.note}
                        </span>
                        <button
                          onClick={() => playHighGermanAudio(ex.word, speechRate)}
                          className="p-1 rounded text-blue-600 hover:text-blue-800 hover:bg-white cursor-pointer transition-colors"
                          title="Wort anhören"
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
