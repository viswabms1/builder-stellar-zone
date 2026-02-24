import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, STRAPI_API_TOKEN, corsHeaders } from "../_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { path } = req.query;
    if (!path) {
      return res.status(400).json({ error: "path query parameter is required" });
    }

    const filePath = typeof path === "string" && path.startsWith("/") ? path : `/${path}`;
    const imageUrl = `${STRAPI_URL}${filePath}`;

    const headers: Record<string, string> = {};
    if (STRAPI_API_TOKEN) {
      headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
    }

    const response = await fetch(imageUrl, { method: "GET", headers });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to fetch image from Strapi" });
    }

    const contentType = response.headers.get("content-type") || "image/png";
    const contentLength = response.headers.get("content-length");

    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=3600");
    if (contentLength) res.setHeader("Content-Length", contentLength);

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("[IMAGE PROXY]", error);
    res.status(500).json({
      error: "Failed to serve image",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
