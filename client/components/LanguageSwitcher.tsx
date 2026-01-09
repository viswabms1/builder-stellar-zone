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
    try {
      // Wait for Google Translate to be fully loaded
      const waitForGoogleTranslate = () => {
        // Try multiple selectors for the language dropdown
        let googleSelect = document.querySelector('select.goog-te-combo') as HTMLSelectElement;
        
        // If not found, look for the element inside iframe or other locations
        if (!googleSelect) {
          // Try finding it in the google translate element
          const gtElement = document.getElementById('google_translate_element');
          if (gtElement) {
            googleSelect = gtElement.querySelector('select.goog-te-combo') as HTMLSelectElement;
          }
        }

        if (googleSelect) {
          googleSelect.value = langCode;
          // Trigger both change and click events for better compatibility
          googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
          
          // Also try to find and trigger the option element
          const option = Array.from(googleSelect.options).find(
            opt => opt.value === langCode
          );
          if (option) {
            option.selected = true;
            googleSelect.dispatchEvent(new Event('change', { bubbles: true }));
          }
          return true;
        }
        return false;
      };

      // Try immediately
      if (waitForGoogleTranslate()) {
        setIsOpen(false);
        return;
      }

      // If not found, wait and retry
      let attempts = 0;
      const retryInterval = setInterval(() => {
        attempts++;
        if (waitForGoogleTranslate()) {
          clearInterval(retryInterval);
          setIsOpen(false);
        } else if (attempts > 10) {
          clearInterval(retryInterval);
          console.warn('Google Translate element not found after retries');
        }
      }, 100);
    } catch (error) {
      console.error('Error switching language:', error);
    }
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
