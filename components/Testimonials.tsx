'use client';

import { TESTIMONIALS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import SectionRule from './SectionRule';

const CARD_DELAYS = [0, 0.1, 0.22];

function TestimonialCard({
  stars,
  body,
  name,
  co,
  delay,
  isLast,
}: {
  stars: string;
  body: string;
  name: string;
  co: string;
  delay: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`r border-b border-border p-11 transition-colors duration-300 last:border-b-0 hover:bg-surface md:border-b-0 md:border-r ${
        isLast ? 'md:border-r-0' : ''
      } ${isVisible ? 'v' : ''}`}
    >
      <div className="mb-6 font-display text-[0.85rem] tracking-[0.15em] text-gold">{stars}</div>
      <p className="mb-8 font-display text-[1.1rem] font-light italic leading-[1.7] text-ivory">
        {body}
      </p>
      <div className="text-[0.75rem] uppercase tracking-[0.12em] text-gold">{name}</div>
      <div className="mt-1 text-[0.7rem] tracking-[0.05em] text-muted">{co}</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="social" className="relative z-[1] bg-black px-[5vw] py-32">
      <SectionRule num="IV" label="Client words" />
      <div className="mt-16 grid grid-cols-1 border border-border md:grid-cols-3">
        {TESTIMONIALS.map((t, i) => (
          <TestimonialCard
            key={t.name}
            stars={t.stars}
            body={t.body}
            name={t.name}
            co={t.co}
            delay={CARD_DELAYS[i]}
            isLast={i === TESTIMONIALS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
