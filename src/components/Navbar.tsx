import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: '¿Qué es?', href: '#que-es' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Ofertas demo', href: '#ofertas' },
    { label: 'Cerca de ti', href: '#cerca-de-ti' },
    { label: 'Beneficios', href: '#beneficios' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFBED]/95 backdrop-blur-md shadow-xs border-b border-[#00603F]/10 py-3'
          : 'bg-[#FFFBED]/80 backdrop-blur-xs py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Zone 1: Single element brand wordmark */}
          <a
            href="#"
            className="whitespace-nowrap shrink-0 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00603F] rounded-lg"
            aria-label="Aprovecha - Inicio"
          >
            <Logo size="md" />
          </a>

          {/* Zone 2: 4–5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 hover:text-[#00603F] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#00603F] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href="#contacto"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#00603F] hover:bg-[#004d32] active:scale-[0.98] rounded-xl shadow-xs transition-all whitespace-nowrap shrink-0 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#FF9217]"
            >
              <span>Únete al piloto</span>
              <ArrowUpRight className="w-4 h-4 text-[#FF9217]" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[#00603F] hover:bg-[#00603F]/10 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-[#00603F]"
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFBED] border-b border-[#00603F]/15 px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-semibold text-neutral-800 hover:text-[#00603F] hover:bg-[#00603F]/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-[#00603F]/10">
              <a
                href="#contacto"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-bold text-white bg-[#00603F] hover:bg-[#004d32] rounded-xl shadow-xs"
              >
                <span>Únete al piloto de tu barrio</span>
                <ArrowUpRight className="w-4 h-4 text-[#FF9217]" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
