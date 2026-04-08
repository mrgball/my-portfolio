"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/data/portfolio";
import { useLanguage } from "@/lib/language-context";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { t } = useLanguage();
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setDark(isDark);

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDark = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try { localStorage.setItem("theme", next ? "dark" : "light"); } catch {}
  };

  const navLinks = [
    { href: "#about", label: t("about") },
    { href: "#services", label: t("services") },
    { href: "#process", label: t("processTitle") },
    { href: "#projects", label: t("projects") },
    { href: "#testimonials", label: t("testimonials") },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-stone-50/90 dark:bg-[#131310]/90 backdrop-blur-md border-b border-stone-200/60 dark:border-stone-800/60"
          : "bg-stone-50 dark:bg-[#131310] border-b border-stone-200 dark:border-stone-800"
      }`}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="font-serif text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100">
            {siteConfig.handle}
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-stone-500 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100 transition-colors"
              >
                {l.label}
              </a>
            ))}
            <LanguageSwitcher />
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors text-sm"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <a
              href="#contact"
              className="text-sm font-medium px-4 py-2 rounded-full border border-stone-300 dark:border-stone-600 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            >
              {t("getInTouch")}
            </a>
          </nav>

          {/* Mobile controls */}
          <div className="flex md:hidden items-center gap-3">
            <LanguageSwitcher />
            <button
              onClick={toggleDark}
              aria-label="Toggle dark mode"
              className="p-2 rounded-full border border-stone-200 dark:border-stone-700 text-sm"
            >
              {dark ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              className="p-2 rounded-lg border border-stone-200 dark:border-stone-700 text-stone-600 dark:text-stone-400"
            >
              <span className="block w-4 h-0.5 bg-current mb-1" />
              <span className="block w-4 h-0.5 bg-current mb-1" />
              <span className={`block h-0.5 bg-current transition-all ${menuOpen ? "w-2" : "w-4"}`} />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 pt-1 border-t border-stone-200 dark:border-stone-800">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="block py-2.5 text-sm text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-stone-100"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-2 text-sm font-medium px-4 py-2 rounded-full border border-stone-300 dark:border-stone-600"
            >
              {t("getInTouch")}
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
