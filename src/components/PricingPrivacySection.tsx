import React from 'react';

export const PricingPrivacySection: React.FC = () => {
  return (
    <section id="pricing" className="section">
      <h2 className="section-title">Price</h2>
      <p className="section-lead">What it costs today.</p>

      <p className="notice mb-4">
        <strong>ViewPortIQ is free.</strong> No account, no card, no trial period and no usage limit.
      </p>

      <ul className="list-disc pl-5 mb-10 space-y-1">
        <li>Every feature described on this page is included at no cost.</li>
        <li>Nothing is billed, and the extension never asks you for payment details.</li>
        <li>
          We may add an optional paid tier in future, once the free product has proved itself. If that
          happens, it will be announced here first, what you use today will stay available, and
          nothing will ever be charged automatically.
        </li>
      </ul>

      <h2 id="privacy" className="section-title">Privacy, in short</h2>
      <p className="section-lead">The full statement is linked below; this is the summary.</p>

      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Your pages are analysed on your own computer. Nothing is uploaded to us or to anyone else.</li>
        <li>
          The extension asks only for the <code>sidePanel</code>, <code>tabs</code>,{' '}
          <code>storage</code> and <code>debugger</code> permissions — no access to all websites, and
          the debugger is attached only to the tabs ViewPortIQ opens itself.
        </li>
        <li>This website collects no personal data and uses no analytics or tracking cookies.</li>
      </ul>

      <p>
        Read the full <a href="#/privacy">privacy statement</a>.
      </p>
    </section>
  );
};
