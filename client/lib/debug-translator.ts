// Debug helper to check API status
export function initDebugPanel() {
  const apiKey = import.meta.env.VITE_GOOGLE_TRANSLATE_API_KEY;
  
  console.log('=== GOOGLE TRANSLATE DEBUG ===');
  console.log('API Key exists:', !!apiKey);
  if (apiKey) {
    console.log('API Key (first 20 chars):', apiKey.substring(0, 20) + '...');
    console.log('API Key length:', apiKey.length);
  }
  console.log('===========================');

  // Try a simple API call to verify it works
  if (apiKey) {
    testApiCall(apiKey).catch(() => {
      console.error('❌ API test failed - check your API key or Google Cloud setup');
    });
  }
}

async function testApiCall(apiKey: string): Promise<void> {
  const testData = {
    q: 'Hello',
    target: 'kn',
    key: apiKey,
  };

  try {
    const response = await fetch(
      'https://translation.googleapis.com/language/translate/v2',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(testData),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      console.error('❌ API Error:', error);
      console.error('Status:', response.status, response.statusText);
      return;
    }

    const data = await response.json();
    console.log('✅ API is working! Translation test:', data.data.translations[0].translatedText);
  } catch (error) {
    console.error('❌ Network/CORS Error:', error);
  }
}
