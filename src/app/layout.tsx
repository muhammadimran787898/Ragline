import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import '@/styles/global.css';

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/ppneuemontreal-book.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ppneuemontreal-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ppneuemontreal-bold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ppneuemontreal-bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/ppneuemontreal-semibolditalic.woff',
      weight: '600',
      style: 'italic',
    },
  ],
  variable: '--font-neue-montreal',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Enragline - AI/RAG SaaS Starter Kit & Production Foundation',
  description: 'Production-ready AI/RAG SaaS foundation with multi-tenant architecture and developer-first DX.',
  icons: [
    {
      rel: 'apple-touch-icon',
      url: '/apple-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      url: '/icon.png',
    },
    {
      rel: 'icon',
      url: '/favicon.ico',
    },
  ],
};

export const viewport: Viewport = {
  themeColor: '#000000',
};

export default function RootLayout(props: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={neueMontreal.variable}>
      <body className={`${neueMontreal.className} bg-black text-white antialiased`}>
        {props.children}
      </body>
    </html>
  );
}

