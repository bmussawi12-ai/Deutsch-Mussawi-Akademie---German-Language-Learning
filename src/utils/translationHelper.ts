import { LanguageCode, TranslatedText } from '../types';

export function getTranslation(
  text: TranslatedText | undefined,
  lang: LanguageCode,
  fallback: string = ''
): string {
  if (!text) return fallback;
  
  if (lang === 'prs') {
    return text.prs || text.fa || text.en || fallback;
  }
  
  if (lang === 'fa') {
    return text.fa || text.prs || text.en || fallback;
  }
  
  if (lang === 'ps') {
    return text.ps || text.prs || text.fa || text.en || fallback;
  }
  
  const direct = text[lang];
  if (direct && typeof direct === 'string') {
    return direct;
  }
  
  return text.en || text.fa || text.prs || fallback;
}

export function isRTL(lang: LanguageCode): boolean {
  return lang === 'fa' || lang === 'prs' || lang === 'ps' || lang === 'ar';
}

export function getLanguageName(lang: LanguageCode): string {
  switch (lang) {
    case 'prs':
      return 'فارسی دری (Persian Dari)';
    case 'fa':
      return 'فارسی (Persian)';
    case 'ps':
      return 'پښتو (Pashto)';
    case 'ar':
      return 'العربية (Arabic)';
    case 'tr':
      return 'Türkçe (Turkish)';
    case 'es':
      return 'Español (Spanish)';
    case 'en':
    default:
      return 'English';
  }
}
