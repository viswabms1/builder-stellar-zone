import { useTheme } from '@/providers/theme-provider';
import { ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

declare global {
  interface Window {
    google?: any;
  }
}

export default function LanguageSwitcher() {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        if (buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (buttonRef.current && isOpen) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDropdownPos({
        top: rect.bottom + window.scrollY,
        right: window.innerWidth - rect.right
      });
    }
  }, [isOpen]);

  const handleLanguageSelect = (langCode: string) => {
    // Get the language select element from Google Translate
    const googleSelect = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
    if (googleSelect) {
      googleSelect.value = langCode;
      // Trigger change event to notify Google Translate
      googleSelect.dispatchEvent(new Event('change'));
    }
    setIsOpen(false);
  };

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'kn', label: 'ಕನ್ನಡ' },
    { code: 'hi', label: 'हिंदी' }
  ];

  return (
    <div ref={dropdownRef}>
      <button
        ref={buttonRef}
        className={`text-xs font-medium transition-colors whitespace-nowrap flex items-center gap-1 ${
          theme === 'light'
            ? 'text-gray-600 hover:text-orange-600'
            : 'text-white/80 hover:text-white'
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>English</span>
        <ChevronDown className="w-3 h-3" />
      </button>

      {isOpen && createPortal(
        <div
          className={`fixed rounded-lg shadow-lg border z-[9999] ${
            theme === 'light'
              ? 'bg-white border-orange-200'
              : 'bg-slate-900 border-slate-700'
          }`}
          style={{
            top: `${dropdownPos.top + 8}px`,
            right: `${dropdownPos.right}px`,
            minWidth: '160px'
          }}
        >
          {languages.map((lang, idx) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageSelect(lang.code)}
              className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${
                theme === 'light'
                  ? 'text-gray-700 hover:bg-orange-100'
                  : 'text-slate-200 hover:bg-slate-800'
              } ${idx === 0 ? 'rounded-t-lg' : ''} ${
                idx === languages.length - 1 ? 'rounded-b-lg' : ''
              }`}
            >
              {lang.label}
            </button>
          ))}
        </div>,
        document.body
      )}
    </div>
  );
}
