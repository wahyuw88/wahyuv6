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

export const siteUrl = normalizePublicUrl(configuredUrl) || normalizePublicUrl(vercelUrl);
