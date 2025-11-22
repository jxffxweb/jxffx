
import React, { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
  intensity?: 'low' | 'medium' | 'high';
  disabled?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className = '', 
  hoverEffect = true, 
  intensity = 'low',
  disabled = false
}) => {
  
  const bgIntensity = {
    low: 'bg-black/20',
    medium: 'bg-black/40',
    high: 'bg-zinc-950/30'
  };

  return (
    <div 
      className={`
        relative overflow-hidden
        ${bgIntensity[intensity]}
        backdrop-blur-[30px]
        border border-white/[0.06]
        rounded-[2rem]
        ${hoverEffect && !disabled ? 'hover:border-white/[0.12] hover:shadow-2xl hover:scale-[1.01]' : ''} 
        ${disabled ? 'opacity-60 grayscale' : ''}
        transition-all duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)
        ${className}
      `}
    >
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Subtle Top Highlight */}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50" />
      
      {/* Content */}
      <div className="relative z-10 h-full">
        {children}
      </div>
    </div>
  );
};

export default GlassCard;
