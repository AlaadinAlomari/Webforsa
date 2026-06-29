'use client';

import { QUOTE } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

export default function QuoteDivider() {
  const text = useReveal<HTMLParagraphElement>();
  const attr = useReveal<HTMLParagraphElement>();

  return (
    <div className="relative z-[1] border-y border-border bg-surface px-[5vw] py-24 text-center">
      <span className="mb-8 block font-display text-[5rem] leading-[0.4] text-gold opacity-20">
        &quot;
      </span>
      <p
        ref={text.ref}
        className={`r mx-auto max-w-[780px] font-display font-light italic text-ivory ${text.isVisible ? 'v' : ''}`}
        style={{ fontSize: 'clamp(1.4rem, 3vw, 2.4rem)', lineHeight: 1.48 }}
      >
        {QUOTE.text}
      </p>
      <p
        ref={attr.ref}
        style={{ transitionDelay: '0.22s' }}
        className={`r mt-8 text-[0.7rem] uppercase tracking-[0.18em] text-gold ${attr.isVisible ? 'v' : ''}`}
      >
        {QUOTE.attribution}
      </p>
    </div>
  );
}
