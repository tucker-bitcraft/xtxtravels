/**
 * Base-aware URL builder.
 *
 * The site deploys to a GitHub Pages project subpath (/xtxtravels/), so a
 * hand-written `/trips` in a template resolves to the domain root and 404s.
 * Astro only rewrites the assets it generates itself (_astro/*) — it never
 * touches paths we author, whether in markup or in src/packages/*.json.
 *
 * Run every internal path through url(). It is a no-op when the site is served
 * from the root, so moving to a custom domain needs only a config change.
 */

const BASE = import.meta.env.BASE_URL;

/** Protocol-relative, absolute (https:, tel:, mailto:), or a bare fragment. */
const EXTERNAL = /^([a-z][a-z0-9+.-]*:|\/\/|#)/i;

export function url(path) {
  if (!path) return BASE;
  if (EXTERNAL.test(path)) return path;

  return `${BASE.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
