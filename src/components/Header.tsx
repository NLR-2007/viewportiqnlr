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
    <header className="border-b border-gray-300 pb-4 mb-10 flex flex-wrap items-center justify-between gap-4">
      <a href="#/" className="flex items-center gap-3 no-underline text-inherit hover:text-inherit">
        <img src="/logo.png" alt="ViewPortIQ logo" className="w-11 h-11" />
        <span>
          <span className="block text-xl font-bold leading-tight">ViewPortIQ</span>
          <span className="block text-sm text-gray-600">by NLR Group of Companies</span>
        </span>
      </a>

      <nav className="text-[15px]">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-1 list-none p-0 m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-gray-800 no-underline hover:underline">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#early-access" className="btn-outline text-sm py-1.5 px-3">
              Get early access
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
