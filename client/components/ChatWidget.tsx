/**
 * ChatWidget Component - Production-Ready
 *
 * Uses the OFFICIAL @openai/chatkit-react library to communicate
 * directly with the DSU Admission Assistant Agent Builder workflow.
 *
 * This implementation uses the HostedApiConfig approach with a
 * getClientSecret function that fetches tokens from our backend.
 *
 * Flow:
 * 1. useChatKit hook calls getClientSecret when needed
 * 2. getClientSecret fetches a new token from /api/chat/session
 * 3. ChatKit renders and communicates with OpenAI using the workflow
 */

import { useState, useCallback } from "react";
import { ChatKit, useChatKit } from "@openai/chatkit-react";
import { MessageSquare, X, Bot, Loader2, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

/**
 * Fetches a new client secret from our backend API.
 * This is called by ChatKit when it needs a token (initial load or refresh).
 */
async function fetchClientSecret(): Promise<string> {
    console.log("[ChatWidget] Fetching client secret from backend...");

    const response = await fetch("/api/chat/session", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
    });

    const data = await response.json();

    if (!response.ok) {
        const errorMessage = data.error || data.details || "Failed to create session";
        console.error("[ChatWidget] API error:", errorMessage);
        throw new Error(errorMessage);
    }

    if (!data.clientSecret) {
        throw new Error("No client secret received from server");
    }

    console.log("[ChatWidget] Client secret obtained successfully");
    return data.clientSecret;
}

/**
 * Inner ChatKit component that uses the useChatKit hook.
 * Separated to allow conditional rendering while maintaining hook rules.
 */
function ChatKitPanel({
    onError,
    onReady,
}: {
    onError: (error: Error) => void;
    onReady: () => void;
}) {
    const { control } = useChatKit({
        api: {
            getClientSecret: async (_currentSecret: string | null) => {
                return await fetchClientSecret();
            },
        },
        onReady: () => {
            console.log("[ChatWidget] ChatKit is ready");
            onReady();
        },
        onError: (event: { error: Error }) => {
            console.error("[ChatWidget] ChatKit error:", event.error);
            onError(event.error);
        },
    });

    return (
        <ChatKit
            control={control}
            className="h-full w-full"
            style={{
                height: "100%",
                width: "100%",
                display: "block",
                ["--openai-chatkit-background" as string]: "#1a1a1a",
                ["--openai-chatkit-text-color" as string]: "#e5e5e5",
                ["--openai-chatkit-primary-color" as string]: "#f97316",
            }}
        />
    );
}

export function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false);
    const [isConnected, setIsConnected] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [key, setKey] = useState(0); // Used to force re-mount ChatKit

    const handleError = useCallback((err: Error) => {
        setError(err.message);
        setIsConnected(false);
    }, []);

    const handleReady = useCallback(() => {
        setIsConnected(true);
        setError(null);
    }, []);

    const resetChat = useCallback(() => {
        setKey((k) => k + 1);
        setIsConnected(false);
        setError(null);
        console.log("[ChatWidget] Chat reset - new session will be created");
    }, []);

    return (
        <>
            <style>{`
                /* ChatKit custom styling */
                .chatkit-wrapper {
                    height: 100%;
                    width: 100%;
                    display: flex;
                    flex-direction: column;
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
                                    <h2 className="font-semibold text-white text-sm">
                                        DSU Chatbot
                                    </h2>
                                    <div className="flex items-center gap-1.5">
                                        <span
                                            className={cn(
                                                "w-1.5 h-1.5 rounded-full",
                                                isConnected
                                                    ? "bg-green-400"
                                                    : error
                                                        ? "bg-red-400"
                                                        : "bg-yellow-400 animate-pulse"
                                            )}
                                        />
                                        <p className="text-[10px] text-white/70">
                                            {isConnected
                                                ? "Agent Builder Connected"
                                                : error
                                                    ? "Connection Error"
                                                    : "Connecting..."}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={resetChat}
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
                            {error ? (
                                <div className="flex items-center justify-center h-full px-4">
                                    <div className="text-center">
                                        <p className="text-sm text-red-400 mb-3">{error}</p>
                                        <button
                                            onClick={resetChat}
                                            className="px-4 py-2 bg-[#f97316] text-white rounded-lg text-sm hover:bg-[#ea580c] transition-colors"
                                        >
                                            Try Again
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <ChatKitPanel
                                    key={key}
                                    onError={handleError}
                                    onReady={handleReady}
                                />
                            )}
                        </div>

                        {/* Quick Replies with Marquee */}
                        <div className="px-3 py-2 border-t border-[#2a2a2a] shrink-0 overflow-hidden">
                            <div className="relative overflow-hidden">
                                <div className="marquee-container">
                                    <div className="flex gap-2 shrink-0 pr-2">
                                        {[
                                            "Admission procedure?",
                                            "Engineering courses?",
                                            "Fee structure?",
                                            "Campus facilities?",
                                            "Placements?",
                                            "Hostel info?",
                                            "Scholarships?",
                                            "Application deadline?",
                                        ].map((reply, idx) => (
                                            <button
                                                key={`first-${idx}`}
                                                className="text-xs px-3 py-1.5 rounded-full bg-[#2a2a2a] text-[#999] border border-[#333] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all whitespace-nowrap cursor-pointer"
                                            >
                                                {reply}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="flex gap-2 shrink-0 pr-2">
                                        {[
                                            "Admission procedure?",
                                            "Engineering courses?",
                                            "Fee structure?",
                                            "Campus facilities?",
                                            "Placements?",
                                            "Hostel info?",
                                            "Scholarships?",
                                            "Application deadline?",
                                        ].map((reply, idx) => (
                                            <button
                                                key={`second-${idx}`}
                                                className="text-xs px-3 py-1.5 rounded-full bg-[#2a2a2a] text-[#999] border border-[#333] hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all whitespace-nowrap cursor-pointer"
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
