import React from 'react';

export const PricingPrivacySection: React.FC = () => {
  return (
    <section id="pricing" className="section">
      <h2 className="section-title">Pricing</h2>
      <p className="section-lead">What it costs now, and what will change.</p>

      <p className="notice mb-4">
        <strong>ViewPortIQ is free during early access and will become a paid product soon.</strong>
      </p>

      <table className="mb-4 text-[15px]">
        <thead>
          <tr>
            <th>Period</th>
            <th>Price</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="font-semibold">Early access (now)</td>
            <td>Free</td>
            <td>No card required. Full feature set.</td>
          </tr>
          <tr>
            <td className="font-semibold">After Chrome Web Store launch</td>
            <td>Paid plans</td>
            <td>Prices will be published here before they take effect.</td>
          </tr>
        </tbody>
      </table>

      <ul className="list-disc pl-5 mb-10 space-y-1">
        <li>Early-access subscribers will be emailed before any charge is introduced.</li>
        <li>Nothing is billed automatically; you will always be asked to opt in.</li>
      </ul>

      <h2 id="privacy" className="section-title">Privacy, in short</h2>
      <p className="section-lead">The full statement is linked below; this is the summary.</p>

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
