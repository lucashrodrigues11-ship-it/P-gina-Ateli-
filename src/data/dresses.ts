import { DressItem, FaqItem, TestimonialItem } from '../types';

export const WHATSAPP_CATALOG_URL = 'https://www.whatsapp.com/catalog/556193014673/?app_absent=0';

export const DRESSES_COLLECTION: DressItem[] = [
  {
    id: 'aurora-mikado',
    name: 'Vestido Aurora Imperial',
    subtitle: 'Linhas puras em Mikado de Seda & Cauda Removível',
    ceremony: 'religiosa',
    modality: 'ambas',
    acquisition: 'ambas',
    silhouette: 'Princesa Minimalista Estruturada',
    fabric: 'Mikado de Seda Italiano & Forro de Cetim Toque de Pluma',
    description: 'Modelagem imponente com decote canoa esculpido, cintura marcada e costas com abotoamento artesanal de 80 botões forrados. Acompanha cauda catedral removível para a recepção.',
    image: 'https://images.unsplash.com/photo-1594552072238-b8a33785b261?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Decote canoa atemporal', 'Bolsos laterais invisíveis', 'Cauda catedral destacável', 'Ajuste sob medida ou pronta-entrega'],
    tag: 'Destaque Religioso'
  },
  {
    id: 'helen-chantilly',
    name: 'Vestido Hélène Rendado',
    subtitle: 'Renda Francesa Chantilly com Transparência Suave',
    ceremony: 'religiosa',
    modality: 'sob-medida',
    acquisition: 'ambas',
    silhouette: 'Sereia Suave com Cauda Fluida',
    fabric: 'Renda Chantilly Francesa & Tule Ilusion',
    description: 'Criado sob medida com bordados delicados em microcristais tchecos aplicados manualmente. Mangas longas com transparência etérea e decote em V sutil nas costas.',
    image: 'https://images.unsplash.com/photo-1546804784-896d0dca3805?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Bordado artesanal manual', 'Caimento que abraça a silhueta', 'Mangas em renda pura', 'Exclusividade de alta costura'],
    tag: 'Alta Costura'
  },
  {
    id: 'clarice-midi',
    name: 'Vestido Clarice Civil & Intimista',
    subtitle: 'Comprimento Midi Escultural em Crepe Georgette',
    ceremony: 'civil',
    modality: 'pronto',
    acquisition: 'ambas',
    silhouette: 'Midi Evasê com Decote Quadrado',
    fabric: 'Crepe Georgette Encorpado',
    description: 'A personificação do minimalismo contemporâneo para casamento no civil, cartório, almoço íntimo ou mini wedding em Brasília. Caimento leve e movimento natural.',
    image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Perfeito para cartório e mini wedding', 'Gola quadrada estruturada', 'Conforto e mobilidade para o dia', 'Disponível pronta-entrega'],
    tag: 'Favorito Civil'
  },
  {
    id: 'olivia-tailoring',
    name: 'Terno & Alfaiataria Nupcial Olivia',
    subtitle: 'Conjunto Smoking Nupcial com Pala em Cetim',
    ceremony: 'civil',
    modality: 'sob-medida',
    acquisition: 'ambas',
    silhouette: 'Alfaiataria Feminina Sob Medida',
    fabric: 'Crepe de Seda Pura com Lapela em Cetim Duchese',
    description: 'Para noivas vanguardistas que buscam elegância arquitetônica em Brasília. Blazer estruturado acinturado acompanhado de calça pantalona de corte reto impecável.',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Corte de alfaiataria fina', 'Lapela em cetim duchese', 'Peça versátil pós-casamento', 'Feito sob medida para sua silhueta'],
    tag: 'Vanguarda Civil'
  },
  {
    id: 'sophie-fluido',
    name: 'Vestido Sophie Esmalte',
    subtitle: 'Fluidez em Seda Pura com Fenda e Decote Drapeado',
    ceremony: 'ambas',
    modality: 'pronto',
    acquisition: 'aluguel',
    silhouette: 'Fluido com Decote Degagê',
    fabric: 'Seda Pura & Crepe da China',
    description: 'Inspirado na luz dourada do entardecer de Brasília. Decote degagê nas costas com drapeado sutil, fenda elegante e caimento que flutua a cada passo.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Decote drapeado nas costas', 'Leveza excepcional', 'Ideal para cerimônias ao ar livre', 'Opção de aluguel express'],
    tag: 'Mais Alugado'
  },
  {
    id: 'valerie-zibeline',
    name: 'Vestido Valérie Romântico',
    subtitle: 'Corpete Corseletado com Aplicações Florais 3D',
    ceremony: 'religiosa',
    modality: 'sob-medida',
    acquisition: 'venda',
    silhouette: 'Semi-Sereia com Saia Tule Suíço',
    fabric: 'Zibeline de Seda & Flores 3D em Organza',
    description: 'Uma joia da alta costura feita sob medida. Corpete estruturado com barbatanas francesas e pétalas de organza cortadas e moldadas uma a uma.',
    image: 'https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&w=1200&q=85',
    highlights: ['Flores 3D artesanais', 'Estrutura corseletada perfeita', 'Peça de acervo pessoal para venda', 'Ajustes finos no ateliê'],
    tag: 'Obra Autoral'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    brideName: 'Laiene',
    ceremonyType: 'Noiva Stefanny Lima',
    venue: 'Brasília - DF',
    location: 'Brasília, DF',
    quote: 'Estava vindo exatamente agradecer pelo vestido! O seu trabalho é impecável e adorei seu atendimento',
    date: 'Brasília',
    dressChoice: 'Noiva'
  },
  {
    id: '2',
    brideName: 'Lorrayne',
    ceremonyType: 'Noiva Stefanny Lima',
    venue: 'Brasília - DF',
    location: 'Brasília, DF',
    quote: 'Gratidão por transformar meu sonho em realidade. Não foi só um vestido, mas a idealização do que imaginei e você executou com maestria',
    date: 'Brasília',
    dressChoice: 'Noiva'
  },
  {
    id: '3',
    brideName: 'Regina',
    ceremonyType: 'Noiva Stefanny Lima',
    venue: 'Brasília - DF',
    location: 'Brasília, DF',
    quote: 'Gostaria de deixar aqui minha gratidão pelo atendimento e por fazer parte desse dia inesquecível',
    date: 'Brasília',
    dressChoice: 'Noiva'
  },
  {
    id: '4',
    brideName: 'Luana',
    ceremonyType: 'Noiva Stefanny Lima',
    venue: 'Brasília - DF',
    location: 'Brasília, DF',
    quote: 'queria escrever em néon o tanto que você e sua mãe me apoiaram na semana do meu casamento. Foi Deus que me levou até você!',
    date: 'Brasília',
    dressChoice: 'Noiva'
  }
];

