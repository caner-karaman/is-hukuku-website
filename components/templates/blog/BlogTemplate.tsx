import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Tag } from "lucide-react";
import { PostTranslationDTO } from "@/lib/api/model";

interface BlogTemplateProps {
  dtos: PostTranslationDTO[];
  page: number;
  totalPages: number;
}

export default function BlogTemplate({ dtos, page, totalPages }: BlogTemplateProps) {
  return (
    <div className="bg-surface min-h-screen pb-24">
      {/* Header */}
      <header className="pt-20 pb-16 bg-surface-container-low/30 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="font-display font-bold text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
            Hukuki Bilgi Bankası
          </span>
          <h1 className="font-display text-5xl md:text-6xl font-black text-on-surface mb-6 tracking-tight">
            Güncel{" "}
            <span className="text-secondary italic font-playfair font-normal">
              Hukuki
            </span>{" "}
            Gelişmeler
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-medium leading-relaxed">
            İş ve Sosyal Güvenlik Hukuku dünyasındaki en son değişiklikleri,
            Yargıtay kararlarını ve uzman görüşlerini burada bulabilirsiniz.
          </p>
        </div>
      </header>

      {/* Post Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {dtos.map((dto) => {
            const categorySlug = dto?.categorySlug || "is-hukuku14";
            const featuredImage =
              dto.post?.featuredImage || "/blog-featured.png";
            const authorName = "Av. Gayenur KARAMAN";
            const createdAt = dto.post?.publishedDate
              ? new Date(dto.post.publishedDate).toLocaleDateString("tr-TR", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "14 Mart 2024";

            return (
              <article
                key={dto.slug}
                className="group flex flex-col bg-surface-container-lowest rounded-[2rem] overflow-hidden border border-outline-variant/5 shadow-sm hover:shadow-2xl hover:shadow-on-surface/10 transition-all duration-500 hover:-translate-y-2"
              >
                <Link
                  href={`/${categorySlug}/${dto.slug}`}
                  className="block relative aspect-[16/10] overflow-hidden"
                >
                  <Image
                    src={featuredImage}
                    alt={dto.title || ""}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </Link>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-3 mb-4 text-outline-variant">
                    <Clock size={14} />
                    <span className="text-[10px] font-bold uppercase tracking-wider">
                      {createdAt}
                    </span>
                  </div>

                  <Link
                    href={`/${categorySlug}/${dto.slug}`}
                    className="block mb-4"
                  >
                    <h2 className="font-display text-xl font-bold text-on-surface leading-tight group-hover:text-secondary transition-colors line-clamp-2">
                      {dto.title}
                    </h2>
                  </Link>

                  <p className="text-on-surface-variant text-sm leading-relaxed mb-8 line-clamp-3">
                    {dto.summary || ""}
                  </p>

                  <div className="mt-auto pt-6 border-t border-outline-variant/10 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                        {authorName
                          .split(" ")
                          .map((n: string) => n[0])
                          .join("")}
                      </div>
                      <span className="text-xs font-bold text-on-surface">
                        {authorName}
                      </span>
                    </div>
                    <Link
                      href={`/${categorySlug}/${dto.slug}`}
                      className="flex items-center gap-2 text-secondary hover:translate-x-1 transition-transform"
                    >
                      <ArrowRight size={20} />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Empty State */}
        {dtos.length === 0 && (
          <div className="text-center py-32">
            <Tag
              size={48}
              className="mx-auto text-outline-variant mb-6 opacity-20"
            />
            <p className="font-display text-xl text-on-surface-variant">
              Henüz içerik bulunmamaktadır.
            </p>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-16">
            {page > 1 && (
              <Link
                href={`/blog?page=${page - 1}`}
                className="px-4 py-2 rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Önceki
              </Link>
            )}

            <div className="flex gap-1">
              {Array.from({ length: totalPages }).map((_, i) => {
                const pageNum = i + 1;
                return (
                  <Link
                    key={pageNum}
                    href={`/blog?page=${pageNum}`}
                    className={`w-10 h-10 flex items-center justify-center rounded-full text-sm font-medium transition-colors ${
                      page === pageNum
                        ? "bg-primary text-on-primary"
                        : "text-on-surface-variant hover:bg-surface-container-high"
                    }`}
                  >
                    {pageNum}
                  </Link>
                );
              })}
            </div>

            {page < totalPages && (
              <Link
                href={`/blog?page=${page + 1}`}
                className="px-4 py-2 rounded-full border border-outline-variant/20 text-on-surface-variant hover:bg-surface-container-high transition-colors"
              >
                Sonraki
              </Link>
            )}
          </div>
        )}
      </main>
    </div>
  );
}
