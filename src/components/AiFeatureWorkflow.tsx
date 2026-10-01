import Image from 'next/image';
import { FeaturePip } from '@/components/FeaturePip';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

const ROW_ONE_FEATURES = [
  'Multi-tenancy',
  'Document processing',
  'Vector search',
  'Tenant isolation',
  'Subscriptions',
] as const;

const ROW_TWO_FEATURES = [
  'Knowledge ingestion',
  'Embeddings',
  'Retrieval',
  'AI usage',
  'Deployment',
] as const;

export const AiFeatureWorkflow = () => {
  return (
    <section id="ai-workflow" className="relative w-full bg-black">
      {/* Top Section: First Headline & Sub-description */}
      <div className="px-6 pt-16 pb-6 sm:px-8 sm:pt-20 sm:pb-8 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl sm:text-[35px] lg:text-[36px] font-medium tracking-[-0.025em] text-white leading-[1.15]">
              Building the AI Feature Is
              <br />
              <span>
                <span className="text-white font-medium">Only </span>
                <span className="text-half-work font-medium">Half the Work.</span>
              </span>
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-[13.5px] sm:text-[14px] text-[#8E8E93] leading-[1.6] font-normal">
              Connecting an application to an LLM is easy. Building a
              <br className="hidden sm:inline" />
              production-ready AI SaaS around it isn&apos;t.
            </p>
          </div>
        </div>
      </div>

      {/* Center Architecture Workflow Diagram */}
      <div className="relative my-8 px-4 sm:my-12 sm:px-8 lg:my-16 lg:px-10">
        <Image
          src="/brand/ai-feature-workflow.png"
          alt="AI Application Architecture Flow"
          width={1016}
          height={300}
          priority
          unoptimized
          className="mx-auto block h-auto w-full max-w-[820px] object-contain select-none"
        />
      </div>

      {/* Bottom Section: Second Headline & Sub-description */}
      <div className="px-6 pt-6 pb-12 sm:px-8 sm:pt-8 sm:pb-16 lg:px-10">
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-2 lg:gap-8">
          <div>
            <h3 className="text-3xl sm:text-[35px] lg:text-[36px] font-medium tracking-[-0.025em] text-white leading-[1.15]">
              AI Is One Piece
              <br />
              <span className="text-white">of the Product.</span>
            </h3>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-[13.5px] sm:text-[14px] text-[#8E8E93] leading-[1.6] font-normal">
              Building and connecting these systems individually can
              <br className="hidden sm:inline" />
              consume months before your team reaches the features
              <br className="hidden sm:inline" />
              customers actually care about.
            </p>
          </div>
        </div>
      </div>

      {/* 10-Feature Strip (2 Rows of 5 Columns) */}
      <div className="relative border-y border-[#585858] bg-black">
        {/* Row 1 */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border-b border-dotted border-[#585858] divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-dotted divide-[#585858]">
          {ROW_ONE_FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex h-11 sm:h-12 items-center justify-center gap-2 px-2.5 sm:px-3 text-center min-w-0"
            >
              <FeaturePip variant="red" />
              <span
                style={{ color: '#FFFFFF' }}
                className="select-none text-[11px] sm:text-[13px] font-normal tracking-[-0.01em] text-white "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-dotted divide-[#585858]">
          {ROW_TWO_FEATURES.map((feature) => (
            <div
              key={feature}
              className="flex h-11 sm:h-12 items-center justify-center gap-2 px-2.5 sm:px-3 text-center min-w-0"
            >
              <FeaturePip variant="red" />
              <span
                style={{ color: '#FFFFFF' }}
                className="select-none text-[11px] sm:text-[13px] font-normal tracking-[-0.01em] text-white "
              >
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Lower Architectural Hatched Divider Band with Corner Nodes */}
      <div className="relative h-9 w-full border-b border-[#585858] bg-black">
        <PentagonCornerNode className="left-0 -bottom-4" />
        <PentagonCornerNode className="left-full -bottom-4" />
        <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  );
};
