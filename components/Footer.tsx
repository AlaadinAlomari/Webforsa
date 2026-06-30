import { FOOTER, WHATSAPP } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="relative z-[1] border-t border-border px-[5vw] py-8 sm:py-9">
      <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="font-display text-[1.1rem] uppercase tracking-[0.18em] text-muted">
          Web<em className="italic text-gold">forsa</em>
        </div>
        <p className="order-3 text-[0.65rem] tracking-[0.06em] text-muted sm:order-none sm:text-[0.7rem]">
          {FOOTER.copyright}
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 sm:flex-nowrap sm:justify-end">
          <a
            href={WHATSAPP.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]"
          >
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="h-3 w-3 flex-shrink-0 fill-gold"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.2h.01c5.46 0 9.91-4.45 9.91-9.91A9.86 9.86 0 0 0 12.04 2Zm5.79 14.17c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.61-.6-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.6-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.25.09 1.58.75 1.85.88.27.14.45.2.51.32.07.12.07.66-.17 1.34Z" />
            </svg>
            WhatsApp Support
          </a>
          <a href="/#del" className="text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]">Services</a>
          <a href="/#price" className="text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]">Pricing</a>
          <a href="/#faq" className="text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]">FAQ</a>
          <a href="/privacy" className="text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]">Privacy</a>
          <a href="/terms" className="text-[0.65rem] uppercase tracking-[0.12em] text-muted transition-colors duration-200 hover:text-ivory sm:text-[0.7rem]">Terms</a>
        </div>
      </div>
    </footer>
  );
}
