import React, { useState } from 'react';

export const CtaSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="early-access" className="mb-12 border-t border-gray-300 pt-8">
      <h2 className="text-2xl mb-4">Get early access</h2>

      <p className="mb-4">
        The Chrome Web Store release is not out yet. Leave your email and we will send you the install
        link when it is ready, and let you know before pricing starts.
      </p>

      {submitted ? (
        <p className="border border-gray-400 bg-gray-50 px-4 py-3">
          Thanks — we have added <strong>{email}</strong> to the list. We will email you when the
          extension is available.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-wrap items-center gap-3">
          <label htmlFor="early-access-email" className="sr-only">
            Email address
          </label>
          <input
            id="early-access-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full sm:w-72"
          />
          <button type="submit" className="btn">
            Notify me
          </button>
        </form>
      )}

      <p className="mt-4 text-sm text-gray-700">
        We only use your email for launch and pricing updates. No spam. See the{' '}
        <a href="#/privacy">privacy statement</a>.
      </p>
    </section>
  );
};
