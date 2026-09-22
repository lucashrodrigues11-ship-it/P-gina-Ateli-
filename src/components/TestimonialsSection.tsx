import React from 'react';
import { TESTIMONIALS, WHATSAPP_CATALOG_URL } from '../data/dresses';
import { Quote, MessageCircle, Star, Heart } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-b border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Histórias Reais em Brasília
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Noivas que Viveram o Sonho Conosco
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            A emoção de subir ao altar ou celebrar o casamento civil em Brasília com um vestido que reflete perfeitamente a sua essência.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="p-6 sm:p-7 rounded-2xl bg-[#F6F3EC] border border-[#E5DFD4] flex flex-col justify-between shadow-2xs hover:shadow-xs transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#B89B66]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#B89B66]" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-[#C4B7A4]" />
                </div>

                <p className="font-serif italic text-sm sm:text-base text-[#3A352F] leading-relaxed mb-6 font-light">
                  "{item.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#E2DDD3]">
                <h4 className="font-serif text-lg text-[#181614] font-normal">
                  {item.brideName}
                </h4>
                <div className="text-[11px] text-[#7A7267] mt-1 flex items-center justify-between">
                  <span className="text-xs text-[#8C6D3B] font-medium tracking-wide">
                    {item.venue}
                  </span>
                  <span className="text-[10px] bg-[#EFECE5] px-2 py-0.5 rounded-full border border-[#DDD6CB] font-medium text-[#5E574D]">
                    {item.dressChoice}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between p-6 rounded-2xl bg-[#181614] text-[#FAF9F6] gap-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <Heart className="w-5 h-5 text-[#B89B66] shrink-0" />
            <p className="text-xs sm:text-sm font-light">
              Mais de centenas de noivas vestidas com alta costura e atendimento pessoal em Brasília e no DF.
            </p>
          </div>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="btn-depoimentos-whatsapp"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F6] text-[#181614] hover:bg-[#EFE9DF] text-xs uppercase tracking-[0.14em] font-medium transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span>Falar com Nossa Consultora</span>
          </a>
        </div>

      </div>
    </section>
  );
};
