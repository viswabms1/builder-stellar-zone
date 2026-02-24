import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRAPI_URL = "http://72.61.225.136:1340";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const headers: Record<string, string> = {};
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const response = await fetch(`${STRAPI_URL}/api/health`, { headers });

    if (response.ok) {
      res.json({ status: "connected", strapi_url: STRAPI_URL });
    } else {
      res.status(503).json({ status: "error", message: "Strapi service unavailable" });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Cannot connect to Strapi",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
