"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
      {/* Available badge */}
      <div className="flex items-center gap-2 text-xs text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/60 border border-accent-300 dark:border-accent-700/40 rounded-full px-3.5 py-1.5 w-fit mb-8 animate-fade-in">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] flex-shrink-0 animate-pulse" />
        {t("available")}
      </div>

      {/* Headline */}
      <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-6 animate-fade-up">
        {t("tagline")}{" "}
        <br className="hidden sm:block" />
        <em className="italic text-gradient font-serif" style={{ color: "var(--accent)" }}>
          {t("taglineAccent")}
        </em>{" "}
        {t("taglineEnd")}
      </h1>

      {/* Sub */}
      <p className="text-base sm:text-lg leading-relaxed text-stone-500 dark:text-stone-400 max-w-xl mb-10 animate-fade-up animate-delay-100">
        {t("description")}
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-200">
        <a
          href="#contact"
          className="px-6 py-3 rounded-full bg-[var(--accent)] text-stone-50 text-sm font-medium hover:shadow-lg hover:shadow-[var(--accent)]/40 hover:scale-105 transition-all duration-300"
        >
          {t("getInTouch")}
        </a>
        <a
          href="#projects"
          className="px-6 py-3 rounded-full border-2 border-accent-500 text-accent-600 dark:text-accent-400 dark:border-accent-500 text-sm font-medium hover:bg-accent-50 dark:hover:bg-accent-950/30 hover:scale-105 transition-all duration-300"
        >
          {t("projects")} →
        </a>
      </div>
    </section>
  );
}
