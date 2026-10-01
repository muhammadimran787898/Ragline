import Image from 'next/image';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

const FEATURE_ROWS = [
  ['Multi-Tenant SaaS', 'Tenant-Aware Knowledge', 'AI Usage & Monetization'],
  ['Provider Flexibility', 'Flexible Deployment', 'Administration & Control'],
] as const;

export const AiMattersSection = () => (
  <section className="relative overflow-hidden border-b border-[#585858] bg-black">
   

    <div className="relative min-h-[930px] px-6 pt-[86px] sm:px-8 lg:px-10">
      <div className="relative z-20 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <h2 className="text-3xl font-medium leading-[1.16] tracking-[-0.025em] text-white sm:text-[35px] lg:text-[36px]">
          Everything Around
          <br />
          Your{' '}
          <span className="bg-[linear-gradient(90deg,#8D4E75_0%,#B45B58_37%,#E97842_73%,#F6C88C_100%)] bg-clip-text text-transparent">
            AI Matters Too.
          </span>
        </h2>

        <div className="max-w-[430px] text-[13.5px] leading-[1.45] font-normal text-[#6F7075] sm:text-[14px] lg:justify-self-end">
          <p>
            A powerful RAG pipeline needs a production-ready application around it.
          </p>
          <p className="mt-5">
            Enragline combines AI/RAG infrastructure with the SaaS capabilities needed to turn that pipeline into a real product.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[220px] h-[640px] overflow-hidden">
        <div className="absolute left-1/2 top-[246px] z-[35] h-[218px] w-[570px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#AFFFFF_0%,rgba(125,247,255,0.6)_17%,rgba(36,142,251,0.52)_38%,rgba(14,55,170,0.28)_60%,transparent_78%)] blur-2xl mix-blend-screen" />
        <div className="absolute left-1/2 top-[104px] z-[30] h-[220px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,#FFFFFF_0%,rgba(255,255,255,0.38)_13%,rgba(254,163,39,0.24)_27%,rgba(111,36,251,0.18)_48%,rgba(36,142,251,0.13)_62%,transparent_76%)] blur-2xl mix-blend-screen" />
        <Image
          src="/brand/ai-matters-cone.svg"
          alt=""
          width={1246}
          height={654}
          unoptimized
          className="absolute left-1/2 top-[244px] z-0 h-auto w-[1060px] max-w-none -translate-x-1/2 select-none opacity-100"
        />
        <Image
          src="/brand/ai-matters-ambient.svg"
          alt=""
          width={953}
          height={903}
          unoptimized
          className="absolute left-1/2 top-[24px] z-10 h-auto w-[740px] max-w-none -translate-x-1/2 select-none opacity-95 mix-blend-screen"
        />
        <Image
          src="/brand/ai-matters-card-left.svg"
          alt=""
          width={456}
          height={305}
          unoptimized
          className="absolute left-[15%] top-[358px] z-20 h-auto w-[390px] select-none opacity-90"
        />
        <Image
          src="/brand/ai-matters-card-right.svg"
          alt=""
          width={578}
          height={387}
          unoptimized
          className="absolute right-[12%] top-[262px] z-20 h-auto w-[510px] select-none opacity-90"
        />
        <Image
          src="/brand/ai-matters-card-front.svg"
          alt=""
          width={363}
          height={243}
          unoptimized
          className="absolute left-[42%] top-[505px] z-20 h-auto w-[330px] select-none opacity-90"
        />
        <Image
          src="/brand/ai-matters-logo-tile.svg"
          alt="Enragline AI foundation tile"
          width={597}
          height={400}
          priority
          unoptimized
          className="absolute left-1/2 top-[52px] z-40 h-auto w-[590px] max-w-none -translate-x-1/2 select-none drop-shadow-[0_0_34px_rgba(255,255,255,0.26)]"
        />
      </div>
    </div>

    <div className="relative z-30 border-t border-dashed border-[#585858] bg-black">
      {FEATURE_ROWS.map((row) => (
        <div
          key={row.join('-')}
          className="grid grid-cols-1 border-b border-dashed border-[#585858] md:grid-cols-3 md:divide-x md:divide-dashed md:divide-[#585858]"
        >
          {row.map((feature) => (
            <div
              key={feature}
              className="flex h-[53px] items-center justify-center gap-2 px-4 text-center"
            >
              <span
                aria-hidden="true"
                className="size-2.5 shrink-0 rounded-[2px] bg-[radial-gradient(circle,#FFFFFF_0%,#74FFFF_28%,#36C183_62%,#176637_100%)] shadow-[0_0_8px_1.5px_rgba(54,193,131,0.75),0_0_14px_3px_rgba(44,197,105,0.45)]"
              />
              <span className="text-base font-normal tracking-[-0.01em] text-white sm:text-lg">
                {feature}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </section>
);
