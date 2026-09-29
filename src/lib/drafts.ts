import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';

const CONTENT_DIR = path.resolve('content/case-studies');

/**
 * Where a draft lives: its normal id with the author's random `draftId`
 * appended. The suffix is dropped on publication, so a draft link stops working once the
 * article is published.
 */
export function draftSlug(id: string, draftId: string): string {
  return `${id}-${draftId}`;
}

/**
 * Site paths of every draft article, e.g. `/case-studies/my-piece-q7v2m9xk`.
 */
export function draftPaths(): string[] {
  const paths: string[] = [];

  const walk = (dir: string, prefix: string) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full, `${prefix}${entry.name}/`);
      } else if (entry.name.endsWith('.md')) {
        // Matches the id the glob loader derives: path minus the extension,
        // relative to the collection's base directory.
        const id = `${prefix}${entry.name.slice(0, -3)}`;
        const draftId = readDraftId(readFileSync(full, 'utf8'));
        if (draftId) paths.push(`/case-studies/${draftSlug(id, draftId)}`);
      }
    }
  };

  walk(CONTENT_DIR, '');
  return paths;
}

/**
 * The `draftId` of an article marked `draft: true`, or null if it is not a
 * draft 
 *
 * A draft with no `draftId` is rejected by the schema in content.config.ts,
 */
function readDraftId(source: string): string | null {
  const block = /^---\r?\n([\s\S]*?)\r?\n---/.exec(source);
  if (!block) return null;
  const frontmatter = block[1];

  if (!/^draft:[ \t]*true[ \t]*$/m.test(frontmatter)) return null;
  const id = /^draftId:[ \t]*["']?([a-z0-9]{6,16})["']?[ \t]*$/m.exec(frontmatter);
  return id ? id[1] : null;
}
