import { ReactNode } from "react";

export function Wrap({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`mx-auto w-full max-w-[1180px] px-5 md:px-8 ${className}`}>
      {children}
    </div>
  );
}

export function Mono({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`font-mono text-[12px] uppercase tracking-[0.06em] ${className}`}
    >
      {children}
    </span>
  );
}

export function Dot({ lime = false }: { lime?: boolean }) {
  return (
    <span
      className={`inline-block size-2 shrink-0 rounded-full ${
        lime
          ? "border border-[var(--ink)] bg-[var(--yellow)] shadow-[0_0_0_3px_rgba(253,239,75,0.35)]"
          : "bg-[var(--ink)] shadow-[0_0_0_3px_rgba(43,50,63,0.12)]"
      }`}
    />
  );
}

export function SectionHeader({
  title,
  note,
}: {
  title: string;
  note: string;
}) {
  return (
    <div className="mb-11 flex flex-col gap-6 md:flex-row md:flex-wrap md:items-end md:justify-between">
      <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-none font-extrabold uppercase tracking-[-0.005em]">
        {title}
      </h2>
      <p className="max-w-[320px] font-mono text-[12px] leading-[1.5] uppercase tracking-[0.06em] text-[var(--ink-soft)] md:text-right">
        {note}
      </p>
    </div>
  );
}
