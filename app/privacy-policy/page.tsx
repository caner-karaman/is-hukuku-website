import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/sections/LegalPageLayout';

export const metadata: Metadata = {
  title: 'Gizlilik Politikası | İş Hukuku - Av. Gayenur Karaman',
  description: 'Av. Gayenur Karaman İş Hukuku web sitesi gizlilik politikası. Kişisel verilerinizin nasıl toplandığı, işlendiği ve korunduğu hakkında bilgi.',
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPageLayout
      title="Gizlilik Politikası"
      subtitle="Kişisel verilerinizin gizliliğine saygı duyuyor, verilerinizi en üst düzey güvenlik standartlarıyla koruyoruz."
      lastUpdated="17 Nisan 2026"
    >
      <article className="legal-content space-y-10">
        {/* 1. Genel Bilgi */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            1. Genel Bilgi
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            İşbu Gizlilik Politikası, Av. Gayenur Karaman tarafından işletilen <strong className="text-on-surface">is-hukuku.com</strong> web sitesini
            (&ldquo;Site&rdquo;) ziyaret eden kullanıcıların kişisel verilerinin 6698 sayılı Kişisel Verilerin Korunması
            Kanunu (&ldquo;KVKK&rdquo;) ve ilgili mevzuat kapsamında nasıl toplandığını, işlendiğini, saklandığını ve korunduğunu
            açıklamaktadır.
          </p>
          <p className="font-sans text-on-surface-variant leading-relaxed">
            Sitemizi kullanarak işbu Gizlilik Politikası&rsquo;nda belirtilen koşulları kabul etmiş sayılırsınız.
            Politikamızda yapılacak güncellemeler bu sayfada yayımlanacaktır.
          </p>
        </section>

        {/* 2. Toplanan Kişisel Veriler */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            2. Toplanan Kişisel Veriler
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Sitemiz üzerinden aşağıdaki kişisel veriler toplanabilmektedir:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Kimlik Bilgileri:</strong> Ad, soyad
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">İletişim Bilgileri:</strong> E-posta adresi, telefon numarası
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">İletişim Formu Verileri:</strong> İletişim formu aracılığıyla iletilen mesaj içerikleri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Teknik Veriler:</strong> IP adresi, tarayıcı türü ve sürümü, işletim sistemi, ziyaret edilen sayfalar, ziyaret tarihi ve saati
              </span>
            </li>
          </ul>
        </section>

        {/* 3. Verilerin İşlenme Amaçları */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            3. Verilerin İşlenme Amaçları
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Toplanan kişisel veriler aşağıdaki amaçlarla işlenmektedir:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                İletişim formları aracılığıyla gelen talep ve soruların yanıtlanması
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Hukuki danışmanlık hizmetlerinin sunulması ve yürütülmesi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesinin işlevselliğinin iyileştirilmesi ve kullanıcı deneyiminin geliştirilmesi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yasal yükümlülüklerin yerine getirilmesi
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Verilerin Paylaşılması */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            4. Verilerin Paylaşılması
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Kişisel verileriniz, aşağıdaki durumlar haricinde üçüncü kişilerle paylaşılmaz:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşlarının talebi doğrultusunda
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Hukuki danışmanlık hizmetinin ifası amacıyla gerekli olduğu hallerde ve yalnızca ilgili taraflarla
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesi barındırma ve analitik hizmetleri sunan iş ortaklarıyla (anonim veriler)
              </span>
            </li>
          </ul>
        </section>

        {/* 5. Veri Güvenliği */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            5. Veri Güvenliği
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Kişisel verilerinizin güvenliğini sağlamak amacıyla gerekli teknik ve idari tedbirler alınmaktadır.
            Bu tedbirler arasında:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                SSL/TLS şifreleme ile güvenli veri iletimi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Düzenli güvenlik güncellemeleri ve denetimleri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Erişim kontrolü ve yetkilendirme mekanizmaları
              </span>
            </li>
          </ul>
        </section>

        {/* 6. Kullanıcı Hakları */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            6. Kullanıcı Hakları
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            KVKK&rsquo;nın 11. maddesi kapsamında aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerinizin işlenip işlenmediğini öğrenme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                KVKK&rsquo;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerin silinmesini veya yok edilmesini isteme
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                İşlenen verilerin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme
              </span>
            </li>
          </ul>
        </section>

        {/* 7. İletişim */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            7. İletişim
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Gizlilik politikamız hakkında sorularınız veya kişisel verilerinize ilişkin talepleriniz için
            aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
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
