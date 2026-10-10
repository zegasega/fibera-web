import React from 'react';

interface FiberaMascotProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showBanner?: boolean;
  showCardFrame?: boolean;
  animate?: boolean;
}

export const FiberaMascot: React.FC<FiberaMascotProps> = ({
  className = '',
  size = 'md',
  showCardFrame = true,
  animate = true,
}) => {
  const sizeMap = {
    xs: 'w-8 h-8 rounded-lg',
    sm: 'w-12 h-12 rounded-xl',
    md: 'w-32 h-32 rounded-3xl',
    lg: 'w-64 h-64 sm:w-72 sm:h-72 rounded-3xl',
    xl: 'w-80 h-80 sm:w-96 sm:h-96 rounded-3xl',
  };

  const imageSrc = '/mascot.png';

  return (
    <div className={`relative inline-flex items-center justify-center select-none ${sizeMap[size]} ${className}`}>
      {/* Soft Fairy Glow Behind */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-200/50 via-cyan-200/40 to-teal-100/50 rounded-full blur-2xl -z-10 pointer-events-none scale-110" />

      <img
        src={imageSrc}
        alt="Fibera Logo"
        className={`w-full h-full object-contain rounded-[inherit] drop-shadow-xl ${animate ? 'animate-float' : ''}`}
      />
    </div>
  );
};
