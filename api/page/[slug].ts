import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, strapiHeaders, corsHeaders } from "../_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { slug } = req.query;
    const locale = (req.query.locale as string) || "en";

    if (!slug || typeof slug !== "string") {
      return res.status(400).json({ error: "slug parameter is required" });
    }

    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      populate: "*",
      "pagination[pageSize]": "1",
      locale,
    });

    const response = await fetch(`${STRAPI_URL}/api/pages?${query.toString()}`, {
      headers: strapiHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
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
