import { FOOTER, SITE } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-[1] flex flex-wrap items-center justify-between gap-4 border-t border-border px-[5vw] py-9">
      <div className="font-display text-[1.1rem] uppercase tracking-[0.18em] text-muted">
        Web<em className="italic text-gold">forsa</em>
      </div>
      <p className="text-[0.7rem] tracking-[0.06em] text-muted">{FOOTER.copyright}</p>
      <div className="flex gap-8">
        <a
          href={`mailto:${SITE.email}`}
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          {SITE.email}
        </a>
        <a
          href="/#del"
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          Services
        </a>
        <a
          href="/#price"
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          Pricing
        </a>
        <a
          href="/#faq"
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          FAQ
        </a>
        <a
          href="/privacy"
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          Privacy
        </a>
        <a
          href="/terms"
          className="text-[0.7rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory"
        >
          Terms
        </a>
      </div>
    </footer>
  );
}
