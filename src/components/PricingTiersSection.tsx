import React from 'react';
import { Tag, Sparkles, Gem, ArrowRight, MessageCircle, Check } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const PricingTiersSection: React.FC = () => {
  const tiers = [
    {
      id: 'economica',
      name: 'Linha Econômica',
      badge: 'Custo-Benefício',
      description: 'Modelos encantadores e leves com acabamento primoroso para noivas práticas que desejam economia inteligente sem abrir mão da beleza.',
      idealFor: 'Casamentos civis, mini weddings, cerimônias diurnas e noivas focadas em orçamento enxuto.',
      features: [
        'Disponível para aluguel e venda',
        'Modelos prontos com ajustes essenciais inclusos',
        'Tecidos fluidos como crepe, musseline e tule',
        'Higienização completa inclusa no aluguel'
      ],
      popular: false
    },
    {
      id: 'intermediaria',
      name: 'Linha Intermediária',
      badge: 'Mais Procurada',
      description: 'O equilíbrio perfeito entre sofisticação, detalhes bordados, rendas selecionadas e estruturas que valorizam a silhueta feminina.',
      idealFor: 'Cerimônias religiosas e civis elegantes, recepções ao ar livre e noivas que buscam caimento impecável.',
      features: [
        'Opções em modelos prontos ou sob medida',
        'Disponível para aluguel (inclusive primeiro aluguel) e venda',
        'Bordados delicados, rendas finas e caudas moderadas',
        'Provas de ajuste dedicadas no ateliê'
      ],
      popular: true
    },
    {
      id: 'alta-costura',
      name: 'Linha Alta Costura',
      badge: 'Exclusividade Autoral',
      description: 'Peças monumentais com tecidos nobres nobres de alfaiataria fina, corpetes estruturados, caudas imponentes e acabamento milimétrico.',
      idealFor: 'Grandes cerimônias religiosas, noites clássicas e noivas que sonham com uma peça de impacto memorável.',
      features: [
        'Criações sob medida autorais ou modelos prontos premium',
        'Zibeline de seda, mikados puros, rendas francesas e flores 3D',
        'Provas ao longo de todo o processo de confecção',
        'Opção de primeiro aluguel exclusivo ou compra permanente'
      ],
      popular: false
    }
  ];

  return (
    <section id="orcamentos" className="py-20 bg-[#FAF9F6] border-t border-[#EAE5DC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Para Cada Orçamento
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Opções Econômicas, Intermediárias e Alta Costura
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            No <strong>Stefanny Lima Ateliê</strong>, acreditamos que toda noiva merece viver a emoção do vestido perfeito. Por isso, oferecemos opções pensadas para diferentes planejamentos financeiros, mantendo sempre o carinho do atendimento pessoal.
          </p>
        </div>

        {/* 3 Tiers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              id={`tier-${tier.id}`}
              className={`flex flex-col justify-between p-8 rounded-2xl transition-all duration-300 relative ${
                tier.popular
                  ? 'bg-[#F6F2EA] border-2 border-[#8C6D3B] shadow-md ring-1 ring-[#8C6D3B]/20'
                  : 'bg-white border border-[#E4DDD1] shadow-2xs hover:shadow-sm'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 transform -translate-x-1/2">
                  <span className="text-[10px] tracking-[0.2em] uppercase font-semibold bg-[#8C6D3B] text-white px-4 py-1 rounded-full shadow-xs">
                    {tier.badge}
                  </span>
                </div>
              )}

              <div>
                {!tier.popular && (
                  <span className="text-[11px] uppercase tracking-[0.16em] font-medium text-[#8C6D3B] block mb-2">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-serif text-2xl text-[#181614] font-normal mb-3">
                  {tier.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#665F55] font-light leading-relaxed mb-6">
                  {tier.description}
                </p>

                <div className="p-3.5 rounded-xl bg-[#FAF9F6] border border-[#EAE5DC] mb-6">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-[#7A7267] font-semibold block mb-1">
                    Ideal para:
                  </span>
                  <p className="text-xs text-[#3E3933] font-light">
                    {tier.idealFor}
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#3E3933]">
                      <div className="w-4 h-4 rounded-full bg-[#EFECE5] text-[#8C6D3B] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-[#EAE5DC]">
                <a
                  href={WHATSAPP_CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                    tier.popular
                      ? 'bg-[#181614] hover:bg-[#2C2824] text-white shadow-xs'
                      : 'bg-[#F2ECE1] hover:bg-[#E7DFC5] text-[#24211D] border border-[#DDD5C7]'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Consultar Opções no WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Informative banner on budgeting */}
        <div className="rounded-2xl p-6 sm:p-8 bg-[#F5F1E8] border border-[#E3DBD0] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-[0.2em] font-semibold text-[#8C6D3B] block mb-1">
              Transparência & Acessibilidade
            </span>
            <p className="text-sm sm:text-base text-[#181614] font-serif">
              Não sabe qual linha escolher? Venha conversar conosco e experimentar as possibilidades.
            </p>
            <p className="text-xs text-[#6F675D] font-light mt-1">
              Apresentamos com clareza as alternativas de aluguel e venda que se adaptam exatamente ao seu momento.
            </p>
          </div>
          <a
            href={WHATSAPP_CATALOG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-full bg-[#8C6D3B] hover:bg-[#785C2F] text-white text-xs uppercase tracking-[0.14em] font-medium shrink-0 shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-white" />
            <span>Falar sobre Valores no Catálogo</span>
          </a>
        </div>

      </div>
    </section>
  );
};
