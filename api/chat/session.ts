/**
 * Vercel Serverless Function: Chat Session API
 *
 * Creates ChatKit sessions tied to the Agent Builder workflow.
 * This is the Vercel equivalent of server/routes/chat.ts
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// Configuration from environment
const WORKFLOW_ID =
    process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";

// Lazy initialization of OpenAI client
let openai: OpenAI | null = null;

function getOpenAIClient(): OpenAI {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
    return openai;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // Handle preflight
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    // Only allow POST
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

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
        console.log(`[ChatKit] Client secret obtained (expires: ${session.expires_at})`);

        // Return session data to frontend
        return res.status(200).json({
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
        return res.status(500).json({
            error: "Failed to create ChatKit session",
            details: error?.message || "Unknown error",
            workflowId: WORKFLOW_ID,
        });
    }
}
