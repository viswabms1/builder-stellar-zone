/**
 * Vercel Serverless Function: RAG Chat API
 *
 * Production-ready RAG (Retrieval-Augmented Generation) chat endpoint
 * for DSU Admissions chatbot. Uses OpenAI Chat Completions API with
 * embedded knowledge base for context retrieval.
 *
 * This is the Vercel equivalent of server/routes/rag-chat.ts
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

// ============================================================================
// KNOWLEDGE BASE (Embedded for Vercel Serverless)
// ============================================================================

const KNOWLEDGE_BASE = `
================================================================================
DAYANANDA SAGAR UNIVERSITY - COMPLETE KNOWLEDGE BASE
India's AI-First University
Academic Year 2026-27
================================================================================

UNIVERSITY OVERVIEW
-------------------
Name: Dayananda Sagar University
Tagline: India's AI-First University
Location: Bangalore, Karnataka, India
Accreditation: NAAC A+ Accredited
Legacy: Building on legacy since 1979
Website: https://8660401238.vercel.app

Description:
Dayananda Sagar University is India's AI-First University offering world-class education in Engineering, Law, Health Sciences, Commerce, Basic and Applied Sciences, Computer Applications, Design, and Humanities.

================================================================================
COMPLETE PROGRAMS, FEES, AND ELIGIBILITY DETAILS
Academic Year 2026-27
================================================================================

IMPORTANT NOTES:
• All fees listed are annual fees for the academic year 2026-27
• CET = Common Entrance Test (Karnataka)
• PGCET = Post-Graduate Common Entrance Test
• Fees may vary based on government revisions
• For detailed brochures and application: https://dsu.edu.in/eligibility


================================================================================
SCHOOL OF ENGINEERING
================================================================================
Innovation-driven education for the tech-savvy world with cutting-edge AI labs and research facilities.

PROGRAMS OFFERED
----------------

B.TECH UNDERGRADUATE PROGRAMS:

COMPUTER SCIENCE & ENGINEERING SPECIALIZATIONS:
  1. B.Tech Computer Science & Technology (4 Years)
  2. B.Tech Computer Science & Medical Engineering (4 Years)
  3. B.Tech CSE (Artificial Intelligence & Machine Learning) (4 Years)
  4. B.Tech CSE (Data Science) (4 Years)
  5. B.Tech CSE (Cyber Security) (4 Years)
  6. B.Tech CSE (AI & Data Science) (4 Years)
  7. B.Tech CSE (Artificial Intelligence) (4 Years)
  8. B.Tech AI & Robotics (4 Years)

OTHER ENGINEERING SPECIALIZATIONS:
  9. B.Tech Electronics & Communication Engineering (4 Years)
  10. B.Tech Mechanical Engineering (4 Years)
  11. B.Tech Aerospace Engineering (4 Years)

M.TECH POSTGRADUATE PROGRAMS:
  - M.Tech Computer Science & Engineering (2 Years)
  - M.Tech CSE (AI & Machine Learning) (2 Years)
  - M.Tech AI & Data Science (2 Years)
  - M.Tech Artificial Intelligence (2 Years)
  - M.Tech AI & Robotics (2 Years)
  - M.Tech Embedded System (2 Years)
  - M.Tech Design Engineering (2 Years)

ELIGIBILITY REQUIREMENTS
------------------------

UNDERGRADUATE (B.Tech) PROGRAMS:
  - Pass in PUC / 10+2 examination with Physics and Mathematics as compulsory subjects along with one of the following: Chemistry / Biotechnology / Biology / Computer Science / Electronics / Technical Vocational subjects.
  - Minimum of 45% marks in the above subjects taken together (40% for SC/ST/OBC candidates).

POSTGRADUATE (M.Tech) PROGRAMS:
  - Pass in B.Tech in ECE, CSE, ISE, Biomedical, Medical Electronics, Electronics & Instrumentation, EEE, Telecommunications, Mechatronics and other related branches with a minimum of 50% marks in aggregate (45% in case of candidate belonging to SC/ST & OBC).
  - Exception (Design Engineering): B.Tech in Mechanical, Industrial Engineering & Management, Aerospace, Aeronautical, Automobile, or related disciplines with minimum 50% marks in aggregate (45% for SC/ST/OBC).

FEE STRUCTURE
-------------

B.TECH PROGRAMS (Annual Fees):
  - CET: Not Available
  - Ranking Based (JEE Mains / Uniguage / Comed-K): ₹3,22,000 - ₹4,35,000
  - Others: ₹4,12,000 - ₹5,25,000

M.Tech Programs (Annual Fees):
  - PGCET: Not Available
  - Annual: ₹1,62,000 - ₹2,52,000

Special Notes (M.Tech):
  Job placement guarantee: Upon successful completion, candidates are offered a job with a starting salary of INR 65,000 per month for a year.

More Info: https://dsu.edu.in/eligibility

================================================================================
SCHOOL OF COMPUTER APPLICATIONS
================================================================================

UNDERGRADUATE PROGRAMS:
Programs Offered:
  1. BCA in Computer Applications (3 Years)
  2. BCA in Artificial Intelligence & Data Sciences (3 Years)
  3. B.Sc in Data Science (3 Years)
  4. B.Sc in Cyber Security (3 Years)

Eligibility:
  - 10+2 or equivalent with a minimum of 45% marks in aggregate.

Fees (Annual - 2026-27):
  - BCA in Computer Applications: ₹2,07,000 (Term I: ₹1,09,500, Term II: ₹97,500)
  - BCA in Artificial Intelligence & Data Sciences: ₹2,07,000 (Term I: ₹1,09,500, Term II: ₹97,500)
  - B.Sc in Data Science: ₹1,62,000 (Term I: ₹87,000, Term II: ₹75,000)
  - B.Sc in Cyber Security: ₹1,62,000 (Term I: ₹87,000, Term II: ₹75,000)

POSTGRADUATE PROGRAMS:
Programs Offered:
  1. MCA in Computer Applications (2 Years)
  2. M.Sc in Data Science (2 Years)
  3. M.Sc in Cyber Security (2 Years)

Eligibility:
  - BCA/B.Sc.(CS/IT) or B.Sc./B.Com/BA with Mathematics in 10+2 level.

Fees (Annual - 2026-27):
  - MCA in Computer Applications: ₹3,42,000 (Term I: ₹1,77,000, Term II: ₹1,65,000)
  - M.Sc in Data Science: ₹1,52,000 (Term I: ₹82,000, Term II: ₹70,000)
  - M.Sc in Cyber Security: ₹1,52,000 (Term I: ₹82,000, Term II: ₹70,000)

================================================================================
SCHOOL OF LAW
================================================================================

Program: B.A. LL.B (Hons)
Level: UG | Duration: 5 Years
Eligibility: 10+2 or equivalent with minimum 50% marks. CLAT scores accepted.
Fee Structure (Annual): ₹2,52,000
💰 Scholarship Available

Program: B.B.A. LL.B (Hons)
Level: UG | Duration: 5 Years
Eligibility: 10+2 or equivalent with minimum 50% marks. CLAT scores accepted.
Fee Structure (Annual): ₹2,52,000
💰 Scholarship Available

Program: LL.B
Level: UG | Duration: 3 Years
Eligibility: Graduation with minimum 50% marks.
Fee Structure (Annual): ₹1,77,000

Program: LL.M
Level: PG | Duration: 1 Year
Eligibility: LL.B or equivalent with minimum 50% marks (40% for SC/ST). CLAT or AILET scores accepted.
Fee Structure (Annual): ₹1,45,000
Tracks: Corporate & Commercial Law, Intellectual Property Rights, Human Rights Law.

================================================================================
SCHOOL OF COMMERCE & MANAGEMENT
================================================================================

Program: B.Com Regular
Level: UG | Duration: 3 Years
Eligibility: PUC or equivalent with Business Studies and Accountancy, aggregate 50% (45% for SC/ST/OBC).
Fee Structure (Annual): ₹1,57,000

Program: B.Com ACCA Integrated
Level: UG | Duration: 3 Years
Fee Structure (Annual): ₹1,87,000
Special: Professional ACCA coaching integrated within timetable.

Program: B.Com CMA Integrated
Level: UG | Duration: 3 Years
Fee Structure (Annual): ₹1,87,000
Special: Professional CMA coaching integrated within timetable.

Program: B.Com With CA Coaching
Level: UG | Duration: 3 Years
Fee Structure (Annual): ₹1,87,000
Special: Professional CA coaching integrated within timetable.

Program: BBA Regular
Level: UG | Duration: 3 Years
Eligibility: 10+2 or equivalent with minimum 50% marks (45% for SC/ST/OBC).
Fee Structure (Annual): ₹2,12,000

Program: MBA
Level: PG | Duration: 2 Years
Eligibility: Bachelor's degree (3 years) with minimum 50% (45% for SC/ST/OBC).
Fee Structure (Annual): ₹6,02,000
Special: Dual specialization - Business Analytics, Finance, Marketing, HR, Operations.

================================================================================
SCHOOL OF HEALTH SCIENCES
================================================================================

Program: B.Sc Nursing
Level: UG | Duration: 4 Years
Eligibility: 10+2 with Physics, Chemistry, Biology and English with minimum 45% marks.
Fee Structure (Annual): ₹1,82,000

Program: Bachelor's in Physiotherapy (BPT)
Level: UG | Duration: 4 Years
Eligibility: 10+2 with Physics, Chemistry, English and Biology with minimum 40% marks.
Fee Structure (Annual): ₹2,17,000

Program: B.Pharm
Level: UG | Duration: 4 Years
Eligibility: 10+2 with Physics, Chemistry, English with Math/Bio as optional with minimum 40% marks.
Fee Structure (Annual): ₹2,82,000

Program: B.Sc Medical Laboratory Technology
Level: UG | Duration: 3 Years
Fee Structure (Annual): ₹1,42,000

Program: MPH - Masters in Public Health
Level: PG | Duration: 2 Years
Eligibility: MBBS/BDS/BAMS/B.Sc Nursing/BPT/B.Pharm with minimum 50% marks.
Fee Structure (Annual): ₹1,42,000

================================================================================
SCHOOL OF BASIC & APPLIED SCIENCES
================================================================================

Program: B.Sc Life Science (Biotechnology, Biochemistry, Genetics)
Level: UG | Duration: 3 Years
Eligibility: 10+2 with Physics, Chemistry, English with Biology/Biotech/Math as optional, minimum 45% marks.
Fee Structure (Annual): ₹1,82,000

Program: M.Sc Biochemistry / Biotechnology / Microbiology / Molecular Biology
Level: PG | Duration: 2 Years
Fee Structure (Annual): ₹1,92,000

================================================================================
SCHOOL OF DESIGN & DIGITAL TRANS-MEDIA
================================================================================

Program: B.Design (Product Design / UX Design / Animation and VFX / Game Design)
Level: UG | Duration: 4 Years
Eligibility: 50% in Class XII from Science, Commerce, Arts, or Humanities.
Fee Structure (Annual): ₹3,02,000

================================================================================
SCHOOL OF JOURNALISM & MASS COMMUNICATION
================================================================================

Program: B.A. Journalism and Mass Communication
Level: UG | Duration: 3 Years
Eligibility: 10+2 or equivalent with minimum 45% marks. Arts subjects preferred.
Fee Structure (Annual): ₹1,52,000
Special: Newsroom simulations, digital production labs, media internships.

================================================================================
CAMPUS & FACILITIES
================================================================================

Campus Life at DSU:
• Research & Innovation - Hackathons, hands-on projects, AI labs
• Leadership & Careers - Startup incubation, industry partnerships
• Creative Expression - Performing arts, cultural events
• Sports & Wellness - Athletic programs, community service

World-Class Facilities:
• State-of-the-art library with 2M+ books
• AI labs and maker spaces with 3D printing
• Modern hostels with high-speed connectivity
• Sports facilities and wellness centers
• Performance venues and recreational areas

Student Organizations: 100+ clubs and student organizations

================================================================================
INTERNATIONAL ADMISSIONS
================================================================================

Study in India Initiative
Philosophy: वसुधैव कुटुम्बकम | Vasudhaiva Kutumbakam - The world is one family

Contact:
  Email: international-admissions@dsu.edu.in
  WhatsApp: +91 9606022152, +91 9606022149
  Study in India Portal: https://studyinindia.gov.in/

================================================================================
RESEARCH & INNOVATION
================================================================================

• Hackathons & 48-hour innovation sprints
• NASA Space Apps & international competitions
• Student-led research labs & mentorship
• AI labs and cutting-edge research facilities
• Industry partnerships and collaborative research
• Patent filing and intellectual property support

Entrepreneurship Ecosystem:
• DERBI Foundation - Established 2009
• AIC-DSU Innovation Foundation - Government backed by NITI Aayog
• 25+ startups incubated
• ₹50Cr+ funding raised
• 150+ jobs created

================================================================================
PARTNERSHIPS
================================================================================

• NVIDIA AI Architecture Partnership
• Industry collaborations with leading tech companies
• International university partnerships
• Research collaborations with IITs and premier institutions

================================================================================
KEY ACHIEVEMENTS
================================================================================

• NAAC A+ Accreditation
• 25,000+ Active Students
• 100+ Clubs & Societies
• High placement rates with top companies
• International research collaborations
• Multiple patents and publications

================================================================================
CONTACT INFORMATION
================================================================================

Main Website: https://8660401238.vercel.app
Apply: https://8660401238.vercel.app/admissions
General Inquiries: Contact through website

International Admissions:
  Email: international-admissions@dsu.edu.in
  WhatsApp: +91 9606022152, +91 9606022149

Hostel & Accommodation: https://myposhtell.com
Virtual Campus Tour: https://dsu.edu.in/virtual-tour/
`;

// ============================================================================
// RAG RETRIEVAL FUNCTIONS
// ============================================================================

interface KnowledgeChunk {
  text: string;
  score: number;
}

/**
 * Split knowledge base into chunks for retrieval
 */
