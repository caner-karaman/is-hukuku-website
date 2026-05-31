import React from "react";
import { notFound } from "next/navigation";
import {
  getCategoriesWithPosts,
  getAllPosts as apiGetAllPosts,
} from "@/lib/api/endpoints/public-post-integration-api/public-post-integration-api";
import { PostTranslationDTO } from "@/lib/api/model";
import { Post } from "@/lib/blog";
import { WEBSITE_DOMAIN } from "@/lib/constants";
import CategoryTemplate from "@/components/templates/[categorySlug]/CategoryTemplate";

function mapDtoToPost(dto: PostTranslationDTO): Post {
  const p = dto.post as any;
  return {
    title: dto.title || "",
    slug: dto.slug || "",
    category: p?.category?.name || "Hukuk",
    categorySlug: dto.categorySlug || "is-hukuku",
    createdAt: p?.publishedDate
      ? new Date(p.publishedDate).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "14 Mart 2024",
    updatedAt: p?.publishedDate
      ? new Date(p.publishedDate).toLocaleDateString("tr-TR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
      : "14 Mart 2024",
    author: {
      name: p?.author?.name || "Av. Gayenur KARAMAN",
      role: p?.author?.role || "Kurucu Avukat",
      bio: p?.author?.bio || "",
      image: p?.author?.imageUrl || "/blog-featured.png",
    },
    featuredImage: p?.featuredImage || "/blog-featured.png",
    excerpt: dto.summary?.replace(/&nbsp;/g, " ") || "",
    content: dto.content?.replace(/&nbsp;/g, " ") || "",
    tags: p?.tagses?.map((t: any) => t.name || "") || [],
    faqs: p?.faqs?.map((f: any) => f.question) || [],
  };
}

export default async function CategoryPage(props: {
  params: Promise<{ categorySlug: string }>;
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { categorySlug } = await props.params;
  const searchParams = await props.searchParams;
  const pageStr = searchParams?.page;
  const page = typeof pageStr === "string" ? parseInt(pageStr, 10) : 1;
  const size = 9;

  // Fetch categories to validate current slug and pass for layout links
  let categoriesList: any[] = [];
  try {
    const categoriesResponse = await getCategoriesWithPosts(
      { domain: WEBSITE_DOMAIN, lang: "tr" },
      { next: { revalidate: 3600 } } as RequestInit,
    );
    categoriesList = Array.isArray(categoriesResponse.data)
      ? categoriesResponse.data
      : [];
  } catch (err) {
    console.error("Failed to fetch dynamic categories for category page:", err);
  }

  const categoryData = categoriesList.find((c) => c.slug === categorySlug);
  if (!categoryData) {
    notFound();
  }

  const category = {
    name: categoryData.name || "",
    slug: categoryData.slug || "",
    description: `${categoryData.name} ile ilgili en güncel makaleler ve rehberler.`,
  };

  // Fetch and map posts matching this category slug
  let posts: Post[] = [];
  let totalPages = 1;
  try {
    const postsResponse = await apiGetAllPosts(
      {
        domain: WEBSITE_DOMAIN,
        lang: "tr",
        categorySlug,
        page: Math.max(0, page - 1),
        size,
      },
      { next: { revalidate: 3600 } } as RequestInit,
    );
    const allPostsDtos = Array.isArray(postsResponse.data)
      ? postsResponse.data
      : [];
    posts = allPostsDtos.map(mapDtoToPost);

    const totalCountHeader = postsResponse.headers?.get("x-total-count");
    const totalElements = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
    totalPages = Math.ceil(totalElements / size);
  } catch (err) {
    console.error("Failed to fetch posts for category page:", err);
  }

  return (
    <CategoryTemplate
      category={category}
      posts={posts}
      categorySlug={categorySlug}
      categoriesList={categoriesList}
      page={page}
      totalPages={totalPages}
    />
  );
}

