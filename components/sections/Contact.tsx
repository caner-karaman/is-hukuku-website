"use client";

import React from 'react';

export default function Contact() {
  return (
    <section id="iletisim" className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-2xl px-6 md:px-12">
        
        <div className="text-center mb-12">
          <span className="text-secondary font-sans font-bold tracking-widest uppercase text-sm mb-4">İletişim</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-8">
            Haklarınızı Savunmak İçin İlk Adımı Atın.
          </h2>
          <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
            Ön görüşme ve danışmanlık talepleriniz için bize ulaşabilirsiniz. Davanızı birlikte değerlendirelim ve en doğru stratejiyi belirleyelim.
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-[0_20px_40px_rgba(13,28,50,0.03)] border border-outline-variant/10">
          <h3 className="font-display text-2xl font-bold text-on-surface mb-8 text-center">Bize Ulaşın</h3>
          
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div className="relative">
              <input 
                type="text" 
                id="name" 
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                placeholder="Adınız Soyadınız"
                required
              />
              <label 
                htmlFor="name" 
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Adınız Soyadınız
              </label>
            </div>

            <div className="relative">
              <input 
                type="tel" 
                id="phone" 
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                placeholder="Telefon Numaranız"
                required
              />
              <label 
                htmlFor="phone" 
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Telefon Numaranız
              </label>
            </div>

            <div className="relative">
              <input 
                type="email" 
                id="email" 
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent"
                placeholder="E-Posta Adresiniz"
                required
              />
              <label 
                htmlFor="email" 
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                E-Posta Adresiniz
              </label>
            </div>

            <div className="relative mt-2">
              <textarea 
                id="message" 
                rows={4}
                className="peer w-full bg-transparent border-0 border-b border-outline-variant/30 py-3 font-sans text-on-surface focus:outline-none focus:ring-0 focus:border-b-2 focus:border-secondary transition-colors placeholder-transparent resize-none"
                placeholder="Mesajınız (Kısaca konu nedir?)"
                required
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-3.5 text-sm font-sans text-on-surface-variant transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-secondary"
              >
                Mesajınız (Kısaca konu nedir?)
              </label>
            </div>

            <button 
              type="submit"
              className="mt-4 px-8 py-4 rounded-md bg-gradient-to-r from-primary to-primary-container text-on-primary font-sans text-base font-medium flex items-center justify-center transition-transform hover:-translate-y-1 shadow-[0_20px_40px_rgba(13,28,50,0.06)] w-full"
            >
              Gönder
            </button>
            <p className="text-xs text-on-surface-variant text-center font-sans mt-2">
              Bilgileriniz kvkk kapsamında gizli tutulmaktadır.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
}
