import { siteUrl } from '../lib/site-url';

export default function robots() {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {})
  };
}
