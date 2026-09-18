import React from 'react';
import { PRIVACY_CONTACT_EMAIL } from '../pages/PrivacyStatement';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 pt-6 text-sm text-gray-700">
      <p className="mb-2">
        <strong>ViewPortIQ</strong> — a Chrome extension by NLR Group of Companies. Free during early
        access; will become a paid product soon.
      </p>

      <p className="mb-2">
        <a href="#/privacy">Privacy statement</a> · <a href="#/support">Support</a> ·{' '}
        <a href="#pricing">Pricing</a> · <a href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>{PRIVACY_CONTACT_EMAIL}</a>
      </p>

      <p>© NLR Group of Companies. All rights reserved.</p>
    </footer>
  );
};
