import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

export const SpecComparison: React.FC = () => {
  const specs = [
    {
      num: "01 • MULTI-DEVICE TESTING",
      legacy: "Manual window resizing in DevTools one resolution at a time.",
      viewportiq: "Concurrent CDP tab emulation across 12+ viewports simultaneously."
    },
    {
      num: "02 • OVERFLOW & TOUCH SCAN",
      legacy: "Visual inspection missing subtle 2px scrollbars and small touch targets.",
      viewportiq: "10-rule geometry scanner checking 12,000 DOM nodes with 2px accuracy."
    },
    {
      num: "03 • FIX VALIDATION",
      legacy: "Guessing CSS properties and manually checking if other screens broke.",
      viewportiq: "Automated CSS patch simulation with multi-viewport regression rollback."
    },
    {
      num: "04 • SECURITY & PRIVACY",
      legacy: "Uploading proprietary app source code to external third-party cloud servers.",
      viewportiq: "100% local Chrome extension runtime with zero API requests or telemetry."
    }
  ];

  return (
    <section id="specs" className="py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-slate-500 uppercase block mb-3 font-bold">
            02 • SPEC COMPARISON
          </span>
          <h2 className="text-3xl sm:text-5xl font-geist font-bold tracking-tight text-[#0F172A] mb-4">
            Legacy inspection vs.{' '}
            <span className="font-newsreader italic text-slate-600 font-normal">
              ViewportIQ spec.
            </span>
          </h2>
          <p className="text-base font-geist text-slate-600 font-light leading-relaxed">
            Compare traditional manual responsive debugging with ViewportIQ's automated multi-device engine.
          </p>
        </div>

        {/* Spec Grid */}
        <div className="grid grid-cols-1 gap-6 w-full max-w-5xl">
          {specs.map((item, idx) => (
            <div
              key={idx}
              className="light-card p-6 sm:p-8 rounded-2xl border border-slate-200 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center text-left hover:border-slate-400 transition-all shadow-md"
            >
              {/* Legacy Column */}
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase flex items-center gap-1.5 font-bold">
                  <XCircle className="w-4 h-4 text-slate-400 shrink-0" />
                  MANUAL LEGACY APPROACH
                </span>
                <p className="text-sm font-geist text-slate-600 leading-relaxed">
                  {item.legacy}
                </p>
              </div>

              {/* Divider Badge */}
              <div className="lg:col-span-2 flex justify-center">
                <span className="px-3 py-1 rounded-full font-mono text-[10px] uppercase font-bold border border-slate-300 bg-slate-100 text-slate-800">
                  {item.num.split('•')[1]}
                </span>
              </div>

              {/* ViewportIQ Column */}
              <div className="lg:col-span-5 space-y-2">
                <span className="font-mono text-[10px] text-slate-900 tracking-widest uppercase flex items-center gap-1.5 font-bold">
                  <CheckCircle2 className="w-4 h-4 text-slate-900 shrink-0" />
                  VIEWPORTIQ AUTOMATED SPEC
                </span>
                <p className="text-sm font-geist font-bold text-slate-900 leading-relaxed">
                  {item.viewportiq}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
