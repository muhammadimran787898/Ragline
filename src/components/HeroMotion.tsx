'use client';

export const HeroMotion = () => (
  <div aria-hidden="true" className="hero-motion pointer-events-none absolute inset-0">
    <canvas
      className="size-full"
      ref={(canvas) => {
        if (!canvas) return;
        let cancelled = false;
        let dispose: (() => void) | undefined;
        void import('@/libs/hero-scene').then(({ createHeroScene }) => {
          if (!cancelled) dispose = createHeroScene(canvas);
        }).catch(() => {
          // The CSS background remains available when WebGL cannot load.
        });
        return () => {
          cancelled = true;
          dispose?.();
        };
      }}
    />
  </div>
);
