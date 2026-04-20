"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    gtag: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    
    if (consent === "granted") {
      // Zaten önceden izin verdiyse, gtag servisine "granted" durumunu güncelleyelim.
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage: "granted",
          analytics_storage: "granted",
        });
      }
    } else if (!consent) {
      // "Calling setState synchronously within an effect" hatasını önlemek için asenkron yapıyoruz
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "granted");
    setIsVisible(false);

    // Onay verildiğinde GA Consent güncellenir
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "granted",
        analytics_storage: "granted",
      });
    }
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "denied");
    setIsVisible(false);

    // Reddedilirse "denied" olarak güncellenir
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("consent", "update", {
        ad_storage: "denied",
        analytics_storage: "denied",
      });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-gray-200 shadow-2xl sm:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 animate-in slide-in-from-bottom-full duration-500">
      <div className="flex-1 max-w-5xl text-sm text-gray-600">
        <h3 className="font-semibold text-gray-900 mb-1">Çerez Kullanımı</h3>
        <p>
          Size daha iyi bir deneyim sunabilmek, site trafiğimizi analiz etmek ve
          hizmetlerimizi geliştirmek amacıyla çerezler (cookies) kullanıyoruz.
          &quot;Tümünü Kabul Et&quot; butonuna tıklayarak çerez kullanımına izin vermiş
          olursunuz.
        </p>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 min-w-max mt-2 md:mt-0">
        <button
          onClick={handleDecline}
          className="px-5 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors focus:ring-4 focus:ring-gray-100"
        >
          Reddet
        </button>
        <button
          onClick={handleAccept}
          className="px-5 py-2.5 text-sm font-medium text-white bg-[--primary-color,blue-600] hover:bg-[--primary-hover,blue-700] rounded-lg transition-colors focus:ring-4 focus:ring-blue-300"
          style={{ backgroundColor: "#1e3a8a" }} // İş hukuku genel temasında genelde lacivert/koyu mavi olur, Tailwind'in bg-blue-900 u gibi
        >
          Tümünü Kabul Et
        </button>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-gray-600"
        aria-label="Kapat"
      >
        <X size={20} />
      </button>
    </div>
  );
}
