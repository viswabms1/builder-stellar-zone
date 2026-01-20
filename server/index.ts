import dotenv from "dotenv";
import path from "path";

// Explicitly load .env from project root (works in both Vite dev and production)
dotenv.config({ path: path.resolve(process.cwd(), ".env") });
import cors from "cors";
import express from "express";
import cookieParser from "cookie-parser";
import { handleDemo } from "./routes/demo";
import { handleSessionInit, handleHealthCheck } from "./routes/chat";

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

  return app;
}
