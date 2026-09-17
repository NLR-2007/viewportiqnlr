import React, { useState } from 'react';
import { ShieldCheck, Cpu, Code2, Download, CheckCircle2, AlertTriangle, Layers, ChevronRight, Check } from 'lucide-react';

export const FeatureShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const pillars = [
    {
      code: "01 • CDP EMULATION",
      title: "Multi-Device Tab Emulation Engine",
      description: "Creates dedicated background Chrome tabs with attached CDP debugger. Applies exact device metric overrides, DPR, and touch emulation.",
      tag: "Manifest V3",
      details: [
        "Debugger attached strictly to own-created tabs",
        "Configurable DPR (1.0x to 3.0x)",
        "Zero network latency or external API calls",
        "Chrome storage session worker recovery"
      ]
    },
    {
      code: "02 • GEOMETRY SCANNER",
      title: "10-Rule Geometry Collector Engine",
      description: "Evaluates rendered element rectangles, scroll container bounds, text clipping, and touch targets up to 12,000 DOM nodes inside an isolated world.",
      tag: "Sub-pixel Accuracy",
      details: [
        "Horizontal overflow detection (2px tolerance)",
        "Touch target size validation (< 24px check)",
        "Unbreakable text & flex-wrap failure analysis",
        "CSP-bypass isolated world execution"
      ]
    },
    {
      code: "03 • CAUSE DIAGNOSIS",
      title: "Deterministic Root Cause Analysis",
      description: "Maps layout breaks directly to authored CSS declarations, distinguishing fixed px widths, content-box padding, or missing max-width.",
      tag: "AI-Free Certainty",
      details: [
        "fixed-width & fixed-width-padding rules",
        "white-space: nowrap & unbreakable text",
        "flex-nowrap & grid fixed tracks",
        "media-missing-max-width checks"
      ]
    },
    {
      code: "04 • FIX SIMULATION",
      title: "Safe CSS Patch Simulation & Rollback",
      description: "Generates whitelisted scoped CSS recommendations and injects them temporarily into active Chrome tabs to verify zero regression before recommending.",
      tag: "Zero Regressions",
      details: [
        "Strictly whitelisted layout CSS properties",
        "Temporary element scoping with unique tokens",
        "Verified inline style restoration on rollback",
        "Multi-viewport regression safety assertion"
      ]
    },
    {
      code: "05 • STANDALONE REPORT",
      title: "Self-Contained HTML & JSON Reports",
      description: "Export self-contained, script-free HTML reports with downscaled JPEG screenshot evidence highlighting offending nodes.",
      tag: "Offline Export",
      details: [
        "Inline NLR brand styled HTML output",
        "Strict Content Security Policy (script-free)",
        "Embedded base64 screenshot evidence",
        "Structured JSON schema version 1"
      ]
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-slate-500 uppercase block mb-3 font-bold">
            01 • CORE ARCHITECTURE PILLARS
          </span>
          <h2 className="text-3xl sm:text-5xl font-geist font-bold tracking-tight text-[#0F172A] mb-4">
            Automated layout auditing{' '}
            <span className="font-newsreader italic text-slate-600 font-normal">
              without guesswork.
            </span>
          </h2>
          <p className="text-base font-geist text-slate-600 font-light leading-relaxed">
            Explore the 5 core modules powering ViewportIQ's high-precision Chrome responsive engine.
          </p>
        </div>

        {/* Pillar Switcher Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 w-full max-w-5xl">
          {pillars.map((pillar, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-2.5 rounded-xl font-geist text-xs transition-all duration-200 flex items-center gap-2 border ${
                activeTab === idx
                  ? 'bg-slate-900 text-white font-bold border-slate-900 shadow-md'
                  : 'bg-white border-slate-300 text-slate-700 hover:text-black hover:bg-slate-100'
              }`}
            >
              <span>0{idx + 1}</span>
              <span className="hidden sm:inline">{pillar.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Pillar Content Card */}
        <div className="w-full max-w-5xl light-card p-8 sm:p-12 rounded-3xl border border-slate-200 text-left grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-xl">
          {/* Left Column Text Details */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs text-slate-500 tracking-wider">
                {pillars[activeTab].code}
              </span>
              <span className="px-2.5 py-1 rounded text-[10px] font-mono border border-slate-300 bg-slate-100 text-slate-800 font-bold">
                {pillars[activeTab].tag}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-geist font-bold text-[#0F172A] tracking-tight">
              {pillars[activeTab].title}
            </h3>

            <p className="text-slate-600 font-geist text-sm sm:text-base leading-relaxed">
              {pillars[activeTab].description}
            </p>

            <div className="pt-4 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs text-slate-700">
              {pillars[activeTab].details.map((detail, dIdx) => (
                <div key={dIdx} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-slate-900 shrink-0" />
                  <span>{detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column Visual Card */}
          <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-900 text-white font-mono text-xs space-y-4 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-slate-400">ENGINE CONTRACT</span>
              <span className="text-white font-bold">VERIFIED</span>
            </div>

            <div className="space-y-2 text-[11px] leading-relaxed">
              <div className="flex justify-between text-slate-400">
                <span>Phase Status:</span>
                <span className="text-white font-bold">Phase 8 Hardened</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Concurrency Cap:</span>
                <span className="text-white font-bold">3 Concurrent Tabs</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>DOM Node Limit:</span>
                <span className="text-white font-bold">12,000 Nodes</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Scan Timeout:</span>
                <span className="text-white font-bold">30.00 Seconds</span>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-800 text-center">
              <span className="text-[10px] text-slate-400 uppercase tracking-widest block font-bold">
                100% LOCAL CHROME EXECUTION • NLR GROUP
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
