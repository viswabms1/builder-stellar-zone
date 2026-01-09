import { useEffect } from 'react';
import { useTheme } from '@/providers/theme-provider';

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export default function LanguageSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    // Check if already loaded
    if (window.google?.translate) {
      return;
    }

    // Define the initialization function globally BEFORE loading the script
    window.googleTranslateElementInit = function() {
      try {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,kn,hi',
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
            },
            'google_translate_element'
          );
        }
      } catch (error) {
        console.error('Google Translate initialization error:', error);
      }
    };

    // Load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.onerror = () => {
      console.error('Failed to load Google Translate script');
    };
    
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      const scripts = document.head.querySelectorAll('script[src*="translate.google.com"]');
      scripts.forEach(s => {
        if (document.head.contains(s)) {
          document.head.removeChild(s);
        }
      });
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className={`flex items-center ${
        theme === 'light' ? 'text-gray-600' : 'text-white'
      }`}
      style={{ minHeight: '28px', display: 'flex', alignItems: 'center' }}
    />
  );
}
