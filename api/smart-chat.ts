/**
 * Vercel Serverless Function: Smart Chat API
 *
 * AI-driven intent detection with navigation and answers.
 * This is the Vercel equivalent of server/routes/smart-chat.ts
 */

import type { VercelRequest, VercelResponse } from "@vercel/node";
import OpenAI from "openai";

const SITE_MAP = [
  { path: "/academics/engineering", label: "School of Engineering", keywords: "engineering btech b.tech" },
  { path: "/academics/health-sciences", label: "School of Health Sciences", keywords: "health nursing pharmacy physiotherapy" },
  { path: "/academics/law", label: "School of Law", keywords: "law llb llm legal" },
  { path: "/academics/management-studies", label: "School of Commerce & Management", keywords: "commerce management bcom bba mba business" },
  { path: "/academics/basic-applied-sciences", label: "School of Basic & Applied Sciences", keywords: "science physics chemistry mathematics bsc msc" },
  { path: "/academics/computer-applications", label: "School of Computer Applications", keywords: "bca mca computer applications" },
  { path: "/academics/design/bdesign", label: "School of Design & Digital Trans-Media", keywords: "design bdesign digital media" },
  { path: "/academics/journalism-mass-communication", label: "School of Arts, Design & Humanities", keywords: "journalism mass communication arts humanities ba" },
  { path: "/academics/engineering/computer-science", label: "Computer Science & Engineering (CSE)", keywords: "computer science cse coding programming software" },
  { path: "/academics/engineering/artificial-intelligence", label: "Artificial Intelligence & ML", keywords: "artificial intelligence ai machine learning ml" },
  { path: "/academics/engineering/ai-data-science", label: "AI & Data Science", keywords: "ai data science analytics" },
  { path: "/academics/engineering/ai-robotics", label: "AI & Robotics", keywords: "ai robotics automation" },
  { path: "/academics/engineering/data-science", label: "Data Science", keywords: "data science big data analytics" },
  { path: "/academics/engineering/cybersecurity", label: "Cybersecurity", keywords: "cyber security hacking network security" },
  { path: "/academics/engineering/computer-technology", label: "Computer Technology", keywords: "computer technology ct" },
  { path: "/academics/engineering/cs-medical-engineering", label: "Medical Engineering", keywords: "medical engineering biomedical health tech" },
  { path: "/academics/engineering/mechanical-engineering", label: "Mechanical Engineering", keywords: "mechanical mech manufacturing" },
  { path: "/academics/engineering/aerospace-engineering", label: "Aerospace Engineering", keywords: "aerospace aero aviation flight" },
  { path: "/academics/engineering/electronics-communication", label: "Electronics & Communication (ECE)", keywords: "electronics communication ece vlsi embedded" },
  { path: "/academics/engineering/computer-science/faculty", label: "CSE Faculty", keywords: "cse faculty teachers professors computer science staff" },
  { path: "/academics/engineering/artificial-intelligence/faculty", label: "AI & ML Faculty", keywords: "ai ml faculty teachers professors" },
  { path: "/academics/engineering/mechanical-engineering/faculty", label: "Mechanical Engineering Faculty", keywords: "mechanical faculty teachers professors" },
  { path: "/academics/engineering/electronics-communication/faculty", label: "ECE Faculty", keywords: "ece electronics faculty teachers professors" },
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
  { path: "/academics/law/ba-llb-honors", label: "BA LLB (Hons)", keywords: "ba llb honors law arts" },
  { path: "/academics/law/bba-llb-honors", label: "BBA LLB (Hons)", keywords: "bba llb honors law business" },
  { path: "/academics/law/llb-3-year", label: "LLB (3 Year)", keywords: "llb 3 year law" },
  { path: "/academics/law/llm-law-technology", label: "LLM - Law & Technology", keywords: "llm law technology master" },
  { path: "/academics/law/llm-corporate-commercial", label: "LLM - Corporate & Commercial", keywords: "llm corporate commercial law master" },
  { path: "/academics/law/faculty", label: "Law Faculty", keywords: "law faculty teachers professors" },
  { path: "/academics/commerce-and-management/bcom", label: "B.Com", keywords: "bcom bachelor commerce accounting" },
  { path: "/academics/commerce-and-management/bba", label: "BBA", keywords: "bba bachelor business administration" },
  { path: "/academics/commerce-and-management/mba", label: "MBA", keywords: "mba master business administration" },
  { path: "/academics/cee", label: "Centre for Executive Education", keywords: "executive education cee" },
  { path: "/academics/computer-applications/bca", label: "BCA", keywords: "bca bachelor computer applications" },
  { path: "/academics/computer-applications/data-science", label: "B.Sc Data Science", keywords: "bsc data science bachelor" },
  { path: "/academics/computer-applications/mca", label: "MCA", keywords: "mca master computer applications" },
  { path: "/academics/computer-applications/msc-data-science", label: "M.Sc Data Science", keywords: "msc data science master" },
  { path: "/academics/physics", label: "Physics Department", keywords: "physics" },
  { path: "/academics/chemistry", label: "Chemistry Department", keywords: "chemistry" },
  { path: "/academics/mathematics", label: "Mathematics Department", keywords: "mathematics maths" },
  { path: "/academics/basic-applied-sciences/bsc-triple-major", label: "B.Sc Triple Major", keywords: "bsc triple major science" },
  { path: "/academics/basic-applied-sciences/msc-specializations", label: "M.Sc Specializations", keywords: "msc specialization science master" },
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
  { path: "/nvidia-architecture", label: "NVIDIA Architecture", keywords: "nvidia gpu ai infrastructure" },
  { path: "/library", label: "Library", keywords: "library books resources reading" },
  { path: "/library/e-resources", label: "E-Resources (Digital Library)", keywords: "e-resources digital library online journals" },
  { path: "/examinations", label: "Examinations", keywords: "examinations exams results timetable schedule" },
  { path: "/alumni", label: "Alumni", keywords: "alumni graduates network former students" },
  { path: "/admissions", label: "Admissions - Contact & Inquiries", keywords: "contact phone email address inquiry reach out get in touch" },
  { path: "/events", label: "Events", keywords: "events activities happenings" },
  { path: "/careers", label: "Careers", keywords: "careers jobs openings vacancies recruitment" },
];

