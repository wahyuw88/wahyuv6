import { siteUrl } from '../lib/site-url';

export default function sitemap() {
  if (!siteUrl) return [];
  return [{ url: siteUrl, changeFrequency: 'monthly', priority: 1 }];
}
