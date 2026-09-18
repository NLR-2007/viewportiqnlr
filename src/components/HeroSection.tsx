import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="mb-12">
      <p className="text-sm text-gray-600 mb-2">Chrome extension · Free</p>

      <h1 className="text-[1.65rem] sm:text-3xl lg:text-[2.4rem] mb-5">
        Check your website on many screen sizes at once.
      </h1>

      <p className="mb-4 text-base sm:text-lg">
        ViewPortIQ opens your page at several device sizes, finds layout problems, points to the CSS
        that caused them, and lets you try a fix before you change your code.
      </p>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:gap-10 items-start mb-6">
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Phone, tablet and desktop viewports tested together, not one at a time.</li>
          <li>Finds horizontal overflow, clipped text and touch targets that are too small.</li>
          <li>Tells you which CSS rule is responsible and suggests a small, safe change.</li>
          <li>Runs entirely inside your own browser. Nothing is uploaded.</li>
        </ul>

        <aside className="panel text-sm">
          <p className="font-semibold mb-2">At a glance</p>
          <dl className="space-y-1">
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Platform</dt>
              <dd>Google Chrome</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Price</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Account</dt>
              <dd>Not required</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Data upload</dt>
              <dd>None</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Runs</dt>
              <dd>On your computer</dd>
            </div>
          </dl>
        </aside>
      </div>

      <p className="notice mb-6">
        <strong>ViewPortIQ is free to use, with no account and no card.</strong> Your pages are
        analysed on your own computer and nothing is uploaded. Read the{' '}
        <a href="#/privacy">privacy statement</a> or <a href="#/support">contact support</a>.
      </p>

      <p className="flex flex-wrap items-center gap-4">
        <a href="#features" className="btn">Read about the features</a>
        <a href="#/support">Contact support</a>
      </p>
    </section>
  );
};
