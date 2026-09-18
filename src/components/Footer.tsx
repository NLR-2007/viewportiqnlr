import React from 'react';
import { PRIVACY_CONTACT_EMAIL } from '../pages/PrivacyStatement';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-300 pt-8 mt-4 text-[15px] text-gray-700">
      <div className="grid gap-8 mb-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <p className="font-semibold text-gray-900 mb-1">ViewPortIQ</p>
          <p className="mb-2">A Chrome extension by NLR Group of Companies.</p>
          <p className="text-sm">Free to use. Runs entirely on your own computer.</p>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">Pages</p>
          <ul className="list-none p-0 m-0 space-y-1">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Price</a></li>
            <li><a href="#/support">Support</a></li>
            <li><a href="#/privacy">Privacy statement</a></li>
          </ul>
        </div>

        <div>
          <p className="font-semibold text-gray-900 mb-1">Contact</p>
          <p className="mb-1">
            <a className="wrap-anywhere" href={`mailto:${PRIVACY_CONTACT_EMAIL}`}>
              {PRIVACY_CONTACT_EMAIL}
            </a>
          </p>
          <p className="text-sm">We usually reply within two business days.</p>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-4 space-y-1">
        <p className="text-sm">© NLR Group of Companies. All rights reserved.</p>
        <p className="text-sm text-gray-600">
          Google Chrome and Chrome Web Store are trademarks of Google LLC. ViewPortIQ is an
          independent product and is not affiliated with or endorsed by Google.
        </p>
      </div>
    </footer>
  );
};
