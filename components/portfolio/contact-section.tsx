import { Dot, Wrap } from "./ui";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="border-b-0 bg-[var(--ink)] py-[76px] pt-24 text-[var(--paper)]"
    >
      <Wrap>
        <p className="mb-[18px] flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--on-ink-soft)]">
          <Dot lime />
          Currently at Grow Medico
        </p>

        <h2 className="font-display text-[clamp(36px,8vw,92px)] leading-[0.95] font-black uppercase tracking-[-0.01em]">
          Let&apos;s{" "}
          <a
            href="mailto:harivignesh072001@gmail.com"
            className="border-b-[6px] border-[var(--yellow)] text-[var(--paper)] no-underline"
          >
            talk.
          </a>
        </h2>

        <div className="mt-9 flex flex-wrap items-start justify-between gap-6">
          <p className="max-w-[380px] text-[16.5px] text-[var(--on-ink-soft)]">
            Healthcare branding, personal branding, or content production -
            reach out directly.
          </p>

          <div className="flex flex-col gap-2 pt-0.5 md:items-end">
            <a
              href="mailto:harivignesh072001@gmail.com"
              className="border-b border-transparent font-mono text-[13px] leading-[1.4] tracking-[0.03em] text-[var(--paper)] no-underline transition-colors duration-150 hover:border-[var(--yellow)] hover:text-[var(--yellow)]"
            >
              harivignesh072001@gmail.com
            </a>
            <a
              href="tel:+919943697608"
              className="border-b border-transparent font-mono text-[13px] leading-[1.4] tracking-[0.03em] text-[var(--paper)] no-underline transition-colors duration-150 hover:border-[var(--yellow)] hover:text-[var(--yellow)]"
            >
              +91 99436 97608
            </a>
          </div>
        </div>
      </Wrap>
    </section>
  );
}
