import React from 'react';
import { MessageCircle, ArrowUpRight, Sparkles, ShieldCheck, HeartHandshake, CheckCircle2 } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9F6]"
    >
      {/* Subtle organic light accent background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F4EFE6]/60 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-[#EFE9DF]/40 rounded-full blur-3xl pointer-events-none -ml-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Minimalist location & exclusivity pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F2EDE4] border border-[#E4DDD1] text-[#70675B] text-xs uppercase tracking-[0.2em] font-sans mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89B66]" />
              <span>Stefanny Lima Ateliê • Brasília - DF</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#181614] leading-[1.12] tracking-tight font-light mb-6">
              A elegância do vestido perfeito para o seu grande dia.
            </h1>

            {/* Subheading focusing on all core requirements */}
            <p className="text-base sm:text-lg text-[#5A534A] font-sans font-light leading-relaxed max-w-2xl mb-8">
              Criações <strong className="font-normal text-[#181614]">sob medida</strong> e acervo especial de <strong className="font-normal text-[#181614]">modelos prontos</strong> para cerimônias <strong className="font-normal text-[#181614]">religiosas</strong> e <strong className="font-normal text-[#181614]">civis</strong>. Opções em <strong className="font-normal text-[#181614]">aluguel</strong> e <strong className="font-normal text-[#181614]">venda</strong> com linhas <strong className="font-normal text-[#181614]">econômicas, intermediárias e alta costura</strong>, ajustadas ao seu orçamento.
            </p>

            {/* Value pillars chips */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-9 text-xs text-[#3E3933] font-medium tracking-wide">
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EC] border border-[#E9E4DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B66] shrink-0" />
                <span>Prontos & Sob Medida</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EC] border border-[#E9E4DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B66] shrink-0" />
                <span>Religioso & Civil</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EC] border border-[#E9E4DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B66] shrink-0" />
                <span>Aluguel & Venda</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F5F2EC] border border-[#E9E4DC]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B66] shrink-0" />
                <span>Vários Orçamentos</span>
              </div>
            </div>

            {/* CTAs with explicit WhatsApp Catalog URL */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-primary-whatsapp-button"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-[#181614] hover:bg-[#2F2A25] text-[#FAF9F6] text-sm uppercase tracking-[0.14em] font-medium shadow-md hover:shadow-lg transition-all active:scale-98 group"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] transition-transform group-hover:scale-110" />
                <span>Acessar Catálogo no WhatsApp</span>
                <ArrowUpRight className="w-4 h-4 text-[#A89F91] group-hover:text-white transition-colors" />
              </a>

              <a
                href="#atendimento"
                id="hero-secondary-appointment-button"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#F4F1EA] hover:bg-[#EAE5DC] text-[#24211D] border border-[#DDD6CB] text-sm uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <HeartHandshake className="w-4 h-4 text-[#8C6D3B]" />
                <span>Como Funciona o Atendimento</span>
              </a>
            </div>

            {/* Micro reassurance */}
            <div className="flex flex-wrap items-center gap-3 mt-6 text-xs text-[#7A7267]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                Catálogo WhatsApp atualizado
              </span>
              <span>•</span>
              <span>Atendimento pessoal de 9h às 17h</span>
              <span>•</span>
              <span>Preferencialmente com hora marcada (30m a 1h)</span>
            </div>

          </div>

          {/* Right Column: High Fashion Editorial Imagery */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Photo Frame */}
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border border-[#EAE5DC] bg-white aspect-3/4">
                <img
                  src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=85"
                  alt="Vestido de noiva minimalista de alta costura em Brasília"
                  className="w-full h-full object-cover object-center transform hover:scale-102 transition-transform duration-700"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating card on image bottom */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-[#EAE5DC] shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D3B] font-semibold block">
                      Coleção Brasília
                    </span>
                    <p className="font-serif text-base text-[#181614] leading-tight">
                      Seda, Linhas Puras & Sofisticação
                    </p>
                  </div>
                  <a
                    href={WHATSAPP_CATALOG_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-full bg-[#181614] text-white hover:bg-[#8C6D3B] transition-colors"
                    title="Ver no Catálogo"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Subtle back decorative box */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-2xl border border-[#D5CEC2] -z-10 pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
