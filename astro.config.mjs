// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { SITE } from './src/site.config.ts';
import { draftPaths } from './src/lib/drafts.ts';

// Draft articles are built so they have a reviewable URL, but they are
// unlisted
const drafts = new Set(draftPaths());

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  base: SITE.base,
  trailingSlash: 'ignore',
  integrations: [
    sitemap({
      filter: (page) => {
        const { pathname } = new URL(page);
        const base = SITE.base.replace(/\/+$/, '');
        const rel = base && pathname.startsWith(base) ? pathname.slice(base.length) : pathname;
        return !drafts.has(rel.replace(/\/+$/, ''));
      },
    }),
  ],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
      wrap: true,
    },
  },
});
