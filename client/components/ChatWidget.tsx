/**
 * ChatWidget Component - Production-Ready
 *
 * Uses the OFFICIAL OpenAI ChatKit web component to communicate
 * directly with the DSU Admission Assistant Agent Builder workflow.
 *
 * Flow:
 * 1. Get client_secret + domain_pk from /api/chat/session
 * 2. Render <openai-chatkit> web component with client-secret attribute
 * 3. ChatKit communicates DIRECTLY with OpenAI using your workflow
 *
 * The ChatKit CDN script must be loaded in index.html:
 * <script src="https://cdn.platform.openai.com/deployments/chatkit/chatkit.js" async></script>
 */

import { useState, useEffect, useRef, useCallback } from "react";
import { MessageSquare, X, Bot, Loader2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

// Extend JSX to recognize the openai-chatkit custom element
declare global {
    namespace JSX {
        interface IntrinsicElements {
            "openai-chatkit": React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    "client-secret"?: string;
                },
                HTMLElement
            >;
        }
    }
}

interface SessionData {
    clientSecret: string;
    domainPk: string;
    workflowId: string;
    expiresAt?: string;
}

const QUICK_REPLIES = [
    "Admission procedure?",
    "Engineering courses?",
    "Fee structure?",
    "Campus facilities?",
    "Placements?",
    "Hostel info?",
    "Scholarships?",
    "Application deadline?",
];

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [chatkitReady, setChatkitReady] = useState(false);
    const chatkitRef = useRef<HTMLElement | null>(null);

    // Check if ChatKit custom element is registered
    useEffect(() => {
        const checkChatKit = () => {
            if (customElements.get("openai-chatkit")) {
                setChatkitReady(true);
                console.log("[ChatWidget] openai-chatkit custom element is registered");
            } else {
                console.log("[ChatWidget] Waiting for openai-chatkit registration...");
                setTimeout(checkChatKit, 500);
            }
        };
        checkChatKit();
    }, []);

    /**
     * Get client_secret from backend - tied to Agent Builder workflow
     */
    const initializeChatKitSession = useCallback(async () => {
        setIsLoading(true);
        setError(null);

        try {
            console.log("[ChatWidget] Requesting ChatKit session...");

            const response = await fetch("/api/chat/session", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || data.details || "Failed to create session"
                );
            }

            if (data.clientSecret) {
                setSessionData({
                    clientSecret: data.clientSecret,
                    domainPk: data.domainPk || "",
                    workflowId: data.workflowId,
                    expiresAt: data.expiresAt,
                });
                console.log(
                    "[ChatWidget] ChatKit session ready - workflow:",
                    data.workflowId
                );
                console.log("[ChatWidget] Domain PK:", data.domainPk ? "present" : "not set");
            } else {
                throw new Error("No client secret received from server");
            }
        } catch (err: unknown) {
            const errorMessage =
                err instanceof Error ? err.message : "Failed to connect to chat service";
            console.error("[ChatWidget] Session error:", errorMessage);
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, []);

    // Initialize ChatKit session when widget opens
    useEffect(() => {
        if (isOpen && !sessionData && !isLoading && chatkitReady) {
            initializeChatKitSession();
        }
    }, [isOpen, sessionData, isLoading, chatkitReady, initializeChatKitSession]);

    const resetSession = useCallback(async () => {
        setSessionData(null);
        setError(null);
        await initializeChatKitSession();
    }, [initializeChatKitSession]);

    return (
        <>
            <style>{`
        /* ChatKit custom styling */
        .chatkit-wrapper openai-chatkit {
          --openai-chatkit-background: #1a1a1a;
          --openai-chatkit-text-color: #e5e5e5;
          --openai-chatkit-primary-color: #f97316;
          height: 100%;
          width: 100%;
          display: block;
        }
        
        /* Marquee animation for quick replies */
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-container {
          display: flex;
          animation: marquee 20s linear infinite;
        }
        .marquee-container:hover {
          animation-play-state: paused;
        }
      `}</style>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className={cn(
                            "fixed z-[9999] bg-[#1a1a1a] border border-[#333] rounded-xl shadow-2xl overflow-hidden flex flex-col",
                            "bottom-4 left-4 right-4 h-[calc(100vh-120px)] max-h-[550px]",
                            "sm:bottom-6 sm:right-6 sm:left-auto sm:w-[400px] sm:h-[580px] sm:max-h-[80vh]"
                        )}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#f97316] to-[#ea580c] shrink-0">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                    <Bot className="w-5 h-5 text-white" />
                                </div>
                                <div>
                                    <h2 className="title-xs font-semibold text-white">
                                        DSU Chatbot
                                    </h2>
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                sessionData
                                                    ? "bg-green-400"
                                                    : isLoading
                                                        ? "bg-yellow-400 animate-pulse"
                                                        : error
                                                            ? "bg-red-400"
                                                            : "bg-gray-400"
                                            )}
                                        />
                                        <p className="body-sm text-white/70">
                                            {sessionData
                                                ? "Agent Builder Connected"
                                                : isLoading
                                                    ? "Connecting..."
                                                    : error
                                                        ? "Connection Error"
                                                        : !chatkitReady
                                                            ? "Loading ChatKit..."
                                                            : "Admission Assistant"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={resetSession}
                                    className="w-7 h-7 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                    title="New conversation"
                                >
                                    <RefreshCw className="w-3.5 h-3.5 text-white" />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                                >
                                    <X className="w-4 h-4 text-white" />
                                </button>
                            </div>
                        </div>

                        {/* Chat Content */}
                        <div className="flex-1 overflow-hidden chatkit-wrapper">
                            {!chatkitReady && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <Loader2 className="w-8 h-8 animate-spin text-[#f97316] mx-auto mb-3" />
                                        <p className="body-sm text-[#999]">Loading ChatKit...</p>
                                    </div>
                                </div>
                            )}

                            {chatkitReady && isLoading && (
                                <div className="flex items-center justify-center h-full">
                                    <div className="text-center">
                                        <Loader2 className="w-8 h-8 animate-spin text-[#f97316] mx-auto mb-3" />
                                        <p className="body-sm text-[#999]">
                                            Connecting to Agent Builder...
                                        </p>
                                        <p className="body-sm text-[#666] mt-1">
                                            Your workflow is loading
                                        </p>
                                    </div>
                                </div>
                            )}

                            {chatkitReady && error && (
                                <div className="flex items-center justify-center h-full px-4">
                                    <div className="text-center">
                                        <p className="body-sm text-red-400 mb-3">{error}</p>
                                        <button
                                            onClick={initializeChatKitSession}
                                            className="px-4 py-2 bg-[#f97316] text-white rounded-lg body-sm hover:bg-[#ea580c] transition-colors"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            )}

                            {chatkitReady && sessionData && (
                                <openai-chatkit
                                    ref={chatkitRef as React.RefObject<HTMLElement>}
                                    client-secret={sessionData.clientSecret}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        display: "block",
                                    }}
                                />
                            )}
                        </div>

                        {/* Quick Replies with Marquee */}
                        <div className="px-3 py-2 border-t border-[#2a2a2a] shrink-0 overflow-hidden">
                            <div className="relative overflow-hidden">
                                <div className="marquee-container">
                                    <div className="flex gap-2 shrink-0 pr-2">
                                        {QUICK_REPLIES.map((reply, idx) => (
                                            <button
                                                key={`first-${idx}`}
                                                className="body-sm px-3 py-1.5 rounded-full bg-[#2a2a2a] text-[#999] border border-[#333] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all whitespace-nowrap cursor-pointer"
                                            >
                                                {reply}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 shrink-0 pr-2">
                                        {QUICK_REPLIES.map((reply, idx) => (
                                            <button
                                                key={`second-${idx}`}
                                                className="body-sm px-3 py-1.5 rounded-full bg-[#2a2a2a] text-[#999] border border-[#333] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all whitespace-nowrap cursor-pointer"
                                            >
                                                {reply}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* FAB */}
            <motion.button
                animate={{ scale: isOpen ? 0 : 1, opacity: isOpen ? 0 : 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(true)}
                className={cn(
                    "fixed z-[9998] w-14 h-14 rounded-full shadow-lg flex items-center justify-center",
                    "bg-gradient-to-r from-[#f97316] to-[#ea580c] text-white",
                    "bottom-4 right-4 sm:bottom-6 sm:right-6",
                    isOpen && "pointer-events-none"
                )}
            >
                <MessageSquare className="w-6 h-6" />
            </motion.button>
        </>
    );
}
