"use client";

import { services } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Services() {
  const { t } = useLanguage();

  const getServiceKey = (key: string) => {
    switch (key) {
      case 'web': return 'Web';
      case 'mobile': return 'Mobile';
      case 'designToCode': return 'Design';
      case 'performance': return 'Perf';
      default: return key;
    }
  };

  return (
    <section id="services" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-5">
        {t("servicesTitle")}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, idx) => (
          <div
            key={service.title}
            className="group rounded-3xl border-2 border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/40 p-6 hover:border-[var(--accent)]/50 hover:shadow-lg hover:shadow-[var(--accent)]/20 hover:scale-105 transition-all duration-300 animate-scale-in"
            style={{ animationDelay: `${idx * 50}ms` }}
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[var(--accent)]/0 to-[var(--accent)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100 mb-3 group-hover:text-[var(--accent)] transition-colors duration-300 relative z-10">
              {t(`services${getServiceKey(service.key)}Title`)}
            </h3>
            <p className="text-base leading-relaxed text-stone-500 dark:text-stone-400 relative z-10">
              {t(`services${getServiceKey(service.key)}Desc`)}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
