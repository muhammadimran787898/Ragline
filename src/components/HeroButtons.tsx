'use client';

import Link from 'next/link';

type HeroButtonsProps = {
  startBuildingLabel: string;
  explorePlatformLabel: string;
};

export const HeroButtons = (props: HeroButtonsProps) => (
  <div className="flex flex-wrap items-center gap-3">
    {/* Primary CTA: "Start Building" */}
    <Link
      href="#pricing"
      className="gradient-button select-none active:scale-[0.98]"
    >
      <span>{props.startBuildingLabel}</span>
    </Link>

    {/* Secondary CTA: "Explore Platform" */}
    <Link
      href="#benefits"
      className="flex h-[44px] items-center justify-center rounded-[12px] border border-white/20 bg-[#08080A] px-6 text-[14.5px] font-medium tracking-tight text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06] active:scale-[0.98] select-none"
    >
      <span className="text-white/95">
        {props.explorePlatformLabel}
      </span>
    </Link>
  </div>
);
