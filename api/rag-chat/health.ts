/**
 * Vercel Serverless Function: RAG Chat Health Check
 *
 * Diagnostic endpoint to verify the RAG chat API is properly configured.
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  const hasApiKey = !!process.env.OPENAI_API_KEY;

  return res.status(200).json({
    status: "ok",
    service: "DSU RAG Chat API",
    platform: "Vercel Serverless",
    configuration: {
      openaiApiKey: hasApiKey ? "configured" : "NOT CONFIGURED ⚠️",
      model: "gpt-4o-mini",
      temperature: 0,
      maxTokens: 1000,
      deterministic: true,
    },
    features: {
      ragEnabled: true,
      knowledgeBase: "embedded",
      contextRetrieval: "keyword-based similarity",
    },
    endpoints: {
      chat: "POST /api/rag-chat",
      health: "GET /api/rag-chat/health",
    },
    timestamp: new Date().toISOString(),
    message: hasApiKey
      ? "✅ RAG Chat API is ready to serve requests"
      : "⚠️ OPENAI_API_KEY environment variable is not set. Please add it in Vercel project settings.",
  });
}
