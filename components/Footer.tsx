
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Instagram, Youtube, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 bg-black pt-24 pb-12 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[300px] bg-pink-900/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 relative z-10">
        
        <div className="flex flex-col gap-6 max-w-sm">
          <div>
            <div className="text-3xl font-bold tracking-tighter text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              jx.ffx
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              The presets I use. <br />
              Designed to help you create your best work.
            </p>
          </div>
          
          {/* DMCA Badge */}
          <div className="flex flex-col gap-2">
             <a href="//www.dmca.com/Protection/Status.aspx?ID=f513d2ed-1a13-4d3d-925b-8fb85161fb30" title="DMCA.com Protection Status" className="dmca-badge opacity-80 hover:opacity-100 transition-opacity inline-block w-fit"> 
              <img src="https://images.dmca.com/Badges/dmca_protected_sml_120n.png?ID=f513d2ed-1a13-4d3d-925b-8fb85161fb30" alt="DMCA.com Protection Status" />
             </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 text-right md:items-end">
           <h4 className="text-white font-semibold">Connect</h4>
           <div className="flex gap-4">
              <a href={SOCIAL_LINKS.tiktok} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-pink-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                 <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-purple-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram size={18} />
              </a>
              <a href={SOCIAL_LINKS.youtube} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 hover:bg-red-500 text-gray-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Youtube size={18} />
              </a>
           </div>
        </div>
      </div>
      
      <div className="mt-20 border-t border-white/5 pt-8 text-center">
        <p className="text-xs text-gray-600">
          © {new Date().getFullYear()} jx.ffx. All rights reserved. <br />
          Not affiliated with Adobe or ByteDance.
        </p>
      </div>
    </footer>
  );
};

export default Footer;