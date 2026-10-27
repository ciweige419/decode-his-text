import { MetadataRoute } from 'next';
import { TOXIC_QUOTES } from '@/lib/data';
import { CONTENT_UPDATED, SEARCH_ARTICLES } from '@/lib/search-content';
import { GUIDES } from '@/lib/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.decodehistext.com';
  return [
    { url: base, lastModified: CONTENT_UPDATED },
    { url: `${base}/database`, lastModified: CONTENT_UPDATED },
    { url: `${base}/about-us`, lastModified: CONTENT_UPDATED },
    ...Object.keys(GUIDES).map(slug => ({ url: `${base}/guides/${slug}`, lastModified: CONTENT_UPDATED })),
    ...TOXIC_QUOTES.map(q => ({ url: `${base}/analyze/${q.slug}`, ...(SEARCH_ARTICLES[q.slug] ? { lastModified: CONTENT_UPDATED } : {}) })),
  ];
}
