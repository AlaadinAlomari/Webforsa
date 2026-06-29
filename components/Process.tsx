'use client';

import { PROCESS_STEPS } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';
import SectionRule from './SectionRule';

const COL_DELAYS = [0, 0.1, 0.22, 0.34];

function ProcessCol({
  n,
  title,
  description,
  delay,
  isLast,
}: {
  n: string;
  title: string;
  description: string;
  delay: number;
  isLast: boolean;
}) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={`r border-b border-border py-7 md:border-b-0 md:border-r md:py-10 md:pr-8 ${
        isLast ? 'md:border-r-0 md:pr-0' : ''
      } first:md:pl-0 md:pl-8 ${isVisible ? 'v' : ''}`}
    >
      <div className="mb-6 font-display text-[3.5rem] font-light leading-none text-gold/[0.14]">
        {n}
      </div>
      <div className="mb-3 font-display text-[1.3rem] font-light text-ivory">{title}</div>
      <p className="text-[0.82rem] leading-[1.8] text-body">{description}</p>
    </div>
  );
}

export default function Process() {
  return (
    <section id="proc" className="relative z-[1] bg-black px-[5vw] py-32">
      <SectionRule num="II" label="How it unfolds" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {PROCESS_STEPS.map((step, i) => (
          <ProcessCol
            key={step.n}
            n={step.n}
            title={step.title}
            description={step.description}
            delay={COL_DELAYS[i]}
            isLast={i === PROCESS_STEPS.length - 1}
          />
        ))}
      </div>
    </section>
  );
}
