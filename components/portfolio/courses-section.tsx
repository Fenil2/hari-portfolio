import { courses, languages } from "./data";
import { SectionHeader, Wrap } from "./ui";

export function CoursesSection() {
  return (
    <section
      id="courses"
      className="scroll-mt-28 border-b border-[var(--line)] py-20"
    >
      <Wrap>
        <SectionHeader
          title="Courses & Languages"
          note="Training completed alongside the work."
        />

        <div className="grid items-start gap-10 md:grid-cols-[1.4fr_1fr] md:gap-16">
          <ul className="list-none border border-[var(--line)]">
            {courses.map((course, index) => (
              <li
                key={course}
                className={`flex items-center gap-3.5 px-[18px] py-4 ${
                  index % 2 === 0
                    ? "bg-[var(--yellow-tint)]"
                    : "bg-[var(--ink-tint)]"
                }`}
              >
                <span className="w-7 shrink-0 font-mono text-[12px] leading-none uppercase tracking-[0.06em] text-[var(--ink-soft)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0 flex-1 text-[15px] leading-[1.4]">
                  {course}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap content-start gap-2.5">
            {languages.map((language, index) => (
              <span
                key={language}
                className={`inline-flex items-center border px-4 py-2 font-mono text-[12px] leading-none uppercase tracking-[0.05em] ${
                  index % 2 === 0
                    ? "border-[var(--ink)] bg-[var(--ink)] text-[var(--paper)]"
                    : "border-[var(--yellow)] bg-[var(--yellow)] text-[var(--ink)]"
                }`}
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </Wrap>
    </section>
  );
}
