/**
 * Shared Strapi configuration for Vercel serverless functions.
 * File prefixed with _ so Vercel doesn't treat it as an endpoint.
 */

export const STRAPI_URL = "http://72.61.225.136:1340";
export const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || "";

export function strapiHeaders(): Record<string, string> {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };
  if (STRAPI_API_TOKEN) {
    headers["Authorization"] = `Bearer ${STRAPI_API_TOKEN}`;
  }
  return headers;
}

export function corsHeaders(res: any) {
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
}
