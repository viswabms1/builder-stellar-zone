/**
 * Vercel Serverless Function: Chat Health Check
 * 
 * GET /api/chat/health
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';

const WORKFLOW_ID = process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.OPENAI_API_KEY;

    res.status(200).json({
        status: "ok",
        service: "DSU ChatKit Session API",
        workflowId: WORKFLOW_ID,
        hasApiKey: !!apiKey,
        integration: "OpenAI ChatKit REST API (Vercel Serverless)",
        timestamp: new Date().toISOString(),
    });
}
