/**
 * Vercel Serverless Function: Chat Session API
 * 
 * Creates ChatKit sessions tied to the Agent Builder workflow.
 * POST /api/chat/session
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

const WORKFLOW_ID = process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";
const CHATKIT_API_URL = "https://api.openai.com/v1/chatkit/sessions";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const apiKey = process.env.OPENAI_API_KEY;

        if (!apiKey) {
            console.error("[ChatKit] OPENAI_API_KEY is not configured");
            return res.status(500).json({
                error: "Server configuration error",
                details: "OpenAI API key not configured",
            });
        }

        console.log(`[ChatKit] Creating session for workflow: ${WORKFLOW_ID}`);

        const userId = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;

        const response = await fetch(CHATKIT_API_URL, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${apiKey}`,
                "Content-Type": "application/json",
                "OpenAI-Beta": "chatkit_beta=v1",
            },
            body: JSON.stringify({
                user: userId,
                workflow: { id: WORKFLOW_ID },
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
            console.error("[ChatKit] No client_secret in response:", data);
            return res.status(500).json({
                error: "Failed to create session",
                details: "Invalid session response from OpenAI",
            });
        }

        console.log(`[ChatKit] Session created for user: ${userId}`);

        // Get domain public key for ChatKit domain verification
        const domainPk = process.env.OPENAI_DOMAIN_PK || "";

        res.status(200).json({
            clientSecret: data.client_secret,
            domainPk: domainPk,
            workflowId: WORKFLOW_ID,
            expiresAt: data.expires_at,
            userId: userId,
        });
    } catch (error: any) {
        console.error("[ChatKit] Session creation error:", error?.message || error);
        res.status(500).json({
            error: "Failed to create ChatKit session",
            details: error?.message || "Unknown error",
            workflowId: WORKFLOW_ID,
        });
    }
}
