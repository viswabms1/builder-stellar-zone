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
      const gtElement = document.getElementById('google_translate_element');
      if (!gtElement) {
        console.error('Google Translate element not found');
        setIsOpen(false);
        return;
      }

      // Try to find and use the select dropdown
      const trySelectMethod = () => {
        const select = gtElement.querySelector('select.goog-te-combo') as HTMLSelectElement;
        if (!select) return false;

        // Find the option with our language code
        const option = Array.from(select.options).find(opt => opt.value === langCode);
        if (!option) return false;

        // Set the select value
        select.value = langCode;

        // Create and dispatch multiple event types to ensure Google Translate picks it up
        const events = [
          new Event('change', { bubbles: true, cancelable: true }),
          new Event('input', { bubbles: true, cancelable: true }),
          new MouseEvent('click', { bubbles: true, cancelable: true }),
          new Event('click', { bubbles: true, cancelable: true })
        ];

        events.forEach(event => {
          select.dispatchEvent(event);
        });

        // Also trigger on the option itself
        option.dispatchEvent(new Event('click', { bubbles: true }));

        return true;
      };

      // Try select method
      if (trySelectMethod()) {
        console.log(`Language changed to: ${langCode}`);
        setIsOpen(false);
        return;
      }

      // Fallback: Try to find and click the language button in the Google Translate UI
      const tryButtonMethod = () => {
        // Look for the combobox or button that opens language options
        const buttons = gtElement.querySelectorAll('div[role="button"], button');
        for (const btn of buttons) {
          // Click the main translate button to open dropdown
          if (btn.textContent && btn.textContent.includes('English')) {
            (btn as HTMLElement).click();
            
            // Now look for the language option
            setTimeout(() => {
              const options = document.querySelectorAll('[role="option"], div[data-value]');
              for (const opt of options) {
                // Try to match by text content
                const textContent = opt.textContent || '';
                let shouldClick = false;
                
                if (langCode === 'kn' && (textContent.includes('Kannada') || textContent.includes('ಕನ್ನಡ'))) {
                  shouldClick = true;
                } else if (langCode === 'hi' && (textContent.includes('Hindi') || textContent.includes('हिंदी'))) {
                  shouldClick = true;
                } else if (langCode === 'en' && textContent.includes('English')) {
                  shouldClick = true;
                }

                if (shouldClick) {
                  (opt as HTMLElement).click();
                  return true;
                }
              }
            }, 300);
            
            return true;
          }
        }
        return false;
      };

      tryButtonMethod();
      setIsOpen(false);
    } catch (error) {
      console.error('Error changing language:', error);
      setIsOpen(false);
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
