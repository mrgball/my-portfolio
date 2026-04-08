"use client";

import { testimonials } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("testimonialsTitle")}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, idx) => (
          <div
            key={t.name}
            className="group rounded-3xl p-6 border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 flex flex-col justify-between hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-105 transition-all duration-300 animate-fade-up"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <p className="font-serif text-lg italic leading-relaxed text-stone-700 dark:text-stone-300 mb-5 relative z-10">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex items-center gap-3 relative z-10">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${t.avatarColor} ring-2 ring-[var(--accent)]/30 group-hover:ring-[var(--accent)] transition-all duration-300`}
              >
                {t.initials}
              </div>
              <div>
                <div className="text-sm font-semibold text-stone-800 dark:text-stone-200 group-hover:text-[var(--accent)] transition-colors duration-300">
                  {t.name}
                </div>
                <div className="text-[12px] text-stone-400 dark:text-stone-500">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
