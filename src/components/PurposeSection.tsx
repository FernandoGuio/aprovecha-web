import React from 'react';
import {
  Quote,
  HeartHandshake,
  Sparkles,
  Sprout,
  Store,
  TrendingUp,
  RefreshCw,
  Utensils,
  Leaf,
} from 'lucide-react';

// Imagen de comunidad y sostenibilidad en public/assets/
const COMMUNITY_IMAGE_PATH = '/assets/comunidad_sostenibilidad.jpg';

export const PurposeSection: React.FC = () => {
  const impactGoals = [
    {
      icon: Store,
      title: 'Apoyar a los pequeños comerciantes',
      description:
        'Acompañando a las tiendas de barrio con herramientas accesibles y orientación comercial cercana.',
    },
    {
      icon: TrendingUp,
      title: 'Facilitar nuevas oportunidades de venta',
      description:
        'Dando mayor visibilidad a sus productos frente a hogares y restaurantes del vecindario.',
    },
    {
      icon: RefreshCw,
      title: 'Recuperar valor de productos',
      description:
        'Ayudando a transformar mercancía de baja rotación o próxima a vencer en ingresos para el negocio.',
    },
    {
      icon: Utensils,
      title: 'Promover el aprovechamiento de alimentos',
      description:
        'Incentivando que los productos aptos lleguen a mesas y cocinas que los valoren a precios favorables.',
    },
    {
      icon: Leaf,
      title: 'Contribuir a reducir el desperdicio',
      description:
        'Construyendo hábitos de compra y comercialización más conscientes y sostenibles en cada barrio.',
    },
  ];

  return (
    <section id="impacto" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Impact Section Header & 5 Qualitative Goals (No invented figures) */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            Impacto del proyecto
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Lo que buscamos lograr con Aprovecha
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Nuestro propósito es generar un efecto positivo real en la economía del barrio y en el
            aprovechamiento responsable de los alimentos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 mb-16">
          {impactGoals.map((goal) => {
            const Icon = goal.icon;
            return (
              <div
                key={goal.title}
                className="bg-[#FFFBED] rounded-2xl p-6 border border-[#00603F]/10 shadow-xs hover:shadow-md transition-all flex flex-col justify-start"
              >
                <div className="w-11 h-11 rounded-xl bg-[#00603F] text-[#FF9217] flex items-center justify-center mb-4 shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#00603F] mb-2 leading-snug">
                  {goal.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {goal.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Inspiring Purpose Card */}
        <div className="bg-[#00603F] text-white rounded-3xl overflow-hidden shadow-2xl border-4 border-[#00603F]/20 relative">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#FF9217]/15 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Inspiring Statement & Impact */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-center relative z-10">
              
              <div className="inline-flex items-center gap-2 text-[#FF9217] text-xs font-extrabold uppercase tracking-widest mb-6">
                <Sprout className="w-4 h-4" />
                <span>Nuestro Propósito</span>
              </div>

              <div className="mb-6 text-[#FF9217]/60">
                <Quote className="w-12 h-12" />
              </div>

              <blockquote className="text-2xl sm:text-3xl lg:text-3xl font-extrabold text-[#FFFBED] tracking-tight leading-snug mb-8">
                &ldquo;En Aprovecha creemos que los alimentos tienen valor y que muchas oportunidades se
                pierden simplemente porque no llegamos a tiempo. Queremos conectar personas, comercios
                y oportunidades para construir una forma más responsable de consumir.&rdquo;
              </blockquote>

              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-xs sm:text-sm text-[#FFFBED]/80">
                <div className="flex items-center gap-2">
                  <HeartHandshake className="w-5 h-5 text-[#FF9217] shrink-0" />
                  <span className="font-semibold text-white">Comunidad y comercio cercano</span>
                </div>
                <span className="hidden sm:inline text-white/40">·</span>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#FF9217] shrink-0" />
                  <span>Tecnología y acompañamiento al servicio del barrio</span>
                </div>
              </div>

            </div>

            {/* Right Column: High-Fidelity Community Image */}
            <div className="lg:col-span-5 relative h-full min-h-[380px] lg:min-h-[500px]">
              <img
                src={COMMUNITY_IMAGE_PATH}
                alt="Tendero y vecina compartiendo alimentos frescos en el barrio con calidez y cercanía"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#00603F]/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#00603F] lg:via-transparent lg:to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-[#00603F]/90 backdrop-blur-md p-4 rounded-2xl border border-white/20 text-xs text-white">
                <p className="font-bold text-[#FF9217]">Economía de proximidad</p>
                <p className="text-white/90 mt-0.5">
                  Conectando comercios locales con personas que valoran cada oportunidad.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
