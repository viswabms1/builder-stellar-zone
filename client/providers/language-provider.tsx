import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { translateDOMContent } from '@/lib/google-translate-dom';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');
  const [isTranslating, setIsTranslating] = useState(false);

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language | null;
    if (savedLanguage && ['en', 'kn', 'hi'].includes(savedLanguage)) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    console.log('Language changed to:', lang);
    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Translate entire page content using Google Translate if not English
    if (lang !== 'en') {
      setIsTranslating(true);
      setTimeout(() => {
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
    <LanguageContext.Provider value={{ language, setLanguage, t, isTranslating }}>
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
