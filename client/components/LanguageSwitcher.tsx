import { useLanguage } from '@/providers/language-provider';
import { useTheme } from '@/providers/theme-provider';
import { Button } from '@/components/ui/button';
import { getLanguageLabel } from '@/lib/i18n';
import type { Language } from '@/lib/i18n';
import { ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const LANGUAGES: Language[] = ['en', 'kn', 'hi'];

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);
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

  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right
      });
    }
  }, [isOpen]);

  const handleLanguageSelect = async (lang: Language) => {
    setIsTranslating(true);
    try {
      await setLanguage(lang);
      setIsOpen(false);
    } catch (error) {
      console.error('Failed to change language:', error);
    } finally {
      setIsTranslating(false);
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
          theme === 'light'
            ? 'text-gray-600 hover:text-orange-600'
            : 'text-white/80 hover:text-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{getLanguageLabel(language)}</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && createPortal(
        <div
          className={`fixed w-48 rounded-xl shadow-lg border z-[9999] ${
            theme === 'light'
              ? 'bg-white border-orange-200'
              : 'bg-slate-900 border-slate-700'
          }`}
          style={{
            top: `${dropdownPos.top + 8}px`,
            right: `${dropdownPos.right}px`
          }}
        >
          {LANGUAGES.map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageSelect(lang)}
              disabled={isTranslating}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                isTranslating ? 'opacity-50 cursor-not-allowed' : ''
              } ${
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
        </div>,
        document.body
      )}
    </div>
  );
}
