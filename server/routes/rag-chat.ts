/**
 * RAG-Based Chat Endpoint for DSU Chatbot
 * 
 * Uses OpenAI Responses API with Retrieval-Augmented Generation (RAG)
 * to answer questions based on the DSU knowledge base.
 * 
 * Integrated with GPT-5 Nano using:
 * - Responses API (/v1/responses) for persistent reasoning and state management
 * - XML-style instruction tags for declarative prompting
 * - Minimal reasoning effort for speed and cost efficiency
 * - 400K context window for comprehensive knowledge base access
 * 
 * Flow:
 * 1. User sends a message
 * 2. System retrieves relevant context from knowledge base
 * 3. Responses API processes with GPT-5 Nano (maintains chain of thought)
 * 4. Response is returned to the user with state for next turn
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
 * System instruction using XML-style tags (preferred for GPT-5)
 * This is the declarative instruction style recommended for 2026
 */
function buildSystemInstruction(contextString: string): string {
  return `<system>
<role>
You are an AI assistant for Dayananda Sagar University (DSU). Your role is to help students and prospective students with accurate information about the university.
</role>

<knowledge_domain>
- Academic programs and courses
- Admissions process and eligibility
- Fee structures and costs
- Campus facilities and infrastructure
- Research opportunities and innovation
- Campus life and student activities
- Placements and career support
- International admissions
- Scholarships and financial aid
</knowledge_domain>

<guidelines>
1. Provide accurate information strictly from the knowledge base below
2. If you don't have specific information, say so honestly
3. Be helpful and friendly in tone
4. For contact information, provide official DSU email and phone numbers
5. Always mention the official website (https://dsu.edu.in) for more information
6. If asked about specific fees or eligibility, provide exact details from the knowledge base
7. Encourage prospective students to apply through https://admissions.dsu.edu.in
8. Keep responses concise and well-structured
</guidelines>

<knowledge_base>
${contextString}
</knowledge_base>

<important>
Base your responses entirely on the knowledge base provided above. Do not invent information about DSU that is not in the knowledge base.
</important>
</system>`;
}

/**
 * Handle chat messages with Responses API
 * Uses GPT-5 Nano with persistent reasoning and state management
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
      ? contextString
      : `Note: I could not find directly relevant information in the knowledge base for this query.`;

    // Build system instruction using XML-style tags (GPT-5 Nano recommended format)
    const systemInstruction = buildSystemInstruction(finalContext);

    // Build messages array
    const messages: any[] = [
      {
        role: "user",
        content: message,
      },
    ];

    // Add conversation history if provided (Responses API maintains state)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      // Insert history before the current message
      const historyMessages = conversationHistory.slice(-10); // Keep last 10 messages
      messages.splice(0, 0, ...historyMessages);
    }

    console.log(
      `[RAG] Calling Responses API with ${contextChunks.length} context chunks`
    );
    console.log("[RAG] Using GPT-5 Nano with reasoning_effort: minimal");

    // Call Responses API with GPT-5 Nano using direct HTTP request
    // The Responses API uses a different structure from Chat Completions API
    const responsesApiUrl = "https://api.openai.com/v1/responses";

    // Build input array in the Responses API format
    const inputArray: any[] = [
      {
        role: "developer",
        content: systemInstruction,
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      inputArray.push(...conversationHistory.slice(-10)); // Keep last 10 messages
    }

    // Add current user message
    inputArray.push({
      role: "user",
      content: message,
    });

    const responseApiBody = {
      model: "gpt-5-nano",
      max_tokens: 1024,
      input: inputArray, // Responses API uses 'input' instead of 'messages'
      reasoning: {
        effort: "minimal", // Minimal reasoning for speed and cost
      },
    };

    console.log("[RAG] Sending request to Responses API endpoint");
    console.log(`[RAG] Input array has ${inputArray.length} messages`);

    const apiResponse = await fetch(responsesApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(responseApiBody),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error("[RAG] Responses API error:", {
        status: apiResponse.status,
        error: errorData,
      });
      throw new Error(
        `Responses API error: ${errorData.error?.message || "Unknown error"}`
      );
    }

    const response = await apiResponse.json();

    // Extract response content from Responses API output
    let assistantMessage = "";

    // Responses API returns output as an array of items
    if (response.output && Array.isArray(response.output)) {
      for (const item of response.output) {
        if (item.type === "text" && item.text) {
          assistantMessage += item.text;
        } else if (item.type === "message" && item.content) {
          assistantMessage += item.content;
        }
      }
    } else if (response.output_text) {
      // Alternative response format
      assistantMessage = response.output_text;
    }

    if (!assistantMessage) {
      console.error("[RAG] Empty response from OpenAI Responses API:", {
        response: response,
      });
      assistantMessage = "I encountered an error generating a response. Please try again.";
    } else {
      console.log("[RAG] Response generated successfully");
    }

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
      // Include state info for next turn (Responses API manages this)
      modelInfo: {
        model: "gpt-5-nano",
        reasoningEffort: "minimal",
        contextWindow: "400k tokens",
      },
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
      service: "DSU RAG Chat API (GPT-5 Nano)",
      knowledgeBaseAvailable: kbExists,
      knowledgeBaseChunks: knowledgeBaseChunks?.length || 0,
      openaiConfigured: !!process.env.OPENAI_API_KEY,
      apiEndpoint: "Responses API (/v1/responses)",
      model: "gpt-5-nano",
      reasoningEffort: "minimal",
      contextWindow: "400,000 tokens",
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
