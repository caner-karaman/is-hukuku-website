import React from 'react';
import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-surface/70 backdrop-blur-[20px] transition-all border-b border-outline-variant/10">
      <div className="mx-auto max-w-7xl px-6 md:px-12 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.webp" alt="İş Hukuku Logo" width={128} height={32} className="object-contain" />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/#uzmanlik" className="text-sm font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs">Uzmanlık Alanlarımız</Link>
          <Link href="/#neden-biz" className="text-sm font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs">Neden Biz</Link>
          <Link href="/#sss" className="text-sm font-sans font-medium hover:text-secondary transition-colors uppercase tracking-wider text-xs">Sıkça Sorulan Sorular</Link>
          <Link href="/blog" className="text-sm font-sans font-bold text-secondary border-b border-secondary pb-1 uppercase tracking-wider text-xs">Blog</Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#iletisim"
            className="px-6 py-2.5 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-xs font-bold uppercase tracking-widest transition-transform hover:scale-105"
          >
            Hukuki Destek Alın
          </Link>
        </div>

        <button className="md:hidden text-on-surface">
          <Menu size={24} />
        </button>
      </div>
    </nav>
  );
}
