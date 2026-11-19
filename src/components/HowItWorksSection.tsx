import React, { useState, useEffect } from 'react';
import {
  Store,
  ShoppingBag,
  UserPlus,
  Upload,
  Radio,
  PackageCheck,
  MapPin,
  Eye,
  BookmarkCheck,
  Bike,
  ArrowRight,
  MessageSquareHeart,
  Headphones,
} from 'lucide-react';

interface HowItWorksSectionProps {
  preferredTab?: 'tenderos' | 'compradores';
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({
  preferredTab = 'tenderos',
}) => {
  const [activeTab, setActiveTab] = useState<'tenderos' | 'compradores'>(preferredTab);

  useEffect(() => {
    setActiveTab(preferredTab);
  }, [preferredTab]);

  const tenderoSteps = [
    {
      step: '01',
      icon: MessageSquareHeart,
      title: 'Conocemos tu negocio',
      description:
        'Visitamos tu tienda o nos ponemos en contacto contigo para escuchar tus necesidades e identificar oportunidades de venta.',
      detail: 'Cercanía desde el primer día',
    },
    {
      step: '02',
      icon: UserPlus,
      title: 'Te presentamos Aprovecha y te ayudamos con el registro',
      description:
        'Te mostramos cómo funciona la plataforma y realizamos juntos el registro de tu establecimiento de manera guiada.',
      detail: 'Vinculación sencilla y asistida',
    },
    {
      step: '03',
      icon: Upload,
      title: 'Aprendes a publicar tus productos',
      description:
        'Recibes orientación inicial gratuita para cargar fotografías, precios favorables, cantidades y fechas de consumo.',
      detail: 'Capacitación inicial gratuita',
    },
    {
      step: '04',
      icon: Radio,
      title: 'Tus ofertas son consultadas por compradores cercanos',
      description:
        'Hogares, restaurantes y vecinos de tu sector descubren tus productos disponibles y realizan reservas desde la plataforma.',
      detail: 'Visibilidad en tu vecindario',
    },
    {
      step: '05',
      icon: Headphones,
      title: 'Accedes a servicios adicionales de asesoría',
      description:
        'Según el plan de servicio que elijas, puedes contar con seguimiento remoto y recomendaciones para seguir comercializando mejor.',
      detail: 'Acompañamiento según tu plan',
    },
  ];

  const compradorSteps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Registrarse',
      description:
        'Creas tu cuenta de comprador en pocos minutos para comenzar a descubrir las tiendas de barrio disponibles en tu zona.',
      detail: 'Acceso rápido y sencillo',
    },
    {
      step: '02',
      icon: MapPin,
      title: 'Consultar ofertas cercanas',
      description:
        'Exploras los productos publicados por tiendas, panaderías y minimarkets ubicados cerca de tu casa o negocio.',
      detail: 'Comercios de proximidad',
    },
    {
      step: '03',
      icon: Eye,
      title: 'Revisar productos y establecimientos',
      description:
        'Verificas fotografías, precios habituales y especiales, cantidades disponibles y fechas de vencimiento dentro del periodo apto.',
      detail: 'Información clara y transparente',
    },
    {
      step: '04',
      icon: BookmarkCheck,
      title: 'Seleccionar y reservar o comprar',
      description:
        'Eliges los alimentos y productos que deseas aprovechar y realizas tu reserva para asegurar el precio favorable.',
      detail: 'Ahorro práctico y seguro',
    },
    {
      step: '05',
      icon: Bike,
      title: 'Recoger o recibir a domicilio',
      description:
        'Pasas a recoger tu pedido directamente en la tienda o solicitas el envío cuando el establecimiento tenga servicio a domicilio.',
      detail: 'Recogida o entrega en tu barrio',
    },
  ];

  const currentSteps = activeTab === 'tenderos' ? tenderoSteps : compradorSteps;

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Proceso paso a paso
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            ¿Cómo funciona Aprovecha?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Un recorrido claro y pensado tanto para acompañar a los comerciantes como para facilitar
            el ahorro de los compradores.
          </p>

          {/* Interactive Mode Switcher */}
          <div className="mt-8 inline-flex p-1.5 bg-[#FFFBED] rounded-2xl border border-[#00603F]/15 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('tenderos')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'tenderos'
                  ? 'bg-[#00603F] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-[#00603F]'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>Para los Tenderos</span>
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('compradores')}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl text-sm font-bold transition-all cursor-pointer ${
                activeTab === 'compradores'
                  ? 'bg-[#FF9217] text-white shadow-sm'
                  : 'text-neutral-700 hover:text-[#00603F]'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Para los Compradores</span>
            </button>
          </div>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
          {currentSteps.map((item) => {
            const Icon = item.icon;
            const isComprador = activeTab === 'compradores';

            return (
              <div
                key={`${activeTab}-${item.step}`}
                className="bg-[#FFFBED]/60 rounded-2xl p-6 border border-[#00603F]/10 hover:border-[#FF9217]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step header with Number and Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-2xl font-black tabular-nums transition-colors ${
                        isComprador ? 'text-[#FF9217]' : 'text-[#00603F]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isComprador
                          ? 'bg-[#FF9217]/15 text-[#FF9217]'
                          : 'bg-[#00603F]/10 text-[#00603F]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-neutral-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3.5 border-t border-[#00603F]/10 text-[11px] font-semibold text-neutral-500">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive process callout footer */}
        <div className="mt-12 bg-[#FFFBED] border border-[#00603F]/15 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#00603F] text-white flex items-center justify-center shrink-0">
              {activeTab === 'compradores' ? (
                <ShoppingBag className="w-6 h-6 text-[#FF9217]" />
              ) : (
                <PackageCheck className="w-6 h-6 text-[#FF9217]" />
              )}
            </div>
            <div>
              <h4 className="text-base font-bold text-[#00603F]">
                {activeTab === 'compradores'
                  ? '¿Quieres ver ejemplos de productos a precios favorables?'
                  : '¿Quieres conocer cómo te acompaña el Aprovechólogo y qué planes existen?'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                {activeTab === 'compradores'
                  ? 'Explora más abajo la demostración visual de ofertas en tiendas cercanas.'
                  : 'La primera orientación es gratuita para ayudarte a dar el primer paso.'}
              </p>
            </div>
          </div>

          <a
            href={activeTab === 'compradores' ? '#ofertas' : '#aprovechologo'}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all whitespace-nowrap shrink-0 shadow-xs ${
              activeTab === 'compradores'
                ? 'bg-[#FF9217] hover:bg-[#e67f0b]'
                : 'bg-[#00603F] hover:bg-[#004d32]'
            }`}
          >
            <span>
              {activeTab === 'compradores'
                ? 'Ver catálogo demostrativo'
                : 'Conocer al Aprovechólogo'}
            </span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
