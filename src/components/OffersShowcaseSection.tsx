import React, { useState } from 'react';
import { Clock, Store, Tag, Sparkles, Info, ShoppingBag } from 'lucide-react';
import { OfferProduct, ReservationModal } from './ReservationModal';

// High-fidelity image assets generated
const DAIRY_IMAGE = '/src/assets/images/dairy_cheese_market_1793897675212.jpg';
const BAKERY_IMAGE = '/src/assets/images/bakery_bread_artisan_1793897676116.jpg';
const FRUITS_IMAGE = '/src/assets/images/fresh_fruits_market_1793897676556.jpg';

const SAMPLE_PRODUCTS: OfferProduct[] = [
  {
    id: 'prod-1',
    name: 'Queso Campesino Artesanal (500g)',
    category: 'lacteos',
    image: DAIRY_IMAGE,
    originalPrice: 14500,
    discountPrice: 7900,
    expiryDate: '09 Nov',
    daysLeft: 3,
    storeName: 'Lácteos & Quesera Don Rafael',
    storeDistance: '350 m',
    storeAddress: 'Cra 15 # 45-22',
    unitsAvailable: 4,
    unitType: 'bloques',
  },
  {
    id: 'prod-2',
    name: 'Pack Panes de Masa Madre & Croissants',
    category: 'panaderia',
    image: BAKERY_IMAGE,
    originalPrice: 18000,
    discountPrice: 9500,
    expiryDate: '08 Nov',
    daysLeft: 2,
    storeName: 'Panadería La Espiga de Oro',
    storeDistance: '200 m',
    storeAddress: 'Calle 44 # 12-10',
    unitsAvailable: 6,
    unitType: 'packs',
  },
  {
    id: 'prod-3',
    name: 'Caja Mixta Frutas de Temporada (2.5 kg)',
    category: 'frutas',
    image: FRUITS_IMAGE,
    originalPrice: 16000,
    discountPrice: 8800,
    expiryDate: '10 Nov',
    daysLeft: 4,
    storeName: 'Frutería & Verduras Los Andes',
    storeDistance: '500 m',
    storeAddress: 'Av. El Libertador # 18-04',
    unitsAvailable: 3,
    unitType: 'cajas',
  },
  {
    id: 'prod-4',
    name: 'Yogurt Griego Natural con Frutos Rojos (1L)',
    category: 'lacteos',
    image: DAIRY_IMAGE,
    originalPrice: 13000,
    discountPrice: 6500,
    expiryDate: '08 Nov',
    daysLeft: 2,
    storeName: 'Minimarket San Jorge',
    storeDistance: '420 m',
    storeAddress: 'Transversal 8 # 52-19',
    unitsAvailable: 5,
    unitType: 'botellas',
  },
  {
    id: 'prod-5',
    name: 'Baguette Tradicional & Pandebonos (6 uds)',
    category: 'panaderia',
    image: BAKERY_IMAGE,
    originalPrice: 9000,
    discountPrice: 4500,
    expiryDate: '07 Nov',
    daysLeft: 1,
    storeName: 'Panadería y Pastelería Doña Carmen',
    storeDistance: '150 m',
    storeAddress: 'Calle 47 # 9-33',
    unitsAvailable: 8,
    unitType: 'paquetes',
  },
  {
    id: 'prod-6',
    name: 'Tomates Chonto & Aguacates Hass Selección',
    category: 'frutas',
    image: FRUITS_IMAGE,
    originalPrice: 12000,
    discountPrice: 6200,
    expiryDate: '11 Nov',
    daysLeft: 5,
    storeName: 'Supertienda El Vecino',
    storeDistance: '680 m',
    storeAddress: 'Carrera 11 # 40-15',
    unitsAvailable: 4,
    unitType: 'mallas',
  },
];

