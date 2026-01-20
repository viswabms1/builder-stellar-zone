/**
 * RAG-Based Chat Endpoint for DSU Chatbot
 * 
 * Uses OpenAI API with Retrieval-Augmented Generation (RAG)
 * to answer questions based on the DSU knowledge base.
 * 
 * Flow:
 * 1. User sends a message
 * 2. System retrieves relevant context from knowledge base
 * 3. OpenAI generates a response based on the context
 * 4. Response is returned to the user
 */

import OpenAI from "openai";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Knowledge base content cache
let knowledgeBaseContent: string | null = null;
let knowledgeBaseChunks: Array<{ text: string; index: number }> | null = null;

/**
 * Load and cache the knowledge base
 */
function loadKnowledgeBase(): string {
  if (knowledgeBaseContent) {
    return knowledgeBaseContent;
  }

  try {
    const kbPath = path.join(
      __dirname,
      "../../knowledge-base/dsu-knowledge-base.txt"
    );
    knowledgeBaseContent = fs.readFileSync(kbPath, "utf-8");
    console.log("[RAG] Knowledge base loaded successfully");
    return knowledgeBaseContent;
  } catch (error) {
    console.error("[RAG] Failed to load knowledge base:", error);
    throw new Error("Knowledge base not available");
  }
}

/**
 * Split knowledge base into chunks
 */
function getKnowledgeBaseChunks(): Array<{ text: string; index: number }> {
  if (knowledgeBaseChunks) {
    return knowledgeBaseChunks;
  }

  const content = loadKnowledgeBase();
  const chunkSize = 1000; // Characters per chunk
  const overlap = 200; // Character overlap between chunks
  const chunks: Array<{ text: string; index: number }> = [];

  for (let i = 0; i < content.length; i += chunkSize - overlap) {
    const chunk = content.substring(i, i + chunkSize);
    if (chunk.trim()) {
      chunks.push({
        text: chunk,
        index: chunks.length,
      });
    }
  }

  knowledgeBaseChunks = chunks;
  console.log(`[RAG] Knowledge base split into ${chunks.length} chunks`);
  return chunks;
}

/**
 * Calculate simple similarity between query and text
 * Uses keyword matching and TF-IDF-like scoring
 */
function calculateSimilarity(query: string, text: string): number {
  const queryWords = query
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 3); // Ignore short words
  const textLower = text.toLowerCase();

  let score = 0;
  for (const word of queryWords) {
    // Count occurrences
    const matches = (textLower.match(new RegExp(word, "g")) || []).length;
    score += matches;
  }

  // Boost score for longer matches (phrases)
  if (queryWords.length > 1) {
    const phrase = queryWords.join(" ");
    if (textLower.includes(phrase)) {
      score += 10;
    }
  }

  return score;
}

/**
 * Retrieve relevant context from knowledge base
 */
function retrieveContext(
  query: string,
  topK: number = 5
): Array<{ text: string; score: number }> {
  const chunks = getKnowledgeBaseChunks();

  // Score all chunks
  const scored = chunks.map((chunk) => ({
    text: chunk.text,
    score: calculateSimilarity(query, chunk.text),
  }));

  // Sort by score and return top K
  return scored
    .filter((item) => item.score > 0) // Only return chunks with some relevance
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * System prompt for the RAG chatbot
 */
const SYSTEM_PROMPT = `You are an AI assistant for Dayananda Sagar University (DSU). Your role is to help students and prospective students with information about:

- Academic programs and courses
- Admissions process and eligibility
- Fee structures and costs
- Campus facilities and infrastructure
- Research opportunities and innovation
- Campus life and student activities
- Placements and career support
- International admissions
- Scholarships and financial aid

Guidelines:
1. Provide accurate information based on the knowledge base provided
2. If you don't have specific information in the knowledge base, say so honestly
3. Be helpful and friendly in your responses
4. For contact information, provide the official DSU email and phone numbers
5. Always mention the official website (https://dsu.edu.in) for more information
6. If asked about specific fees or eligibility, provide the exact details from the knowledge base
7. Encourage prospective students to apply through https://admissions.dsu.edu.in

Remember: You have access to the complete DSU knowledge base including all programs, fees, eligibility criteria, and contact information.`;

/**
 * Handle chat messages with RAG
 */
export const handleRagChat = async (req: Request, res: Response) => {
  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({
        error: "Invalid request",
        details: "Message is required and must be a string",
      });
    }

    if (!process.env.OPENAI_API_KEY) {
      console.error("[RAG] OPENAI_API_KEY is not configured");
      return res.status(500).json({
        error: "Server configuration error",
        details: "OpenAI API key not configured",
      });
    }

    console.log(`[RAG] Processing query: "${message}"`);

    // Retrieve relevant context from knowledge base
    const contextChunks = retrieveContext(message, 5);

    if (contextChunks.length === 0) {
      console.warn("[RAG] No relevant context found for query");
    }

    // Build context string
    const contextString = contextChunks
      .map((chunk, i) => `[Source ${i + 1}]\n${chunk.text}`)
      .join("\n\n---\n\n");

    const finalContext = contextString
      ? `Here is relevant information from the DSU knowledge base:\n\n${contextString}\n\nBased on this information, please answer the user's question:`
      : `Note: I could not find directly relevant information in the knowledge base for this query. However, I'll do my best to help based on my training data about DSU.`;

    // Build messages for OpenAI
    const messages: any[] = [
      {
        role: "system",
        content: SYSTEM_PROMPT + "\n\n" + finalContext,
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      messages.push(...conversationHistory.slice(-10)); // Keep last 10 messages for context
    }

    // Add current message
    messages.push({
      role: "user",
      content: message,
    });

    console.log(`[RAG] Calling OpenAI API with ${contextChunks.length} context chunks`);

    // Call OpenAI API
    const response = await openai.chat.completions.create({
      model: "gpt-5-nano",
      messages: messages,
      temperature: 0.7,
      max_tokens: 1024,
    });

    const assistantMessage =
      response.choices[0].message.content ||
      "I encountered an error generating a response.";

    console.log("[RAG] Response generated successfully");

    // Return response with metadata
    res.json({
      success: true,
      message: assistantMessage,
      contextCount: contextChunks.length,
      sources: contextChunks.map((chunk, i) => ({
        id: i + 1,
        relevanceScore: chunk.score,
      })),
      timestamp: new Date().toISOString(),
    });
  } catch (error: any) {
    console.error("[RAG] Chat error:", error?.message || error);

    // Handle specific OpenAI errors
    if (error?.status === 401) {
      return res.status(500).json({
        error: "Authentication failed",
        details: "Invalid OpenAI API key",
      });
    }

    if (error?.status === 429) {
      return res.status(429).json({
        error: "Rate limit exceeded",
        details: "Please try again in a few moments",
      });
    }

    res.status(500).json({
      error: "Failed to process chat message",
      details: error?.message || "Unknown error",
    });
  }
};

/**
 * Health check for RAG endpoint
 */
export const handleRagHealthCheck = async (_req: Request, res: Response) => {
  try {
    const kbPath = path.join(
      __dirname,
      "../../knowledge-base/dsu-knowledge-base.txt"
    );
    const kbExists = fs.existsSync(kbPath);

    res.json({
      status: "ok",
      service: "DSU RAG Chat API",
      knowledgeBaseAvailable: kbExists,
      knowledgeBaseChunks: knowledgeBaseChunks?.length || 0,
      openaiConfigured: !!process.env.OPENAI_API_KEY,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    res.json({
      status: "error",
      service: "DSU RAG Chat API",
      error: (error as any)?.message,
    });
  }
};
