"use client";

import { useLanguage } from "@/lib/language-context";
import Link from "next/link";
import { Project } from "@/data/portfolio";

function ProjectPageClient({ project }: { project: Project }) {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950">
      {/* Header */}
      <div className="border-b border-stone-200 dark:border-stone-800 bg-white dark:bg-stone-900">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-stone-600 dark:text-stone-400 hover:text-[var(--accent)] transition-colors duration-300 mb-6"
          >
            {t("backToPortfolio")}
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl font-bold text-stone-900 dark:text-stone-100">
                {project.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Description */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-4">
            {t("projectAbout")}
          </h2>
          <p className="text-lg leading-relaxed text-stone-600 dark:text-stone-400">
            {project.fullDescription}
          </p>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
            {t("features")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.features.map((feature: string, idx: number) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800"
              >
                <div className="w-2 h-2 rounded-full bg-[var(--accent)] mt-2 flex-shrink-0" />
                <span className="text-stone-700 dark:text-stone-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
            {t("techStack")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.techStack.map((tech: string, idx: number) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-stone-900 dark:text-stone-100 mb-6">
            {t("screenshots")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.screenshots.map((screenshot: string, idx: number) => (
              <div
                key={idx}
                className="aspect-[9/16] bg-stone-200 dark:bg-stone-800 rounded-xl overflow-hidden border border-stone-300 dark:border-stone-700"
              >
                <div className="w-full h-full flex items-center justify-center text-stone-400 dark:text-stone-600">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📱</div>
                    <div className="text-sm">Screenshot {idx + 1}</div>
                    <div className="text-xs mt-1 opacity-60">Coming Soon</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 dark:text-stone-400 mt-4 italic">
            {t("screenshotComingSoon")}
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 rounded-xl font-medium hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors duration-300"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t("viewOnGitHub")}
          </a>
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-[var(--accent)] text-[var(--accent)] rounded-xl font-medium hover:bg-[var(--accent)] hover:text-white transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t("liveDemo")}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectPageClient;