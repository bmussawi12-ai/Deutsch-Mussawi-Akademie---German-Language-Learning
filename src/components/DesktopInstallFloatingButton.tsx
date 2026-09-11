import React, { useState, useEffect } from 'react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { getPublicBaseUrl } from '../utils/shareUrl';
import { 
  Download, 
  MonitorDown, 
  WifiOff, 
  X, 
  Check, 
  Sparkles, 
  ExternalLink,
  Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface DesktopInstallFloatingButtonProps {
  className?: string;
  onOpenModal?: () => void;
}

export const DesktopInstallFloatingButton: React.FC<DesktopInstallFloatingButtonProps> = ({
  className = '',
  onOpenModal
}) => {
  const { isInstallable, isInstalled, isInIframe, install } = usePWAInstall();
  const [isDismissed, setIsDismissed] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [installing, setInstalling] = useState(false);
  const [installedSuccess, setInstalledSuccess] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('pwa_desktop_fab_dismissed');
      if (dismissed === 'true') {
        setIsDismissed(true);
      }
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDismissed(true);
    try {
      sessionStorage.setItem('pwa_desktop_fab_dismissed', 'true');
    } catch {
      // ignore
    }
  };

  const handleInstall = async () => {
    if (onOpenModal) {
      onOpenModal();
      return;
    }
    if (isInstallable) {
      setInstalling(true);
      try {
        const success = await install();
        if (success) {
          setInstalledSuccess(true);
          setTimeout(() => {
            setIsDismissed(true);
          }, 3000);
        } else {
          // If prompt was dismissed or failed, show helper modal
          setShowModal(true);
        }
      } catch (err) {
        setShowModal(true);
      } finally {
        setInstalling(false);
      }
    } else {
      // If prompt event not captured (e.g. inside iframe or unsupported browser)
      setShowModal(true);
    }
  };

  const handleOpenStandaloneTab = () => {
    const publicUrl = getPublicBaseUrl();
    const directUrl = typeof window !== 'undefined' ? window.location.href : publicUrl;
    window.open(directUrl, '_blank', 'noopener,noreferrer');
  };

  // If already installed in standalone mode, or user dismissed for this session, hide the button
  if (isInstalled || isDismissed) {
    return null;
  }

  return (
    <>
      <AnimatePresence>
        <motion.aside
          id="desktop-install-floating-button"
          aria-label="Install App for Desktop Offline Access"
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`fixed bottom-6 right-6 z-40 hidden md:flex flex-col items-end gap-2 ${className}`}
        >
          {/* Main Floating Card */}
          <div className="group relative flex items-center gap-3.5 bg-slate-900/95 hover:bg-slate-900 text-white pl-4 pr-3 py-3 rounded-2xl shadow-2xl border border-slate-700/80 hover:border-amber-400/70 backdrop-blur-md transition-all max-w-sm">
            {/* Dismiss Button */}
            <button
              id="desktop-install-fab-dismiss-btn"
              onClick={handleDismiss}
              title="Schließen / بستن"
              aria-label="Close Install Prompt"
              className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-600 flex items-center justify-center text-xs transition-colors cursor-pointer shadow-md"
            >
              <X size={13} />
            </button>

            {/* Icon Column */}
            <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shrink-0 shadow-inner">
              {installedSuccess ? (
                <Check size={22} className="text-slate-950 stroke-[2.5]" />
              ) : (
                <MonitorDown size={22} className="text-slate-950 stroke-[2.2] animate-pulse" />
              )}
            </div>

            {/* Content Column */}
            <div className="flex flex-col min-w-0 pr-1">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-sm text-white tracking-tight">
                  {installedSuccess ? 'App Installiert!' : 'Install App'}
                </span>
                <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  <WifiOff size={10} className="shrink-0" />
                  100% Offline
                </span>
              </div>
              <p className="text-[11px] text-slate-300 leading-snug mt-0.5 truncate">
                {installedSuccess 
                  ? 'Erfolgreich hinzugefügt. Offline nutzbar.'
                  : 'Desktop-App für Windows, Mac & Linux'}
              </p>
            </div>

            {/* Primary Action Button */}
            {!installedSuccess && (
              <button
                id="desktop-install-fab-trigger-btn"
                onClick={handleInstall}
                disabled={installing}
                className="ml-1 shrink-0 px-3.5 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 active:bg-amber-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md hover:shadow-amber-400/20 transition-all cursor-pointer disabled:opacity-75"
                title="Desktop-App installieren für uneingeschränkten Offline-Zugriff"
              >
                <Download size={14} className={`shrink-0 ${installing ? 'animate-spin' : ''}`} />
                <span>{installing ? 'Wird...' : 'Install'}</span>
              </button>
            )}
          </div>
        </motion.aside>
      </AnimatePresence>

      {/* Helper Modal if native prompt is blocked or needs new tab */}
      {showModal && (
        <div 
          id="desktop-install-fallback-modal"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4 animate-fadeIn"
          role="dialog"
          aria-modal="true"
          aria-labelledby="desktop-install-modal-title"
        >
          <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl border border-slate-200 p-6 space-y-4 text-slate-800 text-xs">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-amber-100 text-amber-800 rounded-xl">
                  <MonitorDown size={22} />
                </div>
                <div>
                  <h3 id="desktop-install-modal-title" className="font-extrabold text-base text-slate-900">
                    Desktop App Installation
                  </h3>
                  <p className="text-[11px] text-slate-500">
                    Deutsch Mussawi Akademie • 100% Offline-fähig
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-slate-400 hover:text-slate-700 p-1.5 rounded-lg transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            {/* Offline Benefit Card */}
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl space-y-1.5 text-emerald-950">
              <div className="flex items-center gap-2 font-bold text-xs text-emerald-800">
                <WifiOff size={15} />
                <span>Vollständiger Offline-Zugriff auf alle Lektionen</span>
              </div>
              <p className="text-[11px] text-emerald-900/90 leading-relaxed">
                Nach der Installation auf Ihrem Desktop-Computer (Windows, macOS oder Linux) können Sie alle Lerneinheiten von A1.1 bis C2.2, Prüfungen, Grammatikregeln und Audioaufnahmen ohne Internetverbindung nutzen.
              </p>
            </div>

            {/* If in iframe or direct browser instructions */}
            {isInIframe ? (
              <div className="p-3.5 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-300 rounded-xl space-y-2.5">
                <div className="flex items-center gap-1.5 font-bold text-amber-900 text-xs">
                  <Sparkles size={15} className="text-amber-600" />
                  <span>Installation im Browser aktivieren</span>
                </div>
                <p className="text-slate-700 text-[11px] leading-relaxed">
                  Da die Vorschau in einem iFrame eingebettet ist, blockiert der Browser die direkte Installationsabfrage. Öffnen Sie die App in einem separaten Tab, um die Installation direkt mit einem Klick auszuführen:
                </p>
                <button
                  onClick={handleOpenStandaloneTab}
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer text-xs"
                >
                  <ExternalLink size={15} />
                  <span>In neuem Tab öffnen & direkt installieren</span>
                </button>
              </div>
            ) : (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                <div className="font-bold text-slate-900 text-xs flex items-center gap-1.5">
                  <Laptop size={15} className="text-blue-600" />
                  <span>Manuelle Installation über die Adressleiste:</span>
                </div>
                <ol className="text-slate-600 text-[11px] space-y-1.5 list-decimal list-inside leading-relaxed pl-1">
                  <li>
                    Achten Sie in <strong>Google Chrome</strong> oder <strong>Microsoft Edge</strong> auf das Symbol <strong className="text-slate-900">App installieren (⊕)</strong> rechts in der URL-Adressleiste.
                  </li>
                  <li>
                    Klicken Sie auf das Symbol und bestätigen Sie mit <strong>Installieren</strong>.
                  </li>
                  <li>
                    Die App erscheint sofort als eigenständiges Symbol auf Ihrem Desktop und in der Taskleiste.
                  </li>
                </ol>
              </div>
            )}

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl font-bold text-xs transition-colors cursor-pointer"
              >
                Schließen
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
