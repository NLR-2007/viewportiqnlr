import React, { useState, useEffect } from 'react';
import { Monitor, ChevronRight, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const navLinks: { label: string; href: string; badge?: string }[] = [
  { label: 'Features', href: '#features' },
  { label: 'Specs', href: '#specs' },
  { label: 'Architecture', href: '#architecture' },
  { label: 'Pricing', href: '#pricing', badge: 'Paid soon' },
  { label: 'Support', href: '#/support' },
  { label: 'Privacy', href: '#/privacy' },
];

export const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-xl border-b border-slate-200 py-3 shadow-sm'
          : 'bg-white py-4 border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm p-1.5 overflow-hidden">
            <img src="/logo.png" alt="ViewPortIQ Logo" className="w-full h-full object-contain" />
          </div>
          <div className="flex flex-col text-left">
            <div className="flex items-center gap-2">
              <span className="font-geist font-extrabold text-lg sm:text-xl text-black tracking-tight">
                ViewPort<span className="text-[#E52328]">IQ</span>
              </span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[9px] font-mono tracking-widest text-black border border-slate-300 uppercase font-bold">
                v1.0.0
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 font-bold tracking-wider">
              NLR GROUP PRODUCT
            </span>
          </div>
        </a>

        {/* Center Navigation */}
        <nav className="hidden lg:flex items-center gap-1 font-geist text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap px-3 py-2 rounded-lg hover:text-black hover:bg-slate-100 transition-colors flex items-center gap-2"
            >
              <span>{link.label}</span>
              {link.badge && (
                <span className="px-1.5 py-0.5 rounded-md bg-[#E52328] text-white text-[9px] font-mono font-bold tracking-wider uppercase leading-none">
                  {link.badge}
                </span>
              )}
            </a>
          ))}
          <button
            onClick={onOpenModal}
            className="whitespace-nowrap px-3 py-2 rounded-lg hover:text-black hover:bg-slate-100 transition-colors flex items-center gap-2"
          >
            <span>Extension</span>
            <span className="px-1.5 py-0.5 rounded-md bg-slate-200 text-slate-800 text-[9px] font-mono font-bold tracking-wider uppercase leading-none">
              Soon
            </span>
          </button>
        </nav>

        {/* Far Right Actions */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          <div className="hidden 2xl:flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 bg-slate-100 text-[10px] font-mono font-bold text-slate-900">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            <span>100% Local CDP Engine</span>
          </div>

          <a href="#lab-simulator" className="btn-black text-xs font-geist uppercase tracking-wider flex items-center gap-2">
            <span>Launch Lab</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile / Tablet Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2.5 rounded-xl border border-slate-300 bg-slate-100 text-black hover:bg-slate-200"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-4 flex flex-col font-geist text-sm shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-black font-semibold py-3 border-b border-slate-100 flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <span>{link.label}</span>
                {link.badge && (
                  <span className="px-1.5 py-0.5 rounded-md bg-[#E52328] text-white text-[9px] font-mono font-bold tracking-wider uppercase leading-none">
                    {link.badge}
                  </span>
                )}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenModal();
            }}
            className="text-black font-semibold py-3 border-b border-slate-100 flex items-center justify-between text-left"
          >
            <span>Chrome Extension</span>
            <span className="px-2 py-0.5 rounded-md bg-slate-200 text-[10px] text-slate-800 font-mono font-bold uppercase">Launching Soon</span>
          </button>

          <a href="#lab-simulator" onClick={() => setMobileMenuOpen(false)} className="text-white font-bold py-3.5 px-4 rounded-xl bg-black flex items-center justify-between mt-4">
            <span>Launch Responsive Lab</span>
            <ChevronRight className="w-4 h-4 text-white" />
          </a>
        </div>
      )}
    </header>
  );
};
