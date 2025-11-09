import { useLanguage } from '@/providers/language-provider';
import { Button } from '@/components/ui/button';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
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
        className="text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-xl text-sm font-medium font-display transition-all duration-200 flex items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getLanguageLabel(language)}</span>
        <ChevronDown className="w-4 h-4" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700 z-50">
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
                  : 'text-foreground hover:bg-slate-100 dark:hover:bg-slate-800'
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
