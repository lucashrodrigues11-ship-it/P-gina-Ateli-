import React, { useState } from 'react';
import { Church, Landmark, Sparkles, MessageCircle, ArrowRight, Check } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const CeremoniesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'religiosa' | 'civil'>('religiosa');

  return (
    <section id="cerimonias" className="py-20 bg-[#FAF9F6] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            O Cenário dos Seus Sonhos
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Cerimônia Religiosa & Casamento Civil
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            Cada celebração em Brasília pede uma linguagem estética única. De grandes naves e altares históricos a cerimônias civis banhadas pela luz do cerrado.
          </p>

          {/* Interactive Switch Tabs */}
          <div className="inline-flex p-1.5 rounded-full bg-[#EFECE5] border border-[#E0D9CD] mt-8">
            <button
              type="button"
              id="tab-btn-religiosa"
              onClick={() => setActiveTab('religiosa')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                activeTab === 'religiosa'
                  ? 'bg-[#181614] text-[#FAF9F6] shadow-sm'
                  : 'text-[#665F55] hover:text-[#181614]'
              }`}
            >
              <Church className="w-3.5 h-3.5" />
              <span>Cerimônia Religiosa</span>
            </button>
            <button
              type="button"
              id="tab-btn-civil"
              onClick={() => setActiveTab('civil')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-xs uppercase tracking-[0.14em] font-medium transition-all ${
                activeTab === 'civil'
                  ? 'bg-[#181614] text-[#FAF9F6] shadow-sm'
                  : 'text-[#665F55] hover:text-[#181614]'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>Casamento Civil & Intimista</span>
            </button>
          </div>
        </div>

        {/* Dynamic Content Display */}
        {activeTab === 'religiosa' ? (
          <div
            id="panel-cerimonia-religiosa"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F7F4EE] rounded-3xl p-8 sm:p-12 border border-[#E5E0D6]"
          >
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#8C6D3B]">
                <Church className="w-4 h-4" />
                <span>Naves Clássicas, Santuários e Paróquias</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181614] font-light leading-snug">
                Presença imponente, caudas majestosas e tecidos estruturados.
              </h3>
              <p className="text-sm text-[#5B544B] font-light leading-relaxed">
                Para as noivas que sobem ao altar na Catedral de Brasília, Santuário Dom Bosco ou nas tradicionais paróquias da capital. O vestido precisa de sustentação, imponência visual de costas e sofisticação que transcende gerações.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E6E1D8]">
                  <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#181614] mb-1">
                    Tecidos Estruturados
                  </h4>
                  <p className="text-xs text-[#6F675D]">
                    Mikado italiano, Zibeline de seda pura e Cetim duchese encorpado com caimento estátua.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E6E1D8]">
                  <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#181614] mb-1">
                    Caudas & Véus
                  </h4>
                  <p className="text-xs text-[#6F675D]">
                    Caudas destacáveis de 2 a 4 metros, véus catedral em tule francês com bordado em renda chantilly.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-catalogo-religioso"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ver Modelos Religiosos no Catálogo</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl aspect-4/5 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=800&q=85"
                    alt="Vestido para cerimônia religiosa tradicional em Brasília"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-4/5 shadow-md mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=800&q=85"
                    alt="Detalhes de renda e véu para noiva religiosa"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div
            id="panel-cerimonia-civil"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center bg-[#F7F4EE] rounded-3xl p-8 sm:p-12 border border-[#E5E0D6]"
          >
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium text-[#8C6D3B]">
                <Landmark className="w-4 h-4" />
                <span>Cartório, Mini Weddings & Celebrações Diurnas</span>
              </div>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#181614] font-light leading-snug">
                Minimalismo contemporâneo, comprimentos midi e alfaiataria nupcial.
              </h3>
              <p className="text-sm text-[#5B544B] font-light leading-relaxed">
                Para o casamento no civil, almoço íntimo no Lago Sul ou mini wedding no jardim. Silhuetas leves com corte impecável, conforto superior e elegância descomplicada para celebrar com seus mais próximos.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E6E1D8]">
                  <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#181614] mb-1">
                    Comprimentos Midi & Fluidos
                  </h4>
                  <p className="text-xs text-[#6F675D]">
                    Vestidos midi com saia evasê, decote quadrado ou alças finas em crepe georgette fosco.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-[#FAF9F6] border border-[#E6E1D8]">
                  <h4 className="text-xs uppercase tracking-[0.14em] font-medium text-[#181614] mb-1">
                    Alfaiataria Feminina
                  </h4>
                  <p className="text-xs text-[#6F675D]">
                    Ternos, smokings nupciais e macacões com lapela em cetim e corte escultural sob medida.
                  </p>
                </div>
              </div>

              <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href={WHATSAPP_CATALOG_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="btn-catalogo-civil"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium transition-all shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>Ver Modelos para Casamento Civil</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="overflow-hidden rounded-2xl aspect-4/5 shadow-md">
                  <img
                    src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=800&q=85"
                    alt="Vestido de noiva midi elegante para casamento civil"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="overflow-hidden rounded-2xl aspect-4/5 shadow-md mt-6">
                  <img
                    src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=85"
                    alt="Vestido e alfaiataria nupcial contemporânea para noivas no civil"
                    className="w-full h-full object-cover hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
