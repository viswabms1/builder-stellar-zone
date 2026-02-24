import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, strapiHeaders, corsHeaders } from "../_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();

  try {
    const response = await fetch(`${STRAPI_URL}/api/health`, {
      headers: strapiHeaders(),
    });

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
