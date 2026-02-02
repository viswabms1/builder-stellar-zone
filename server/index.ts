import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleDemo } from "./routes/demo";
import { handleSessionInit, handleHealthCheck } from "./routes/chat";
import { handleRagChat, handleRagHealthCheck } from "./routes/rag-chat";
import {
  getPageBySlug,
  getPagesByContentType,
  handleStrapiWebhook,
  checkStrapiHealth,
  getAnnouncements as getStrapiAnnouncements,
  downloadPdf,
  serveImage,
  getStaffs,
} from "./routes/strapi";

// CRITICAL: Force override of cached environment variables
// This ensures that environment variables set via DevServerControl take precedence
// over any cached values in the Docker container
if (process.env.OPENAI_API_KEY === "REPLACE_ENV.OPENAI_API_KEY") {
  // This placeholder means the secure key should be injected by the system
  console.log(
    "[Server] Detected REPLACE_ENV placeholder - awaiting system injection",
  );
}

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors({ credentials: true, origin: true }));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // ChatKit Session endpoint - creates session tied to Agent Builder workflow
  // The actual chat is handled by ChatKitWidget on frontend
  app.post("/api/chat/session", handleSessionInit);
  app.get("/api/chat/health", handleHealthCheck);

  // RAG Chat endpoint - new implementation using knowledge base
  app.post("/api/rag-chat", handleRagChat);
  app.get("/api/rag-chat/health", handleRagHealthCheck);

  // ============================================
  // STRAPI CMS INTEGRATION ROUTES
  // ============================================

  // Fetch page content by slug
  // Usage: GET /api/page/vision-mission?locale=en
  app.get("/api/page/:slug", getPageBySlug);

  // Fetch pages by content type (university, engineering, etc.)
  // Usage: GET /api/pages?contentType=university&locale=en
  app.get("/api/pages", getPagesByContentType);

  // Webhook for Strapi cache invalidation
  // Configure in Strapi: Settings > Webhooks > Add Webhook
  // POST /api/strapi/webhook/publish
  app.post("/api/strapi/webhook/publish", handleStrapiWebhook);

  // Health check for Strapi connection
  // Usage: GET /api/strapi/health
  app.get("/api/strapi/health", checkStrapiHealth);

  // Fetch Announcements from Strapi
  // Usage: GET /api/strapi/announcements or /api/strapi/announcements?department_code=cse
  app.get("/api/strapi/announcements", getStrapiAnnouncements);

  // Download PDF from Strapi (proxy to handle network isolation)
  // Usage: GET /api/strapi/download-pdf?path=/uploads/Version_2_GUIDELINES_ac9bb54826.pdf
  app.get("/api/strapi/download-pdf", downloadPdf);

  // Serve images from Strapi (proxy to handle mixed content HTTPS/HTTP issue)
  // Usage: GET /api/strapi/image?path=/uploads/Chat_GPT_Image_Jan_19_2026_03_01_29_PM_0eb314053c.png
  app.get("/api/strapi/image", serveImage);

  return app;
}
