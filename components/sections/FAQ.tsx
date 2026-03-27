"use client";

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "İşe iade davası açmak için ne kadar sürem var?",
    answer: "İş sözleşmenizin feshinin size tebliğ edildiği tarihten itibaren 1 ay içinde arabulucuya başvurmanız yasal bir zorunluluktur. Arabuluculuk sürecinde anlaşılamaması halinde son tutanağın düzenlendiği tarihten itibaren 2 hafta içinde iş mahkemesinde dava açılmalıdır."
  },
  {
    question: "Kıdem tazminatı alabilmek için gerekli şartlar nelerdir?",
    answer: "Aynı işverene bağlı olarak en az 1 yıl çalışmış olmanız, sözleşmenizin işveren tarafından haksız nedenle feshedilmiş olması veya sizin haklı bir nedenle (askerlik, evlilik, emeklilik, sağlık vb.) sözleşmeyi feshetmeniz gerekmektedir. İstisnalar dışındaki istifalarda kıdem tazminatı hakkı doğmaz."
  },
  {
    question: "Mobbing'e uğradığımı nasıl ispatlayabilirim?",
    answer: "Mobbingin ispatı genellikle zordur, ancak imkansız değildir. İstikrarlı ve sistematik bir şekilde uygulanan psikolojik şiddetin ispatı için e-postalar, WhatsApp yazışmaları, görev yeri değişiklik belgeleri, tanık beyanları ve gerektiğinde alınacak psikolojik destek raporları delil olarak kullanılabilir."
  },
  {
    question: "Hukuki danışmanlık ücretleriniz nasıl belirleniyor?",
    answer: "Türkiye Barolar Birliği'nin her yıl yayımladığı Avukatlık Asgari Ücret Tarifesi gözetilerek, dosyanın kapsamı, türü, gerektirdiği emek ve mesai dikkate alınarak şeffaf bir şekilde belirlenir. İlk görüşmemizde süreç ve tahmini masraflar hakkında detaylı bilgi verilir."
  },
  {
    question: "İşverenim maaşımı ve fazla mesai ücretlerimi ödemiyor, ne yapmalıyım?",
    answer: "Ücretin veya fazla mesailerin ödenmemesi işçi için haklı nedenle fesih sebebidir. Öncelikli olarak noter aracılığıyla ihtarname gönderilip alacaklar talep edilir. Aksi takdirde, sözleşme feshedilerek arabuluculuk yoluyla ve sonrasında dava yoluyla tüm alacaklar (kıdem tazminatı dâhil) talep edilebilir."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="sss" className="py-24 md:py-32 bg-surface">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-on-surface tracking-tight mb-6">
            Sıkça Sorulan Sorular
          </h2>
          <p className="font-sans text-lg text-on-surface-variant max-w-2xl mx-auto">
            Hukuki haklarınız ve süreçlerle ilgili aklınıza takılan temel soruların cevaplarını derledik. Daha detaylı bilgi için bizimle iletişime geçebilirsiniz.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen ? 'bg-surface-container-high shadow-sm' : 'bg-surface-container-lowest'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full text-left flex justify-between items-center p-6 md:p-8 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <h3 className={`font-display text-lg md:text-xl font-bold transition-colors ${isOpen ? 'text-primary' : 'text-on-surface'}`}>
                    {faq.question}
                  </h3>
                  <div className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-secondary' : 'text-on-surface-variant'}`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <div 
                  className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="font-sans text-on-surface-variant leading-relaxed px-6 pb-6 md:px-8 md:pb-8 pt-0">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
