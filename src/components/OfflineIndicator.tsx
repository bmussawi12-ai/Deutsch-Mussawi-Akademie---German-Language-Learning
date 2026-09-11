import React from 'react';
import { useOnlineStatus } from '../hooks/usePWAInstall';
import { WifiOff, CheckCircle2 } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div 
      id="pwa-offline-indicator"
      className="fixed bottom-6 left-6 z-50 flex items-center gap-2.5 rounded-xl bg-slate-900/95 text-white px-3.5 py-2 text-xs font-medium shadow-2xl border border-amber-500/70 backdrop-blur-md animate-fadeIn"
      role="status"
      aria-live="polite"
    >
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-amber-500"></span>
      </span>
      <WifiOff size={15} className="text-amber-400 shrink-0" />
      <div className="flex flex-col text-[11px] leading-tight">
        <span className="font-bold text-amber-300">Offline-Modus aktiv (حالت آفلاین)</span>
        <span className="text-[10px] text-slate-300">Alle Lektionen & Grammatik sind offline verfügbar</span>
      </div>
    </div>
  );
};
