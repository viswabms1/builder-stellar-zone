import { ReactNode } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Parse URLs in text and convert to clickable links
 */
function parseLinks(text: string): ReactNode {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts: ReactNode[] = [];
  let lastIndex = 0;
  let match;
  let key = 0;

  const cleanUrl = (url: string) => {
    let trailing = "";
    let cleaned = url;
    while (cleaned.length > 0 && /[.,;:!?\)\]\}]$/.test(cleaned)) {
      trailing = cleaned[cleaned.length - 1] + trailing;
      cleaned = cleaned.slice(0, -1);
    }
    return { clean: cleaned, trailing };
  };

  while ((match = urlRegex.exec(text)) !== null) {
    const { clean, trailing } = cleanUrl(match[0]);
    if (match.index > lastIndex) {
      parts.push(<span key={`t${key++}`}>{text.substring(lastIndex, match.index)}</span>);
    }
    parts.push(
      <a key={`l${key++}`} href={clean} target="_blank" rel="noopener noreferrer"
        className="underline text-blue-400 hover:text-blue-300 font-semibold transition-colors">
        {clean}
      </a>
    );
    if (trailing) parts.push(<span key={`r${key++}`}>{trailing}</span>);
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(<span key={`t${key++}`}>{text.substring(lastIndex)}</span>);
  }

  return parts.length === 0 ? text : parts;
}

export interface ChatMessageData {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
  navigateTo?: { path: string; label: string };
}

interface ChatMessageProps {
  message: ChatMessageData;
  onNavigate?: (path: string) => void;
  theme: string;
}

export function ChatMessage({ message, onNavigate, theme }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex gap-2 max-w-[85%]", isUser ? "ml-auto flex-row-reverse" : "")}>
      {/* Avatar */}
      <div className={cn(
        "w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-bold",
        isUser ? "bg-blue-500 text-white" : "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
      )}>
        {isUser ? "You" : "AI"}
      </div>

      {/* Content */}
      <div className="space-y-1.5">
        <div className={cn(
          "rounded-2xl px-3 py-2 text-sm leading-relaxed whitespace-pre-wrap",
          isUser
            ? "bg-blue-500 text-white"
            : theme === "light"
              ? "bg-white border border-gray-200 text-gray-900"
              : "bg-slate-700 border border-slate-600 text-white"
        )}>
          {isUser ? message.content : parseLinks(message.content)}
        </div>

        {/* Navigation button if AI suggests a page */}
        {message.navigateTo && onNavigate && (
          <button
            onClick={() => onNavigate(message.navigateTo!.path)}
            className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium transition-all",
              "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30",
              "hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-400/50",
              theme === "light" ? "text-blue-700" : "text-blue-300"
            )}
          >
            <MapPin className="w-3 h-3" />
            Go to {message.navigateTo.label}
            <ArrowRight className="w-3 h-3" />
          </button>
        )}
      </div>
    </div>
  );
}
