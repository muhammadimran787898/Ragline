'use client';

export const FooterAura = () => (
  <div aria-hidden="true" className="footer-aura pointer-events-none absolute inset-0">
    <canvas
      className="size-full"
      ref={(canvas) => {
        if (!canvas) return;
        let cancelled = false;
        let dispose: (() => void) | undefined;
        void import('@/libs/footer-aura-scene').then(({ createFooterAuraScene }) => {
          if (!cancelled) dispose = createFooterAuraScene(canvas);
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
