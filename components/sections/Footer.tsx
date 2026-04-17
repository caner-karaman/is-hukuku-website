import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface pt-16 pb-8 border-t border-outline-variant/20">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image src="/logo.webp" alt="İş Hukuku Logo" width={128} height={32} className="object-contain" />
            </div>
            <p className="font-sans text-on-surface-variant leading-relaxed max-w-sm">
              İş hukuku alanında uzman, güvenilir ve çözüm odaklı hukuki danışmanlık hizmetleri.
            </p>
          </div>

          <div>
            <h4 className="font-display font-bold text-on-surface mb-6 uppercase tracking-wider text-sm">Hızlı Linkler</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#uzmanlik" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  Uzmanlık Alanları
                </a>
              </li>
              <li>
                <a href="#neden-biz" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  Neden Biz?
                </a>
              </li>
              <li>
                <a href="#sss" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  Sıkça Sorulan Sorular
                </a>
              </li>
              <li>
                <a href="#iletisim" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  İletişim
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-on-surface mb-6 uppercase tracking-wider text-sm">Yasal</h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="/privacy-policy" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/cookie-policy" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  Çerez Politikası
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="font-sans text-on-surface-variant hover:text-secondary transition-colors inline-block hover:translate-x-1 transform duration-300">
                  KVKK Aydınlatma Metni
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-outline-variant/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-sm text-on-surface-variant">
            © {currentYear} İş Hukuku. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
