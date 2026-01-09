import { useTheme } from '@/providers/theme-provider';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure Google Translate widget is properly styled when component mounts
    const styleGoogleTranslate = () => {
      const gtElement = document.querySelector('#google_translate_element');
      if (gtElement) {
        // Make it visible
        (gtElement as HTMLElement).style.display = 'block';
        
        // Style the dropdown to match our theme
        const select = gtElement.querySelector('select.goog-te-combo') as HTMLSelectElement;
        if (select) {
          select.style.padding = '6px 4px';
          select.style.fontSize = '12px';
          select.style.fontWeight = '500';
          select.style.border = 'none';
          select.style.background = 'transparent';
          select.style.cursor = 'pointer';
          select.style.color = theme === 'light' ? '#374151' : '#f3f4f6';
        }
        
        // Style the framework
        const framework = gtElement.querySelector('.goog-te-gadget');
        if (framework) {
          (framework as HTMLElement).style.fontFamily = 'inherit';
          (framework as HTMLElement).style.padding = '0';
        }
      }
    };

    // Style immediately and also after a delay in case Google Translate loads later
    styleGoogleTranslate();
    const timer = setTimeout(styleGoogleTranslate, 500);
    const timer2 = setTimeout(styleGoogleTranslate, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className={`text-xs font-medium flex items-center gap-1 ${
        theme === 'light'
          ? 'text-gray-600'
          : 'text-white/80'
      }`}
    >
      {/* This div will be populated by Google Translate script from index.html */}
      <div id="google_translate_element" style={{ display: 'none' }}></div>
      
      {/* Custom Language Button - Fallback if Google Translate doesn't load */}
      <button
        className={`whitespace-nowrap flex items-center gap-1 transition-colors ${
          theme === 'light'
            ? 'hover:text-orange-600'
            : 'hover:text-white'
        }`}
        onClick={() => {
          const gtElement = document.getElementById('google_translate_element');
          if (gtElement) {
            gtElement.style.display = gtElement.style.display === 'none' ? 'block' : 'none';
          }
        }}
        title="Click to open language selector"
      >
        <span>English</span>
        <ChevronDown className="w-3 h-3" />
      </button>
    </div>
  );
}
