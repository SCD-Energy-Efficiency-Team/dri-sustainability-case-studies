const BASE = import.meta.env.BASE_URL;

/**
 * Build an internal link that respects the configured `base` path.
 *
 */
export function url(path = '/'): string {
  const left = BASE.endsWith('/') ? BASE.slice(0, -1) : BASE;
  const right = path.startsWith('/') ? path : `/${path}`;
  return `${left}${right}` || '/';
}
