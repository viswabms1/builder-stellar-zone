/**
 * RAG-Based Chat Endpoint for DSU Chatbot
 *
 * Uses OpenAI Chat Completions API with Retrieval-Augmented Generation (RAG)
 * to answer questions based on the DSU knowledge base.
 *
 * Integrated with GPT-4o-mini using:
 * - Chat Completions API (/v1/chat/completions) for fast, reliable responses
 * - XML-style instruction tags for declarative prompting
 * - Temperature 0 (zero) for completely deterministic responses (prevents hallucinations)
 * - 128K context window for comprehensive knowledge base access
 * - Strong anti-hallucination guidelines in system prompt
 *
 * Flow:
 * 1. User sends a message
 * 2. System retrieves relevant context from knowledge base (8 chunks)
 * 3. Chat Completions API processes with GPT-4o-mini
 * 4. Response is returned to the user (strictly based on knowledge base only)
 */

import OpenAI from "openai";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize OpenAI client
const apiKey = process.env.OPENAI_API_KEY;
console.log(
  "[RAG] OpenAI API Key Debug - ENV value is:",
  apiKey ? `${apiKey.substring(0, 20)}...${apiKey.substring(apiKey.length - 10)}` : "NOT SET"
);
const openai = new OpenAI({
  apiKey: apiKey,
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
      "../../knowledge-base/dsu-knowledge-base.txt",
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
 * Larger chunks to keep program info together
 */
function getKnowledgeBaseChunks(): Array<{ text: string; index: number }> {
  if (knowledgeBaseChunks) {
    return knowledgeBaseChunks;
  }

  const content = loadKnowledgeBase();
  const chunkSize = 2000; // Increased from 1000 to keep program/fee info together
  const overlap = 300; // Increased overlap
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
 * Calculate similarity between query and text
 * Enhanced with better keyword matching for fees, eligibility, and programs
 */
function calculateSimilarity(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  let score = 0;

  // Exact phrase match (highest priority)
  if (textLower.includes(queryLower)) {
    score += 50;
  }

  // Keyword-based scoring with special handling for common terms
  const keywords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  for (const keyword of keywords) {
    // Count word occurrences
    const pattern = new RegExp(`\\b${keyword}\\b`, "g");
    const matches = (textLower.match(pattern) || []).length;
    score += matches * 5;

    // Partial matches for acronyms and variations
    if (textLower.includes(keyword)) {
      score += 2;
    }
  }

  // Special boost for specific program/fee queries
  if (
    (queryLower.includes("fee") || queryLower.includes("cost")) &&
    textLower.includes("₹")
  ) {
    score += 20; // Boost chunks with rupee amounts
  }

  if (
    (queryLower.includes("eligible") || queryLower.includes("eligibility")) &&
    (textLower.includes("eligibility") ||
      textLower.includes("pass") ||
      textLower.includes("marks"))
  ) {
    score += 20; // Boost eligibility-related chunks
  }

  if (queryLower.includes("b.tech") && textLower.includes("b.tech")) {
    score += 15;
  }

  if (queryLower.includes("m.tech") && textLower.includes("m.tech")) {
    score += 15;
  }

  // CSE variations
  if (
    (queryLower.includes("cse") || queryLower.includes("computer science")) &&
    (textLower.includes("computer science") || textLower.includes("cse"))
  ) {
    score += 15;
  }

  // Program-specific bonus for exact matches
  const programs = [
    "engineering",
    "law",
    "health sciences",
    "commerce",
    "design",
  ];
  for (const prog of programs) {
    if (queryLower.includes(prog) && textLower.includes(prog)) {
      score += 10;
    }
  }

  // Phrase matching (multiple words together)
  if (keywords.length > 1) {
    for (let i = 0; i < keywords.length - 1; i++) {
      const phrase = keywords[i] + " " + keywords[i + 1];
      if (textLower.includes(phrase)) {
        score += 8;
      }
    }
  }

  return score;
}

/**
 * Retrieve relevant context from knowledge base
 */
function retrieveContext(
  query: string,
  topK: number = 5,
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
 * System instruction using XML-style tags (works well with GPT-4o-mini)
 * This is the declarative instruction style for clear, consistent responses
 */
function buildSystemInstruction(contextString: string): string {
  return `<system>
<role>
You are an AI assistant for Dayananda Sagar University (DSU). Your role is to help students and prospective students with SPECIFIC, DETAILED, and ACCURATE information about the university.
</role>

<knowledge_domain>
- Academic programs and courses (with specific names and durations)
- Admissions process and eligibility (with exact percentage requirements)
- Fee structures and costs (with exact annual fee amounts for each program)
- Campus facilities and infrastructure
- Research opportunities and innovation
- Campus life and student activities
- Placements and career support
- International admissions
- Scholarships and financial aid
</knowledge_domain>

<guidelines>
1. ALWAYS provide SPECIFIC, EXACT information from the knowledge base
2. When answering about FEES: Include the exact annual fee amounts (₹ currency), mention different categories (CET, Ranking Based like JEE, Others), and specify the program level (UG/PG)
3. When answering about ELIGIBILITY: Provide exact percentage requirements, mention qualification required (PUC/10+2), specify required subjects, and note category-specific criteria (SC/ST/OBC)
4. When answering about PROGRAMS:
   - If asked about a specific program (e.g., B.Tech CSE): Be brief but include duration, eligibility requirements, and fees
   - ALWAYS list all related programs in that school/category. For example, if asked about B.Tech, list all B.Tech programs offered
   - Include program name, degree type (B.Tech, M.Tech, B.Com, etc.), duration in years, department/specialization name, and the school it belongs to
   - Provide comprehensive program information across all schools when relevant
5. Be VERY SPECIFIC - include exact numbers, percentages, amounts, and criteria from the knowledge base
6. If you don't have specific information, say so honestly
7. Be helpful and friendly in tone
8. Always mention the official website (https://8660401238.vercel.app) for more information
9. If asked about specific fees or eligibility, provide EXACT details including fee amounts and percentage requirements
10. Encourage prospective students to apply through https://8660401238.vercel.app/admissions
11. DO NOT use asterisks (*), bold (**), or markdown formatting in your responses
12. DO NOT use bullet points or special symbols - use simple dashes (-) for lists instead
13. Keep responses clear and plain text without any special formatting
14. DO NOT include trailing punctuation like . ) ] or , in URLs or hyperlinks
</guidelines>

<knowledge_base>
${contextString}
</knowledge_base>

<critical>
*** ANTI-HALLUCINATION INSTRUCTIONS ***

1. ONLY USE INFORMATION FROM THE PROVIDED KNOWLEDGE BASE
2. If the knowledge base does NOT contain information, say: "I don't have this information in my knowledge base. Please contact the admissions office at info@dsu.edu.in or visit https://8660401238.vercel.app for more details."
3. NEVER invent or assume:
   - Program names that are not listed in the knowledge base
   - Fee amounts different from what is stated
   - Eligibility criteria not explicitly mentioned
   - Facilities, placements, or benefits not mentioned in the knowledge base
4. If a user asks about something not in the knowledge base, STOP and ask them to verify or contact DSU directly
5. ALWAYS quote exact text from the knowledge base when possible
6. NEVER use phrases like "typically", "usually", "generally" - ONLY use definite statements based on knowledge base
7. NEVER expand on what's in the knowledge base - stick exactly to the facts provided

</critical>
</system>`;
}

/**
 * Sanitize message by removing markdown and special formatting characters
 */
function sanitizeMessage(message: string): string {
  return message
    .replace(/\*\*/g, "") // Remove bold markdown (**)
    .replace(/\*/g, "") // Remove italics/asterisks (*)
    .replace(/^[•\-\s]+/gm, "-") // Replace special bullets with simple dash
    .replace(/[\u2022]/g, "-") // Replace bullet point unicode with dash
    .trim();
}

/**
 * Handle chat messages with Chat Completions API
 * Uses GPT-4o-mini with temperature 0 for completely deterministic responses (prevents hallucinations)
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
    // Increased from 5 to 8 to get more comprehensive program/fee information
    const contextChunks = retrieveContext(message, 8);

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

    // Build system instruction using XML-style tags (works well with GPT-4o-mini)
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
      `[RAG] Calling Chat Completions API with ${contextChunks.length} context chunks`,
    );
    console.log(
      "[RAG] Using gpt-4o-mini with temperature: 0 (deterministic mode)",
    );

    // Call Chat Completions API with gpt-4o-mini
    const completionsApiUrl = "https://api.openai.com/v1/chat/completions";

    // Build messages array for Chat Completions API
    const messagesArray: any[] = [
      {
        role: "system",
        content: systemInstruction,
      },
    ];

    // Add conversation history if provided
    if (conversationHistory && Array.isArray(conversationHistory)) {
      messagesArray.push(...conversationHistory.slice(-10)); // Keep last 10 messages
    }

    // Add current user message
    messagesArray.push({
      role: "user",
      content: message,
    });

    const completionsApiBody = {
      model: "gpt-4o-mini",
      messages: messagesArray,
      temperature: 0, // 0 = completely deterministic, prevents hallucinations
      max_tokens: 1024,
    };

    console.log("[RAG] Sending request to Chat Completions API endpoint");
    console.log(`[RAG] Messages array has ${messagesArray.length} messages`);

    const apiResponse = await fetch(completionsApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify(completionsApiBody),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error("[RAG] Chat Completions API error:", {
        status: apiResponse.status,
        error: errorData,
      });
      throw new Error(
        `Chat Completions API error: ${errorData.error?.message || "Unknown error"}`,
      );
    }

    const response = await apiResponse.json();

    // Debug: log the full response structure
    console.log("[RAG] Full API response:", JSON.stringify(response, null, 2));

    // Extract response content from Chat Completions API output
    let assistantMessage = "";

    // Chat Completions API returns choices array
    if (
      response.choices &&
      Array.isArray(response.choices) &&
      response.choices.length > 0
    ) {
      const firstChoice = response.choices[0];
      console.log(
        `[RAG] Processing first choice (finish_reason: ${firstChoice.finish_reason})`,
      );
      if (firstChoice.message && firstChoice.message.content) {
        assistantMessage = firstChoice.message.content;
      }
    }

    if (!assistantMessage) {
      console.error("[RAG] Empty response from OpenAI Chat Completions API");
      assistantMessage =
        "I encountered an error generating a response. Please try again.";
    } else {
      console.log("[RAG] Response generated successfully");
      console.log(
        `[RAG] Message length: ${assistantMessage.length} characters`,
      );
    }

    // Sanitize message to remove markdown and special characters
    const cleanMessage = sanitizeMessage(assistantMessage);

    // Return response with metadata
    res.json({
      success: true,
      message: cleanMessage,
      contextCount: contextChunks.length,
      sources: contextChunks.map((chunk, i) => ({
        id: i + 1,
        relevanceScore: chunk.score,
      })),
      timestamp: new Date().toISOString(),
      // Include model info for next turn
      modelInfo: {
        model: "gpt-4o-mini",
        temperature: 0,
        deterministic: true,
        contextWindow: "128k tokens",
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
      "../../knowledge-base/dsu-knowledge-base.txt",
    );
    const kbExists = fs.existsSync(kbPath);

    res.json({
      status: "ok",
      service: "DSU RAG Chat API (GPT-4o-mini)",
      knowledgeBaseAvailable: kbExists,
      knowledgeBaseChunks: knowledgeBaseChunks?.length || 0,
      openaiConfigured: !!process.env.OPENAI_API_KEY,
      apiEndpoint: "Chat Completions API (/v1/chat/completions)",
      model: "gpt-4o-mini",
      temperature: 0,
      deterministic: true,
      contextWindow: "128,000 tokens",
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
