import React from 'react';
import { Store, ShoppingBag, Leaf, CheckCircle2, TrendingUp, Wallet, Globe } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const compradoresBenefits = [
    'Encontrar productos de calidad a precios favorables para el hogar o restaurante.',
    'Consultar establecimientos cercanos a tu ubicación en el barrio.',
    'Conocer de forma clara las ofertas disponibles y fechas de consumo.',
    'Contribuir activamente al aprovechamiento de alimentos y evitar desperdicios.',
  ];

  const tenderosBenefits = [
    'Dar visibilidad digital a productos de baja rotación o próximos a vencer.',
    'Recuperar valor de artículos que podrían convertirse en pérdidas económicas.',
    'Conectar con nuevos compradores, hogares y restaurantes cercanos.',
    'Recibir orientación práctica a través del acompañamiento del Aprovechólogo.',
  ];

  const ambienteBenefits = [
    'Reducir el desperdicio de alimentos aptos para el consumo.',
    'Promover hábitos de compra y consumo responsable en la comunidad.',
    'Aprovechar mejor los recursos invertidos en producir y distribuir alimentos.',
    'Fomentar una economía barrial más sostenible y solidaria.',
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FFFBED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Valor compartido en tu barrio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Beneficios para compradores y tenderos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Aprovecha genera valor para ambas partes: impulsa las oportunidades comerciales de las
            tiendas y facilita precios favorables para quienes compran en el sector.
          </p>
        </div>

        {/* 3 Visual Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: Compradores (Destacado para conservar protagonismo equilibrado) */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#FF9217] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            
            <div className="absolute -top-3.5 left-8 bg-[#FF9217] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              Beneficios para compradores
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF9217] text-white flex items-center justify-center shadow-md">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF9217] bg-[#FF9217]/15 px-3 py-1 rounded-full">
                  <Wallet className="w-3.5 h-3.5" />
                  <span>Hogares y Restaurantes</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">
                Para los Compradores
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Encuentra productos a precios favorables cerca de casa, consulta las ofertas de tus
                tiendas vecinas y compra de manera práctica.
              </p>

              <ul className="space-y-3.5">
                {compradoresBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9217] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 leading-snug font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <span className="text-xs font-bold text-[#FF9217] block">
                Valor clave: Precios favorables, cercanía y consumo consciente
              </span>
            </div>
          </div>

          {/* Block 2: Tenderos */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#00603F]/20 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00603F] text-white flex items-center justify-center shadow-md">
                  <Store className="w-7 h-7 text-[#FF9217]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#00603F] bg-[#00603F]/10 px-3 py-1 rounded-full">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>Comercio Local</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#00603F] mb-3">
                Para los Tenderos
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Combina visibilidad digital y orientación práctica para aprovechar mejor cada producto
                y generar nuevas oportunidades de venta.
              </p>

              <ul className="space-y-3.5">
                {tenderosBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00603F] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 leading-snug font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <span className="text-xs font-bold text-[#00603F] block">
                Valor clave: Nuevas ventas y recuperación de valor
              </span>
            </div>
          </div>

          {/* Block 3: Medio Ambiente */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#00603F]/20 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00603F] text-white flex items-center justify-center shadow-md">
                  <Leaf className="w-7 h-7 text-[#FF9217]" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#00603F] bg-[#00603F]/10 px-3 py-1 rounded-full">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Sostenibilidad</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-[#00603F] mb-3">
                Para el Medio Ambiente
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Cada alimento aprovechado a tiempo evita que productos en buen estado terminen
                desperdiciados.
              </p>

              <ul className="space-y-3.5">
                {ambienteBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#00603F] shrink-0 mt-0.5" />
                    <span className="text-sm text-neutral-700 leading-snug font-medium">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-100">
              <span className="text-xs font-bold text-[#00603F] block">
                Valor clave: Aprovechamiento y consumo responsable
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
