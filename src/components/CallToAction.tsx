import { HeroButtons } from './HeroButtons';
import { PentagonCornerNode } from './PentagonCornerNode';

export const CallToAction = () => {
  return (
    <section id="get-started" className="relative w-full bg-black  border-b border-[#585858]">
      {/* Background Subtle Gradient/Glow (Optional, based on the image there is a slight dark red/orange hue in the background at the bottom) */}
      <div className="absolute inset-0 z-0 pointer-events-none flex justify-center items-end opacity-40">
        <div className="h-[300px] w-[800px] rounded-full bg-[radial-gradient(ellipse_at_bottom,rgba(255,80,50,0.15)_0%,rgba(200,30,30,0.05)_40%,transparent_70%)] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-[800px] px-6 py-24 sm:px-8 sm:py-32 lg:px-10 flex flex-col items-center text-center">
        <h2 className="text-[32px] sm:text-[56px] lg:text-[72px] font-medium tracking-tight text-white leading-[1.05]">
          Build the <span className="text-half-work">Product.</span>
          <br />
          Not the Plumbing.
        </h2>
        
        <p className="mt-8 max-w-2xl text-[16px] sm:text-[18px] leading-relaxed text-[#8E8E93] font-normal">
          Start with the SaaS and RAG infrastructure already connected and focus your engineering effort on the product your customers will actually use.
        </p>

        <div className="mt-12">
          <HeroButtons 
            startBuildingLabel="Start Building" 
            explorePlatformLabel="Explore Platform" 
          />
        </div>
      </div>

      {/* Bottom Hatched Divider */}
      <div className="full-width-divider relative h-9 w-full border-t border-[#585858] bg-black">
        <PentagonCornerNode className="left-0 bottom-0" />
        <PentagonCornerNode className="left-full bottom-0" />
        <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  );
};