function getKnowledgeChunks(): Array<{ text: string; index: number }> {
  const chunkSize = 2000;
  const overlap = 300;
  const chunks: Array<{ text: string; index: number }> = [];

  for (let i = 0; i < KNOWLEDGE_BASE.length; i += chunkSize - overlap) {
    const chunk = KNOWLEDGE_BASE.substring(i, i + chunkSize);
    if (chunk.trim()) {
      chunks.push({
        text: chunk,
        index: chunks.length,
      });
    }
  }

  return chunks;
}

/**
 * Calculate similarity between query and text
 */
function calculateSimilarity(query: string, text: string): number {
  const queryLower = query.toLowerCase();
  const textLower = text.toLowerCase();

  let score = 0;

  // Exact phrase match
  if (textLower.includes(queryLower)) {
    score += 50;
  }

  // Keyword-based scoring
  const keywords = queryLower.split(/\s+/).filter((w) => w.length > 2);

  for (const keyword of keywords) {
    const pattern = new RegExp(`\\b${keyword}\\b`, "g");
    const matches = (textLower.match(pattern) || []).length;
    score += matches * 5;

    if (textLower.includes(keyword)) {
      score += 2;
    }
  }

  // Special boost for specific queries
  if (
    (queryLower.includes("fee") || queryLower.includes("cost")) &&
    textLower.includes("₹")
  ) {
    score += 20;
  }

  if (
    (queryLower.includes("eligible") || queryLower.includes("eligibility")) &&
    (textLower.includes("eligibility") ||
      textLower.includes("pass") ||
      textLower.includes("marks"))
  ) {
    score += 20;
  }

  // Program-specific boosts
  const programs = [
    "b.tech",
    "m.tech",
    "bca",
    "mca",
    "bba",
    "mba",
    "law",
    "nursing",
    "engineering",
    "cse",
    "computer science",
    "ai",
    "machine learning",
    "data science",
  ];
  for (const prog of programs) {
    if (queryLower.includes(prog) && textLower.includes(prog)) {
      score += 15;
    }
  }

  return score;
}

