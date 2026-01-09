import { getLanguageCode } from './google-translate';

interface TextNode {
  node: Text;
  text: string;
}

const STRICT_EXCLUDE_TAGS = new Set([
  'SCRIPT',
  'STYLE',
  'NOSCRIPT',
  'SVG',
  'MATH',
]);

function shouldTranslateNode(node: Node): boolean {
  if (node.nodeType !== Node.TEXT_NODE) return false;

  const text = node.textContent?.trim();
  if (!text || text.length === 0) return false;

  // Minimum length check - at least 2 characters
  if (text.length < 2) return false;

  // Check if parent is in strict exclude list
  let parent = node.parentElement;
  while (parent) {
    if (STRICT_EXCLUDE_TAGS.has(parent.tagName)) return false;
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

    console.log(`Found ${textNodes.length} text nodes to translate to ${targetCode}`);

    // Batch translate to reduce API calls (Google Translate API supports multiple texts)
    // Use larger batch size for efficiency
    const batchSize = 100;
    const batches = [];

    for (let i = 0; i < textNodes.length; i += batchSize) {
      const batch = textNodes.slice(i, i + batchSize);
      batches.push(batch);
    }

    console.log(`Translating in ${batches.length} batch(es) of max ${batchSize} items`);

    let totalTranslated = 0;

    for (let batchIndex = 0; batchIndex < batches.length; batchIndex++) {
      const batch = batches[batchIndex];
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
              format: 'html', // Preserve HTML formatting
            }),
          }
        );

        if (!response.ok) {
          console.error(`Translation API error for batch ${batchIndex + 1}:`, response.status, response.statusText);

          // Try individual translations as fallback
          for (const item of batch) {
            try {
              const fallbackResponse = await fetch(
                'https://translation.googleapis.com/language/translate/v2',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify({
                    q: item.text,
                    target: targetCode,
                    source: sourceCode,
                    key: import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY,
                  }),
                }
              );

              if (fallbackResponse.ok) {
                const fallbackData = await fallbackResponse.json();
                const translated = fallbackData.data.translations[0]?.translatedText;
                if (translated) {
                  item.node.textContent = translated;
                  totalTranslated++;
                }
              }
            } catch (e) {
              console.error('Individual translation error:', e);
            }
          }
          continue;
        }

        const data = await response.json();

        if (!data.data || !data.data.translations) {
          console.error('Invalid API response:', data);
          continue;
        }

        const translatedTexts = data.data.translations.map(
          (t: { translatedText: string }) => t.translatedText
        );

        // Update DOM nodes with translated text
        let batchTranslated = 0;
        batch.forEach((item, index) => {
          if (translatedTexts[index] && translatedTexts[index].length > 0) {
            item.node.textContent = translatedTexts[index];
            batchTranslated++;
            totalTranslated++;
          }
        });

        console.log(`Batch ${batchIndex + 1}/${batches.length}: Translated ${batchTranslated}/${batch.length} text nodes`);
      } catch (error) {
        console.error(`Batch ${batchIndex + 1} translation error:`, error);
        continue;
      }

      // Add delay between batches to avoid rate limiting
      if (batchIndex < batches.length - 1) {
        await new Promise((resolve) => setTimeout(resolve, 200));
      }
    }

    console.log(`DOM translation completed. Total translated: ${totalTranslated}/${textNodes.length}`);
  } catch (error) {
    console.error('DOM translation failed:', error);
    throw error;
  }
}

export function resetDOMContent(): void {
  // This would require storing original content - for now, page reload is used
  window.location.reload();
}
