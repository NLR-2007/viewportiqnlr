import React from 'react';

export const PricingPrivacySection: React.FC = () => {
  return (
    <section id="pricing" className="mb-12 border-t border-gray-300 pt-8">
      <h2 className="text-2xl mb-4">Pricing</h2>

      <p className="notice mb-4">
        <strong>ViewPortIQ is free during early access and will become a paid product soon.</strong>
      </p>

      <ul className="list-disc pl-5 mb-8 space-y-1">
        <li>Free to use while we are in early access. No card required.</li>
        <li>Once the extension is published on the Chrome Web Store it will move to paid plans.</li>
        <li>Prices will be published on this page before they take effect.</li>
        <li>Early-access subscribers will be emailed before any charge is introduced. Nothing is billed automatically.</li>
      </ul>

      <h2 id="privacy" className="text-2xl mb-4">Privacy, in short</h2>

      <ul className="list-disc pl-5 mb-4 space-y-1">
        <li>Your pages are analysed on your own computer. Nothing is uploaded to us or to anyone else.</li>
        <li>The extension asks only for the <code>activeTab</code>, <code>debugger</code> and <code>storage</code> permissions.</li>
        <li>The only personal data we keep is the email address you give us for early access, and we delete it on request.</li>
      </ul>

      <p>
        Read the full <a href="#/privacy">privacy statement</a>.
      </p>
    </section>
  );
};
