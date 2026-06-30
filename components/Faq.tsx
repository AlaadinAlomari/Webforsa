'use client';

import { FAQ_ITEMS, WHATSAPP } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

function FaqLeft() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`r ${isVisible ? 'v' : ''}`}>
      <h2
        className="font-display font-light leading-[1.15] text-ivory"
        style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)' }}
      >
        Common
        <br />
        <em className="italic text-gold">questions,</em>
        <br />
        plain answers.
      </h2>
      <p className="mt-6 text-[0.85rem] leading-[1.85] text-body">
        Anything not covered — message us on{' '}
        <a
          href={WHATSAPP.url}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-gold/35 text-gold no-underline"
        >
          WhatsApp
        </a>
        . A person will reply within 24 hours.
      </p>
    </div>
  );
}

function FaqAccordion() {
  const { ref, isVisible } = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} style={{ transitionDelay: '0.1s' }} className={`r ${isVisible ? 'v' : ''}`}>
      {FAQ_ITEMS.map((item, i) => (
        <details
          key={item.question}
          className={`group border-b border-border ${i === 0 ? 'border-t' : ''}`}
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 font-display text-[1.1rem] font-normal text-ivory transition-colors duration-200 hover:text-gold-lt">
            {item.question}
            <span className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center border border-border text-[0.85rem] text-gold transition-transform duration-300 group-open:rotate-45 group-open:border-gold/40">
              +
            </span>
          </summary>
          <p className="pb-6 text-[0.86rem] leading-[1.85] text-body">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="relative z-[1] border-t border-border bg-surface px-[5vw] py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.8fr] lg:gap-32">
        <FaqLeft />
        <FaqAccordion />
      </div>
    </section>
  );
}
