/**
 * Vercel Serverless Function: Chat Health Check
 *
 * Simple health check endpoint to verify the API is running.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

const WORKFLOW_ID =
    process.env.OPENAI_WORKFLOW_ID ||
    "wf_693f6f187448819092efc09efa9ab7f6093cf825c93616d8";

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Set CORS headers
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
    );

    // Handle preflight
    if (req.method === "OPTIONS") {
        res.status(200).end();
        return;
    }

    const domainPk = process.env.OPENAI_DOMAIN_PK || "";

    return res.status(200).json({
        status: "ok",
        service: "DSU ChatKit Session API",
        workflowId: WORKFLOW_ID,
        hasDomainPk: !!domainPk,
        hasApiKey: !!process.env.OPENAI_API_KEY,
        integration: "OpenAI ChatKit Widget (Official)",
        platform: "Vercel",
        timestamp: new Date().toISOString(),
    });
}
