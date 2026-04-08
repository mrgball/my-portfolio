"use client";

import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-stone-200 dark:border-stone-800 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-[13px] text-stone-400 dark:text-stone-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>{t("footerText")}</p>
      </div>
    </footer>
  );
}
