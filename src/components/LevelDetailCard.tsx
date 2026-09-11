import React from 'react';
import { LevelProgress, Language } from '../types';
import { getCEFRTranslation } from '../data/cefrData';
import { BookOpen, Award, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface LevelDetailCardProps {
  levelData: LevelProgress;
  language: Language;
  onUpdateMetric: (level: string, metric: 'vocabulary' | 'grammar' | 'examPractice', value: number) => void;
  isSelected?: boolean;
}

export const LevelDetailCard: React.FC<LevelDetailCardProps> = ({
  levelData,
  language,
  onUpdateMetric,
  isSelected = false,
}) => {
  const t = getCEFRTranslation(language);
  const isRtl = language === 'fa' || language === 'prs' || language === 'ar' || language === 'ps';

  const average = Math.round(
    (levelData.vocabulary + levelData.grammar + levelData.examPractice) / 3
  );

  const getStatusBadge = () => {
    if (levelData.status === 'mastered') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          {t.statusMastered}
        </span>
      );
    }
    if (levelData.status === 'in-progress') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
          <Clock className="w-3.5 h-3.5" />
          {t.statusInProgress}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
        <Sparkles className="w-3.5 h-3.5" />
        {t.statusUpcoming}
      </span>
    );
  };

  return (
    <div
      className={`rounded-2xl border transition-all p-5 bg-white shadow-xs ${
        isSelected
          ? 'border-indigo-500 ring-2 ring-indigo-200 shadow-md'
          : 'border-slate-200 hover:border-slate-300'
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-slate-900 text-white font-extrabold text-lg flex items-center justify-center shadow-xs">
            {levelData.level}
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-base leading-tight">
              {isRtl ? levelData.levelNameFa : levelData.levelNameEn}
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              {isRtl ? levelData.descriptionFa : levelData.descriptionEn}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-end gap-1.5 shrink-0">
          {getStatusBadge()}
          <span className="text-xs font-mono font-bold text-slate-600">
            {t.overallAverage}: {average}%
          </span>
        </div>
      </div>

      {/* Progress Bars & Sliders */}
      <div className="space-y-4 pt-3 border-t border-slate-100">
        {/* Vocabulary */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <BookOpen className="w-3.5 h-3.5 text-indigo-600" />
              {t.vocabulary}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                {levelData.vocabWordsLearned.toLocaleString()} / {levelData.vocabWordsTotal.toLocaleString()}
              </span>
              <span className="font-bold font-mono text-indigo-600">{levelData.vocabulary}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-1.5">
            <div
              className="bg-indigo-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${levelData.vocabulary}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={levelData.vocabulary}
            onChange={(e) =>
              onUpdateMetric(levelData.level, 'vocabulary', Number(e.target.value))
            }
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
            aria-label={`${t.vocabulary} ${levelData.level}`}
          />
        </div>

        {/* Grammar */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Award className="w-3.5 h-3.5 text-teal-600" />
              {t.grammar}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                {levelData.grammarRulesMastered} / {levelData.grammarRulesTotal} {t.rulesMastered}
              </span>
              <span className="font-bold font-mono text-teal-600">{levelData.grammar}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-1.5">
            <div
              className="bg-teal-600 h-full rounded-full transition-all duration-300"
              style={{ width: `${levelData.grammar}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={levelData.grammar}
            onChange={(e) =>
              onUpdateMetric(levelData.level, 'grammar', Number(e.target.value))
            }
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-teal-600"
            aria-label={`${t.grammar} ${levelData.level}`}
          />
        </div>

        {/* Exam Practice */}
        <div>
          <div className="flex items-center justify-between text-xs mb-1">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              {t.examPractice}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-[11px] text-slate-400">
                {levelData.mockExamsCompleted} / {levelData.mockExamsTotal} {t.examsCompleted}
              </span>
              <span className="font-bold font-mono text-amber-600">{levelData.examPractice}%</span>
            </div>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden mb-1.5">
            <div
              className="bg-amber-500 h-full rounded-full transition-all duration-300"
              style={{ width: `${levelData.examPractice}%` }}
            />
          </div>
          <input
            type="range"
            min="0"
            max="100"
            value={levelData.examPractice}
            onChange={(e) =>
              onUpdateMetric(levelData.level, 'examPractice', Number(e.target.value))
            }
            className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-amber-500"
            aria-label={`${t.examPractice} ${levelData.level}`}
          />
        </div>
      </div>
    </div>
  );
};
