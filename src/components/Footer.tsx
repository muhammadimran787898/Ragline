import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="relative w-full overflow-hidden bg-black">
      {/* Background Gradient Image */}
      <div className="absolute inset-0 z-0 select-none">
        {/* Mask to fade gradient to black at the top */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black via-black/60 to-transparent h-[50%] " />
        <Image
          src="/brand/footer-glow.png"
          alt="Footer Gradient"
          fill
          priority
          className="object-cover object-bottom"
          unoptimized
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-[1024px] px-8 pt-32 pb-16 sm:px-12 sm:pt-48 sm:pb-24">
        {/* Top Section: Links and Socials */}
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          {/* Links Columns */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-12 sm:grid-cols-3 sm:gap-x-24">
            {/* Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[17px] font-medium tracking-tight text-white">Product</h3>
              <ul className="flex flex-col gap-3">
                {['Features', 'RAG Pipeline', 'How It Works', 'Pricing', 'Roadmap'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-[#A1A1AA] transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Developers */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[17px] font-medium tracking-tight text-white">Developers</h3>
              <ul className="flex flex-col gap-3">
                {['Documentation', 'Getting Started', 'Architecture', 'Deployment'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-[#A1A1AA] transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4">
              <h3 className="text-[17px] font-medium tracking-tight text-white">Legal</h3>
              <ul className="flex flex-col gap-3">
                {['Privacy Policy', 'Terms of Use', 'License', 'Agreement'].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-[14px] text-[#A1A1AA] transition-colors hover:text-white">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-end justify-start lg:justify-end">
            <div className="flex items-center gap-4 text-[#A1A1AA]">
              {/* Facebook */}
              <Link href="#" className="transition-colors hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" />
                </svg>
              </Link>
              {/* X / Twitter */}
              <Link href="#" className="transition-colors hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25H21.5L14.4 10.354L22.75 21.75H16.213L11.088 15.042L5.225 21.75H1.969L9.544 13.082L1.5 2.25H8.206L12.831 8.369L18.244 2.25ZM17.1 19.742H18.9L6.75 4.158H4.819L17.1 19.742Z" />
                </svg>
              </Link>
              {/* Instagram */}
              <Link href="#" className="transition-colors hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C14.717 2 15.056 2.01 16.122 2.06C17.187 2.11 17.912 2.277 18.55 2.525C19.21 2.779 19.766 3.123 20.322 3.678C20.877 4.234 21.221 4.79 21.475 5.45C21.723 6.088 21.89 6.813 21.94 7.878C21.988 8.944 22 9.283 22 12C22 14.717 21.99 15.056 21.94 16.122C21.89 17.187 21.723 17.912 21.475 18.55C21.221 19.21 20.877 19.766 20.322 20.322C19.766 20.877 19.21 21.221 18.55 21.475C17.912 21.723 17.187 21.89 16.122 21.94C15.056 21.988 14.717 22 12 22C9.283 22 8.944 21.99 7.878 21.94C6.813 21.89 6.088 21.723 5.45 21.475C4.79 21.221 4.234 20.877 3.678 20.322C3.123 19.766 2.779 19.21 2.525 18.55C2.277 17.912 2.11 17.187 2.06 16.122C2.01 15.056 2 14.717 2 12C2 9.283 2.01 8.944 2.06 7.878C2.11 6.813 2.277 6.088 2.525 5.45C2.779 4.79 3.123 4.234 3.678 3.678C4.234 3.123 4.79 2.779 5.45 2.525C6.088 2.277 6.813 2.11 7.878 2.06C8.944 2.01 9.283 2 12 2ZM12 4.16C9.336 4.16 9 4.17 7.973 4.217C7.022 4.26 6.382 4.414 5.922 4.593C5.313 4.83 4.878 5.127 4.422 5.582C3.966 6.038 3.669 6.474 3.433 7.082C3.253 7.542 3.1 8.182 3.057 9.133C3.01 10.16 3 10.496 3 13.16C3 15.824 3.01 16.16 3.057 17.187C3.1 18.138 3.253 18.778 3.433 19.238C3.67 19.847 3.967 20.282 4.422 20.738C4.878 21.194 5.314 21.491 5.922 21.727C6.382 21.907 7.022 22.06 7.973 22.103C9 22.15 9.336 22.16 12 22.16C14.664 22.16 15 22.15 16.027 22.103C16.978 22.06 17.618 21.907 18.078 21.727C18.687 21.49 19.122 21.193 19.578 20.738C20.034 20.282 20.331 19.846 20.567 19.238C20.747 18.778 20.9 18.138 20.943 17.187C20.99 16.16 21 15.824 21 13.16C21 10.496 20.99 10.16 20.943 9.133C20.9 8.182 20.747 7.542 20.567 7.082C20.33 6.473 20.033 6.038 19.578 5.582C19.122 5.126 18.686 4.829 18.078 4.593C17.618 4.413 16.978 4.26 16.027 4.217C15 4.17 14.664 4.16 12 4.16ZM12 6.865C9.163 6.865 6.865 9.163 6.865 12C6.865 14.837 9.163 17.135 12 17.135C14.837 17.135 17.135 14.837 17.135 12C17.135 9.163 14.837 6.865 12 6.865ZM12 14.975C10.357 14.975 9.025 13.643 9.025 12C9.025 10.357 10.357 9.025 12 9.025C13.643 9.025 14.975 10.357 14.975 12C14.975 13.643 13.643 14.975 12 14.975ZM16.538 6.024C16.538 6.82 15.894 7.464 15.098 7.464C14.302 7.464 13.658 6.82 13.658 6.024C13.658 5.228 14.302 4.584 15.098 4.584C15.894 4.584 16.538 5.228 16.538 6.024Z" />
                </svg>
              </Link>
              {/* LinkedIn */}
              <Link href="#" className="transition-colors hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4.98 3.5C4.98 4.881 3.87 6 2.5 6C1.13 6 0 4.881 0 3.5C0 2.12 1.13 1 2.5 1C3.87 1 4.98 2.12 4.98 3.5ZM5 22H0V7H5V22ZM24 22H19V14.161C19 12.189 18.258 11.082 16.711 11.082C15.229 11.082 14.385 12.139 14.385 14.161V22H9.385C9.385 22 9.452 8.35 9.385 7H14.385V9.459L14.417 9.459C15.119 8.243 16.425 7.414 18.163 7.414C21.364 7.414 24 9.403 24 14.42V22Z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-[#FFFFFF] opacity-10" />

        {/* Bottom Section: Logo and Copyright */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-2">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 0C16 8.83656 23.1634 16 32 16C23.1634 16 16 23.1634 16 32C16 23.1634 8.83656 16 0 16C8.83656 16 16 8.83656 16 0Z" fill="white"/>
            </svg>
            <span className="text-xl font-medium tracking-tight text-white">Enragline</span>
          </div>
          <p className="text-[14px] text-white">
            © 2026 Enragline. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
