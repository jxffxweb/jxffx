
import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center pt-20">
      
      {/* Subtle Spotlight behind text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-[80px] pointer-events-none"></div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
        
        <div className="mb-6 animate-fade-in">
          <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter text-white leading-[0.9] drop-shadow-2xl mix-blend-overlay opacity-90">
            jx.ffx
          </h1>
          <h1 className="text-8xl md:text-[10rem] font-bold tracking-tighter text-white/20 leading-[0.9] absolute inset-0 blur-xl animate-pulse">
            jx.ffx
          </h1>
        </div>

        <p className="text-lg md:text-xl text-zinc-300/80 max-w-lg mb-12 leading-relaxed font-light tracking-wide animate-fade-in" style={{ animationDelay: '0.2s' }}>
          High quality presets. <br/>
          Everything I use to create.
        </p>

        <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a 
            href="#products"
            onClick={scrollToProducts}
            className="group relative px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_50px_-12px_rgba(255,255,255,0.5)] overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-2">
              Shop Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;