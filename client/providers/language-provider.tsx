import React, { createContext, useContext, useState, useEffect, useRef } from 'react';
import { translateDOMContent } from '@/lib/google-translate-dom';

type Language = 'en' | 'kn' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isTranslating: boolean;
  triggerTranslation: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);
  const translationTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const lastPathRef = useRef<string>(window.location.pathname);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'kn', 'hi'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Monitor for route changes using popstate and mutation observer
  useEffect(() => {
    const handleRouteChange = () => {
      const currentPath = window.location.pathname;
      if (currentPath !== lastPathRef.current && language !== 'en') {
        console.log('Route changed from', lastPathRef.current, 'to', currentPath, ', re-translating to', language);
        lastPathRef.current = currentPath;

        // Clear any pending translation
        if (translationTimeoutRef.current) {
          clearTimeout(translationTimeoutRef.current);
        }

        // Wait for page to render, then translate
        setIsTranslating(true);
        translationTimeoutRef.current = setTimeout(() => {
          translateDOMContent(language, 'en')
            .then(() => {
              console.log('Page translation completed for route:', currentPath);
              setIsTranslating(false);
            })
            .catch((err) => {
              console.error('Translation failed:', err);
              setIsTranslating(false);
            });
        }, 500);
      }
    };

    // Listen for popstate events (back/forward buttons)
    window.addEventListener('popstate', handleRouteChange);

    // Observe DOM changes to detect client-side navigation
    const observer = new MutationObserver(() => {
      const currentPath = window.location.pathname;
      if (currentPath !== lastPathRef.current && language !== 'en') {
        handleRouteChange();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      observer.disconnect();
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }
    };
  }, [language]);

  const triggerTranslation = () => {
    if (language !== 'en') {
      setIsTranslating(true);

      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }

      translationTimeoutRef.current = setTimeout(() => {
        translateDOMContent(language, 'en')
          .then(() => {
            console.log('Page translation triggered');
            setIsTranslating(false);
          })
          .catch((err) => {
            console.error('Translation failed:', err);
            setIsTranslating(false);
          });
      }, 300);
    }
  };

  const setLanguage = (lang: Language) => {
    console.log('Language changed to:', lang);
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Translate entire page content using Google Translate if not English
    if (lang !== 'en') {
      setIsTranslating(true);

      // Clear any pending translation
      if (translationTimeoutRef.current) {
        clearTimeout(translationTimeoutRef.current);
      }

      translationTimeoutRef.current = setTimeout(() => {
        translateDOMContent(lang, 'en')
          .then(() => {
            console.log('Page translation completed');
            setIsTranslating(false);
          })
          .catch((err) => {
            console.error('Translation failed:', err);
            setIsTranslating(false);
          });
      }, 100);
    } else {
      setIsTranslating(false);
    }
  };

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isTranslating, triggerTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
