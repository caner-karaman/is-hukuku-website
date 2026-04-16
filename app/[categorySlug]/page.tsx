import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getPostsByCategory, getCategoryBySlug, categories } from "@/lib/blog";
import { ArrowRight, Clock, ChevronLeft } from "lucide-react";
import { notFound } from "next/navigation";

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
    <div className="bg-surface min-h-screen pb-24">
      {/* Header */}
      <header className="pt-24 pb-20 bg-surface-container-low/50 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none transform translate-x-1/4 -translate-y-1/4">
          <div className="w-96 h-96 border-[40px] border-primary rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-secondary font-bold text-xs uppercase tracking-[0.2em] mb-12 hover:-translate-x-2 transition-transform"
          >
            <ChevronLeft size={16} />
            Bloga Dön
          </Link>

          <h1 className="font-display text-5xl md:text-7xl font-black text-on-surface mb-8 tracking-tighter">
            {category.name}
          </h1>
          <p className="max-w-2xl text-on-surface-variant text-lg font-medium leading-relaxed border-l-4 border-secondary pl-8 py-2">
            {category.description}
          </p>
        </div>
      </header>

      {/* Categories Horizontal Scroll for Quick Access */}
      <div className="border-b border-outline-variant/10 bg-surface">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-8 overflow-x-auto no-scrollbar py-6">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className={`whitespace-nowrap text-xs font-black uppercase tracking-widest pb-2 border-b-2 transition-all ${
                  cat.slug === categorySlug
                    ? "border-secondary text-secondary"
                    : "border-transparent text-outline-variant hover:text-on-surface hover:border-outline-variant/30"
                }`}
              >
                {cat.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Post Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        {posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-outline-variant/5 shadow-sm hover:shadow-2xl hover:shadow-on-surface/10 transition-all duration-500 hover:-translate-y-2"
              >
                <Link
                  href={`/${post.categorySlug}/${post.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={post.featuredImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-outline-variant">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {post.createdAt}
                    </span>
                  </div>

                  <Link
                    href={`/${post.categorySlug}/${post.slug}`}
                    className="block mb-4"
                  >
                    <h2 className="font-display text-xl font-bold text-on-surface leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        {post.author.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                      <span className="text-xs font-bold text-on-surface">
                        {post.author.name}
                      </span>
                    </div>
                    <Link
                      href={`/${post.categorySlug}/${post.slug}`}
                      className="flex items-center gap-2 text-secondary hover:translate-x-1 transition-transform"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-surface-container-low/20 rounded-[3rem] border-2 border-dashed border-outline-variant/20">
            <h3 className="font-display text-2xl font-bold text-on-surface mb-2">
              Bu kategoride henüz yazı yok
            </h3>
            <p className="text-on-surface-variant mb-10">
              Yakında yeni içeriklerimizle burada olacağız.
            </p>
            <Link
              href="/blog"
              className="px-8 py-3 bg-primary text-on-primary rounded-xl font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform inline-block"
            >
              Tüm Yazıları Gör
            </Link>
          </div>
        )}
      </main>
    </div>
  );
}
