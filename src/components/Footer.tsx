import React from 'react';
import { Clock, CreditCard, ShieldCheck, LifeBuoy } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-slate-50 pt-20 pb-12 border-t border-slate-200 font-geist text-left relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm p-1.5 overflow-hidden">
                <img src="/logo.png" alt="ViewPortIQ Logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-xl font-bold text-[#0F172A] tracking-tight">
                ViewPort<span className="text-[#E52328]">IQ</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm font-mono text-slate-600 max-w-sm leading-relaxed">
              Multi-device responsive testing and automatic layout analysis, running 100% locally inside Chrome.
            </p>

            <div className="inline-flex items-center gap-3 border border-slate-300 bg-white px-3 py-1.5 rounded-lg shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-slate-900"></span>
              </span>
              <span className="font-mono text-[10px] tracking-widest uppercase text-slate-800 font-bold">
                Core Engine Online • v1.0.0
              </span>
            </div>
          </div>

          {/* Directory Links */}
          <div className="md:col-span-3 space-y-1 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-slate-900 uppercase block font-bold mb-2">
              01 • DIRECTORY
            </span>
            <a href="#features" className="text-slate-600 hover:text-black transition-colors flex items-center py-1.5 min-h-[32px]">
              Feature Suite
            </a>
            <a href="#specs" className="text-slate-600 hover:text-black transition-colors flex items-center py-1.5 min-h-[32px]">
              Spec Matrix
            </a>
            <a href="#architecture" className="text-slate-600 hover:text-black transition-colors flex items-center py-1.5 min-h-[32px]">
              Architecture Deck
            </a>
            <a href="#lab-simulator" className="text-slate-600 hover:text-black transition-colors flex items-center py-1.5 min-h-[32px]">
              Responsive Lab
            </a>
          </div>

          {/* Network Links */}
          <div className="md:col-span-3 space-y-1 font-mono text-xs">
            <span className="text-[10px] tracking-widest text-slate-900 uppercase block font-bold mb-2">
              02 • NETWORK
            </span>
            <a href="#/privacy" className="text-slate-600 hover:text-black transition-colors flex items-center gap-1.5 py-1.5 min-h-[32px]">
              <ShieldCheck className="w-3 h-3 text-slate-400" />
              <span>Privacy Statement</span>
            </a>
            <a href="#pricing" className="text-slate-600 hover:text-black transition-colors flex items-center gap-1.5 py-1.5 min-h-[32px]">
              <CreditCard className="w-3 h-3 text-slate-400" />
              <span>Pricing (Paid Soon)</span>
            </a>
            <a href="#/support" className="text-slate-600 hover:text-black transition-colors flex items-center gap-1.5 py-1.5 min-h-[32px]">
              <LifeBuoy className="w-3 h-3 text-slate-400" />
              <span>Support Center</span>
            </a>
            <button
              onClick={onOpenModal}
              className="text-slate-600 hover:text-black transition-colors flex items-center gap-1.5 text-left py-1.5 min-h-[32px]"
            >
              <span>Chrome Store Package (Soon)</span>
              <Clock className="w-3 h-3 text-slate-400" />
            </button>
          </div>
        </div>

        {/* Pricing & Privacy Notice */}
        <div className="mb-10 rounded-2xl border border-slate-300 bg-white px-5 py-4 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 shadow-sm">
          <span className="px-2.5 py-1 rounded-full bg-black text-white text-[9px] font-mono tracking-widest uppercase font-bold shrink-0 w-fit">
            Notice
          </span>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            <strong className="text-black">ViewPortIQ is free during early access and will become a paid product soon.</strong>{' '}
            Pricing will be published here and subscribers notified before any charge applies. Your audited pages are processed
            100% locally and never uploaded — see our{' '}
            <a href="#/privacy" className="text-black font-bold underline underline-offset-2">Privacy Statement</a>.
          </p>
        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center font-mono text-[10px] text-slate-500 gap-4">
          <span>VIEWPORTIQ • NLR GROUP OF COMPANIES. ALL RIGHTS RESERVED.</span>
          <div className="flex gap-4 sm:gap-6 font-bold flex-wrap">
            <a href="#" className="hover:text-black transition-colors py-2 px-1 inline-flex items-center min-h-[32px]">TERMS</a>
            <a href="#/privacy" className="hover:text-black transition-colors py-2 px-1 inline-flex items-center min-h-[32px]">PRIVACY</a>
            <a href="#/support" className="hover:text-black transition-colors py-2 px-1 inline-flex items-center min-h-[32px]">SUPPORT</a>
            <a href="#" className="hover:text-black transition-colors py-2 px-1 inline-flex items-center min-h-[32px]">RELEASE REPORT</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
