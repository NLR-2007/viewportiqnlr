import React, { useEffect } from 'react';
import { ArrowLeft, ShieldCheck, Lock, Server, Mail, CreditCard, Cpu } from 'lucide-react';

export const PRIVACY_CONTACT_EMAIL = 'support.kisaankrushi@gmail.com';
export const PRIVACY_LAST_UPDATED = 'September 17, 2026';

interface PrivacyStatementProps {
  onOpenModal: () => void;
}

const sections = [
  {
    id: 'summary',
    icon: ShieldCheck,
    title: '01 • Summary',
    body: (
      <>
        <p>
          ViewPortIQ is a Chrome extension built by NLR Group of Companies for multi-device responsive testing and layout auditing.
          The extension processes the pages you audit <strong className="text-black">100% locally inside your browser</strong>.
          It does not send page content, screenshots, CSS, DOM data, or browsing history to our servers or to any third party.
        </p>
        <p>
          The only personal information we collect is the email address you voluntarily submit on this website to join the early-access list.
        </p>
      </>
    ),
  },
  {
    id: 'extension-data',
    icon: Cpu,
    title: '02 • Data the extension processes',
    body: (
      <>
        <p>
          When you run an audit, ViewPortIQ attaches to the active tab through the Chrome DevTools Protocol (CDP) and reads the
          page&apos;s layout (DOM structure, computed styles, element dimensions, and viewport metrics) in order to detect overflow,
          text clipping, and touch-target violations, and to preview CSS fixes.
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>All analysis runs in memory on your device. Nothing is uploaded.</li>
          <li>Audit results are shown to you in the extension UI and discarded when you close it, unless you export them yourself.</li>
          <li>Extension settings (for example, your preferred device presets) are stored locally using Chrome&apos;s <code className="font-mono text-black">storage</code> API.</li>
          <li>ViewPortIQ does not read pages you are not actively auditing and does not run in the background across your browsing.</li>
        </ul>
      </>
    ),
  },
  {
    id: 'permissions',
    icon: Lock,
    title: '03 • Browser permissions',
    body: (
      <>
        <p>ViewPortIQ requests only the Chrome permissions required to perform an audit:</p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li><strong className="text-black">activeTab</strong> — to audit the tab you explicitly launch ViewPortIQ on.</li>
          <li><strong className="text-black">debugger</strong> — to attach the Chrome DevTools Protocol for viewport emulation and layout inspection.</li>
          <li><strong className="text-black">storage</strong> — to remember your local preferences.</li>
        </ul>
        <p>Permissions are used solely for the extension&apos;s stated functionality and never for tracking or advertising.</p>
      </>
    ),
  },
  {
    id: 'website-data',
    icon: Mail,
    title: '04 • Data collected on this website',
    body: (
      <>
        <p>
          If you join the early-access list, we store the email address you provide so we can notify you when the Chrome Web Store
          release is available and about pricing changes (see section 05). We do not sell, rent, or share this list with third parties.
        </p>
        <p>
          You can ask us to delete your email at any time by contacting{' '}
          <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`} className="text-black font-bold underline underline-offset-2">{PRIVACY_CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
  {
    id: 'pricing',
    icon: CreditCard,
    title: '05 • Free today, paid soon',
    body: (
      <>
        <p>
          <strong className="text-black">ViewPortIQ is free during the early-access period. It will become a paid product soon.</strong>{' '}
          Before any charge is introduced, we will publish pricing on this website and notify early-access subscribers by email.
          Nothing will be billed automatically — you will always be asked to opt in.
        </p>
        <p>
          When payments launch, billing will be handled by a payment processor; we will not store your full card details ourselves.
          This statement will be updated to name the processor and describe any additional data handling at that time.
        </p>
      </>
    ),
  },
  {
    id: 'third-parties',
    icon: Server,
    title: '06 • Third parties, security & changes',
    body: (
      <>
        <p>
          The extension makes no network requests to NLR Group servers or third-party analytics services during audits.
          This website loads fonts from Google Fonts, which may log standard request metadata (such as IP address) per Google&apos;s privacy policy.
        </p>
        <p>
          We may update this statement as the product evolves (for example, when paid plans launch). The &quot;last updated&quot; date at the
          top of this page reflects the current version. Material changes will be announced on this website.
        </p>
        <p>
          Questions about this statement can be sent to{' '}
          <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`} className="text-black font-bold underline underline-offset-2">{PRIVACY_CONTACT_EMAIL}</a>.
        </p>
      </>
    ),
  },
];

export const PrivacyStatement: React.FC<PrivacyStatementProps> = ({ onOpenModal }) => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const prev = document.title;
    document.title = 'Privacy Statement — ViewPortIQ | NLR Group of Companies';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-white bg-light-grid text-left">
      <div className="max-w-3xl mx-auto">
        <a href="#/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-slate-600 hover:text-black transition-colors mb-8 min-h-[32px]">
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO HOME</span>
        </a>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-[10px] font-mono tracking-widest text-slate-800 uppercase font-bold mb-5">
          <ShieldCheck className="w-3.5 h-3.5 text-slate-900" />
          <span>LEGAL • PRIVACY</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-geist font-extrabold tracking-tight text-black mb-4 leading-tight">
          Privacy{' '}
          <span className="font-newsreader italic text-slate-600 font-normal">Statement.</span>
        </h1>

        <p className="font-mono text-xs text-slate-500 mb-10">
          LAST UPDATED • {PRIVACY_LAST_UPDATED.toUpperCase()} • NLR GROUP OF COMPANIES
        </p>

        <div className="light-card rounded-2xl p-6 sm:p-8 mb-10 bg-white">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In short: <strong className="text-black">your pages never leave your machine.</strong> ViewPortIQ audits locally,
            requests only the permissions it needs, and the only data we hold is the email you give us for early access.
            The product is free today and <strong className="text-black">will become paid soon</strong> — we will tell you before that happens.
          </p>
        </div>

        <div className="space-y-10">
          {sections.map(({ id, icon: Icon, title, body }) => (
            <article key={id} id={id} className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
                  <Icon className="w-4 h-4 text-black" />
                </div>
                <h2 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-black uppercase">{title}</h2>
              </div>
              <div className="text-sm sm:text-base text-slate-700 leading-relaxed space-y-3 pl-0 sm:pl-12">{body}</div>
            </article>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <span className="font-mono text-[10px] text-slate-500">VIEWPORTIQ • NLR GROUP OF COMPANIES. ALL RIGHTS RESERVED.</span>
          <button onClick={onOpenModal} className="btn-black text-xs uppercase tracking-wider">
            Join Early Access
          </button>
        </div>
      </div>
    </section>
  );
};
