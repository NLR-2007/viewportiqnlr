import React, { useState } from 'react';
import { ShieldCheck, Cpu, Code2, Play, CheckCircle2, AlertTriangle, Eye, ArrowRight, Smartphone, Terminal, FileCode, Check } from 'lucide-react';

export const StorySection: React.FC = () => {
  const [activeScene, setActiveScene] = useState(0);

  const scenes = [
    {
      id: "scene-1",
      number: "01 // PRIVACY PROTOCOL",
      title: "100% Client-Side Chrome Isolation",
      description: "Everything runs locally inside Chrome service workers. No page HTML, screenshots, or credentials ever hit external servers.",
      tag: "Zero Telemetry",
      tagColor: "text-[#A8C7FA] bg-[#A8C7FA]/10 border-[#A8C7FA]/30",
      content: (
        <div className="w-full flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between w-full pb-4 mb-4 border-b border-white/10 font-mono text-xs">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-white font-bold">LOCAL CHROME SERVICE WORKER</span>
            </div>
            <span className="text-emerald-400 font-bold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
              SECURE ISOLATED WORLD
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full text-left font-mono text-xs">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-neutral-500 text-[10px] block mb-1">STORAGE ENGINE</span>
              <span className="text-white font-bold block mb-1">chrome.storage.session</span>
              <span className="text-neutral-400 text-[10px]">Session metadata only</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-neutral-500 text-[10px] block mb-1">DEBUGGER ATTACH</span>
              <span className="text-white font-bold block mb-1">CDP Emulation Protocol</span>
              <span className="text-neutral-400 text-[10px]">Owned tabs strictly</span>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
              <span className="text-neutral-500 text-[10px] block mb-1">NETWORK LATENCY</span>
              <span className="text-emerald-400 font-bold block mb-1">0.00 ms (Offline)</span>
              <span className="text-neutral-400 text-[10px]">No API pings</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "scene-2",
      number: "02 // GEOMETRY ENGINE",
      title: "10-Rule Automated Layout Scanner",
      description: "Evaluates rendered element rectangles, scroll container bounds, text clipping, and touch targets up to 12,000 DOM nodes.",
      tag: "Sub-pixel Accuracy",
      tagColor: "text-[#F1C6D4] bg-[#F1C6D4]/10 border-[#F1C6D4]/30",
      content: (
        <div className="w-full flex flex-col items-center justify-center p-6 border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl relative overflow-hidden font-mono text-xs">
          <div className="flex items-center justify-between w-full pb-4 mb-4 border-b border-white/10">
            <span className="text-neutral-400">SCANNER ENGINE RULES</span>
            <span className="text-[#F1C6D4]">Tolerance: 2px</span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 w-full">
            {[
              { name: "Horizontal Overflow", status: "Active" },
              { name: "Element Clipping", status: "Active" },
              { name: "Touch Target <24px", status: "Active" },
              { name: "Fixed Width Break", status: "Active" },
              { name: "Grid Track Overflow", status: "Active" },
              { name: "Flex Wrap Failure", status: "Active" },
              { name: "Unbreakable Text", status: "Active" },
              { name: "Nav Link Overflow", status: "Active" },
              { name: "Element Overlap", status: "Active" },
              { name: "Height Clipping", status: "Active" },
            ].map((rule, idx) => (
              <div key={idx} className="p-3 rounded-lg bg-white/[0.02] border border-white/10 flex flex-col justify-between">
                <span className="text-[10px] text-neutral-300 font-bold mb-2">{rule.name}</span>
                <div className="flex items-center gap-1.5 text-[9px] text-emerald-400">
                  <Check className="w-3 h-3" />
                  <span>{rule.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    },
    {
      id: "scene-3",
      number: "03 // CAUSE ANALYSIS",
      title: "Deterministic Cause Diagnosis",
      description: "Maps layout breaks to exact CSS declarations, distinguishing between fixed widths, missing max-width on media, or missing flex wrap.",
      tag: "Root Cause AI-Free",
      tagColor: "text-[#E2D3B6] bg-[#E2D3B6]/10 border-[#E2D3B6]/30",
      content: (
        <div className="w-full p-6 border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl font-mono text-xs text-left">
          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
            <span className="text-neutral-400">DIAGNOSED CAUSE MATRIX</span>
            <span className="text-[#E2D3B6]">Certainty: LIKELY</span>
          </div>
          <div className="bg-black/80 p-4 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-amber-400" />
              <span className="text-white font-bold">fixed-width-padding</span>
              <span className="text-neutral-500 text-[10px]">(.card-container)</span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed">
              Authored <code className="text-[#E2D3B6]">width: 380px</code> with <code className="text-[#E2D3B6]">box-sizing: content-box</code> exceeds 375px mobile viewport by 25px.
            </p>
          </div>
        </div>
      )
    },
    {
      id: "scene-4",
      number: "04 // FIX SIMULATION",
      title: "Live Fix Validation & Rollback",
      description: "Generates scoped CSS patches and injects them temporarily into Chrome tabs to verify zero regression before recommending.",
      tag: "Safe Patching",
      tagColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
      content: (
        <div className="w-full p-6 border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl font-mono text-xs text-left space-y-3">
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span className="text-emerald-400 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4" />
              RECOMMENDED CSS PATCH
            </span>
            <span className="text-neutral-500">Validation: 100% Passed</span>
          </div>

          <div className="bg-[#030303] p-4 rounded-xl border border-white/10">
            <pre className="text-neutral-300 text-[11px] leading-relaxed">
              <span className="text-red-400">- width: 380px;</span>{'\n'}
              <span className="text-emerald-400">+ max-width: 100%;</span>{'\n'}
              <span className="text-emerald-400">+ box-sizing: border-box;</span>
            </pre>
          </div>
        </div>
      )
    },
    {
      id: "scene-5",
      number: "05 // DASHBOARD REPORT",
      title: "Interactive Lab & Standalone Export",
      description: "View comprehensive responsive health scores (0-100), filter by impact severity, and export standalone self-contained offline HTML reports.",
      tag: "Comprehensive Output",
      tagColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
      content: (
        <div className="w-full p-6 border border-white/10 rounded-2xl bg-[#0A0A0A] shadow-2xl font-mono text-xs">
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 border border-emerald-500/40 flex items-center justify-center font-bold text-lg text-emerald-400">
                94
              </div>
              <div className="text-left">
                <span className="text-white font-bold block">Responsive Health Score</span>
                <span className="text-neutral-400 text-[10px]">Status: EXCELLENT</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300 text-[10px]">HTML Export</span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-neutral-300 text-[10px]">JSON Report</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="story-wrapper" className="relative w-full py-24 bg-[#030303] border-t border-white/10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs tracking-[0.3em] text-neutral-500 uppercase block mb-3">
            01 // HOW VIEWPORTIQ WORKS
          </span>
          <h2 className="text-3xl md:text-5xl font-light tracking-tight text-white mb-4">
            Automated layout testing{' '}
            <span className="font-newsreader italic text-neutral-300 font-normal">
              without guesswork.
            </span>
          </h2>
          <p className="text-sm md:text-base text-neutral-400 max-w-xl font-light">
            From initial CDP tab emulation to live CSS regression validation, explore the 5 pillars of the ViewportIQ engine.
          </p>
        </div>

        {/* Scene Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 w-full">
          {scenes.map((scene, idx) => (
            <button
              key={scene.id}
              onClick={() => setActiveScene(idx)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-300 flex items-center gap-2 border ${
                activeScene === idx
                  ? 'bg-white/10 border-white/30 text-white shadow-lg'
                  : 'bg-white/[0.02] border-white/5 text-neutral-400 hover:text-white'
              }`}
            >
              <span>0{idx + 1}</span>
              <span className="hidden sm:inline">{scene.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Scene Display */}
        <div className="w-full max-w-4xl flex flex-col items-center">
          <div className="w-full mb-6 text-left">
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-xs text-neutral-500 tracking-wider">
                {scenes[activeScene].number}
              </span>
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono border ${scenes[activeScene].tagColor}`}>
                {scenes[activeScene].tag}
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
              {scenes[activeScene].title}
            </h3>
            <p className="text-sm text-neutral-400 font-light leading-relaxed">
              {scenes[activeScene].description}
            </p>
          </div>

          {/* Dynamic Scene Card Content */}
          <div className="w-full">
            {scenes[activeScene].content}
          </div>
        </div>
      </div>
    </section>
  );
};
