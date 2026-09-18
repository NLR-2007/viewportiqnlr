import React, { useEffect } from 'react';
import { PRIVACY_CONTACT_EMAIL } from './PrivacyStatement';

export const SUPPORT_EMAIL = PRIVACY_CONTACT_EMAIL;

const faqs = [
  {
    q: 'Is ViewPortIQ free?',
    a: 'Yes. Every feature is free, with no account, no card and no usage limit. We may add an optional paid tier in future once the free product has proved itself, but it would be announced on this website first and nothing is ever charged automatically.',
  },
  {
    q: 'Is ViewPortIQ available on the Chrome Web Store yet?',
    a: 'Not yet. We are finishing the Chrome Web Store release. The install link will be published on this website when it is live.',
  },
  {
    q: 'Does ViewPortIQ upload my pages or screenshots anywhere?',
    a: 'No. Everything runs inside your browser. No page content, DOM data, CSS or screenshots leave your machine, and the extension loads no remote code. See the privacy statement for details.',
  },
  {
    q: 'Why does the extension ask for the "debugger" permission?',
    a: 'ViewPortIQ uses the Chrome DevTools Protocol to emulate exact screen sizes, capture device previews and run its own measurement script. Chrome only exposes that protocol to extensions through the debugger permission. It is attached only to the device tabs ViewPortIQ opens itself — never to the tab you are browsing in — and it is detached when you close the device or the lab.',
  },
  {
    q: 'Why does Chrome say the browser is being debugged?',
    a: 'That notice is shown by Chrome itself whenever any extension uses the debugger permission, which ViewPortIQ needs to emulate devices. It appears on the ViewPortIQ device windows while a lab is open and disappears as soon as you close it. It does not mean anything is being recorded.',
  },
  {
    q: 'Does it change my website?',
    a: 'No. ViewPortIQ opens its own tabs and measures the page there. When you try a suggested CSS fix, it is applied temporarily in those tabs, re-measured and then rolled back — your site and your code are never modified. Copying the fix into your project is up to you.',
  },
  {
    q: 'What does it store on my computer?',
    a: 'A capped history of recent scans per address, the issues you chose to ignore, your saved breakpoints and your preferences. These hold measurements and CSS selectors, never form values, passwords or tokens. Clear them from the extension, or remove everything by uninstalling it.',
  },
  {
    q: 'Which browsers are supported?',
    a: 'Google Chrome 116 or newer (Manifest V3). Other Chromium-based browsers that support the debugger API may work but are not officially supported yet.',
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
    <article className="mb-12 max-w-5xl">
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
          Email: <a className="wrap-anywhere" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a> — questions, feedback and
          privacy enquiries.
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
        See also the <a href="#/privacy">privacy statement</a>.
      </p>
    </article>
  );
};
