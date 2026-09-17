import React from 'react';
import { ArrowRight, Clock, Monitor, ShieldCheck } from 'lucide-react';

interface CtaProps {
  onOpenModal: () => void;
}

export const CtaSection: React.FC<CtaProps> = ({ onOpenModal }) => {
  return (
    <section id="download" className="py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200 relative overflow-hidden">
      {/* Background Radial Light Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-slate-100 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        <div className="w-full light-card p-8 sm:p-14 rounded-3xl border border-slate-200 shadow-xl flex flex-col items-center bg-white">
          <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 p-2.5 shadow-md flex items-center justify-center mb-6">
            <img src="/logo.png" alt="ViewPortIQ Logo" className="w-full h-full object-contain" />
          </div>

          <span className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4 block font-bold">
            SYSTEM READY • 07
          </span>

          <h2 className="text-3xl sm:text-5xl font-geist font-bold tracking-tight text-black mb-6 leading-tight">
            Audit your layouts.{' '}
            <span className="font-newsreader italic text-slate-600 font-normal">
              Initiate inspection.
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-600 max-w-lg font-geist font-light leading-relaxed mb-10 text-center">
            Start testing across dozens of viewports simultaneously and diagnosing layout breaks locally inside Chrome.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg">
            <a
              href="#lab-simulator"
              className="btn-black w-full sm:w-auto text-xs font-geist uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Launch Lab Page</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </a>

            <button
              onClick={onOpenModal}
              className="btn-secondary-light w-full sm:w-auto text-xs font-geist uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Clock className="w-4 h-4 text-slate-900" />
              <span>Extension Launching Soon</span>
            </button>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-200 w-full flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] text-slate-500 font-bold">
            <span>CHROME MANIFEST V3</span>
            <span>FREE NOW • PAID SOON</span>
            <span>100% LOCAL PROCESSING</span>
          </div>
        </div>
      </div>
    </section>
  );
};
