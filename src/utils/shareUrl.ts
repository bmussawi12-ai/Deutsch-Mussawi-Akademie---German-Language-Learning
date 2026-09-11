import { CEFRLevel, MainTab } from '../types';

/**
 * Returns the publicly accessible base URL of the application.
 * In Google AI Studio, dev containers run under `ais-dev-...` which require developer authentication cookies.
 * The public shareable URL is `ais-pre-...`, which is accessible worldwide on any mobile or desktop device without login.
 */
export function getPublicBaseUrl(): string {
  if (typeof window === 'undefined') {
    return 'https://ais-pre-b4vgvhmdgl5ogwcx6o7ohe-644517703235.europe-west1.run.app';
  }

  const origin = window.location.origin;
  const pathname = window.location.pathname.replace(/\/+$/, '');
  
  // In Google AI Studio, ais-dev-* requires developer auth / billing setup if shared directly.
  // The public production endpoint ais-pre-* is 100% free, public, and works globally without any login or payment.
  const publicOrigin = origin.includes('ais-dev-') 
    ? origin.replace('ais-dev-', 'ais-pre-')
    : origin;

  return `${publicOrigin}${pathname}`;
}

/**
 * Builds a direct, publicly accessible share URL for any section or lesson.
 */
export function buildShareUrl(options: {
  level?: CEFRLevel;
  lessonId?: string;
  tab?: MainTab;
}): string {
  const baseUrl = getPublicBaseUrl();
  const params = new URLSearchParams();

  if (options.level) {
    params.set('level', options.level);
  }
  if (options.tab) {
    params.set('tab', options.tab);
  }
  if (options.lessonId && (options.tab === 'lesson' || !options.tab)) {
    params.set('lesson', options.lessonId);
  }

  const queryString = params.toString();
  return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

/**
 * Checks if the app is currently running inside an iframe (like AI Studio preview).
 */
export function isRunningInIframe(): boolean {
  if (typeof window === 'undefined') return false;
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
