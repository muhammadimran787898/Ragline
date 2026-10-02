'use client';

import Image from 'next/image';

const MODULES = [
  { clip: 'polygon(0 20%, 14% 20%, 14% 73%, 0 73%)', content: 'polygon(3.3% 30%, 10% 42%, 10% 59%, 3.3% 47%)', color: '#248EFB', delay: '0s' },
  { clip: 'polygon(18% 0, 31% 0, 31% 44%, 18% 44%)', content: 'polygon(23.4% 10%, 26.8% 15%, 26.8% 29%, 23.4% 24%)', color: '#6F24FB', delay: '4s' },
  { clip: 'inset(62% 68% 8% 23%)', content: 'polygon(24.6% 73%, 29.9% 65%, 29.9% 80%, 24.6% 88%)', color: '#248EFB', delay: '6s' },
  { clip: 'inset(16% 54% 44% 33%)', content: 'inset(23% 58.3% 60% 38%)', color: '#41D9EF', delay: '8s' },
  { clip: 'inset(10% 37% 47% 50%)', content: 'polygon(54% 18%, 56.5% 22%, 56.5% 31%, 54% 27%)', color: '#FEA327', delay: '12s' },
  { clip: 'inset(68% 35% 0 56%)', content: 'polygon(57.6% 79%, 63.6% 69%, 63.6% 91%, 57.6% 100%)', color: '#248EFB', delay: '14s' },
  { clip: 'inset(0 19% 60% 68%)', content: 'polygon(72.2% 5%, 77.1% 13%, 77.1% 24%, 72.2% 16%)', color: '#7DDDF5', delay: '18s' },
  { clip: 'inset(55% 17% 9% 74%)', content: 'inset(70% 22.2% 9% 76.4%)', color: '#41D9EF', delay: '20s' },
  { clip: 'inset(0 0 46% 86%)', content: 'polygon(91% 15%, 95.8% 23%, 95.8% 34%, 91% 26%)', color: '#00D26A', delay: '24s' },
];
const CIRCUITS = [
  { route: 'M118 154 L203 105', color: '#EEEDE8', delay: '2s' },
  { route: 'M308 96 L342 117 L383 94', color: '#EEEDE8', delay: '6s' },
  { route: 'M257 130 L274 141 V194', color: '#EEEDE8', delay: '5s' },
  { route: 'M444 95 L479 82 L516 98', color: '#EEEDE8', delay: '10s' },
  { route: 'M577 158 V190 H612 V217', color: '#EEEDE8', delay: '13s' },
  { route: 'M636 110 L692 77', color: '#EEEDE8', delay: '16s' },
  { route: 'M775 114 L787 125 V170', color: '#EEEDE8', delay: '19s' },
  { route: 'M819 60.5 L887 96.5', color: '#EEEDE8', delay: '22s' },
];
const STATUSES = [
  { x: 274, y: 165, delay: '6s' },
  { x: 479, y: 82, delay: '10s' },
  { x: 612, y: 190, delay: '14s' },
  { x: 787, y: 142, delay: '20s' },
];

/** Activates the existing workflow modules and circuits in sequence. */
export const WorkflowAnimation = () => (
  <div className="workflow-animation relative mx-auto w-full max-w-[820px]" ref={(element) => {
    if (!element) return;
    let visible = false;
    const update = () => { element.dataset.running = String(visible && !document.hidden); };
    const observer = new IntersectionObserver(([entry]) => { visible = entry?.isIntersecting ?? false; update(); }, { threshold: 0.15 });
    observer.observe(element);
    document.addEventListener('visibilitychange', update);
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', update); };
  }}>
    <Image src="/brand/ai-feature-workflow.png" alt="AI application workflow: connected computers activate and validate their services" width={1016} height={300} unoptimized className="block h-auto w-full select-none" />
    {MODULES.map((module) => (
      <div key={module.clip} aria-hidden="true">
        <span className="workflow-module" style={{ clipPath: module.clip, backgroundColor: '#EEEDE8', color: '#EEEDE8', animationDelay: module.delay }} />
        <span className="workflow-module workflow-content" style={{ clipPath: module.content, backgroundColor: module.color, color: module.color, animationDelay: module.delay }} />
      </div>
    ))}
    <svg aria-hidden="true" viewBox="0 0 1016 300" className="pointer-events-none absolute inset-0 size-full">
      {CIRCUITS.map((circuit) => (
        <path key={circuit.route} d={circuit.route} className="workflow-circuit" fill="none" stroke={circuit.color} strokeWidth="1.8" strokeLinecap="round" pathLength="100" style={{ animationDelay: circuit.delay, color: circuit.color }} />
      ))}
      {STATUSES.map((status) => (
        <g key={status.x} className="workflow-status" style={{ animationDelay: status.delay }}>
          <circle cx={status.x} cy={status.y} r="13" fill="black" />
          <circle cx={status.x} cy={status.y} r="10.5" fill="none" stroke="#00D26A" strokeWidth="1.7" />
          <path d={`M${status.x - 5} ${status.y} l3.5 4 7 -8`} fill="none" stroke="#00D26A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      ))}
      <g className="workflow-code" style={{ animationDelay: '12s' }} strokeWidth="2" strokeLinecap="round">
        <path d="M578 70 l20 10" stroke="#00D26A" />
        <path d="M578 80 l20 10" stroke="#FD1C20" />
        <path d="M578 89.5 l20 10" stroke="#248EFB" />
      </g>
    </svg>
  </div>
);
