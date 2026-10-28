import { MetadataRoute } from 'next';
import { TOXIC_QUOTES } from '@/lib/data';
import { CONTENT_UPDATED, SEARCH_ARTICLES } from '@/lib/search-content';
import { GUIDES, GUIDE_LIST_UPDATED } from '@/lib/guides';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.decodehistext.com';
  return [
    { url: base, lastModified: GUIDE_LIST_UPDATED },
    { url: `${base}/database`, lastModified: GUIDE_LIST_UPDATED },
    { url: `${base}/about-us`, lastModified: CONTENT_UPDATED },
    ...Object.entries(GUIDES).map(([slug, guide]) => ({ url: `${base}/guides/${slug}`, lastModified: guide.updatedAt ?? CONTENT_UPDATED })),
    ...TOXIC_QUOTES.map(q => ({ url: `${base}/analyze/${q.slug}`, ...(SEARCH_ARTICLES[q.slug] ? { lastModified: CONTENT_UPDATED } : {}) })),
  ];
}
