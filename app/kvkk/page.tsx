import React from 'react';
import { Metadata } from 'next';
import LegalPageLayout from '@/components/sections/LegalPageLayout';

export const metadata: Metadata = {
  title: 'KVKK Aydınlatma Metni | İş Hukuku - Av. Gayenur Karaman',
  description: '6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında Av. Gayenur Karaman tarafından hazırlanan aydınlatma metni.',
};

export default function KVKKPage() {
  return (
    <LegalPageLayout
      title="KVKK Aydınlatma Metni"
      subtitle="6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında veri sorumlusu sıfatıyla yapılan aydınlatma bildirimi."
      lastUpdated="17 Nisan 2026"
    >
      <article className="legal-content space-y-10">
        {/* 1. Veri Sorumlusu */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            1. Veri Sorumlusu Bilgileri
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            6698 sayılı Kişisel Verilerin Korunması Kanunu (&ldquo;KVKK&rdquo;) uyarınca, kişisel verileriniz
            veri sorumlusu sıfatıyla aşağıda bilgileri yer alan kişi tarafından işlenmektedir:
          </p>
          <div className="bg-surface-container-low/50 rounded-xl p-6">
            <p className="font-display font-bold text-on-surface mb-2">Veri Sorumlusu</p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              Av. Gayenur Karaman
            </p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              E-posta: info@is-hukuku.com
            </p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              Web: www.is-hukuku.com
            </p>
          </div>
        </section>

        {/* 2. İşlenen Kişisel Veriler */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            2. İşlenen Kişisel Veriler
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Tarafınıza ait aşağıdaki kişisel veri kategorileri işlenmektedir:
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b-2 border-outline-variant/20">
                  <th className="text-left py-3 px-4 font-display font-bold text-on-surface">Veri Kategorisi</th>
                  <th className="text-left py-3 px-4 font-display font-bold text-on-surface">Veri Türleri</th>
                </tr>
              </thead>
              <tbody className="font-sans text-on-surface-variant">
                <tr className="border-b border-outline-variant/10">
                  <td className="py-3 px-4 font-medium text-on-surface">Kimlik Bilgileri</td>
                  <td className="py-3 px-4">Ad, soyad</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="py-3 px-4 font-medium text-on-surface">İletişim Bilgileri</td>
                  <td className="py-3 px-4">E-posta adresi, telefon numarası</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="py-3 px-4 font-medium text-on-surface">İşlem Güvenliği</td>
                  <td className="py-3 px-4">IP adresi, oturum bilgileri, log kayıtları</td>
                </tr>
                <tr className="border-b border-outline-variant/10">
                  <td className="py-3 px-4 font-medium text-on-surface">Pazarlama Bilgileri</td>
                  <td className="py-3 px-4">Çerez verileri, site kullanım istatistikleri</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 3. İşlenme Amaçları */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            3. Kişisel Verilerin İşlenme Amaçları
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Kişisel verileriniz aşağıdaki amaçlarla KVKK&rsquo;nın 5. ve 6. maddelerinde belirtilen kişisel
            veri işleme şartları dahilinde işlenmektedir:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Hukuki danışmanlık ve avukatlık hizmetlerinin yürütülmesi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                İletişim faaliyetlerinin yürütülmesi ve taleplerin karşılanması
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yasal yükümlülüklerin yerine getirilmesi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesi güvenliğinin sağlanması ve bilgi güvenliği süreçlerinin yürütülmesi
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesi kullanım analizlerinin yapılması ve hizmet kalitesinin artırılması
              </span>
            </li>
          </ul>
        </section>

        {/* 4. Hukuki Sebepler */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            4. Kişisel Verilerin İşlenmesinin Hukuki Sebebi
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Kişisel verileriniz, KVKK&rsquo;nın 5. maddesinin 2. fıkrasında öngörülen aşağıdaki hukuki
            sebepler kapsamında işlenmektedir:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Açık rıza:</strong> İletişim formu aracılığıyla bilgilerinizi paylaşmanız halinde
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Sözleşmenin ifası:</strong> Hukuki danışmanlık hizmetinin sunulması için gerekli olduğu hallerde
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Kanuni yükümlülük:</strong> Yasal düzenlemelerin gerektirdiği hallerde
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                <strong className="text-on-surface">Meşru menfaat:</strong> Temel hak ve özgürlüklerinize zarar vermemek kaydıyla, meşru menfaatlerimiz için zorunlu olduğu hallerde
              </span>
            </li>
          </ul>
        </section>

        {/* 5. Verilerin Aktarılması */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            5. Kişisel Verilerin Aktarılması
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Kişisel verileriniz, KVKK&rsquo;nın 8. ve 9. maddelerinde belirtilen kişisel veri işleme şartları
            ve amaçları çerçevesinde aşağıdaki taraflara aktarılabilmektedir:
          </p>
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yasal düzenlemeler kapsamında yetkili kamu kurum ve kuruluşları
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Hukuki süreçlerin yürütülmesi amacıyla yargı mercileri
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Web sitesi altyapı ve barındırma hizmeti sağlayıcıları
              </span>
            </li>
          </ul>
        </section>

        {/* 6. Veri Sahibinin Hakları */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            6. Kişisel Veri Sahibinin Hakları (KVKK m.11)
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            KVKK&rsquo;nın 11. maddesi kapsamında, kişisel veri sahibi olarak aşağıdaki haklara sahipsiniz:
          </p>
          <ul className="space-y-3 ml-4">
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">a)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerinizin işlenip işlenmediğini öğrenme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">b)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verileriniz işlenmişse buna ilişkin bilgi talep etme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">c)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerinizin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">ç)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Yurt içinde veya yurt dışında kişisel verilerinizin aktarıldığı üçüncü kişileri bilme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">d)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerinizin eksik veya yanlış işlenmiş olması halinde bunların düzeltilmesini isteme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">e)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                KVKK&rsquo;nın 7. maddesinde öngörülen şartlar çerçevesinde kişisel verilerinizin silinmesini veya yok edilmesini isteme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">f)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                (d) ve (e) bentleri uyarınca yapılan işlemlerin, kişisel verilerinizin aktarıldığı üçüncü kişilere bildirilmesini isteme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">g)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                İşlenen verilerinizin münhasıran otomatik sistemler vasıtasıyla analiz edilmesi suretiyle aleyhinize bir sonucun ortaya çıkmasına itiraz etme,
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 text-secondary font-bold text-sm shrink-0">ğ)</span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kişisel verilerinizin kanuna aykırı olarak işlenmesi sebebiyle zarara uğramanız halinde zararın giderilmesini talep etme.
              </span>
            </li>
          </ul>
        </section>

        {/* 7. Başvuru Yöntemi */}
        <section>
          <h2 className="font-display text-xl font-bold text-on-surface mb-4 pl-4 border-l-4 border-secondary">
            7. Başvuru Yöntemi
          </h2>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-3">
            Yukarıda belirtilen haklarınızı kullanmak için aşağıdaki yöntemlerle başvuruda bulunabilirsiniz:
          </p>
          <ul className="space-y-2 ml-4 mb-4">
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kimlik teyidi yapılmak suretiyle, yazılı başvuru ile
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Güvenli elektronik imza veya mobil imza ile imzalanmış dilekçe ile
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
              <span className="font-sans text-on-surface-variant leading-relaxed">
                Kayıtlı elektronik posta (KEP) adresi üzerinden
              </span>
            </li>
          </ul>
          <p className="font-sans text-on-surface-variant leading-relaxed mb-4">
            Başvurularınız, talebinizin niteliğine göre en kısa sürede ve en geç otuz (30) gün içinde
            ücretsiz olarak sonuçlandırılacaktır. Ancak işlemin ayrıca bir maliyet gerektirmesi halinde,
            Kişisel Verileri Koruma Kurulu tarafından belirlenen tarifedeki ücret alınabilecektir.
          </p>

          <div className="bg-surface-container-low/50 rounded-xl p-6 mt-4">
            <p className="font-display font-bold text-on-surface mb-2">Başvuru İletişim Bilgileri</p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              <strong className="text-on-surface">Veri Sorumlusu:</strong> Av. Gayenur Karaman
            </p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              <strong className="text-on-surface">E-posta:</strong> info@is-hukuku.com
            </p>
            <p className="font-sans text-on-surface-variant text-sm leading-relaxed">
              <strong className="text-on-surface">Web:</strong> www.is-hukuku.com
            </p>
          </div>
        </section>
      </article>
    </LegalPageLayout>
  );
}
