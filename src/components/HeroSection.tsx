import React, { useState } from 'react';
import { Monitor, Smartphone, Tablet, Laptop, CheckCircle2, AlertTriangle, Clock, ArrowRight, RefreshCw, Zap, Layers } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOpenModal }) => {
  const [activeDevice, setActiveDevice] = useState<'mobile' | 'tablet' | 'desktop'>('mobile');
  const [fixApplied, setFixApplied] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);

  const handleToggleFix = () => {
    setAnalyzing(true);
    setTimeout(() => {
      setFixApplied(!fixApplied);
      setAnalyzing(false);
    }, 600);
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white bg-light-grid overflow-hidden text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        {/* Top Product Badge */}
        <div className="mb-8 inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-slate-200 bg-slate-50 text-xs font-mono tracking-widest text-black uppercase shadow-sm font-bold">
          <Layers className="w-4 h-4 text-black" />
          <span>VIEWPORTIQ • NLR GROUP OF COMPANIES</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-geist font-extrabold tracking-tight text-black mb-6 max-w-5xl leading-[1.08] text-center">
          Multi-device responsive auditing for{' '}
          <span className="font-newsreader italic text-slate-700 font-normal">
            web applications.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl font-geist text-slate-600 max-w-3xl leading-relaxed mb-10 text-center font-normal">
          Simultaneously inspect, verify, and diagnose layout overflow, text clipping, and touch target violations across multiple viewports inside Chrome with zero server latency.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-lg mb-6">
          <a href="#lab-simulator" className="btn-black w-full sm:w-auto text-xs font-geist uppercase tracking-wider flex items-center justify-center gap-2">
            <span>Open Interactive Lab</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
          <button
            onClick={onOpenModal}
            className="btn-secondary-light w-full sm:w-auto text-xs font-geist uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Clock className="w-4 h-4 text-slate-900" />
            <span>Chrome Extension Launching Soon</span>
          </button>
        </div>

        {/* Pricing & Privacy Notice */}
        <a
          href="#pricing"
          className="mb-16 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-4 py-2.5 rounded-2xl border border-slate-200 bg-white shadow-sm text-xs font-geist text-slate-700 hover:border-black transition-colors max-w-2xl"
        >
          <span className="px-2 py-0.5 rounded-full bg-[#E52328] text-white text-[9px] font-mono tracking-widest uppercase font-bold shrink-0">
            Notice
          </span>
          <span className="text-center sm:text-left">
            <strong className="text-black">Free during early access — ViewPortIQ will become a paid product soon.</strong>{' '}
            100% local processing, nothing uploaded.{' '}
            <span className="text-slate-500 underline underline-offset-2">Privacy &amp; pricing details</span>
          </span>
        </a>

        {/* Interactive ViewportIQ Product Studio Simulator Canvas */}
        <div id="lab-simulator" className="w-full max-w-5xl rounded-3xl light-card shadow-2xl overflow-hidden text-left border border-slate-200 bg-white">
          {/* Top Window Bar */}
          <div className="bg-slate-100 px-4 py-3 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3 font-mono text-xs max-w-full overflow-hidden">
            {/* Window Dots & Title */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-slate-300"></span>
                <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                <span className="w-3 h-3 rounded-full bg-slate-500"></span>
              </div>
              <span className="text-slate-900 font-geist font-bold hidden sm:inline">ViewPortIQ Responsive Lab — NLR Group</span>
            </div>

            {/* URL Input Bar */}
            <div className="flex-1 min-w-0 max-w-md bg-white px-3 py-1.5 rounded-xl border border-slate-300 flex items-center gap-2 text-slate-500 text-xs shadow-sm overflow-hidden">
              <Monitor className="w-3.5 h-3.5 text-black shrink-0" />
              <span className="text-black font-semibold truncate min-w-0 flex-1">https://checkout.acme-store.app</span>
              <span className="ml-auto text-[9px] text-black bg-slate-100 px-2 py-0.5 rounded border border-slate-300 font-bold shrink-0">CDP ATTACHED</span>
            </div>

            {/* Device Switcher Tabs */}
            <div className="flex items-center gap-1 bg-white p-1 rounded-xl border border-slate-300 shadow-sm shrink-0 flex-wrap">
              <button
                onClick={() => setActiveDevice('mobile')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-mono transition-colors ${
                  activeDevice === 'mobile' ? 'bg-black text-white font-bold' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5" />
                <span>375px</span>
              </button>
              <button
                onClick={() => setActiveDevice('tablet')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-mono transition-colors ${
                  activeDevice === 'tablet' ? 'bg-black text-white font-bold' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Tablet className="w-3.5 h-3.5" />
                <span>820px</span>
              </button>
              <button
                onClick={() => setActiveDevice('desktop')}
                className={`px-3 py-1.5 rounded-lg flex items-center gap-1.5 text-[11px] font-mono transition-colors ${
                  activeDevice === 'desktop' ? 'bg-black text-white font-bold' : 'text-slate-600 hover:text-black'
                }`}
              >
                <Laptop className="w-3.5 h-3.5" />
                <span>1440px</span>
              </button>
            </div>
          </div>

          {/* Main Workspace Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-slate-50 min-h-[420px]">
            {/* Left: Device Canvas Preview */}
            <div className="lg:col-span-8 p-6 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-slate-200 relative overflow-hidden bg-light-grid">
              {/* Device Frame */}
              <div
                className={`transition-all duration-500 bg-white border rounded-2xl p-5 shadow-xl relative ${
                  activeDevice === 'mobile' ? 'w-full max-w-[375px]' : activeDevice === 'tablet' ? 'w-full max-w-[560px]' : 'w-full max-w-full'
                } ${fixApplied ? 'border-emerald-500' : 'border-red-500'}`}
              >
                {/* Header Mockup */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200 text-xs font-geist">
                  <span className="font-bold text-slate-900">Acme Store</span>
                  <span className="text-slate-500 text-[10px]">Cart (2)</span>
                </div>

                {/* Simulated Content Box */}
                <div className="space-y-3 font-geist">
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                    <span className="text-[10px] font-mono text-slate-500 block mb-1">PROMOTION HERO BANNER</span>
                    <h4 className="text-sm font-bold text-slate-900 font-geist">Summer Sale 50% Off</h4>
                  </div>

                  {/* Problematic Element Box */}
                  <div
                    className={`p-4 rounded-xl transition-all duration-300 relative ${
                      fixApplied
                        ? 'bg-emerald-50 border border-emerald-300'
                        : 'bg-red-50 border-2 border-dashed border-red-400'
                    }`}
                  >
                    {!fixApplied && (
                      <div className="absolute -top-3 right-3 px-2 py-0.5 rounded bg-red-600 text-white font-mono text-[9px] font-bold flex items-center gap-1">
                        <AlertTriangle className="w-3 h-3 text-white" />
                        <span>Horizontal Overflow +24px</span>
                      </div>
                    )}

                    {fixApplied && (
                      <div className="absolute -top-3 right-3 px-2 py-0.5 rounded bg-emerald-600 text-white font-mono text-[9px] font-bold flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                        <span>Fix Verified (0px)</span>
                      </div>
                    )}

                    <h5 className="text-xs font-bold text-slate-900 font-geist mb-1">Checkout Payment Container</h5>
                    <p className={`text-xs text-slate-700 ${fixApplied ? 'max-w-full' : 'max-w-full overflow-hidden text-ellipsis whitespace-normal sm:whitespace-nowrap sm:max-w-[410px]'}`}>
                      Fixed width card container causing horizontal page scrolling on mobile viewports.
                    </p>
                  </div>

                  {/* Submit Button */}
                  <button className="w-full py-2.5 rounded-xl bg-black text-white font-bold font-geist text-xs shadow-md">
                    Complete Purchase $129.00
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Diagnosis & Live Fix Action Panel */}
            <div className="lg:col-span-4 p-6 flex flex-col justify-between font-mono text-xs space-y-6 bg-white">
              <div>
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                  <span className="text-slate-500">HEALTH SCORE</span>
                  <span className="text-base font-bold font-geist text-black">
                    {fixApplied ? '98 / 100' : '74 / 100'}
                  </span>
                </div>

                {/* Detected Issue Details */}
                <div className="space-y-3 mb-6">
                  <span className="text-[10px] text-slate-500 tracking-wider block font-bold">DIAGNOSED ISSUES (1)</span>
                  
                  <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between text-[11px]">
                      <span className="text-black font-bold">fixed-width-padding</span>
                      <span className={fixApplied ? 'text-emerald-600 font-bold' : 'text-red-600 font-bold'}>
                        {fixApplied ? 'Resolved' : 'Critical'}
                      </span>
                    </div>
                    <p className="text-[10px] text-slate-600">
                      Authored <code className="text-black font-bold">width: 380px</code> exceeds 375px mobile viewport.
                    </p>
                  </div>
                </div>

                {/* Generated CSS Patch Snippet */}
                <div className="space-y-2">
                  <span className="text-[10px] text-slate-500 tracking-wider block font-bold">AUTOMATED CSS PATCH</span>
                  <div className="p-3 rounded-xl bg-slate-900 text-white text-[11px] leading-relaxed font-mono">
                    {fixApplied ? (
                      <>
                        <span className="text-emerald-400 block">+ max-width: 100%;</span>
                        <span className="text-emerald-400 block">+ box-sizing: border-box;</span>
                      </>
                    ) : (
                      <>
                        <span className="text-red-400 block">- width: 380px;</span>
                        <span className="text-slate-400 block">/* Click simulate to test fix */</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Fix Action Trigger Button */}
              <button
                onClick={handleToggleFix}
                disabled={analyzing}
                className={`w-full py-3.5 rounded-xl font-bold font-geist text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-md ${
                  fixApplied
                    ? 'bg-slate-100 border border-slate-300 text-black hover:bg-slate-200'
                    : 'bg-black text-white hover:bg-slate-900'
                }`}
              >
                {analyzing ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Validating Fix...</span>
                  </>
                ) : fixApplied ? (
                  <>
                    <RefreshCw className="w-4 h-4" />
                    <span>Reset Simulation</span>
                  </>
                ) : (
                  <>
                    <Zap className="w-4 h-4 fill-current text-white" />
                    <span>Simulate Recommended Fix</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
