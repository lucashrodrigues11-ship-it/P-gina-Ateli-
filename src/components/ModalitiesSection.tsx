import React from 'react';
import { Sparkles, Scissors, Clock, Layers, Check, ArrowRight, MessageCircle } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const ModalitiesSection: React.FC = () => {
  return (
    <section id="modalidades" className="py-20 bg-[#F5F2EB] border-y border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Escolha o Seu Formato
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-5">
            Modelos Prontos & Criação Sob Medida
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            Seja na agilidade de se apaixonar por uma peça do nosso acervo com ajustes milimétricos, ou na emoção de desenhar cada detalhe do zero, nosso ateliê em Brasília entrega perfeição.
          </p>
        </div>

        {/* 2-Column Minimalist Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Card 1: Modelos Prontos */}
          <div
            id="card-modelos-prontos"
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD3] shadow-xs hover:shadow-md transition-shadow relative overflow-hidden"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#EFE9DE] flex items-center justify-center text-[#181614]">
                  <Clock className="w-5 h-5 text-[#8C6D3B]" />
                </div>
                <span className="text-[11px] uppercase tracking-[0.16em] font-medium px-3 py-1 rounded-full bg-[#EFECE6] text-[#554E45] border border-[#DDD6CB]">
                  Pronta-Entrega & Acervo
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#181614] font-light mb-3">
                Modelos Prontos
              </h3>
              <p className="text-sm text-[#665F55] font-light leading-relaxed mb-6">
                Ideal para noivas que desejam experimentar o vestido pronto, sentir o toque no corpo e garantir sua escolha sem ansiedade, com todos os ajustes inclusos.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-[#3E3933]">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Acervo exclusivo e refinado:</strong> Silhuetas minimalistas, vestidos fluidos, sereias e princesas estruturados.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Ajustes de alta costura inclusos:</strong> Barra, cintura e alinhamento de busto com nossa equipe de costura.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Flexibilidade total:</strong> Opções tanto para <strong>aluguel</strong> com lavagem inclusa quanto para <strong>venda definitiva</strong>.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Prazo ágil:</strong> Ideal tanto para casamentos com antecedência quanto para prazos mais próximos.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE5DC]">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-catalogo-prontos"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#2F2B26] text-[#FAF9F6] text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ver Modelos Prontos no Catálogo</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#B89B66]" />
              </a>
            </div>
          </div>

          {/* Card 2: Sob Medida */}
          <div
            id="card-sob-medida"
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-[#D5CBB9] shadow-md hover:shadow-lg transition-shadow relative ring-1 ring-[#D8C7AA]/40"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-full bg-[#F3ECE0] flex items-center justify-center text-[#181614]">
                  <Scissors className="w-5 h-5 text-[#8C6D3B]" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] tracking-[0.16em] uppercase font-semibold bg-[#8C6D3B] text-white px-3 py-1 rounded-full shadow-2xs">
                    Criação Autoral
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.16em] font-medium px-3 py-1 rounded-full bg-[#F3EDE3] text-[#745C33] border border-[#DFD5C6]">
                    Exclusividade
                  </span>
                </div>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-[#181614] font-light mb-3">
                Criação Sob Medida
              </h3>
              <p className="text-sm text-[#665F55] font-light leading-relaxed mb-6">
                Para a noiva que sonha com um vestido único, modelado e construído exclusivamente para o seu corpo no Stefanny Lima Ateliê.
              </p>

              <div className="space-y-3.5 mb-8 text-xs sm:text-sm text-[#3E3933]">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Design Alinhado ao Seu Sonho:</strong> Definição de modelo, decote, caimento e tecidos pensados para o seu estilo de cerimônia.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Provas ao Longo do Processo de Confecção:</strong> Acompanhamento minucioso de cada etapa para conferir corte, caimento, cintura e barra.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Variedade de Tecidos & Acabamentos:</strong> Rendas, zibelines, crepes, tules e sedas selecionados para o seu projeto.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Aluguel ou Venda:</strong> Possibilidade de confecção para primeiro aluguel ou aquisição permanente para guardar.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE5DC]">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-catalogo-sob-medida"
                className="w-full inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#8C6D3B] hover:bg-[#785C2F] text-[#FAF9F6] text-xs uppercase tracking-[0.14em] font-medium transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Consultar Sob Medida no WhatsApp</span>
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
