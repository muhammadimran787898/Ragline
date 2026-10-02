import type { Metadata } from 'next';
import Image from 'next/image';
import { ArchitectureFlow } from '@/components/ArchitectureFlow';
import { AiMattersSection } from '@/components/AiMattersSection';
import { AiFeatureWorkflow } from '@/components/AiFeatureWorkflow';
import { DashboardPreview } from '@/components/DashboardPreview';
import { FeaturePip } from '@/components/FeaturePip';
import { FoundationAlreadyBuilt } from '@/components/FoundationAlreadyBuilt';
import { FoundationStepsSection } from '@/components/FoundationStepsSection';
import { HeroMotion } from '@/components/HeroMotion';
import { HeroButtons } from '@/components/HeroButtons';
import { Navbar } from '@/components/Navbar';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';
import { SecurityFoundationSection } from '@/components/SecurityFoundationSection';
import { Pricing } from '@/components/Pricing';
import { Faq } from '@/components/Faq';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Enragline - AI/RAG SaaS Starter Kit & Production Foundation',
  description: 'Production foundation for building and scaling AI and RAG SaaS applications.',
};

export default function IndexPage() {
  return (
    <div className="marketing-page overflow-x-clip">
      <Navbar />
      {/* Centered content with full-width architectural backgrounds */}
      <div className="relative mx-auto max-w-[1024px] bg-black">


        {/* 1. Top Architectural Hatched Divider Band (Below Navbar) */}
        <div className="full-width-divider relative h-9 w-full border-b border-[#585858] bg-black">
          <PentagonCornerNode className="left-0 top-0" />
          <PentagonCornerNode className="left-full top-0" />
         
          <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
        </div>

        {/* 2. Hero Overview Section */}
        <section id="overview" className="hero-overview relative isolate py-16 sm:py-20 lg:py-24">
          <HeroMotion />
          <div className="hero-content relative z-10 mx-auto grid max-w-[1600px] grid-cols-1 items-center gap-10 px-6 text-left sm:px-8 lg:grid-cols-[1.25fr_1fr] lg:w-[80%] lg:gap-16 lg:px-0">
            {/* Left Column: Badge + Main Headline */}
            <div>
              {/* Category Pill Badge with Brand Icon */}
              <div className="mb-6 inline-flex h-7 items-center overflow-hidden rounded-md border border-[#26262B] bg-[#101013] text-[11px] font-medium tracking-wider text-neutral-300 shadow-sm">
                <div className="flex size-7 items-center justify-center border-r border-[#26262B] bg-[#16161B]">
                  <Image
                    src="/brand/enragline-icon.jpg"
                    alt="Enragline Icon"
                    width={16}
                    height={16}
                    className="size-4 rounded-sm object-contain select-none"
                  />
                </div>
                <span className="px-3 font-mono text-[10.5px] font-medium tracking-[0.14em] uppercase text-[#9A9BA2]">
                  AI/RAG SAAS STARTER KIT
                </span>
              </div>

              {/* Main Hero Headline */}
              <h1 className="text-[32px] sm:text-[40px] lg:text-[38px] xl:text-[48px] font-medium tracking-[-0.025em] text-white leading-[1.15]">
                Build Your AI SaaS.
                <br />
                <span className="font-medium">
                  <span className="text-white">Skip the </span>
                  <span className="text-foundation-work font-medium">
                    Foundation
                  </span>
                  <span className="text-foundation-work"> Work</span>
                </span>
              </h1>
            </div>

            {/* Right Column: Description + Buttons */}
            <div className="flex max-w-xl flex-col items-start lg:justify-self-end">
              <p className="mb-7 text-[16px] sm:text-[18px] text-[#8E8E93] leading-[1.6] font-normal">
                Enragline gives developers and software teams a production-focused foundation for building AI-powered SaaS products.
              </p>

              <HeroButtons
                startBuildingLabel="Start Building"
                explorePlatformLabel="Explore Platform"
              />
            </div>
          </div>
        </section>


        {/* 3. Dashboard Preview Showcase */}
        <div id="dashboard-preview" className="relative w-full overflow-hidden pt-8 sm:pt-10">
          {/* Background Glows strictly behind the Dashboard Card */}
          <div className="dashboard-backdrop-glow" />

          {/* Dashboard Card Container */}
          <div className="relative z-10 px-4 sm:px-8 lg:px-10">
            <DashboardPreview />
          </div>
        </div>

        {/* 4. Upper Architectural Hatched Divider Band (Above 4-Feature Strip) */}
        <div className="full-width-divider relative h-7 w-full border-t border-b border-[#585858] bg-black">
          
          
          <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
        </div>

        {/* 5. 4 Feature Items Strip */}
        <div id="platform-features" className="relative border-b border-[#585858] bg-black">
          <div className="grid w-full grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 divide-x-0 md:divide-x divide-dotted divide-[#585858]">
            <div className="flex h-14 items-center justify-center gap-2 px-4 text-center">
              <FeaturePip />
              <span
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
                className="select-none text-sm sm:text-lg font-normal tracking-[-0.01em] text-white"
              >
                Multi-Tenant
              </span>
            </div>

            <div className="flex h-14 items-center justify-center gap-2 px-4 text-center">
              <FeaturePip />
              <span
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
                className="select-none text-sm sm:text-lg font-normal tracking-[-0.01em] text-white"
              >
                Provider Flexible
              </span>
            </div>

            <div className="flex h-14 items-center justify-center gap-2 px-4 text-center">
              <FeaturePip />
              <span
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
                className="select-none text-sm sm:text-lg font-normal tracking-[-0.01em] text-white"
              >
                Self-Hostable
              </span>
            </div>

            <div className="flex h-14 items-center justify-center gap-2 px-4 text-center">
              <FeaturePip />
              <span
                style={{ color: '#FFFFFF', WebkitTextFillColor: '#FFFFFF' }}
                className="select-none text-sm sm:text-lg font-normal tracking-[-0.01em] text-white"
              >
                Built for Developers
              </span>
            </div>
          </div>
        </div>

        {/* 6. Lower Architectural Hatched Divider Band (Below 4-Feature Strip) */}
        <div className="full-width-divider relative h-9 w-full border-b border-[#585858] bg-black">
          <PentagonCornerNode className="left-0 -bottom-4" />
          <PentagonCornerNode className="left-full -bottom-4" />
          <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
        </div>

        {/* 7. 3-Pillar Container with Thin Hexagon Corner Nodes */}
        <div id="benefits" className="relative border-b border-[#585858] bg-black">
          

          <ArchitectureFlow />
        </div>
        

        {/* 8. Building the AI Feature Is Only Half the Work Section */}
        <AiFeatureWorkflow />

        {/* 9. Start With the Foundation Already Built Section */}
        <FoundationAlreadyBuilt />

        {/* 10. RAG Pipeline Dashboard Showcase */}
        <section id="rag-pipeline" className="relative border-b border-[#585858] bg-black">
          {/* <div className="full-width-divider relative h-7 w-full border-b border-[#585858] bg-black">
            <PentagonCornerNode className="left-0 top-0" />
            <PentagonCornerNode className="left-full top-0" />
            <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
          </div> */}

          <div className="relative px-6 pt-20 pb-16 sm:px-8 sm:pt-24 sm:pb-20 lg:px-10">
            <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
              <h2 className="text-3xl font-medium leading-[1.15] tracking-[-0.025em] text-white sm:text-[35px] lg:text-[36px]">
                From Raw Data to
                <br />
                Grounded{' '}
                <span className="bg-[linear-gradient(90deg,#9C4A46_0%,#D06A53_48%,#F6B172_100%)] bg-clip-text text-transparent">
                  AI Answers.
                </span>
              </h2>

              <p className="max-w-md text-[13.5px] leading-[1.45] font-normal text-[#6F7075] sm:text-[14px] lg:justify-self-end">
                Turn your application&apos;s knowledge into relevant context and
                <br className="hidden sm:inline" />
                grounded AI responses through one integrated RAG pipeline.
              </p>
            </div>

            <div className="relative mt-20 sm:mt-24">
              <div className="rag-ambient-motion absolute -inset-x-4 -top-16 bottom-0 pointer-events-none">
                <div className="absolute left-0 top-8 h-[72%] w-[42%] rounded-full bg-[radial-gradient(ellipse_at_left,#248EFB_0%,rgba(14,55,170,0.72)_38%,transparent_72%)] blur-2xl" />
                <div className="absolute right-0 bottom-0 h-[78%] w-[42%] rounded-full bg-[radial-gradient(ellipse_at_right,#FEA327_0%,rgba(253,28,32,0.58)_36%,transparent_74%)] blur-2xl" />
                <div className="absolute inset-x-16 bottom-0 h-28 bg-[linear-gradient(90deg,rgba(36,142,251,0.22)_0%,rgba(111,36,251,0.16)_38%,rgba(253,28,32,0.18)_64%,rgba(254,163,39,0.34)_100%)] blur-3xl" />
              </div>

              <div className="rag-gradient-frame relative rounded-[31px] bg-[linear-gradient(135deg,#248EFB_0%,#0E37AA_24%,#18191D_42%,#16171A_58%,#FD1C20_78%,#FEA327_100%)] p-[10px] shadow-[0_30px_90px_rgba(0,0,0,0.95),0_0_44px_rgba(36,142,251,0.34),0_0_48px_rgba(254,163,39,0.28)]">
                <div className="overflow-hidden rounded-[23px] border border-white/10 bg-[#0a0a0c]">
                  <Image
                    src="/brand/dashboard-main.png"
                    alt="Integrated RAG pipeline dashboard"
                    width={1024}
                    height={620}
                    priority
                    unoptimized
                    className="block h-auto w-full object-contain select-none"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="full-width-divider relative h-7 w-full border-y border-[#585858] bg-black">
            <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
          </div>

          <div className="flex min-h-16 items-center justify-center border-b border-[#585858] px-6 py-4 text-center">
            <p className="text-base leading-relaxed font-normal tracking-[-0.01em] text-white sm:text-lg">
              <span className="mr-2 inline-block size-2.5 rounded-[2px] bg-[radial-gradient(circle,#FFFFFF_0%,#74FFFF_28%,#36C183_62%,#176637_100%)] align-middle shadow-[0_0_8px_1.5px_rgba(54,193,131,0.75),0_0_14px_3px_rgba(44,197,105,0.45)]" />
              Your data → ingestion → processing → embeddings → vector retrieval → contextual AI response.
            </p>
          </div>

          <div className="full-width-divider relative h-9 w-full bg-black">
            <PentagonCornerNode className="left-0 bottom-0" />
            <PentagonCornerNode className="left-full bottom-0" />
            <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
          </div>
        </section>

        {/* 11. Everything Around Your AI Matters Too Section */}
        <AiMattersSection />

        {/* 12. Foundation to AI SaaS Steps Section */}
        <FoundationStepsSection />

        {/* 13. Security Built Into the Foundation Section */}
        <SecurityFoundationSection />

        {/* 14. Plans & Pricing Section */}
        <Pricing />

        {/* 15. FAQ Section */}
        <Faq />

        {/* 16. Call To Action Section */}
        <CallToAction />
      </div>

      {/* 17. Footer */}
      <Footer />
    </div>
  );
}
