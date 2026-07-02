"use client";

import { useState } from "react";
import { Dot, Wrap } from "./ui";

const links = [
  { href: "#work", label: "Experience" },
  { href: "#pillars", label: "Capabilities" },
  { href: "#approach", label: "Approach" },
  { href: "#courses", label: "Courses" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[rgba(255,255,255,0.92)] backdrop-blur-[10px]">
      <Wrap>
        <nav className="flex h-[72px] items-center justify-between">
          <a
            href="#top"
            className="flex items-center font-display text-[20px] leading-none font-extrabold tracking-[0.01em] no-underline"
          >
            HARIVIGNESH S
          </a>

          <div
            className={`fixed left-0 right-0 top-[72px] flex-col items-start gap-[18px] border-b border-[var(--line)] bg-[var(--paper)] px-5 py-5 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 ${
              isOpen ? "flex" : "hidden md:flex"
            }`}
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center font-mono text-[12px] uppercase tracking-[0.06em] text-[var(--ink-soft)] transition-colors duration-150 hover:text-[var(--ink)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-[14px]">
            <div className="hidden whitespace-nowrap rounded-full border border-[var(--yellow)] bg-[var(--yellow)] px-3 py-1.5 font-mono text-[11px] leading-none uppercase tracking-[0.06em] text-[var(--ink)] sm:flex sm:items-center sm:gap-2">
              <Dot />
              Currently at Grow Medico
            </div>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
              className="flex cursor-pointer items-center justify-center p-2 md:hidden"
            >
              <span className="block h-[2px] w-[22px] bg-[var(--ink)]" />
              <span className="mx-0 my-[5px] block h-[2px] w-[22px] bg-[var(--ink)]" />
              <span className="block h-[2px] w-[22px] bg-[var(--ink)]" />
            </button>
          </div>
        </nav>
      </Wrap>
    </header>
  );
}
