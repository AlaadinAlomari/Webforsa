import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans } from 'next/font/google';
import Cursor from '@/components/Cursor';
import Grain from '@/components/Grain';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Webforsa — Landing Pages That Convert',
  description:
    'A custom landing page for $1,997, delivered in 10 business days. Strategy, copy, design, and build — one flat price.',
  metadataBase: new URL('https://webforsa.com'),
  openGraph: {
    title: 'Webforsa — Landing Pages That Convert',
    description: 'Custom landing page. $1,997 flat. 10 days.',
    url: 'https://webforsa.com',
    siteName: 'Webforsa',
    images: [{ url: '/og.png', width: 1200, height: 630 }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Webforsa — Landing Pages That Convert',
    description: 'Custom landing page. $1,997 flat. 10 days.',
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`}>
      <body className="bg-black font-sans font-light text-ivory overflow-x-hidden">
        <Cursor />
        <Grain />
        {children}
      </body>
    </html>
  );
}
