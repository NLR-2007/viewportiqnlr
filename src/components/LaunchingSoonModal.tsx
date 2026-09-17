import React, { useState } from 'react';
import { X, Clock, CheckCircle2, ArrowRight, Layers, Bell } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LaunchingSoonModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 sm:p-10 border border-slate-200 shadow-2xl text-left font-geist">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 p-2 shadow-sm flex items-center justify-center">
                <img src="/logo.png" alt="ViewPortIQ Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-black tracking-tight block">
                  ViewPort<span className="text-[#E52328]">IQ</span> Extension
                </span>
                <span className="text-xs font-mono text-slate-500">CHROME WEB STORE EDITION</span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-300 bg-slate-100 text-[10px] font-mono tracking-widest text-slate-800 uppercase font-bold mb-4">
              <Clock className="w-3.5 h-3.5 text-slate-900" />
              <span>CHROME EXTENSION • LAUNCHING SOON</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-black tracking-tight mb-3">
              Get Early Access to ViewPortIQ
            </h3>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 font-normal">
              We are finalizing Phase 8 production hardening for the Chrome Web Store. Join 1,200+ developers on the priority early access list.
            </p>

            <div className="mb-6 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-xs text-slate-700 leading-relaxed">
              <strong className="text-black">Free during early access. ViewPortIQ will become a paid product soon.</strong>{' '}
              You&apos;ll be emailed before pricing launches — nothing is billed automatically.
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-slate-700 uppercase mb-2">
                  Work Email Address
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@company.com"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-black placeholder:text-slate-400 font-mono text-xs focus:outline-none focus:border-black transition-colors"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 py-3.5"
              >
                <Bell className="w-4 h-4 text-white" />
                <span>Notify Me First</span>
              </button>
            </form>

            <p className="mt-3 text-[10px] font-mono text-slate-500 leading-relaxed">
              By subscribing you agree to our{' '}
              <a href="#/privacy" onClick={onClose} className="text-black font-bold underline underline-offset-2">Privacy Statement</a>.
              Your email is used only for launch and pricing updates.
            </p>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-[10px] font-mono text-slate-500">
              <span>NLR GROUP OF COMPANIES</span>
              <span>100% NO SPAM</span>
            </div>
          </div>
        ) : (
          <div className="py-4 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-slate-900 text-white flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>

            <h3 className="text-2xl font-extrabold text-black tracking-tight">
              You're on the early access list!
            </h3>

            <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
              We'll send an invite link to <strong className="text-black font-mono">{email}</strong> as soon as the Chrome extension goes live.
            </p>

            <button
              onClick={() => {
                setSubmitted(false);
                setEmail('');
                onClose();
              }}
              className="btn-black text-xs uppercase tracking-wider px-8 py-3 mt-4"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
