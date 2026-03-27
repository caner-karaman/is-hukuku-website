import React from 'react';
import { Target, ShieldCheck, Award } from 'lucide-react';

const reasons = [
  {
    icon: ShieldCheck,
    title: "Şeffaf Süreç Yönetimi",
    description: "Davanızın her aşamasında bilgilendirilir, sürprizlerle karşılaşmazsınız. İletişim, bizim için güvenin temelidir."
  },
  {
    icon: Target,
    title: "Sonuç Odaklı Strateji",
    description: "Sadece hukuki süreci değil, sonucun size sağlayacağı faydayı maksimize etmeyi hedefleyen bütüncül bir yaklaşım benimsiyoruz."
  },
  {
    icon: Award,
    title: "Üstün Uzmanlık",
    description: "İş hukuku alanına adanmış yılların getirdiği spesifik bilgi birikimi ile davanızda emsal niteliğinde sonuçlar alıyoruz."
  }
];

export default function WhyUs() {
  return (
    <section id="neden-biz" className="py-24 md:py-32 bg-surface-container-low">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Left Column - Asymmetric Layout */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <span className="text-secondary font-sans font-bold tracking-widest uppercase text-sm mb-4">Farkımız</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-8">
              Sıradan Bir Temsil Değil, Stratejik Bir Ortaklık.
            </h2>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed mb-10">
              Yasal haklarınızı arama süreci stresli olmak zorunda değil. Biz, davanızın yalnızca yasal yönünü değil, hayatınıza olan etkisini de önemsiyoruz. Deneyimimiz ve kararlılığımızla, size güven veren bir hukuki temsil sunuyoruz.
            </p>

            <div className="flex items-center gap-12 border-t border-outline-variant/20 pt-8 mt-4">
              <div>
                <p className="font-display text-4xl font-bold text-primary mb-1">%98</p>
                <p className="font-sans text-sm text-on-surface-variant font-medium">Başarı Oranı</p>
              </div>
              <div className="w-[1px] h-12 bg-outline-variant/20"></div>
              <div>
                <p className="font-display text-4xl font-bold text-primary mb-1">10</p>
                <p className="font-sans text-sm text-on-surface-variant font-medium">Yıllık Deneyim</p>
              </div>
            </div>
          </div>

          {/* Right Column - Stacked Cards */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`p-8 md:p-10 rounded-2xl bg-surface-container-lowest shadow-[0_20px_40px_rgba(13,28,50,0.03)] flex flex-col md:flex-row gap-6 items-start transition-transform duration-500 hover:-translate-y-1 ${idx === 1 ? 'lg:translate-x-8' : ''}`}
              >
                <div className="p-4 rounded-xl bg-surface-container shrink-0">
                  <reason.icon className="w-8 h-8 text-primary-container" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold text-on-surface mb-3">
                    {reason.title}
                  </h3>
                  <p className="font-sans text-on-surface-variant leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
