import React from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Legend,
  Tooltip,
} from 'recharts';
import { LevelProgress, Language } from '../types';
import { getCEFRTranslation } from '../data/cefrData';

interface CEFRRadarChartProps {
  data: LevelProgress[];
  language: Language;
  selectedLevel: string | null;
  onSelectLevel?: (level: string | null) => void;
}

export const CEFRRadarChart: React.FC<CEFRRadarChartProps> = ({
  data,
  language,
  selectedLevel,
  onSelectLevel,
}) => {
  const t = getCEFRTranslation(language);
  const isRtl = language === 'fa' || language === 'prs' || language === 'ar' || language === 'ps';

  // Format data for radar
  const radarData = data.map((item) => ({
    level: item.level,
    displayName: isRtl ? `${item.level} (${item.levelNameFa.split('/')[0].trim()})` : `${item.level}`,
    fullLevelName: isRtl ? item.levelNameFa : item.levelNameEn,
    vocabulary: item.vocabulary,
    grammar: item.grammar,
    examPractice: item.examPractice,
    average: Math.round((item.vocabulary + item.grammar + item.examPractice) / 3),
  }));

  // Custom tooltip
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const current = payload[0].payload;
      return (
        <div
          className={`bg-white/95 backdrop-blur-md p-3.5 rounded-xl border border-slate-200 shadow-xl text-xs z-50 min-w-44 ${
            isRtl ? 'text-right' : 'text-left'
          }`}
          dir={isRtl ? 'rtl' : 'ltr'}
        >
          <div className="font-bold text-slate-800 text-sm mb-1 pb-1 border-b border-slate-100 flex items-center justify-between">
            <span className="px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 font-mono text-xs">
              {current.level}
            </span>
            <span className="text-slate-600 text-[11px] font-medium">
              {current.fullLevelName}
            </span>
          </div>
          <div className="space-y-1.5 mt-2">
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-indigo-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 inline-block" />
                {t.vocabulary}:
              </span>
              <span className="font-bold text-slate-800">{current.vocabulary}%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-teal-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-teal-600 inline-block" />
                {t.grammar}:
              </span>
              <span className="font-bold text-slate-800">{current.grammar}%</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="flex items-center gap-1.5 text-amber-600 font-medium">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 inline-block" />
                {t.examPractice}:
              </span>
              <span className="font-bold text-slate-800">{current.examPractice}%</span>
            </div>
            <div className="pt-1.5 border-t border-slate-100 flex items-center justify-between text-slate-500 font-medium">
              <span>{t.overallAverage}:</span>
              <span className="font-bold text-slate-700">{current.average}%</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-full flex flex-col items-center">
      <div className="w-full h-[360px] sm:h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart
            data={radarData}
            margin={{ top: 20, right: 30, bottom: 20, left: 30 }}
          >
            <PolarGrid stroke="#e2e8f0" strokeDasharray="3 3" />
            <PolarAngleAxis
              dataKey="displayName"
              tick={{
                fill: '#475569',
                fontSize: 12,
                fontWeight: 600,
              }}
            />
            <PolarRadiusAxis
              angle={90}
              domain={[0, 100]}
              tick={{ fill: '#94a3b8', fontSize: 10 }}
              stroke="#cbd5e1"
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="bottom"
              height={36}
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
            <Radar
              name="vocabulary"
              dataKey="vocabulary"
              stroke="#4f46e5"
              fill="#4f46e5"
              fillOpacity={0.25}
              strokeWidth={2.5}
            />
            <Radar
              name="grammar"
              dataKey="grammar"
              stroke="#0d9488"
              fill="#0d9488"
              fillOpacity={0.22}
              strokeWidth={2.5}
            />
            <Radar
              name="examPractice"
              dataKey="examPractice"
              stroke="#d97706"
              fill="#d97706"
              fillOpacity={0.2}
              strokeWidth={2.5}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Quick Level Selector Pills */}
      <div className="mt-3 flex flex-wrap justify-center gap-1.5 max-w-full">
        <button
          onClick={() => onSelectLevel && onSelectLevel(null)}
          className={`px-2.5 py-1 text-xs rounded-full font-medium transition-colors ${
            selectedLevel === null
              ? 'bg-slate-800 text-white shadow-sm'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          {t.allLevels}
        </button>
        {data.map((item) => (
          <button
            key={item.level}
            onClick={() => onSelectLevel && onSelectLevel(item.level)}
            className={`px-2.5 py-1 text-xs rounded-full font-medium transition-colors flex items-center gap-1 ${
              selectedLevel === item.level
                ? 'bg-indigo-600 text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            <span className="font-bold">{item.level}</span>
            <span className="text-[10px] opacity-80">
              {Math.round((item.vocabulary + item.grammar + item.examPractice) / 3)}%
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};
