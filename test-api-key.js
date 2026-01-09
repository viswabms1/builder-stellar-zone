// Test script to verify Google Translate API key is working
const API_KEY = 'AIzaSyAL6BpN9D5GZcWR4lLgvftK8XntJkFeL8s';
const API_URL = 'https://translation.googleapis.com/language/translate/v2';

const testData = {
  q: 'Hello',
  target: 'kn',
  source: 'en',
  key: API_KEY,
};

console.log('Testing Google Translate API...');
console.log('API Key:', API_KEY.substring(0, 10) + '...');
console.log('Endpoint:', API_URL);

fetch(API_URL, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then((response) => {
    console.log('Response status:', response.status);
    return response.json();
  })
  .then((data) => {
    console.log('✅ API is working!');
    console.log('Response:', data);
  })
  .catch((error) => {
    console.error('❌ API Error:', error);
  });
