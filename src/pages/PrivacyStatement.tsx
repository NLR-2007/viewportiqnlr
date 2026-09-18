import React, { useEffect } from 'react';

export const PRIVACY_CONTACT_EMAIL = 'support.nlrgroupofcompanies@gmail.com';
export const PRIVACY_LAST_UPDATED = '18 September 2026';

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

      <p className="mb-4">
        <strong>In short:</strong> your pages never leave your computer. ViewPortIQ analyses layouts
        locally, asks only for the permissions it needs to do that, and this website collects no
        personal data.
      </p>
      <ul className="list-disc pl-5 mb-8 space-y-1">
        <li>We do not collect, transmit or sell any personal information.</li>
        <li>No accounts, no analytics, no tracking cookies, no advertising.</li>
        <li>Nothing you scan is sent to us or to any third party.</li>
        <li>Everything ViewPortIQ saves stays on your computer, and you can delete it at any time.</li>
      </ul>

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
        When you run an audit, ViewPortIQ opens its own tabs for the device sizes you chose and loads
        the page you are testing into them. It attaches the Chrome DevTools Protocol to those tabs
        only — never to the tab you are browsing in — and reads the page&apos;s layout (DOM structure,
        computed styles, element sizes and viewport metrics) in order to detect overflow, clipped text
        and small touch targets, and to preview CSS fixes.
      </p>
      <ul className="list-disc pl-5 mb-6 space-y-1">
        <li>All analysis runs on your device. Nothing is uploaded.</li>
        <li>
          Results are stored locally on your computer so you can compare a page with your earlier
          scans: a capped history of recent scans per address, plus the issues you chose to ignore,
          your saved breakpoints and your preferences. Nothing leaves the browser, and you can clear
          it at any time from the extension or by removing the extension.
        </li>
        <li>
          Scan history stores measurements and CSS selectors, not page content: form values,
          passwords, tokens and screenshots are never written to storage.
        </li>
        <li>ViewPortIQ reads the address of your current tab only to tell you whether that page can be audited. It does not read pages you are not auditing and does not run in the background.</li>
      </ul>

      <h2 className="text-xl mb-2">3. Browser permissions</h2>
      <p className="mb-3">ViewPortIQ requests only the Chrome permissions required to perform an audit:</p>
      <ul className="list-disc pl-5 mb-3 space-y-1">
        <li><code>sidePanel</code> — to show the ViewPortIQ panel when you click the toolbar icon.</li>
        <li>
          <code>tabs</code> — to read the current tab&apos;s address and title so we can tell you
          whether that page can be audited, and to open, reload, switch to and close the device tabs
          ViewPortIQ creates. Tabs you opened yourself are never modified or closed.
        </li>
        <li>
          <code>storage</code> — to keep lab state across browser restarts and to save your
          preferences, breakpoints, ignored issues and local scan history on your own computer.
        </li>
        <li>
          <code>debugger</code> — to use the Chrome DevTools Protocol for viewport emulation, device
          previews and running the bundled measurement script. It is attached only to the tabs
          ViewPortIQ opens itself and is detached when the device or lab is closed. While it is
          attached, Chrome shows its own &quot;debugging this browser&quot; notice.
        </li>
      </ul>
      <p className="mb-3">
        ViewPortIQ does not request host permissions or access to all websites, and it does not use
        the <code>activeTab</code>, <code>scripting</code>, <code>cookies</code>,{' '}
        <code>webRequest</code> or <code>downloads</code> permissions.
      </p>
      <p className="mb-6">These permissions are used solely for the extension&apos;s stated functionality and never for tracking or advertising.</p>

      <h2 className="text-xl mb-2">4. Data collected on this website</h2>
      <p className="mb-3">
        This website has no sign-up forms, accounts, analytics or tracking cookies. It does not collect
        or store any personal data.
      </p>
      <p className="mb-6">
        If you contact us by email, we keep your message only for as long as needed to answer it, and
        you can ask us to delete it at any time by writing to{' '}
        <a className="wrap-anywhere" href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>.
      </p>

      <h2 className="text-xl mb-2">5. Payments</h2>
      <p className="mb-6">
        ViewPortIQ is free, and the extension never asks for payment details. We do not process
        payments, and there is no billing data to store. If an optional paid tier is introduced in
        future, this statement will be updated first to name the payment processor and describe what
        it handles — and nothing will be charged without you choosing it.
      </p>

      <h2 className="text-xl mb-2">6. Deleting your data</h2>
      <p className="mb-6">
        Everything ViewPortIQ stores is on your own computer. You can clear the scan history from the
        extension, or remove all of it at once by uninstalling the extension from{' '}
        <code>chrome://extensions</code>. Because we never receive this data, there is nothing for us
        to delete on our side. If you have emailed us and want that message deleted, write to{' '}
        <a className="wrap-anywhere" href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>.
      </p>

      <h2 className="text-xl mb-2">7. Third parties, security and changes</h2>
      <p className="mb-3">
        The extension makes no network requests to NLR Group servers or third-party analytics services
        during audits, and loads no remote code: everything it runs is bundled in the extension
        package. This website does not use analytics or tracking cookies.
      </p>
      <p className="mb-3">
        We may update this statement as the product evolves. The
        &quot;last updated&quot; date at the top of this page reflects the current version. Material
        changes will be announced on this website.
      </p>
      <p>
        Questions about this statement can be sent to{' '}
        <a className="wrap-anywhere" href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>.
      </p>
    </article>
  );
};
