import { HERO, NAV } from '@/lib/constants';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative z-[1] flex min-h-screen flex-col justify-between bg-black px-[5vw] pb-[3.5rem] pt-12 before:absolute before:bottom-0 before:left-[5vw] before:right-[5vw] before:h-px before:bg-gradient-to-r before:from-transparent before:via-gold/30 before:to-transparent before:pointer-events-none"
    >
      <nav className="flex items-center justify-between border-b border-border pb-[2.8rem]">
        <div className="font-display text-[1.35rem] font-light uppercase tracking-[0.2em] text-ivory">
          Web<em className="text-gold italic">forsa</em>
        </div>
        <div className="text-[0.7rem] uppercase tracking-[0.16em] text-muted">{NAV.tag}</div>
      </nav>

      <div className="flex flex-1 flex-col justify-center py-[4vh]">
        <div
          className="mb-[2.2rem] text-[0.68rem] uppercase tracking-[0.24em] text-gold opacity-0"
          style={{ animation: 'up 0.8s 0.2s forwards' }}
        >
          {HERO.eyebrow}
        </div>
        <div
          className="font-display font-light text-ivory"
          style={{
            fontSize: 'clamp(6rem, 19vw, 17rem)',
            lineHeight: 0.82,
            letterSpacing: '-0.04em',
            clipPath: 'inset(0 100% 0 0)',
            animation: 'reveal 1.15s cubic-bezier(.77,0,.18,1) 0.1s forwards',
          }}
        >
          <sup className="align-super text-[0.22em] font-light tracking-normal text-gold">$</sup>
          {HERO.price}
        </div>
      </div>

      <div className="flex flex-wrap items-end justify-between gap-12 border-t border-border pt-[2.8rem]">
        <h1
          className="max-w-[560px] font-display italic font-light text-ivory opacity-0"
          style={{
            fontSize: 'clamp(1.6rem, 3.2vw, 2.8rem)',
            lineHeight: 1.18,
            animation: 'up 0.9s 0.8s forwards',
          }}
        >
          {HERO.headlineLines[0]}
          <br />
          {HERO.headlineLines[1]}
          <br />
          <b className="font-semibold not-italic text-gold-lt">{HERO.headlineBold}</b>
        </h1>
        <div
          className="flex flex-shrink-0 flex-col items-end gap-6 opacity-0"
          style={{ animation: 'up 0.9s 1s forwards' }}
        >
          <p className="max-w-[210px] text-right text-[0.84rem] leading-[1.85] text-body">
            {HERO.rightCopy[0]}
            <br />
            {HERO.rightCopy[1]}
            <br />
            {HERO.rightCopy[2]}
          </p>
          <a
            href="#price"
            className="inline-block bg-gold px-[2.4rem] py-[0.95rem] text-[0.72rem] font-medium uppercase tracking-[0.18em] text-black transition-[background,letter-spacing] duration-300 hover:bg-gold-lt hover:tracking-[0.28em]"
          >
            {HERO.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
