import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

// Signal that the app is ready and show the chatbot button
document.addEventListener('DOMContentLoaded', () => {
  const chatButton = document.getElementById('dsu-chat-fab');
  if (chatButton) {
    chatButton.classList.add('ready');
  }
});

// Fallback: show button after a short delay if DOMContentLoaded already fired
setTimeout(() => {
  const chatButton = document.getElementById('dsu-chat-fab');
  if (chatButton) {
    chatButton.classList.add('ready');
  }
}, 100);
