import type { Metadata } from 'next';
import Link from 'next/link';
import { WHATSAPP } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Payment Confirmed — Webforsa',
  description: 'Your payment was successful. Your 10-day build timeline starts now.',
  robots: { index: false, follow: false },
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black px-[5vw] py-28 text-center">
      <div className="mx-auto max-w-[560px]">
        <div className="mb-6 text-[0.7rem] uppercase tracking-[0.22em] text-gold">
          Payment Confirmed
        </div>
        <h1 className="mb-6 font-display font-light leading-[1.1] text-ivory" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)' }}>
          You&apos;re in. Your page
          <br />
          is <em className="italic text-gold">live in 10 days.</em>
        </h1>
        <p className="mb-10 text-[0.88rem] leading-[1.9] text-body">
          We&apos;ve received your payment and your build timeline starts today. Message us on
          WhatsApp with your project details so we can lock in your discovery call.
        </p>
        <div className="flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gold px-[2.4rem] py-[0.95rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.28em]"
          >
            Message us on WhatsApp
          </a>
          <Link
            href="/"
            className="text-[0.72rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-ivory"
          >
            Back to Webforsa
          </Link>
        </div>
      </div>
    </main>
  );
}
