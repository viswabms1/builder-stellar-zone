import { useTheme } from '@/providers/theme-provider';
import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Wait for Google Translate to load and style it
    const styleGoogleTranslate = () => {
      const gtElement = document.querySelector('#google_translate_element');
      if (!gtElement) return;

      // Make it visible
      (gtElement as HTMLElement).style.display = 'inline-block';
      
      // Style the select dropdown to match our theme
      const select = gtElement.querySelector('select.goog-te-combo') as HTMLSelectElement;
      if (select) {
        select.style.padding = '4px 8px';
        select.style.fontSize = '12px';
        select.style.fontWeight = '500';
        select.style.border = 'none';
        select.style.background = 'transparent';
        select.style.cursor = 'pointer';
        select.style.color = theme === 'light' ? '#4b5563' : '#f3f4f6';
      }
      
      // Style the wrapper
      const framework = gtElement.querySelector('.goog-te-gadget') as HTMLElement;
      if (framework) {
        framework.style.fontFamily = 'inherit';
        framework.style.padding = '0';
        framework.style.margin = '0';
      }

      // Hide the "powered by" text if present
      const poweredBy = gtElement.querySelector('.goog-te-gadget-simple .goog-te-menu-value span:last-child');
      if (poweredBy) {
        (poweredBy as HTMLElement).style.display = 'none';
      }
    };

    // Try to style immediately and retry if Google Translate hasn't loaded yet
    let attempts = 0;
    const tryStyle = () => {
      styleGoogleTranslate();
      attempts++;
      if (attempts < 5) {
        setTimeout(tryStyle, 300);
      }
    };
    
    tryStyle();
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className={`text-xs font-medium flex items-center gap-2 transition-colors ${
        theme === 'light'
          ? 'text-gray-600'
          : 'text-white/80'
      }`}
    >
      <span className="hidden sm:inline">Language:</span>
      {/* The google_translate_element div is in index.html - it will be injected here */}
    </div>
  );
}
