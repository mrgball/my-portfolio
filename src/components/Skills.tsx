"use client";

import { skills } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("skillsTitle")}
      </p>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span
            key={skill}
            className="text-sm px-4 py-1.5 rounded-full border-2 border-stone-200 dark:border-stone-700 bg-stone-100 dark:bg-stone-800/50 text-stone-700 dark:text-stone-300 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-accent-50 dark:hover:bg-accent-950/30 hover:shadow-md hover:shadow-[var(--accent)]/20 transition-all duration-300 animate-slide-in-left"
            style={{ animationDelay: `${idx * 30}ms` }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}
