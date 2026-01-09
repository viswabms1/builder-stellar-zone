import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Language } from '@/lib/i18n';
import { getTranslation } from '@/lib/i18n';
import { translatePageContent } from '@/lib/libretranslate';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
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

  const setLanguage = async (lang: Language) => {
    if (lang === language) return;

    setLanguageState(lang);
    localStorage.setItem('language', lang);

    // Translate page content using LibreTranslate
    if (lang !== 'en') {
      setIsTranslating(true);
      try {
        // Add a small delay to ensure DOM is fully rendered
        await new Promise(resolve => setTimeout(resolve, 100));
        await translatePageContent(lang, 'en');
      } catch (error) {
        console.error('Failed to translate page:', error);
      } finally {
        setIsTranslating(false);
      }
    }
  };

  const t = (key: string): string => {
    return getTranslation(language, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
