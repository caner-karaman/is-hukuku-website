'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '/#uzmanlik', label: 'Uzmanlık Alanlarımız' },
  { href: '/#neden-biz', label: 'Neden Biz' },
  { href: '/#sss', label: 'Sıkça Sorulan Sorular' },
  { href: '/blog', label: 'Blog', highlight: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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

  const close = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-surface/70 backdrop-blur-[20px] transition-all border-b border-outline-variant/10">
        <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-2" onClick={close}>
            <Image src="/logo.webp" alt="İş Hukuku Logo" width={128} height={32} className="object-contain" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={
                  link.highlight
                    ? 'font-sans font-bold text-secondary border-b border-secondary pb-1 uppercase tracking-wider text-xs'
                    : 'font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs'
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/#iletisim"
              className="px-6 py-2.5 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105"
            >
              Hukuki Destek Alın
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
        <nav className="flex-1 flex flex-col gap-1 px-4 py-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={close}
              className={`px-4 py-3 rounded-md font-sans text-sm font-medium uppercase tracking-wider transition-colors ${
                link.highlight
                  ? 'text-secondary font-bold'
                  : 'text-on-surface hover:text-secondary hover:bg-surface-container'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="px-4 py-6 border-t border-outline-variant/10">
          <Link
            href="/#iletisim"
            onClick={close}
            className="block w-full text-center px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-widest transition-transform active:scale-95"
          >
            Hukuki Destek Alın
          </Link>
        </div>
      </div>
    </>
  );
}
