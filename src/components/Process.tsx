"use client";

import { workflow } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Process() {
  const { t } = useLanguage();

  const getProcessKey = (key: string) => {
    switch (key) {
      case 'brief': return 'Brief';
      case 'design': return 'Design';
      case 'build': return 'Build';
      case 'test': return 'Test';
      default: return key;
    }
  };

  return (
    <section id="process" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("processTitle")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {workflow.map((step, index) => (
          <div
            key={step.step}
            className="group rounded-3xl border border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 p-6 hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/20 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[var(--accent)] to-[var(--accent-light)] text-white font-bold mb-4 group-hover:shadow-lg group-hover:shadow-[var(--accent)]/40 transition-all duration-300 text-sm">
              {index + 1}
            </div>
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-2 group-hover:text-[var(--accent)] transition-colors duration-300">
              {t(`process${getProcessKey(step.key)}Step`)}
            </h3>
            <p className="text-base leading-relaxed text-stone-500 dark:text-stone-400">
              {t(`process${getProcessKey(step.key)}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
