import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { AboutSection } from './components/AboutSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { AprovechologoSection } from './components/AprovechologoSection';
import { PlansSection } from './components/PlansSection';
import { OffersShowcaseSection } from './components/OffersShowcaseSection';
import { NearbyModelSection } from './components/NearbyModelSection';
import { BenefitsSection } from './components/BenefitsSection';
import { PurposeSection } from './components/PurposeSection';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const [howItWorksTab, setHowItWorksTab] = useState<'tenderos' | 'compradores'>('tenderos');
  const [contactRole, setContactRole] = useState<'tendero' | 'comprador'>('tendero');
  const [selectedPlan, setSelectedPlan] = useState<string>('');

  const handleSelectTendero = () => {
    setHowItWorksTab('tenderos');
    setContactRole('tendero');
  };

  const handleSelectComprador = () => {
    setHowItWorksTab('compradores');
    setContactRole('comprador');
  };

  return (
    <div className="min-h-screen bg-[#FFFBED] text-neutral-900 flex flex-col font-sans selection:bg-[#FF9217]/25 selection:text-[#00603F]">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-1">
        {/* SECCIÓN 1: INICIO (Hero) */}
        <Hero
          onSelectTendero={handleSelectTendero}
          onSelectComprador={handleSelectComprador}
        />

        {/* SECCIÓN 2: EL PROBLEMA */}
        <ProblemSection />

        {/* SECCIÓN 3: NUESTRA SOLUCIÓN (¿Qué es Aprovecha?) */}
        <AboutSection />

        {/* SECCIÓN 4: ¿CÓMO FUNCIONA? */}
        <HowItWorksSection preferredTab={howItWorksTab} />

        {/* SECCIÓN 5: CONOCE AL APROVECHÓLOGO */}
        <AprovechologoSection />

        {/* SECCIÓN 6: PLANES PARA TENDEROS */}
        <PlansSection
          onSelectPlanForContact={(planName) => {
            setSelectedPlan(planName);
            setContactRole('tendero');
          }}
        />

        {/* SECCIÓN 7: DESCUBRE LAS OFERTAS (Demo visual para compradores) */}
        <OffersShowcaseSection />

        {/* SECCIÓN 8: COMPRAR CERCA DE TI */}
        <NearbyModelSection />

        {/* SECCIÓN 9: BENEFICIOS PARA COMPRADORES Y TENDEROS */}
        <BenefitsSection />

        {/* SECCIÓN 10: IMPACTO Y NUESTRO PROPÓSITO */}
        <PurposeSection />
      </main>

      {/* SECCIÓN 11: CONTACTO Y PIE DE PÁGINA */}
      <ContactFooter preferredRole={contactRole} selectedPlan={selectedPlan} />
    </div>
  );
}
