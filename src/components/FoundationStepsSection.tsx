import Image from 'next/image';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

const STEP_LABELS = [
  'Foundation ready',
  'Providers connected',
  'Product active',
] as const;

export const FoundationStepsSection = () => (
  <section id="how-it-works" className="relative  border-b border-[#585858] bg-black">
    <div className="full-width-divider relative h-7 w-full border-b border-[#585858] bg-black">
      <PentagonCornerNode className="left-0 top-0" />
      <PentagonCornerNode className="left-full top-0" />
      <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
    </div>

    <div className="relative px-6 pt-[78px] pb-[78px] sm:px-8 lg:px-10">
      <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-2 lg:gap-10">
        <h2 className="text-3xl font-medium leading-[1.16] tracking-[-0.025em] text-white sm:text-[35px] lg:text-[36px]">
          From Foundation to AI
          <br />
          SaaS in{' '}
          <span className="bg-[linear-gradient(90deg,#9C4A46_0%,#D06A53_48%,#F6B172_100%)] bg-clip-text text-transparent">
            Three Steps
          </span>
        </h2>

        <p className="max-w-md text-[13.5px] leading-[1.45] font-normal text-[#6F7075] sm:text-[14px] lg:justify-self-end">
          Start with Enragline, connect your knowledge and AI infrastructure, then build the experience your customers need.
        </p>
      </div>

      <div className="mt-[78px]">
        <div className="mx-auto grid max-w-[630px] grid-cols-3 text-center text-xs font-normal sm:text-[13px]">
          {STEP_LABELS.map((label) => (
            <span
              key={label}
              className={label === 'Providers connected' ? 'text-white' : 'text-[#56575B]'}
            >
              {label}
            </span>
          ))}
        </div>

        <Image
          src="/brand/foundation-steps-ruler.svg"
          alt=""
          width={1096}
          height={20}
          unoptimized
          className="mt-4 h-5 w-full select-none object-fill"
        />
      </div>

      <div className="relative mt-12 sm:mt-[96px] lg:min-h-[420px]">
        <div className="pointer-events-none absolute inset-x-[-120px] top-0 hidden lg:flex items-center justify-between">
          <div className="relative h-[330px] w-[270px] overflow-hidden opacity-60">
            <div
              className="absolute left-[-118px] top-0 w-[340px] rounded-[2px] bg-[linear-gradient(135deg,rgba(111,36,251,0.52),rgba(254,163,39,0.32))] p-[7px] shadow-[0_18px_60px_rgba(0,0,0,0.8)]"
              style={{ transform: 'perspective(760px) rotateY(58deg) rotateZ(1deg)' }}
            >
              <Image
                src="/brand/crm-table.png"
                alt=""
                width={508}
                height={583}
                unoptimized
                className="block h-auto w-full select-none"
              />
            </div>
          </div>

          <div className="relative h-[330px] w-[270px] overflow-hidden opacity-60">
            <div
              className="absolute right-[-118px] top-0 w-[340px] rounded-[2px] bg-[linear-gradient(135deg,rgba(111,36,251,0.45),rgba(254,163,39,0.34))] p-[7px] shadow-[0_18px_60px_rgba(0,0,0,0.8)]"
              style={{ transform: 'perspective(760px) rotateY(-58deg) rotateZ(-1deg)' }}
            >
              <Image
                src="/brand/crm-table.png"
                alt=""
                width={508}
                height={583}
                unoptimized
                className="block h-auto w-full select-none"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_390px_1fr] lg:gap-8">
          <h3 className="text-3xl font-normal leading-[1.14] tracking-[-0.025em] text-white sm:text-[33px] lg:text-[34px]">
            Connect
            <br />
            Your Data & AI
          </h3>

          <div className="relative mx-auto w-full max-w-[390px] bg-[linear-gradient(135deg,#B69DFF_0%,#FD1C20_43%,#F6C88C_100%)] p-[7px] shadow-[0_26px_90px_rgba(0,0,0,0.85)]">
            <Image
              src="/brand/crm-table.png"
              alt="Sales CRM companies table"
              width={508}
              height={583}
              priority
              unoptimized
              className="block h-auto w-full select-none"
            />
          </div>

          <p className="max-w-[260px] text-[17px] leading-[1.18] font-normal tracking-[-0.01em] text-[#5E5F64] lg:justify-self-end">
            Add your knowledge sources and configure your preferred AI, embedding, vector storage, and supporting providers.
          </p>
        </div>
      </div>
    </div>

    <div className="full-width-divider relative h-9 w-full border-t border-[#585858] bg-black">
      <PentagonCornerNode className="left-0 bottom-0" />
      <PentagonCornerNode className="left-full bottom-0" />
      <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
    </div>
  </section>
);
