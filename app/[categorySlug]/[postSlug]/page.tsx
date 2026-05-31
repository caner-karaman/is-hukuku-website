import React from "react";
import {
  getPostBySlug as apiGetPostBySlug,
  getAllPosts as apiGetAllPosts,
} from "@/lib/api/endpoints/public-post-integration-api/public-post-integration-api";
import { PostTranslationDTO } from "@/lib/api/model";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PostTemplate, { MappedPost } from "@/components/templates/[categorySlug]/[postSlug]/PostTemplate";
import { WEBSITE_DOMAIN, WEBSITE_URL } from "@/lib/constants";

export async function generateMetadata(props: {
  params: Promise<{ categorySlug: string; postSlug: string }>;
}): Promise<Metadata> {
  const { categorySlug, postSlug } = await props.params;

  try {
    const response = await apiGetPostBySlug(
      categorySlug,
      postSlug,
      {
        domain: WEBSITE_DOMAIN,
        lang: "tr",
      },
      { next: { revalidate: 3600 } } as RequestInit,
    );

    if (response.status === 200 && response.data?.id) {
      const metaTitle = response.data.metaTitle || response.data.title;
      const metaDescription =
        response.data.metaDescription || response.data.summary || "";

      return {
        title: metaTitle,
        description: metaDescription,
        alternates: {
          canonical: `${WEBSITE_URL}/${categorySlug}/${postSlug}`,
        },
      };
    }
  } catch (err) {
    console.error("Failed to fetch metadata for post:", err);
  }

  return {
    title: "İş Hukuku",
    alternates: {
      canonical: `${WEBSITE_URL}/${categorySlug}/${postSlug}`,
    },
  };
}

export default async function PostPage(props: {
  params: Promise<{ categorySlug: string; postSlug: string }>;
}) {
  const { categorySlug, postSlug } = await props.params;
  let post: MappedPost;
  let publishedDateIso: string | undefined;

  try {
    const response = await apiGetPostBySlug(
      categorySlug,
      postSlug,
      {
        domain: WEBSITE_DOMAIN,
        lang: "tr",
      },
      { next: { revalidate: 3600 } } as RequestInit,
    );
    if (response.status !== 200 || !response.data?.id) {
      notFound();
    }
    post = mapDtoToPost(response.data);
    publishedDateIso = response.data.post?.publishedDate;
  } catch (err) {
    notFound();
  }

  let relatedPosts: MappedPost[] = [];
  try {
    const relatedResponse = await apiGetAllPosts(
      {
        domain: WEBSITE_DOMAIN,
        lang: "tr",
      },
      { next: { revalidate: 3600 } } as RequestInit,
    );
    const allPosts = (relatedResponse.data || []).map(mapDtoToPost);
    relatedPosts = allPosts
      .filter((p) => p.categorySlug === categorySlug && p.slug !== postSlug)
      .slice(0, 2);
  } catch (err) {
    console.error("Failed to fetch related posts:", err);
  }

  const datePublished = publishedDateIso
    ? new Date(publishedDateIso).toISOString()
    : new Date().toISOString();

  const postUrl = `${WEBSITE_URL}/${categorySlug}/${postSlug}`;

  const authorPersonSchema = {
    "@type": "Person",
    "@id": `${WEBSITE_URL}/#person`,
    "name": "Gayenur Karaman",
    "url": WEBSITE_URL,
    "telephone": "+905436433346",
    "email": "gayenurbaycan@gmail.com",
    "jobTitle": "Avukat",
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "İstanbul Medipol Üniversitesi Hukuk Fakültesi",
      "url": "https://www.medipol.edu.tr/"
    },
    "knowsAbout": [
      "İş Hukuku",
      "Tazminat Hukuku"
    ],
    "sameAs": [
      "https://www.linkedin.com/in/gayenur-karaman-baycan-a20468160"
    ],
    "description": "Avukat Gayenur Karaman, İstanbul Medipol Üniversitesi Hukuk Fakültesi mezunu olup, İstanbul 1 No'lu Barosu'na 66828 sicil numarası ile bağlı olarak İş Hukuku ve Tazminat Hukuku alanlarında uzman avukatlık ve hukuki danışmanlık hizmeti sunmaktadır.",
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "degree",
      "name": "Avukatlık Ruhsatnamesi",
      "recognizedBy": {
        "@type": "Organization",
        "name": "İstanbul 1 No'lu Barosu",
        "sameAs": "https://www.istanbulbarosu.org.tr/"
      },
      "credentialId": "66828"
    }
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt || "",
    "image": post.featuredImage.startsWith("http")
      ? post.featuredImage
      : `${WEBSITE_URL}${post.featuredImage}`,
    "datePublished": datePublished,
    "dateModified": datePublished,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "publisher": {
      "@type": "Organization",
      "name": "İş Hukuku",
      "logo": {
        "@type": "ImageObject",
        "url": `${WEBSITE_URL}/logo.webp`
      }
    },
    "author": authorPersonSchema
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <PostTemplate post={post} relatedPosts={relatedPosts} />
    </>
  );
}

function mapDtoToPost(dto: PostTranslationDTO): MappedPost {
  const p = dto.post as any;
  return {
    id: dto.id,
    slug: dto.slug,
    title: dto.title || "",
    content: dto.content?.replace(/&nbsp;/g, " "),
    excerpt: dto.summary?.replace(/&nbsp;/g, " "),
    category: p?.category?.name || "Hukuk",
    categorySlug: p?.category?.slug || "is-hukuku",
    featuredImage: p?.featuredImage || "/blog-featured.png",
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
      bio:
        p?.author?.bio ||
        "Avukat Gayenur Karaman, İş ve Tazminat Hukuku alanlarında uzmanlaşmış tecrübesiyle müvekkillerine stratejik danışmanlık sunmaktadır. Güncel mevzuat ve Yargıtay kararları ışığında, işçi-işveren haklarını koruyan sonuç odaklı çözümler üretir. Şeffaf çalışma prensibiyle, hukuki süreçlerde güvenilir bir rehberlik sağlamaktadır",
    },
    tags: p?.tagses?.map((t: any) => t.name || "") || [],
    faqs: p?.faqs?.map((f: any) => f.question) || [],
  };
}
