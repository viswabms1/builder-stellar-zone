import { MessageCircle } from "lucide-react";
import { useEffect } from "react";

export function ChatbotFAB() {
  useEffect(() => {
    console.log("[ChatbotFAB] Component mounted");
  }, []);

  const handleClick = () => {
    console.log("[ChatbotFAB] Button clicked, dispatching toggle-chatbot event");
    window.dispatchEvent(new CustomEvent("toggle-chatbot"));
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white flex items-center justify-center shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)] transition-all duration-300 hover:scale-110 active:scale-95"
      style={{
        background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
        zIndex: 10002,
      }}
      aria-label="Open Smart Assistant"
    >
      <MessageCircle className="w-6 h-6" />
    </button>
  );
}
