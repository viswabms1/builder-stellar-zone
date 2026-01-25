import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const otherLanguages = LANGUAGES.filter(lang => lang !== language);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-1 px-2 py-1 body-sm font-medium rounded transition-colors ${
          theme === 'light'
            ? 'bg-gray-200 text-gray-900'
            : 'bg-white/15 text-white'
        }`}
      >
        {getLanguageLabel(language)}
        <ChevronDown className={`h-3 w-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className={`absolute right-0 top-full mt-1 rounded-lg shadow-lg z-50 min-w-max ${
            theme === 'light'
              ? 'bg-white border border-gray-200'
              : 'bg-slate-800 border border-orange-600/30'
          }`}
        >
          {otherLanguages.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`block w-full text-left px-3 py-2 body-sm font-medium rounded-none transition-colors ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white/80 hover:bg-white/10'
              }`}
            >
              {getLanguageLabel(lang)}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