function buildRouteList(): string {
  return SITE_MAP.map(r => `- "${r.label}" → ${r.path}`).join("\n");
}

function buildSystemPrompt(): string {
  const routeList = buildRouteList();

  return `<system>
<role>
You are the DSU Smart Assistant. You help users navigate the Dayananda Sagar University website AND answer their questions.
</role>

<behavior>
IMPORTANT: Your PRIMARY job is to NAVIGATE the user to the right page. ALWAYS try to find a matching page first.

Rules:
1. ALWAYS return type "navigate" if ANY page in the site map is even slightly relevant to the user's message.
2. Even for questions like "What are the fees?" or "Tell me about placements" - NAVIGATE to the relevant page (/admissions for fees, /placements for placements) AND include a brief answer in the message.
3. Only return type "answer" (without navigation) for pure greetings like "Hi", "Hello", "Thank you", or if the question has absolutely ZERO relation to any page in the site map.
4. When in doubt, NAVIGATE. The user wants to SEE the page, not read a chat answer.
5. IMPORTANT: When a user asks about a SPECIFIC program (e.g., "Civil Engineering", "Mechanical Engineering"):
   - If that exact program EXISTS in the site map: Navigate directly to it.
   - If it DOES NOT exist: In your message, state clearly that this program is not currently offered at DSU, then navigate to the closest alternative (like the School of Engineering page or a similar program). Example: "Civil Engineering is not currently offered at DSU. Here are our available engineering programs."

Examples of when to NAVIGATE:
- "What are the fees?" → Navigate to /admissions
- "Tell me about CSE" → Navigate to /academics/engineering/computer-science
- "Civil Engineering?" → "Civil Engineering is not currently offered at DSU. Here are our engineering programs:" → Navigate to /academics/engineering
- "How are placements?" → Navigate to /placements
- "Campus facilities" → Navigate to /campus-life
- "MBA program" → Navigate to /academics/commerce-and-management/mba
- "Contact details" → Navigate to /admissions
- "Who are the leaders?" → Navigate to /about/leadership
- "Library resources" → Navigate to /library
- "Exam schedule" → Navigate to /examinations
</behavior>

<site_map>
Available pages the user can navigate to:
${routeList}
</site_map>

<response_format>
You MUST respond with valid JSON only. No markdown, no code fences, no extra text.
{
  "type": "navigate" or "answer",
  "path": "/path/to/page" (REQUIRED for navigate),
  "label": "Page Name" (REQUIRED for navigate),
  "message": "Brief message about the page you're navigating to"
}

Examples:
- "Take me to computer science" → {"type":"navigate","path":"/academics/engineering/computer-science","label":"Computer Science & Engineering","message":"Taking you to Computer Science & Engineering."}
- "What are the fees?" → {"type":"navigate","path":"/admissions","label":"Admissions","message":"Taking you to the Admissions page where you can find all fee details."}
- "Civil Engineering?" → {"type":"navigate","path":"/academics/engineering","label":"School of Engineering","message":"Civil Engineering is not currently offered at DSU. Here are our available engineering programs."}
- "Hi" → {"type":"answer","message":"Hello! I'm DSU's Smart Assistant. Tell me what you want to see - programs, admissions, placements, campus life - and I'll take you right there!"}
</response_format>

<guidelines>
- ALWAYS navigate. Find the best matching page for ANY topic the user mentions.
- When a specific program is NOT offered at DSU, be clear about it in your message before suggesting alternatives.
- Keep messages short (1-2 sentences) - the page itself will show the details.
- Do NOT give long text answers. Navigate to the page and let the user read it there.
- Do NOT use markdown formatting - plain text only.
- Only use type "answer" for greetings or completely unrelated questions.
</guidelines>
</system>`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message, conversationHistory } = req.body;

    if (!message || typeof message !== "string") {
      return res.status(400).json({ error: "Message is required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return res.status(500).json({
        success: false,
        type: "answer",
        message: "AI service is not configured. Please contact the administrator.",
      });
    }

    // Build system prompt with site map
    const systemPrompt = buildSystemPrompt();

    // Build messages array
    const chatMessages: Array<{ role: "system" | "user" | "assistant"; content: string }> = [
      { role: "system", content: systemPrompt },
    ];

    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory.slice(-6)) {
        if (msg.role === "user" || msg.role === "assistant") {
          chatMessages.push({ role: msg.role, content: msg.content });
        }
      }
    }

    chatMessages.push({ role: "user", content: message });

    // Call OpenAI using the SDK (same pattern as rag-chat)
    const openai = new OpenAI({ apiKey });

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: chatMessages,
      temperature: 0,
      max_tokens: 512,
      response_format: { type: "json_object" },
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      throw new Error("Empty response from OpenAI");
    }

    // Parse the JSON response
    let parsed;
    try {
      parsed = JSON.parse(content);
    } catch {
      parsed = { type: "answer", message: content };
    }

    // Normalize: if AI returned suggestedPath instead of path
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

    // If AI returned "answer" with no path, try keyword matching
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
      }
    }

    // Validate the path exists in site map
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

    return res.status(200).json({
      success: true,
      type: parsed.type || "navigate",
      path: parsed.path,
      label: parsed.label,
      message: parsed.message || "I'm not sure how to help with that. Could you rephrase?",
    });
  } catch (error: any) {
    console.error("[SMART-CHAT] Error:", error?.message || error);
    return res.status(500).json({
      success: false,
      type: "answer",
      message: "Sorry, I encountered an error. Please try again.",
      error: error?.message,
    });
  }
}
