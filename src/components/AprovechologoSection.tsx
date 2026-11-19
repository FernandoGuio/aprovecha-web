import React from 'react';
import {
  CheckCircle2,
  Quote,
  Users,
  Sparkles,
  Info,
  ArrowRight,
} from 'lucide-react';

const APROVECHOLOGO_IMAGE_PATH = '/assets/aprovechologo_asesor.jpg';

export const AprovechologoSection: React.FC = () => {
  const tasks = [
    'Visita tiendas y establece contacto cercano con los comerciantes.',
    'Presenta la propuesta de Aprovecha de manera clara y práctica.',
    'Conoce las necesidades particulares de cada establecimiento.',
    'Ayuda al tendero a registrarse y aprender a utilizar la plataforma.',
    'Brinda orientación inicial sobre la publicación y comercialización de productos.',
  ];

  return (
    <section id="aprovechologo" className="py-20 md:py-28 bg-[#FFFBED] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            Acompañamiento comercial cercano
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Conoce al Aprovechólogo
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 font-normal leading-relaxed">
            Queremos construir una relación cercana y de confianza con los comerciantes, no
            limitarnos únicamente a ofrecerles una aplicación.
          </p>
        </div>

        {/* 2-Column Split: Editorial Image + Detailed Explanation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-stretch">
          
          {/* Left Column: Advisor visiting store photo */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-neutral-100 h-full min-h-[360px] lg:min-h-[520px] group">
              <img
                src={APROVECHOLOGO_IMAGE_PATH}
                alt="Asesor comercial Aprovechólogo visitando una tienda de barrio y orientando al tendero"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

              {/* Floating badge top-left */}
              <div className="absolute top-4 left-4 bg-[#00603F] text-white px-3.5 py-1.5 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-[#FF9217]" />
                <span>Aliado del comerciante</span>
              </div>

              {/* Bottom caption */}
              <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-lg border border-neutral-100">
                <p className="text-xs font-extrabold uppercase tracking-wider text-[#FF9217] mb-1">
                  Primera orientación gratuita
                </p>
                <p className="text-sm font-bold text-[#00603F] leading-snug">
                  Te visitamos, te ayudamos a registrarte y te enseñamos a publicar tus productos.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Definition, Tasks, and Methodology Clarification */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* What is an Aprovechólogo */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#00603F]/10 shadow-xs">
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#00603F] mb-3">
                ¿Qué es un Aprovechólogo?
              </h3>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-3">
                Es una persona capacitada para orientar, asesorar y acompañar a los comerciantes en el
                aprovechamiento de sus productos, la recuperación de valor y la identificación de
                nuevas oportunidades de negocio a través de Aprovecha.
              </p>
              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
                <strong className="text-neutral-900">No es simplemente un vendedor:</strong> es un
                aliado del comerciante, alguien que conoce la plataforma, entiende sus necesidades y
                le enseña cómo convertir productos que podrían representar una pérdida en nuevas
                oportunidades de venta.
              </p>
            </div>

            {/* What does the Aprovechólogo do */}
            <div className="bg-white rounded-3xl p-7 sm:p-8 border border-[#00603F]/10 shadow-xs">
              <h3 className="text-lg sm:text-xl font-extrabold text-neutral-900 mb-4">
                ¿Qué hace durante la vinculación?
              </h3>
              <ul className="space-y-3">
                {tasks.map((task, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#FF9217] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-neutral-700 leading-snug font-medium">
                      {task}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Methodology & Scope Clarification */}
            <div className="bg-white rounded-2xl p-5 sm:p-6 border border-[#00603F]/20 flex items-start gap-3.5 shadow-xs">
              <div className="p-2 rounded-xl bg-[#00603F]/10 text-[#00603F] shrink-0 mt-0.5">
                <Info className="w-5 h-5" />
              </div>
              <div className="text-xs sm:text-sm text-neutral-700 leading-relaxed space-y-1.5">
                <p>
                  <strong className="text-[#00603F]">Orientación inicial gratuita y asesoría posterior:</strong>{' '}
                  La primera orientación hace parte de nuestra estrategia de vinculación de tenderos
                  sin costo. Posteriormente, los comerciantes pueden acceder a servicios adicionales
                  de asesoría, principalmente remota, según el plan de servicio que contraten.
                </p>
                <p className="text-neutral-600">
                  El Aprovechólogo no es una persona asignada permanentemente a cada tienda: es una
                  metodología de acompañamiento comercial aplicada durante la vinculación inicial y
                  en sesiones de asesoría posteriores.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Highlight Motto Banner */}
        <div className="mt-12 bg-[#00603F] text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden">
          <div className="absolute -right-8 -top-8 w-56 h-56 rounded-full bg-[#FF9217]/20 blur-2xl pointer-events-none" />
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-start gap-4 max-w-3xl">
              <Quote className="w-10 h-10 text-[#FF9217] shrink-0 hidden sm:block" />
              <div>
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#FF9217] mb-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Nuestro lema</span>
                </div>
                <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#FFFBED] leading-snug">
                  “Donde otros ven productos por perderse, nosotros vemos oportunidades por
                  aprovechar.”
                </p>
              </div>
            </div>

            <a
              href="#planes"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#FF9217] hover:bg-[#e67f0b] text-white shadow-md transition-all whitespace-nowrap shrink-0"
            >
              <span>Ver planes para tenderos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
