import React, { useEffect, useState } from 'react';
import { ArrowLeft, LifeBuoy, Mail, Bug, ChevronDown, ShieldCheck, CreditCard, Clock } from 'lucide-react';
import { PRIVACY_CONTACT_EMAIL } from './PrivacyStatement';

export const SUPPORT_EMAIL = PRIVACY_CONTACT_EMAIL;

interface SupportPageProps {
  onOpenModal: () => void;
}

const faqs = [
  {
    q: 'Is ViewPortIQ available on the Chrome Web Store yet?',
    a: 'Not yet. We are finalizing production hardening for the Chrome Web Store release. Join the early-access list and we will email you the install link the moment it goes live.',
  },
  {
    q: 'Is ViewPortIQ free?',
    a: 'ViewPortIQ is free during the early-access period. It will become a paid product soon. Pricing will be published on this website and every early-access subscriber will be emailed before any charge is introduced. Nothing is billed automatically.',
  },
  {
    q: 'Why does the extension ask for the "debugger" permission?',
    a: 'ViewPortIQ uses the Chrome DevTools Protocol (CDP) to emulate viewports and inspect layout in the tab you are auditing. Chrome exposes CDP to extensions only through the debugger permission. It is used solely for auditing the active tab and never for tracking.',
  },
  {
    q: 'Does ViewPortIQ upload my pages or screenshots anywhere?',
    a: 'No. All analysis runs 100% locally inside your browser. No page content, DOM data, CSS, or screenshots leave your machine. See the Privacy Statement for the full details.',
  },
  {
    q: 'How do I delete my early-access email from your list?',
    a: `Email ${PRIVACY_CONTACT_EMAIL} from the address you subscribed with and ask to be removed. We will confirm once it is deleted.`,
  },
  {
    q: 'Which browsers are supported?',
    a: 'ViewPortIQ targets Google Chrome (Manifest V3). Other Chromium-based browsers that support the debugger API may work but are not officially supported yet.',
  },
];

export const SupportPage: React.FC<SupportPageProps> = ({ onOpenModal }) => {
  const [open, setOpen] = useState<number | null>(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    const prev = document.title;
    document.title = 'Support — ViewPortIQ | NLR Group of Companies';
    return () => {
      document.title = prev;
    };
  }, []);

  const bugSubject = encodeURIComponent('ViewPortIQ bug report');
  const bugBody = encodeURIComponent(
    'Chrome version:\nViewPortIQ version:\nPage URL (if shareable):\n\nWhat happened:\n\nWhat you expected:\n\nSteps to reproduce:\n1.\n2.\n3.\n',
  );

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white bg-light-grid text-left">
      <div className="max-w-3xl mx-auto">
        <a href="#/" className="flex w-fit items-center gap-2 font-mono text-xs font-bold text-slate-600 hover:text-black transition-colors mb-8 min-h-[32px]">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </a>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-[10px] font-mono tracking-widest text-slate-800 uppercase font-bold mb-5">
          <LifeBuoy className="w-3.5 h-3.5 text-slate-900" />
          <span>HELP • SUPPORT</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-geist font-extrabold tracking-tight text-black mb-4 leading-tight">
          Support{' '}
          <span className="font-newsreader italic text-slate-600 font-normal">Center.</span>
        </h1>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-10 max-w-2xl">
          Questions, bug reports, or feedback about ViewPortIQ — we read every message. Typical response time is within 2 business days.
        </p>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          <a href={`mailto:${SUPPORT_EMAIL}`} className="light-card rounded-2xl p-6 bg-white flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-black text-white flex items-center justify-center shadow-md">
              <Mail className="w-4 h-4" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold">Email Support</span>
            <span className="text-sm font-bold text-black break-all">{SUPPORT_EMAIL}</span>
            <span className="text-xs text-slate-600">General questions, account and pricing enquiries, data deletion requests.</span>
          </a>

          <a href={`mailto:${SUPPORT_EMAIL}?subject=${bugSubject}&body=${bugBody}`} className="light-card rounded-2xl p-6 bg-white flex flex-col gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-black flex items-center justify-center shadow-sm">
              <Bug className="w-4 h-4" />
            </div>
            <span className="font-mono text-[10px] tracking-widest text-slate-500 uppercase font-bold">Report a Bug</span>
            <span className="text-sm font-bold text-black">Pre-filled bug report</span>
            <span className="text-xs text-slate-600">Opens an email with a template: Chrome version, steps to reproduce, expected vs actual.</span>
          </a>
        </div>

        {/* Status strip */}
        <div className="flex flex-wrap gap-3 mb-12 font-mono text-[10px] font-bold">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-slate-100 text-slate-800">
            <Clock className="w-3 h-3" /> CHROME EXTENSION • LAUNCHING SOON
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#E52328]/30 bg-red-50 text-[#E52328]">
            <CreditCard className="w-3 h-3" /> FREE NOW • PAID SOON
          </span>
          <a href="#/privacy" className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-300 bg-white text-slate-800 hover:border-black transition-colors">
            <ShieldCheck className="w-3 h-3" /> PRIVACY STATEMENT
          </a>
        </div>

        {/* FAQ */}
        <h2 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-black uppercase mb-4">Frequently asked questions</h2>
        <div className="divide-y divide-slate-200 border-y border-slate-200 mb-12">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-black">{item.q}</span>
                  <ChevronDown className={`w-4 h-4 text-slate-500 shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && <p className="pb-5 text-sm text-slate-600 leading-relaxed pr-8">{item.a}</p>}
              </div>
            );
          })}
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-slate-500">VIEWPORTIQ • NLR GROUP OF COMPANIES. ALL RIGHTS RESERVED.</span>
          <button onClick={onOpenModal} className="btn-black text-xs uppercase tracking-wider">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
};
