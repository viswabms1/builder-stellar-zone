import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  MessageCircle,
  X,
  Send,
  Loader2,
  ChevronDown,
  Sparkles,
  Navigation,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/providers/theme-provider";
import { ChatMessage, ChatMessageData } from "./ChatMessage";
import { QUICK_ACTIONS } from "./quickActions";

interface SmartChatResponse {
  success: boolean;
  type: "navigate" | "answer";
  path?: string;
  label?: string;
  message: string;
}

export function UnifiedChatbot() {
  const navigate = useNavigate();
  const location = useLocation();
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessageData[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const chatRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  // Add greeting when first opened
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([{
        id: "greeting",
        role: "assistant",
        content: "Hello! I'm DSU's Smart Assistant. Tell me what you're looking for and I'll take you there, or ask me any question about programs, fees, admissions, and more.",
        timestamp: new Date(),
      }]);
    }
  }, [isOpen, messages.length]);

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isOpen]);

  /**
   * Send message to smart chat API
   */
  const sendMessage = useCallback(async (messageText: string) => {
    if (!messageText.trim() || isLoading) return;

    const userMsg: ChatMessageData = {
      id: `msg_${Date.now()}`,
      role: "user",
      content: messageText,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages
        .filter(m => m.id !== "greeting")
        .slice(-6)
        .map(m => ({ role: m.role, content: m.content }));

      const response = await fetch("/api/smart-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: messageText, conversationHistory }),
      });

      const data: SmartChatResponse = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to get response");
      }

      const assistantMsg: ChatMessageData = {
        id: `msg_${Date.now()}_resp`,
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      // If type is navigate, auto-navigate and attach nav info
      if (data.type === "navigate" && data.path) {
        assistantMsg.navigateTo = { path: data.path, label: data.label || "Page" };
        // Auto-navigate after a brief delay so user sees the message
        setTimeout(() => {
          navigate(data.path!);
        }, 800);
      } else if (data.path) {
        // Answer type but with a suggested path
        assistantMsg.navigateTo = { path: data.path, label: data.label || "Related page" };
      }

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong";
      setMessages(prev => [...prev, {
        id: `msg_${Date.now()}_err`,
        role: "assistant",
        content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  }, [messages, isLoading, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const clearConversation = () => {
    setMessages([{
      id: "greeting",
      role: "assistant",
      content: "Hello! I'm DSU's Smart Assistant. Tell me what you're looking for and I'll take you there, or ask me any question about programs, fees, admissions, and more.",
      timestamp: new Date(),
    }]);
  };

  return (
    <>
      {/* Floating Action Button - Simple version, always visible */}
      <button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed rounded-full flex items-center justify-center text-white cursor-pointer transition-opacity",
          isOpen ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
        )}
        style={{
          bottom: "24px",
          right: "24px",
          width: "56px",
          height: "56px",
          background: "linear-gradient(135deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
          border: "none",
          zIndex: 10002,
          padding: 0,
        }}
        aria-label="Open Smart Assistant"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={chatRef}
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "fixed z-[9999] rounded-2xl shadow-2xl flex flex-col overflow-hidden",
              theme === "light"
                ? "bg-white border border-gray-200"
                : "bg-slate-900 border border-slate-700"
            )}
            style={{
              bottom: "clamp(1.5rem, 4vh, 2rem)",
              right: "clamp(1rem, 3vw, 1.5rem)",
              width: "clamp(300px, 90vw, 400px)",
              height: "clamp(350px, 75vh, 600px)",
            }}
          >
            {/* Header */}
            <div className={cn(
              "flex items-center justify-between px-4 py-3 border-b",
              theme === "light"
                ? "bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 border-gray-200"
                : "bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 border-slate-700"
            )}>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm">DSU Smart Assistant</h3>
                  <p className="text-[10px] opacity-60 flex items-center gap-1">
                    <Navigation className="w-2.5 h-2.5" />
                    Navigate & Ask anything
                  </p>
                </div>
              </div>
              <div className="flex gap-1">
                <button
                  onClick={clearConversation}
                  className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors text-xs opacity-60 hover:opacity-100"
                  title="Clear conversation"
                >
                  Clear
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg transition-colors"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className={cn(
              "flex-1 overflow-y-auto p-3 space-y-3",
              theme === "light" ? "bg-gray-50" : "bg-slate-800/50"
            )}>
              {messages.map(msg => (
                <ChatMessage
                  key={msg.id}
                  message={msg}
                  onNavigate={handleNavigate}
                  theme={theme}
                />
              ))}

              {/* Loading indicator */}
              {isLoading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                    <Loader2 className="w-3.5 h-3.5 text-white animate-spin" />
                  </div>
                  <div className={cn(
                    "rounded-2xl px-3 py-2",
                    theme === "light" ? "bg-white border border-gray-200" : "bg-slate-700 border border-slate-600"
                  )}>
                    <div className="flex gap-1">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }} />
                    </div>
                  </div>
                </div>
              )}

              {/* Quick actions - show only at start */}
              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-2 mt-2"
                >
                  <p className="text-[10px] font-semibold opacity-50 uppercase tracking-wide">Try saying:</p>
                  <div className="grid grid-cols-2 gap-1.5">
                    {QUICK_ACTIONS.map((action, idx) => (
                      <button
                        key={idx}
                        onClick={() => sendMessage(action.text)}
                        className={cn(
                          "text-left text-[11px] p-2 rounded-lg transition-all border hover:scale-[1.02]",
                          theme === "light"
                            ? "bg-white border-gray-200 hover:border-blue-300 hover:bg-blue-50 text-gray-700"
                            : "bg-slate-800 border-slate-700 hover:border-purple-500/50 hover:bg-purple-500/10 text-slate-300"
                        )}
                      >
                        <span className="mr-1">{action.emoji}</span>
                        {action.text}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <form
              onSubmit={handleSubmit}
              className={cn(
                "border-t px-3 py-2.5",
                theme === "light" ? "bg-white border-gray-200" : "bg-slate-900 border-slate-700"
              )}
            >
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask or navigate..."
                  disabled={isLoading}
                  className={cn(
                    "flex-1 px-3 py-2 rounded-xl text-sm outline-none transition-colors",
                    theme === "light"
                      ? "bg-gray-100 border border-gray-200 focus:border-blue-400 text-gray-900 placeholder-gray-400"
                      : "bg-slate-800 border border-slate-700 focus:border-purple-500 text-white placeholder-slate-500"
                  )}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  className={cn(
                    "rounded-xl px-3 py-2 transition-all text-white",
                    input.trim() && !isLoading
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                      : "bg-gray-400 opacity-50 cursor-not-allowed"
                  )}
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              <p className="text-[10px] opacity-40 mt-1.5 text-center">
                AI-powered navigation and answers
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
