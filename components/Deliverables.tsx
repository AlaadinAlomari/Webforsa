'use client';

import { DELIVERABLES } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import SectionRule from './SectionRule';

const ROW_DELAYS = [0, 0.1, 0.22, 0.34, 0.46];

function DelHeading() {
  const { ref, isVisible } = useReveal<HTMLHeadingElement>();
  return (
    <h2
      ref={ref}
      className={`r font-display font-light leading-[1.1] text-ivory ${isVisible ? 'v' : ''}`}
      style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
    >
      Built to convert.
      <br />
      <em className="italic text-gold">Designed</em> to be
      <br />
      impossible to forget.
    </h2>
  );
}

function DelIntro() {
  const { ref, isVisible } = useReveal<HTMLParagraphElement>();
  return (
    <p
      ref={ref}
      style={{ transitionDelay: '0.22s' }}
      className={`r text-[0.88rem] leading-[1.85] text-body ${isVisible ? 'v' : ''}`}
    >
      A landing page has one job: turn the right visitor into a paying client. Every decision —
      layout, copy, speed, structure — is made with that single goal in mind.
    </p>
  );
}

function DelRow({
  title,
  description,
  badge,
  delay,
}: {
  title: string;
  description: string;
  badge: string;
  delay: number;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`r group grid grid-cols-1 gap-3 border-t border-border py-[1.8rem] transition-colors duration-300 last:border-b hover:border-t-gold/35 md:grid-cols-[230px_1fr_190px] md:items-center md:gap-8 ${isVisible ? 'v' : ''}`}
    >
      <div className="font-display text-[1.45rem] font-light text-ivory transition-colors duration-200 group-hover:text-gold-lt">
        {title}
      </div>
      <div className="text-[0.82rem] leading-[1.72] text-body">{description}</div>
      <div className="justify-self-start border border-gold/[0.22] px-[0.8rem] py-[0.4rem] text-right text-[0.64rem] uppercase tracking-[0.15em] text-gold md:justify-self-end">
        {badge}
      </div>
    </div>
  );
}

export default function Deliverables() {
  return (
    <section id="del" className="relative z-[1] bg-black px-[5vw] py-32">
      <SectionRule num="I" label="What we deliver" />
      <div className="mb-20 grid grid-cols-1 items-end gap-16 md:grid-cols-[1.2fr_1fr]">
        <DelHeading />
        <DelIntro />
      </div>
      <div>
        {DELIVERABLES.map((d, i) => (
          <DelRow
            key={d.title}
            title={d.title}
            description={d.description}
            badge={d.badge}
            delay={ROW_DELAYS[i]}
          />
        ))}
      </div>
    </section>
  );
}
