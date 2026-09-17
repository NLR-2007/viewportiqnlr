import React from 'react';
import { CreditCard, ShieldCheck, ArrowRight, Bell, Lock, HardDrive, Mail } from 'lucide-react';

interface PricingPrivacyProps {
  onOpenModal: () => void;
}

export const PricingPrivacySection: React.FC<PricingPrivacyProps> = ({ onOpenModal }) => {
  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-mono text-xs tracking-widest text-slate-500 uppercase mb-4 block font-bold">
            PRICING &amp; PRIVACY • 06
          </span>
          <h2 className="text-3xl sm:text-5xl font-geist font-bold tracking-tight text-black leading-tight">
            Free today.{' '}
            <span className="font-newsreader italic text-slate-600 font-normal">Paid soon. Private always.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pricing Notice */}
          <div className="light-card rounded-3xl p-8 sm:p-10 bg-white flex flex-col text-left">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center shadow-md">
                <CreditCard className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full border border-[#E52328]/30 bg-red-50 text-[#E52328] text-[10px] font-mono tracking-widest uppercase font-bold">
                Important Notice
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-black tracking-tight mb-3">
              ViewPortIQ will become a paid product soon.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              During early access the extension is <strong className="text-black">free to use</strong>. Once it launches on the
              Chrome Web Store, ViewPortIQ will move to <strong className="text-black">paid plans</strong>. Pricing will be published
              on this page and every early-access subscriber will be emailed before any charge is introduced.
            </p>

            <ul className="space-y-2.5 font-mono text-xs text-slate-700 mb-8">
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                <span>Free during early access — no card required.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                <span>Paid plans announced before launch. No automatic billing.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                <span>Early-access members are notified first about pricing.</span>
              </li>
            </ul>

            <button
              onClick={onOpenModal}
              className="btn-black mt-auto w-full sm:w-auto text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Bell className="w-4 h-4 text-white" />
              <span>Get Notified Before Pricing Launches</span>
            </button>
          </div>

          {/* Privacy at a glance */}
          <div className="light-card rounded-3xl p-8 sm:p-10 bg-white flex flex-col text-left">
            <div className="flex items-center justify-between mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 text-black flex items-center justify-center shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-slate-800 text-[10px] font-mono tracking-widest uppercase font-bold">
                Privacy Statement
              </span>
            </div>

            <h3 className="text-2xl font-extrabold text-black tracking-tight mb-3">
              Your pages never leave your machine.
            </h3>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
              ViewPortIQ audits layouts entirely on-device through the Chrome DevTools Protocol. We do not upload page content,
              screenshots, or browsing data — to us or to anyone else.
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <HardDrive className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span><strong className="text-black">100% local processing.</strong> No servers, no analytics on audited pages.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Lock className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span><strong className="text-black">Minimal permissions.</strong> activeTab, debugger, and storage — nothing more.</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-slate-700">
                <Mail className="w-4 h-4 text-black shrink-0 mt-0.5" />
                <span><strong className="text-black">One data point.</strong> Only the email you give us for early access; deleted on request.</span>
              </li>
            </ul>

            <a
              href="#/privacy"
              className="btn-secondary-light mt-auto w-full sm:w-auto text-xs uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <span>Read the Full Privacy Statement</span>
              <ArrowRight className="w-4 h-4 text-slate-900" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
