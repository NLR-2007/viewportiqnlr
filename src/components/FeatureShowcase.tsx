import React from 'react';

const features = [
  {
    title: 'Multi-device emulation',
    description:
      'ViewPortIQ opens your page in its own background tabs and uses the Chrome DevTools Protocol to apply exact device sizes, pixel density and touch emulation.',
    details: [
      'Debugger is attached only to tabs the extension creates itself',
      'Device pixel ratio from 1.0x to 3.0x',
      'No network calls and no external APIs',
    ],
  },
  {
    title: 'Layout scanner',
    description:
      'Ten rules check element sizes, scroll containers, text clipping and touch targets across up to 12,000 DOM nodes.',
    details: [
      'Horizontal overflow (2px tolerance)',
      'Touch targets smaller than 24px',
      'Unbreakable text and flex-wrap failures',
    ],
  },
  {
    title: 'Root cause',
    description:
      'Each problem is mapped back to the CSS declaration that caused it: fixed pixel widths, padding on content-box elements, missing max-width, nowrap, and so on.',
    details: [
      'fixed-width and fixed-width-padding',
      'white-space: nowrap and unbreakable text',
      'flex-nowrap and grid fixed tracks',
      'Images and media missing max-width',
    ],
  },
  {
    title: 'Try a fix safely',
    description:
      'ViewPortIQ suggests a small scoped CSS change, injects it temporarily into the tab, re-checks every viewport, and then rolls it back.',
    details: [
      'Only a whitelist of layout properties is used',
      'Original inline styles are restored on rollback',
      'Regression check across all viewports',
    ],
  },
  {
    title: 'Reports',
    description:
      'Export a self-contained HTML report (no scripts) with screenshots of the offending elements, or a JSON file for your own tooling.',
    details: ['Script-free HTML with strict CSP', 'Embedded screenshot evidence', 'JSON schema version 1'],
  },
];

export const FeatureShowcase: React.FC = () => {
  return (
    <section id="features" className="section">
      <h2 className="section-title">Features</h2>
      <p className="section-lead">The five parts of the extension, in the order they run.</p>

      <ol className="list-decimal pl-5 space-y-7">
        {features.map((f) => (
          <li key={f.title}>
            <h3 className="text-lg mb-1.5">{f.title}</h3>
            <p className="mb-2">{f.description}</p>
            <ul className="list-disc pl-5 text-gray-700">
              {f.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
};
