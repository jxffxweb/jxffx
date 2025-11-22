
import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden bg-zinc-900/20 border-t border-white/5">
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-6 p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-zinc-200 shrink-0">
                <feature.icon size={20} strokeWidth={1.5} />
              </div>
              <div>
                <h3 className="text-base font-medium mb-1 text-white">{feature.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
