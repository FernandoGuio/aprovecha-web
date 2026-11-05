import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  alt?: string;
}

/**
 * Logotipo oficial de APROVECHA utilizando el archivo original Imagen1.png.
 * Conserva la proporción original, utiliza object-fit: contain y respeta el fondo crema original.
 */
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  alt = 'APROVECHA - Logotipo original',
}) => {
  // Tamaños proporcionales que preservan la relación de aspecto original (533 x 356)
  const sizeClasses = {
    sm: 'h-10 sm:h-12 w-auto max-w-[120px] sm:max-w-[140px]',
    md: 'h-12 sm:h-14 md:h-16 w-auto max-w-[150px] sm:max-w-[180px]',
    lg: 'h-20 sm:h-24 md:h-28 w-auto max-w-[220px] sm:max-w-[260px]',
  };

  return (
    <div className={`inline-flex items-center shrink-0 ${className}`}>
      <img
        src="/assets/Imagen1.png"
        alt={alt}
        className={`${sizeClasses[size]} object-contain rounded-xl select-none`}
        style={{ objectFit: 'contain' }}
        loading="eager"
        decoding="sync"
      />
    </div>
  );
};
