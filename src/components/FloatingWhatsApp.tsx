import React, { useState, useEffect } from 'react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const FloatingWhatsApp: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after user scrolls down 120px
      setIsVisible(window.scrollY > 120);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop Floating Action Button */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={WHATSAPP_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-desktop"
          className="group flex items-center gap-3 px-5 py-3.5 rounded-full bg-[#181614] hover:bg-[#2A2622] text-[#FAF9F6] shadow-xl border border-[#C9BAA3]/40 transition-all transform hover:-translate-y-0.5 active:scale-98"
          title="Ver Catálogo no WhatsApp"
        >
          <div className="relative">
            <MessageCircle className="w-5 h-5 text-[#25D366]" />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#25D366] animate-ping" />
          </div>
          <div className="text-left">
            <p className="text-[10px] tracking-[0.16em] uppercase text-[#B89B66] font-semibold leading-none">
              Catálogo Ateliê
            </p>
            <p className="text-xs font-medium tracking-wide leading-tight">
              Ver Vestidos no WhatsApp
            </p>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Floating Bar */}
      <div className="sm:hidden fixed bottom-4 left-4 right-4 z-40">
        <a
          href={WHATSAPP_CATALOG_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="sticky-whatsapp-mobile"
          className="w-full flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-full bg-[#181614] text-[#FAF9F6] shadow-2xl border border-[#D5CBB8]/40 active:scale-98"
        >
          <MessageCircle className="w-4 h-4 text-[#25D366]" />
          <span className="text-xs uppercase tracking-[0.14em] font-semibold">
            Acessar Catálogo WhatsApp
          </span>
        </a>
      </div>
    </>
  );
};
