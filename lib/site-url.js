const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
const vercelUrl = process.env.VERCEL_URL?.trim();

function normalizePublicUrl(value) {
  if (!value) return undefined;

  try {
    const url = new URL(/^https?:\/\//i.test(value) ? value : `https://${value}`);
    if (!['http:', 'https:'].includes(url.protocol)) return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

// Prefer an explicit public URL; otherwise keep canonical metadata on the
// stable production domain rather than a temporary Vercel deployment URL.
export const siteUrl =
  normalizePublicUrl(configuredUrl) ||
  'https://wahyuw.vercel.app' ||
  normalizePublicUrl(vercelUrl);