export const OffersShowcaseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [selectedProduct, setSelectedProduct] = useState<OfferProduct | null>(null);

  const categories = [
    { id: 'todos', label: 'Todas las ofertas' },
    { id: 'lacteos', label: 'Lácteos y Quesos' },
    { id: 'panaderia', label: 'Panadería y Horno' },
    { id: 'frutas', label: 'Frutas y Verduras' },
  ];

  const filteredProducts =
    selectedCategory === 'todos'
      ? SAMPLE_PRODUCTS
      : SAMPLE_PRODUCTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="ofertas" className="py-20 md:py-28 bg-[#FFFBED] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#FF9217] mb-2">
            Catálogo interactivo
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Descubre cómo se ven las ofertas
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Así es como los compradores descubren y aprovechan oportunidades de ahorro en tiempo
            real cerca de su casa.
          </p>
        </div>

        {/* Demo Disclaimer Box (Mandatory requirement) */}
        <div className="mb-10 max-w-4xl mx-auto bg-white rounded-2xl p-4 sm:p-5 border border-[#FF9217]/40 shadow-xs flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-[#FF9217]/10 text-[#FF9217] shrink-0 mt-0.5">
            <Info className="w-5 h-5" />
          </div>
          <div className="text-xs sm:text-sm text-neutral-700">
            <span className="font-bold text-neutral-900 block mb-0.5">
              Demostración visual del producto tecnológico
            </span>
            Los siguientes artículos, tiendas y precios son <span className="font-semibold text-[#00603F]">ejemplos ilustrativos</span> diseñados para mostrar la interfaz final. No representan inventario comercial en tiempo real. Todos los alimentos en Aprovecha se publican dentro de su periodo de consumo apto.
          </div>
        </div>

        {/* Category Tabs (Interactive Filter Controls) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer whitespace-nowrap shrink-0 ${
                selectedCategory === cat.id
                  ? 'bg-[#00603F] text-white shadow-sm'
                  : 'bg-white text-neutral-700 hover:text-[#00603F] hover:bg-neutral-100/70 border border-[#00603F]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => {
            const discountPercent = Math.round(
              ((product.originalPrice - product.discountPrice) / product.originalPrice) * 100
            );
            const savings = product.originalPrice - product.discountPrice;

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#00603F]/10 hover:border-[#FF9217]/60 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Image & Badges Container */}
                <div className="relative aspect-4/3 overflow-hidden bg-neutral-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                  {/* Gradient Scrim for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Discount Badge in Brand Orange */}
                  <div className="absolute top-3 left-3 bg-[#FF9217] text-white px-3 py-1 rounded-full text-xs font-black shadow-md flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" />
                    <span>-{discountPercent}% OFF</span>
                  </div>

                  {/* Expiry Badge with High Visibility */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-xs text-[#00603F] px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#FF9217]" />
                    <span>Vence en {product.daysLeft} {product.daysLeft === 1 ? 'día' : 'días'}</span>
                  </div>

                  {/* Store Name and Distance Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 text-white flex items-center justify-between text-xs font-medium">
                    <div className="flex items-center gap-1.5 truncate">
                      <Store className="w-3.5 h-3.5 text-[#FF9217] shrink-0" />
                      <span className="truncate drop-shadow-xs font-semibold">{product.storeName}</span>
                    </div>
                    <span className="shrink-0 text-white/90 drop-shadow-xs font-bold">
                      {product.storeDistance}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Unboxed Metadata Line (Anti-Slop) */}
                    <div className="flex items-center gap-2 text-xs text-neutral-500 font-medium mb-2">
                      <span className="capitalize">{product.category}</span>
                      <span aria-hidden="true">·</span>
                      <span className="text-[#FF9217] font-semibold">{product.unitsAvailable} disponibles</span>
                      <span aria-hidden="true">·</span>
                      <span>Fecha límite: {product.expiryDate}</span>
                    </div>

                    <h3 className="font-bold text-lg text-neutral-900 group-hover:text-[#00603F] transition-colors line-clamp-1 mb-4">
                      {product.name}
                    </h3>

                    {/* Price and Savings Box */}
                    <div className="bg-[#FFFBED] rounded-2xl p-4 border border-[#00603F]/10 mb-5">
                      <div className="flex items-baseline justify-between mb-1">
                        <span className="text-xs text-neutral-500 line-through">
                          Antes: ${product.originalPrice.toLocaleString('es-CO')}
                        </span>
                        <span className="text-xs font-bold text-[#FF9217]">
                          Ahorras ${savings.toLocaleString('es-CO')} COP
                        </span>
                      </div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-black text-[#00603F] tabular-nums">
                          ${product.discountPrice.toLocaleString('es-CO')}
                        </span>
                        <span className="text-xs font-bold text-neutral-600">COP</span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Simulate Reservation Button */}
                  <button
                    type="button"
                    onClick={() => setSelectedProduct(product)}
                    className="w-full py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-white bg-[#00603F] hover:bg-[#004d32] active:scale-[0.99] transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs group-hover:shadow-md"
                  >
                    <ShoppingBag className="w-4 h-4 text-[#FF9217]" />
                    <span>Simular reserva de este producto</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom prompt */}
        <div className="mt-12 text-center text-xs text-neutral-500">
          Haz clic en cualquier producto para probar cómo funciona la reserva demostrativa.
        </div>

      </div>

      {/* Reservation Interactive Modal */}
      <ReservationModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
};
