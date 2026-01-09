// LibreTranslate API integration for free translation
// Uses the public API at api.libretranslate.de (no key required)

const LIBRETRANSLATE_API = 'https://api.libretranslate.de';

// Language code mappings
const LANGUAGE_CODES: Record<string, string> = {
  'en': 'en',
  'kn': 'kn', // Kannada
  'hi': 'hi'  // Hindi
};

interface TranslateParams {
  q: string;
  source: string;
  target: string;
}

/**
 * Translate text using LibreTranslate API
 */
export async function translateText(
  text: string,
  sourceLang: string = 'en',
  targetLang: string = 'en'
): Promise<string> {
  // If translating to the same language, return as-is
  if (sourceLang === targetLang) {
    return text;
  }

  // If text is empty, return empty
  if (!text || text.trim().length === 0) {
    return text;
  }

  try {
    const response = await fetch(`${LIBRETRANSLATE_API}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: text,
        source: LANGUAGE_CODES[sourceLang] || sourceLang,
        target: LANGUAGE_CODES[targetLang] || targetLang
      } as TranslateParams)
    });

    if (!response.ok) {
      console.warn(`Translation failed with status ${response.status}`);
      return text;
    }

    const data = await response.json();
    return data.translatedText || text;
  } catch (error) {
    console.error('Translation error:', error);
    return text;
  }
}

/**
 * Translate multiple texts at once (batch translation)
 */
export async function translateTexts(
  texts: string[],
  sourceLang: string = 'en',
  targetLang: string = 'en'
): Promise<string[]> {
  if (sourceLang === targetLang) {
    return texts;
  }

  // Filter out empty texts
  const nonEmptyTexts = texts.filter(t => t && t.trim().length > 0);
  if (nonEmptyTexts.length === 0) {
    return texts;
  }

  try {
    const response = await fetch(`${LIBRETRANSLATE_API}/translate`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        q: nonEmptyTexts.join('\n'),
        source: LANGUAGE_CODES[sourceLang] || sourceLang,
        target: LANGUAGE_CODES[targetLang] || targetLang
      })
    });

    if (!response.ok) {
      return texts;
    }

    const data = await response.json();
    const translatedText = data.translatedText || '';
    const translatedLines = translatedText.split('\n');

    // Map translations back to original array, preserving empty entries
    let translatedIndex = 0;
    return texts.map(text => {
      if (!text || text.trim().length === 0) {
        return text;
      }
      return translatedLines[translatedIndex++] || text;
    });
  } catch (error) {
    console.error('Batch translation error:', error);
    return texts;
  }
}

/**
 * Translate DOM content in place
 */
export async function translatePageContent(
  targetLang: string = 'en',
  sourceLang: string = 'en'
): Promise<void> {
  if (sourceLang === targetLang) {
    console.log('Source and target languages are the same, skipping translation');
    return;
  }

  try {
    console.log(`Starting page translation from ${sourceLang} to ${targetLang}`);

    // Get all text nodes in the document
    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_TEXT,
      null
    );

    const textNodesToTranslate: { node: Text; text: string }[] = [];
    let node: Text | null;

    while ((node = walker.nextNode() as Text | null)) {
      const text = node.textContent?.trim();
      // Skip empty text nodes, script/style tags, and very short text
      if (
        text &&
        text.length > 2 &&
        node.parentElement?.tagName !== 'SCRIPT' &&
        node.parentElement?.tagName !== 'STYLE' &&
        node.parentElement?.id !== 'google_translate_element'
      ) {
        textNodesToTranslate.push({ node, text });
      }
    }

    console.log(`Found ${textNodesToTranslate.length} text nodes to translate`);

    if (textNodesToTranslate.length === 0) {
      console.log('No text nodes found to translate');
      return;
    }

    // Batch translate all texts
    const textsToTranslate = textNodesToTranslate.map(t => t.text);
    const translatedTexts = await translateTexts(
      textsToTranslate,
      sourceLang,
      targetLang
    );

    // Update DOM with translated text
    let updateCount = 0;
    textNodesToTranslate.forEach((item, index) => {
      if (translatedTexts[index] && translatedTexts[index] !== item.text) {
        item.node.textContent = translatedTexts[index];
        updateCount++;
      }
    });

    console.log(`Translation complete: ${updateCount} text nodes updated`);
  } catch (error) {
    console.error('Page translation error:', error);
  }
}
