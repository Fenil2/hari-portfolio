import { pillarItems } from "./data";
import { SectionHeader, Wrap } from "./ui";

export function CapabilitiesSection() {
  return (
    <section
      id="pillars"
      className="scroll-mt-28 border-b border-[var(--line)] py-20"
    >
      <Wrap>
        <SectionHeader
          title="Capabilities"
          note="What's actually on the plate day to day."
        />

        <div className="grid items-stretch gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2 xl:grid-cols-5">
          {pillarItems.map((item, index) => {
            const dark = index % 2 === 0;

            return (
              <article
                key={item.title}
                className={`h-full px-[22px] py-7 ${
                  dark
                    ? "bg-[var(--ink)] text-[var(--paper)]"
                    : "bg-[var(--yellow)] text-[var(--ink)]"
                }`}
              >
                <span
                  className={`mb-3.5 block w-fit border-b-2 pb-0.5 font-mono text-[12px] uppercase tracking-[0.06em] ${
                    dark
                      ? "border-[var(--yellow)] text-[var(--yellow)]"
                      : "border-[var(--ink)] text-[var(--ink)]"
                  }`}
                >
                  {item.label}
                </span>
                <h4 className="mb-2.5 font-display text-[17px] leading-[1.15] font-extrabold uppercase">
                  {item.title}
                </h4>
                <p
                  className={`text-[12.5px] ${
                    dark
                      ? "text-[var(--on-ink-soft)]"
                      : "text-[var(--ink)] opacity-70"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}
