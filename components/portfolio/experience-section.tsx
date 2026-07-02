import { workItems } from "./data";
import { SectionHeader, Wrap } from "./ui";

export function ExperienceSection() {
  return (
    <section id="work" className="scroll-mt-28 border-b border-[var(--line)] py-20">
      <Wrap>
        <SectionHeader
          title="Experience"
          note="From film sets to healthcare feeds to a fitness title-holder's brand."
        />

        <div className="grid gap-px border border-[var(--line)] bg-[var(--line)] md:grid-cols-2">
          {workItems.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={item.company}
                className={`flex flex-col gap-[18px] p-[34px] transition-shadow duration-200 hover:shadow-[inset_0_0_0_2px_var(--ink)] ${
                  isEven ? "bg-[var(--ink-tint)]" : "bg-[var(--yellow-tint)]"
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span
                    className={`inline-flex whitespace-nowrap items-center gap-[7px] border px-2.5 py-[5px] font-mono text-[10.5px] leading-none uppercase tracking-[0.07em] ${
                      item.status === "Live"
                        ? "border-[var(--yellow)] bg-[var(--yellow)] text-[var(--ink)]"
                        : "border-[var(--ink-soft)] bg-[var(--ink-tint)] text-[var(--ink)]"
                    }`}
                  >
                    {item.status === "Live" ? "● Live" : "Archived"}
                  </span>
                  <span className="text-right font-mono text-[10.5px] leading-[1.6] uppercase tracking-[0.05em] text-[var(--ink-soft)]">
                    {item.platform}
                    {item.period ? (
                      <>
                        <br />
                        {item.period}
                      </>
                    ) : null}
                  </span>
                </div>

                <h3 className="font-display text-[27px] leading-[1.05] font-extrabold uppercase">
                  {item.company}
                </h3>
                <p className="-mt-3 font-mono text-[11px] uppercase tracking-[0.05em] text-[var(--ink-soft)]">
                  {item.role}
                </p>
                <p className="max-w-[46ch] text-[14.5px] text-[var(--ink-soft)]">
                  {item.description}
                </p>

                <div className="mt-auto flex flex-col gap-1.5 border-t border-dashed border-[var(--line)] pt-3.5">
                  <b className="font-display text-[18px] leading-[1.3] font-extrabold text-[var(--ink)]">
                    {item.result}
                  </b>
                  <span className="font-mono text-[10.5px] uppercase tracking-[0.05em] text-[var(--ink-soft)]">
                    {item.resultLabel}
                  </span>
                </div>
              </article>
            );
          })}
        </div>
      </Wrap>
    </section>
  );
}
