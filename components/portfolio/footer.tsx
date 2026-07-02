import { Wrap } from "./ui";

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] py-6">
      <Wrap>
        <div className="grid gap-2.5 text-center font-mono text-[10.5px] uppercase tracking-[0.05em] text-[var(--on-ink-soft)] md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
          <span className="text-center md:text-left">
            © 2026 Harivignesh S
          </span>
          <span className="text-center">
            Social Media Marketing Manager - Grow Medico
          </span>
          <a
            href="#top"
            className="justify-self-center border-b border-transparent text-center text-[var(--on-ink-soft)] no-underline transition-colors duration-150 hover:border-[var(--yellow)] hover:text-[var(--yellow)] md:justify-self-end md:text-right"
          >
            Back to top ↑
          </a>
        </div>
      </Wrap>
    </footer>
  );
}
