import Image from 'next/image';
import Link from 'next/link';
import { PentagonCornerNode } from '@/components/PentagonCornerNode';

export const Navbar = () => (
  <header className="relative w-full border-b border-[#585858] bg-black">


      <div className="flex h-24 w-full items-center justify-between p-10 sm:p-8">
        <Link href="/" className="flex items-center transition-opacity hover:opacity-90">
          <Image
            src="/brand/enragline-logo.png"
            alt="Enragline"
            width={140}
            height={28}
            priority
            className="h-6 sm:h-[26px] w-auto object-contain select-none"
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:gap-8 md:flex">
          <Link
            href="#overview"
            className="text-[13px] font-medium text-white transition-colors hover:text-white"
          >
            Overview
          </Link>
          <Link
            href="#benefits"
            className="text-[13px] font-normal text-[#8F929C] transition-colors hover:text-white"
          >
            Benefits
          </Link>
          <Link
            href="#rag-pipeline"
            className="text-[13px] font-normal text-[#8F929C] transition-colors hover:text-white"
          >
            RAG Pipeline
          </Link>
          <Link
            href="#saas-foundation"
            className="text-[13px] font-normal text-[#8F929C] transition-colors hover:text-white"
          >
            SaaS Foundation
          </Link>
          <Link
            href="#how-it-works"
            className="text-[13px] font-normal text-[#8F929C] transition-colors hover:text-white"
          >
            How It Works
          </Link>
          <Link
            href="#faq"
            className="text-[13px] font-normal text-[#8F929C] transition-colors hover:text-white"
          >
            FAQ
          </Link>
        </nav>

        <div className="flex items-center">
          <Link
            href="#overview"
            className="inline-flex h-9 items-center justify-center rounded-lg border border-white/20 bg-transparent px-4 text-xs sm:text-[13px] font-normal text-white transition-all hover:border-white/40 hover:bg-white/5 active:scale-[0.98]"
          >
            Explore Enragline
          </Link>
        </div>
      </div>
    </header>
);

