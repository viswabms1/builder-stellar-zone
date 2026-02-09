import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export function ChatbotFAB() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("[ChatbotFAB] Component mounted and rendered");
    setMounted(true);

    // Verify button exists in DOM
    setTimeout(() => {
      const btn = document.getElementById("dsu-fab-chatbot-btn");
      console.log("[ChatbotFAB] Button in DOM:", !!btn);
      if (btn) {
        console.log("[ChatbotFAB] Button element:", btn);
        console.log("[ChatbotFAB] Button styles:", window.getComputedStyle(btn));
      }
    }, 100);
  }, []);

  const handleClick = () => {
    console.log("[ChatbotFAB] Button clicked");
    window.dispatchEvent(new CustomEvent("toggle-chatbot"));
  };

  if (!mounted) return null;

  return (
    <button
      id="dsu-fab-chatbot-btn"
      onClick={handleClick}
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
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",
        zIndex: 10002,
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
        e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.35)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(0,0,0,0.25)";
      }}
      aria-label="Open Smart Assistant"
    >
      <MessageCircle size={24} />
    </button>
  );
}
