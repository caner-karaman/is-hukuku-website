import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Gavel,
  ArrowRight,
  Link as LinkIcon,
  Mail,
  Scale,
  ChevronLeft,
} from "lucide-react";
import {
  getPostBySlug as apiGetPostBySlug,
  getAllPosts as apiGetAllPosts,
} from "@/lib/api/endpoints/public-post-integration-api/public-post-integration-api";
import { PostTranslationDTO } from "@/lib/api/model";
import { notFound } from "next/navigation";

interface MappedPost {
  id?: number;
  slug: string;
  title: string;
  content?: string;
  excerpt?: string;
  category: string;
  categorySlug: string;
  featuredImage: string;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    role: string;
    bio: string;
  };
  tags: string[];
  faqs: string[];
}

export default async function PostPage(props: {
  params: Promise<{ categorySlug: string; postSlug: string }>;
}) {
  const { categorySlug, postSlug } = await props.params;
  let post: MappedPost;
  try {
    const response = await apiGetPostBySlug(
      postSlug,
      {
        domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com",
        lang: "tr",
      },
      { next: { revalidate: 3600 } } as RequestInit,
    );
    if (response.status !== 200 || !response.data?.id) {
      notFound();
    }
    post = mapDtoToPost(response.data);
  } catch (err) {
    notFound();
  }

  if (!post || post.categorySlug !== categorySlug) {
    notFound();
  }

  let relatedPosts: MappedPost[] = [];
  try {
    const relatedResponse = await apiGetAllPosts(
      {
        domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com",
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

  return (
    <article className="bg-surface min-h-screen">
      {/* Back to Blog Link */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-on-surface-variant font-bold text-[10px] uppercase tracking-widest hover:text-secondary transition-colors"
        >
          <ChevronLeft size={14} />
          Blog Listesine Dön
        </Link>
      </div>

      {/* Header / Hero Area */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-8 mb-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <Link
              href={`/${post.categorySlug}`}
              className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-bold hover:underline"
            >
              {post.category}
            </Link>
            <span className="w-8 h-[1px] bg-outline-variant/30"></span>
            <div className="flex flex-col md:flex-row md:gap-4 gap-1">
              <span className="font-sans text-xs text-on-surface-variant">
                Oluşturma: {post.createdAt}
              </span>
              {post.updatedAt !== post.createdAt && (
                <>
                  <span className="hidden md:block font-sans text-xs text-outline-variant/50">
                    |
                  </span>
                  <span className="font-sans text-xs text-on-surface-variant">
                    Güncelleme: {post.updatedAt}
                  </span>
                </>
              )}
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-on-surface max-w-5xl">
            {post.title}
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high relative flex items-center justify-center text-primary font-bold">
              {post.author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>
            <div>
              <p className="font-display font-bold text-sm text-on-surface uppercase tracking-tight">
                {post.author.name}
              </p>
              <p className="font-sans text-xs text-on-surface-variant font-medium">
                {post.author.role}
              </p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl overflow-hidden aspect-[21/9] relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
            <Image
              src={post.featuredImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent"></div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-outline-variant/10">
        {/* Main Column */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest/50 backdrop-blur-sm p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-outline-variant/5">
            {post.content ? (
              <div
                id="post-content"
                className="text-lg leading-relaxed text-on-surface/90 mb-12 blog-content"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            ) : (
              <>
                <h2 className="font-display text-3xl font-bold mb-8 text-on-surface tracking-tight">
                  Hukuki Değerlendirme
                </h2>
                <p className="text-lg leading-relaxed text-on-surface/90 mb-8 first-letter:text-6xl first-letter:font-playfair first-letter:float-left first-letter:mr-4 first-letter:text-secondary first-letter:leading-[0.8] first-letter:mt-2">
                  {post.excerpt}
                </p>
                <p className="text-lg leading-relaxed text-on-surface/90 mb-12">
                  İçerik hazırlanıyor...
                </p>
              </>
            )}

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-wrap gap-3">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 bg-surface-container-high text-on-surface-variant text-xs rounded-full font-bold tracking-tight hover:bg-secondary/10 hover:text-secondary transition-colors cursor-pointer capitalize"
                >
                  {tag.replace("#", "")}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Author Card */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 sticky top-28 overflow-hidden group z-20">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">
              Yazar Hakkında
            </h4>
            <div className="flex flex-col gap-6">
              <div className="w-24 h-24 rounded-2xl bg-surface-container-high overflow-hidden shadow-lg relative mx-auto lg:mx-0 flex items-center justify-center text-primary text-2xl font-bold">
                {post.author.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div className="text-center lg:text-left">
                <h5 className="font-display font-bold text-xl text-on-surface mb-3">
                  {post.author.name}
                </h5>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
                  {post.author.bio}
                </p>
              </div>
              {/* <div className="flex gap-4 justify-center lg:justify-start pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <LinkIcon size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1"
                >
                  <Mail size={18} />
                </a>
              </div> */}
            </div>
          </div>

          {/* Quick Links / FAQ */}
          {post.faqs && post.faqs.length > 0 && (
            <div className="bg-surface-container-low/50 p-8 rounded-[2rem] border border-outline-variant/10">
              <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">
                Sıkça Sorulan Sorular
              </h4>
              <nav className="flex flex-col gap-5">
                {post.faqs.map((faq, index) => (
                  <a
                    key={index}
                    href="#"
                    className="group flex items-start justify-between gap-4 text-sm font-bold text-on-surface hover:text-secondary transition-all"
                  >
                    <span className="leading-snug">{faq}</span>
                    <ArrowRight
                      size={18}
                      className="shrink-0 transform group-hover:translate-x-1 transition-transform text-outline-variant group-hover:text-secondary"
                    />
                  </a>
                ))}
              </nav>
            </div>
          )}

          {/* Prominent CTA */}
          <div className="relative p-10 rounded-[2.5rem] bg-primary overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Scale size={160} color="white" />
            </div>
            <div className="relative z-10">
              <h4 className="font-display font-bold text-2xl text-white mb-6 leading-[1.2]">
                Hukuki Desteğe mi İhtiyacınız Var?
              </h4>
              <p className="text-white/70 text-sm mb-10 leading-relaxed font-medium">
                Uzman kadromuzla yanınızdayız. Hemen randevu oluşturun ve
                haklarınızı güvence altına alın.
              </p>
              <button className="w-full bg-secondary-container text-primary-container py-4 rounded-xl font-display font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1">
                İletişime Geçin
              </button>
            </div>
          </div>
        </aside>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="flex items-center justify-between mb-12">
            <h4 className="font-display text-2xl font-black text-on-surface tracking-tight uppercase tracking-widest text-sm">
              İlginizi Çekebilir
            </h4>
            <Link
              href={`/${post.categorySlug}`}
              className="text-secondary font-bold text-xs uppercase tracking-widest hover:underline"
            >
              Tümünü Gör
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {relatedPosts.map((rp) => (
              <Link
                key={rp.slug}
                href={`/${rp.categorySlug}/${rp.slug}`}
                className="group flex flex-col md:flex-row gap-6 bg-surface-container-lowest p-6 rounded-3xl border border-outline-variant/5 shadow-sm hover:shadow-xl transition-all"
              >
                <div className="relative w-full md:w-40 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
                  <Image
                    src={rp.featuredImage}
                    alt={rp.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-[10px] font-black text-secondary uppercase tracking-widest mb-2">
                    {rp.category}
                  </span>
                  <h5 className="font-display font-bold text-on-surface leading-snug group-hover:text-secondary transition-colors line-clamp-2">
                    {rp.title}
                  </h5>
                  <div className="flex items-center gap-2 mt-4 text-on-surface-variant">
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {rp.createdAt}
                    </span>
                    <ArrowRight
                      size={14}
                      className="transform group-hover:translate-x-1 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}

function mapDtoToPost(dto: PostTranslationDTO): MappedPost {
  const p = dto.post as any;
  return {
    id: dto.id,
    slug: dto.slug,
    title: dto.title,
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
      bio: p?.author?.bio || "",
    },
    tags: p?.tagses?.map((t: any) => t.name || "") || [],
    faqs: p?.faqs?.map((f: any) => f.question) || [],
  };
}