/**
 * Retrieve relevant context from knowledge base
 */
function retrieveContext(query: string, topK: number = 6): KnowledgeChunk[] {
  const chunks = getKnowledgeChunks();

  const scored = chunks.map((chunk) => ({
    text: chunk.text,
    score: calculateSimilarity(query, chunk.text),
  }));

  return scored
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}

/**
 * Build system prompt for OpenAI
 */
function buildSystemPrompt(contextString: string): string {
  return `You are an AI assistant for Dayananda Sagar University (DSU), India's AI-First University. Your role is to help students and prospective students with SPECIFIC, DETAILED, and ACCURATE information about the university.

KNOWLEDGE DOMAIN:
- Academic programs and courses (with specific names and durations)
- Admissions process and eligibility (with exact percentage requirements)
- Fee structures and costs (with exact annual fee amounts for each program)
- Campus facilities and infrastructure
- Research opportunities and innovation
- Campus life and student activities
- Placements and career support
- International admissions
- Scholarships and financial aid

GUIDELINES:
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

KNOWLEDGE BASE:
${contextString}

CRITICAL ANTI-HALLUCINATION INSTRUCTIONS:

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

BASE YOUR RESPONSES ENTIRELY ON THE KNOWLEDGE BASE PROVIDED ABOVE.
PROVIDE SPECIFIC, EXACT INFORMATION - NOT GENERAL STATEMENTS.
DO NOT INVENT INFORMATION ABOUT DSU THAT IS NOT IN THE KNOWLEDGE BASE.`;
}

