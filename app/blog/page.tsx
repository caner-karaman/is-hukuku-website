import React from "react";
import { getAllPosts as apiGetAllPosts } from "@/lib/api/endpoints/public-post-integration-api/public-post-integration-api";
import BlogTemplate from "@/components/templates/blog/BlogTemplate";

export default async function BlogIndex(props: {
  searchParams?: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParams = await props.searchParams;
  const pageStr = searchParams?.page;
  const page = typeof pageStr === "string" ? parseInt(pageStr, 10) : 1;
  const size = 9;
  const response = await apiGetAllPosts(
    {
      domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com",
      lang: "tr",
      page: Math.max(0, page - 1),
      size,
    },
    { next: { revalidate: 3600 } } as RequestInit,
  );

  const dtos = Array.isArray(response.data) ? response.data : [];
  const totalCountHeader = response.headers?.get("x-total-count");
  const totalElements = totalCountHeader ? parseInt(totalCountHeader, 10) : 0;
  const totalPages = Math.ceil(totalElements / size);

  return <BlogTemplate dtos={dtos} page={page} totalPages={totalPages} />;
}
