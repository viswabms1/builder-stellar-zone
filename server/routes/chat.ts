/**
 * Chat Session API for DSU Admission Assistant
 *
 * Production-ready session endpoint for OpenAI ChatKit.
 * Creates sessions tied to the Agent Builder workflow.
 *
 * Flow:
 * 1. Frontend calls POST /api/chat/session
 * 2. Backend creates ChatKit session with OpenAI API
 * 3. Returns client_secret + domain_pk to frontend
 * 4. Frontend uses these with <openai-chatkit> web component
 * 5. ChatKit communicates DIRECTLY with OpenAI using your workflow
 *
 * Workflow: wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8
 */

import OpenAI from "openai";
import { Request, Response } from "express";

// Configuration from environment (lazy loaded)
const WORKFLOW_ID =
    process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";

// Lazy initialization of OpenAI client to avoid startup errors
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    return openai;
}

/**
 * Create a ChatKit session connected to the Agent Builder workflow
 *
 * Returns client_secret and domain_pk for the frontend ChatKit widget.
 */
export const handleSessionInit = async (req: Request, res: Response) => {
    try {
        // Validate configuration
        if (!process.env.OPENAI_API_KEY) {
            console.error("[ChatKit] OPENAI_API_KEY is not configured");
            return res.status(500).json({
                error: "Server configuration error",
                details: "OpenAI API key not configured",
            });
        }

        const domainPk = process.env.OPENAI_DOMAIN_PK || "";

        console.log(`[ChatKit] Creating session for workflow: ${WORKFLOW_ID}`);

        // Generate unique user ID for this session
        const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        // Create ChatKit session using the official API
        // This connects the session to YOUR Agent Builder workflow
        const client = getOpenAIClient();
        const session = await (client as any).beta.chatkit.sessions.create({
            user: userId,
            workflow: {
                id: WORKFLOW_ID,
            },
        });

        if (!session?.client_secret) {
            console.error("[ChatKit] No client_secret in session response");
            return res.status(500).json({
                error: "Failed to create session",
                details: "Invalid session response from OpenAI",
            });
        }

        console.log(`[ChatKit] Session created for user: ${userId}`);
        console.log(
            `[ChatKit] Client secret obtained (expires: ${session.expires_at})`
        );

        // Return session data to frontend
        res.json({
            clientSecret: session.client_secret,
            domainPk: domainPk,
            workflowId: WORKFLOW_ID,
            expiresAt: session.expires_at,
            userId: userId,
        });
    } catch (error: any) {
        console.error("[ChatKit] Session creation error:", error?.message || error);

        // Handle specific OpenAI errors
        if (error?.status === 401) {
            return res.status(500).json({
                error: "Authentication failed",
                details: "Invalid OpenAI API key",
            });
        }

        if (error?.status === 404) {
            return res.status(500).json({
                error: "Workflow not found",
                details: `Workflow ${WORKFLOW_ID} does not exist or is not accessible`,
                workflowId: WORKFLOW_ID,
            });
        }

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
    const domainPk = process.env.OPENAI_DOMAIN_PK || "";
    res.json({
        status: "ok",
        service: "DSU ChatKit Session API",
        workflowId: WORKFLOW_ID,
        hasDomainPk: !!domainPk,
        integration: "OpenAI ChatKit Widget (Official)",
        timestamp: new Date().toISOString(),
    });
};
