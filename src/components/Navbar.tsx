'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#overview', label: 'Overview' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#rag-pipeline', label: 'RAG Pipeline' },
  { href: '#saas-foundation', label: 'SaaS Foundation' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="relative w-full border-b border-[#585858] bg-black"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsMenuOpen(false);
      }}
    >
      <div className="flex min-h-20 w-full flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 lg:min-h-24 lg:flex-nowrap lg:px-10">
        <Link href="#overview" onClick={() => setIsMenuOpen(false)} className="flex items-center transition-opacity hover:opacity-90">
          <Image src="/brand/enragline-logo.png" alt="Enragline" width={140} height={28} priority className="h-6 w-auto select-none object-contain sm:h-[26px]" />
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex size-11 items-center justify-center rounded-lg border border-white/20 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:hidden"
        >
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 motion-reduce:transition-none ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>

        <nav id="main-navigation" aria-label="Main navigation" className={`${isMenuOpen ? 'flex' : 'hidden'} order-3 w-full flex-col gap-1 border-t border-white/10 pt-3 lg:order-none lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-5 lg:border-0 lg:pt-0`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="rounded-md px-3 py-3 text-sm text-white transition-colors hover:bg-white/5 focus-visible:outline-2 focus-visible:outline-white lg:px-0 lg:py-0 lg:text-[13px] lg:text-[#8F929C] lg:hover:bg-transparent lg:hover:text-white">
              {link.label}
            </Link>
          ))}
          <Link href="#overview" onClick={() => setIsMenuOpen(false)} className="mt-2 rounded-lg border border-white/20 px-3 py-3 text-sm text-white lg:hidden">Explore Enragline</Link>
        </nav>

        <Link href="#overview" className="hidden h-9 items-center justify-center rounded-lg border border-white/20 px-4 text-[13px] text-white transition-colors hover:border-white/40 hover:bg-white/5 lg:inline-flex">Explore Enragline</Link>
      </div>
    </header>
  );
};
