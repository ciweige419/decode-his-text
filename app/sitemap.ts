import { MetadataRoute } from 'next';
import { TOXIC_QUOTES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://decodehistext.com';

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/database`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 动态详情页
  const dynamicPages: MetadataRoute.Sitemap = TOXIC_QUOTES.map((quote) => ({
    url: `${baseUrl}/decode/${quote.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}

