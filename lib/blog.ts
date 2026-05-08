export interface Author {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface Post {
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  createdAt: string;
  updatedAt: string;
  author: Author;
  featuredImage: string;
  excerpt: string;
  content?: string;
  tags: string[];
  faqs?: string[];
}

export interface Category {
  name: string;
  slug: string;
  description: string;
}

const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "https://admin.is-hukuku.com";
const DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com";

export const categories: Category[] = [
  {
    name: "İş Hukuku",
    slug: "is-hukuku",
    description: "İşçi ve işveren arasındaki ilişkileri düzenleyen temel kanunlar ve uygulamalar.",
  },
  {
    name: "Sosyal Güvenlik",
    slug: "sosyal-guvenlik",
    description: "SGK mevzuatı, emeklilik hakları ve sosyal yardımlara dair güncel bilgiler.",
  },
  {
    name: "Yargıtay Kararları",
    slug: "yargitay-kararlari",
    description: "İş davalarında emsal teşkil eden en güncel Yargıtay ilamları ve yorumları.",
  },
];

// Service Calls (SSR)
export async function getAllPosts(lang: string = "tr"): Promise<Post[]> {
  const url = `${BACKEND_URL}/api/public/posts?domain=${DOMAIN}&lang=${lang}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 }, // Optional cache strategy for Next.js
    });
    if (!response.ok) return [];
    return await response.json();
  } catch (error) {
    console.error("Fetch Error [getAllPosts]:", error);
    return [];
  }
}

export async function getPostsByCategory(categorySlug: string, lang: string = "tr"): Promise<Post[]> {
  const allPosts = await getAllPosts(lang);
  return allPosts.filter((post) => post.categorySlug === categorySlug);
}

export async function getPostBySlug(slug: string, lang: string = "tr"): Promise<Post | undefined> {
  const url = `${BACKEND_URL}/api/public/posts/${slug}?domain=${DOMAIN}&lang=${lang}`;
  try {
    const response = await fetch(url, {
      next: { revalidate: 3600 },
    });
    if (!response.ok) return undefined;
    return await response.json();
  } catch (error) {
    console.error("Fetch Error [getPostBySlug]:", error);
    return undefined;
  }
}

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.slug === slug);
}
