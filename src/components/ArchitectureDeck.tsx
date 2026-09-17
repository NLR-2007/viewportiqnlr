import React from 'react';
import { Layers, Monitor, ShieldCheck, Cpu, Code2, Download, Zap } from 'lucide-react';

export const ArchitectureDeck: React.FC = () => {
  const cards = [
    {
      code: "PHASE 01 • ENGINE",
      title: "Chrome Debugger CDP Emulation",
      description: "Dedicated window management with CDP debugger attachment for mobile, tablet, and custom DPR viewports.",
      badge: "Manifest V3",
      icon: Monitor
    },
    {
      code: "PHASE 02 • SCANNER",
      title: "10-Rule Geometry Collector",
      description: "Isolated-world DOM evaluation checking rects, scroll sizes, and touch target bounds up to 12,000 rendered nodes.",
      badge: "Sub-pixel Accuracy",
      icon: Cpu
    },
    {
      code: "PHASE 03 • VERIFIER",
      title: "Two-Pass Stability Verification",
      description: "Fresh measurements filter out CSS animations, off-canvas drawers, and carousels to eliminate false positives.",
      badge: "Zero Flakes",
      icon: ShieldCheck
    },
    {
      code: "PHASE 04 • ANALYZER",
      title: "Mathematical Health Scoring",
      description: "Weighted 0–100 score model reflecting critical blocking issues, usability defects, and device coverage.",
      badge: "Deterministic",
      icon: Zap
    },
    {
      code: "PHASE 05 • SUGGESTIONS",
      title: "Safe CSS Patch Engine",
      description: "Generates whitelisted CSS recommendations and tests temporary in-page simulation with instant rollback.",
      badge: "Live Simulation",
      icon: Code2
    },
    {
      code: "PHASE 06 • EXPORTS",
      title: "Offline HTML & JSON Reports",
      description: "Export self-contained, script-free HTML reports with downscaled JPEG screenshot evidence.",
      badge: "Self-Contained",
      icon: Download
    }
  ];

  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mb-16">
          <span className="font-mono text-xs tracking-widest text-slate-500 uppercase block mb-3 font-bold">
            03 • TECHNICAL ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-5xl font-geist font-bold tracking-tight text-[#0F172A] mb-4">
            Modular by design.{' '}
            <span className="font-newsreader italic text-slate-600 font-normal">
              Built inside Chrome.
            </span>
          </h2>
          <p className="text-base font-geist text-slate-600 font-light leading-relaxed">
            Engineered with strict separation of scanner, verifier, analyzer, and suggestion layers.
          </p>
        </div>

        {/* 6-Card Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl text-left">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <div
                key={idx}
                className="light-card p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between hover:border-slate-400 transition-all duration-300 shadow-sm group bg-white"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-[10px]">
                    <span className="text-slate-500 tracking-wider font-bold">{card.code}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 border border-slate-300 text-slate-800 font-bold">
                      {card.badge}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center mb-6 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-slate-900 group-hover:text-white" />
                  </div>

                  <h3 className="text-lg font-bold font-geist text-[#0F172A] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-geist font-light leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>MODULE {idx + 1} HARDENED</span>
                  <span className="text-slate-900 font-bold">READY</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
