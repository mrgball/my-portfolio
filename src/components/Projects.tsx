"use client";

import { projects } from "@/data/portfolio";
import Link from "next/link";
import { useLanguage } from "@/lib/language-context";

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("projectsTitle")}
      </p>
      <p className="text-base text-stone-500 dark:text-stone-400 max-w-2xl mb-8">
        {t("projectsSubtitle")}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, idx) => (
          <Link
            key={project.title}
            href={`/projects/${project.slug}`}
            className="group block rounded-3xl overflow-hidden border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 hover:border-[var(--accent)]/60 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:-translate-y-1 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="h-28 bg-gradient-to-r from-stone-100 via-accent-100 to-stone-100 dark:from-stone-900 dark:via-accent-900/40 dark:to-stone-900 group-hover:via-accent-200 dark:group-hover:via-accent-700/60 transition-colors duration-300" />
            <div className="p-5">
              {/* <div className="flex items-center justify-between gap-2 mb-3">
                <span className="text-[10px] uppercase tracking-[2px] text-stone-500 dark:text-stone-400 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {project.type}
                </span>
                <span className="text-[10px] uppercase tracking-[1px] text-[color:var(--accent)] font-semibold">
                  {project.highlight}
                </span>
              </div> */}

              <h3 className="text-lg font-bold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-[color:var(--accent)] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-base leading-relaxed text-stone-500 dark:text-stone-400 mb-4">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] px-2.5 py-0.5 rounded-full border border-stone-200 dark:border-stone-700 text-stone-400 dark:text-stone-500 group-hover:border-[var(--accent)]/40 group-hover:text-[var(--accent)] transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
