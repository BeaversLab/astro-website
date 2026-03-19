import type { Lang } from '@/utils/i18n';
import { SUPPORTED_LANGS } from '@/utils/i18n';
import { t } from '@/utils/translations';

export { t } from '@/utils/translations';
export { type Lang, SUPPORTED_LANGS, DEFAULT_LANG } from '@/utils/i18n';

const FLAG_MAP: Record<Lang, string> = {
  zh: '🇨🇳',
  en: '🇺🇸',
};

export function getAvailableLanguages(): Array<{ code: Lang; name: string; flag: string }> {
  return SUPPORTED_LANGS.map((code) => ({
    code,
    name: t(code, 'language.name'),
    flag: FLAG_MAP[code] ?? '🌐',
  }));
}
