
import React from 'react';
import { PRODUCTS, SOCIAL_LINKS } from '../constants';
import GlassCard from './ui/GlassCard';
import { ArrowUpRight, Star, Info, CheckCircle2, Package, Hammer } from 'lucide-react';

const ProductGrid: React.FC = () => {
  const mainProduct = PRODUCTS.find(p => p.popular);
  const secondaryProducts = PRODUCTS.filter(p => !p.popular);

  return (
    <section id="products" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col items-start text-left mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-4">
            What I use for my edits.
          </h2>
          <p className="text-zinc-400 text-lg font-light">
            My personal collection of assets and presets.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* --- HERO CARD: MAIN BUNDLE --- */}
          {mainProduct && (
            <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <GlassCard 
                className="w-full group overflow-hidden"
                intensity="high"
              >
                 <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[600px]">
                    
                    {/* COLUMN 1: IMAGE (5/12 width on desktop) */}
                    <div className="lg:col-span-5 relative h-[400px] lg:h-auto bg-zinc-900/80 border-b lg:border-b-0 lg:border-r border-white/10 overflow-hidden">
                        {/* 1. Blurred Backdrop */}
                        <div 
                          className="absolute inset-0 bg-cover bg-center blur-[60px] opacity-50 scale-150 saturate-150 transition-transform duration-[2s] group-hover:scale-125"
                          style={{ backgroundImage: `url(${mainProduct.image})` }}
                        ></div>
                        
                        {/* 2. Dark overlay for contrast */}
                        <div className="absolute inset-0 bg-black/20"></div>

                        {/* 3. Main Image - Floating */}
                        <div className="absolute inset-0 flex items-center justify-center p-8 z-10">
                           <img 
                              src={mainProduct.image} 
                              alt={mainProduct.title}
                              className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-rotate-1"
                           />
                        </div>

                        {/* Badge */}
                        <div className="absolute top-6 left-6 z-20">
                           <span className="px-3 py-1.5 bg-pink-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(236,72,153,0.5)] border border-pink-400/50 flex items-center gap-2">
                              <Star size={10} fill="currentColor" />
                              Best Seller
                           </span>
                        </div>
                    </div>

                    {/* COLUMN 2: CONTENT (7/12 width on desktop) */}
                    <div className="lg:col-span-7 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-b from-white/[0.03] to-transparent relative">
                        {/* Category Tag */}
                        <div className="flex items-center gap-2 text-pink-300 font-medium text-xs tracking-[0.2em] uppercase mb-6 opacity-80">
                           <Package size={14} />
                           {mainProduct.category}
                        </div>

                        {/* Title */}
                        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tighter leading-[0.95] drop-shadow-lg">
                           {mainProduct.title}
                        </h3>

                        {/* Description */}
                        <p className="text-zinc-200 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl border-l-2 border-pink-500/50 pl-6">
                           {mainProduct.description}
                        </p>

                        {/* Features Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-12">
                           {mainProduct.features.map((feat, i) => (
                              <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-pink-500/10 hover:border-pink-500/20 transition-all group/feat">
                                 <CheckCircle2 size={18} className="text-zinc-400 group-hover/feat:text-pink-300 transition-colors" />
                                 <span className="text-sm font-medium text-zinc-300 group-hover/feat:text-white">{feat}</span>
                              </div>
                           ))}
                        </div>

                        {/* Action Area */}
                        <div className="mt-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                           <div>
                              <div className="text-3xl font-bold text-white tracking-tight">{mainProduct.price}</div>
                              <div className="text-xs text-zinc-500 font-semibold uppercase tracking-wider mt-1">Secure Checkout</div>
                           </div>
                           
                           <a 
                              href={mainProduct.link || SOCIAL_LINKS.payhip}
                              target="_blank"
                              rel="noreferrer"
                              className="w-full sm:w-auto px-8 py-4 bg-white text-black hover:bg-pink-50 rounded-full font-bold text-base transition-all flex items-center justify-center gap-2 shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:scale-[1.02] active:scale-[0.98]"
                           >
                              Buy Now <ArrowUpRight size={18} />
                           </a>
                        </div>
                    </div>

                 </div>
              </GlassCard>
            </div>
          )}

          {/* --- SECONDARY ITEMS --- */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {secondaryProducts.map((product, idx) => (
                 <div key={product.id} className="animate-fade-in" style={{ animationDelay: `${0.2 + (idx * 0.1)}s` }}>
                   <GlassCard 
                      className="flex flex-col group !p-0 relative h-full min-h-[450px]"
                      intensity={product.comingSoon ? 'low' : 'medium'}
                      disabled={product.comingSoon}
                   >
                      {/* Image Container */}
                      <div className="relative h-[250px] w-full bg-zinc-900/50 overflow-hidden border-b border-white/5">
                         {/* Background Blur */}
                         <div 
                            className="absolute inset-0 bg-cover bg-center blur-2xl opacity-40 scale-110"
                            style={{ backgroundImage: `url(${product.image})` }}
                         />
                         {/* Main Image */}
                         <div className="absolute inset-0 p-8 flex items-center justify-center">
                            <img 
                              src={product.image} 
                              alt={product.title}
                              className={`w-full h-full object-contain drop-shadow-xl transition-transform duration-700 ${product.comingSoon ? 'grayscale opacity-40' : 'group-hover:scale-110'}`}
                            />
                         </div>

                         {/* Coming Soon Overlay */}
                         {product.comingSoon && (
                           <div className="absolute inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-20">
                              <div className="flex flex-col items-center gap-3">
                                <Hammer size={32} className="text-zinc-500" />
                                <span className="text-xs font-bold tracking-[0.2em] text-zinc-400 uppercase border border-zinc-700 px-3 py-1 rounded-full">
                                  In The Works
                                </span>
                              </div>
                           </div>
                         )}
                      </div>

                      {/* Content */}
                      <div className="flex-grow p-8 flex flex-col relative z-10 bg-gradient-to-b from-white/[0.02] to-transparent">
                         {!product.comingSoon && (
                           <div className="mb-4">
                              <span className="text-[10px] font-bold uppercase tracking-widest text-pink-300/80 border border-pink-500/20 px-2 py-1 rounded-md">
                                {product.category}
                              </span>
                           </div>
                         )}

                         <h3 className={`text-2xl font-bold mb-3 leading-tight ${product.comingSoon ? 'text-zinc-600' : 'text-white'}`}>
                             {product.title}
                         </h3>
                         
                         <p className="text-zinc-400 text-sm mb-8 leading-relaxed font-medium opacity-80">
                             {product.description}
                         </p>
                         
                         <div className="mt-auto flex items-center justify-between pt-6 border-t border-white/5">
                            <span className={`text-xl font-bold ${product.comingSoon ? 'text-zinc-700 text-base' : 'text-white'}`}>
                                {product.price}
                            </span>
                            
                            {!product.comingSoon && (
                                <a 
                                  href={product.link || SOCIAL_LINKS.payhip}
                                  target="_blank"
                                  rel="noreferrer" 
                                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black flex items-center justify-center transition-all duration-300"
                                >
                                  <ArrowUpRight size={18} />
                                </a>
                            )}
                         </div>
                      </div>
                   </GlassCard>
                 </div>
             ))}
          </div>

        </div>

        {/* Footer Info */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-center gap-8 text-zinc-500 text-sm animate-fade-in opacity-60" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
             <Info size={14} />
             <span>Presets require After Effects 2023+</span>
          </div>
          <div className="flex items-center gap-2">
             <CheckCircle2 size={14} />
             <span>Instant Digital Delivery</span>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProductGrid;
