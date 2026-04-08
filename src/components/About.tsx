"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("aboutTitle")}
      </p>

      <div className="gap-10 items-start">
        <p className="text-lg leading-[1.85] text-stone-500 dark:text-stone-400">
          {t("aboutText")}
        </p>

        {/* Stats */}
        {/* <div className="flex flex-wrap gap-x-10 gap-y-6">
          {siteConfig.stats.map((s) => (
            <div key={s.label}>
              <div className="font-serif text-4xl font-bold text-stone-900 dark:text-stone-100">
                {s.value}
              </div>
              <div className="text-sm text-stone-400 dark:text-stone-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
