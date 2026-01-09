import { useEffect } from 'react';
import { useTheme } from '@/providers/theme-provider';

export default function LanguageSwitcher() {
  const { theme } = useTheme();

  useEffect(() => {
    // Load Google Translate script
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    
    // Define the initialization function globally
    (window as any).googleTranslateElementInit = function() {
      if ((window as any).google && (window as any).google.translate) {
        new (window as any).google.translate.TranslateElement({
          pageLanguage: 'en',
          includedLanguages: 'en,kn,hi',
          layout: (window as any).google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      }
    };

    // Append the script to document head
    document.head.appendChild(script);

    return () => {
      // Cleanup: remove script on unmount
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div 
      id="google_translate_element" 
      className={`flex items-center ${
        theme === 'light' ? 'text-gray-600' : 'text-white'
      }`}
      style={{ minHeight: '24px' }}
    />
  );
}
