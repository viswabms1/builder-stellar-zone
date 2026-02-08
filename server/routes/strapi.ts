import { RequestHandler } from "express";
import { PageContent, StrapiResponse } from "@shared/api";

/**
 * Strapi Configuration
 */
// Use the local Strapi instance by default
const STRAPI_URL = "http://72.61.225.136:1340";
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

console.log(`[STRAPI] Using URL: ${STRAPI_URL}`);

/**
 * Simple in-memory cache with TTL (Time To Live)
 * In production, use Redis or similar
 */
interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<any>>();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes

/**
 * Get from cache if not expired
 */
function getFromCache<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;

  const age = Date.now() - entry.timestamp;
  if (age > CACHE_TTL) {
    cache.delete(key);
    return null;
  }

  return entry.data;
}

/**
 * Set cache entry
 */
function setCache<T>(key: string, data: T): void {
  cache.set(key, {
    data,
    timestamp: Date.now(),
  });
}

/**
 * Clear cache for a specific pattern
 * Useful when content is updated via webhooks
 */
export function invalidateCache(pattern: string): void {
  for (const key of cache.keys()) {
    if (key.includes(pattern)) {
      cache.delete(key);
    }
  }
}

/**
 * Fetch page content from Strapi by slug
 * Example: /api/page/vision-mission
 */
