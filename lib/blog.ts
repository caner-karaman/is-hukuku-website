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

// Configuration
const BACKEND_URL = process.env.NEXT_PUBLIC_API_URL || "https://admin.is-hukuku.com";
const DOMAIN = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com";

// DTO Interfaces from Backend
interface PostTranslationDTO {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  languageCode: string;
  post: {
    id: number;
    featuredImage?: string;
    website?: {
      domain: string;
    };
    category?: {
        name: string;
        slug: string;
    };
    author?: {
        name: string;
        role?: string;
        bio?: string;
        image?: string;
    };
    tags?: { name: string }[];
  }
}

// Data Mapping Utility
function mapDtoToPost(dto: PostTranslationDTO): Post {
  return {
    title: dto.title,
    slug: dto.slug,
    category: dto.post.category?.name || "Hukuk",
    categorySlug: dto.post.category?.slug || "is-hukuku",
    createdAt: "14 Mart 2024", // Placeholder if date not in DTO
    updatedAt: "15 Mart 2024",
    author: {
      name: dto.post.author?.name || "Av. Emre Akman",
      role: dto.post.author?.role || "Kıdemli Ortak",
      bio: dto.post.author?.bio || "Hukuk uzmanı.",
      image: dto.post.author?.image || "/authors/emre-akman.png",
    },
    featuredImage: dto.post.featuredImage || "/blog-featured.png",
    excerpt: dto.excerpt || "",
    content: dto.content || "",
    tags: dto.post.tags?.map(t => `#${t.name}`) || [],
    faqs: [
      "Kıdem tazminatı nasıl hesaplanır?",
      "İşe iade davası şartları nelerdir?",
      "Fazla mesai ücreti nasıl talep edilir?",
    ],
  };
}

// Categories remain static as per implementation plan navigation requirements
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
    const dtos: PostTranslationDTO[] = await response.json();
    return dtos.map(mapDtoToPost);
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
    const res = await response.json();
    const dto: PostTranslationDTO = res;
    return mapDtoToPost(dto);
  } catch (error) {
    console.error("Fetch Error [getPostBySlug]:", error);
    return undefined;
  }
}

export function getCategoryBySlug(slug: string) {
  return categories.find((cat) => cat.slug === slug);
}
