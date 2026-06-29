'use client';

import { useReveal } from '@/hooks/useReveal';

type SectionRuleProps = {
  num: string;
  label: string;
};

export default function SectionRule({ num, label }: SectionRuleProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>();

  return (
    <div
      ref={ref}
      className={`r flex items-center gap-[1.2rem] mb-20 ${isVisible ? 'v' : ''}`}
    >
      <span className="font-display text-[0.78rem] text-gold tracking-[0.1em]">{num}</span>
      <div className="flex-1 h-px bg-border" />
      <span className="text-[0.68rem] tracking-[0.2em] uppercase text-muted">{label}</span>
    </div>
  );
}
