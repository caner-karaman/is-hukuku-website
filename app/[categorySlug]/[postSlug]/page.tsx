import React from 'react';
import Image from 'next/image';
import { Gavel, ArrowRight, Link as LinkIcon, Mail, Scale } from 'lucide-react';

export default async function PostPage(props: {
  params: Promise<{ categorySlug: string; postSlug: string }>;
}) {
  const { categorySlug, postSlug } = await props.params;

  // Mock data representing what would typically come from a CMS or Database
  const post = {
    title: "İş Hukukunda Yeni Dönem: Uzaktan Çalışma ve Haklarınız",
    category: "İş Hukuku",
    createdAt: "14 Mart 2024",
    updatedAt: "15 Mart 2024",
    author: {
      name: "Av. Emre Akman",
      role: "Kıdemli Ortak, İş Hukuku Departmanı",
      bio: "İstanbul Barosu'na kayıtlı olarak 15 yıldır İş ve Sosyal Güvenlik Hukuku alanında uzmanlaşmıştır. Birçok kurumsal firmanın hukuk müşavirliğini yürütmektedir.",
      image: "/author-portrait.png" // Would be a real image in production
    },
    featuredImage: "/blog-featured.png",
    tags: ["#UzaktanCalisma", "#IsHukuku", "#IsKanunu", "#YargitayKararlari"],
    faqs: [
      "Kıdem tazminatı nasıl hesaplanır?",
      "İşe iade davası şartları nelerdir?",
      "Fazla mesai ücreti nasıl talep edilir?",
      "Yıllık izin hakları nelerdir?"
    ]
  };

  return (
    <article className="bg-surface min-h-screen">
      {/* Header / Hero Area */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 pt-12 mb-16">
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-4">
            <span className="font-sans text-xs uppercase tracking-[0.2em] text-secondary font-bold">{post.category}</span>
            <span className="w-8 h-[1px] bg-outline-variant/30"></span>
            <div className="flex flex-col md:flex-row md:gap-4 gap-1">
              <span className="font-sans text-xs text-on-surface-variant">Oluşturma: {post.createdAt}</span>
              <span className="hidden md:block font-sans text-xs text-outline-variant/50">|</span>
              <span className="font-sans text-xs text-on-surface-variant">Güncelleme: {post.updatedAt}</span>
            </div>
          </div>

          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-on-surface max-w-5xl">
            İş Hukukunda Yeni Dönem: <span className="text-secondary italic font-playfair font-normal">Uzaktan Çalışma</span> ve Haklarınız
          </h1>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-container-high relative">
              <div className="absolute inset-0 bg-primary/10 flex items-center justify-center text-primary font-bold">EA</div>
            </div>
            <div>
              <p className="font-display font-bold text-sm text-on-surface uppercase tracking-tight">{post.author.name}</p>
              <p className="font-sans text-xs text-on-surface-variant font-medium">{post.author.role}</p>
            </div>
          </div>

          <div className="mt-4 rounded-2xl overflow-hidden aspect-[21/9] relative shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)]">
            <Image 
              src={post.featuredImage} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/20 to-transparent"></div>
          </div>
        </div>
      </header>

      {/* Main Content Layout */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24">
        {/* Main Column */}
        <div className="lg:col-span-8">
          <div className="bg-surface-container-lowest/50 backdrop-blur-sm p-8 md:p-16 rounded-[2.5rem] shadow-sm border border-outline-variant/5">
            <div className="prose prose-lg max-w-none prose-slate">
              <h2 className="font-display text-3xl font-bold mb-8 text-on-surface tracking-tight">Pandemi Sonrası Hukuki Rejim</h2>
              
              <p className="text-lg leading-relaxed text-on-surface/90 mb-8 first-letter:text-6xl first-letter:font-playfair first-letter:float-left first-letter:mr-4 first-letter:text-secondary first-letter:leading-[0.8] first-letter:mt-2">
                Uzaktan çalışma, Türk İş Hukuku literatürüne 2016 yılında girmiş olmasına rağmen, asıl uygulama alanını son üç yılda bulmuştur. 4857 sayılı İş Kanunu&apos;nun 14. maddesinde yapılan düzenlemeler, işçinin iş görme edimini evinde veya teknolojik iletişim araçları ile işyeri dışında yerine getirmesini yasal bir zemine oturtmuştur.
              </p>

              <p className="text-lg leading-relaxed text-on-surface/90 mb-12">
                Bu yeni modelde en çok tartışılan husus, &quot;mesai saatleri&quot; ve &quot;ulaşılamama hakkı&quot; kavramlarıdır. İşverenlerin dijital araçlar vasıtasıyla işçiye 7/24 ulaşabilme imkanı, dinlenme sürelerinin ihlaline yol açabilmektedir.
              </p>

              {/* Insight Box */}
              <div className="my-16 p-8 border-l-4 border-secondary bg-surface-container-low/50 rounded-r-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Gavel size={64} />
                </div>
                <div className="flex items-center gap-3 mb-4 text-secondary">
                  <Gavel size={20} className="fill-secondary" />
                  <span className="font-display font-bold text-xs uppercase tracking-[0.2em]">Hukuki İpucu</span>
                </div>
                <h3 className="font-display font-bold text-xl mb-4 text-on-surface">Ekipman ve Giderlerin Karşılanması</h3>
                <p className="text-on-surface-variant italic leading-relaxed">
                  Aksi kararlaştırılmadıkça, uzaktan çalışma için gerekli olan ekipmanların (bilgisayar, internet, ergonomik koltuk vb.) tedariki ve kullanımından doğan giderler işveren tarafından karşılanmalıdır. Bu giderlerin işçi üzerine bırakılması, iş akdinin haksız feshine gerekçe oluşturabilir.
                </p>
              </div>

              <h3 className="font-display text-2xl font-bold mt-12 mb-6 text-on-surface tracking-tight">İş Kazası ve Uzaktan Çalışma</h3>
              <p className="text-lg leading-relaxed text-on-surface/90 mb-8">
                Yargıtay&apos;ın güncel kararları ışığında, uzaktan çalışma esnasında evde meydana gelen kazaların da &quot;iş kazası&quot; sayılabilmesi için illiyet bağı aranmaktadır. Mutfağa kahve almaya giderken düşen bir çalışanın durumu ile mesai saatleri içinde çalışma masasında yaşanan bir olay farklı hukuki sonuçlar doğurabilmektedir.
              </p>

              <ul className="space-y-4 my-12 list-none p-0">
                {[
                  "Yazılı sözleşme yapılması zorunluluğu",
                  "İş sağlığı ve güvenliği eğitimlerinin dijital ortamda tamamlanması",
                  "Veri güvenliği ve gizlilik protokollerinin güncellenmesi"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-xl hover:bg-surface-container-low transition-colors text-on-surface font-medium border border-transparent hover:border-outline-variant/10">
                    <span className="text-secondary font-bold text-xl leading-none">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg leading-relaxed text-on-surface/90">
                Sonuç olarak, uzaktan çalışma modeli her ne kadar esneklik sağlasa da, hem işveren hem de işçi açısından ciddi riskler barındırmaktadır. Hak kayıplarını önlemek adına profesyonel bir hukuki danışmanlık almak kritik önem taşır.
              </p>
            </div>

            {/* Tags */}
            <div className="mt-16 pt-8 border-t border-outline-variant/20 flex flex-wrap gap-3">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-2 bg-surface-container-high text-on-surface-variant text-xs rounded-full font-bold tracking-tight hover:bg-secondary/10 hover:text-secondary transition-colors cursor-pointer capitalize">
                  {tag.replace('#', '')}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-12">
          {/* Author Card */}
          <div className="bg-surface-container-lowest p-8 rounded-[2rem] shadow-sm border border-outline-variant/10 sticky top-28 overflow-hidden group z-20">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Yazar Hakkında</h4>
            <div className="flex flex-col gap-6">
              <div className="w-24 h-24 rounded-2xl bg-surface-container-high overflow-hidden shadow-lg relative mx-auto lg:mx-0">
                <div className="absolute inset-0 bg-primary/5 flex items-center justify-center text-primary text-2xl font-bold">EA</div>
              </div>
              <div className="text-center lg:text-left">
                <h5 className="font-display font-bold text-xl text-on-surface mb-3">{post.author.name}</h5>
                <p className="text-sm text-on-surface-variant leading-relaxed font-medium">
                  {post.author.bio}
                </p>
              </div>
              <div className="flex gap-4 justify-center lg:justify-start pt-2">
                <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
                  <LinkIcon size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center text-secondary hover:bg-secondary hover:text-white transition-all transform hover:-translate-y-1">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links / FAQ */}
          <div className="bg-surface-container-low/50 p-8 rounded-[2rem] border border-outline-variant/10">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-on-surface-variant mb-8">Sıkça Sorulan Sorular</h4>
            <nav className="flex flex-col gap-5">
              {post.faqs.map((faq, index) => (
                <a key={index} href="#" className="group flex items-start justify-between gap-4 text-sm font-bold text-on-surface hover:text-secondary transition-all">
                  <span className="leading-snug">{faq}</span>
                  <ArrowRight size={18} className="shrink-0 transform group-hover:translate-x-1 transition-transform text-outline-variant group-hover:text-secondary" />
                </a>
              ))}
            </nav>
          </div>

          {/* Prominent CTA */}
          <div className="relative p-10 rounded-[2.5rem] bg-primary overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 transform scale-150 rotate-12 group-hover:rotate-0 transition-transform duration-700">
              <Scale size={160} color="white" />
            </div>
            <div className="relative z-10">
              <h4 className="font-display font-bold text-2xl text-white mb-6 leading-[1.2]">İş Hukuku Konusunda Desteğe mi İhtiyacınız Var?</h4>
              <p className="text-white/70 text-sm mb-10 leading-relaxed font-medium">
                Uzman kadromuzla yanınızdayız. İlk görüşme için hemen randevu oluşturun ve haklarınızı güvence altına alın.
              </p>
              <button className="w-full bg-secondary-container text-primary-container py-4 rounded-xl font-display font-bold uppercase text-xs tracking-[0.2em] hover:bg-white transition-all transform hover:-translate-y-1">
                Hukuki Destek Alın
              </button>
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="p-8 border-2 border-dashed border-outline-variant/20 rounded-[2rem] text-center flex flex-col items-center gap-4 bg-surface/50">
             <div className="w-16 h-16 rounded-full bg-surface-container-high flex items-center justify-center text-secondary opacity-50">
               <Scale size={32} />
             </div>
             <div>
               <p className="text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-black">İstanbul Barosu Kayıtlı Bürodur</p>
               <p className="text-[10px] text-outline-variant mt-2 italic font-medium">Baro Reklam Yasağına Uygundur</p>
             </div>
          </div>
        </aside>
      </section>
    </article>
  );
}
