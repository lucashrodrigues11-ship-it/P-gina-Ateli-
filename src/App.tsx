import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ModalitiesSection } from './components/ModalitiesSection';
import { PricingTiersSection } from './components/PricingTiersSection';
import { CeremoniesSection } from './components/CeremoniesSection';
import { AcquisitionOptions } from './components/AcquisitionOptions';
import { PersonalServiceExperience } from './components/PersonalServiceExperience';
import { TestimonialsSection } from './components/TestimonialsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-[#24211D] font-sans antialiased selection:bg-[#E7DFC6] selection:text-[#1A1816]">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <main id="main-content">
        <Hero />

        {/* Modalidades: Modelos Prontos e Sob Medida */}
        <ModalitiesSection />

        {/* Opções de Orçamento: Econômico, Intermediário e Alta Costura */}
        <PricingTiersSection />

        {/* Cerimônias: Religiosa e Civil */}
        <CeremoniesSection />

        {/* Aquisição: Aluguel e Venda */}
        <AcquisitionOptions />

        {/* Atendimento Pessoal em Brasília */}
        <PersonalServiceExperience />

        {/* Depoimentos de Noivas de Brasília */}
        <TestimonialsSection />

        {/* FAQ - Dúvidas Frequentes */}
        <FaqSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating & Mobile Sticky WhatsApp Trigger */}
      <FloatingWhatsApp />
    </div>
  );
}
