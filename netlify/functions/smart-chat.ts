/**
 * Standalone Netlify Function for Smart Chat
 * Handles /api/smart-chat without depending on Express or serverless-http
 */

const SITE_MAP = [
  { path: "/academics/engineering", label: "School of Engineering", keywords: "engineering btech b.tech" },
  { path: "/academics/health-sciences", label: "School of Health Sciences", keywords: "health nursing pharmacy physiotherapy" },
  { path: "/academics/law", label: "School of Law", keywords: "law llb llm legal" },
  { path: "/academics/management-studies", label: "School of Commerce & Management", keywords: "commerce management bcom bba mba business" },
  { path: "/academics/basic-applied-sciences", label: "School of Basic & Applied Sciences", keywords: "science physics chemistry mathematics bsc msc" },
  { path: "/academics/computer-applications", label: "School of Computer Applications", keywords: "bca mca computer applications" },
  { path: "/academics/design/bdesign", label: "School of Design & Digital Trans-Media", keywords: "design bdesign digital media" },
  { path: "/academics/journalism-mass-communication", label: "School of Arts, Design & Humanities", keywords: "journalism mass communication arts humanities ba" },
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
  { path: "/nvidia-ai-architecture", label: "NVIDIA AI Architecture", keywords: "nvidia gpu ai infrastructure" },
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
11. ONLY use what you know. Do NOT make up fee amounts, seat counts, or specific details not in the knowledge base.
</behavior>

<tone_examples>
- User: "cse" → "CSE at DSU is one of the most popular programs here! It's a 4-year B.Tech that covers software engineering, AI, databases, and more. DSU has strong industry tie-ups with top tech companies for placements. Here's the full program page:"
- User: "hospital?" → "DSU runs CDSIMER — a full-fledged teaching hospital and dental institute. It's part of the School of Health Sciences and supports clinical training for nursing, physiotherapy, and dental students. Take a look:"
- User: "fees?" → "Fees at DSU vary by program — B.Tech programs typically range from ₹1.2L to ₹1.8L per year, and MBA is around ₹2L per year. Scholarships and fee waivers are available too. Here's the full admissions and fee details:"
- User: "Hi" → "Hey there! I'm DSU's Smart Assistant. Ask me about programs, fees, admissions, placements, campus life — I'll give you the details and take you right there!"
</tone_examples>

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
  "message": "2-3 conversational sentences with real info + a smooth handoff like 'Here you go:' or 'Check it out:'"
}
</response_format>

<guidelines>
- Messages should be 2-3 sentences — informative but not overwhelming.
- End the message with a natural handoff phrase when navigating: "Here's the full page:", "Check it out:", "Here you go:", "Take a look:"
- Do NOT use bullet points, markdown, or lists — plain conversational prose only.
- Never say "I'm navigating you to..." or "Taking you to..." — it's robotic. Say the info first, then "Here you go:" or "Here's more:"
- When a user says "tell me more" / "more info", give deeper details — don't just repeat the same navigation.
- If the program is not offered at DSU, say so clearly and navigate to the closest alternative.
</guidelines>
</system>`;
}

function jsonResponse(statusCode: number, body: any) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    },
    body: JSON.stringify(body),
  };
}

export const handler = async (event: any) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return jsonResponse(200, {});
  }

  if (event.httpMethod !== "POST") {
    return jsonResponse(405, { error: "Method not allowed" });
  }

  try {
    const body = JSON.parse(event.body || "{}");
    const { message, conversationHistory } = body;

    if (!message || typeof message !== "string") {
      return jsonResponse(400, { error: "Message is required" });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return jsonResponse(500, {
        success: false,
        type: "answer",
        message: "AI service is not configured. Please contact the administrator.",
      });
    }

    // Build system prompt
    const systemPrompt = buildSystemPrompt();

    // Build messages array
    const messages: any[] = [{ role: "system", content: systemPrompt }];

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
        temperature: 0.1,
        max_tokens: 700,
        response_format: { type: "json_object" },
      }),
    });

    if (!apiResponse.ok) {
      const errorData = await apiResponse.json();
      throw new Error(errorData.error?.message || "OpenAI API error");
    }

    const response = await apiResponse.json();
    const content = response.choices?.[0]?.message?.content;

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

    return jsonResponse(200, {
      success: true,
      type: parsed.type || "navigate",
      path: parsed.path,
      label: parsed.label,
      message: parsed.message || "I'm not sure how to help with that. Could you rephrase?",
    });
  } catch (error: any) {
    return jsonResponse(500, {
      success: false,
      type: "answer",
      message: "Sorry, I encountered an error. Please try again.",
      error: error?.message,
    });
  }
};
