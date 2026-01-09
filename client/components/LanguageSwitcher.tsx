import { useTheme } from '@/providers/theme-provider';
import { useEffect, useRef } from 'react';

export default function LanguageSwitcher() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Style the Google Translate widget to match our theme
    const styleGoogleTranslate = () => {
      if (!containerRef.current) return;

      const select = containerRef.current.querySelector('select.goog-te-combo') as HTMLSelectElement;
      if (select) {
        // Style the select element
        select.style.padding = '4px 8px';
        select.style.fontSize = '12px';
        select.style.fontWeight = '500';
        select.style.border = 'none';
        select.style.background = 'transparent';
        select.style.cursor = 'pointer';
        select.style.color = theme === 'light' ? '#4b5563' : '#f3f4f6';
        
        // Style options
        const options = select.querySelectorAll('option');
        options.forEach((option) => {
          option.style.color = '#000';
          option.style.backgroundColor = '#fff';
        });
      }

      // Style the wrapper
      const gadget = containerRef.current.querySelector('.goog-te-gadget') as HTMLElement;
      if (gadget) {
        gadget.style.fontFamily = 'inherit';
        gadget.style.padding = '0';
        gadget.style.margin = '0';
      }

      // Remove "powered by" text
      const powerbyDiv = containerRef.current.querySelector('.goog-te-gadget-simple .goog-te-menu-value');
      if (powerbyDiv) {
        const spans = powerbyDiv.querySelectorAll('span');
        if (spans.length > 1) {
          spans[spans.length - 1].style.display = 'none';
        }
      }
    };

    // Retry styling in case Google Translate loads after component mounts
    styleGoogleTranslate();
    const timers = [
      setTimeout(styleGoogleTranslate, 300),
      setTimeout(styleGoogleTranslate, 800),
      setTimeout(styleGoogleTranslate, 1500)
    ];

    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [theme]);

  return (
    <div 
      ref={containerRef}
      className="flex items-center gap-1"
    >
      {/* Google Translate widget will be injected here */}
      <div id="google_translate_element" />
    </div>
  );
}
