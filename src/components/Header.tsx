import React from 'react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Comparison', href: '#specs' },
  { label: 'How it works', href: '#architecture' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Support', href: '#/support' },
  { label: 'Privacy', href: '#/privacy' },
];

export const Header: React.FC = () => {
  return (
    <header className="border-b border-gray-300 pb-4 mb-8">
      <a href="#/" className="flex items-center gap-3 no-underline text-inherit">
        <img src="/logo.png" alt="ViewPortIQ logo" className="w-10 h-10" />
        <span>
          <span className="block text-xl font-bold">ViewPortIQ</span>
          <span className="block text-sm text-gray-600">A product of NLR Group of Companies · v1.0.0</span>
        </span>
      </a>

      <nav className="mt-4 text-sm">
        <ul className="flex flex-wrap gap-x-4 gap-y-1 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li>
            <a href="#early-access">Get early access</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
