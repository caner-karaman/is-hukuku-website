import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/sections/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Çerez Politikası | İş Hukuku - Av. Gayenur Karaman',
  description: 'Av. Gayenur Karaman İş Hukuku web sitesinde kullanılan çerezler, türleri ve yönetimi hakkında detaylı bilgi.',
};

export default function CookiePolicyPage() {
  return (
    <LegalPageLayout
      title="Çerez Politikası"
      subtitle="Web sitemizde kullanılan çerezler ve bunların nasıl yönetileceği hakkında bilgilendirme."
      lastUpdated="17 Nisan 2026"
    >
      <article className="legal-content space-y-10">
        {/* 1. Çerez Nedir? */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            1. Çerez Nedir?
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Çerezler (cookies), web sitemizi ziyaret ettiğinizde tarayıcınız aracılığıyla cihazınıza
            yerleştirilen küçük metin dosyalarıdır. Bu dosyalar, web sitesinin düzgün çalışmasını sağlamak,
            kullanıcı deneyimini iyileştirmek ve site kullanımına ilişkin istatistiksel veriler toplamak
            amacıyla kullanılmaktadır.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Çerezler, kişisel bilgilerinize erişim sağlamaz ve cihazınıza zarar veremez. Yalnızca tarayıcınız
            tarafından okunabilir bilgiler içerir.
          </p>
        </section>

        {/* 2. Kullanılan Çerez Türleri */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            2. Kullanılan Çerez Türleri
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Web sitemizde aşağıdaki türde çerezler kullanılmaktadır:
          </p>

          {/* Cookie type cards */}
          <div className="space-y-4">
            <div className="bg-surface-container-low/50 rounded-xl p-6">
              <h3 className="font-display font-bold text-on-surface mb-2">Zorunlu Çerezler</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                Web sitesinin temel işlevlerinin çalışması için gerekli olan çerezlerdir. Bu çerezler olmadan
                site düzgün şekilde çalışamaz. Oturum yönetimi, güvenlik ve erişilebilirlik gibi temel
                işlevleri destekler. Bu çerezler devre dışı bırakılamaz.
              </p>
            </div>

            <div className="bg-surface-container-low/50 rounded-xl p-6">
              <h3 className="font-display font-bold text-on-surface mb-2">Performans ve Analitik Çerezleri</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                Ziyaretçilerin siteyi nasıl kullandığını anlamamıza yardımcı olan çerezlerdir. Sayfa
                görüntüleme sayıları, ziyaret süreleri ve hata raporları gibi anonim istatistiksel veriler
                toplar. Bu veriler, site performansını iyileştirmek için kullanılır.
              </p>
            </div>

            <div className="bg-surface-container-low/50 rounded-xl p-6">
              <h3 className="font-display font-bold text-on-surface mb-2">İşlevsellik Çerezleri</h3>
              <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
                Kullanıcı tercihlerini hatırlayarak daha kişiselleştirilmiş bir deneyim sunmamızı sağlayan
                çerezlerdir. Dil tercihi, tema seçimi ve benzer ayarları saklar.
              </p>
            </div>
          </div>
        </section>

        {/* 3. Çerezlerin Kullanım Amaçları */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            3. Çerezlerin Kullanım Amaçları
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Web sitemizde çerezler aşağıdaki amaçlarla kullanılmaktadır:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesinin teknik olarak düzgün çalışmasını sağlamak
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kullanıcı deneyimini iyileştirmek ve kişiselleştirmek
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Site trafiğini analiz etmek ve ziyaretçi istatistiklerini oluşturmak
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Güvenlik önlemlerini uygulamak ve kötü amaçlı kullanımı önlemek
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kullanıcı tercihlerini (dil, bölge vb.) hatırlamak
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Çerez Yönetimi ve Tercihler */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            4. Çerez Yönetimi ve Tercihler
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Çerezleri tarayıcı ayarlarınız üzerinden yönetebilir, devre dışı bırakabilir veya silebilirsiniz.
            Ancak zorunlu çerezlerin devre dışı bırakılması durumunda web sitesinin bazı işlevleri
            çalışmayabilir.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Tarayıcınıza göre çerez ayarlarınızı aşağıdaki şekilde yönetebilirsiniz:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Google Chrome:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve diğer site verileri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Mozilla Firefox:</strong> Ayarlar → Gizlilik ve Güvenlik → Çerezler ve Site Verileri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Safari:</strong> Tercihler → Gizlilik → Çerezler ve web sitesi verileri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Microsoft Edge:</strong> Ayarlar → Çerezler ve site izinleri → Çerezleri yönet ve sil
              </span>
            </li>
          </ul>
        </section>

        {/* 5. Üçüncü Taraf Çerezleri */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            5. Üçüncü Taraf Çerezleri
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Web sitemizde, hizmet kalitesini artırmak amacıyla üçüncü taraf hizmet sağlayıcılara ait
            çerezler de kullanılabilmektedir. Bu çerezler, ilgili üçüncü tarafların gizlilik politikalarına
            tabidir.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Üçüncü taraf çerezleri hakkında detaylı bilgi almak için ilgili hizmet sağlayıcıların gizlilik
            politikalarını incelemenizi öneririz.
          </p>
        </section>

        {/* 6. İletişim */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            6. İletişim
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Çerez politikamız hakkında sorularınız veya talepleriniz için aşağıdaki iletişim kanallarından
            bize ulaşabilirsiniz:
          </p>
          <div className="bg-surface-container-low/50 rounded-xl p-6 mt-4">
            <p className="font-display font-bold text-on-surface mb-2">Av. Gayenur Karaman</p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              E-posta: info@is-hukuku.com
            </p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              Web: www.is-hukuku.com
            </p>
          </div>
        </section>
      </article>
    </LegalPageLayout>
  );
}
