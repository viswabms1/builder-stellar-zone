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
    const limit = (req.query.limit as string) || "100";
    const departmentCode = (req.query.department_code as string) || "";
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const queryParams = new URLSearchParams({ "pagination[limit]": limit, populate: "*" });
    if (departmentCode) {
      queryParams.append("filters[department][Dept_code][$eq]", departmentCode);
    }

    const response = await fetch(`${STRAPI_URL}/api/staffs?${queryParams.toString()}`, { headers });

    if (!response.ok) {
      throw new Error(`Strapi error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    const staffs = data.data || [];

    res.json({ success: true, data: staffs, count: staffs.length });
  } catch (error) {
    console.error("[STAFFS]", error);
    res.status(500).json({
      success: false, data: [],
      error: error instanceof Error ? error.message : "Failed to fetch staffs",
    });
  }
}
