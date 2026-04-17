import React from 'react';

interface LegalPageLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalPageLayout({ title, subtitle, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <div className="bg-surface min-h-screen pb-24">
      {/* Header */}
      <header className="pt-20 pb-16 bg-surface-container-low/30 border-b border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <span className="font-display font-bold text-xs uppercase tracking-[0.3em] text-secondary mb-4 block">
            Yasal
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-black text-on-surface mb-6 tracking-tight">
            {title}
          </h1>
          <p className="max-w-2xl mx-auto text-on-surface-variant font-medium leading-relaxed">
            {subtitle}
          </p>
          <p className="mt-4 text-xs text-outline-variant uppercase tracking-wider font-bold">
            Son güncelleme: {lastUpdated}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 md:px-12 mt-16">
        <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 border border-outline-variant/5 shadow-sm">
          {children}
        </div>
      </main>
    </div>
  );
}
