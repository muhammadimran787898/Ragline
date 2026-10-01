import Image from 'next/image';
import { FeaturePip } from '@/components/FeaturePip';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

const GREEN_STRIP_FEATURES = [
  'Multi-Tenant',
  'Provider Flexible',
  'Self-Hostable',
  'Built for Developers',
] as const;

export const FoundationAlreadyBuilt = () => {
  return (
    <section id="saas-foundation" className="relative w-full bg-black overflow-hidden">
      {/* Upper Area: Left Column (Headline + Text) & Right Column (Table + Glow) */}
      <div className="relative pt-12 sm:pt-16 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
          {/* Left Column (5 cols): Text Content */}
          <div className="px-6 sm:px-8 lg:pl-10 lg:pr-6 lg:col-span-5 z-10 py-6 lg:py-12 font-medium">
            <h2 className="text-3xl sm:text-[35px] lg:text-[36px]  tracking-[-0.025em] text-white leading-[1.15]">
              Start With the
              <br />
              <span>
                <span className="text-white">Foundation </span>
                <span className="text-foundation-work ">Already Built.</span>
              </span>
            </h2>

            <p className="mt-6 text-[13.5px] sm:text-[14px] text-[#8E8E93] leading-[1.6] font-normal max-w-md">
              Enragline handles the foundation around your AI, giving your
              <br className="hidden sm:inline" />
              team more time to build, customize, and launch.
            </p>
          </div>

          {/* Right Column (7 cols): Table Showcase with Exact Gradient Width Frame */}
          <div className="relative lg:col-span-7 flex justify-end items-end pt-4 sm:pt-6 lg:pt-8 pl-2 sm:pl-4 lg:pl-6">
            {/* Table Outer Tray displaying the exact wide gradient background from UI mockup (52px top, 86px left, 44px bottom) */}
            <div className="relative z-10 w-full overflow-hidden rounded-tl-3xl border-t border-l border-white/20 pt-[42px] sm:pt-[48px] lg:pt-[52px] pb-[36px] sm:pb-[40px] lg:pb-[44px] pl-[48px] sm:pl-[68px] lg:pl-[86px] pr-0 shadow-[-30px_-15px_80px_rgba(0,0,0,0.95)]">
              {/* Direct Multi-Hue Gradient Background Layer */}
              <div className="absolute inset-0 z-0">
                <Image
                  src="/brand/crm-glow.png"
                  alt=""
                  fill
                  priority
                  unoptimized
                  className="object-cover object-left-top select-none"
                />
              </div>

              {/* Charcoal Outer Window Frame matching mockup */}
              <div className="relative z-10 w-full overflow-hidden rounded-tl-2xl border-t border-l border-white/25 bg-[#3a3b40] pt-[18px] pb-[18px] pl-[8px] pr-0 shadow-2xl">
                {/* Inner Table Image Container */}
                <div className="relative z-10 w-full overflow-hidden rounded-tl-xl border-t border-l border-white/10 bg-[#0e0f12]">
                  <Image
                    src="/brand/crm-table.png"
                    alt="Sales CRM Foundation Pipeline Showcase"
                    width={508}
                    height={583}
                    priority
                    unoptimized
                    className="block h-auto w-full object-contain object-left-top select-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Feature Items Strip with Emerald Green Glowing Pips */}
      <div className="relative border-y border-[#585858] bg-black z-20">
        <div className="grid w-full grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-dotted divide-[#585858]">
          {GREEN_STRIP_FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex h-14 items-center justify-center gap-2 px-4 text-center"
            >
              <FeaturePip variant="green" />
              <span
                style={{ color: '#FFFFFF' }}
                className="select-none text-sm sm:text-lg font-normal tracking-[-0.01em] text-white"
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Architectural Hatched Divider Band with Pentagon Corner Nodes */}
      <div className="relative h-9 w-full border-b border-[#585858] bg-black">
        <PentagonCornerNode className="left-0 -bottom-4" />
        <PentagonCornerNode className="left-full -bottom-4" />
        <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  );
};
