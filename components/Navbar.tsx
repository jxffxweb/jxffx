import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { SOCIAL_LINKS } from '../constants';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-500
        ${scrolled ? 'bg-black/40 backdrop-blur-2xl border-b border-white/5 py-4' : 'bg-transparent border-transparent py-6'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div 
          className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-pink-200 to-purple-200 cursor-pointer drop-shadow-lg"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          jx.ffx
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => scrollToSection('products')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Shop</button>
          <button onClick={() => scrollToSection('features')} className="text-sm font-medium text-gray-300 hover:text-white transition-colors">Features</button>
          <a href={SOCIAL_LINKS.payhip} target="_blank" rel="noreferrer" className="glass-button px-5 py-2 rounded-full text-sm font-semibold text-white flex items-center gap-2 hover:bg-pink-500/20 hover:border-pink-300/30">
            <ShoppingBag size={16} />
            Store
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-6 animate-fade-in h-screen">
          <button onClick={() => scrollToSection('products')} className="text-2xl font-medium text-white text-left">Shop</button>
          <button onClick={() => scrollToSection('features')} className="text-2xl font-medium text-white text-left">Features</button>
          <a href={SOCIAL_LINKS.payhip} target="_blank" rel="noreferrer" className="bg-white text-black px-5 py-4 rounded-xl text-center font-bold text-lg mt-4">
            Visit Store
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;