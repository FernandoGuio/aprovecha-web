import React, { useState } from 'react';
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
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'tenderos' | 'compradores'>('compradores');

  const tenderoSteps = [
    {
      step: '01',
      icon: UserPlus,
      title: 'Registro del establecimiento',
      description:
        'El tendero se registra de forma sencilla en Aprovecha proporcionando los datos básicos de su tienda de barrio, dirección y horarios de atención.',
      detail: 'Sin trámites complejos · Verificación ágil',
    },
    {
      step: '02',
      icon: Upload,
      title: 'Publicación de productos',
      description:
        'Carga los productos próximos a su fecha de vencimiento indicando nombre, cantidad disponible, precio habitual, precio especial, foto y fecha límite de consumo.',
      detail: 'Fotos claras · Control total de precios',
    },
    {
      step: '03',
      icon: Radio,
      title: 'Difusión a vecinos cercanos',
      description:
        'La plataforma muestra automáticamente las ofertas a los compradores ubicados en un radio máximo de hasta 2 kilómetros del establecimiento.',
      detail: 'Visibilidad hiperlocal · Clientes del barrio',
    },
    {
      step: '04',
      icon: PackageCheck,
      title: 'Gestión de reservas y entrega',
      description:
        'Recibe las notificaciones de reserva en tiempo real y coordina con el comprador la entrega en mostrador o el envío a domicilio por valor máximo de $2.000 COP.',
      detail: 'Ingresos recuperados · Cero producto perdido',
    },
  ];

  const compradorSteps = [
    {
      step: '01',
      icon: MapPin,
      title: 'Consulta ofertas cercanas',
      description:
        'Accede a la plataforma y explora las ofertas disponibles en las tiendas, panaderías y minimarkets ubicados cerca de su casa o lugar de trabajo.',
      detail: 'A menos de 2 km · Ahorro inmediato',
    },
    {
      step: '02',
      icon: Eye,
      title: 'Revisa detalles y fechas',
      description:
        'Comprueba la información transparente del producto: fotografías reales, precios antes/después, cantidad en existencia y la fecha exacta de vencimiento.',
      detail: '100% productos aptos · Información clara',
    },
    {
      step: '03',
      icon: BookmarkCheck,
      title: 'Selecciona y reserva',
      description:
        'Elige los alimentos que necesita para el día o la semana y realiza la reserva con unos pocos clics para asegurar el descuento especial.',
      detail: 'Reserva ágil · Descuentos de hasta el 50%',
    },
    {
      step: '04',
      icon: Bike,
      title: 'Recoge o pide a domicilio',
      description:
        'Decide si pasar a recoger su pedido caminando por la tienda de barrio o solicitar domicilio por un valor máximo previsto de tan solo $2.000 COP.',
      detail: 'Recogida gratuita o domicilio económico',
    },
  ];

  const currentSteps = activeTab === 'tenderos' ? tenderoSteps : compradorSteps;

  return (
    <section id="como-funciona" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Paso a paso sencillo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            ¿Cómo funciona Aprovecha?
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Una experiencia diseñada para ser intuitiva, rápida y accesible tanto para quien vende
            como para quien compra.
          </p>

          {/* Interactive Mode Switcher (Tab buttons) */}
          <div className="mt-8 inline-flex p-1.5 bg-[#FFFBED] rounded-2xl border border-[#00603F]/15 shadow-inner">
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
          </div>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {currentSteps.map((item, index) => {
            const Icon = item.icon;
            const isComprador = activeTab === 'compradores';

            return (
              <div
                key={item.step}
                className="bg-[#FFFBED]/60 rounded-2xl p-6 sm:p-7 border border-[#00603F]/10 hover:border-[#FF9217]/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Step header with Number and Icon */}
                  <div className="flex items-center justify-between mb-5">
                    <span
                      className={`text-2xl font-black tabular-nums transition-colors ${
                        isComprador ? 'text-[#FF9217]' : 'text-[#00603F]'
                      }`}
                    >
                      {item.step}
                    </span>
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 ${
                        isComprador
                          ? 'bg-[#FF9217]/15 text-[#FF9217]'
                          : 'bg-[#00603F]/10 text-[#00603F]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2.5 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#00603F]/10 text-xs font-semibold text-neutral-500">
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
                <Store className="w-6 h-6 text-[#FF9217]" />
              )}
            </div>
            <div>
              <h4 className="text-base font-bold text-[#00603F]">
                {activeTab === 'compradores'
                  ? '¿Listo para encontrar ofertas en tu barrio?'
                  : '¿Tienes una tienda o minimarket de barrio?'}
              </h4>
              <p className="text-xs sm:text-sm text-neutral-600">
                {activeTab === 'compradores'
                  ? 'Revisa abajo la demostración de productos y cómo verás los descuentos.'
                  : 'Regístrate para recibir información sobre el inicio del piloto en tu zona.'}
              </p>
            </div>
          </div>

          <a
            href={activeTab === 'compradores' ? '#ofertas' : '#contacto'}
            className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-all whitespace-nowrap shrink-0 shadow-xs ${
              activeTab === 'compradores'
                ? 'bg-[#FF9217] hover:bg-[#e67f0b]'
                : 'bg-[#00603F] hover:bg-[#004d32]'
            }`}
          >
            <span>{activeTab === 'compradores' ? 'Ver catálogo demostrativo' : 'Quiero registrar mi tienda'}</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
