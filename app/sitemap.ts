import type { MetadataRoute } from 'next';
import { getSitemapPosts } from '@/lib/api/endpoints/public-sitemap-api/public-sitemap-api';

const BASE_URL = 'https://is-hukuku.com';

export const dynamic = 'force-dynamic';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/cookie-policy`,
      lastModified: new Date()
    },
    {
      url: `${BASE_URL}/kvkk`,
      lastModified: new Date()
    },
  ];

  // Dynamic post pages
  let postPages: MetadataRoute.Sitemap = [];

  try {
    const response = await getSitemapPosts({
      domain: 'is-hukuku.com',
      lang: 'tr',
    });

    if (response.data && Array.isArray(response.data)) {
      postPages = response.data.map((post) => ({
        url: `${BASE_URL}/${post.categorySlug}/${post.postSlug}`,
        lastModified: post.lastModified ? new Date(post.lastModified) : new Date(),
      }));
    }
  } catch (error) {
    console.error('Sitemap: Failed to fetch posts', error);
  }

  return [...staticPages, ...postPages];
}