export const getPageBySlug: RequestHandler = async (req, res) => {
  const { slug } = req.params;
  const locale = (req.query.locale as string) || "en";

  try {
    // Check cache first
    const cacheKey = `page:${slug}:${locale}`;
    const cachedData = getFromCache<StrapiResponse<PageContent>>(cacheKey);

    if (cachedData) {
      console.log(`[CACHE HIT] ${cacheKey}`);
      return res.json(cachedData);
    }

    // Fetch from Strapi
    const query = new URLSearchParams({
      "filters[slug][$eq]": slug,
      populate: "*", // Populate all relations
      "pagination[pageSize]": "1",
      locale: locale,
    });

    const response = await fetch(
      `${STRAPI_URL}/api/pages?${query.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data: StrapiResponse<PageContent[]> = await response.json();

    if (!data.data || data.data.length === 0) {
      return res.status(404).json({
        error: `Page not found: ${slug}`,
      });
    }

    const pageContent = data.data[0];

    // Cache the response
    setCache(cacheKey, { data: pageContent });

    res.json({ data: pageContent });
  } catch (error) {
    console.error("[STRAPI ERROR]", error);
    res.status(500).json({
      error: "Failed to fetch page content",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Fetch pages by content type (university, department, etc.)
 * Example: /api/strapi/pages?contentType=university
 */
export const getPagesByContentType: RequestHandler = async (req, res) => {
  const { contentType } = req.query;
  const locale = (req.query.locale as string) || "en";

  if (!contentType) {
    return res.status(400).json({
      error: "contentType query parameter is required",
    });
  }

  try {
    const cacheKey = `pages:${contentType}:${locale}`;
    const cachedData = getFromCache<StrapiResponse<PageContent[]>>(cacheKey);

    if (cachedData) {
      console.log(`[CACHE HIT] ${cacheKey}`);
      return res.json(cachedData);
    }

    // Fetch from Strapi filtered by contentType
    const query = new URLSearchParams({
      "filters[contentType][$eq]": contentType as string,
      populate: "*",
      locale: locale,
    });

    const response = await fetch(
      `${STRAPI_URL}/api/pages?${query.toString()}`,
      {
        headers: {
          Authorization: `Bearer ${STRAPI_API_TOKEN}`,
          "Content-Type": "application/json",
        },
      },
    );

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data: StrapiResponse<PageContent[]> = await response.json();

    // Cache the response
    setCache(cacheKey, data);

    res.json(data);
  } catch (error) {
    console.error("[STRAPI ERROR]", error);
    res.status(500).json({
      error: "Failed to fetch pages by content type",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Webhook endpoint for cache invalidation when content is published in Strapi
 * Configure this in Strapi: Settings > Webhooks
 * POST /api/strapi/webhook/publish
 */
export const handleStrapiWebhook: RequestHandler = async (req, res) => {
  const { event, data } = req.body;

  // Verify webhook signature (optional but recommended)
  // const signature = req.headers['x-strapi-signature'] as string;
  // if (!verifySignature(signature, req.body)) {
  //   return res.status(401).json({ error: 'Invalid signature' });
  // }

  try {
    if (event === "entry.publish" || event === "entry.update") {
      const slug = data.slug || data.attributes?.slug;
      if (slug) {
        invalidateCache(slug);
        console.log(`[WEBHOOK] Invalidated cache for: ${slug}`);
      }
    }

    res.json({ success: true });
  } catch (error) {
    console.error("[WEBHOOK ERROR]", error);
    res.status(500).json({ error: "Webhook processing failed" });
  }
};

/**
 * Fetch announcements from Strapi
 * Supports filtering by department_code
 * Example: /api/strapi/announcements?department_code=cse
 */
export const getAnnouncements: RequestHandler = async (req, res) => {
  try {
    const departmentCode = req.query.department_code as string | undefined;

    // Build the Strapi URL - fetch all announcements for now (no filter)
    // TODO: Once we see announcement structure, add proper department filtering
    const strapiUrl = `${STRAPI_URL}/api/announcements?pagination[limit]=100&populate=*`;
    console.log(`[ANNOUNCEMENTS] Fetching from: ${strapiUrl}` + (departmentCode ? ` (requested department: ${departmentCode})` : ''));

    const response = await fetch(strapiUrl, {
      headers: {
        "Content-Type": "application/json",
        // Add token if available
        ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
      },
    });

    if (!response.ok) {
      console.error(`[ANNOUNCEMENTS] Error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`[ANNOUNCEMENTS] Error response:`, errorText);
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data = await response.json();
    console.log(`[ANNOUNCEMENTS] Fetched ${data.data?.length || 0} total announcements`);

    if (data.data && data.data.length > 0) {
      console.log(`[ANNOUNCEMENTS] Sample announcement fields:`, Object.keys(data.data[0]));
      console.log(`[ANNOUNCEMENTS] First announcement (all fields):`, JSON.stringify(data.data[0], null, 2));
    } else {
      console.log(`[ANNOUNCEMENTS] No announcements found in Strapi`);
    }

    res.json(data);
  } catch (error) {
    console.error("[ANNOUNCEMENTS ERROR]", error);
    res.status(500).json({
      error: "Failed to fetch announcements",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Proxy for downloading PDF attachments from Strapi
 * Example: /api/strapi/download-pdf?path=/uploads/Version_2_GUIDELINES_ac9bb54826.pdf
 */
export const downloadPdf: RequestHandler = async (req, res) => {
  try {
    const { path } = req.query;

    if (!path) {
      return res.status(400).json({
        error: "path query parameter is required",
      });
    }

    // Ensure path starts with /
    const filePath = typeof path === "string" && path.startsWith("/") ? path : `/${path}`;

    // Construct the full Strapi URL
    const fileUrl = `${STRAPI_URL}${filePath}`;
    console.log(`[PDF DOWNLOAD] Downloading from: ${fileUrl}`);
    console.log(`[PDF DOWNLOAD] Path query param: ${path}`);
    console.log(`[PDF DOWNLOAD] File path after processing: ${filePath}`);
    console.log(`[PDF DOWNLOAD] Using API token: ${STRAPI_API_TOKEN ? 'yes' : 'no'}`);

    const response = await fetch(fileUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        // Add token if available for authentication
        ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
      },
    });

    console.log(`[PDF DOWNLOAD] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[PDF DOWNLOAD] Error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`[PDF DOWNLOAD] Error details: ${errorText}`);
      return res.status(response.status).json({
        error: "Failed to download PDF from Strapi",
        details: errorText,
        statusCode: response.status,
        url: fileUrl,
      });
    }

    // Get the content type and size
    const contentType = response.headers.get("content-type") || "application/pdf";
    const contentLength = response.headers.get("content-length");

    // Extract filename from path
    const filename = filePath.split("/").pop() || "document.pdf";

    // Set response headers
    res.setHeader("Content-Type", contentType);
    res.setHeader("Content-Disposition", `attachment; filename="${filename}"`);
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    // Stream the file
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("[PDF DOWNLOAD ERROR]", error);
    res.status(500).json({
      error: "Failed to download PDF",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Proxy for serving images from Strapi (handles mixed content issue)
 * Example: /api/strapi/image?path=/uploads/Chat_GPT_Image_Jan_19_2026_03_01_29_PM_0eb314053c.png
 */
export const serveImage: RequestHandler = async (req, res) => {
  try {
    const { path } = req.query;

    if (!path) {
      return res.status(400).json({
        error: "path query parameter is required",
      });
    }

    // Ensure path starts with /
    const filePath = typeof path === "string" && path.startsWith("/") ? path : `/${path}`;

    // Construct the full Strapi URL
    const imageUrl = `${STRAPI_URL}${filePath}`;
    console.log(`[IMAGE PROXY] Fetching from: ${imageUrl}`);

    const response = await fetch(imageUrl, {
      method: 'GET',
      credentials: 'include',
      headers: {
        // Add token if available for authentication
        ...(STRAPI_API_TOKEN && { Authorization: `Bearer ${STRAPI_API_TOKEN}` }),
      },
    });

    console.log(`[IMAGE PROXY] Response status: ${response.status}`);

    if (!response.ok) {
      console.error(`[IMAGE PROXY] Error: ${response.status} ${response.statusText}`);
      const errorText = await response.text();
      console.error(`[IMAGE PROXY] Error details: ${errorText}`);
      return res.status(response.status).json({
        error: "Failed to fetch image from Strapi",
        details: errorText,
      });
    }

    // Get the content type
    const contentType = response.headers.get("content-type") || "image/png";
    const contentLength = response.headers.get("content-length");

    // Set response headers
    res.setHeader("Content-Type", contentType);
    res.setHeader("Cache-Control", "public, max-age=3600"); // Cache images for 1 hour
    if (contentLength) {
      res.setHeader("Content-Length", contentLength);
    }

    // Stream the image
    const buffer = await response.arrayBuffer();
    res.send(Buffer.from(buffer));
  } catch (error) {
    console.error("[IMAGE PROXY ERROR]", error);
    res.status(500).json({
      error: "Failed to serve image",
      message: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Health check endpoint for Strapi connection
 */
export const checkStrapiHealth: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/health`, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (response.ok) {
      res.json({ status: "connected", strapi_url: STRAPI_URL });
    } else {
      res.status(503).json({
        status: "error",
        message: "Strapi service unavailable",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Cannot connect to Strapi",
      error: error instanceof Error ? error.message : "Unknown error",
    });
  }
};

/**
 * Fetch Staff/Faculty data from Strapi
 * Endpoint: GET /api/strapi/staffs
 * Query params: ?department_code=mech, ?limit=50, etc.
 */
export const getStaffs: RequestHandler = async (req, res) => {
  try {
    const bypassCache = req.query.cache === "false";
    const limit = (req.query.limit as string) || "100";
    const departmentCode = (req.query.department_code as string) || "";

    // Create a unique cache key per department to avoid returning wrong data
    const cacheKey = departmentCode ? `strapi:staffs:${departmentCode}` : "strapi:staffs:all";

    // Check cache first (unless explicitly bypassed)
    if (!bypassCache) {
      const cachedData = getFromCache<any>(cacheKey);
      if (cachedData) {
        console.log(`[CACHE HIT] ${cacheKey}`);
        return res.json(cachedData);
      }
    }

    // Build query parameters
    const queryParams = new URLSearchParams({
      "pagination[limit]": limit,
      populate: "*", // Populate all relations
    });

    // Add optional department filter if provided
    // Note: Using department.Dept_code to filter by department relation
    if (departmentCode) {
      queryParams.append("filters[department][Dept_code][$eq]", departmentCode);
    }

    // Fetch from Strapi
    const fetchUrl = `${STRAPI_URL}/api/staffs?${queryParams.toString()}`;

    console.log(`[STAFFS] Fetching from: ${fetchUrl}`);

    const response = await fetch(fetchUrl, {
      headers: {
        Authorization: `Bearer ${STRAPI_API_TOKEN}`,
        "Content-Type": "application/json",
      },
    });

    console.log(`[STAFFS] Response status: ${response.status}`);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Strapi API error: ${response.status} ${response.statusText}`,
        errorBody,
      );
      throw new Error(
        `Strapi API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log("[STAFFS] Response data:", JSON.stringify(data, null, 2));

    // Strapi response should have data array
    const staffs = data.data || [];

    const responseData = {
      success: true,
      data: staffs,
      count: staffs.length,
    };

    // Cache the response
    setCache(cacheKey, responseData);

    res.json(responseData);
  } catch (error) {
    console.error("[STAFFS Error]", error);
    res.status(500).json({
      success: false,
      data: [],
      error:
        error instanceof Error ? error.message : "Failed to fetch staffs",
      fallback: true,
    });
  }
};
