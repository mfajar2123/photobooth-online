/**
 * Helper to construct URLs that correctly respect Astro's base path
 * for GitHub Pages subpath deployment or custom root domains.
 */
export function assetUrl(path: string): string {
  const base = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${base}${cleanPath}` || '/';
}
