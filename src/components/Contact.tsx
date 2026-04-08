"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-14 border-t border-stone-200 dark:border-stone-800">
      <div className="rounded-3xl border-2 border-stone-200 dark:border-stone-800 bg-gradient-to-br from-stone-100 to-accent-50 dark:from-stone-900/40 dark:to-accent-950/20 px-6 py-14 text-center hover:border-[var(--accent)]/50 transition-all duration-300 shadow-lg shadow-[var(--accent)]/10">
        <p className="text-[11px] tracking-[2px] uppercase text-stone-400 dark:text-stone-500 mb-4">
          {t("contactTitle")}
        </p>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight mb-3 text-stone-900 dark:text-stone-100 animate-fade-up">
          {t("contactHeading")}
        </h2>
        <p className="text-[15px] text-stone-500 dark:text-stone-400 max-w-sm mx-auto mb-8 leading-relaxed animate-fade-up animate-delay-100">
          {t("contactDescription")}
        </p>

        <a
          href={`mailto:${siteConfig.contact.email}`}
          className="inline-block px-8 py-3.5 rounded-full bg-[var(--accent)] text-stone-50 text-sm font-medium hover:shadow-lg hover:shadow-[var(--accent)]/40 hover:scale-110 transition-all duration-300 mb-6 animate-fade-up animate-delay-150"
        >
          {t("getInTouch")}
        </a>

        <div className="flex justify-center flex-wrap gap-3 animate-fade-up animate-delay-200">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 dark:text-stone-300 px-4 py-2 rounded-full border-2 border-stone-300 dark:border-stone-600 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-accent-50 dark:hover:bg-accent-950/40 hover:shadow-md hover:shadow-[var(--accent)]/20 transition-all duration-300"
          >
            WhatsApp
          </a>
          <a
            href={siteConfig.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 dark:text-stone-300 px-4 py-2 rounded-full border-2 border-stone-300 dark:border-stone-600 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-accent-50 dark:hover:bg-accent-950/40 hover:shadow-md hover:shadow-[var(--accent)]/20 transition-all duration-300"
          >
            LinkedIn
          </a>
          <a
            href={siteConfig.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-stone-600 dark:text-stone-300 px-4 py-2 rounded-full border-2 border-stone-300 dark:border-stone-600 hover:border-[var(--accent)] hover:text-[var(--accent)] hover:bg-accent-50 dark:hover:bg-accent-950/40 hover:shadow-md hover:shadow-[var(--accent)]/20 transition-all duration-300"
          >
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
