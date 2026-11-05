import React from 'react';
import { ArrowRight, Sparkles, Store, ShoppingBag, ShieldCheck } from 'lucide-react';

// Imagen oficial de tienda de barrio en public/assets/
const HERO_IMAGE_PATH = '/assets/hero_tienda_barrio.jpg';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-[#FFFBED] via-[#FFFBED] to-white">
      {/* Subtle organic background patterns */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-96 h-96 rounded-full bg-[#00603F]/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-16 -translate-x-16 w-96 h-96 rounded-full bg-[#FF9217]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Subtle editorial kicker without pill badges */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold tracking-wide text-[#00603F] mb-4">
              <span className="w-2 h-2 rounded-full bg-[#FF9217]" aria-hidden="true" />
              <span>Iniciativa tecnológica para tiendas de barrio y hogares</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#00603F] tracking-tight leading-[1.08] mb-6 text-balance">
              Dale una segunda oportunidad a los{' '}
              <span className="text-[#FF9217] relative inline-block">
                alimentos
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-3 text-[#FF9217]/30"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                  fill="currentColor"
                >
                  <path d="M0,15 Q50,0 100,15 Q50,8 0,15 Z" />
                </svg>
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg sm:text-xl text-neutral-700 leading-relaxed max-w-2xl mb-8 font-normal">
              Conectamos tiendas de barrio con compradores que buscan ahorrar y aprovechar mejor los alimentos.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-white bg-[#00603F] hover:bg-[#004d32] active:scale-[0.99] rounded-xl shadow-md hover:shadow-lg transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
              >
                <span>Conoce cómo funciona</span>
                <ArrowRight className="w-5 h-5 text-[#FF9217]" />
              </a>

              <a
                href="#que-es"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-bold text-[#00603F] bg-white hover:bg-[#00603F]/5 border-2 border-[#00603F] rounded-xl transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00603F]"
              >
                <span>Descubre Aprovecha</span>
              </a>
            </div>

            {/* Trust and Key Principles strip */}
            <div className="pt-6 border-t border-[#00603F]/15 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-2.5 text-neutral-700">
                <Store className="w-5 h-5 text-[#00603F] shrink-0" />
                <span>Apoyo al comercio local de proximidad</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-700">
                <ShoppingBag className="w-5 h-5 text-[#FF9217] shrink-0" />
                <span>Ahorro real para familias y vecinos</span>
              </div>
              <div className="flex items-center gap-2.5 text-neutral-700">
                <ShieldCheck className="w-5 h-5 text-[#00603F] shrink-0" />
                <span>Alimentos dentro de fecha apta</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-neutral-100 group">
              <img
                src={HERO_IMAGE_PATH}
                alt="Tienda de barrio moderna con frutas frescas, estanterías y atención cálida"
                className="w-full h-[400px] sm:h-[480px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Decorative floating proof card */}
              <div className="absolute bottom-5 left-5 right-5 sm:left-6 sm:right-auto bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-neutral-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#00603F] flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5 text-[#FF9217]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                      Modelo Sostenible
                    </p>
                    <p className="text-sm font-bold text-[#00603F] leading-tight">
                      Cero desperdicio · Máximo ahorro local
                    </p>
                  </div>
                </div>
              </div>

              {/* Badge top right indicating discount showcase */}
              <div className="absolute top-4 right-4 bg-[#FF9217] text-white px-3.5 py-1.5 rounded-full text-xs font-extrabold shadow-md flex items-center gap-1.5">
                <span>Hasta 50% de ahorro</span>
              </div>
            </div>
          </div>

        </div>

        {/* Highlight KPI strip below Hero */}
        <div className="mt-14 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-white/80 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border border-[#00603F]/10 shadow-sm">
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00603F] tabular-nums">2 km</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">Cobertura barrial máxima</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#FF9217] tabular-nums">$2.000 COP</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">Domicilio barrial previsto</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00603F] tabular-nums">3 Actores</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">Tenderos, hogares y planeta</p>
          </div>
          <div>
            <p className="text-2xl sm:text-3xl font-extrabold text-[#00603F] tabular-nums">100% Apto</p>
            <p className="text-xs sm:text-sm text-neutral-600 mt-1 font-medium">Dentro de fecha de consumo</p>
          </div>
        </div>

      </div>
    </section>
  );
};
