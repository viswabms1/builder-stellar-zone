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
    const departmentCode = req.query.department_code as string | undefined;
    const headers: Record<string, string> = { "Content-Type": "application/json" };
    if (STRAPI_API_TOKEN) headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;

    const response = await fetch(
      `${STRAPI_URL}/api/announcements?populate=*&pagination[pageSize]=1000&pagination[page]=1`,
      { headers }
    );

    if (!response.ok) {
      throw new Error(`Strapi error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    if (departmentCode) {
      const filtered = {
        ...data,
        data: (data.data || []).filter((a: any) => {
          const code = (a.department?.Dept_code || a.Department_code || "").toLowerCase();
          return code === departmentCode.toLowerCase();
        }),
      };
      return res.json(filtered);
    }

    res.json(data);
  } catch (error) {
    console.error("[ANNOUNCEMENTS]", error);
    res.status(500).json({
      error: "Failed to fetch announcements",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
}
