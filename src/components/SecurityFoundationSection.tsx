import Image from 'next/image';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

const SECURITY_CARDS = [
  {
    title: 'Tenant isolation',
    description: 'Knowledge stays within your organization. Documents and search results are scoped to the correct workspace.',
    
     image: '/brand/security-data-protection.svg',
    imageClassName: 'w-[200px]',
  },
  {
    title: 'Controlled answers',
    description: 'Answers respect permissions. Users retrieve only content they are authorized to access.',
    image: '/brand/security-controlled-answers.svg',
    imageClassName: 'w-[142px]',
  },
  {
    title: 'Activity records',
    description: 'Track key actions, knowledge changes, and administrative access.',
    image: '/brand/security-activity-records.svg',
    imageClassName: 'w-[110px]',
  },
  {
    title: 'Data protection',
    description: 'Protected in transit and at rest. Customer content is encrypted during transfer and storage.',
    image: '/brand/security-tenant-isolation.svg',
    imageClassName: 'w-[140px]',
  },
  {
    title: 'Data lifecycle',
    description: 'Control your content. Define how uploaded documents are retained and deleted.',
    image: '/brand/security-data-lifecycle.svg',
    imageClassName: 'w-[110px]',
  },
] as const;

export const SecurityFoundationSection = () => (
  <section id="security" className="relative  border-b border-[#585858] bg-black">
    {/* <div className="full-width-divider relative h-7 w-full border-b border-[#585858] bg-black">
      <PentagonCornerNode className="left-0 top-0" />
      <PentagonCornerNode className="left-full top-0" />
      <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
    </div> */}

    <div className="grid grid-cols-1 items-start gap-8 px-6 pt-[82px] pb-[72px] sm:px-8 lg:grid-cols-2 lg:gap-10 lg:px-10">
      <h2 className="text-3xl font-medium leading-[1.16] tracking-[-0.025em] text-white sm:text-[35px] lg:text-[36px]">
        Security Built Into
        <br />
        the{' '}
        <span className="bg-[linear-gradient(90deg,#8D4E75_0%,#B45B58_37%,#E97842_73%,#F6C88C_100%)] bg-clip-text text-transparent">
          Foundation.
        </span>
      </h2>

      <p className="max-w-md text-[13.5px] leading-[1.45] font-normal text-[#6F7075] sm:text-[14px] lg:justify-self-end">
        Keep tenant data isolated, enforce access permissions, protect content, track important activity, and control how data is retained throughout its lifecycle.
      </p>
    </div>

    <div className="grid border-y border-dashed border-[#585858] md:grid-cols-3">
      <div className="flex min-h-[326px] flex-col border-b border-dashed border-[#585858] px-10 pt-[60px] pb-[43px] md:row-span-2 md:min-h-[652px] md:border-r md:px-11">
        <div className="flex ">
          <Image
            src={SECURITY_CARDS[0].image}
            alt=""
            width={250}
            height={192}
            unoptimized
            className={`${SECURITY_CARDS[0].imageClassName} h-auto select-none opacity-90`}
          />
        </div>
        <div className="mt-auto">
          <h3 className="text-[23px] font-normal leading-tight tracking-[-0.025em] text-white">
            {SECURITY_CARDS[0].title}
          </h3>
          <p className="mt-2.5 max-w-[255px] text-xs leading-[1.25] text-[#626368]">
            {SECURITY_CARDS[0].description}
          </p>
        </div>
      </div>

      {SECURITY_CARDS.slice(1).map((card) => (
        <div
          key={card.title}
          className="flex min-h-[326px] flex-col border-b border-dashed border-[#585858] px-10 pt-[47px] pb-[43px] md:border-r md:px-[43px] md:[&:nth-child(3)]:border-r-0 md:[&:nth-child(5)]:border-r-0"
        >
          <div className="flex h-[142px] items-start ">
            <Image
              src={card.image}
              alt=""
              width={190}
              height={145}
              unoptimized
              className={`${card.imageClassName} h-auto select-none opacity-[0.82]`}
            />
          </div>
          <div className="mt-auto">
            <h3 className="text-[23px] font-normal leading-tight tracking-[-0.025em] text-white">
              {card.title}
            </h3>
            <p className="mt-2.5 max-w-[245px] text-xs leading-[1.25] text-[#626368]">
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>

    <div className="relative h-[72px] w-full bg-black" />

    <div className="full-width-divider relative h-9 w-full border-t border-[#585858] bg-black">
      <PentagonCornerNode className="left-0 bottom-0" />
      <PentagonCornerNode className="left-full bottom-0" />
      <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
    </div>
  </section>
);
