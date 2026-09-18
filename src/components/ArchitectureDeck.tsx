import React from 'react';

const steps = [
  {
    title: 'Open the page at each device size',
    description: 'The extension creates its own tabs and attaches the Chrome debugger to set exact viewport size, pixel density and touch input.',
  },
  {
    title: 'Scan the layout',
    description: 'A script runs in an isolated world and measures element rectangles, scroll sizes and touch-target bounds, up to 12,000 nodes.',
  },
  {
    title: 'Measure twice',
    description: 'A second pass filters out things that move on their own — animations, off-canvas drawers, carousels — so you do not get false positives.',
  },
  {
    title: 'Score the page',
    description: 'A 0–100 health score weighs blocking issues, usability defects and how many devices are affected.',
  },
  {
    title: 'Suggest and simulate a fix',
    description: 'A small CSS change is proposed, tried in the page temporarily, checked on every viewport, and reverted.',
  },
  {
    title: 'Export a report',
    description: 'Save a self-contained HTML report with screenshots, or a JSON file, for sharing or your own tooling.',
  },
];

export const ArchitectureDeck: React.FC = () => {
  return (
    <section id="architecture" className="mb-12 border-t border-gray-300 pt-8">
      <h2 className="text-2xl mb-2">How it works</h2>
      <p className="mb-6 text-gray-700">
        Built for Chrome (Manifest V3). Each step is a separate module.
      </p>

      <ol className="list-decimal pl-5 space-y-4">
        {steps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}.</strong> {s.description}
          </li>
        ))}
      </ol>
    </section>
  );
};
