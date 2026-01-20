/**
 * Chat Session API for DSU Admission Assistant
 *
 * Production-ready session endpoint for OpenAI ChatKit.
 * Creates sessions tied to the Agent Builder workflow.
 *
 * Flow:
 * 1. Frontend calls POST /api/chat/session
 * 2. Backend creates ChatKit session via OpenAI REST API
 * 3. Returns client_secret to frontend
 * 4. Frontend uses client_secret with <openai-chatkit> web component
 * 5. ChatKit communicates DIRECTLY with OpenAI using your workflow
 *
 * Workflow: wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8
 */

import { Request, Response } from "express";

// Configuration from environment
const WORKFLOW_ID =
    process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";

const CHATKIT_API_URL = "https://api.openai.com/v1/chatkit/sessions";

/**
 * Create a ChatKit session connected to the Agent Builder workflow
 *
 * Uses the official ChatKit Sessions REST API:
 * POST https://api.openai.com/v1/chatkit/sessions
 * 
 * Returns client_secret for the frontend ChatKit widget.
 */
export const handleSessionInit = async (req: Request, res: Response) => {
    try {
        const apiKey = process.env.OPENAI_API_KEY;

        // Validate configuration
        if (!apiKey) {
            console.error("[ChatKit] OPENAI_API_KEY is not configured");
            console.error("[ChatKit] Available env vars:", Object.keys(process.env).filter(k => k.startsWith('OPENAI')));
            return res.status(500).json({
                error: "Server configuration error",
                details: "OpenAI API key not configured",
            });
        }

        console.log(`[ChatKit] Creating session for workflow: ${WORKFLOW_ID}`);
        console.log(`[ChatKit] API Key present: ${apiKey ? 'Yes (length: ' + apiKey.length + ')' : 'No'}`);

        // Generate unique user ID for this session
        const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        // Create ChatKit session using the official REST API
        // Reference: https://platform.openai.com/docs/api-reference/chatkit-sessions/create
        const response = await fetch(CHATKIT_API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "OpenAI-Beta": "chatkit_beta=v1",
            },
            body: JSON.stringify({
                user: userId,
                workflow: {
                    id: WORKFLOW_ID,
                },
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("[ChatKit] API error:", data);
            return res.status(response.status).json({
                error: data.error?.message || "Failed to create session",
                details: data.error?.type || "API error",
                workflowId: WORKFLOW_ID,
            });
        }

        if (!data?.client_secret) {
            console.error("[ChatKit] No client_secret in session response:", data);
            return res.status(500).json({
                error: "Failed to create session",
                details: "Invalid session response from OpenAI",
            });
        }

        console.log(`[ChatKit] Session created for user: ${userId}`);
        console.log(`[ChatKit] Client secret obtained (expires: ${data.expires_at})`);

        // Return session data to frontend
        res.json({
            clientSecret: data.client_secret,
            workflowId: WORKFLOW_ID,
            expiresAt: data.expires_at,
            userId: userId,
        });
    } catch (error: any) {
        console.error("[ChatKit] Session creation error:", error?.message || error);

        // Generic error
        res.status(500).json({
            error: "Failed to create ChatKit session",
            details: error?.message || "Unknown error",
            workflowId: WORKFLOW_ID,
        });
    }
};

/**
 * Health check endpoint
 */
export const handleHealthCheck = async (_req: Request, res: Response) => {
    const apiKey = process.env.OPENAI_API_KEY;
    res.json({
        status: "ok",
        service: "DSU ChatKit Session API",
        workflowId: WORKFLOW_ID,
        hasApiKey: !!apiKey,
        apiKeyLength: apiKey?.length || 0,
        integration: "OpenAI ChatKit REST API (Official)",
        timestamp: new Date().toISOString(),
    });
};
