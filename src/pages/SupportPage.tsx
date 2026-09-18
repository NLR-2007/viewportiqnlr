import React, { useEffect } from 'react';
import { PRIVACY_CONTACT_EMAIL } from './PrivacyStatement';

export const SUPPORT_EMAIL = PRIVACY_CONTACT_EMAIL;

const faqs = [
  {
    q: 'Is ViewPortIQ available on the Chrome Web Store yet?',
    a: 'Not yet. We are finishing the Chrome Web Store release. Join the early-access list on the home page and we will email you the install link when it is live.',
  },
  {
    q: 'Is ViewPortIQ free?',
    a: 'It is free during early access. It will become a paid product soon. Pricing will be published on this website and every early-access subscriber will be emailed before any charge is introduced. Nothing is billed automatically.',
  },
  {
    q: 'Why does the extension ask for the "debugger" permission?',
    a: 'ViewPortIQ uses the Chrome DevTools Protocol to emulate screen sizes and inspect layout in the tab you are auditing. Chrome only exposes that protocol to extensions through the debugger permission. It is used only for auditing the active tab, never for tracking.',
  },
  {
    q: 'Does ViewPortIQ upload my pages or screenshots anywhere?',
    a: 'No. Everything runs inside your browser. No page content, DOM data, CSS or screenshots leave your machine. See the privacy statement for details.',
  },
  {
    q: 'How do I delete my early-access email from your list?',
    a: `Email ${PRIVACY_CONTACT_EMAIL} from the address you subscribed with and ask to be removed. We will confirm once it is deleted.`,
  },
  {
    q: 'Which browsers are supported?',
    a: 'Google Chrome (Manifest V3). Other Chromium-based browsers that support the debugger API may work but are not officially supported yet.',
  },
];

export const SupportPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const prev = document.title;
    document.title = 'Support — ViewPortIQ';
    return () => {
      document.title = prev;
    };
  }, []);

  const bugSubject = encodeURIComponent('ViewPortIQ bug report');
  const bugBody = encodeURIComponent(
    'Chrome version:\nViewPortIQ version:\nPage URL (if shareable):\n\nWhat happened:\n\nWhat you expected:\n\nSteps to reproduce:\n1.\n2.\n3.\n',
  );

  return (
    <article className="mb-12">
      <p className="mb-6 text-sm">
        <a href="#/">← Back to home</a>
      </p>

      <h1 className="text-3xl mb-4">Support</h1>

      <p className="mb-6">
        Questions, bug reports or feedback about ViewPortIQ — we read every message and usually reply
        within two business days.
      </p>

      <h2 className="text-xl mb-2">Contact</h2>
      <ul className="list-disc pl-5 mb-8 space-y-1">
        <li>
          Email: <a href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — general questions, pricing
          enquiries, data deletion requests.
        </li>
        <li>
          <a href={`mailto:${SUPPORT_EMAIL}?subject=${bugSubject}&body=${bugBody}`}>Report a bug</a> —
          opens an email with a short template (Chrome version, steps to reproduce, what you expected).
        </li>
      </ul>

      <h2 className="text-xl mb-4">Frequently asked questions</h2>
      <dl className="space-y-5 mb-8">
        {faqs.map((item) => (
          <div key={item.q}>
            <dt className="font-semibold">{item.q}</dt>
            <dd className="text-gray-800 mt-1">{item.a}</dd>
          </div>
        ))}
      </dl>

      <p>
        See also the <a href="#/privacy">privacy statement</a> and <a href="#pricing">pricing</a>.
      </p>
    </article>
  );
};
