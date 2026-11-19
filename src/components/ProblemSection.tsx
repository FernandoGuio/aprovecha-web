import React from 'react';
import { PackageX, Layers, CalendarClock, Clock, UserSearch, Compass } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  const problems = [
    {
      icon: PackageX,
      title: 'Productos de baja rotación',
      description:
        'Artículos que tardan más de lo previsto en venderse, inmovilizando parte del capital de trabajo de la tienda.',
    },
    {
      icon: Layers,
      title: 'Exceso de inventario',
      description:
        'Mercancía acumulada por compras por volumen o variaciones en la demanda habitual del vecindario.',
    },
    {
      icon: CalendarClock,
      title: 'Productos próximos a vencer',
      description:
        'Alimentos en buen estado que se acercan a su fecha límite de consumo y corren el riesgo de convertirse en pérdida.',
    },
    {
      icon: Clock,
      title: 'Falta de tiempo para promociones',
      description:
        'La atención continua del mostrador deja muy poco margen para organizar, comunicar y gestionar ofertas especiales.',
    },
    {
      icon: UserSearch,
      title: 'Dificultad para encontrar compradores',
      description:
        'La visibilidad de la tienda suele limitarse únicamente a quienes pasan frente al local en un momento determinado.',
    },
    {
      icon: Compass,
      title: 'Falta de orientación comercial',
      description:
        'Pocas herramientas prácticas y acompañamiento para detectar a tiempo oportunidades de venta en el negocio.',
    },
  ];

  return (
    <section id="problema" className="py-20 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            El problema que resolvemos
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Retos cotidianos de las tiendas de barrio
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal leading-relaxed">
            Los pequeños comerciantes manejan una gran variedad de productos, pero enfrentan
            dificultades prácticas que limitan sus ventas y generan pérdidas evitables.
          </p>
        </div>

        {/* 6 Challenges Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-[#FFFBED]/70 rounded-2xl p-6 sm:p-7 border border-[#00603F]/10 hover:border-[#FF9217]/50 transition-all shadow-xs hover:shadow-md flex flex-col justify-start group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#00603F]/10 text-[#00603F] group-hover:bg-[#FF9217]/15 group-hover:text-[#FF9217] flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
