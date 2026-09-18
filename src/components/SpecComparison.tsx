import React from 'react';

const rows = [
  {
    task: 'Testing several screen sizes',
    manual: 'Resize the DevTools window one size at a time.',
    viewportiq: 'Check 12 or more viewports at the same time.',
  },
  {
    task: 'Finding overflow and small touch targets',
    manual: 'Look by eye; easy to miss a 2px scrollbar or a tiny button.',
    viewportiq: 'Ten automated rules with 2px accuracy across the whole page.',
  },
  {
    task: 'Checking a fix',
    manual: 'Guess a CSS change, then re-check every screen by hand.',
    viewportiq: 'Try the fix in the page, re-check all viewports, roll it back.',
  },
  {
    task: 'Privacy',
    manual: 'Some tools upload your pages to a cloud service.',
    viewportiq: 'Runs entirely in your browser. No uploads, no telemetry.',
  },
];

export const SpecComparison: React.FC = () => {
  return (
    <section id="specs" className="section">
      <h2 className="section-title">Compared with doing it by hand</h2>
      <p className="section-lead">What changes when you use the extension.</p>

      <div className="overflow-x-auto">
        <table className="text-sm">
          <thead>
            <tr>
              <th>Task</th>
              <th>By hand</th>
              <th>With ViewPortIQ</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.task}>
                <td className="font-semibold">{r.task}</td>
                <td>{r.manual}</td>
                <td>{r.viewportiq}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};
