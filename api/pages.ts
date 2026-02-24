import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, strapiHeaders, corsHeaders } from "./_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { contentType } = req.query;
    const locale = (req.query.locale as string) || "en";

    if (!contentType) {
      return res.status(400).json({ error: "contentType query parameter is required" });
    }

    const query = new URLSearchParams({
      "filters[contentType][$eq]": contentType as string,
      populate: "*",
      locale,
    });

    const response = await fetch(`${STRAPI_URL}/api/pages?${query.toString()}`, {
      headers: strapiHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error("[PAGES]", error);
    res.status(500).json({
      error: "Failed to fetch pages by content type",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
