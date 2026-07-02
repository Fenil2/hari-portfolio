import { rhythmItems } from "./data";
import { SectionHeader, Wrap } from "./ui";

export function ApproachSection() {
  return (
    <section
      id="approach"
      className="scroll-mt-28 border-b border-[var(--line)] py-20"
    >
      <Wrap>
        <SectionHeader
          title="How I Work"
          note="The loop behind every client, solo end to end."
        />

        <div className="flex flex-col border border-[var(--ink)] md:flex-row">
          {rhythmItems.map((item, index) => (
            <article
              key={item.step}
              className={`flex-1 border-b border-[var(--ink)] px-[22px] py-[26px] md:border-b-0 md:border-r ${
                index === rhythmItems.length - 1 ? "md:border-r-0" : ""
              } ${
                item.isLive
                  ? "bg-[var(--ink)] text-[var(--paper)]"
                  : "bg-[var(--yellow)] text-[var(--ink)]"
              }`}
            >
              <span
                className={`mb-[22px] block font-mono text-[10.5px] uppercase tracking-[0.07em] ${
                  item.isLive
                    ? "text-[var(--yellow)]"
                    : "text-[var(--ink)] opacity-65"
                }`}
              >
                {item.step}
              </span>
              <h4 className="mb-2 font-display text-[21px] font-extrabold uppercase">
                {item.title}
              </h4>
              <p
                className={`text-[12.5px] ${
                  item.isLive
                    ? "text-[var(--on-ink-soft)]"
                    : "text-[var(--ink)] opacity-70"
                }`}
              >
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </Wrap>
    </section>
  );
}
