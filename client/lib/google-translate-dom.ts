import { translateText, getLanguageCode } from './google-translate';

interface TextNode {
  node: Text;
  text: string;
}

const EXCLUDE_CLASSES = new Set([
  'no-translate',
  'notranslate',
  'code',
  'pre',
  'script',
  'style',
]);

const EXCLUDE_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'CODE',
  'PRE',
  'NOSCRIPT',
  'IMG',
  'VIDEO',
  'AUDIO',
  'BUTTON', // Don't translate button content as it usually has translation keys
]);

function shouldTranslateNode(node: Node): boolean {
  if (node.nodeType !== Node.TEXT_NODE) return false;

  const text = node.textContent?.trim();
  if (!text || text.length === 0) return false;

  // Check if it's only numbers, punctuation, or special characters
  if (/^[\d\s\-.,;:!?()\[\]{}«»"'/]*$/.test(text)) return false;

  // Check if parent is in exclude list
  let parent = node.parentElement;
  while (parent) {
    if (EXCLUDE_TAGS.has(parent.tagName)) return false;
    if (parent.classList.contains('no-translate') || parent.classList.contains('notranslate')) {
      return false;
    }
    parent = parent.parentElement;
  }

  return true;
}

function getTextNodesToTranslate(): TextNode[] {
  const textNodes: TextNode[] = [];
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode: (node) => {
        return shouldTranslateNode(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      },
    }
  );

  let node: Text | null;
  while ((node = walker.nextNode() as Text)) {
    const text = node.textContent?.trim();
    if (text) {
      textNodes.push({ node, text });
    }
  }

  return textNodes;
}

export async function translateDOMContent(
  targetLanguage: string,
  sourceLanguage: string = 'en'
): Promise<void> {
  if (targetLanguage === sourceLanguage) return;

  const targetCode = getLanguageCode(targetLanguage);
  const sourceCode = getLanguageCode(sourceLanguage);

  try {
    const textNodes = getTextNodesToTranslate();
    
    if (textNodes.length === 0) {
      console.log('No text nodes found to translate');
      return;
    }

    console.log(`Found ${textNodes.length} text nodes to translate`);

    // Batch translate to reduce API calls (Google Translate API supports multiple texts)
    const batchSize = 50;
    const batches = [];

    for (let i = 0; i < textNodes.length; i += batchSize) {
      const batch = textNodes.slice(i, i + batchSize);
      batches.push(batch);
    }

    console.log(`Translating in ${batches.length} batch(es)`);

    for (const batch of batches) {
      try {
        const textsToTranslate = batch.map((item) => item.text);
        
        // Use fetch directly for batch translation
        const response = await fetch(
          'https://translation.googleapis.com/language/translate/v2',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              q: textsToTranslate,
              target: targetCode,
              source: sourceCode,
              key: import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY,
            }),
          }
        );

        if (!response.ok) {
          console.error('Translation API error:', response.status, response.statusText);
          continue;
        }

        const data = await response.json();
        const translatedTexts = data.data.translations.map(
          (t: { translatedText: string }) => t.translatedText
        );

        // Update DOM nodes with translated text
        batch.forEach((item, index) => {
          if (translatedTexts[index]) {
            item.node.textContent = translatedTexts[index];
          }
        });

        console.log(`Translated ${batch.length} text nodes`);
      } catch (error) {
        console.error('Batch translation error:', error);
        continue;
      }

      // Add small delay between batches to avoid rate limiting
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    console.log('DOM translation completed');
  } catch (error) {
    console.error('DOM translation failed:', error);
    throw error;
  }
}

export function resetDOMContent(): void {
  // This would require storing original content - for now, page reload is used
  window.location.reload();
}
