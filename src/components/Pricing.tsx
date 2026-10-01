import React from 'react';

export const Pricing = () => {
  return (
    <section id="pricing" className="relative w-full bg-black overflow-hidden border-t border-b border-[#585858]">
      {/* Header Area */}
      <div className="relative px-6 py-8 sm:px-8 sm:py-12 lg:px-10">
        <div className="mx-auto flex max-w-[1200px] flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="text-3xl sm:text-[40px] font-medium tracking-tight text-white">
            Plans & Pricing
          </h2>
          <p className="max-w-md text-[15px] leading-relaxed text-[#8E8E93]">
            Choose the right foundation for your product and start building with confidence.
          </p>
        </div>
      </div>

      {/* Pricing Cards Area */}
      <div className="mx-auto max-w-[1200px] border-t border-dashed border-[#585858]">
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y border-dashed border-[#585858] md:divide-x md:divide-y-0">
          
          {/* Professional Edition */}
          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-normal text-white tracking-[-0.01em]">
                Professional Edition
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="size-[5px] bg-[#00FF94] shadow-[0_0_8px_1.5px_rgba(0,255,148,0.5)] rounded-[1px]" />
                <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider font-medium">One-time Payment</span>
              </div>
            </div>
            
            <div className="mt-8">
              <span className="text-[56px] sm:text-[64px] font-medium tracking-tight text-white leading-none">
                $499
              </span>
            </div>
            
            <p className="mt-6 text-[15px] leading-relaxed text-white max-w-[280px]">
              A production-ready foundation for modern applications.
            </p>
            
            <div className="my-8 h-px w-full bg-[#333333]" />
            
            <ul className="flex flex-col gap-4">
              {[
                'Clean architecture and best practices',
                'Authentication, identity, roles and access control',
                'Data persistence, caching and background processing',
                'Notifications, automation and observability',
                'Customizable UI, localization and application settings',
                'Full source code, unlimited projects and deployments',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] size-1.5 shrink-0 bg-[#D9D9D9]" />
                  <span className="text-[13.5px] text-[#D4D4D8] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="my-8 h-px w-full bg-[#333333]" />
            
            <div className="flex-1" />
            
            <p className="text-[12px] leading-relaxed text-[#666666]">
              Also included: Lifetime source code license, ongoing technical support and 1-year maintenance.
            </p>
            
            <button className="mt-6 w-full rounded-md border border-[#333333] bg-[#0A0A0A] py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-[#1A1A1A]">
              Buy Professional
            </button>
          </div>

          {/* SaaS Edition */}
          <div className="flex flex-col p-8 sm:p-10 lg:p-12">
            <div className="flex items-center justify-between">
              <h3 className="text-xl sm:text-[22px] font-normal text-white tracking-[-0.01em]">
                SaaS Edition
              </h3>
              <div className="flex items-center gap-1.5">
                <span className="size-[5px] bg-[#00FF94] shadow-[0_0_8px_1.5px_rgba(0,255,148,0.5)] rounded-[1px]" />
                <span className="text-[11px] text-[#8E8E93] uppercase tracking-wider font-medium">One-time Payment</span>
              </div>
            </div>
            
            <div className="mt-8">
              <span className="text-[56px] sm:text-[64px] font-medium tracking-tight text-white leading-none">
                $999
              </span>
            </div>
            
            <p className="mt-6 text-[15px] leading-relaxed text-white max-w-[320px]">
              Everything in Professional, plus complete multi-tenant SaaS infrastructure.
            </p>
            
            <div className="my-8 h-px w-full bg-[#333333]" />
            
            <ul className="flex flex-col gap-4">
              {[
                'Multi-tenant architecture and tenant isolation',
                'Shared or dedicated database support',
                'Tenant administration and isolated environments',
                'Automated onboarding and provisioning',
                'Tenant-aware data access, reporting and notifications',
                'Subdomain routing and white-label support',
              ].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-[6px] size-1.5 shrink-0 bg-[#D9D9D9]" />
                  <span className="text-[13.5px] text-[#D4D4D8] leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="my-8 h-px w-full bg-[#333333]" />
            
            <div className="flex-1" />
            
            <p className="text-[12px] leading-relaxed text-[#666666]">
              Also included: Full source code, unlimited projects and deployments, technical support and 1-year maintenance.
            </p>
            
            <button className="mt-6 w-full rounded-md border border-[#333333] bg-[#0A0A0A] py-3.5 text-[14px] font-medium text-white transition-colors hover:bg-[#1A1A1A]">
              Buy SaaS
            </button>
          </div>

        </div>
      </div>
      
      {/* Bottom Hatched Divider */}
      <div className="relative h-9 w-full border-t border-[#585858] bg-black">
        <div className="size-full bg-[repeating-linear-gradient(45deg,#585858_0,#585858_1px,transparent_1px,transparent_8px)]" />
      </div>
    </section>
  );
};
