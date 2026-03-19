import { middleware as i18nMiddleware } from 'astro:i18n';

export const onRequest = i18nMiddleware({
  prefixDefaultLocale: true,
  redirectToDefaultLocale: false,
  fallbackType: 'rewrite',
});
