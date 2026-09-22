import React, { useState, useEffect } from 'react';
import { MessageCircle, Menu, X, Sparkles, MapPin } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

interface NavbarProps {
  onOpenModal?: (dressId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FAF9F6]/95 backdrop-blur-md border-b border-[#EAE5DC] shadow-xs py-3'
          : 'bg-[#FAF9F6]/80 backdrop-blur-xs py-4 border-b border-transparent'
      }`}
    >
      {/* Top micro bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand / Logo */}
          <a
            href="#"
            id="navbar-brand-link"
            className="group flex flex-col items-start focus:outline-hidden"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase text-[#181614] font-normal group-hover:text-[#8C6D3B] transition-colors">
              Stefanny Lima
            </span>
            <div className="flex items-center gap-1.5 text-[10px] tracking-[0.25em] text-[#7A7267] uppercase font-sans -mt-0.5">
              <MapPin className="w-2.5 h-2.5 text-[#B89B66]" />
              <span>Ateliê Noivas • Brasília - DF</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-xs uppercase tracking-[0.14em] font-medium text-[#4A453E]">
            <a
              href="#modalidades"
              id="nav-link-modalidades"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Prontos & Sob Medida
            </a>
            <a
              href="#orcamentos"
              id="nav-link-orcamentos"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Valores & Orçamentos
            </a>
            <a
              href="#cerimonias"
              id="nav-link-cerimonias"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Religioso & Civil
            </a>
            <a
              href="#aluguel-venda"
              id="nav-link-aquisicao"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Aluguel & Venda
            </a>
            <a
              href="#atendimento"
              id="nav-link-atendimento"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Atendimento Pessoal
            </a>
            <a
              href="#faq"
              id="nav-link-faq"
              className="hover:text-[#181614] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#181614] hover:after:w-full after:transition-all"
            >
              Dúvidas
            </a>
          </nav>

          {/* Primary CTA button to WhatsApp Catalog */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={WHATSAPP_CATALOG_URL}
              target="_blank"
              rel="noopener noreferrer"
              id="navbar-whatsapp-cta-button"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#181614] hover:bg-[#2B2723] text-[#FAF9F6] text-xs uppercase tracking-[0.14em] font-medium transition-all shadow-xs hover:shadow-md active:scale-98"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Ver Catálogo WhatsApp</span>
            </a>
          </div>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            id="navbar-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#24211D] hover:text-[#181614] focus:outline-hidden"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-[#FAF9F6] border-b border-[#EAE5DC] px-6 py-5 shadow-lg"
        >
          <div className="flex flex-col space-y-4 text-sm font-medium tracking-[0.12em] uppercase text-[#3A352F]">
            <a
              href="#modalidades"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EAE5DC]/60"
            >
              Modelos Prontos & Sob Medida
            </a>
            <a
              href="#orcamentos"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EAE5DC]/60"
            >
              Orçamentos: Econômico a Alta Costura
            </a>
            <a
              href="#cerimonias"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EAE5DC]/60"
            >
              Cerimônia Religiosa & Civil
            </a>
            <a
              href="#aluguel-venda"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EAE5DC]/60"
            >
              Aluguel e Venda
            </a>
            <a
              href="#atendimento"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 border-b border-[#EAE5DC]/60"
            >
              Atendimento Pessoal (9h às 17h)
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1"
            >
              Perguntas Frequentes
            </a>

            <div className="pt-3">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="mobile-menu-whatsapp-btn"
                className="w-full flex items-center justify-center gap-2.5 px-4 py-3 rounded-full bg-[#181614] text-[#FAF9F6] text-xs uppercase tracking-[0.14em] font-medium shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Abrir Catálogo no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
