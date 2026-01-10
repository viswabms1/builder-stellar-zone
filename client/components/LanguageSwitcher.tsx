import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
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
          className={`px-2 py-1 text-xs font-medium rounded transition-colors ${
            language === lang
              ? theme === 'light'
                ? 'bg-gray-200 text-gray-900'
                : 'bg-white/15 text-white'
              : theme === 'light'
              ? 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              : 'text-white/80 hover:text-white hover:bg-white/10'
          }`}
        >
          {getLanguageLabel(lang)}
        </button>
      ))}
    </div>
  );
}
