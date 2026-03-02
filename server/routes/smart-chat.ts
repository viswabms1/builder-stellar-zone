/**
 * Smart Chat Endpoint
 *
 * Combines AI intent detection with navigation and RAG responses.
 * The AI determines if the user wants to navigate to a page or get information,
 * then returns either a navigation action or a text response.
 */

import { Request, Response } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Site map for navigation - all navigable routes with descriptions
const SITE_MAP = [
  // Schools
  { path: "/academics/engineering", label: "School of Engineering", keywords: "engineering btech b.tech" },
  { path: "/academics/health-sciences", label: "School of Health Sciences", keywords: "health nursing pharmacy physiotherapy" },
  { path: "/academics/law", label: "School of Law", keywords: "law llb llm legal" },
  { path: "/academics/management-studies", label: "School of Commerce & Management", keywords: "commerce management bcom bba mba business" },
  { path: "/academics/basic-applied-sciences", label: "School of Basic & Applied Sciences", keywords: "science physics chemistry mathematics bsc msc" },
  { path: "/academics/computer-applications", label: "School of Computer Applications", keywords: "bca mca computer applications" },
  { path: "/academics/design/bdesign", label: "School of Design & Digital Trans-Media", keywords: "design bdesign digital media" },
  { path: "/academics/journalism-mass-communication", label: "School of Arts, Design & Humanities", keywords: "journalism mass communication arts humanities ba" },

  // Engineering departments
  { path: "/academics/engineering/computer-science", label: "Computer Science & Engineering (CSE)", keywords: "computer science engineering cse btech coding programming software" },
  { path: "/academics/engineering/artificial-intelligence", label: "Artificial Intelligence & ML", keywords: "artificial intelligence ai machine learning ml" },
  { path: "/academics/engineering/ai-data-science", label: "AI & Data Science", keywords: "ai data science analytics" },
  { path: "/academics/engineering/ai-robotics", label: "AI & Robotics", keywords: "ai robotics automation" },
  { path: "/academics/engineering/data-science", label: "Data Science", keywords: "data science big data analytics" },
  { path: "/academics/engineering/cybersecurity", label: "Cybersecurity", keywords: "cyber security hacking network security" },
  { path: "/academics/engineering/computer-technology", label: "Computer Technology (CST)", keywords: "computer technology cst bsc computer science technology" },
  { path: "/academics/engineering/cs-medical-engineering", label: "Medical Engineering", keywords: "medical engineering biomedical health tech" },
  { path: "/academics/engineering/mechanical-engineering", label: "Mechanical Engineering", keywords: "mechanical mech manufacturing" },
  { path: "/academics/engineering/aerospace-engineering", label: "Aerospace Engineering", keywords: "aerospace aero aviation flight" },
  { path: "/academics/engineering/electronics-communication", label: "Electronics & Communication (ECE)", keywords: "electronics communication ece vlsi embedded" },

  // Engineering faculty pages
  { path: "/academics/engineering/computer-science/faculty", label: "CSE Faculty", keywords: "cse faculty teachers professors computer science staff" },
  { path: "/academics/engineering/artificial-intelligence/faculty", label: "AI & ML Faculty", keywords: "ai ml faculty teachers professors" },
  { path: "/academics/engineering/mechanical-engineering/faculty", label: "Mechanical Engineering Faculty", keywords: "mechanical faculty teachers professors" },
  { path: "/academics/engineering/electronics-communication/faculty", label: "ECE Faculty", keywords: "ece electronics faculty teachers professors" },

  // Health Sciences
  { path: "/academics/health-sciences/bsc-nursing", label: "B.Sc Nursing", keywords: "nursing bsc bachelor nurse" },
  { path: "/academics/health-sciences/pb-bsc-nursing", label: "Post Basic B.Sc Nursing", keywords: "post basic nursing pb" },
  { path: "/academics/health-sciences/msc-nursing", label: "M.Sc Nursing", keywords: "msc nursing master" },
  { path: "/academics/health-sciences/bpt", label: "BPT (Physiotherapy)", keywords: "bpt physiotherapy bachelor" },
  { path: "/academics/health-sciences/mpt", label: "MPT (Physiotherapy)", keywords: "mpt physiotherapy master" },
  { path: "/academics/health-sciences/b-pharm", label: "B.Pharm (Pharmacy)", keywords: "bpharm pharmacy bachelor" },
  { path: "/academics/health-sciences/pharm-d", label: "Pharm.D", keywords: "pharmd doctor pharmacy" },
  { path: "/academics/health-sciences/m-pharm-pharmaceutics", label: "M.Pharm Pharmaceutics", keywords: "mpharm pharmaceutics master pharmacy" },
  { path: "/academics/health-sciences/m-pharm-pharmacology", label: "M.Pharm Pharmacology", keywords: "mpharm pharmacology master pharmacy" },
  { path: "/academics/health-sciences/allied-health", label: "Allied Health Sciences", keywords: "allied health" },
  { path: "/academics/health-sciences/cdsimer", label: "CDSIMER", keywords: "cdsimer dental" },

  // Law programs
  { path: "/academics/law/ba-llb-honors", label: "BA LLB (Hons)", keywords: "ba llb honors law arts" },
  { path: "/academics/law/bba-llb-honors", label: "BBA LLB (Hons)", keywords: "bba llb honors law business" },
  { path: "/academics/law/llb-3-year", label: "LLB (3 Year)", keywords: "llb 3 year law" },
  { path: "/academics/law/llm-law-technology", label: "LLM - Law & Technology", keywords: "llm law technology master" },
  { path: "/academics/law/llm-corporate-commercial", label: "LLM - Corporate & Commercial", keywords: "llm corporate commercial law master" },
  { path: "/academics/law/faculty", label: "Law Faculty", keywords: "law faculty teachers professors" },

  // Commerce & Management
  { path: "/academics/commerce-and-management/bcom", label: "B.Com", keywords: "bcom bachelor commerce accounting" },
  { path: "/academics/commerce-and-management/bba", label: "BBA", keywords: "bba bachelor business administration" },
  { path: "/academics/commerce-and-management/mba", label: "MBA", keywords: "mba master business administration" },
  { path: "/academics/cee", label: "Centre for Executive Education", keywords: "executive education cee" },

  // Computer Applications
  { path: "/academics/computer-applications/bca", label: "BCA", keywords: "bca bachelor computer applications" },
  { path: "/academics/computer-applications/data-science", label: "B.Sc Data Science", keywords: "bsc data science bachelor" },
  { path: "/academics/computer-applications/mca", label: "MCA", keywords: "mca master computer applications" },
  { path: "/academics/computer-applications/msc-data-science", label: "M.Sc Data Science", keywords: "msc data science master" },

  // Basic & Applied Sciences
  { path: "/academics/physics", label: "Physics Department", keywords: "physics" },
  { path: "/academics/chemistry", label: "Chemistry Department", keywords: "chemistry" },
  { path: "/academics/mathematics", label: "Mathematics Department", keywords: "mathematics maths" },
  { path: "/academics/basic-applied-sciences/bsc-triple-major", label: "B.Sc Triple Major", keywords: "bsc triple major science" },
  { path: "/academics/basic-applied-sciences/msc-specializations", label: "M.Sc Specializations", keywords: "msc specialization science master" },

  // About & General pages
  { path: "/", label: "Home Page", keywords: "home main landing" },
  { path: "/about", label: "About DSU", keywords: "about university history story" },
  { path: "/vision-mission", label: "Vision & Mission", keywords: "vision mission purpose goal" },
  { path: "/about/leadership", label: "Leadership", keywords: "leadership chancellor vice chancellor leaders" },
  { path: "/academics", label: "All Academics", keywords: "academics schools all programs courses" },
  { path: "/admissions", label: "Admissions", keywords: "admissions apply application process how to join" },
  { path: "/admissions/international", label: "International Admissions", keywords: "international foreign students nri admissions" },
  { path: "/placements", label: "Placements", keywords: "placements jobs careers companies recruiters hiring salary package" },
  { path: "/campus-life", label: "Campus Life", keywords: "campus life hostel clubs activities sports student life" },
  { path: "/research", label: "Research Center", keywords: "research innovation publications papers" },
  { path: "/centre-of-excellence", label: "Centre of Excellence", keywords: "centre excellence coe" },
  { path: "/ai-first", label: "AI-First Initiative", keywords: "ai first artificial intelligence initiative" },
  { path: "/nvidia-ai-architecture", label: "NVIDIA AI Architecture", keywords: "nvidia gpu ai infrastructure" },
  { path: "/library", label: "Library", keywords: "library books resources reading" },
  { path: "/library/e-resources", label: "E-Resources (Digital Library)", keywords: "e-resources digital library online journals" },
  { path: "/examinations", label: "Examinations", keywords: "examinations exams results timetable schedule" },
  { path: "/alumni", label: "Alumni", keywords: "alumni graduates network former students" },
  { path: "/admissions", label: "Admissions - Contact & Inquiries", keywords: "contact phone email address inquiry reach out get in touch" },
  { path: "/events", label: "Events", keywords: "events activities happenings" },
  { path: "/careers", label: "Careers", keywords: "careers jobs openings vacancies recruitment" },
];

