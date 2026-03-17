import en from './locales/en.json';
import zh from './locales/zh.json';

export const translations = {
  en,
  zh
} as const;

export type Lang = 'en' | 'zh';
export type TranslationDict = typeof en;

/**
 * Get nested value from object using dot notation path
 */
function getNestedValue(obj: any, path: string): string | undefined {
  const keys = path.split('.');
  let value = obj;
  
  for (const key of keys) {
    if (value === null || value === undefined || typeof value !== 'object') {
      return undefined;
    }
    value = value[key];
  }
  
  return typeof value === 'string' ? value : undefined;
}

/**
 * Get translation for a key
 * @param lang - Language code
 * @param key - Dot notation key (e.g., 'status.agents')
 * @returns Translated string or key if not found
 */
export function t(lang: Lang, key: string): string {
  const dict = translations[lang];
  const value = getNestedValue(dict, key);
  
  if (value !== undefined) {
    return value;
  }
  
  // Fallback to English
  const fallbackValue = getNestedValue(translations.en, key);
  if (fallbackValue !== undefined) {
    return fallbackValue;
  }
  
  // Return key if not found anywhere
  return key;
}

/**
 * Get language name
 */
export function getLanguageName(lang: Lang): string {
  return t(lang, `language.${lang}`);
}

/**
 * Get all available languages
 */
export function getAvailableLanguages(): { code: Lang; name: string; flag: string }[] {
  return [
    { code: 'en', name: getLanguageName('en'), flag: '🇺🇸' },
    { code: 'zh', name: getLanguageName('zh'), flag: '🇨🇳' }
  ];
}
