import React from 'react';
import { Laptop, Handshake, ShieldAlert, CheckCircle, Sparkles, ArrowRight } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="solucion" className="py-20 md:py-28 bg-[#FFFBED] relative">
      {/* Anchor alias for backward compatibility */}
      <span id="que-es" className="sr-only" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            Nuestra solución
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-6">
            ¿Qué es Aprovecha?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-neutral-700 leading-relaxed font-normal">
            Aprovecha es una plataforma digital de apoyo a la gestión y comercialización de las
            tiendas de barrio, que combina herramientas para dar visibilidad a sus productos con
            orientación práctica para ayudar a los tenderos a aprovechar mejor sus oportunidades de
            venta.
          </p>
        </div>

        {/* Two Main Solution Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* Component 1: Plataforma digital */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#00603F]/15 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#00603F] flex items-center justify-center text-white shadow-sm">
                  <Laptop className="w-7 h-7 text-[#FF9217]" />
                </div>
                <span className="text-2xl font-black text-[#00603F]/20 tabular-nums">01</span>
              </div>
              <h3 className="text-2xl font-extrabold text-[#00603F] mb-3">
                1. Plataforma digital
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                Permite registrar establecimientos, publicar productos, mostrar ofertas y conectar a
                los tenderos con hogares, restaurantes y compradores cercanos interesados en
                encontrar alimentos y artículos a precios favorables.
              </p>
              <ul className="space-y-2.5 text-sm text-neutral-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00603F] shrink-0" />
                  <span>Registro sencillo de tu tienda de barrio</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00603F] shrink-0" />
                  <span>Publicación clara de productos, precios y fechas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#00603F] shrink-0" />
                  <span>Conexión directa con compradores del sector</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-100">
              <a
                href="#como-funciona"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#00603F] hover:text-[#FF9217] transition-colors"
              >
                <span>Ver cómo funciona la plataforma</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Component 2: Acompañamiento comercial */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border-2 border-[#FF9217]/50 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between relative overflow-hidden">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-[#FF9217] flex items-center justify-center text-white shadow-sm">
                  <Handshake className="w-7 h-7" />
                </div>
                <span className="text-2xl font-black text-[#FF9217]/30 tabular-nums">02</span>
              </div>
              <h3 className="text-2xl font-extrabold text-neutral-900 mb-3">
                2. Acompañamiento comercial
              </h3>
              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                A través del concepto del <strong className="text-[#00603F]">Aprovechólogo</strong>,
                ayudamos al tendero a conocer la plataforma, aprender a utilizarla y recibir
                orientación práctica para comercializar sus productos y recuperar valor.
              </p>
              <ul className="space-y-2.5 text-sm text-neutral-700">
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF9217] shrink-0" />
                  <span>Primera orientación presencial gratuita en tu tienda</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF9217] shrink-0" />
                  <span>Acompañamiento para aprender a publicar y destacar ofertas</span>
                </li>
                <li className="flex items-center gap-2.5">
                  <CheckCircle className="w-4 h-4 text-[#FF9217] shrink-0" />
                  <span>Servicios posteriores de asesoría remota según tu plan</span>
                </li>
              </ul>
            </div>
            <div className="pt-6 mt-8 border-t border-neutral-100">
              <a
                href="#aprovechologo"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#FF9217] hover:text-[#00603F] transition-colors"
              >
                <span>Conoce al Aprovechólogo</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Quality and Safety Guarantee Banner */}
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
                En Aprovecha la calidad es fundamental. Todos los productos ofrecidos en la
                plataforma deben encontrarse rigurosamente dentro de su fecha de consumo permitida.{' '}
                <span className="font-bold underline decoration-[#FF9217] decoration-2">
                  Nunca se promocionan ni comercializan productos vencidos.
                </span>
              </p>
            </div>

            <div className="lg:col-span-3 flex lg:justify-end">
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center w-full sm:w-auto">
                <p className="text-xs uppercase tracking-wider font-semibold text-[#FFFBED]/80">
                  Transparencia total
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
