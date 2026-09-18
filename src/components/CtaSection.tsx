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
    <section id="early-access" className="section">
      <h2 className="section-title">Get early access</h2>
      <p className="section-lead">Be first to get the install link, and hear about pricing before it starts.</p>

      {submitted ? (
        <p className="panel">
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
