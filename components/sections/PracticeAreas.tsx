import React from 'react';
import { Briefcase, Scale, Shield, FileText, Users, Building2 } from 'lucide-react';

const practices = [
  {
    title: "İşe İade Davaları",
    description: "Haksız fesih durumlarında işe iadenizi ve yasal haklarınızı savunuyoruz.",
    icon: Briefcase,
  },
  {
    title: "Kıdem ve İhbar Tazminatı",
    description: "İşten ayrılma sonrası hak kazandığınız tazminatların eksiksiz tahsil edilmesini sağlıyoruz.",
    icon: Scale,
  },
  {
    title: "İş Kazası ve Meslek Sağlığı",
    description: "İş kazası ve meslek hastalığı durumlarında doğan maddi/manevi tazminat haklarınız için hukuki süreç takibi.",
    icon: Shield,
  },
  {
    title: "Mobbing ve Eşit Davranmama",
    description: "İşyerinde psikolojik taciz ve ayrımcılığa karşı yanınızdayız.",
    icon: Users,
  },
  {
    title: "İş Sözleşmelerinin İncelenmesi",
    description: "Sözleşme aşamasında gelecekteki hak kayıplarınızı önlemek için detaylı inceleme ve raporlama.",
    icon: FileText,
  },
  {
    title: "Toplu İş Sözleşmesi Uyuşmazlıkları",
    description: "Sendikal uyuşmazlıklar ve toplu iş sözleşmesi süreçlerinde hukuki danışmanlık.",
    icon: Building2,
  }
];

export default function PracticeAreas() {
  return (
    <section id="uzmanlik" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-4">
              Uzmanlık Alanlarımız
            </h2>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              İş hukuku disiplininde, işçi ve işveren ilişkilerinden doğan tüm uyuşmazlıklarda profesyonel, sonuç odaklı ve güvenilir çözümler üretiyoruz.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <a href="#iletisim" className="text-secondary font-sans font-medium hover:underline underline-offset-4 decoration-1">
              Tüm Hizmetlerimizi Görüntüleyin →
            </a>
          </div>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {practices.map((practice, index) => (
            <div 
              key={index}
              className="group p-10 rounded-2xl bg-surface-container-lowest transition-all duration-500 hover:bg-primary-fixed hover:-translate-y-2 shadow-[0_20px_40px_rgba(13,28,50,0.02)] hover:shadow-[0_20px_40px_rgba(13,28,50,0.08)] cursor-pointer"
            >
              <div className="mb-6 inline-block p-4 rounded-xl bg-surface-container-low transition-colors duration-500 group-hover:bg-white/50">
                <practice.icon className="w-8 h-8 text-secondary transition-colors duration-500 group-hover:text-on-primary-fixed" />
              </div>
              <h3 className="font-display text-2xl font-bold text-on-surface mb-3 transition-colors duration-500 group-hover:text-on-primary-fixed">
                {practice.title}
              </h3>
              <p className="font-sans text-on-surface-variant leading-relaxed transition-colors duration-500 group-hover:text-on-primary-fixed-variant">
                {practice.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
