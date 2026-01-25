/**
 * RAG-Based ChatWidget Component
 *
 * A modern, production-ready chatbot using Retrieval-Augmented Generation (RAG)
 * with OpenAI API integration for DSU Admissions assistance.
 */

import { useState, useEffect, useRef, useCallback, ReactNode } from "react";
import {
  MessageSquare,
  X,
  Send,
  Loader2,
  AlertCircle,
  RefreshCw,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/providers/theme-provider";

/**
 * Helper function to detect URLs in text and convert them to clickable links
 */
function parseMessageWithLinks(text: string): ReactNode {
  // URL regex pattern - matches http(s):// URLs
  const urlRegex = /(https?:\/\/[^\s]+)/g;

  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let keyCounter = 0;

  // Function to clean trailing punctuation from URLs
  const cleanUrl = (url: string): { clean: string; trailing: string } => {
    // Remove trailing punctuation like . , ; : ! ? ) ] } etc.
    let trailingPunct = "";
    let cleanedUrl = url;

    // Keep removing trailing punctuation one char at a time
    while (cleanedUrl.length > 0 && /[.,;:!?\)\]\}]$/.test(cleanedUrl)) {
      trailingPunct = cleanedUrl[cleanedUrl.length - 1] + trailingPunct;
      cleanedUrl = cleanedUrl.slice(0, -1);
    }

    return { clean: cleanedUrl, trailing: trailingPunct };
  };

  while ((match = urlRegex.exec(text)) !== null) {
    let rawUrl = match[0];
    const { clean: cleanedUrl, trailing: trailingPunct } = cleanUrl(rawUrl);
    const startIndex = match.index;

    // Add text before the URL
    if (startIndex > lastIndex) {
      const textBefore = text.substring(lastIndex, startIndex);
      parts.push(<span key={`text_${keyCounter}`}>{textBefore}</span>);
      keyCounter++;
    }

    // Add the URL as a link
    parts.push(
      <a
        key={`link_${keyCounter}`}
        href={cleanedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline text-blue-400 hover:text-blue-300 font-semibold transition-colors"
      >
        {cleanedUrl}
      </a>,
    );
    keyCounter++;

    // Add trailing punctuation back as plain text if any
    if (trailingPunct) {
      parts.push(<span key={`trail_${keyCounter}`}>{trailingPunct}</span>);
      keyCounter++;
    }

    lastIndex = startIndex + rawUrl.length;
  }

  // Add remaining text after the last URL
  if (lastIndex < text.length) {
    const textAfter = text.substring(lastIndex);
    parts.push(<span key={`text_${keyCounter}`}>{textAfter}</span>);
  }

  // If no URLs were found, just return the original text
  return parts.length === 0 ? text : parts;
}

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  contextCount?: number;
}

const QUICK_REPLIES = [
  "What programs do you offer?",
  "What's the admission process?",
  "Tell me about fees",
  "What are campus facilities?",
  "How about placements?",
  "Scholarship information?",
  "International admissions?",
  "Contact information?",
];

interface RagChatResponse {
  success: boolean;
  message: string;
  contextCount: number;
  sources?: Array<{ id: number; relevanceScore: number }>;
  error?: string;
  details?: string;
}

