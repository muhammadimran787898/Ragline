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

const MORE_LINKS = [
  { href: '#dashboard-preview', label: 'Dashboard preview' },
  { href: '#platform-features', label: 'Platform features' },
  { href: '#ai-workflow', label: 'AI workflow' },
  { href: '#ai-platform', label: 'AI platform' },
  { href: '#security', label: 'Security' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#get-started', label: 'Get started' },
  { href: '#footer', label: 'Resources & footer' },
] as const;

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/15 bg-black/90 backdrop-blur-xl"
      onKeyDown={(event) => {
        if (event.key === 'Escape') setIsMenuOpen(false);
      }}
    >
      <div className="mx-auto flex min-h-20 w-full max-w-[1600px] flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-8 xl:min-h-24 xl:flex-nowrap xl:w-[80%] xl:px-0">
        <Link href="#overview" onClick={() => setIsMenuOpen(false)} className="flex items-center transition-opacity hover:opacity-90">
          <span className="nav-brand relative block">
            <Image src="/brand/navbar-logo.svg" alt="Enragline" width={540} height={110} priority unoptimized className="h-6 w-auto select-none object-contain sm:h-[30px]" />
          </span>
        </Link>

        <button
          type="button"
          aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="relative flex size-11 items-center justify-center rounded-lg border border-white/20 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white xl:hidden"
        >
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-opacity duration-200 motion-reduce:transition-none ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
          <span aria-hidden="true" className={`absolute h-0.5 w-5 bg-current transition-transform duration-200 motion-reduce:transition-none ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
        </button>

        <nav id="main-navigation" aria-label="Main navigation" className={`${isMenuOpen ? 'flex' : 'hidden'} order-3 w-full max-h-[calc(100dvh-100px)] overflow-y-auto flex-col gap-1 border-t border-white/10 pt-3 xl:order-none xl:flex xl:w-auto xl:flex-row xl:items-center xl:gap-5 xl:overflow-visible xl:border-0 xl:pt-0`}>
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="nav-link rounded-md px-3 py-3 text-sm focus-visible:outline-2 focus-visible:outline-white xl:px-0 xl:py-2 xl:text-[16px] xl:font-medium">
              {link.label}
            </Link>
          ))}
          {MORE_LINKS.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsMenuOpen(false)} className="nav-link rounded-md px-3 py-3 text-sm focus-visible:outline-2 focus-visible:outline-white xl:hidden">
              {link.label}
            </Link>
          ))}
          <details className="nav-more relative hidden xl:block" onKeyDown={(event) => {
            if (event.key === 'Escape') event.currentTarget.open = false;
          }}>
            <summary className="nav-link flex cursor-pointer list-none items-center gap-2 rounded-md py-2 text-[16px] font-medium focus-visible:outline-2 focus-visible:outline-white">More<svg aria-hidden="true" viewBox="0 0 12 12" className="nav-more-arrow size-3" fill="none"><path d="m3 4.5 3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg></summary>
            <div className="nav-more-panel absolute right-0 top-full mt-3 grid w-56 gap-1 rounded-xl border border-white/15 bg-[#101013] p-2 shadow-xl">
              {MORE_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="nav-link rounded-md px-3 py-2.5 text-sm focus-visible:outline-2 focus-visible:outline-white" onClick={(event) => {
                  const menu = event.currentTarget.closest('details');
                  if (menu) menu.open = false;
                }}>{link.label}</Link>
              ))}
            </div>
          </details>
          <Link href="#overview" onClick={() => setIsMenuOpen(false)} className="nav-explore mt-2 px-3 py-3 text-sm text-white xl:hidden">Explore Enragline</Link>
        </nav>

        <Link href="#overview" className="nav-explore hidden h-11 items-center justify-center px-5 text-[15px] text-white xl:inline-flex">Explore Enragline</Link>
      </div>
    </header>
  );
};
