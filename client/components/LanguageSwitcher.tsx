import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { Loader2 } from 'lucide-react';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage, isTranslating } = useLanguage();
  const { theme } = useTheme();

  return (
    <div className="flex items-center gap-1">
      {LANGUAGES.map((lang) => (
        <button
          key={lang}
          onClick={() => {
            console.log('Clicked language:', lang);
            setLanguage(lang);
          }}
          disabled={isTranslating && language !== lang}
          className={`px-2 py-1 text-xs font-medium rounded transition-colors flex items-center gap-1 ${
            language === lang
              ? 'bg-orange-500 text-white'
              : theme === 'light'
              ? 'text-gray-600 hover:text-orange-600 hover:bg-orange-100 disabled:opacity-50 disabled:cursor-not-allowed'
              : 'text-white/80 hover:text-white hover:bg-white/10 disabled:opacity-50 disabled:cursor-not-allowed'
          }`}
        >
          {isTranslating && language === lang ? (
            <Loader2 className="h-3 w-3 animate-spin" />
          ) : null}
          {getLanguageLabel(lang)}
        </button>
      ))}
    </div>
  );
}
