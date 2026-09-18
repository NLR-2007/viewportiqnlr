import React, { useEffect } from 'react';

export const PRIVACY_CONTACT_EMAIL = 'support.kisaankrushi@gmail.com';
export const PRIVACY_LAST_UPDATED = '17 September 2026';

export const PrivacyStatement: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
    const prev = document.title;
    document.title = 'Privacy Statement — ViewPortIQ';
    return () => {
      document.title = prev;
    };
  }, []);

  return (
    <article className="mb-12 max-w-5xl">
      <p className="mb-6 text-sm">
        <a href="#/">← Back to home</a>
      </p>

      <h1 className="text-3xl mb-2">Privacy Statement</h1>
      <p className="text-sm text-gray-700 mb-6">
        Last updated {PRIVACY_LAST_UPDATED} · NLR Group of Companies
      </p>

      <p className="mb-8">
        In short: your pages never leave your machine. ViewPortIQ analyses layouts locally, asks only
        for the permissions it needs, and this website collects no personal data. The product is free
        today and will become paid soon; pricing will be published here before that happens.
      </p>

      <h2 className="text-xl mb-2">1. Summary</h2>
      <p className="mb-3">
        ViewPortIQ is a Chrome extension built by NLR Group of Companies for testing web pages across
        several screen sizes and finding layout problems. The extension processes the pages you audit
        entirely inside your browser. It does not send page content, screenshots, CSS, DOM data or
        browsing history to our servers or to any third party.
      </p>
      <p className="mb-6">
        We do not collect personal information through the extension or this website. If you email us
        for support, we use your message only to reply to you.
      </p>

      <h2 className="text-xl mb-2">2. Data the extension processes</h2>
      <p className="mb-3">
        When you run an audit, ViewPortIQ attaches to the active tab through the Chrome DevTools
        Protocol and reads the page&apos;s layout (DOM structure, computed styles, element sizes and
        viewport metrics) in order to detect overflow, clipped text and small touch targets, and to
        preview CSS fixes.
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>All analysis runs in memory on your device. Nothing is uploaded.</li>
        <li>Audit results are shown in the extension and discarded when you close it, unless you export them yourself.</li>
        <li>Extension settings (such as your preferred device presets) are stored locally using Chrome&apos;s <code>storage</code> API.</li>
        <li>ViewPortIQ does not read pages you are not actively auditing and does not run in the background.</li>
      </ul>

      <h2 className="text-xl mb-2">3. Browser permissions</h2>
      <p className="mb-3">ViewPortIQ requests only the Chrome permissions required to perform an audit:</p>
      <ul className="list-disc pl-5 mb-3 space-y-1">
        <li><code>activeTab</code> — to audit the tab you explicitly launch ViewPortIQ on.</li>
        <li><code>debugger</code> — to use the Chrome DevTools Protocol for viewport emulation and layout inspection.</li>
        <li><code>storage</code> — to remember your local preferences.</li>
      </ul>
      <p className="mb-6">These permissions are used solely for the extension&apos;s stated functionality and never for tracking or advertising.</p>

      <h2 className="text-xl mb-2">4. Data collected on this website</h2>
      <p className="mb-3">
        This website has no sign-up forms, accounts, analytics or tracking cookies. It does not collect
        or store any personal data.
      </p>
      <p className="mb-6">
        If you contact us by email, we keep your message only for as long as needed to answer it, and
        you can ask us to delete it at any time by writing to{' '}
        <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>.
      </p>

      <h2 className="text-xl mb-2">5. Free today, paid soon</h2>
      <p className="mb-3">
        <strong>ViewPortIQ is free during the early-access period. It will become a paid product soon.</strong>{' '}
        Before any charge is introduced, we will publish pricing on this website. Nothing will be
        billed automatically; you will always be asked to opt in.
      </p>
      <p className="mb-6">
        When payments launch, billing will be handled by a payment processor; we will not store your full
        card details ourselves. This statement will be updated to name the processor and describe any
        additional data handling at that time.
      </p>

      <h2 className="text-xl mb-2">6. Third parties, security and changes</h2>
      <p className="mb-3">
        The extension makes no network requests to NLR Group servers or third-party analytics services
        during audits. This website does not use analytics or tracking cookies.
      </p>
      <p className="mb-3">
        We may update this statement as the product evolves (for example, when paid plans launch). The
        &quot;last updated&quot; date at the top of this page reflects the current version. Material
        changes will be announced on this website.
      </p>
      <p>
        Questions about this statement can be sent to{' '}
        <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
};
