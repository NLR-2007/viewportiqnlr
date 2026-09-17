import React from 'react';
import { Layers, Monitor, ShieldCheck, Cpu, Code2, Download, Zap } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const pillars = [
    {
      code: "01 // CDP MULTI-DEVICE ENGINE",
      title: "Chrome Debugger Emulation",
      description: "Dedicated device window management with CDP debugger attachment for mobile, tablet, and custom DPR viewports.",
      tag: "Manifest V3",
      color: "border-[#A8C7FA]/40 bg-[#A8C7FA]/5 text-[#A8C7FA]",
      icon: Monitor
    },
    {
      code: "02 // GEOMETRY COLLECTOR",
      title: "10-Rule Geometry Scanner",
      description: "Isolated-world DOM evaluation checking rects, scroll sizes, and touch target bounds up to 12,000 rendered nodes.",
      tag: "Sub-pixel",
      color: "border-[#F1C6D4]/40 bg-[#F1C6D4]/5 text-[#F1C6D4]",
      icon: Cpu
    },
    {
      code: "03 // VERIFICATION GUARD",
      title: "Two-Pass Stability Verification",
      description: "Fresh measurements filter out CSS animations, off-canvas drawers, and carousels to eliminate false positives.",
      tag: "Zero Flakes",
      color: "border-[#E2D3B6]/40 bg-[#E2D3B6]/5 text-[#E2D3B6]",
      icon: ShieldCheck
    },
    {
      code: "04 // IMPACT SCORING",
      title: "Mathematical Health Score",
      description: "Weighted 0–100 score model reflecting critical blocking issues, usability defects, and device coverage.",
      tag: "Deterministic",
      color: "border-[#79c0ff]/40 bg-[#79c0ff]/5 text-[#79c0ff]",
      icon: Zap
    },
    {
      code: "05 // AUTOMATED FIX ENGINE",
      title: "Safe CSS Patch Engine",
      description: "Generates whitelisted CSS recommendations and tests temporary in-page simulation with instant rollback.",
      tag: "Live Simulation",
      color: "border-emerald-500/40 bg-emerald-500/5 text-emerald-400",
      icon: Code2
    },
    {
      code: "06 // STANDALONE EXPORTS",
      title: "Offline HTML & JSON Reports",
      description: "Export self-contained, script-free HTML reports with downscaled visual highlight screenshots.",
      tag: "Self-Contained",
      color: "border-purple-500/40 bg-purple-500/5 text-purple-400",
      icon: Download
    }
  ];

  return (
    <section id="feature-arc-wrapper" className="relative w-full py-28 bg-[#030303] border-t border-white/10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
            03 // ARCHITECTURE
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Modular by design.{' '}
            <span className="font-newsreader italic text-neutral-300 font-normal">
              Built inside Chrome.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-lg font-light">
            Engineered with strict separation of scanner, verifier, analyzer, and suggestion layers.
          </p>
        </div>

        {/* 6-Card Architecture Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="p-6 md:p-8 rounded-2xl bg-[#0A0A0A] border border-white/10 flex flex-col justify-between hover:border-white/30 transition-all duration-300 group hover:-translate-y-1 shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-4 font-mono text-[10px]">
                    <span className="text-neutral-500 tracking-wider">{pillar.code}</span>
                    <span className={`px-2 py-0.5 rounded border ${pillar.color}`}>
                      {pillar.tag}
                    </span>
                  </div>

                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <h3 className="text-xl font-geist font-medium text-white mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-400 font-light leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-neutral-500">
                  <span>PHASE {idx + 1} HARDENED</span>
                  <span className="text-emerald-400">PASSED</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
