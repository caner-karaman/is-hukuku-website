'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, FileText } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { getGetCategoriesWithPostsUrl } from '@/lib/api/endpoints/public-post-integration-api/public-post-integration-api';
import { WEBSITE_DOMAIN } from '@/lib/constants';

const FALLBACK_CATEGORIES = [
  {
    name: 'İş Hukuku',
    slug: 'is-hukuku',
    posts: [
      { title: 'İşçinin Haklı Nedenle Fesih Hakkı', slug: 'iscinin-hakli-nedenle-derhal-fesih-hakki' },
      { title: 'Fazla Çalışma Ücreti Nasıl Hesaplanır?', slug: 'fazla-calisma-nedir-fazla-calisma-ucreti-nasil-hesaplanir' }
    ]
  },
  {
    name: 'Sosyal Güvenlik',
    slug: 'sosyal-guvenlik',
    posts: [
      { title: 'Yıllık Ücretli İzin Şartları', slug: 'yillik-ucretli-izin-sartlari-sureleri-odenmemesi' }
    ]
  },
  {
    name: 'Yargıtay Kararları',
    slug: 'yargitay-kararlari',
    posts: []
  },
];

interface NavbarProps {
  initialCategories?: any[];
}

export default function Navbar({ initialCategories = [] }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileCategoriesOpen, setIsMobileCategoriesOpen] = useState(false);
  const [categories, setCategories] = useState<any[]>(initialCategories);
  const [hoveredCategorySlug, setHoveredCategorySlug] = useState<string | null>(null);

  // Fetch categories on client-side if initialCategories is empty (e.g. CSR or layout fetch failed)
  useEffect(() => {
    if (initialCategories.length === 0) {
      const url = getGetCategoriesWithPostsUrl({
        domain: WEBSITE_DOMAIN,
        lang: 'tr',
      });
      fetch(url)
        .then((res) => {
          if (!res.ok) throw new Error('Failed to fetch categories');
          return res.json();
        })
        .then((data) => {
          if (Array.isArray(data)) {
            setCategories(data);
          }
        })
        .catch((err) => console.error('Failed to load header categories:', err));
    }
  }, [initialCategories]);

  // Menü açıkken scroll'u kilitle
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const close = () => {
    setIsOpen(false);
    setIsMobileCategoriesOpen(false);
  };

  const activeCategories = categories.length > 0 ? categories : FALLBACK_CATEGORIES;

  // Set default hovered category slug once categories are ready
  useEffect(() => {
    if (activeCategories.length > 0 && !hoveredCategorySlug) {
      setHoveredCategorySlug(activeCategories[0].slug);
    }
  }, [activeCategories, hoveredCategorySlug]);

  const hoveredCategory = activeCategories.find((cat) => cat.slug === hoveredCategorySlug) || activeCategories[0];
  const hoveredCategoryPosts = hoveredCategory?.posts || [];

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-surface/70 backdrop-blur-[20px] transition-all border-b border-outline-variant/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image src="/logo.webp" alt="İş Hukuku Logo" width={128} height={32} className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {/* Kategoriler Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs py-2">
                <span>Kategoriler</span>
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180 text-outline-variant" />
              </button>
              
              {/* Mega-menu 2-column Dropdown Container */}
              <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[680px] max-w-[calc(100vw-2rem)] rounded-2xl bg-surface-container shadow-2xl border border-outline-variant/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-2 group-hover:translate-y-0 transition-all duration-200 z-50 overflow-hidden flex h-[360px]">
                
                {/* Left Panel: Categories List */}
                <div className="w-2/5 border-r border-outline-variant/10 bg-surface-container-low/50 py-4 px-2 overflow-y-auto flex flex-col gap-0.5">
                  {activeCategories.map((cat) => (
                    <Link
                      key={cat.slug}
                      href={`/${cat.slug}`}
                      onMouseEnter={() => setHoveredCategorySlug(cat.slug)}
                      onClick={close}
                      className={`w-full text-left px-4 py-2.5 text-xs font-bold transition-all rounded-lg flex items-center justify-between ${
                        hoveredCategorySlug === cat.slug
                          ? 'bg-primary/10 text-primary'
                          : 'text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <ChevronRight size={12} className={`transition-opacity duration-150 ${hoveredCategorySlug === cat.slug ? 'opacity-100 text-primary' : 'opacity-0'}`} />
                    </Link>
                  ))}
                </div>

                {/* Right Panel: Hovered Category's Posts */}
                <div className="w-3/5 py-4 px-6 overflow-y-auto flex flex-col gap-1 bg-surface-container">
                  <div className="text-[10px] font-bold text-secondary uppercase tracking-[0.2em] mb-4 border-b border-outline-variant/10 pb-2 text-left">
                    {hoveredCategory?.name || ''} Yazıları
                  </div>
                  {hoveredCategoryPosts.length > 0 ? (
                    hoveredCategoryPosts.map((post: any) => (
                      <Link
                        key={post.slug}
                        href={`/${hoveredCategory?.slug}/${post.slug}`}
                        onClick={close}
                        className="group/post flex items-start gap-2.5 py-2 px-3 rounded-lg hover:bg-surface-container-high transition-colors"
                      >
                        <FileText size={14} className="mt-0.5 text-outline-variant group-hover/post:text-secondary transition-colors shrink-0" />
                        <span className="text-[11px] font-medium text-on-surface group-hover/post:text-secondary transition-colors line-clamp-2 text-left leading-relaxed">
                          {post.title}
                        </span>
                      </Link>
                    ))
                  ) : (
                    <div className="text-[11px] text-on-surface-variant italic py-4 text-left">
                      Bu kategoride henüz yazı bulunmuyor.
                    </div>
                  )}
                </div>

              </div>
            </div>

            {/* Static links */}
            <Link
              href="/#neden-biz"
              className="font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs"
            >
              Neden Biz
            </Link>
            <Link
              href="/#sss"
              className="font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs"
            >
              Sıkça Sorulan Sorular
            </Link>
            <Link
              href="/blog"
              className="font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs"
            >
              Blog
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#iletisim"
              className="px-6 py-2.5 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105"
            >
              Destek
            </Link>
          </div>

          {/* Hamburger button */}
          <button
            className="md:hidden text-on-surface p-2 rounded-md hover:bg-surface-container transition-colors"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? 'Menüyü kapat' : 'Menüyü aç'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-surface shadow-2xl flex flex-col md:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-outline-variant/10">
          <Link href="/" onClick={close}>
            <Image src="/logo.webp" alt="İş Hukuku Logo" width={110} height={28} className="object-contain" />
          </Link>
          <button
            onClick={close}
            className="p-2 rounded-md hover:bg-surface-container transition-colors text-on-surface"
            aria-label="Menüyü kapat"
          >
            <X size={22} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 flex flex-col gap-1 px-4 py-6 overflow-y-auto">
          {/* Kategoriler Accordion */}
          <div>
            <button
              onClick={() => setIsMobileCategoriesOpen(!isMobileCategoriesOpen)}
              className="w-full flex items-center justify-between px-4 py-3 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-colors text-on-surface hover:text-secondary hover:bg-surface-container"
            >
              <span>Kategoriler</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 text-outline-variant ${
                  isMobileCategoriesOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-200 ${
                isMobileCategoriesOpen ? 'max-h-[500px] opacity-100 py-2 overflow-y-auto' : 'max-h-0 opacity-0'
              }`}
            >
              {activeCategories.map((cat) => (
                <div key={cat.slug} className="flex flex-col gap-1">
                  <Link
                    key={cat.slug}
                    href={`/${cat.slug}`}
                    onClick={close}
                    className="px-4 py-2 rounded-md font-sans text-xs font-bold uppercase tracking-wider text-on-surface hover:text-secondary hover:bg-surface-container transition-colors"
                  >
                    {cat.name}
                  </Link>
                  {/* Indented post list under category in mobile */}
                  {cat.posts && cat.posts.length > 0 && (
                    <div className="pl-6 flex flex-col gap-1.5 border-l border-outline-variant/10 ml-4 mb-2">
                      {cat.posts.slice(0, 3).map((post: any) => (
                        <Link
                          key={post.slug}
                          href={`/${cat.slug}/${post.slug}`}
                          onClick={close}
                          className="py-1 text-[11px] font-medium text-on-surface-variant hover:text-secondary transition-colors line-clamp-1 text-left"
                        >
                          • {post.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <Link
            href="/#neden-biz"
            onClick={close}
            className="px-4 py-3 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-colors text-on-surface hover:text-secondary hover:bg-surface-container"
          >
            Neden Biz
          </Link>
          <Link
            href="/#sss"
            onClick={close}
            className="px-4 py-3 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-colors text-on-surface hover:text-secondary hover:bg-surface-container"
          >
            Sıkça Sorulan Sorular
          </Link>
          <Link
            href="/blog"
            onClick={close}
            className="px-4 py-3 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-colors text-on-surface hover:text-secondary hover:bg-surface-container"
          >
            Blog
          </Link>
        </nav>

        {/* CTA */}
        <div className="px-4 py-6 border-t border-outline-variant/10">
          <Link
            href="/#iletisim"
            onClick={close}
            className="block w-full text-center px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
          >
            Destek
          </Link>
        </div>
      </div>
    </>
  );
}

