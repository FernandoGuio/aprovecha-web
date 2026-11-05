import React, { useState } from 'react';
import { X, CheckCircle, Clock, MapPin, Store, Bike, Sparkles, ShieldCheck } from 'lucide-react';

export interface OfferProduct {
  id: string;
  name: string;
  category: string;
  image: string;
  originalPrice: number;
  discountPrice: number;
  expiryDate: string;
  daysLeft: number;
  storeName: string;
  storeDistance: string;
  storeAddress: string;
  unitsAvailable: number;
  unitType: string;
}

interface ReservationModalProps {
  product: OfferProduct | null;
  onClose: () => void;
}

export const ReservationModal: React.FC<ReservationModalProps> = ({ product, onClose }) => {
  const [deliveryType, setDeliveryType] = useState<'pickup' | 'delivery'>('pickup');
  const [quantity, setQuantity] = useState(1);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!product) return null;

  const discountPercent = Math.round(
    ((product.originalPrice - product.discountPrice) / product.originalPrice) * 100
  );
  const savingsPerUnit = product.originalPrice - product.discountPrice;
  const deliveryFee = deliveryType === 'delivery' ? 2000 : 0;
  const subtotal = product.discountPrice * quantity;
  const total = subtotal + deliveryFee;
  const totalSavings = savingsPerUnit * quantity;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="reservation-title"
      className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="bg-[#FFFBED] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#00603F]/20 relative my-8">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50 transition-colors"
          aria-label="Cerrar simulación"
        >
          <X className="w-5 h-5" />
        </button>

        {!isConfirmed ? (
          <div>
            {/* Modal Header */}
            <div className="mb-5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF9217] bg-[#FF9217]/10 px-2.5 py-1 rounded-md">
                Simulación demostrativa
              </span>
              <h3 id="reservation-title" className="text-2xl font-extrabold text-[#00603F] mt-2">
                Simular reserva de producto
              </h3>
              <p className="text-xs text-neutral-500 mt-1">
                Visualiza cómo un comprador asegura su oferta en Aprovecha. No se requiere pago ni registro.
              </p>
            </div>

            {/* Product Summary Item */}
            <div className="flex gap-4 p-4 bg-white rounded-2xl border border-[#00603F]/10 mb-5">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 rounded-xl object-cover shrink-0"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs text-[#00603F] font-semibold flex items-center gap-1">
                  <Store className="w-3.5 h-3.5" />
                  <span className="truncate">{product.storeName}</span>
                </p>
                <h4 className="font-bold text-neutral-900 text-base leading-snug truncate mt-0.5">
                  {product.name}
                </h4>
                <div className="flex items-center gap-2 text-xs text-neutral-600 mt-1">
                  <span className="line-through text-neutral-400">
                    ${product.originalPrice.toLocaleString('es-CO')}
                  </span>
                  <span className="font-extrabold text-[#00603F] text-sm">
                    ${product.discountPrice.toLocaleString('es-CO')} COP
                  </span>
                  <span className="text-[#FF9217] font-bold">-{discountPercent}%</span>
                </div>
                <div className="flex items-center gap-1.5 text-[11px] text-[#FF9217] font-bold mt-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Vence: {product.expiryDate} ({product.daysLeft} días)</span>
                </div>
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-5">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Cantidad a reservar
              </label>
              <div className="flex items-center gap-3">
                {[1, 2, 3].map((qty) => (
                  <button
                    key={qty}
                    type="button"
                    onClick={() => setQuantity(qty)}
                    className={`flex-1 py-2 rounded-xl text-sm font-bold border transition-all cursor-pointer ${
                      quantity === qty
                        ? 'border-[#00603F] bg-[#00603F] text-white shadow-xs'
                        : 'border-neutral-200 bg-white text-neutral-700 hover:border-[#00603F]/40'
                    }`}
                  >
                    {qty} {product.unitType}
                  </button>
                ))}
              </div>
            </div>

            {/* Delivery / Pick-up mode */}
            <div className="mb-6">
              <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-2">
                Método de entrega
              </label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setDeliveryType('pickup')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    deliveryType === 'pickup'
                      ? 'border-[#00603F] bg-[#00603F]/5 ring-2 ring-[#00603F]'
                      : 'border-neutral-200 bg-white hover:border-[#00603F]/30'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Store className="w-5 h-5 text-[#00603F]" />
                    <span className="text-[10px] font-extrabold text-[#00603F] uppercase">Gratis</span>
                  </div>
                  <p className="font-bold text-sm text-neutral-900">Recoger en tienda</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">{product.storeDistance} caminando</p>
                </button>

                <button
                  type="button"
                  onClick={() => setDeliveryType('delivery')}
                  className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                    deliveryType === 'delivery'
                      ? 'border-[#FF9217] bg-[#FF9217]/5 ring-2 ring-[#FF9217]'
                      : 'border-neutral-200 bg-white hover:border-[#FF9217]/40'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <Bike className="w-5 h-5 text-[#FF9217]" />
                    <span className="text-[10px] font-extrabold text-[#FF9217] uppercase">$2.000 COP</span>
                  </div>
                  <p className="font-bold text-sm text-neutral-900">Domicilio barrial</p>
                  <p className="text-[11px] text-neutral-500 mt-0.5">En menos de 45 minutos</p>
                </button>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-2xl p-4 border border-neutral-200 mb-6 space-y-2 text-xs">
              <div className="flex justify-between text-neutral-600">
                <span>Subtotal ({quantity} {product.unitType})</span>
                <span className="font-medium">${subtotal.toLocaleString('es-CO')} COP</span>
              </div>
              <div className="flex justify-between text-neutral-600">
                <span>Domicilio</span>
                <span className="font-medium">
                  {deliveryFee === 0 ? 'Gratis ($0 COP)' : `$${deliveryFee.toLocaleString('es-CO')} COP`}
                </span>
              </div>
              <div className="flex justify-between text-[#00603F] font-bold">
                <span>Tu ahorro estimado</span>
                <span>-${totalSavings.toLocaleString('es-CO')} COP</span>
              </div>
              <div className="pt-2 border-t border-neutral-100 flex justify-between text-sm font-extrabold text-neutral-900">
                <span>Total a pagar en entrega</span>
                <span className="text-[#00603F] text-base">${total.toLocaleString('es-CO')} COP</span>
              </div>
            </div>

            {/* Confirm button */}
            <button
              type="button"
              onClick={() => setIsConfirmed(true)}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#00603F] hover:bg-[#004d32] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FF9217]" />
              <span>Confirmar simulación de reserva</span>
            </button>
          </div>
        ) : (
          /* Confirmation State */
          <div className="text-center py-4">
            <div className="w-16 h-16 rounded-full bg-[#00603F]/10 text-[#00603F] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-10 h-10 text-[#00603F]" />
            </div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF9217]">
              Demostración exitosa
            </span>
            <h3 className="text-2xl font-extrabold text-[#00603F] mt-1 mb-2">
              ¡Reserva simulada con éxito!
            </h3>
            <p className="text-sm text-neutral-600 max-w-sm mx-auto mb-6">
              En la aplicación real, el tendero de <span className="font-bold text-neutral-900">{product.storeName}</span> recibiría la reserva y tú recibirías un código QR para recoger tu producto o el aviso de despacho a tu puerta.
            </p>

            <div className="bg-white rounded-2xl p-4 border border-[#00603F]/20 text-left mb-6 max-w-sm mx-auto">
              <p className="text-[11px] uppercase tracking-wider font-bold text-neutral-400 mb-1">
                Resumen demostrativo
              </p>
              <p className="text-sm font-bold text-neutral-900">{quantity}x {product.name}</p>
              <p className="text-xs text-neutral-600">
                Modalidad: {deliveryType === 'pickup' ? 'Recogida en tienda' : 'Domicilio local ($2.000 COP)'}
              </p>
              <p className="text-xs font-bold text-[#00603F] mt-1">
                Total pactado: ${total.toLocaleString('es-CO')} COP (Ahorraste ${totalSavings.toLocaleString('es-CO')} COP)
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 px-6 rounded-xl font-bold text-white bg-[#00603F] hover:bg-[#004d32] transition-colors cursor-pointer"
            >
              Entendido, volver a las ofertas
            </button>
          </div>
        )}

        {/* Informative footer guarantee */}
        <div className="mt-5 pt-4 border-t border-neutral-200/80 flex items-center justify-center gap-2 text-[11px] text-neutral-500">
          <ShieldCheck className="w-3.5 h-3.5 text-[#00603F]" />
          <span>Productos demostrativos con fecha apta garantizada</span>
        </div>

      </div>
    </div>
  );
};
