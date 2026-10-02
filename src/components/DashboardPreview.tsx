'use client';

import Image from 'next/image';

const ERROR_BARS = [
  { y: 449, width: 180, color: '#FF7900' },
  { y: 508, width: 158, color: '#00BA54' },
  { y: 566, width: 116, color: '#229DF1' },
  { y: 625, width: 88, color: '#9661FF' },
  { y: 683, width: 66, color: '#6B6B6B' },
];

const SALES = [
  { x: 470, top: 1004, split: 1123 },
  { x: 570, top: 973, split: 1185 },
  { x: 671, top: 1032, split: 1211 },
  { x: 771, top: 1027, split: 1151 },
  { x: 871, top: 955, split: 1096 },
  { x: 971, top: 1035, split: 1176 },
  { x: 1072, top: 924, split: 1117 },
];

const LINES = [
  { color: '#00BA54', points: '1295,1194 1470,1182 1621,1123 1773,1088 1945,1080' },
  { color: '#D347CA', points: '1299,1136 1403,998 1580,1084 1783,1054 1930,1141' },
  { color: '#FF7900', points: '1350,1208 1472,1222 1621,1134 1773,1075 1926,1106' },
  { color: '#9661FF', points: '1295,1095 1389,1149 1481,974 1578,1131 1669,1034 1761,1129 1854,1147 1949,1067' },
  { color: '#F5AE22', points: '1393,1232 1470,1208 1621,1109 1773,1101 1944,1036' },
  { color: '#229DF1', points: '1298,1167 1434,1159 1592,1059 1779,1154 1939,1054' },
];

