'use client';

import { EMAIL, FINAL_CTA, SITE, WHATSAPP } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import { useCheckout } from '@/hooks/useCheckout';

export default function FinalCta() {
  const eye = useReveal<HTMLDivElement>();
  const heading = useReveal<HTMLHeadingElement>();
  const sub = useReveal<HTMLParagraphElement>();
  const cta = useReveal<HTMLButtonElement>();
  const whatsapp = useReveal<HTMLDivElement>();
  const { startCheckout, isLoading } = useCheckout();

  return (
    <section
      id="end"
      className="relative z-[1] overflow-hidden border-t border-border bg-black px-[5vw] py-40 text-center"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none font-display font-light text-gold/[0.03]"
        style={{ fontSize: '28vw', letterSpacing: '-0.05em', lineHeight: 1 }}
      >
        {SITE.name}
      </div>

      <div
        ref={eye.ref}
        className={`r mb-8 text-[0.7rem] uppercase tracking-[0.22em] text-gold ${eye.isVisible ? 'v' : ''}`}
      >
        {FINAL_CTA.eyebrow}
      </div>
      <h2
        ref={heading.ref}
        className={`r mb-5 font-display font-light leading-[1.05] tracking-[-0.02em] text-ivory ${heading.isVisible ? 'v' : ''}`}
        style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
      >
        {FINAL_CTA.subHeadlinePrefix}
        <br />
        {FINAL_CTA.subHeadlineLive} <em className="italic text-gold">{FINAL_CTA.subHeadlineDays}</em>
      </h2>
      <p
        ref={sub.ref}
        style={{ transitionDelay: '0.1s' }}
        className={`r mb-14 text-[0.88rem] text-body ${sub.isVisible ? 'v' : ''}`}
      >
        {FINAL_CTA.sub}
      </p>
      <button
        ref={cta.ref}
        type="button"
        disabled={isLoading}
        onClick={startCheckout}
        style={{ transitionDelay: '0.22s' }}
        className={`r inline-block bg-gold px-[2.4rem] py-[0.95rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.28em] disabled:cursor-wait disabled:opacity-60 ${cta.isVisible ? 'v' : ''}`}
      >
        {isLoading ? 'Redirecting…' : FINAL_CTA.cta}
      </button>

      <div
        ref={whatsapp.ref}
        style={{ transitionDelay: '0.3s' }}
        className={`r mx-auto mt-16 max-w-[420px] ${whatsapp.isVisible ? 'v' : ''}`}
      >
        <p className="mb-5 text-[0.85rem] leading-[1.85] text-body">
          Prefer to chat directly? Message us on WhatsApp.
        </p>
        <a
          href={WHATSAPP.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-gold/35 px-[2rem] py-[0.85rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-gold transition-colors duration-300 hover:bg-gold hover:text-black"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-3.5 w-3.5 flex-shrink-0 fill-current">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2Zm5.79 14.17c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.61-.6-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.12.07.66-.17 1.34Z" />
          </svg>
          Message on WhatsApp
        </a>
        <p className="mt-6 text-[0.78rem] text-muted">
          Or email{' '}
          <a href={`mailto:${EMAIL.hello}`} className="border-b border-gold/35 text-gold no-underline">
            {EMAIL.hello}
          </a>
        </p>
      </div>
    </section>
  );
}
