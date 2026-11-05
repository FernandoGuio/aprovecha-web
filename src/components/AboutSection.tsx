import React from 'react';
import { Store, ShoppingBag, Leaf, ShieldAlert, CheckCircle, Sparkles } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="que-es" className="py-20 md:py-28 bg-[#FFFBED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            Propósito y visión
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-6">
            ¿Qué es Aprovecha?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Aprovecha es una plataforma que conecta a los tenderos con personas y restaurantes
            interesados en comprar productos próximos a su fecha de vencimiento a precios especiales.
            De esta manera, ayudamos a reducir las pérdidas de los comercios, facilitamos el ahorro de
            los compradores y contribuimos a disminuir el desperdicio de alimentos.
          </p>
        </div>

        {/* The 3 Beneficiaries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Actor 1: Tenderos */}
          <div className="bg-white rounded-2xl p-8 border border-[#00603F]/10 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-1 bg-[#00603F] rounded-full mb-6" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00603F]/10 flex items-center justify-center text-[#00603F] mb-6">
                <Store className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#00603F] mb-3">
                1. Para los Tenderos
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Tienen una alternativa digital y directa para comercializar productos que están
                próximos a vencer, recuperando el valor invertido, rotando inventarios y evitando
                pérdidas económicas.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#00603F]">
              <CheckCircle className="w-4 h-4 text-[#FF9217]" />
              <span>Recuperación de capital y fidelización</span>
            </div>
          </div>

          {/* Actor 2: Compradores */}
          <div className="bg-white rounded-2xl p-8 border-2 border-[#FF9217]/30 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-1 bg-[#FF9217] rounded-full mb-6" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#FF9217]/15 flex items-center justify-center text-[#FF9217] mb-6">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-3">
                2. Para los Compradores
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Encuentran alimentos de excelente calidad a precios especiales con descuentos
                significativos, ahorrando en el presupuesto del hogar o en sus negocios gastronómicos.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#FF9217]">
              <CheckCircle className="w-4 h-4 text-[#FF9217]" />
              <span>Descuentos reales a pasos de su casa</span>
            </div>
          </div>

          {/* Actor 3: Medio Ambiente */}
          <div className="bg-white rounded-2xl p-8 border border-[#00603F]/10 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
            <div className="w-12 h-1 bg-[#00603F] rounded-full mb-6" />
            <div>
              <div className="w-14 h-14 rounded-2xl bg-[#00603F]/10 flex items-center justify-center text-[#00603F] mb-6">
                <Leaf className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-[#00603F] mb-3">
                3. Para el Medio Ambiente
              </h3>
              <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
                Se contribuye a reducir el desperdicio de alimentos que de otro modo terminarían en la
                basura, mitigando la huella de carbono y promoviendo una cultura de consumo consciente.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center gap-2 text-xs font-semibold text-[#00603F]">
              <CheckCircle className="w-4 h-4 text-[#FF9217]" />
              <span>Consumo responsable y sostenible</span>
            </div>
          </div>

        </div>

        {/* Quality and Safety Guarantee Banner (CRUCIAL REQUIREMENT) */}
        <div className="bg-[#00603F] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -translate-y-8 translate-x-8 w-64 h-64 rounded-full bg-[#FF9217]/20 blur-2xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-2 flex justify-center lg:justify-start">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-xs flex items-center justify-center text-[#FF9217] border border-white/20">
                <ShieldAlert className="w-9 h-9" />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#FF9217] text-xs font-extrabold uppercase tracking-wider mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Compromiso de Calidad y Seguridad Alimentaria</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
                Solo alimentos dentro de su fecha permitida
              </h3>
              <p className="text-[#FFFBED]/90 text-sm sm:text-base leading-relaxed">
                En Aprovecha la seguridad es una prioridad absoluta. Todos los productos ofrecidos
                deben encontrarse rigurosamente dentro de su fecha de consumo permitida. <span className="font-bold underline decoration-[#FF9217] decoration-2">Nunca se promocionan ni comercializan productos vencidos.</span>
              </p>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center w-full sm:w-auto">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#FFFBED]/80">
                  Inspección y Claridad
                </p>
                <p className="text-2xl font-black text-[#FF9217] mt-1 tabular-nums">
                  100%
                </p>
                <p className="text-xs text-white/90 font-medium">
                  Fecha de vencimiento visible
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
