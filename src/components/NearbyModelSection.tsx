import React, { useState } from 'react';
import { MapPin, Navigation, Bike, Store, ShieldCheck, Compass, CheckCircle2 } from 'lucide-react';

interface ShopPin {
  id: string;
  name: string;
  category: string;
  distance: string;
  walkTime: string;
  availableDeals: number;
  deliveryOption: string;
  address: string;
  coords: { x: number; y: number }; // percentage inside map canvas
}

export const NearbyModelSection: React.FC = () => {
  const [selectedShop, setSelectedShop] = useState<ShopPin>({
    id: 'shop-1',
    name: 'Minimarket Don Pedro',
    category: 'Abarrotes & Lácteos',
    distance: '350 metros',
    walkTime: '4 min a pie',
    availableDeals: 6,
    deliveryOption: 'Recogida gratis o domicilio $2.000 COP',
    address: 'Calle 45 # 13-20',
    coords: { x: 38, y: 35 },
  });

  const shops: ShopPin[] = [
    {
      id: 'shop-1',
      name: 'Minimarket Don Pedro',
      category: 'Abarrotes & Lácteos',
      distance: '350 metros',
      walkTime: '4 min a pie',
      availableDeals: 6,
      deliveryOption: 'Recogida gratis o domicilio $2.000 COP',
      address: 'Calle 45 # 13-20',
      coords: { x: 38, y: 35 },
    },
    {
      id: 'shop-2',
      name: 'Panadería La Espiga Dorada',
      category: 'Panadería & Repostería',
      distance: '520 metros',
      walkTime: '6 min a pie',
      availableDeals: 4,
      deliveryOption: 'Recogida gratis o domicilio $2.000 COP',
      address: 'Carrera 12 # 42-15',
      coords: { x: 65, y: 28 },
    },
    {
      id: 'shop-3',
      name: 'Frutería Los Andes',
      category: 'Frutas & Verduras',
      distance: '750 metros',
      walkTime: '9 min a pie',
      availableDeals: 5,
      deliveryOption: 'Recogida gratis o domicilio $2.000 COP',
      address: 'Av. Las Palmas # 19-02',
      coords: { x: 25, y: 68 },
    },
    {
      id: 'shop-4',
      name: 'Tienda Doña Carmen',
      category: 'Víveres y Empacados',
      distance: '980 metros',
      walkTime: '12 min a pie',
      availableDeals: 3,
      deliveryOption: 'Recogida gratis o domicilio $2.000 COP',
      address: 'Transversal 7 # 39-44',
      coords: { x: 74, y: 70 },
    },
    {
      id: 'shop-5',
      name: 'Lácteos Santa Clara',
      category: 'Quesos & Yogures',
      distance: '1.4 km',
      walkTime: '17 min a pie / 5 min bici',
      availableDeals: 7,
      deliveryOption: 'Domicilio preferente $2.000 COP',
      address: 'Calle 52 # 15-80',
      coords: { x: 82, y: 45 },
    },
  ];

  return (
    <section id="cerca-de-ti" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Modelo de proximidad hiperlocal
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Comprar cerca de ti: El valor del barrio
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Aprovecha conecta a las personas con las tiendas de su vecindario para garantizar
            frescura, rapidez y una logística solidaria y económica.
          </p>
        </div>

        {/* 2-Column Split: Interactive Map Graphic & Features */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Interactive Neighborhood Map Simulation */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFBED] rounded-3xl p-6 sm:p-8 border border-[#00603F]/15 shadow-md relative overflow-hidden">
              
              {/* Header inside Map simulation */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#00603F] text-white flex items-center justify-center">
                    <Compass className="w-4 h-4 text-[#FF9217]" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider block">
                      Simulación visual
                    </span>
                    <span className="text-sm font-extrabold text-[#00603F]">
                      Radio de cobertura barrial (2 km)
                    </span>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-neutral-600 bg-white px-3 py-1 rounded-full border border-neutral-200">
                  <span className="w-2 h-2 rounded-full bg-[#00603F]" />
                  <span>Haz clic en los puntos del mapa</span>
                </div>
              </div>

              {/* Map Graphic Canvas */}
              <div className="relative aspect-4/3 w-full bg-[#FAF5E4] rounded-2xl border-2 border-[#00603F]/20 overflow-hidden shadow-inner">
                {/* Street grid stylized lines */}
                <svg className="absolute inset-0 w-full h-full opacity-40" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#00603F" strokeWidth="1" strokeDasharray="3 3" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                  {/* Stylized Avenue paths */}
                  <line x1="0" y1="50%" x2="100%" y2="50%" stroke="#00603F" strokeWidth="6" strokeOpacity="0.3" />
                  <line x1="50%" y1="0" x2="50%" y2="100%" stroke="#00603F" strokeWidth="6" strokeOpacity="0.3" />
                  <line x1="10%" y1="90%" x2="90%" y2="10%" stroke="#FF9217" strokeWidth="3" strokeOpacity="0.4" />
                </svg>

                {/* 2 km Coverage Circle Ripple */}
                <div className="absolute inset-6 rounded-full border-2 border-dashed border-[#00603F]/40 flex items-center justify-center pointer-events-none">
                  <span className="absolute top-2 text-[10px] font-extrabold text-[#00603F] bg-white/90 px-2 py-0.5 rounded-full border border-[#00603F]/30 shadow-xs">
                    Límite máximo 2 km
                  </span>
                </div>

                {/* User Center Location */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none z-10"
                >
                  <div className="w-8 h-8 rounded-full bg-[#00603F] text-white flex items-center justify-center shadow-lg ring-4 ring-[#00603F]/20">
                    <Navigation className="w-4 h-4 fill-white" />
                  </div>
                  <span className="mt-1 text-[11px] font-bold text-[#00603F] bg-white/95 px-2 py-0.5 rounded-md shadow-xs border border-[#00603F]/20 whitespace-nowrap">
                    Tu Casa / Ubicación
                  </span>
                </div>

                {/* Interactive Store Pins */}
                {shops.map((shop) => {
                  const isSelected = selectedShop.id === shop.id;
                  return (
                    <button
                      key={shop.id}
                      type="button"
                      onClick={() => setSelectedShop(shop)}
                      style={{ top: `${shop.coords.y}%`, left: `${shop.coords.x}%` }}
                      className={`absolute -translate-x-1/2 -translate-y-1/2 group cursor-pointer focus:outline-hidden transition-transform duration-200 ${
                        isSelected ? 'scale-125 z-20' : 'hover:scale-110 z-10'
                      }`}
                      aria-label={`Ver detalles de ${shop.name}`}
                    >
                      <div
                        className={`w-9 h-9 rounded-2xl flex items-center justify-center shadow-md transition-all ${
                          isSelected
                            ? 'bg-[#FF9217] text-white ring-4 ring-[#FF9217]/30 scale-105'
                            : 'bg-white text-[#00603F] border-2 border-[#00603F]'
                        }`}
                      >
                        <Store className="w-4 h-4" />
                      </div>
                      <span
                        className={`hidden sm:block absolute -bottom-5 left-1/2 -translate-x-1/2 text-[10px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded-sm shadow-xs ${
                          isSelected
                            ? 'bg-[#00603F] text-white'
                            : 'bg-white text-neutral-800 border border-neutral-200'
                        }`}
                      >
                        {shop.name}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Selected Store Inspector Card */}
              <div className="mt-4 p-4 bg-white rounded-2xl border-2 border-[#00603F]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#FF9217] bg-[#FF9217]/10 px-2 py-0.5 rounded-sm">
                      {selectedShop.category}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">·</span>
                    <span className="text-xs text-neutral-600 font-medium">{selectedShop.address}</span>
                  </div>
                  <h4 className="font-extrabold text-[#00603F] text-base mt-1">
                    {selectedShop.name}
                  </h4>
                  <div className="flex items-center gap-3 text-xs text-neutral-600 mt-1">
                    <span className="font-bold text-[#FF9217]">{selectedShop.distance}</span>
                    <span>·</span>
                    <span>{selectedShop.walkTime}</span>
                    <span>·</span>
                    <span className="font-semibold text-[#00603F]">
                      {selectedShop.availableDeals} ofertas hoy
                    </span>
                  </div>
                </div>

                <div className="shrink-0 flex items-center gap-2 bg-[#FFFBED] p-2.5 rounded-xl border border-[#00603F]/10">
                  <Bike className="w-5 h-5 text-[#00603F]" />
                  <div className="text-left">
                    <p className="text-[10px] uppercase font-bold text-neutral-500">Domicilio local</p>
                    <p className="text-xs font-extrabold text-[#00603F]">Máx. $2.000 COP</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Model Principles & Rules */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-[#FFFBED] rounded-2xl p-6 border border-[#00603F]/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#00603F] text-white flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-[#FF9217]" />
                </div>
                <h3 className="text-lg font-bold text-[#00603F]">
                  Cobertura máxima de 2 kilómetros
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                El radio de acción está limitado deliberadamente a 2 kilómetros. Esto asegura que
                los alimentos se consuman frescos, evita desplazamientos largos y fomenta el
                comercio dentro del mismo barrio.
              </p>
            </div>

            <div className="bg-[#FFFBED] rounded-2xl p-6 border border-[#00603F]/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#FF9217] text-white flex items-center justify-center shrink-0">
                  <Store className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-neutral-900">
                  Recogida en tienda sin costo
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Los compradores pueden reservar desde su teléfono y pasar caminando por la tienda en
                pocos minutos, saludando al tendero de confianza y sin pagar ningún recargo de
                entrega.
              </p>
            </div>

            <div className="bg-[#FFFBED] rounded-2xl p-6 border border-[#00603F]/10">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-[#00603F] text-white flex items-center justify-center shrink-0">
                  <Bike className="w-5 h-5 text-[#FF9217]" />
                </div>
                <h3 className="text-lg font-bold text-[#00603F]">
                  Domicilio barrial a máx. $2.000 COP
                </h3>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                Para quienes prefieran recibir en casa o restaurantes del sector, se prevé una tarifa
                de domicilio máxima y accesible de $2.000 COP gestionada de manera ágil con repartidores
                o personal del mismo vecindario.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-500 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#00603F] shrink-0" />
              <span>
                En esta fase informativa, la ilustración muestra la lógica de proximidad sin requerir GPS activo ni geolocalización invasiva.
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
