
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Features from './components/Features';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-pink-500/30 selection:text-white font-sans relative overflow-x-hidden">
      
      {/* Global Ambient Background - Multi-layered Nebula Effect */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Base deep color */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0a0510] to-[#0f0514]"></div>

        {/* Moving Orbs */}
        <div className="absolute top-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-purple-900/20 rounded-full blur-[130px] animate-drift-slow mix-blend-screen opacity-60"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-pink-900/20 rounded-full blur-[130px] animate-drift mix-blend-screen opacity-60"></div>
        <div className="absolute top-[40%] left-[20%] w-[30vw] h-[30vw] bg-blue-900/10 rounded-full blur-[100px] animate-float mix-blend-screen opacity-40"></div>
        
        {/* Noise Texture Overlay for 'Film Grain' look */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay"></div>
      </div>
      
      <div className="relative z-10 flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          <Hero />
          <ProductGrid />
          <Features />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
