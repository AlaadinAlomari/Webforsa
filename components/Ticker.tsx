import { TICKER_ITEMS } from '@/lib/constants';

export default function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];

  return (
    <div
      aria-hidden="true"
      className="relative z-[1] overflow-hidden border-y border-border bg-surface py-[1.15rem]"
    >
      <div className="flex animate-tick whitespace-nowrap">
        {items.map((item, i) => (
          <span key={i} className="flex flex-shrink-0 items-center">
            <span className="px-10 font-display text-[0.95rem] italic tracking-[0.05em] text-muted">
              {item}
            </span>
            <span className="self-center text-base text-gold">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
