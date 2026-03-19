// @ts-check
import astroExpressiveCode from 'astro-expressive-code';
import mdx from '@astrojs/mdx';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';
import pagefind from 'astro-pagefind';
import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './src/utils/remark-modified-time.mjs';

export default defineConfig({
  site: 'https://beaverslab.xyz',
  trailingSlash: 'always',

  prefetch: {
    defaultStrategy: 'viewport',
  },

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: 'manual',
  },

  image: {
    responsiveStyles: true,
    layout: 'constrained',
    remotePatterns: [
      { protocol: 'https', hostname: '*.unsplash.com' },
      { protocol: 'https', hostname: 'beaverslab.xyz' },
      { protocol: 'https', hostname: '*.beaverslab.xyz' },
      { protocol: 'http', hostname: 'localhost' },
    ],
  },

  markdown: {
    remarkPlugins: [remarkModifiedTime],
  },

  integrations: [
    astroExpressiveCode({
      themes: ['github-dark'],
    }),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          zh: 'zh-CN',
        },
      },
    }),
    mdx(),
    pagefind(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    icon({
      include: {
        lucide: ['*'],
      },
    }),
  ],
});
