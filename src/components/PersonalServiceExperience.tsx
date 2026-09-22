import React from 'react';
import { Calendar, Clock, Scissors, Heart, MessageCircle, MapPin, CheckCircle2, UserCheck } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const PersonalServiceExperience: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Agendamento Flexível',
      desc: 'Atendimento de 9h às 17h, preferencialmente com hora marcada para você não esperar, mas também recebemos você caso passe pelo ateliê.',
      icon: Calendar
    },
    {
      number: '02',
      title: 'Acolhimento & Compreensão',
      desc: 'Duração dedicada de 30 minutos a 1 hora para entender seu estilo, o local do casamento em Brasília e o orçamento planejado.',
      icon: Clock
    },
    {
      number: '03',
      title: 'Provas ao Longo do Processo',
      desc: 'Para modelos prontos, realizamos ajustes no corpo. No sob medida, realizamos provas ao longo de todo o processo de confecção até o caimento ideal.',
      icon: Scissors
    },
    {
      number: '04',
      title: 'Ajustes Finais & Entrega',
      desc: 'Revisão minuciosa de cada costura, barra e fechamento, entregando a peça pronta para o seu grande dia, seja para aluguel ou venda.',
      icon: UserCheck
    }
  ];

  return (
    <section id="atendimento" className="py-20 bg-[#F4EFE6] border-b border-[#E3DDCF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.25em] text-[#8C6D3B] font-semibold block mb-3">
            Atendimento Pessoal em Brasília
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#181614] font-light leading-tight mb-4">
            Como Funciona o Atendimento no Stefanny Lima Ateliê
          </h2>
          <p className="text-sm sm:text-base text-[#615A51] font-light leading-relaxed">
            Aqui você tem atenção atenciosa e direta com quem entende de vestidos de noiva. Nosso foco é encontrar ou confeccionar a peça certa para a sua celebração e o seu bolso.
          </p>
        </div>

        {/* 4 Step Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <div
                key={step.number}
                className="p-7 rounded-2xl bg-[#FAF9F6] border border-[#E2DDD3] shadow-2xs flex flex-col justify-between hover:shadow-md transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-serif text-3xl text-[#8C6D3B] font-light">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#EFECE5] flex items-center justify-center text-[#181614]">
                      <IconComponent className="w-4 h-4 text-[#8C6D3B]" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg text-[#181614] font-normal mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-xs text-[#635C52] font-light leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#EAE5DC] flex items-center gap-1.5 text-[11px] text-[#7A7267]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#B89B66]" />
                  <span>Atendimento pessoal com atenção dedicada</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informative Ateliê Highlights */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#FAF9F6] border border-[#DDD6CB] shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#8C6D3B] font-medium">
                <Heart className="w-4 h-4" />
                <span>Horários & Diretrizes de Atendimento</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#181614] font-light">
                Stefanny Lima Ateliê: Atenção dedicada de 9h às 17h
              </h3>
              <p className="text-sm text-[#665F55] font-light leading-relaxed">
                Nosso atendimento acontece de <strong>9h às 17h</strong>, preferencialmente com horário agendado para que possamos dedicar todo o tempo necessário (geralmente entre <strong>30 minutos a 1 hora</strong>) para ouvir suas preferências, apresentar os vestidos e tirar todas as suas dúvidas com calma.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-[#3E3933]">
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F2EB] border border-[#E7E1D6]">
                  <Clock className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                  <span><strong>Horário:</strong> 9h às 17h (preferencialmente agendado)</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F2EB] border border-[#E7E1D6]">
                  <UserCheck className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                  <span><strong>Duração:</strong> De 30 minutos a 1 hora</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F2EB] border border-[#E7E1D6]">
                  <Scissors className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                  <span><strong>Confecção:</strong> Provas ao longo de todo o processo</span>
                </div>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-[#F5F2EB] border border-[#E7E1D6]">
                  <MapPin className="w-4 h-4 text-[#8C6D3B] shrink-0" />
                  <span><strong>Localização:</strong> Brasília - DF</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-[#F5F1E8] border border-[#E4DCCF]">
              <p className="text-xs uppercase tracking-[0.14em] text-[#7A7267] mb-2 font-medium">
                Catálogo & Agendamento
              </p>
              <p className="font-serif text-lg text-[#181614] mb-3">
                Converse com a Stefanny pelo WhatsApp:
              </p>
              <p className="text-xs text-[#6F675D] mb-5">
                Veja as peças disponíveis no catálogo e marque seu horário com facilidade.
              </p>
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="btn-atendimento-whatsapp"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#181614] hover:bg-[#2C2824] text-white text-xs uppercase tracking-[0.14em] font-medium shadow-sm transition-all"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Agendar Horário no WhatsApp</span>
              </a>
              <span className="text-[10px] text-[#8A8175] mt-2 block">
                Atendimento de 9h às 17h
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

