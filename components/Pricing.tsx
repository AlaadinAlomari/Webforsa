'use client';

import { PRICING } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import { useCheckout } from '@/hooks/useCheckout';
import SectionRule from './SectionRule';

export default function Pricing() {
  const left = useReveal<HTMLDivElement>();
  const right = useReveal<HTMLDivElement>();
  const { startCheckout, isLoading } = useCheckout();
  const notesLines = PRICING.notes.split('\n');

  return (
    <section id="price" className="relative z-[1] border-t border-border bg-surface px-[5vw] py-32">
      <SectionRule num="III" label="Investment" />
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-28">
        <div ref={left.ref} className={`r ${left.isVisible ? 'v' : ''}`}>
          <h2
            className="mb-7 font-display font-light leading-[1.1] text-ivory"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            One page.
            <br />
            <em className="italic text-gold">One price.</em>
            <br />
            No surprises.
          </h2>
          {PRICING.intro.map((p, i) => (
            <p key={i} className="mb-4 text-[0.87rem] leading-[1.9] text-body">
              {p}
            </p>
          ))}
          <div className="mt-10 border-t border-border pt-8 text-[0.74rem] leading-[2.1] tracking-[0.03em] text-muted">
            {notesLines.map((line, i) => (
              <span key={i}>
                {line}
                {i < notesLines.length - 1 && <br />}
              </span>
            ))}
          </div>
        </div>

        <div ref={right.ref} style={{ transitionDelay: '0.22s' }} className={`r ${right.isVisible ? 'v' : ''}`}>
          <div className="relative overflow-hidden border border-gold/20 bg-lift p-12 before:absolute before:left-0 before:right-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold before:to-transparent">
            <div
              className="mb-2 font-display font-light text-ivory"
              style={{ fontSize: 'clamp(4rem, 9vw, 7rem)', lineHeight: 0.9, letterSpacing: '-0.04em' }}
            >
              <sup className="align-super text-[0.35em] tracking-normal text-gold">$</sup>
              {PRICING.price}
            </div>
            <div className="mb-10 text-[0.7rem] uppercase tracking-[0.16em] text-muted">
              {PRICING.sub}
            </div>
            {PRICING.rows.map((row, i) => (
              <div
                key={row.label}
                className={`flex items-center justify-between border-b border-border py-[0.9rem] text-[0.84rem] ${
                  i === 0 ? 'border-t' : ''
                }`}
              >
                <span className="text-ivory">{row.label}</span>
                <span className="text-[0.68rem] uppercase tracking-[0.1em] text-gold">
                  {row.status}
                </span>
              </div>
            ))}
            <button
              type="button"
              disabled={isLoading}
              onClick={startCheckout}
              className="mt-10 block w-full bg-gold py-[1.1rem] text-center text-[0.72rem] font-medium uppercase tracking-[0.2em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.3em] disabled:cursor-wait disabled:opacity-60"
            >
              {isLoading ? 'Redirecting…' : PRICING.cta}
            </button>
            <p className="mt-5 text-center text-[0.72rem] tracking-[0.05em] text-muted">
              {PRICING.guarantee}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
