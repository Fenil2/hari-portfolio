import { tickerItems } from "./data";

export function TickerBand() {
  const doubled = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden whitespace-nowrap border-b border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]">
      <div className="inline-flex animate-[scroll-left_32s_linear_infinite]">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-2.5 border-r border-r-[rgba(252,252,250,0.18)] px-7 py-2.5 font-mono text-[12px] uppercase tracking-[0.05em]"
          >
            {index % tickerItems.length === 0 ? (
              <em className="not-italic text-[var(--yellow)]">{item}</em>
            ) : (
              item
            )}
          </span>
        ))}
      </div>
    </div>
  );
}