// Build a concise route list for the AI prompt
function buildRouteList(): string {
  return SITE_MAP.map(r => `- "${r.label}" → ${r.path}`).join("\n");
}

// Knowledge base cache
let knowledgeBaseContent: string | null = null;

function loadKnowledgeBase(): string {
  if (knowledgeBaseContent) return knowledgeBaseContent;
  try {
    const kbPath = path.join(__dirname, "../../knowledge-base/dsu-knowledge-base.txt");
    knowledgeBaseContent = fs.readFileSync(kbPath, "utf-8");
    return knowledgeBaseContent;
  } catch {
    return "";
  }
}

// Simple chunking and retrieval (reused from rag-chat)
function getRelevantContext(query: string, topK = 5): string {
  const content = loadKnowledgeBase();
  if (!content) return "";

  const chunkSize = 2000;
  const overlap = 300;
  const chunks: string[] = [];

  for (let i = 0; i < content.length; i += chunkSize - overlap) {
    const chunk = content.substring(i, i + chunkSize);
    if (chunk.trim()) chunks.push(chunk);
  }

  // Score chunks
  const queryLower = query.toLowerCase();
  const keywords = queryLower.split(/\s+/).filter(w => w.length > 2);

  const scored = chunks.map(chunk => {
    const textLower = chunk.toLowerCase();
    let score = 0;
    if (textLower.includes(queryLower)) score += 50;
    for (const kw of keywords) {
      const matches = (textLower.match(new RegExp(`\\b${kw}\\b`, "g")) || []).length;
      score += matches * 5;
      if (textLower.includes(kw)) score += 2;
    }
    if ((queryLower.includes("fee") || queryLower.includes("cost")) && textLower.includes("₹")) score += 20;
    if ((queryLower.includes("eligible") || queryLower.includes("eligibility")) && textLower.includes("eligibility")) score += 20;
    return { text: chunk, score };
  });

  return scored
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, topK)
    .map((s, i) => `[Source ${i + 1}]\n${s.text}`)
    .join("\n\n---\n\n");
}

