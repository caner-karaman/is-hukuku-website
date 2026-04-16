import React from "react";
import Link from "next/link";
import Image from "next/image";
import { categories } from "@/lib/blog";
import { getAllPosts as apiGetAllPosts } from "@/lib/api/endpoints/public-post-integration-api/public-post-integration-api";
import { ArrowRight, Clock, Tag } from "lucide-react";

export default async function BlogIndex() {
  const response = await apiGetAllPosts(
    {
      domain: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN || "is-hukuku.com",
      lang: "tr",
    },
    { next: { revalidate: 3600 } } as RequestInit,
  );
  const dtos = response.data || [];
  console.log("DTO", dtos);

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

      {/* Category Filter Navigation */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 -mt-8 relative z-10">
        <div className="bg-surface-container-lowest shadow-xl shadow-on-surface/5 rounded-2xl p-2 flex flex-wrap justify-center gap-2 border border-outline-variant/10 backdrop-blur-md">
          <Link
            href="/blog"
            className="px-6 py-3 rounded-xl bg-primary text-on-primary text-xs font-bold uppercase tracking-widest transition-all"
          >
            Tümü
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/${cat.slug}`}
              className="px-6 py-3 rounded-xl hover:bg-surface-container-high text-on-surface-variant text-xs font-bold uppercase tracking-widest transition-all"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
