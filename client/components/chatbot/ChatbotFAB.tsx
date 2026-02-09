import { useEffect } from "react";

export function ChatbotFAB() {
  useEffect(() => {
    // Create button element directly in DOM
    const button = document.createElement("button");
    button.id = "dsu-chatbot-fab-button";
    button.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
      </svg>
    `;
    
    // Apply styles
    Object.assign(button.style, {
      position: "fixed",
      bottom: "24px",
      right: "24px",
      width: "56px",
      height: "56px",
      borderRadius: "50%",
      background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
      border: "none",
      color: "white",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
      zIndex: "9999",
      padding: "0",
      margin: "0",
    });

    // Add click handler
    button.addEventListener("click", () => {
      window.dispatchEvent(new CustomEvent("toggle-chatbot"));
    });

    // Append to body
    document.body.appendChild(button);

    // Cleanup
    return () => {
      document.body.removeChild(button);
    };
  }, []);

  return null;
}
