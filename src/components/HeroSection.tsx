import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h1 className="text-3xl sm:text-4xl mb-4">
        Check your website on many screen sizes at once.
      </h1>

      <p className="mb-4">
        ViewPortIQ is a Chrome extension for developers. It opens your page at several device sizes
        (phone, tablet, desktop), finds layout problems such as horizontal overflow, clipped text and
        touch targets that are too small, points to the CSS that caused them, and lets you try a fix
        before you change your code.
      </p>

      <p className="mb-4">
        Everything runs inside your own browser. Nothing is uploaded to a server.
      </p>

      <p className="notice mb-6">
        <strong>Please note:</strong> ViewPortIQ is free during early access and{' '}
        <strong>will become a paid product soon</strong>. We will publish pricing on this page and
        email early-access subscribers before anything is charged. See{' '}
        <a href="#pricing">pricing</a> and our <a href="#/privacy">privacy statement</a>.
      </p>

      <p>
        <a href="#early-access" className="btn mr-3">Get early access</a>
        <a href="#features">Read about the features</a>
      </p>
    </section>
  );
};
