#!/usr/bin/env node
/**
 * Fails if any internal link in the built site points at a page that does not
 * exist.
 */

import { readFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';

const DIST = path.resolve('dist');
const { SITE } = await import('../src/site.config.ts');
const BASE = SITE.base.replace(/\/+$/, '');

if (!existsSync(DIST)) {
  console.error('dist/ not found — run `npm run build` first.');
  process.exit(1);
}

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else yield full;
  }
}

/** Does a link target exist as a built file? */
function resolves(href) {
  // Strip the configured base prefix to get a path relative to dist/.
  let rel = href;
  if (BASE && (rel === BASE || rel.startsWith(`${BASE}/`))) rel = rel.slice(BASE.length);
  rel = rel.replace(/^\/+/, '');

  if (rel === '') return true; // site root
  const candidates = [rel, `${rel}.html`, path.join(rel, 'index.html')];
  return candidates.some((c) => existsSync(path.join(DIST, c)));
}

const problems = [];
let checked = 0;

for await (const file of walk(DIST)) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(file, 'utf8');
  const page = path.relative(DIST, file);

  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const raw = match[1];
    // Skip external, protocol-relative, in-page and non-navigational links.
    if (/^([a-z][a-z0-9+.-]*:|\/\/|#|\?)/i.test(raw)) continue;
    const href = raw.split('#')[0].split('?')[0];
    if (!href.startsWith('/')) continue; // relative links are not used by this site

    checked++;
    if (!resolves(href)) problems.push({ page, href });
  }
}

if (problems.length > 0) {
  console.error(`\n✗ ${problems.length} broken internal link(s):\n`);
  for (const { page, href } of problems) console.error(`  ${page}  →  ${href}`);
  console.error(
    '\nIf the target should exist, check the spelling. If you wrote the link by ' +
      'hand in an .astro file, use the url() helper from src/lib/url.ts so the ' +
      'base path is applied.\n',
  );
  process.exit(1);
}

console.log(`✓ ${checked} internal links resolve.`);
