import React from 'react';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from 'recharts';
import { LevelProgress, Language } from '../types';
import { getCEFRTranslation } from '../data/cefrData';

interface CEFRBarChartProps {
  data: LevelProgress[];
  language: Language;
  selectedLevel: string | null;
  onSelectLevel?: (level: string | null) => void;
}

export const CEFRBarChart: React.FC<CEFRBarChartProps> = ({
  data,
  language,
  selectedLevel,
  onSelectLevel,
}) => {
  const t = getCEFRTranslation(language);
  const isRtl = language === 'fa' || language === 'prs' || language === 'ar' || language === 'ps';

  const chartData = data.map((item) => ({
    level: item.level,
    displayName: `${item.level} - ${isRtl ? item.levelNameFa.split('/')[0].trim() : item.levelNameEn.split('/')[0].trim()}`,
    fullLevelName: isRtl ? item.levelNameFa : item.levelNameEn,
    vocabulary: item.vocabulary,
    grammar: item.grammar,
    examPractice: item.examPractice,
    raw: item,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const item = payload[0].payload.raw as LevelProgress;
      return (
        <div
          className={`bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-xl text-xs z-50 min-w-52 ${
            isRtl ? 'text-right' : 'text-left'
          }`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="font-bold text-slate-800 text-sm mb-1 pb-1 border-b border-slate-100 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-indigo-100 text-indigo-700 font-mono text-xs">
              {item.level}
            </span>
            <span className="text-slate-600 text-[11px] font-medium">
              {isRtl ? item.levelNameFa : item.levelNameEn}
            </span>
          </div>

          <div className="space-y-2 mt-2">
            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-indigo-600 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                  {t.vocabulary}:
                </span>
                <span className="font-bold text-slate-800">{item.vocabulary}%</span>
              </div>
              <div className="text-[10px] text-slate-400 mr-4 ml-4">
                {item.vocabWordsLearned.toLocaleString()} / {item.vocabWordsTotal.toLocaleString()} {t.wordsLearned}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-teal-600 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                  {t.grammar}:
                </span>
                <span className="font-bold text-slate-800">{item.grammar}%</span>
              </div>
              <div className="text-[10px] text-slate-400 mr-4 ml-4">
                {item.grammarRulesMastered} / {item.grammarRulesTotal} {t.rulesMastered}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
                  {t.examPractice}:
                </span>
                <span className="font-bold text-slate-800">{item.examPractice}%</span>
              </div>
              <div className="text-[10px] text-slate-400 mr-4 ml-4">
                {item.mockExamsCompleted} / {item.mockExamsTotal} {t.examsCompleted}
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-slate-600 font-semibold">
              <span>{t.overallAverage}:</span>
              <span className="text-slate-800">
                {Math.round((item.vocabulary + item.grammar + item.examPractice) / 3)}%
              </span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-[360px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{ top: 20, right: 20, bottom: 25, left: 0 }}
            onClick={(state) => {
              if (state && state.activeLabel !== undefined && state.activeLabel !== null) {
                const labelStr = String(state.activeLabel);
                const clicked = data.find((d) => labelStr.startsWith(d.level));
                if (clicked && onSelectLevel) {
                  onSelectLevel(selectedLevel === clicked.level ? null : clicked.level);
                }
              }
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis
              dataKey="level"
              tickLine={false}
              axisLine={{ stroke: '#cbd5e1' }}
              tick={{ fill: '#475569', fontSize: 12, fontWeight: 600 }}
            />
            <YAxis
              domain={[0, 100]}
              tickFormatter={(v) => `${v}%`}
              tickLine={false}
              axisLine={{ stroke: '#cbd5e1' }}
              tick={{ fill: '#64748b', fontSize: 11 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              height={40}
              iconType="circle"
              formatter={(value) => {
                const map: Record<string, string> = {
                  vocabulary: t.vocabulary,
                  grammar: t.grammar,
                  examPractice: t.examPractice,
                };
                return (
                  <span className="text-xs font-medium text-slate-700 mx-1">
                    {map[value] || value}
                  </span>
                );
              }}
            />
            <ReferenceLine
              y={75}
              stroke="#94a3b8"
              strokeDasharray="4 4"
              label={{
                value: t.targetBenchmark,
                position: isRtl ? 'insideTopLeft' : 'insideTopRight',
                fill: '#64748b',
                fontSize: 10,
              }}
            />
            <Bar
              dataKey="vocabulary"
              name="vocabulary"
              fill="#4f46e5"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="grammar"
              name="grammar"
              fill="#0d9488"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
            <Bar
              dataKey="examPractice"
              name="examPractice"
              fill="#d97706"
              radius={[4, 4, 0, 0]}
              maxBarSize={28}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="text-center text-[11px] text-slate-400 mt-2">
        {isRtl ? 'برای مشاهده جزئیات یا انتخاب سطح، روی هر ستون کلیک کنید' : 'Click on any bar to focus on that specific CEFR level'}
      </div>
    </div>
  );
};
