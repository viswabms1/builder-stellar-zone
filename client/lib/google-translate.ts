const API_KEY = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

// Log API key status on module load
console.log('Google Translate API Key Status:', API_KEY ? 'Configured' : 'NOT CONFIGURED');

interface TranslateResponse {
  data: {
    translations: Array<{
      translatedText: string;
    }>;
  };
}

export async function translateText(
  text: string,
  targetLanguage: string,
  sourceLanguage: string = 'en'
): Promise<string> {
  if (!API_KEY) {
    console.error('❌ Google Translate API key not configured. Set VITE_GOOGLE_TRANSLATE_API_KEY environment variable.');
    return text;
  }

  if (!text || text.trim() === '') {
    return text;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: text,
        target: targetLanguage,
        source: sourceLanguage,
        key: API_KEY,
      }),
    });

    if (!response.ok) {
      console.error('Google Translate API error:', response.status);
      return text;
    }

    const data: TranslateResponse = await response.json();
    return data.data.translations[0]?.translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

export async function translateMultiple(
  texts: string[],
  targetLanguage: string,
  sourceLanguage: string = 'en'
): Promise<string[]> {
  if (!API_KEY) {
    console.error('Google Translate API key not configured');
    return texts;
  }

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        q: texts,
        target: targetLanguage,
        source: sourceLanguage,
        key: API_KEY,
      }),
    });

    if (!response.ok) {
      console.error('Google Translate API error:', response.status);
      return texts;
    }

    const data: TranslateResponse = await response.json();
    return data.data.translations.map(
      (t) => t.translatedText || ''
    );
  } catch (error) {
    console.error('Translation error:', error);
    return texts;
  }
}

export function getLanguageCode(lang: string): string {
  const codeMap: Record<string, string> = {
    en: 'en',
    kn: 'kn',
    hi: 'hi',
  };
  return codeMap[lang] || 'en';
}
