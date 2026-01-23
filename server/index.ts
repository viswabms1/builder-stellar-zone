import "dotenv/config";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { handleDemo } from "./routes/demo";
import { handleSessionInit, handleHealthCheck } from "./routes/chat";
import { handleRagChat, handleRagHealthCheck } from "./routes/rag-chat";
import { getPageBySlug, getPagesByContentType, handleStrapiWebhook, checkStrapiHealth } from "./routes/strapi";

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

  // Webhook for Strapi cache invalidation
  // Configure in Strapi: Settings > Webhooks > Add Webhook
  // POST /api/strapi/webhook/publish
  app.post("/api/strapi/webhook/publish", handleStrapiWebhook);

  // Health check for Strapi connection
  // Usage: GET /api/strapi/health
  app.get("/api/strapi/health", checkStrapiHealth);

  return app;
}
