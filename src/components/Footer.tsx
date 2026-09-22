import React from 'react';
import { MessageCircle, MapPin, Clock, Heart, ShieldCheck } from 'lucide-react';
import { WHATSAPP_CATALOG_URL } from '../data/dresses';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181614] text-[#FAF9F6] pt-16 pb-24 sm:pb-16 border-t border-[#2A2622]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#2C2824]">
          
          {/* Brand & Concept */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-2xl tracking-[0.16em] uppercase text-[#FAF9F6] block font-light">
              Stefanny Lima Ateliê
            </span>
            <p className="text-xs sm:text-sm text-[#A8A196] font-light leading-relaxed max-w-md">
              Vestidos de noiva sob medida e modelos prontos para cerimônias religiosas e civis em Brasília - DF. Modalidades de aluguel e venda com opções econômicas, intermediárias e alta costura, com atendimento pessoal dedicado.
            </p>
            <div className="pt-2">
              <a
                href={WHATSAPP_CATALOG_URL}
                target="_blank"
                rel="noopener noreferrer"
                id="footer-whatsapp-btn"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#FAF9F6] hover:bg-[#EFE9DF] text-[#181614] text-xs uppercase tracking-[0.14em] font-medium transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                <span>Catálogo Oficial no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89B66] font-semibold">
              Ateliê Presencial
            </h4>
            <div className="space-y-2 text-xs text-[#A8A196] font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#B89B66] shrink-0 mt-0.5" />
                <span>Brasília, Distrito Federal</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-[#B89B66] shrink-0 mt-0.5" />
                <span>Horário de Atendimento: 09h às 17h</span>
              </p>
              <p className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B89B66] shrink-0 mt-0.5" />
                <span>Atendimento preferencialmente com hora marcada (30m a 1h)</span>
              </p>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-[0.2em] text-[#B89B66] font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-[#A8A196]">
              <li>
                <a href="#modalidades" className="hover:text-white transition-colors">
                  Modelos Prontos & Sob Medida
                </a>
              </li>
              <li>
                <a href="#orcamentos" className="hover:text-white transition-colors">
                  Econômicos, Intermediários & Alta Costura
                </a>
              </li>
              <li>
                <a href="#cerimonias" className="hover:text-white transition-colors">
                  Cerimônia Religiosa & Civil
                </a>
              </li>
              <li>
                <a href="#aluguel-venda" className="hover:text-white transition-colors">
                  Aluguel & Venda
                </a>
              </li>
              <li>
                <a href="#atendimento" className="hover:text-white transition-colors">
                  Atendimento Pessoal (9h às 17h)
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#787166] gap-4">
          <p>© {new Date().getFullYear()} Stefanny Lima Ateliê. Todos os direitos reservados.</p>
          <p className="flex items-center gap-1">
            Brasília - DF <Heart className="w-3 h-3 text-[#B89B66]" />
          </p>
        </div>

      </div>
    </footer>
  );
};
