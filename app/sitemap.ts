import { MetadataRoute } from 'next';
import { TOXIC_QUOTES } from '@/lib/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.decodehistext.com';

  // 静态页面
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${baseUrl}/database`,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // 动态详情页 - 迭代整个 TOXIC_QUOTES 数组
  const dynamicPages: MetadataRoute.Sitemap = TOXIC_QUOTES.map((quote) => ({
    url: `${baseUrl}/analyze/${quote.slug}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...dynamicPages];
}

