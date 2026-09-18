import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="mb-12">
      <p className="text-sm text-gray-600 mb-2">Chrome extension · Early access</p>

      <h1 className="text-3xl sm:text-[2.4rem] mb-5">
        Check your website on many screen sizes at once.
      </h1>

      <p className="mb-4 text-lg">
        ViewPortIQ opens your page at several device sizes, finds layout problems, points to the CSS
        that caused them, and lets you try a fix before you change your code.
      </p>

      <div className="grid sm:grid-cols-[1fr_300px] gap-10 items-start mb-6">
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
              <dt className="text-gray-600">Status</dt>
              <dd>Early access</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Price now</dt>
              <dd>Free</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Price later</dt>
              <dd>Paid plans, soon</dd>
            </div>
            <div className="flex justify-between gap-3">
              <dt className="text-gray-600">Data upload</dt>
              <dd>None</dd>
            </div>
          </dl>
        </aside>
      </div>

      <p className="notice mb-6">
        <strong>Please note:</strong> ViewPortIQ is free during early access and{' '}
        <strong>will become a paid product soon</strong>. We will publish pricing on this page and
        email early-access subscribers before anything is charged. See{' '}
        <a href="#pricing">pricing</a> and our <a href="#/privacy">privacy statement</a>.
      </p>

      <p className="flex flex-wrap items-center gap-4">
        <a href="#early-access" className="btn">Get early access</a>
        <a href="#features">Read about the features</a>
      </p>
    </section>
  );
};
