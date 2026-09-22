import React from 'react';
import { KeyRound, ShoppingBag, Check, MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const AcquisitionOptions: React.FC = () => {
  return (
    <section id="aluguel-venda" className="py-20 bg-[#F4F0E8] border-t border-[#E8E2D7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Flexibilidade & Conforto
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Aluguel ou Venda: Você Decide
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            No Stefanny Lima Ateliê em Brasília, todas as noivas recebem o mesmo padrão de carinho e atendimento dedicado, seja para alugar uma peça de acervo ou adquirir sua criação dos sonhos.
          </p>
        </div>

        {/* 2 Column Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Card Aluguel */}
          <div
            id="card-opcao-aluguel"
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-[#E0D9CD] shadow-xs"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#8C6D3B] mb-6">
                <KeyRound className="w-5 h-5" />
              </div>

              <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#8C6D3B] block mb-2">
                Consciência & Praticidade
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181614] font-light mb-4">
                Modalidade Aluguel
              </h3>
              <p className="text-sm text-[#665F55] font-light leading-relaxed mb-6">
                Use um vestido impecável de alta costura no seu grande dia com investimento otimizado e zero preocupação com conservação pós-festa.
              </p>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#3E3933]">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Higienização inclusa:</strong> Lavagem ecológica especializada pré e pós-evento.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Ajustes finos no ateliê:</strong> Ajustes de corpo, busto e bainha executados pela nossa equipe.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Opção de Primeiro Aluguel:</strong> Estreie um modelo desenhado sob medida especialmente para você.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Devolução simples:</strong> Sem burocracia ou exigência de espaço no armário pós-casamento.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE5DC]">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-aluguel-whatsapp"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ver Opções de Aluguel no Catálogo</span>
              </a>
            </div>
          </div>

          {/* Card Venda */}
          <div
            id="card-opcao-venda"
            className="flex flex-col justify-between p-8 sm:p-10 rounded-2xl bg-[#FAF9F6] border border-[#E0D9CD] shadow-xs"
          >
            <div>
              <div className="w-12 h-12 rounded-full bg-[#EFE9DF] flex items-center justify-center text-[#8C6D3B] mb-6">
                <ShoppingBag className="w-5 h-5" />
              </div>

              <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#8C6D3B] block mb-2">
                Memória & Patrimônio Afetivo
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181614] font-light mb-4">
                Modalidade Venda
              </h3>
              <p className="text-sm text-[#665F55] font-light leading-relaxed mb-6">
                O vestido pertence inteiramente a você. Uma peça única para guardar com carinho, passar para as próximas gerações ou usar em viagens.
              </p>

              <div className="space-y-3 mb-8 text-xs sm:text-sm text-[#3E3933]">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Propriedade definitiva:</strong> A peça é 100% sua, sem prazos nem devoluções.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Ideal para Destination Weddings:</strong> Perfeito para casamentos fora de Brasília ou na praia, com tempo livre.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Customização permanente:</strong> Liberdade para encurtar a cauda ou tingir para reutilizar como vestido de festa.</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full bg-[#EFEBE4] text-[#8C6D3B] flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span><strong>Capa protetora de luxo:</strong> Embalagem respirável em TNT estruturado e cabide personalizado do ateliê.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#EAE5DC]">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-venda-whatsapp"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Ver Opções de Venda no Catálogo</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
