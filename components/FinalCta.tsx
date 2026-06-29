'use client';

import { FormEvent, useState } from 'react';
import { FINAL_CTA, SITE } from '@/lib/constants';
import { useReveal } from '@/hooks/useReveal';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function FinalCta() {
  const eye = useReveal<HTMLDivElement>();
  const heading = useReveal<HTMLHeadingElement>();
  const sub = useReveal<HTMLParagraphElement>();
  const cta = useReveal<HTMLAnchorElement>();
  const form = useReveal<HTMLFormElement>();

  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      message: formData.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('success');
      e.currentTarget.reset();
    } catch (err) {
      setStatus('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

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
      <a
        ref={cta.ref}
        href={`mailto:${SITE.email}`}
        style={{ transitionDelay: '0.22s' }}
        className={`r inline-block bg-gold px-[2.4rem] py-[0.95rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.28em] ${cta.isVisible ? 'v' : ''}`}
      >
        {FINAL_CTA.cta}
      </a>

      <form
        ref={form.ref}
        onSubmit={handleSubmit}
        className={`r mx-auto mt-24 max-w-[480px] text-left ${form.isVisible ? 'v' : ''}`}
      >
        <div className="mb-5">
          <label htmlFor="name" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="email" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold"
          />
        </div>
        <div className="mb-5">
          <label htmlFor="company" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Company / Website
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold"
          />
        </div>
        <div className="mb-7">
          <label htmlFor="message" className="mb-2 block text-[0.7rem] uppercase tracking-[0.16em] text-muted">
            Tell us about your project
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            className="w-full border border-border bg-surface px-4 py-3 text-sm text-ivory outline-none transition-colors focus:border-gold"
          />
        </div>
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="block w-full bg-gold py-[1.1rem] text-center text-[0.72rem] font-medium uppercase tracking-[0.2em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.3em] disabled:opacity-60"
        >
          {status === 'submitting' ? 'Sending…' : 'Send message'}
        </button>
        {status === 'success' && (
          <p className="mt-4 text-center text-[0.8rem] text-gold">
            Thanks — we&apos;ll be in touch within 24 hours.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-[0.8rem] text-red-400">{errorMessage}</p>
        )}
      </form>
    </section>
  );
}
