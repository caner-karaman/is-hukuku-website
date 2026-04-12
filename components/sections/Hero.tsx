import React from 'react';
import Image from 'next/image';

export default function Hero() {
  return (
    <>
      {/* Hero Section */}
      <header className="relative pt-24 pb-32 md:pt-40 md:pb-48 overflow-hidden bg-surface">
        <div className="mx-auto max-w-7xl px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          <div className="lg:col-span-7 flex flex-col items-start text-left animate-in fade-in slide-in-from-bottom-8 duration-700">
            <h1 className="font-display text-5xl md:text-[3.5rem] leading-[1.1] font-bold text-on-surface tracking-[-0.02em] mb-6">
              Hukuki Süreçlerinizde Yanınızda Olan <br className="hidden md:block" /> Güçlü Bir Ortak.
            </h1>
            <p className="font-sans text-lg md:text-xl text-on-surface-variant max-w-2xl leading-relaxed mb-10">
              İş hukuku alanında yılların deneyimiyle, haklarınızı savunmak ve davanızı en iyi şekilde temsil etmek için buradayız. Güvenilir, şeffaf ve sonuç odaklı çözümler.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#iletisim"
                className="px-8 py-4 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-base font-medium flex items-center justify-center transition-transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(13,28,50,0.06)]"
              >
                Hukuki Destek Alın
              </a>
              <a
                href="#neden-biz"
                className="px-8 py-4 rounded-md bg-transparent border border-secondary/10 text-secondary font-sans text-base font-medium flex items-center justify-center transition-colors hover:bg-secondary/5"
              >
                Daha Fazla Bilgi
              </a>
            </div>
          </div>

          {/* Asymmetrical Right Side blank/image space */}
          <div className="lg:col-span-5 h-[400px] lg:h-[600px] rounded-2xl bg-surface-container-low shadow-[0_20px_40px_rgba(13,28,50,0.06)] relative overflow-hidden group">
            <Image
              src="/hero-image.png"
              alt="Hukuki Temsil"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            {/* Soft overlay gradient to represent architectural scale and make text readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/20 to-transparent opacity-90 transition-opacity duration-1000"></div>
            {/* Signature Texture Grain Overlay */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }}></div>
            <div className="absolute bottom-8 left-8 right-8 z-10">
              <div className="h-1 w-12 bg-secondary mb-4"></div>
              <p className="font-display text-2xl font-semibold text-white">Adaletin Gücü</p>
              <p className="font-sans text-sm text-white/80 mt-2">Tecrübe ve Kararlılıkla.</p>
            </div>
          </div>

        </div>
      </header>
    </>
  );
}