export function RagChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [sessionId] = useState(() => `session_${Date.now()}`);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  // Auto-scroll to bottom of messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Add initial greeting message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          id: "greeting",
          role: "assistant",
          content:
            "Hello! 👋 I'm your DSU's Buddy for Admission assistance. I can help you with information about programs, fees, admissions, campus facilities, and more. What would you like to know?",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, messages.length]);

  /**
   * Send a message to the RAG chat API
   */
  const sendMessage = useCallback(
    async (messageText: string) => {
      if (!messageText.trim()) return;

      // Add user message to conversation
      const userMessage: Message = {
        id: `msg_${Date.now()}`,
        role: "user",
        content: messageText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);
      setError(null);

      try {
        // Prepare conversation history for context
        const conversationHistory = messages.map((msg) => ({
          role: msg.role,
          content: msg.content,
        }));

        // Call RAG chat API
        const response = await fetch("/api/rag-chat", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: messageText,
            conversationHistory: conversationHistory,
            sessionId: sessionId,
          }),
        });

        const data: RagChatResponse = await response.json();

        if (!response.ok) {
          throw new Error(
            data.details || data.error || "Failed to get response",
          );
        }

        if (data.success && data.message) {
          const assistantMessage: Message = {
            id: `msg_${Date.now()}`,
            role: "assistant",
            content: data.message,
            timestamp: new Date(),
            contextCount: data.contextCount,
          };

          setMessages((prev) => [...prev, assistantMessage]);
        } else {
          throw new Error("Invalid response from server");
        }
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Failed to get response";
        setError(errorMessage);

        // Add error message to chat
        setMessages((prev) => [
          ...prev,
          {
            id: `msg_${Date.now()}`,
            role: "assistant",
            content: `Sorry, I encountered an error: ${errorMessage}. Please try again.`,
            timestamp: new Date(),
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, sessionId],
  );

  /**
   * Handle quick reply selection
   */
  const handleQuickReply = (reply: string) => {
    sendMessage(reply);
  };

  /**
   * Handle form submission
   */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
    }
  };

  /**
   * Clear conversation
   */
  const clearConversation = () => {
    setMessages([
      {
        id: "greeting",
        role: "assistant",
        content:
          "Hello! 👋 I'm your DSU's Buddy for Admission assistance. I can help you with information about programs, fees, admissions, campus facilities, and more. What would you like to know?",
        timestamp: new Date(),
      },
    ]);
    setError(null);
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={cn(
            "rounded-full shadow-2xl hover:shadow-xl transition-all hover:scale-110 p-4",
            theme === "light"
              ? "bg-brand-blue hover:bg-brand-blue/90 text-white"
              : "bg-brand-blue hover:bg-brand-blue/90 text-white",
          )}
          style={{
            position: "fixed",
            bottom: "clamp(6rem, 12vh, 8rem)",
            right: "clamp(1rem, 3vw, 1.5rem)",
            zIndex: 99999,
            display: "block",
            width: "56px",
            height: "56px",
          }}
          aria-label="Open chat"
        >
          <MessageSquare className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "rounded-2xl shadow-2xl flex flex-col",
              theme === "light"
                ? "bg-white border border-gray-200"
                : "bg-slate-900 border border-slate-700",
            )}
            style={{
              position: "fixed",
              bottom: "clamp(6rem, 12vh, 8rem)",
              right: "clamp(1rem, 3vw, 1.5rem)",
              zIndex: 99999,
              width: "clamp(280px, 90vw, 400px)",
              height: "clamp(300px, 70vh, 600px)",
              borderRadius: "clamp(0.75rem, 2vmin, 1rem)",
            }}
          >
            {/* Header */}
            <div
              className={cn(
                "flex items-center justify-between border-b",
                theme === "light"
                  ? "bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
                  : "bg-gradient-to-r from-brand-blue/10 to-brand-blue/5 border-brand-blue/30",
              )}
              style={{
                padding: "clamp(0.75rem, 2vmin, 1rem)",
                borderTopLeftRadius: "clamp(0.75rem, 2vmin, 1rem)",
                borderTopRightRadius: "clamp(0.75rem, 2vmin, 1rem)",
              }}
            >
              <div
                className="flex items-center"
                style={{ gap: "clamp(0.5rem, 2vmin, 0.75rem)" }}
              >
                <div
                  className="rounded-full bg-brand-blue flex items-center justify-center"
                  style={{
                    width: "clamp(2rem, 5vmin, 2.5rem)",
                    height: "clamp(2rem, 5vmin, 2.5rem)",
                  }}
                >
                  <MessageSquare
                    style={{
                      width: "clamp(1rem, 3vmin, 1.5rem)",
                      height: "clamp(1rem, 3vmin, 1.5rem)",
                    }}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3
                    className="font-semibold"
                    style={{ fontSize: "clamp(0.75rem, 2vmin, 0.875rem)" }}
                  >
                    DSU Admissions Bot
                  </h3>
                  <p
                    className="opacity-70"
                    style={{ fontSize: "clamp(0.625rem, 1.5vmin, 0.75rem)" }}
                  >
                    Powered by AI-First
                  </p>
                </div>
              </div>
              <div
                className="flex"
                style={{ gap: "clamp(0.25rem, 1vmin, 0.5rem)" }}
              >
                <button
                  onClick={clearConversation}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  title="Clear conversation"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-white/20 rounded-lg transition-colors"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Messages Container */}
            <div
              className={cn(
                "flex-1 overflow-y-auto space-y-4",
                theme === "light" ? "bg-gray-50" : "bg-slate-800/50",
              )}
              style={{
                padding: "clamp(0.75rem, 2vmin, 1rem)",
              }}
            >
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "flex gap-3 max-w-xs",
                    message.role === "user" ? "ml-auto flex-row-reverse" : "",
                  )}
                >
                  {/* Avatar */}
                  <div
                    className={cn(
                      "rounded-full flex items-center justify-center flex-shrink-0 font-bold",
                      message.role === "user"
                        ? "bg-brand-blue text-white"
                        : "bg-brand-blue text-white",
                    )}
                    style={{
                      width: "clamp(1.75rem, 4vmin, 2rem)",
                      height: "clamp(1.75rem, 4vmin, 2rem)",
                      fontSize: "clamp(0.625rem, 1.5vmin, 0.75rem)",
                    }}
                  >
                    {message.role === "user" ? "You" : "Bot"}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={cn(
                      "rounded-2xl max-w-sm",
                      message.role === "user"
                        ? theme === "light"
                          ? "bg-blue-500 text-white"
                          : "bg-blue-600 text-white"
                        : theme === "light"
                          ? "bg-white border border-gray-200 text-gray-900"
                          : "bg-slate-700 border border-slate-600 text-white",
                    )}
                    style={{
                      padding:
                        "clamp(0.5rem, 1.5vmin, 0.75rem) clamp(0.75rem, 2vmin, 1rem)",
                    }}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {message.role === "assistant"
                        ? parseMessageWithLinks(message.content)
                        : message.content}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-brand-blue text-white flex items-center justify-center flex-shrink-0">
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="rounded-2xl px-4 py-2 bg-gray-200 dark:bg-slate-700">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce" />
                      <div
                        className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.2s" }}
                      />
                      <div
                        className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full animate-bounce"
                        style={{ animationDelay: "0.4s" }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800"
                >
                  <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <p className="text-sm text-red-700 dark:text-red-200">
                    {error}
                  </p>
                </motion.div>
              )}

              {/* Quick Replies - Show when no messages beyond greeting */}
              {messages.length <= 1 && !isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 space-y-2"
                >
                  <p className="text-xs font-semibold opacity-60">
                    Suggested questions:
                  </p>
                  <div className="grid gap-2">
                    {QUICK_REPLIES.slice(0, 4).map((reply, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuickReply(reply)}
                        disabled={isLoading}
                        className={cn(
                          "text-left text-xs p-2 rounded-lg transition-colors border cursor-pointer hover:scale-105 transform",
                          theme === "light"
                            ? "bg-orange-50 border-orange-200 hover:bg-orange-100 text-orange-900"
                            : "bg-orange-900/20 border-orange-700/30 hover:bg-orange-900/40 text-orange-100",
                        )}
                      >
                        {reply}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <form
              onSubmit={handleSubmit}
              className={cn(
                "border-t",
                theme === "light"
                  ? "bg-gray-50 border-gray-200"
                  : "bg-slate-800 border-slate-700",
              )}
              style={{
                padding: "clamp(0.75rem, 2vmin, 1rem)",
              }}
            >
              <div
                className="flex"
                style={{ gap: "clamp(0.25rem, 1vmin, 0.5rem)" }}
              >
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask me anything about DSU..."
                  disabled={isLoading}
                  className={cn(
                    theme === "light"
                      ? "bg-white border-gray-300"
                      : "bg-slate-700 border-slate-600 text-white",
                  )}
                  style={{
                    fontSize: "clamp(0.75rem, 2vmin, 0.875rem)",
                    height: "clamp(2rem, 5vmin, 2.5rem)",
                  }}
                  autoFocus
                />
                <Button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  size="sm"
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                  style={{
                    minHeight: "clamp(2rem, 5vmin, 2.5rem)",
                    padding: "clamp(0.25rem, 1vmin, 0.5rem)",
                  }}
                >
                  <Send
                    style={{
                      width: "clamp(0.875rem, 2.5vmin, 1rem)",
                      height: "clamp(0.875rem, 2.5vmin, 1rem)",
                    }}
                  />
                </Button>
              </div>
              <p
                className="opacity-50"
                style={{
                  fontSize: "clamp(0.625rem, 1.5vmin, 0.75rem)",
                  marginTop: "clamp(0.25rem, 1vmin, 0.5rem)",
                }}
              >
                💡 Ask about programs, fees, admissions, facilities, and more!
              </p>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
