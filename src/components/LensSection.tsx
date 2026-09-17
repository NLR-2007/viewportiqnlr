import React from 'react';
import { XCircle, CheckCircle, ShieldAlert, Cpu } from 'lucide-react';

export const LensSection: React.FC = () => {
  const comparisons = [
    {
      num: "01 // MULTI-DEVICE TESTING",
      legacy: "Manual window resizing in DevTools one resolution at a time.",
      compiled: "Concurrent CDP tab emulation across 12+ viewports simultaneously.",
      color: "text-[#A8C7FA]"
    },
    {
      num: "02 // OVERFLOW & TOUCH SCAN",
      legacy: "Visual inspection missing subtle 2px scrollbars and small touch targets.",
      compiled: "10-rule geometry scanner checking 12,000 DOM nodes with 2px accuracy.",
      color: "text-[#F1C6D4]"
    },
    {
      num: "03 // FIX VALIDATION",
      legacy: "Guessing CSS properties and manually checking if other screens broke.",
      compiled: "Automated CSS patch simulation with multi-viewport regression rollback.",
      color: "text-[#E2D3B6]"
    },
    {
      num: "04 // SECURITY & PRIVACY",
      legacy: "Uploading proprietary app source code to external third-party servers.",
      compiled: "100% local Chrome extension runtime with zero API requests or tracking.",
      color: "text-emerald-400"
    }
  ];

  return (
    <section id="lens-wrapper" className="relative w-full py-28 bg-[#030303] border-t border-white/10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
            02 // SPEC COMPARISON
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Legacy inspection vs.{' '}
            <span className="font-newsreader italic text-neutral-300 font-normal">
              ViewportIQ automation.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-lg font-light">
            Compare traditional manual responsive debugging with ViewportIQ's automated multi-device engine.
          </p>
        </div>

        {/* Comparison List Grid */}
        <div className="w-full space-y-6">
          {comparisons.map((item, idx) => (
            <div
              key={idx}
              className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-white/20 transition-all duration-300"
            >
              {/* Legacy Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="font-mono text-[10px] text-red-400/80 tracking-widest uppercase mb-2 flex items-center gap-1.5">
                  <XCircle className="w-3.5 h-3.5 text-red-400" />
                  LEGACY MANUAL APPROACH
                </span>
                <p className="text-sm md:text-base font-newsreader italic text-neutral-400 leading-relaxed">
                  {item.legacy}
                </p>
              </div>

              {/* Divider Line */}
              <div className="hidden md:block w-[1px] h-16 bg-white/10"></div>

              {/* ViewportIQ Compiled Column */}
              <div className="w-full md:w-1/2 flex flex-col">
                <span className={`font-mono text-[10px] ${item.color} tracking-widest uppercase mb-2 flex items-center gap-1.5`}>
                  <CheckCircle className="w-3.5 h-3.5" />
                  VIEWPORTIQ AUTOMATED SPEC
                </span>
                <p className="text-sm md:text-base font-geist font-medium text-white leading-relaxed">
                  {item.compiled}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
