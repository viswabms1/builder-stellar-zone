import type { VercelRequest, VercelResponse } from "@vercel/node";
import { STRAPI_URL, strapiHeaders, corsHeaders } from "../_strapi-config";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  corsHeaders(res);
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "GET") return res.status(405).json({ error: "Method not allowed" });

  try {
    const departmentCode = req.query.department_code as string | undefined;

    const query = "?populate=*&pagination[pageSize]=1000&pagination[page]=1";
    const response = await fetch(`${STRAPI_URL}/api/announcements${query}`, {
      headers: strapiHeaders(),
    });

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

    // Filter by department if specified
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
