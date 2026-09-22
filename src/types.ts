export type CeremonyType = 'religiosa' | 'civil' | 'ambas';
export type ModalityType = 'pronto' | 'sob-medida' | 'ambas';
export type AcquisitionType = 'aluguel' | 'venda' | 'ambas';

export interface DressItem {
  id: string;
  name: string;
  subtitle: string;
  ceremony: CeremonyType;
  modality: ModalityType;
  acquisition: AcquisitionType;
  silhouette: string;
  fabric: string;
  description: string;
  image: string;
  highlights: string[];
  tag?: string;
}

export interface TestimonialItem {
  id: string;
  brideName: string;
  ceremonyType: string;
  venue: string;
  location: string;
  quote: string;
  date: string;
  dressChoice: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'modalidades' | 'atendimento' | 'aluguel-venda';
}
