import React, { useState } from 'react';
import { FAQ_LIST, WHATSAPP_CATALOG_URL } from '../data/dresses';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0, 1]);

  const toggleAccordion = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter((i) => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-20 bg-[#F5F2EC] border-b border-[#E3DDD1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Tire Suas Dúvidas
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            Tudo o que você precisa saber sobre modalidades, aluguel, venda e a experiência de atendimento pessoal no nosso ateliê em Brasília.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4 mb-12">
          {FAQ_LIST.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl bg-[#FAF9F6] border border-[#E0D9CD] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${index}`}
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left focus:outline-hidden hover:bg-[#F7F4EE] transition-colors"
                >
                  <span className="font-serif text-lg sm:text-xl text-[#181614] font-normal pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#8C6D3B] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-[#5B544B] font-light leading-relaxed border-t border-[#EAE5DC] pt-4 bg-[#FAF9F6]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA to talk on WhatsApp */}
        <div className="text-center p-8 rounded-2xl bg-[#EFEBE3] border border-[#DDD6C9]">
          <HelpCircle className="w-8 h-8 text-[#8C6D3B] mx-auto mb-3" />
          <h3 className="font-serif text-xl text-[#181614] mb-2 font-light">
            Tem alguma outra dúvida específica para a sua data?
          </h3>
          <p className="text-xs sm:text-sm text-[#615A51] font-light max-w-lg mx-auto mb-6">
            Nossa equipe de consultoras em Brasília está pronta para responder qualquer detalhe e enviar o catálogo com fotos adicionais.
          </p>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            id="faq-whatsapp-cta"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Tirar Dúvida no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
