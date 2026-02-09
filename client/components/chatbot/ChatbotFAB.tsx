import { MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export function ChatbotFAB() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Ensure button stays visible
    const interval = setInterval(() => {
      setIsVisible(true);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  if (!isVisible) return null;

  return (
    <button
      onClick={() => {
        console.log("[ChatbotFAB] Clicked");
        window.dispatchEvent(new CustomEvent("toggle-chatbot"));
      }}
      onContextMenu={(e) => {
        e.preventDefault();
        return false;
      }}
      style={{
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
        zIndex: 9999,
        fontSize: "24px",
        padding: "0",
        margin: "0",
      }}
      aria-label="Open Smart Assistant"
      type="button"
    >
      <MessageCircle size={24} color="white" />
    </button>
  );
}
