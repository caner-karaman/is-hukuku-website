import React from "react";
import { getPostsByCategory, getCategoryBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import CategoryTemplate from "@/components/templates/[categorySlug]/CategoryTemplate";

export default async function CategoryPage(props: {
  params: Promise<{ categorySlug: string }>;
}) {
  const { categorySlug } = await props.params;
  const category = getCategoryBySlug(categorySlug);

  if (!category) {
    notFound();
  }

  const posts = await getPostsByCategory(categorySlug);

  return (
    <CategoryTemplate
      category={category}
      posts={posts}
      categorySlug={categorySlug}
    />
  );
}
