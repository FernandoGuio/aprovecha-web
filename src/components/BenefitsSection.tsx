import React from 'react';
import { Store, ShoppingBag, Leaf, CheckCircle2, TrendingUp, Wallet, Globe } from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const tenderosBenefits = [
    'Reducir pérdidas económicas y mermas por vencimiento de productos.',
    'Comercializar productos próximos a vencer antes de que sea tarde.',
    'Dar mayor salida y velocidad a la rotación de sus inventarios.',
    'Llegar a nuevos compradores y familias del vecindario.',
  ];

  const compradoresBenefits = [
    'Ahorrar dinero de forma significativa en la canasta familiar.',
    'Encontrar ofertas y promociones reales muy cerca de casa.',
    'Acceder a una mayor variedad de alimentos de calidad garantizada.',
    'Comprar de manera práctica, rápida y sin trámites complicados.',
  ];

  const ambienteBenefits = [
    'Reducir drásticamente el desperdicio de alimentos aptos para el consumo.',
    'Promover el consumo responsable y hábitos de compra conscientes.',
    'Aprovechar mejor los recursos naturales, agua y energía invertidos.',
    'Disminuir las emisiones de gases de efecto invernadero por residuos orgánicos.',
  ];

  return (
    <section id="beneficios" className="py-20 md:py-28 bg-[#FFFBED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Impacto positivo compartido
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Beneficios de Aprovecha
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Un ecosistema donde todos ganan: quien produce y vende, quien compra y disfruta, y el
            entorno en el que vivimos.
          </p>
        </div>

        {/* 3 Visual Blocks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Block 1: Tenderos */}
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
                Transforma las pérdidas inevitables en ingresos recuperados, optimizando la gestión
                de tu tienda de barrio.
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
                Valor clave: Liquidez y cero desperdicio en estanterías
              </span>
            </div>
          </div>

          {/* Block 2: Compradores */}
          <div className="bg-white rounded-3xl p-8 border-2 border-[#FF9217] shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group">
            
            {/* Top highlight ribbon */}
            <div className="absolute -top-3.5 left-8 bg-[#FF9217] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
              Ahorro para la comunidad
            </div>

            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF9217] text-white flex items-center justify-center shadow-md">
                  <ShoppingBag className="w-7 h-7" />
                </div>
                <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF9217] bg-[#FF9217]/15 px-3 py-1 rounded-full">
                  <Wallet className="w-3.5 h-3.5" />
                  <span>Economía Familiar</span>
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">
                Para los Compradores
              </h3>
              <p className="text-neutral-600 text-sm mb-6 leading-relaxed">
                Acceso diario a alimentos de primera necesidad con descuentos de hasta el 50%
                directamente en el vecindario.
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
                Valor clave: Alimentos frescos, accesibles y de calidad
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
                Cada alimento rescatado y consumido a tiempo previene emisiones innecesarias y
                promueve la sostenibilidad del planeta.
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
                Valor clave: Economía circular y protección de recursos
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
