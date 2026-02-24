import type { VercelRequest, VercelResponse } from "@vercel/node";

const STRAPI_URL = "http://72.61.225.136:1340";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { path } = req.query;
    if (!path) return res.status(400).json({ error: "path query parameter is required" });

    const filePath = typeof path === "string" && path.startsWith("/") ? path : `/${path}`;
    const fileUrl = `${STRAPI_URL}${filePath}`;

    const headers: Record<string, string> = {};
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const response = await fetch(fileUrl, { method: "GET", headers });

    if (!response.ok) {
      return res.status(response.status).json({ error: "Failed to download PDF" });
    }

    const contentType = response.headers.get("content-type") || "application/pdf";
    const contentLength = response.headers.get("content-length");
    const filename = filePath.split("/").pop() || "document.pdf";

    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    if (contentLength) res.setHeader("Content-Length", contentLength);

    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("[PDF DOWNLOAD]", error);
    res.status(500).json({
      error: "Failed to download PDF",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
