import { RequestHandler } from "express";

/**
 * Directus Configuration
 */
const DIRECTUS_URL =
  process.env.DIRECTUS_URL ||
  "https://dsu-website-headless-cms.directus.app";

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

// Clear any cached data on server startup
cache.clear();
console.log("[Directus] Cache cleared on server startup");

/**
 * Get from cache if not expired
 */
function getFromCache<T>(key: string): T | null {
  const entry = cache.get(key);
  if (!entry) return null;

  const age = Date.now() - entry.timestamp;
  if (age > CACHE_TTL) {
    cache.delete(key);
    console.log(`[Directus] Cache expired for: ${key}`);
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
 * Fetch Vision & Mission content from Directus
 * Endpoint: GET /api/directus/vision-mission
 * Query params: ?cache=false to bypass cache (development only)
 */
export const getVisionMission: RequestHandler = async (req, res) => {
  try {
    const cacheKey = "directus:vision-mission";
    const bypassCache = req.query.cache === "false";

    // Check cache first (unless explicitly bypassed)
    if (!bypassCache) {
      const cachedData = getFromCache<any>(cacheKey);

      if (cachedData) {
        console.log(`[CACHE HIT] ${cacheKey}`);
        return res.json(cachedData);
      }
    }

    if (bypassCache) {
      console.log(`[CACHE BYPASS] ${cacheKey}`);
    }

    // Fetch from Directus - adjust item ID and collection name as needed
    // Example: university_info collection, item ID 1
    const fetchUrl = `${DIRECTUS_URL}/items/university_info/1?fields=*.*`;

    console.log(`[Directus API] Fetching from: ${fetchUrl}`);

    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(
      `[Directus API] Response status: ${response.status} ${response.statusText}`,
    );

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        `Directus API error: ${response.status} ${response.statusText}`,
        errorBody,
      );
      throw new Error(
        `Directus API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    console.log("[Directus API] Response data:", JSON.stringify(data, null, 2));

    // Transform Directus response to match our interface
    // Handle both nested (data.data) and flat responses
    const directusData = data.data || data;
    console.log("[Directus API] Extracted directusData:", JSON.stringify(directusData, null, 2));
    console.log("[Directus API] Vision field:", directusData?.Vision);
    console.log("[Directus API] Mission_ field:", directusData?.Mission_);

    const transformedData = {
      id: directusData?.id,
      vision_title: directusData?.vision_title || "Vision",
      vision_description:
        directusData?.Vision ||
        directusData?.vision ||
        directusData?.vision_description ||
        "To be a centre of excellence in education, research & training, innovation & entrepreneurship and to produce citizens with exceptional leadership qualities to serve national and global needs.",
      mission_title: directusData?.mission_title || "Mission",
      mission_description:
        directusData?.Mission_ ||
        directusData?.Mission ||
        directusData?.mission ||
        directusData?.mission_description ||
        "To achieve our objectives in an environment that enhances creativity, innovation and scholarly pursuits while adhering to our vision.",
      core_values: directusData?.core_values || [],
    };

    console.log(
      "[Directus API] Transformed data:",
      JSON.stringify(transformedData, null, 2),
    );

    // Cache the response
    setCache(cacheKey, transformedData);

    res.json({
      success: true,
      data: transformedData,
    });
  } catch (error) {
    console.error("[Directus Vision-Mission Error]", error);
    res.status(500).json({
      success: false,
      error:
        error instanceof Error ? error.message : "Failed to fetch vision-mission content",
      fallback: true, // Signal client to use fallback content
    });
  }
};

/**
 * Check Directus connection health
 * Endpoint: GET /api/directus/health
 */
export const checkDirectusHealth: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${DIRECTUS_URL}/admin`, {
      method: "GET",
    });

    res.json({
      status: response.ok ? "healthy" : "unhealthy",
      directus_url: DIRECTUS_URL,
      response_status: response.status,
    });
  } catch (error) {
    console.error("[Directus Health Check Error]", error);
    res.status(503).json({
      status: "unhealthy",
      directus_url: DIRECTUS_URL,
      error:
        error instanceof Error ? error.message : "Health check failed",
    });
  }
};

/**
 * Clear Directus cache for all entries
 * Endpoint: POST /api/directus/cache/clear
 * This can be called manually to force refresh content
 */
export const clearDirectusCache: RequestHandler = (req, res) => {
  try {
    const cacheKey = "directus:vision-mission";
    cache.delete(cacheKey);
    console.log(`[CACHE CLEARED] ${cacheKey}`);

    res.json({
      success: true,
      message: "Directus cache cleared successfully",
      cleared_key: cacheKey,
    });
  } catch (error) {
    console.error("[Cache Clear Error]", error);
    res.status(500).json({
      success: false,
      error: error instanceof Error ? error.message : "Failed to clear cache",
    });
  }
};
