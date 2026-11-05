import React, { useState } from 'react';
import { Logo } from './Logo';
import { Mail, Send, CheckCircle, ArrowRight, Instagram, Facebook, Linkedin, MessageCircle, Heart } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  const [role, setRole] = useState<'tendero' | 'comprador'>('comprador');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [neighborhood, setNeighborhood] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Por favor ingresa un correo electrónico válido.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: '¿Qué es Aprovecha?', href: '#que-es' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Ofertas demostrativas', href: '#ofertas' },
    { label: 'Modelo de proximidad', href: '#cerca-de-ti' },
    { label: 'Beneficios del proyecto', href: '#beneficios' },
  ];

  return (
    <footer id="contacto" className="bg-[#004d32] text-white pt-20 pb-12 relative overflow-hidden border-t-4 border-[#FF9217]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Pre-Registration Interest Form */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 text-neutral-900 shadow-2xl border border-neutral-100 mb-16 relative">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-[#FF9217] bg-[#FF9217]/10 px-3 py-1 rounded-full inline-block mb-3">
              Conexión y Contacto
            </span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#00603F] tracking-tight">
              ¿Quieres ser parte del piloto en tu barrio?
            </h3>
            <p className="text-neutral-600 text-sm sm:text-base mt-2">
              Déjanos tus datos de contacto para enterarte del lanzamiento de la plataforma o para vincular tu tienda de barrio.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
              {/* Role Selector */}
              <div className="flex p-1 bg-[#FFFBED] rounded-xl border border-[#00603F]/20 mb-6">
                <button
                  type="button"
                  onClick={() => setRole('comprador')}
                  className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    role === 'comprador'
                      ? 'bg-[#FF9217] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-[#00603F]'
                  }`}
                >
                  Soy Comprador / Hogar
                </button>
                <button
                  type="button"
                  onClick={() => setRole('tendero')}
                  className={`flex-1 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    role === 'tendero'
                      ? 'bg-[#00603F] text-white shadow-xs'
                      : 'text-neutral-700 hover:text-[#00603F]'
                  }`}
                >
                  Soy Tendero / Comercio
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    {role === 'tendero' ? 'Nombre del establecimiento' : 'Tu nombre completo'}
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={role === 'tendero' ? 'Ej. Minimarket San Pedro' : 'Ej. María Pérez'}
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#00603F] focus:ring-2 focus:ring-[#00603F]/20 text-sm outline-hidden transition-all bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                    Barrio / Ciudad
                  </label>
                  <input
                    type="text"
                    required
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    placeholder="Ej. Chapinero, Bogotá"
                    className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#00603F] focus:ring-2 focus:ring-[#00603F]/20 text-sm outline-hidden transition-all bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-neutral-700 uppercase tracking-wider mb-1.5">
                  Correo electrónico de contacto
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ejemplo@correo.com"
                  className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-[#00603F] focus:ring-2 focus:ring-[#00603F]/20 text-sm outline-hidden transition-all bg-white"
                />
              </div>

              {error && (
                <p className="text-xs font-semibold text-red-600 bg-red-50 p-2.5 rounded-lg">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-white bg-[#00603F] hover:bg-[#003824] active:scale-[0.99] shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>Registrar mi interés en Aprovecha</span>
                <Send className="w-4 h-4 text-[#FF9217]" />
              </button>

              <p className="text-[11px] text-center text-neutral-500">
                Respetamos tu privacidad. Tus datos serán utilizados exclusivamente para informarte sobre el proyecto.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto text-center py-6">
              <div className="w-16 h-16 rounded-full bg-[#00603F]/10 text-[#00603F] flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-10 h-10 text-[#00603F]" />
              </div>
              <h4 className="text-2xl font-extrabold text-[#00603F] mb-2">
                ¡Gracias por tu interés en Aprovecha!
              </h4>
              <p className="text-sm text-neutral-600 mb-6">
                Hemos registrado a <span className="font-bold text-neutral-900">{name || email}</span> con el rol de <span className="font-bold text-[#FF9217]">{role === 'tendero' ? 'Tendero' : 'Comprador'}</span> para el sector de {neighborhood || 'tu barrio'}. Te contactaremos con los avances del proyecto.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setEmail('');
                  setName('');
                  setNeighborhood('');
                }}
                className="text-xs font-bold text-[#00603F] hover:underline cursor-pointer"
              >
                Registrar otro contacto o establecimiento
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation & Brand Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Mission */}
          <div className="md:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-block bg-[#FFFBED] p-2 rounded-2xl shadow-sm mb-2">
                <Logo size="lg" />
              </div>
              
              <p className="text-[#FFFBED]/80 text-sm leading-relaxed mt-4 max-w-sm">
                Iniciativa tecnológica que conecta tiendas de barrio con hogares y restaurantes para
                facilitar la comercialización de alimentos próximos a su fecha de vencimiento a precios
                especiales, evitando pérdidas y reduciendo el desperdicio.
              </p>
            </div>

            {/* Official Closing Message (Mandatory) */}
            <div className="mt-6 pt-4 border-t border-white/10">
              <p className="text-sm font-extrabold text-[#FF9217] tracking-wide">
                Aprovecha: ahorrar también es cuidar.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Secciones del Proyecto
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#FFFBED]/75 hover:text-[#FF9217] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-[#FF9217]/70" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details & Social Media Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Contacto Oficial
            </h4>
            
            <div className="space-y-3 text-sm text-[#FFFBED]/80">
              <a
                href="mailto:contacto@aprovecha.co"
                className="flex items-center gap-2.5 hover:text-[#FF9217] transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#FF9217] group-hover:bg-[#FF9217] group-hover:text-white transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="font-medium">contacto@aprovecha.co</span>
              </a>

              <div className="pt-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-3">
                  Espacios de difusión
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="#"
                    aria-label="Instagram de Aprovecha"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9217] text-white flex items-center justify-center transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="Facebook de Aprovecha"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9217] text-white flex items-center justify-center transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn de Aprovecha"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9217] text-white flex items-center justify-center transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href="#"
                    aria-label="WhatsApp de Aprovecha"
                    className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#FF9217] text-white flex items-center justify-center transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FFFBED]/60">
          <p>© {new Date().getFullYear()} APROVECHA. Todos los derechos reservados.</p>
          <div className="flex items-center gap-1 text-[#FFFBED]/80">
            <span>Diseñado con pasión por la sostenibilidad y el comercio de barrio</span>
            <Heart className="w-3.5 h-3.5 text-[#FF9217] fill-[#FF9217]" />
          </div>
        </div>

      </div>
    </footer>
  );
};
