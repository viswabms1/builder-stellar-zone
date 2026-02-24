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
    const { slug } = req.query;
    const locale = (req.query.locale as string) || "en";

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ error: "slug parameter is required" });
    }

    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      populate: "*",
      "pagination[pageSize]": "1",
      locale,
    });

    const response = await fetch(`${STRAPI_URL}/api/pages?${query.toString()}`, { headers });

    if (!response.ok) {
      throw new Error(`Strapi error: ${response.statusText}`);
    }

    const data = await response.json();

    if (!data.data || data.data.length === 0) {
      return res.status(404).json({ error: `Page not found: ${slug}` });
    }

    res.json({ data: data.data[0] });
  } catch (error) {
    console.error("[PAGE BY SLUG]", error);
    res.status(500).json({
      error: "Failed to fetch page content",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