// ============================================================================
// MAIN HANDLER
// ============================================================================

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle preflight
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, conversationHistory } = req.body;

    // Validate request
    if (!message || typeof message !== "string") {
      return res.status(400).json({
        success: false,
        error: "Invalid request",
        details: "Message is required and must be a string",
      });
    }

    // Validate API key
    if (!process.env.OPENAI_API_KEY) {
      console.error("[RAG] OPENAI_API_KEY is not configured");
      return res.status(500).json({
        success: false,
        error: "Server configuration error",
        details: "OpenAI API key not configured",
      });
    }

    console.log(`[RAG] Processing query: "${message}"`);

    // Retrieve relevant context from knowledge base
    const contextChunks = retrieveContext(message, 6);

    if (contextChunks.length === 0) {
      console.warn("[RAG] No relevant context found for query");
    }

    // Build context string
    const contextString =
      contextChunks.length > 0
        ? contextChunks
            .map((chunk, i) => `[Source ${i + 1}]\n${chunk.text}`)
            .join("\n\n---\n\n")
        : "Note: No directly relevant information found in knowledge base.";

    // Build system prompt
    const systemPrompt = buildSystemPrompt(contextString);

    // Build messages array for OpenAI
    const messages: Array<{
      role: "system" | "user" | "assistant";
      content: string;
    }> = [{ role: "system", content: systemPrompt }];

    // Add conversation history if provided (last 10 messages)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      const recentHistory = conversationHistory.slice(-10);
      for (const msg of recentHistory) {
        if (msg.role === "user" || msg.role === "assistant") {
          messages.push({
            role: msg.role,
            content: msg.content,
          });
        }
      }
    }

    // Add current user message
    messages.push({ role: "user", content: message });

    console.log(
      `[RAG] Calling OpenAI API with ${contextChunks.length} context chunks`,
    );

    // Initialize OpenAI client
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // Call OpenAI Chat Completions API
    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
      max_tokens: 1000,
      temperature: 0,
    });

    const assistantMessage = completion.choices[0]?.message?.content || "";

    if (!assistantMessage) {
      console.error("[RAG] Empty response from OpenAI");
      return res.status(500).json({
        success: false,
        error: "Empty response",
        details: "No response generated from AI",
      });
    }

    console.log("[RAG] Response generated successfully");
    console.log(`[RAG] Message length: ${assistantMessage.length} characters`);

    // Return response
    return res.status(200).json({
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
        success: false,
        error: "Authentication failed",
        details: "Invalid OpenAI API key",
      });
    }

    if (error?.status === 429) {
      return res.status(429).json({
        success: false,
        error: "Rate limit exceeded",
        details: "Please try again in a few moments",
      });
    }

    return res.status(500).json({
      success: false,
      error: "Failed to process chat message",
      details: error?.message || "Unknown error",
    });
  }
}
