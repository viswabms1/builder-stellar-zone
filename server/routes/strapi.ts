import { RequestHandler } from 'express';
import { PageContent, StrapiResponse } from '@shared/api';

/**
 * Strapi Configuration
 */
const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || '';

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
  const locale = req.query.locale as string || 'en';

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
      'filters[slug][$eq]': slug,
      'populate': '*', // Populate all relations
      'pagination[pageSize]': '1',
      'locale': locale,
    });

    const response = await fetch(
      `${STRAPI_URL}/api/pages?${query.toString()}`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
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
    console.error('[STRAPI ERROR]', error);
    res.status(500).json({
      error: 'Failed to fetch page content',
      message: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};

/**
 * Fetch pages by content type (university, department, etc.)
 * Example: /api/strapi/pages?contentType=university
 */
export const getPagesByContentType: RequestHandler = async (req, res) => {
  const { contentType } = req.query;
  const locale = req.query.locale as string || 'en';

  if (!contentType) {
    return res.status(400).json({
      error: 'contentType query parameter is required',
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
      'filters[contentType][$eq]': contentType as string,
      'populate': '*',
      'locale': locale,
    });

    const response = await fetch(
      `${STRAPI_URL}/api/pages?${query.toString()}`,
      {
        headers: {
          'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Strapi API error: ${response.statusText}`);
    }

    const data: StrapiResponse<PageContent[]> = await response.json();

    // Cache the response
    setCache(cacheKey, data);

    res.json(data);
  } catch (error) {
    console.error('[STRAPI ERROR]', error);
    res.status(500).json({
      error: 'Failed to fetch pages by content type',
      message: error instanceof Error ? error.message : 'Unknown error',
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
    if (event === 'entry.publish' || event === 'entry.update') {
      const slug = data.slug || data.attributes?.slug;
      if (slug) {
        invalidateCache(slug);
        console.log(`[WEBHOOK] Invalidated cache for: ${slug}`);
      }
    }

    res.json({ success: true });
  } catch (error) {
    console.error('[WEBHOOK ERROR]', error);
    res.status(500).json({ error: 'Webhook processing failed' });
  }
};

/**
 * Health check endpoint for Strapi connection
 */
export const checkStrapiHealth: RequestHandler = async (req, res) => {
  try {
    const response = await fetch(`${STRAPI_URL}/api/health`, {
      headers: {
        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
      },
    });

    if (response.ok) {
      res.json({ status: 'connected', strapi_url: STRAPI_URL });
    } else {
      res.status(503).json({ 
        status: 'error', 
        message: 'Strapi service unavailable' 
      });
    }
  } catch (error) {
    res.status(500).json({ 
      status: 'error', 
      message: 'Cannot connect to Strapi',
      error: error instanceof Error ? error.message : 'Unknown error',
    });
  }
};
