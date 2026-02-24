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
    const { contentType } = req.query;
    const locale = (req.query.locale as string) || "en";

    if (!contentType) {
      return res.status(400).json({ error: "contentType query parameter is required" });
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const query = new URLSearchParams({
      "filters[contentType][$eq]": contentType as string,
      populate: "*",
      locale,
    });

    const response = await fetch(`${STRAPI_URL}/api/pages?${query.toString()}`, { headers });

    if (!response.ok) {
      throw new Error(`Strapi error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("[PAGES]", error);
    res.status(500).json({
      error: "Failed to fetch pages",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