export const FAQ_LIST: FaqItem[] = [
  {
    question: 'Qual a diferença entre o modelo Pronto e o Sob Medida?',
    answer: 'Os Modelos Prontos são vestidos do nosso acervo que você experimenta no ateliê e ajustamos para o seu caimento. Já o Sob Medida é desenvolvido exclusivamente para você, com acompanhamento de provas ao longo de todo o processo de confecção.',
    category: 'modalidades'
  },
  {
    question: 'Há opções para diferentes orçamentos no ateliê?',
    answer: 'Sim! Trabalhamos com vestidos em opções econômicas, intermediárias e alta costura, tanto para aluguel quanto para venda, atendendo com elegância à realidade e planejamento financeiro de cada noiva.',
    category: 'aluguel-venda'
  },
  {
    question: 'Como funciona o Aluguel e a Venda?',
    answer: 'Oferecemos total flexibilidade. No Aluguel, você usufrui de uma peça impecável com higienização pré e pós-evento e ajustes inclusos. Na Venda, a peça é sua em definitivo para guardar de lembrança ou usar como desejar.',
    category: 'aluguel-venda'
  },
  {
    question: 'Vocês têm modelos específicos para Casamento Civil e Religioso?',
    answer: 'Sim! Temos modelos para Cerimônia Religiosa (com caudas, cortes imponentes e tecidos clássicos) e opções fluidas, comprimentos midi e alfaiataria nupcial para Casamento Civil, cartório e celebrações intimistas.',
    category: 'modalidades'
  },
  {
    question: 'Como funciona o atendimento no Stefanny Lima Ateliê?',
    answer: 'Nosso atendimento é pessoal e acontece de terça a sábado, das 9h às 17h, preferencialmente com hora marcada (para garantir seu atendimento sem esperas), mas também recebemos você caso passe por aqui. O atendimento costuma durar entre 30 minutos a 1 hora com foco total nas suas escolhas.',
    category: 'atendimento'
  },
  {
    question: 'Como funcionam as provas no vestido sob medida?',
    answer: 'No vestido sob medida, realizamos provas ao longo de todo o processo de confecção para conferir corte, caimento, ajuste de cintura e barra até o resultado final impecável.',
    category: 'atendimento'
  }
];
