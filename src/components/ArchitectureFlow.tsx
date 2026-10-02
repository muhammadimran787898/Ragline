'use client';

import Image from 'next/image';

const STAGES = [
  {
    title: 'Built for AI SaaS',
    description: 'Start with the SaaS and AI infrastructure required to turn an AI idea into a commercial application.',
    image: '/brand/rag3.svg',
    width: 280,
    regions: [
      { clip: 'polygon(26% 0, 76% 0, 76% 36%, 56% 47%, 26% 29%)', color: '#EEEDE8', delay: '0s' },
      { clip: 'polygon(0 27%, 26% 27%, 26% 29%, 56% 47%, 76% 36%, 76% 27%, 100% 27%, 100% 60%, 56% 76%, 0 51%)', color: '#EEEDE8', delay: '3s' },
      ...Array.from({ length: 7 }, (_, index) => ({
        clip: `polygon(${index * 14.28}% 52%, ${(index + 1) * 14.28}% 52%, ${(index + 1) * 14.28}% 100%, ${index * 14.28}% 100%)`,
        color: '#EEEDE8',
        delay: `${6 + index * 0.45}s`,
      })),
    ],
  },
  {
    title: 'RAG-First Architecture',
    description: 'Process knowledge, generate embeddings, retrieve context, and deliver grounded AI responses.',
    image: '/brand/rag2.svg',
    width: 223,
    regions: [
      { clip: 'inset(0 0 65% 0)', color: '#EEEDE8', delay: '0s' },
      { clip: 'inset(35% 0 30% 0)', color: '#EEEDE8', delay: '3s' },
      { clip: 'inset(70% 50% 0 0)', color: '#EEEDE8', delay: '6s' },
      { clip: 'inset(70% 0 0 50%)', color: '#EEEDE8', delay: '7s' },
    ],
  },
  {
    title: 'Deploy Anywhere',
    description: 'Run your application in the cloud, on a VPS, on-premises, or within private infrastructure.',
    image: '/brand/rag1.svg',
    width: 191,
    regions: [
      { clip: 'inset(0 0 65% 0)', color: '#EEEDE8', delay: '0s' },
      { clip: 'inset(35% 0 30% 0)', color: '#EEEDE8', delay: '3s' },
      { clip: 'inset(70% 50% 0 0)', color: '#EEEDE8', delay: '6s' },
      { clip: 'inset(70% 0 0 50%)', color: '#EEEDE8', delay: '7s' },
    ],
  },
] as const;

/** Runs an independent top-to-bottom processing cycle inside each architecture. */
export const ArchitectureFlow = () => (
  <div
    className="architecture-flow relative"
    ref={(element) => {
      if (!element) return;
      let visible = false;
      const update = () => { element.dataset.running = String(visible && !document.hidden); };
      const observer = new IntersectionObserver(([entry]) => {
        visible = entry?.isIntersecting ?? false;
        update();
      }, { threshold: 0.1 });
      observer.observe(element);
      document.addEventListener('visibilitychange', update);
      return () => {
        observer.disconnect();
        document.removeEventListener('visibilitychange', update);
      };
    }}
  >
    <div className="grid grid-cols-1 divide-y divide-dashed divide-[#585858] md:grid-cols-3 md:divide-x md:divide-y-0">
      {STAGES.map((stage) => (
        <div key={stage.title} className="architecture-stage relative flex flex-col justify-between px-8 py-12 sm:px-10 sm:py-14 lg:px-12 lg:py-16" >
          <div className="relative flex h-52 items-center justify-center">
            <div className="architecture-diagram relative h-auto max-h-48 w-auto max-w-full" style={{ aspectRatio: `${stage.width} / 200`, width: `${stage.width * 0.96}px` }}>
              <Image src={stage.image} alt={`${stage.title} architecture`} width={stage.width} height={200} unoptimized className="block h-auto max-h-48 w-full select-none object-contain" />
              {stage.regions.map((region) => (
                <span
                  key={region.clip}
                  aria-hidden="true"
                  className="architecture-outline-glow"
                  style={{ maskImage: `url('${stage.image}')`, clipPath: region.clip, backgroundColor: region.color, color: region.color, animationDelay: region.delay }}
                />
              ))}
            </div>
          </div>
          <div className="relative mt-8">
            <h3 className="text-xl font-medium tracking-tight text-white sm:text-2xl">{stage.title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-[#8E8E93]">{stage.description}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);
