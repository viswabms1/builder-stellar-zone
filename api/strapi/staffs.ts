import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, strapiHeaders, corsHeaders } from "../_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const limit = (req.query.limit as string) || "100";
    const departmentCode = (req.query.department_code as string) || "";

    const queryParams = new URLSearchParams({
      "pagination[limit]": limit,
      populate: "*",
    });

    if (departmentCode) {
      queryParams.append("filters[department][Dept_code][$eq]", departmentCode);
    }

    const response = await fetch(`${STRAPI_URL}/api/staffs?${queryParams.toString()}`, {
      headers: strapiHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const staffs = data.data || [];

    res.json({
      success: true,
      data: staffs,
      count: staffs.length,
    });
  } catch (error) {
    console.error("[STAFFS]", error);
    res.status(500).json({
      success: false,
      data: [],
      error: error instanceof Error ? error.message : "Failed to fetch staffs",
      fallback: true,
    });
  }
}
