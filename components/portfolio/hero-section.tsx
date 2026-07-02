import { Dot, Mono, Wrap } from "./ui";

export function HeroSection() {
  return (
    <section className="border-b border-[var(--line)] px-0 py-[88px] pb-16">
      <Wrap>
        <div className="grid items-start gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
          <div className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-2.5 text-[var(--ink-soft)]">
              <Dot />
              <Mono className="text-[var(--ink-soft)]">
                Social Media Marketing Manager / Strategist
              </Mono>
            </div>

            <h1 className="max-w-[15ch] font-display text-[clamp(38px,6vw,72px)] leading-[0.98] font-black uppercase tracking-[-0.01em]">
              Healthcare brands, run by{" "}
              <span className="bg-[linear-gradient(180deg,transparent_58%,var(--yellow)_58%)] px-0.5">
                one person.
              </span>
            </h1>

            <p className="mt-7 max-w-[460px] text-[16.5px] text-[var(--ink-soft)]">
              I independently manage end-to-end social media strategy and
              execution at Grow Medico - planning, content creation, execution,
              and growth for healthcare and Ayurveda clients across multiple
              states, supporting both office locations as the sole person
              responsible. I translate complex medical concepts into content
              that&apos;s engaging and compliant, and I run personal branding
              initiatives the same way: start to finish, on my own.
            </p>

            <div className="mt-8 flex flex-wrap gap-6 pt-1 md:gap-9">
              {[
                ["2", "Offices Supported Solo"],
                ["3", "Platforms - IG / FB / YT"],
                ["4", "Languages Spoken"],
              ].map(([value, label]) => (
                <div key={label} className="text-left">
                  <b className="mb-1.5 block font-display text-[34px] leading-none font-extrabold">
                    {value}
                  </b>
                  <span className="whitespace-nowrap font-mono text-[10px] uppercase tracking-[0.06em] text-[var(--ink-soft)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="order-first w-full md:order-none md:max-w-none">
            <div className="mx-auto flex max-w-[340px] md:max-w-none">
              <div className="relative flex aspect-[4/5] w-full flex-col items-center justify-center gap-[18px] overflow-hidden border border-[var(--ink)] bg-[var(--ink)] p-8">
                <div className="pointer-events-none absolute inset-[14px] border border-[rgba(253,239,75,0.35)]" />
                <span className="absolute left-[26px] top-[26px] inline-flex items-center gap-[7px] bg-[var(--yellow)] px-2.5 py-[5px] font-mono text-[10.5px] leading-none uppercase tracking-[0.07em] text-[var(--ink)]">
                  <Dot lime />
                  Live
                </span>
                <img
                  src="/harisk.png"
                  alt="Harivignesh S"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