/** Reveals dashboard charts once when the preview enters the viewport. */
export const DashboardPreview = () => (
  <div
    className="dashboard-motion relative overflow-hidden rounded-t-2xl rounded-b-none border-t border-x border-white/15 bg-[#0a0a0c] shadow-[0_12px_30px_rgba(0,0,0,0.55)]"
    ref={(element) => {
      if (!element) return;
      const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
      let frame = 0;
      let started = false;
      const revenue = element.querySelector('[data-revenue]');
      const finish = () => {
        cancelAnimationFrame(frame);
        element.dataset.ready = 'true';
        if (revenue) revenue.textContent = '$123K';
      };
      const reveal = () => {
        if (started) return;
        started = true;
        element.dataset.active = 'true';
        if (motion.matches) return finish();
        const start = performance.now();
        const count = (now: number) => {
          const progress = Math.min((now - start) / 1600, 1);
          if (revenue) revenue.textContent = `$${Math.round(123 * (1 - (1 - progress) ** 3))}K`;
          if (progress < 1) frame = requestAnimationFrame(count);
        };
        frame = requestAnimationFrame(count);
      };
      const observer = new IntersectionObserver(([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      }, { threshold: 0.18 });
      const changeMotion = () => {
        if (motion.matches) finish();
      };
      observer.observe(element);
      motion.addEventListener('change', changeMotion);
      return () => {
        cancelAnimationFrame(frame);
        observer.disconnect();
        motion.removeEventListener('change', changeMotion);
      };
    }}
  >
    <Image src="/brand/dashboard-main.png" alt="Enragline dashboard showing AI model usage, edition usage, error rates, $123K in sales, and company growth charts" width={2032} height={1232} priority unoptimized className="block h-auto w-full select-none" />
    <svg aria-hidden="true" viewBox="0 0 2032 1232" className="pointer-events-none absolute inset-0 size-full">
      <defs>
        <pattern id="dashboard-hatch" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(-45)">
          <rect width="4" height="8" fill="white" opacity="0.06" />
        </pattern>
      </defs>
      {/* Preserve the original panel chrome; replace only chart pixels. */}
      <rect x="399" y="528" width="478" height="15" fill="#202020" />
      {[
        { x: 400, width: 167, color: '#FF7900' },
        { x: 572, width: 107, color: '#229DF1' },
        { x: 684, width: 92, color: '#00BA54' },
        { x: 781, width: 64, color: '#9661FF' },
        { x: 850, width: 26, color: '#6B6B6B' },
      ].map((model, index) => (
        <rect key={model.x} className="dashboard-fill" x={model.x} y="529" width={model.width} height="13" rx="6.5" fill={model.color} style={{ animationDelay: `${150 + index * 100}ms` }} />
      ))}
      <circle cx="1038" cy="618" r="96" fill="#202020" />
      <circle cx="1038" cy="618" r="81" fill="none" stroke="#292929" strokeWidth="24" />
      {[
        { color: '#FF7900', size: 25, offset: 0 },
        { color: '#9661FF', size: 32, offset: 25 },
        { color: '#00BA54', size: 30, offset: 57 },
        { color: '#229DF1', size: 13, offset: 87 },
      ].map((segment) => (
        <circle key={segment.color} className="dashboard-donut" cx="1038" cy="618" r="81" fill="none" stroke={segment.color} strokeWidth="24" pathLength="100" strokeDasharray={`${segment.size - 0.6} ${100 - segment.size + 0.6}`} strokeDashoffset={-segment.offset} transform="rotate(-90 1038 618)" />
      ))}
      {ERROR_BARS.map((bar, index) => (
        <g key={bar.y}>
          <rect x="1599" y={bar.y} width={bar.width} height="38" rx="10" fill="#202020" />
          <rect className="dashboard-fill" x="1599" y={bar.y} width={bar.width} height="38" rx="10" fill={bar.color} style={{ animationDelay: `${200 + index * 90}ms` }} />
        </g>
      ))}
      <rect x="449" y="912" width="704" height="320" fill="#202020" />
      {[919, 975, 1031, 1087, 1143, 1199].map((y) => <path key={y} d={`M449 ${y} H1153`} stroke="#343434" strokeDasharray="5 7" />)}
      {SALES.map((bar, index) => (
        <g key={bar.x} className="dashboard-sales" style={{ animationDelay: `${250 + index * 70}ms` }}>
          <rect x={bar.x} y={bar.top + 14} width="63" height={bar.split - bar.top - 20} fill="#644427" />
          <rect x={bar.x} y={bar.top + 14} width="63" height={bar.split - bar.top - 20} fill="url(#dashboard-hatch)" />
          <rect x={bar.x} y={bar.top} width="63" height="9" rx="5" fill="#FF7900" />
          <rect x={bar.x} y={bar.split + 14} width="63" height={1232 - bar.split - 14} fill="#274B60" />
          <rect x={bar.x} y={bar.split + 14} width="63" height={1232 - bar.split - 14} fill="url(#dashboard-hatch)" />
          <rect x={bar.x} y={bar.split} width="63" height="9" rx="5" fill="#229DF1" />
        </g>
      ))}
      <rect x="1273" y="930" width="697" height="302" fill="#202020" />
      {[1370, 1471, 1571, 1671, 1772, 1873].map((x) => <path key={x} d={`M${x} 930 V1232`} stroke="#343434" />)}
      {[993, 1058, 1123, 1188].map((y) => <path key={y} d={`M1273 ${y} H1970`} stroke="#343434" />)}
      {LINES.map((line, index) => (
        <g key={line.color}>
          <polyline className="dashboard-line" points={line.points} fill="none" stroke={line.color} strokeWidth="2.5" strokeLinejoin="round" pathLength="1" style={{ animationDelay: `${350 + index * 80}ms` }} />
          {line.points.split(' ').map((point) => {
            const [x, y] = point.split(',');
            return <circle key={point} className="dashboard-point" cx={x} cy={y} r="5" fill={line.color} />;
          })}
        </g>
      ))}
      <rect x="398" y="845" width="95" height="38" fill="#202020" />
      <text data-revenue="" x="400" y="876" fill="white" fontSize="31" fontWeight="500" fontFamily="Neue Montreal, sans-serif">$123K</text>
      <rect className="dashboard-text-reveal" x="380" y="143" width="478" height="36" fill="#161616" />
    </svg>
  </div>
);