/**
 * Build the system prompt for voice mode — detailed spoken answers
 */
function buildVoiceSystemPrompt(contextString: string): string {
  return `<system>
<role>
You are the DSU Voice Assistant — a friendly, conversational guide for Dayananda Sagar University. You are having a live voice conversation with the user.
</role>

<behavior>
You are in a LIVE VOICE CONVERSATION. The user speaks, you respond, and they can ask follow-up questions naturally.

Rules:
1. ALWAYS return type "answer" — never "navigate". The user is listening, not browsing.
2. Be warm, friendly, and conversational — like a helpful university counselor chatting with a prospective student.
3. Give clear, informative answers (3-5 sentences). Cover key facts but keep it natural.
4. Use the knowledge base to provide accurate information about programs, fees, eligibility, placements, campus life, etc.
5. After answering, naturally invite follow-up questions. For example: "Would you like to know more about the fees?" or "Feel free to ask about anything else!"
6. Remember the conversation context — if they asked about engineering before and now say "what about fees", they mean engineering fees.
7. If information is not in the knowledge base, say so honestly and suggest related topics you CAN help with.
8. Speak naturally — use contractions like "you'll", "it's", "we've". Avoid formal or robotic language.
9. Do NOT use markdown, bullet points, numbers, or any formatting — this will be read aloud.
10. Do NOT say "click here", "visit this page", or reference any visual elements.
</behavior>

<knowledge_base>
${contextString || "No specific context available for this query."}
</knowledge_base>

<response_format>
You MUST respond with valid JSON only. No markdown, no code fences, no extra text.
{
  "type": "answer",
  "message": "Your conversational spoken answer here"
}
</response_format>

<guidelines>
- Sound like a real person talking, not a bot reading text.
- For greetings: "Hey there! Welcome to DSU. I'm here to help you with anything about our university — programs, admissions, campus life, placements — just ask away!"
- For programs: explain what students learn, duration, and career prospects conversationally.
- For fees: give specific numbers if available in the knowledge base.
- For admissions: walk them through the process step by step.
- End responses with a natural follow-up prompt to keep the conversation going.
- Keep answers concise enough to listen to comfortably — about 3-5 sentences.
</guidelines>
</system>`;
}

/**
 * Build the system prompt for smart chat
 */
