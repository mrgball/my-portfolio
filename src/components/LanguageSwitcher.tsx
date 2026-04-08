'use client';

import { useLanguage } from '@/lib/language-context';
import { Language } from '@/lib/translations';

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'id' ? 'en' : 'id');
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors duration-200 text-sm font-medium"
      aria-label={t('language')}
    >
      <span className="text-white/80">{t('language')}:</span>
      <span className="text-white font-semibold">
        {language === 'id' ? 'ID' : 'EN'}
      </span>
    </button>
  );
}