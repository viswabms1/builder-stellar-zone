import { MessageCircle } from "lucide-react";

export function ChatbotFAB() {
  return (
    <button
      onClick={() => window.dispatchEvent(new CustomEvent("toggle-chatbot"))}
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
        zIndex: 40,
      }}
      aria-label="Open Smart Assistant"
    >
      <MessageCircle size={24} />
    </button>
  );
}