function buildSystemPrompt(contextString: string): string {
  const routeList = buildRouteList();

  return `<system>
<role>
You are the DSU Smart Assistant — a friendly, knowledgeable guide for Dayananda Sagar University. You chat warmly with users, give them quick useful information, AND navigate them to the right page.
</role>

<behavior>
Your job is to BOTH inform AND navigate. Think of yourself as a helpful university counselor chatting with a prospective student over WhatsApp.

Rules:
1. ALWAYS include a "message" that is conversational and informative — 2-3 sentences of useful, specific info about what the user asked.
2. ALWAYS try to return type "navigate" along with the MOST SPECIFIC relevant page from the site map — so users can explore further.
3. Only return type "answer" (no navigation) for pure greetings ("Hi", "Hello", "Thanks") or completely off-topic questions.
4. CRITICAL NAVIGATION RULE: When the user asks about a PROGRAM (e.g., "cse", "b.tech cse", "aiml", "computer science"), ALWAYS navigate to the DEPARTMENT page, NOT the faculty page. Faculty pages are only for explicit requests like "cse faculty", "show me professors", "who teaches".
5. DISTINGUISH BETWEEN CST AND CSE:
   - "cst" or "computer science technology" or "bsc computer science" → /academics/engineering/computer-technology (B.Sc program)
   - "cse" or "computer science engineering" or "b.tech computer science" → /academics/engineering/computer-science (B.Tech program)
   - If user just says "computer science", ask for clarification OR default to CSE (B.Tech) as it's more common
6. "computer applications" or "bca" or "mca" → /academics/computer-applications (NOT engineering/cse)
7. "ai" or "aiml" or "artificial intelligence" → /academics/engineering/artificial-intelligence
8. When a user asks for MORE INFO or says "tell me more", elaborate further on the same topic — don't repeat the same navigation.
9. If a user asks about a program NOT offered at DSU (e.g., Civil Engineering), say so clearly and redirect to a close alternative.
10. Be warm and conversational — use phrases like "Great choice!", "DSU's...", "It's a 4-year program..."
11. ONLY use what you know. Do NOT make up fee amounts, seat counts, or specific details that aren't in the knowledge base.
</behavior>

<tone_examples>
- User: "cse" → "CSE at DSU is one of the most popular programs here! It's a 4-year B.Tech that covers software engineering, AI, databases, and more. DSU has strong industry tie-ups with top tech companies for placements. Here's the full program page:"
- User: "hospital?" → "DSU runs CDSIMER — a full-fledged teaching hospital and dental institute. It's part of the School of Health Sciences and supports clinical training for nursing, physiotherapy, and dental students. Take a look:"
- User: "tell me more about AIML" → "AI & ML at DSU is cutting-edge — you'll work with real NVIDIA GPU infrastructure in the classroom and labs. The curriculum includes deep learning, NLP, computer vision, and data science. Graduates are placed at top AI companies. Here's the detailed program info:"
- User: "Hi" → "Hey there! 👋 I'm DSU's Smart Assistant. Ask me about programs, fees, admissions, placements, campus life — I'll give you the details and take you right there!"
- User: "fees?" → "Fees at DSU vary by program — B.Tech programs typically range from ₹1.2L to ₹1.8L per year, and MBA is around ₹2L per year. Scholarships and fee waivers are available too. Here's the full admissions and fee details:"
</tone_examples>

<site_map>
Available pages the user can navigate to:
${routeList}
</site_map>

<knowledge_base>
${contextString || "No specific context available for this query."}
</knowledge_base>

<response_format>
You MUST respond with valid JSON only. No markdown, no code fences, no extra text.
{
  "type": "navigate" or "answer",
  "path": "/path/to/page" (REQUIRED for navigate),
  "label": "Page Name" (REQUIRED for navigate),
  "message": "2-3 conversational sentences with real info + a smooth handoff like 'Here you go:' or 'Check it out:'"
}
</response_format>

<guidelines>
- Messages should be 2-3 sentences — informative but not overwhelming.
- End the message with a natural handoff phrase when navigating: "Here's the full page:", "Check it out:", "Here you go:", "Take a look:"
- Use knowledge base facts where available. If none, give general helpful context about DSU.
- Do NOT use bullet points, markdown, or lists — plain conversational prose only.
- Never say "I'm navigating you to..." or "Taking you to..." — it's robotic. Say the info first, then "Here you go:" or "Here's more:"
- When a user says "tell me more" / "elaborate" / "more info", give deeper details in the message — don't just repeat the same navigation.
- If the program is not offered at DSU, say so clearly and navigate to the closest alternative.
</guidelines>
</system>`;
}

