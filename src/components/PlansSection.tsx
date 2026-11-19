import React, { useState } from 'react';
import {
  CheckCircle2,
  Store,
  TrendingUp,
  Award,
  Sparkles,
  Info,
  X,
  ArrowRight,
  GraduationCap,
} from 'lucide-react';

interface PlanInfo {
  id: 'basico' | 'crece' | 'preferente';
  name: string;
  badge: string;
  priceLabel: string;
  subtitle: string;
  features: string[];
  highlighted?: boolean;
  ctaLabel: string;
}

interface PlansSectionProps {
  onSelectPlanForContact?: (planName: string) => void;
}

export const PlansSection: React.FC<PlansSectionProps> = ({ onSelectPlanForContact }) => {
  const [consultedPlan, setConsultedPlan] = useState<PlanInfo | null>(null);

  const plans: PlanInfo[] = [
    {
      id: 'basico',
      name: 'Básico',
      badge: 'Punto de partida',
      priceLabel: 'Gratis',
      subtitle:
        'Ideal para dar visibilidad inicial a tu tienda y empezar a conectar con compradores cercanos.',
      features: [
        'Registro del establecimiento.',
        'Capacitación inicial gratuita.',
        'Publicación básica de productos.',
        'Gestión de pedidos.',
        'Guías de uso y soporte general.',
      ],
      ctaLabel: 'Consultar condiciones',
    },
    {
      id: 'crece',
      name: 'Crece',
      badge: 'Mayor alcance',
      priceLabel: 'Consultar condiciones',
      subtitle:
        'Pensado para tiendas que desean ampliar sus publicaciones y recibir orientación grupal remota.',
      features: [
        'Incluye capacitación inicial gratuita.',
        'Mayor capacidad de publicación.',
        'Estadísticas básicas e historial de ventas, cuando estén disponibles.',
        'Orientación grupal remota.',
        'Recomendaciones generales sobre publicaciones y promociones.',
      ],
      highlighted: true,
      ctaLabel: 'Consultar condiciones',
    },
    {
      id: 'preferente',
      name: 'Preferente',
      badge: 'Acompañamiento mensual',
      priceLabel: 'Consultar condiciones',
      subtitle:
        'Para comercios que buscan mayor visibilidad y asesoría individual remota programada.',
      features: [
        'Incluye capacitación inicial gratuita.',
        'Mayor visibilidad en la plataforma.',
        'Estadísticas avanzadas, cuando estén disponibles.',
        'Atención prioritaria.',
        'Una asesoría individual remota programada al mes.',
        'Revisión de publicaciones y recomendaciones de comercialización.',
      ],
      ctaLabel: 'Consultar condiciones',
    },
  ];

  const handleGoToContact = (planName: string) => {
    setConsultedPlan(null);
    if (onSelectPlanForContact) {
      onSelectPlanForContact(planName);
    }
    const contactEl = document.getElementById('contacto');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planes" className="py-20 md:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#00603F] mb-2">
            Niveles de servicio
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#00603F] tracking-tight mb-4">
            Planes para tenderos
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 font-normal">
            Elige el nivel de herramientas y acompañamiento remoto que mejor se adapte al momento
            de tu tienda de barrio.
          </p>
        </div>

        {/* Free Initial Training Banner */}
        <div className="max-w-4xl mx-auto mb-12 bg-[#FFFBED] rounded-2xl p-4 sm:p-5 border border-[#00603F]/20 flex flex-col sm:flex-row items-center justify-center gap-3 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#00603F] text-[#FF9217] flex items-center justify-center shrink-0">
            <GraduationCap className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-neutral-700 font-medium">
            <strong className="text-[#00603F]">Capacitación inicial gratuita para todos:</strong>{' '}
            todos los tenderos reciben orientación inicial sin costo para aprender a usar la
            plataforma, independientemente del plan que elijan.
          </p>
        </div>

        {/* 3 Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const isHighlighted = Boolean(plan.highlighted);
            const Icon =
              plan.id === 'basico' ? Store : plan.id === 'crece' ? TrendingUp : Award;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isHighlighted
                    ? 'bg-[#FFFBED] border-2 border-[#FF9217] shadow-lg hover:shadow-xl'
                    : 'bg-[#FFFBED]/50 border-2 border-[#00603F]/15 shadow-xs hover:shadow-lg'
                }`}
              >
                {isHighlighted && (
                  <div className="absolute -top-3.5 left-8 bg-[#FF9217] text-white text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-xs">
                    Acompañamiento grupal
                  </div>
                )}

                <div>
                  {/* Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`w-13 h-13 rounded-2xl flex items-center justify-center shadow-xs ${
                        isHighlighted
                          ? 'bg-[#FF9217] text-white'
                          : 'bg-[#00603F] text-[#FF9217]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-neutral-600 bg-white px-3 py-1 rounded-full border border-neutral-200">
                      {plan.badge}
                    </span>
                  </div>

                  {/* Plan Title & Price/Terms Label */}
                  <h3 className="text-2xl font-extrabold text-[#00603F] mb-1">
                    {plan.name}
                  </h3>
                  <p
                    className={`text-lg font-extrabold mb-3 ${
                      plan.id === 'basico' ? 'text-[#00603F]' : 'text-[#FF9217]'
                    }`}
                  >
                    {plan.priceLabel}
                  </p>
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {plan.subtitle}
                  </p>

                  {/* Features list */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <CheckCircle2
                          className={`w-5 h-5 shrink-0 mt-0.5 ${
                            isHighlighted ? 'text-[#FF9217]' : 'text-[#00603F]'
                          }`}
                        />
                        <span className="text-sm text-neutral-700 leading-snug font-medium">
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <button
                  type="button"
                  onClick={() => setConsultedPlan(plan)}
                  className={`w-full py-3.5 px-5 rounded-xl text-sm font-bold transition-all cursor-pointer flex items-center justify-center gap-2 shadow-xs ${
                    isHighlighted
                      ? 'bg-[#FF9217] hover:bg-[#e67f0b] text-white'
                      : 'bg-[#00603F] hover:bg-[#004d32] text-white'
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Validation Disclaimer */}
        <div className="mt-10 max-w-3xl mx-auto flex items-start gap-3 text-xs sm:text-sm text-neutral-500 bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
          <Info className="w-5 h-5 text-[#00603F] shrink-0 mt-0.5" />
          <p>
            El plan <strong>Básico</strong> es gratuito para vincular tu tienda y acceder a la
            capacitación inicial. Los precios y el alcance definitivo de los planes{' '}
            <strong>Crece</strong> y <strong>Preferente</strong> están sujetos a validación con los
            comerciantes participantes.
          </p>
        </div>

      </div>

      {/* Modal: Plan Conditions Inquiry */}
      {consultedPlan && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="plan-modal-title"
          className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
        >
          <div className="bg-[#FFFBED] rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border-2 border-[#00603F]/20 relative">
            <button
              type="button"
              onClick={() => setConsultedPlan(null)}
              className="absolute top-5 right-5 p-2 rounded-full text-neutral-400 hover:text-neutral-700 hover:bg-neutral-200/50 transition-colors cursor-pointer"
              aria-label="Cerrar condiciones del plan"
            >
              <X className="w-5 h-5" />
            </button>

            <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF9217] bg-[#FF9217]/10 px-2.5 py-1 rounded-md">
              Condiciones del servicio
            </span>

            <h3 id="plan-modal-title" className="text-2xl font-extrabold text-[#00603F] mt-2">
              Plan {consultedPlan.name}
            </h3>
            <p className="text-sm font-bold text-[#FF9217] mt-0.5">
              {consultedPlan.id === 'basico'
                ? 'Gratis · Incluye capacitación inicial sin costo'
                : 'Tarifa y alcance definitivo sujetos a validación'}
            </p>

            <div className="bg-white rounded-2xl p-5 border border-[#00603F]/10 my-5">
              <p className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3">
                Qué contempla este nivel:
              </p>
              <ul className="space-y-2.5">
                {consultedPlan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-[#00603F] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-neutral-600 leading-relaxed mb-6">
              Todas las modalidades incluyen la orientación inicial gratuita de vinculación con un
              Aprovechólogo. Déjanos tus datos de contacto para explicarte las condiciones vigentes
              en tu zona.
            </p>

            <button
              type="button"
              onClick={() => handleGoToContact(consultedPlan.name)}
              className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#00603F] hover:bg-[#004d32] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-[#FF9217]" />
              <span>Solicitar información sobre el Plan {consultedPlan.name}</span>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
