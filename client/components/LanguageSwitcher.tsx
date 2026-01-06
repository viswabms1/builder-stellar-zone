import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        className={`px-3 py-2 rounded-xl text-sm font-medium font-display transition-all duration-200 flex items-center gap-2 ${
          theme === 'light'
            ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
            : 'text-white/80 hover:text-white hover:bg-white/10'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getLanguageLabel(language)}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className={`absolute right-0 mt-2 w-48 rounded-xl shadow-lg border z-50 ${
          theme === 'light'
            ? 'bg-white border-orange-200'
            : 'bg-slate-900 border-slate-700'
        }`}>
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                language === lang
                  ? 'bg-orange-500 text-white'
                  : theme === 'light'
                  ? 'text-gray-700 hover:bg-orange-100'
                  : 'text-slate-200 hover:bg-slate-800'
              } ${lang === LANGUAGES[0] ? 'rounded-t-lg' : ''} ${
                lang === LANGUAGES[LANGUAGES.length - 1] ? 'rounded-b-lg' : ''
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