/**
 * Handle smart chat requests
 */
export const handleSmartChat = async (req: Request, res: Response) => {
  try {
    const { message, conversationHistory, voiceMode } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({ error: "OpenAI API key not configured" });
    }

    console.log(`[SMART-CHAT] Processing: "${message}"`);

    // Get relevant context from knowledge base
    const context = getRelevantContext(message, 6);

    // Build system prompt — voice mode gets detailed answers, text mode gets navigation
    const systemPrompt = voiceMode ? buildVoiceSystemPrompt(context) : buildSystemPrompt(context);

    // Build messages array
    const messages: any[] = [{ role: "system", content: systemPrompt }];

    // Add conversation history (last 6 messages)
    if (conversationHistory && Array.isArray(conversationHistory)) {
      messages.push(...conversationHistory.slice(-6));
    }

    messages.push({ role: "user", content: message });

    // Call OpenAI
    const apiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages,
        temperature: voiceMode ? 0.3 : 0.1,
        max_tokens: voiceMode ? 1024 : 700,
        response_format: { type: "json_object" },
      }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      console.error("[SMART-CHAT] OpenAI error:", errorData);
      throw new Error(errorData.error?.message || "OpenAI API error");
    }

    const response = await apiResponse.json();
    const content = response.choices?.[0]?.message?.content;

    if (!content) {
      throw new Error("Empty response from OpenAI");
    }

    console.log(`[SMART-CHAT] Raw response: ${content}`);

    // Parse the JSON response
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = { type: "answer", message: content };
    }

    // Voice mode: always return answer, skip navigation logic
    if (voiceMode) {
      console.log(`[SMART-CHAT] Voice mode — returning answer`);
      return res.json({
        success: true,
        type: "answer",
        message: parsed.message || "I'm not sure how to help with that. Could you rephrase?",
      });
    }

    // Normalize: if AI returned suggestedPath instead of path, use it
    if (!parsed.path && parsed.suggestedPath) {
      parsed.path = parsed.suggestedPath;
    }

    // If AI returned "answer" but included a path, upgrade to "navigate"
    if (parsed.type === "answer" && parsed.path) {
      parsed.type = "navigate";
      if (!parsed.label) {
        const route = SITE_MAP.find(r => r.path === parsed.path);
        parsed.label = route?.label || "Page";
      }
    }

    // If AI returned "answer" with no path, try keyword matching to find a page
    if (parsed.type === "answer" && !parsed.path) {
      const queryLower = message.toLowerCase();
      let bestMatch: { path: string; label: string; score: number } | null = null;

      for (const route of SITE_MAP) {
        let score = 0;
        const routeKeywords = (route.keywords + " " + route.label).toLowerCase().split(/\s+/);
        for (const kw of routeKeywords) {
          if (kw.length > 2 && queryLower.includes(kw)) score += 3;
        }
        if (route.label.toLowerCase().includes(queryLower)) score += 10;
        if (score > 0 && (!bestMatch || score > bestMatch.score)) {
          bestMatch = { path: route.path, label: route.label, score };
        }
      }

      if (bestMatch && bestMatch.score >= 3) {
        parsed.type = "navigate";
        parsed.path = bestMatch.path;
        parsed.label = bestMatch.label;
        console.log(`[SMART-CHAT] Keyword fallback matched: ${bestMatch.label} (score: ${bestMatch.score})`);
      }
    }

    // Validate the path exists in our site map
    if (parsed.path) {
      const validRoute = SITE_MAP.find(r => r.path === parsed.path);
      if (!validRoute) {
        const pathLower = parsed.path.toLowerCase();
        const closest = SITE_MAP.find(r => r.path.toLowerCase() === pathLower);
        if (closest) {
          parsed.path = closest.path;
          parsed.label = closest.label;
        } else {
          parsed.type = "answer";
          parsed.path = undefined;
        }
      }
    }

    console.log(`[SMART-CHAT] Result: type=${parsed.type}, path=${parsed.path || "none"}`);

    res.json({
      success: true,
      type: parsed.type || "navigate",
      path: parsed.path,
      label: parsed.label,
      message: parsed.message || "I'm not sure how to help with that. Could you rephrase?",
    });
  } catch (error: any) {
    console.error("[SMART-CHAT] Error:", error?.message || error);
    res.status(500).json({
      success: false,
      type: "answer",
      message: "Sorry, I encountered an error. Please try again.",
      error: error?.message,
    });
  }
};
