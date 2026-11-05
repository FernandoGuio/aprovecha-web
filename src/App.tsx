import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { OffersShowcaseSection } from './components/OffersShowcaseSection';
import { NearbyModelSection } from './components/NearbyModelSection';
import { BenefitsSection } from './components/BenefitsSection';
import { PurposeSection } from './components/PurposeSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-[#FFFBED] text-neutral-900 flex flex-col font-sans selection:bg-[#FF9217]/25 selection:text-[#00603F]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* SECCIÓN 1: INICIO (Hero) */}
        <Hero />

        {/* SECCIÓN 2: ¿QUÉ ES APROVECHA? */}
        <AboutSection />

        {/* SECCIÓN 3: ¿CÓMO FUNCIONA? */}
        <HowItWorksSection />

        {/* SECCIÓN 4: DESCUBRE LAS OFERTAS */}
        <OffersShowcaseSection />

        {/* SECCIÓN 5: COMPRAR CERCA DE TI */}
        <NearbyModelSection />

        {/* SECCIÓN 6: BENEFICIOS DE APROVECHA */}
        <BenefitsSection />

        {/* SECCIÓN 7: NUESTRO PROPÓSITO */}
        <PurposeSection />
      </main>

      {/* SECCIÓN 8: CONTACTO Y PIE DE PÁGINA */}
      <ContactFooter />
    </div>
  );
}
