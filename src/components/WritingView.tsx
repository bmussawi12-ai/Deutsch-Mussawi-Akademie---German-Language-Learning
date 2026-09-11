import React, { useState } from 'react';
import { CEFRLevel, LanguageCode, WritingTemplate } from '../types';
import { WRITING_TEMPLATES } from '../data/supplementaryData';
import { playHighGermanAudio } from '../utils/speech';
import { PenTool, Volume2, Copy, Check, FileText } from 'lucide-react';

interface WritingViewProps {
  currentLevel: CEFRLevel;
  language: LanguageCode;
  speechRate: number;
}

export const WritingView: React.FC<WritingViewProps> = ({
  currentLevel,
  language,
  speechRate
}) => {
  const [selectedTemplateId, setSelectedTemplateId] = useState<string>(WRITING_TEMPLATES[0]?.id || '');
  const [copied, setCopied] = useState(false);

  const activeTemplate = WRITING_TEMPLATES.find(t => t.id === selectedTemplateId) || WRITING_TEMPLATES[0];

  const handleCopy = () => {
    if (activeTemplate) {
      navigator.clipboard.writeText(activeTemplate.fullSample);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="space-y-4">
      {/* Top Header Card */}
      <div className="bg-white border border-slate-200 rounded shadow-xs p-4 flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
              Schriftlicher Ausdruck
            </span>
            <span className="text-xs text-slate-500 font-medium">
              Formelle & Informelle Briefe / E-Mails nach DIN 5008
            </span>
          </div>
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
            Musterbriefe & Textbausteine für Alltag & Beruf
          </h2>
        </div>

        {/* Template Selector Tabs */}
        <div className="flex bg-slate-100 p-1 rounded border border-slate-200 text-xs font-bold">
          {WRITING_TEMPLATES.map((tpl) => (
            <button
              key={tpl.id}
              onClick={() => setSelectedTemplateId(tpl.id)}
              className={`px-3 py-1 rounded transition-colors cursor-pointer ${
                activeTemplate?.id === tpl.id
                  ? 'bg-white text-blue-600 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tpl.title}
            </button>
          ))}
        </div>
      </div>

      {activeTemplate && (
        <div className="grid grid-cols-12 gap-4">
          {/* Main Template Structure (Col 8) */}
          <div className="col-span-12 lg:col-span-8 space-y-4">
            <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <div>
                  <span className="text-[10px] font-bold text-blue-600 uppercase">
                    {activeTemplate.type.toUpperCase()} • NIVEAU {activeTemplate.level}
                  </span>
                  <h3 className="font-bold text-sm sm:text-base text-slate-900 mt-0.5">
                    {activeTemplate.title}
                  </h3>
                </div>
                <button
                  onClick={handleCopy}
                  className="px-3 py-1 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded text-xs font-bold border border-slate-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check size={13} className="text-emerald-600" /> : <Copy size={13} />}
                  <span>{copied ? 'Kopiert!' : 'Text kopieren'}</span>
                </button>
              </div>

              <div className="p-3 bg-slate-50 rounded border border-slate-100 text-xs text-slate-600 italic">
                <strong>Situation:</strong> {activeTemplate.situation}
              </div>

              {/* Structural Sections */}
              <div className="space-y-3 text-xs">
                {/* Subject Line */}
                <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    1. Betreffzeile (Subject):
                  </div>
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{activeTemplate.subjectLine}</span>
                    <button
                      onClick={() => playHighGermanAudio(activeTemplate.subjectLine, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Salutation */}
                <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    2. Anrede (Salutation):
                  </div>
                  <div className="font-bold text-slate-900 flex items-center justify-between">
                    <span>{activeTemplate.salutation}</span>
                    <button
                      onClick={() => playHighGermanAudio(activeTemplate.salutation, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                </div>

                {/* Opening & Body Phrases */}
                <div className="p-3 bg-white rounded border border-slate-200 space-y-2">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    3. Wichtige Textbausteine & Redemittel:
                  </div>
                  {activeTemplate.bodyPhrases.map((bp, bIdx) => (
                    <div key={bIdx} className="p-2.5 bg-blue-50/40 rounded border border-blue-100 space-y-1">
                      <div className="flex items-center justify-between font-bold text-slate-900">
                        <span>{bp.german}</span>
                        <button
                          onClick={() => playHighGermanAudio(bp.german, speechRate)}
                          className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                        >
                          <Volume2 size={13} />
                        </button>
                      </div>
                      <p className="text-[11px] text-slate-500 italic">
                        {bp.translation[language] || bp.translation.en}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Closing & Signoff */}
                <div className="p-3 bg-white rounded border border-slate-200 space-y-1">
                  <div className="text-[10px] font-bold text-slate-400 uppercase">
                    4. Grußformel (Closing):
                  </div>
                  <div className="font-bold text-slate-900 flex items-center justify-between whitespace-pre-line">
                    <span>{activeTemplate.signoff}</span>
                    <button
                      onClick={() => playHighGermanAudio(activeTemplate.signoff, speechRate)}
                      className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                    >
                      <Volume2 size={13} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full Sample Display (Col 4) */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            <div className="bg-white border border-slate-200 rounded shadow-sm p-4 space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-2">
                <h4 className="font-bold text-xs text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText size={14} className="text-blue-600" />
                  <span>Vollständiger Musterbrief</span>
                </h4>
                <button
                  onClick={() => playHighGermanAudio(activeTemplate.fullSample, speechRate)}
                  className="text-blue-600 hover:text-blue-800 p-0.5 cursor-pointer"
                  title="Brief anhören"
                >
                  <Volume2 size={14} />
                </button>
              </div>

              <div className="p-3.5 bg-slate-50 rounded border border-slate-200 text-xs font-mono text-slate-800 leading-relaxed whitespace-pre-line max-h-[500px] overflow-y-auto">
                {activeTemplate.fullSample}
              </div>

              <div className="p-2.5 bg-blue-50 rounded border border-blue-100 text-[11px] text-blue-900 leading-normal">
                <strong>Prüfungsregel:</strong> Nach der Anrede ("Sehr geehrte Damen und Herren,") folgt im Deutschen ein Komma und der erste Satz beginnt klein ("mit großem Interesse...").
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
