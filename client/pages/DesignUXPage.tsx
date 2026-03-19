import { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Plus, Minus } from "lucide-react";
import DesignSchoolNavBar from "@/components/DesignSchoolNavBar";

/* ───────────────────── image assets ───────────────────── */
const HERO_IMAGES = [
  "/images/ux-hero-1.jpg",
  "/images/ux-hero-2.jpg",
  "/images/ux-hero-3.jpg",
  "/images/ux-hero-4.jpg",
  "/images/ux-hero-5.jpg",
  "/images/ux-hero-6.jpg",
];

const WHY_CHOOSE_IMG = "/images/ux-why-choose.jpg";
const WHAT_LEARN_IMG = "/images/ux-what-learn.jpg";
const CAREER_IMG = "/images/ux-career.jpg";

/* ───────────────────── data ───────────────────── */
const WHY_CARDS = [
  {
    icon: "/images/ux-icon-book.svg",
    title: "Comprehensive Curriculum",
    desc: "Master UI/UX fundamentals, usability, research, wireframing, prototyping, and interaction design.",
  },
  {
    icon: "/images/ux-icon-hand.svg",
    title: "Hands-On Projects",
    desc: "Build your portfolio with real-world user research, interface design, and prototype testing.",
  },
  {
    icon: "/images/ux-icon-toolbox.svg",
    title: "Industry-Standard Tools",
    desc: "Learn Figma, Adobe Creative Suite, and other modern design tools.",
  },
  {
    icon: "/images/ux-icon-building.svg",
    title: "Industry Connections",
    desc: "Benefit from guest lectures, mentorships, and networking opportunities.",
  },
];

const LEARN_ITEMS = [
  { title: "UI/UX Design Principles", desc: "Foundations for effective and visually appealing interfaces." },
  { title: "User Research & Personas", desc: "Conduct research, analyze data, build personas." },
  { title: "Wireframing & Prototyping", desc: "Turn ideas into testable prototypes." },
  { title: "Interaction Design", desc: "Create seamless, intuitive user journeys." },
  { title: "Usability Testing", desc: "Design, conduct, and refine solutions based on user feedback." },
];

const CAREER_TAGS_ROW1 = [
  "UX Researcher", "Web Designer", "UX Consultant", "Interaction Designer", "Mobile App Designer",
];
const CAREER_TAGS_ROW2 = [
  "UX Designer", "Design Researcher", "Animation Designer", "Game Designer",
];

const SEMESTER_DATA: { left: string; right: string; leftSubjects: string[]; rightSubjects: string[] }[] = [
  {
    left: "SEMESTER - 1", right: "SEMESTER - 2",
    leftSubjects: ["Introduction to Design Thinking", "Design Sketching -I", "Colour Theory", "Design Principles", "Foundation of Art & Design - I", "Kannada Kali", "Constitution of India", "Technical English"],
    rightSubjects: ["Design Communication", "Mini Project - I", "Need Identification Analysis", "Design Sketching - II", "Foundation of Art and Design - II", "Photography & Videography"],
  },
  {
    left: "SEMESTER - 3", right: "SEMESTER - 4",
    leftSubjects: ["Ergonomics for UX Design", "Basics of Web Programming", "Representation Techniques for UX Design", "User Interface Design - I", "Graphic Design", "Design Studio - I Mini Project - III"],
    rightSubjects: ["UX Analytics", "Usability and Usability Testing", "Front End Development", "Design Studio - II Mini Project - IV (Application Design)", "User Interface Design - II", "Motion Graphics"],
  },
  {
    left: "SEMESTER - 5", right: "SEMESTER - 6",
    leftSubjects: ["Introduction to HCI", "Basics of Webflow", "Front End Development using Wordpress", "Design Studio - III Mini Project - V", "Professional Elective - I", "Professional Elective - II"],
    rightSubjects: ["UX Management", "Design & Entrepreneurship", "Open Elective - I", "Professional Elective - III", "Professional Elective - IV", "Mini Project - VI"],
  },
  {
    left: "SEMESTER - 7", right: "SEMESTER - 8",
    leftSubjects: ["Major Project Stage - I", "AI Technologies in UX", "Portfolio Development", "Design & Entrepreneurship"],
    rightSubjects: ["Major Project Stage - II", "Internship"],
  },
  {
    left: "Professional Elective - I", right: "Professional Elective - II",
    leftSubjects: ["Advanced Methods in User Research", "Angular JS", "Design Semiotics and Semantics", "UX for Smart Systems"],
    rightSubjects: ["Animation Design", "UX and Digitization", "Packaging and Branding Design"],
  },
  {
    left: "Professional Elective - III", right: "Professional Elective - IV",
    leftSubjects: ["Emerging Patterns in Interface Design", "Gamification and UX", "AI Applications in Design", "Programming in Python and React JS"],
    rightSubjects: ["UX Design Advances", "UX Approaches in Agile Environments", "AR & VR Technologies in UX", "Design for Assembly and Disassembly"],
  },
];

const ACCORDION_DATA = [
  {
    key: "peo",
    label: "PEO (Program Educational Objectives)",
    thumb: "/images/ux-peo-thumb.jpg",
    content: [
      "PEO1. Design, develop, test/verify and validate, and conduct operations of products, software and their interfaces in the digital and physical space.",
      "PEO2. Apply the knowledge of Design and / or pursue higher education and research to solve problems of social relevance.",
      "PEO3. Demonstrate effective working as professional and as team members in design in multidisciplinary projects, and demonstrating initiative, persistence in problem solving, and excellent technical communication skills.",
      "PEO4. Demonstrate engagement in lifelong, self-directed learning and career enhancement, anticipate changing professional and societal needs, and adapt rapidly to these changing needs.",
    ],
  },
  {
    key: "po",
    label: "PO (Program Outcomes)",
    thumb: "/images/ux-po-thumb.jpg",
    content: [
      "PO1. Design knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, technology, computing, arts and humanities to the solution of complex design problems.",
      "PO2. Problem analysis: Identify, formulate, review research literature, and analyze complex design problems reaching substantiated conclusions using the task clarification methods.",
      "PO3. Design/development of solutions: Design solutions for complex design problems that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.",
      "PO4. Conduct investigations of complex problems: Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.",
      "PO5. Modern tool usage: Create, select, and apply appropriate techniques, resources, modern design, engineering and IT tools including prediction and modeling to complex design activities with an understanding of the limitations.",
      "PO6. The engineer and society: Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional design practice.",
      "PO7. Environment and sustainability: Recognize the impact of the professional design solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.",
      "PO8. Ethics: Apply ethical principles and commit to professional ethics and responsibilities and norms of the design practice.",
      "PO9. Individual and team work: Demonstrate effective functioning as an individual and as a member or leader in diverse teams, and in multidisciplinary settings.",
      "PO10. Communication: Demonstrate effective communication on complex design activities with the design community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.",
      "PO11. Project management and finance: Demonstrate knowledge and understanding of the design and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.",
      "PO12. Life-long learning: Recognize the need for, and have the preparation and ability to engage in independent and life-long learning in the broadest context of technological change.",
    ],
  },
  {
    key: "pso",
    label: "PSO (Program Specific Outcomes)",
    thumb: "/images/ux-pso-thumb.jpg",
    content: [
      "PSO1. Design user experiences that are usable, functional, aesthetic, sustainable and usable in the physical and digital spaces, through the integration of design thinking, computing, technology, science and arts.",
      "PSO2. Identify problems and opportunities to address the implicit and explicit user requirements for various user groups in particular, for old age, specially abled, and kids.",
      "PSO3. Analyse the impact of the design solutions on the environment and be able to devise more sustainable solutions.",
      "PSO4. Design experiences that confirm public health, safety and the societal considerations, considering the appropriate cultural and emotional context of the users.",
    ],
  },
];

/* ─────────────── shared styles ─────────────── */
const heading64: React.CSSProperties = {
  fontFamily: "'Cormorant Garamond', Georgia, serif",
  fontWeight: 600,
  fontSize: "clamp(32px, 3.33vw, 64px)",
  lineHeight: "1.12",
  letterSpacing: "0.64px",
  color: "#000",
};

const body28: React.CSSProperties = {
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 400,
  fontSize: "clamp(15px, 1.46vw, 28px)",
  lineHeight: "1.78",
  color: "#474747",
};

const btnPrimary: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#011053",
  color: "#fff",
  fontFamily: "'Manrope', sans-serif",
  fontWeight: 500,
  fontSize: "clamp(14px, 1.46vw, 28px)",
  padding: "clamp(12px, 1.46vw, 28px) clamp(28px, 2.92vw, 56px)",
  border: "none",
  cursor: "pointer",
  textDecoration: "none",
  whiteSpace: "nowrap" as const,
};

/* ───────────────────── Sub-components ───────────────────── */

function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white" style={{ minHeight: "clamp(400px, 65.5vw, 1258px)" }}>
      {/* Left Content */}
      <div
        className="relative z-10"
        style={{
          paddingLeft: "clamp(20px, 5.21vw, 100px)",
          paddingTop: "clamp(120px, 15.16vw, 291px)",
          maxWidth: "clamp(300px, 45.7vw, 878px)",
        }}
      >
        {/* Back arrow */}
        <Link
          to="/academics/design/bdesign"
          className="flex items-center justify-center"
          style={{
            width: "clamp(50px, 7.45vw, 143px)",
            height: "clamp(30px, 3.65vw, 70px)",
            borderRadius: "43px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            position: "absolute",
            top: "clamp(80px, 7.29vw, 140px)",
            left: "clamp(16px, 2.5vw, 48px)",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#011053" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5"/><path d="M12 19l-7-7 7-7"/></svg>
        </Link>

        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 700,
            fontSize: "clamp(36px, 5.1vw, 98px)",
            lineHeight: "normal",
            color: "#000",
            marginBottom: "clamp(16px, 2.6vw, 50px)",
          }}
        >
          Design Meaningful Digital Experiences
        </h1>
        <p style={{ ...body28, maxWidth: "clamp(280px, 38.07vw, 731px)", marginBottom: "clamp(24px, 2.97vw, 57px)" }}>
          Learn how to research, prototype, and design user-centered interfaces that enhance usability and elevate digital products.
        </p>
        <a href="https://dsu.edu.in/admissions" target="_blank" rel="noopener noreferrer" style={btnPrimary}>
          Apply Now
        </a>
      </div>

      {/* Right side — image grid columns (hidden on mobile) */}
      <div
        className="hidden md:flex absolute gap-[clamp(12px,1.4vw,27px)]"
        style={{
          top: "clamp(60px, 6.15vw, 118px)",
          right: "clamp(20px, 5.2vw, 99px)",
          width: "clamp(300px, 45.78vw, 879px)",
          height: "clamp(500px, 58.28vw, 1119px)",
          overflow: "hidden",
          borderRadius: "14px",
        }}
      >
        {/* Column 1 — scrolls up */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ gap: "clamp(10px, 1.98vw, 38px)", borderRadius: "14px" }}>
          <div className="flex flex-col animate-scroll-up" style={{ gap: "clamp(10px, 1.98vw, 38px)" }}>
            {[HERO_IMAGES[0], HERO_IMAGES[2], HERO_IMAGES[4], HERO_IMAGES[0], HERO_IMAGES[2], HERO_IMAGES[4]].map((src, i) => (
              <img key={i} src={src} alt="" className="w-full object-cover" style={{ borderRadius: "14px", aspectRatio: "400/440" }} loading="lazy" />
            ))}
          </div>
        </div>
        {/* Column 2 — scrolls down */}
        <div className="flex-1 flex flex-col overflow-hidden" style={{ gap: "clamp(10px, 1.98vw, 38px)", borderRadius: "14px" }}>
          <div className="flex flex-col animate-scroll-down" style={{ gap: "clamp(10px, 1.98vw, 38px)" }}>
            {[HERO_IMAGES[1], HERO_IMAGES[3], HERO_IMAGES[5], HERO_IMAGES[1], HERO_IMAGES[3], HERO_IMAGES[5]].map((src, i) => (
              <img key={i} src={src} alt="" className="w-full object-cover" style={{ borderRadius: "14px", aspectRatio: "386/439" }} loading="lazy" />
            ))}
          </div>
        </div>

        {/* Top & bottom blur overlays */}
        <div className="absolute top-0 left-0 right-0" style={{ height: "74px", background: "linear-gradient(to bottom, white, transparent)", zIndex: 2 }} />
        <div className="absolute bottom-0 left-0 right-0" style={{ height: "80px", background: "linear-gradient(to top, white, transparent)", zIndex: 2 }} />
      </div>

      {/* Mobile hero image */}
      <div className="md:hidden w-full" style={{ padding: "clamp(16px,4vw,32px)" }}>
        <img src={HERO_IMAGES[0]} alt="UX Design" className="w-full object-cover" style={{ borderRadius: "14px", maxHeight: "300px" }} loading="lazy" />
      </div>
    </section>
  );
}

function ProgramInfoSection() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(32px, 5.2vw, 100px) clamp(20px, 5.21vw, 100px)" }}
    >
      <div
        className="flex flex-col lg:flex-row items-start justify-between"
        style={{ maxWidth: "1720px", margin: "0 auto", gap: "clamp(24px, 3vw, 60px)" }}
      >
        {/* Left: label + program name */}
        <div className="flex flex-col lg:flex-row" style={{ gap: "clamp(32px, 4.84vw, 93px)", flex: "1 1 auto" }}>
          <div style={{ maxWidth: "415px" }}>
            <h2 style={{ ...heading64, marginBottom: "clamp(16px, 1.67vw, 32px)" }}>Program</h2>
            <p style={body28}>Bachelor of Design – User Experience Design</p>
          </div>
          <p style={{ ...body28, maxWidth: "703px" }}>
            The User Experience Design program builds core skills in design thinking, user research, and interface design. Students learn to create intuitive digital experiences through hands-on studio projects and prototyping.
            <br /><br />
            The curriculum emphasizes practical learning, usability testing, and industry tools, preparing graduates for careers in UX/UI and digital product design.
          </p>
        </div>
        {/* CTA */}
        <a href="https://dsu.edu.in/admissions" target="_blank" rel="noopener noreferrer" style={btnPrimary} className="flex-shrink-0">
          Apply Now
        </a>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(32px, 5.2vw, 100px) clamp(20px, 5.21vw, 100px)" }}
    >
      <div style={{ maxWidth: "1720px", margin: "0 auto" }}>
        {/* Header row */}
        <div
          className="flex flex-col lg:flex-row items-start justify-between"
          style={{ gap: "clamp(16px, 2vw, 40px)", marginBottom: "clamp(32px, 4.17vw, 80px)" }}
        >
          <h2 style={{ ...heading64, maxWidth: "734px" }}>Why To Choose UX Design?</h2>
          <p style={{ ...body28, maxWidth: "847px" }}>
            The User Experience Design program builds core skills in design thinking, user research and interface design.
          </p>
        </div>

        {/* Cards + Image */}
        <div className="flex flex-col lg:flex-row items-stretch" style={{ gap: "clamp(12px, 1.04vw, 20px)" }}>
          {/* 2x2 cards grid */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2"
            style={{ gap: "clamp(12px, 1.35vw, 26px) clamp(12px, 1.04vw, 20px)", flex: "0 0 auto", width: "clamp(280px, 44.27vw, 850px)" }}
          >
            {WHY_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-white"
                style={{
                  borderRadius: "8px",
                  boxShadow: "0px 4px 44px 0px rgba(0,0,0,0.08)",
                  padding: "clamp(24px, 3.28vw, 63px) clamp(16px, 1.67vw, 32px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: "clamp(200px, 20.68vw, 397px)",
                }}
              >
                <img
                  src={card.icon}
                  alt=""
                  style={{ width: "clamp(36px, 3.75vw, 72px)", height: "clamp(36px, 3.75vw, 72px)" }}
                  loading="lazy"
                />
                <div style={{ marginTop: "clamp(24px, 3.7vw, 71px)" }}>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "clamp(18px, 1.56vw, 30px)",
                      lineHeight: "1.2",
                      color: "#1E242C",
                      marginBottom: "clamp(6px, 0.52vw, 10px)",
                    }}
                  >
                    {card.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(13px, 0.94vw, 18px)",
                      lineHeight: "1.5",
                      color: "#414D60",
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right image */}
          <div className="flex-1 hidden lg:block" style={{ minHeight: "clamp(300px, 42.71vw, 820px)" }}>
            <img
              src={WHY_CHOOSE_IMG}
              alt="UI/UX Design workspace"
              className="w-full h-full object-cover"
              style={{ borderRadius: "16px" }}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatYouLearnSection() {
  return (
    <section
      className="w-full"
      style={{ padding: "clamp(32px, 5.2vw, 100px) clamp(20px, 5.21vw, 100px)" }}
    >
      <div
        className="flex flex-col lg:flex-row items-start"
        style={{ maxWidth: "1720px", margin: "0 auto", gap: "clamp(32px, 7.6vw, 146px)" }}
      >
        {/* Left column: heading + image */}
        <div style={{ flex: "0 0 auto", width: "clamp(280px, 44.27vw, 850px)" }}>
          <h2 style={{ ...heading64, marginBottom: "clamp(16px, 1.67vw, 32px)" }}>What You will learn?</h2>
          <p style={{ ...body28, maxWidth: "840px", marginBottom: "clamp(24px, 3.59vw, 69px)" }}>
            The User Experience Design program builds core skills in design thinking, user research, and interface design.
          </p>
          <div className="hidden lg:block" style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "850/779" }}>
            <img
              src={WHAT_LEARN_IMG}
              alt="Students learning UX Design"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right column: numbered list */}
        <div className="flex-1 w-full" style={{ paddingTop: "clamp(0px, 4.64vw, 89px)" }}>
          {LEARN_ITEMS.map((item, idx) => (
            <div key={idx}>
              <div className="flex items-start" style={{ gap: "clamp(16px, 2.5vw, 48px)", padding: "clamp(8px, 1vw, 16px) 0" }}>
                {/* Number badge */}
                <div
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: "clamp(32px, 2.6vw, 50px)",
                    height: "clamp(32px, 2.6vw, 50px)",
                    borderRadius: "5px",
                    backgroundColor: "#011053",
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 600,
                    fontSize: "clamp(14px, 1.25vw, 24px)",
                    color: "#fff",
                  }}
                >
                  {idx + 1}
                </div>
                {/* Text */}
                <div>
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontWeight: 600,
                      fontSize: "clamp(22px, 2.08vw, 40px)",
                      lineHeight: "1.2",
                      color: "#1E242C",
                      marginBottom: "clamp(8px, 0.89vw, 17px)",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(14px, 1.15vw, 22px)",
                      lineHeight: "1.5",
                      color: "#474747",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
              {idx < LEARN_ITEMS.length - 1 && (
                <div style={{ height: "1px", backgroundColor: "#E0E0E0", margin: "clamp(16px, 2.5vw, 48px) 0" }} />
              )}
            </div>
          ))}
        </div>

        {/* Mobile image */}
        <div className="lg:hidden w-full" style={{ borderRadius: "16px", overflow: "hidden", marginTop: "clamp(16px, 2vw, 32px)" }}>
          <img src={WHAT_LEARN_IMG} alt="Students learning UX Design" className="w-full object-cover" style={{ maxHeight: "400px" }} loading="lazy" />
        </div>
      </div>
    </section>
  );
}

function CareerOpportunitiesSection() {
  return (
    <section className="w-full" style={{ backgroundColor: "#000", padding: "clamp(32px, 5.21vw, 100px) 0 0 0" }}>
      <div style={{ padding: "0 clamp(20px, 5.21vw, 100px)", maxWidth: "1920px", margin: "0 auto" }}>
        {/* Header row */}
        <div
          className="flex flex-col lg:flex-row items-start justify-between"
          style={{ gap: "clamp(16px, 2vw, 40px)", marginBottom: "clamp(32px, 4.95vw, 95px)", maxWidth: "1720px" }}
        >
          <h2 style={{ ...heading64, color: "#fff" }}>Career Opportunities</h2>
          <p
            style={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 400,
              fontSize: "clamp(15px, 1.46vw, 28px)",
              lineHeight: "1.78",
              color: "#797979",
              maxWidth: "840px",
            }}
          >
            Graduating with our User Experience design program can help you prepare for a wide range of roles, some of them include:
          </p>
        </div>

        {/* Large image */}
        <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "1720/779", maxWidth: "1720px", marginBottom: "clamp(40px, 5.7vw, 110px)" }}>
          <img src={CAREER_IMG} alt="UX Design team" className="w-full h-full object-cover" loading="lazy" />
        </div>
      </div>

      {/* Scrolling career tags */}
      <div className="w-full overflow-hidden" style={{ paddingBottom: "clamp(32px, 5.21vw, 100px)" }}>
        {/* Row 1 — scrolls left */}
        <div className="flex overflow-hidden" style={{ marginBottom: "clamp(12px, 1.2vw, 20px)" }}>
          <div className="flex animate-marquee-left" style={{ gap: "clamp(12px, 1.5vw, 30px)" }}>
            {[...CAREER_TAGS_ROW1, ...CAREER_TAGS_ROW1, ...CAREER_TAGS_ROW1].map((tag, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(8px, 0.8vw, 15px) clamp(16px, 1.61vw, 31px)",
                  borderRadius: "73px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.5vw, 29px)",
                  color: "#C0C0C0",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        {/* Row 2 — scrolls right */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-right" style={{ gap: "clamp(12px, 1.5vw, 30px)" }}>
            {[...CAREER_TAGS_ROW2, ...CAREER_TAGS_ROW2, ...CAREER_TAGS_ROW2, ...CAREER_TAGS_ROW2].map((tag, i) => (
              <span
                key={i}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "clamp(8px, 0.8vw, 15px) clamp(16px, 1.61vw, 31px)",
                  borderRadius: "73px",
                  backgroundColor: "rgba(255,255,255,0.1)",
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.5vw, 29px)",
                  color: "#C0C0C0",
                  whiteSpace: "nowrap" as const,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CourseStructureSection() {
  const [openRows, setOpenRows] = useState<Record<number, boolean>>({});
  const toggleRow = (idx: number) => setOpenRows((prev) => ({ ...prev, [idx]: !prev[idx] }));

  return (
    <section
      className="w-full"
      style={{ padding: "clamp(32px, 5.2vw, 100px) clamp(20px, 6.09vw, 117px)" }}
    >
      <div style={{ maxWidth: "1686px", margin: "0 auto" }}>
        <h2 style={{ ...heading64, marginBottom: "clamp(16px, 1.67vw, 32px)" }}>Course Structure</h2>
        <p style={{ ...body28, maxWidth: "1394px", marginBottom: "clamp(32px, 4.17vw, 80px)" }}>
          A semester-by-semester outline of subjects, studio projects, electives, and hands-on learning experiences.
        </p>

        <div className="flex flex-col" style={{ gap: "clamp(24px, 2.5vw, 48px)" }}>
          {SEMESTER_DATA.map((row, idx) => {
            const isOpen = !!openRows[idx];
            return (
              <div key={idx} className="flex flex-col md:flex-row" style={{ gap: "clamp(20px, 2.92vw, 56px)" }}>
                <SemesterItem label={row.left} subjects={row.leftSubjects} isOpen={isOpen} onToggle={() => toggleRow(idx)} />
                <SemesterItem label={row.right} subjects={row.rightSubjects} isOpen={isOpen} onToggle={() => toggleRow(idx)} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SemesterItem({ label, subjects, isOpen, onToggle }: { label: string; subjects: string[]; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="flex-1 min-w-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between"
        style={{
          cursor: "pointer",
          background: "none",
          border: "none",
          padding: "0 0 clamp(16px, 2.08vw, 40px) 0",
        }}
      >
        <span
          style={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(18px, 1.88vw, 36px)",
            lineHeight: "1.2",
            color: "#1E242C",
          }}
        >
          {label}
        </span>
        <span
          style={{
            width: "clamp(28px, 2.5vw, 48px)",
            height: "clamp(28px, 2.5vw, 48px)",
            borderRadius: "50%",
            border: "2px solid #011053",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          {isOpen ? (
            <Minus style={{ width: "clamp(14px, 1.25vw, 24px)", height: "clamp(14px, 1.25vw, 24px)", color: "#011053" }} />
          ) : (
            <Plus style={{ width: "clamp(14px, 1.25vw, 24px)", height: "clamp(14px, 1.25vw, 24px)", color: "#011053" }} />
          )}
        </span>
      </button>
      <div style={{ height: "1px", backgroundColor: "#D1D5DB" }} />
      {isOpen && (
        <div style={{ padding: "clamp(8px, 1.04vw, 20px) 0 0 clamp(12px, 1.56vw, 30px)" }}>
          {subjects.map((subject, i) => (
            <div key={i}>
              <p
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(14px, 1.25vw, 24px)",
                  lineHeight: "1.4",
                  color: "#1E242C",
                  padding: "clamp(10px, 1.04vw, 20px) 0",
                  margin: 0,
                }}
              >
                {subject}
              </p>
              <div style={{ height: "1px", backgroundColor: "#D1D5DB" }} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function ObjectivesSection() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const toggle = (key: string) => setOpenAccordion((prev) => (prev === key ? null : key));
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});
  const toggleReadMore = (key: string) => setExpandedItems((prev) => ({ ...prev, [key]: !prev[key] }));
  const PREVIEW_COUNT = 2;

  return (
    <section className="w-full" style={{ backgroundColor: "#000", padding: "clamp(40px, 5.21vw, 100px) clamp(20px, 5.36vw, 103px)" }}>
      <div style={{ maxWidth: "1706px", margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontWeight: 600,
            fontSize: "clamp(36px, 3.91vw, 75px)",
            lineHeight: "1",
            color: "#fff",
            marginBottom: "clamp(32px, 4.9vw, 94px)",
          }}
        >
          Objectives &amp; Outcomes
        </h2>

        <div>
          {ACCORDION_DATA.map((item) => {
            const isOpen = openAccordion === item.key;
            const isExpanded = !!expandedItems[item.key];
            const visibleContent = isExpanded ? item.content : item.content.slice(0, PREVIEW_COUNT);
            const hasMore = item.content.length > PREVIEW_COUNT;
            return (
              <div
                key={item.key}
                style={{
                  borderTop: "1px solid #cdcdcd",
                  borderBottom: "1px solid #cdcdcd",
                }}
              >
                <button
                  onClick={() => toggle(item.key)}
                  className="w-full flex items-center"
                  style={{
                    cursor: "pointer",
                    background: "none",
                    border: "none",
                    padding: "clamp(12px, 1.2vw, 23px) clamp(10px, 1.04vw, 20px)",
                    gap: "clamp(12px, 1.61vw, 31px)",
                  }}
                >
                  {/* Thumbnail */}
                  <div
                    className="flex-shrink-0 hidden sm:block"
                    style={{
                      width: "clamp(80px, 10.42vw, 200px)",
                      height: "clamp(28px, 2.78vw, 53px)",
                      borderRadius: "24px",
                      overflow: "hidden",
                    }}
                  >
                    <img src={item.thumb} alt="" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  {/* Label */}
                  <span
                    className="flex-1 text-left"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(16px, 1.67vw, 32px)",
                      lineHeight: "1.67",
                      letterSpacing: "-1.33px",
                      color: "#fff",
                    }}
                  >
                    {item.label}
                  </span>
                  {/* Toggle icon */}
                  <span style={{ color: "#fff", flexShrink: 0 }}>
                    {isOpen ? (
                      <Minus style={{ width: "clamp(18px, 1.38vw, 26px)", height: "clamp(18px, 1.38vw, 26px)" }} />
                    ) : (
                      <Plus style={{ width: "clamp(18px, 1.38vw, 26px)", height: "clamp(18px, 1.38vw, 26px)" }} />
                    )}
                  </span>
                </button>

                {/* Content */}
                {isOpen && (
                  <div
                    style={{
                      padding: "clamp(8px, 0.83vw, 16px) clamp(10px, 1.04vw, 20px) clamp(20px, 2.08vw, 40px) clamp(10px, 1.04vw, 20px)",
                    }}
                  >
                    {visibleContent.map((line, i) => (
                      <p
                        key={i}
                        style={{
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 400,
                          fontSize: "clamp(13px, 0.94vw, 18px)",
                          lineHeight: "1.7",
                          color: "#C0C0C0",
                          marginBottom: "clamp(8px, 0.8vw, 14px)",
                          margin: 0,
                          padding: "0 0 clamp(8px, 0.63vw, 12px) 0",
                        }}
                      >
                        {line}
                      </p>
                    ))}
                    {hasMore && (
                      <button
                        onClick={(e) => { e.stopPropagation(); toggleReadMore(item.key); }}
                        style={{
                          marginTop: "clamp(8px, 0.83vw, 16px)",
                          background: "none",
                          border: "1px solid rgba(255,255,255,0.3)",
                          borderRadius: "8px",
                          padding: "clamp(8px, 0.63vw, 12px) clamp(16px, 1.25vw, 24px)",
                          cursor: "pointer",
                          fontFamily: "'Manrope', sans-serif",
                          fontWeight: 500,
                          fontSize: "clamp(12px, 0.83vw, 16px)",
                          color: "#fff",
                          transition: "all 0.2s ease",
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
                        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)"; }}
                      >
                        {isExpanded ? "Show Less" : `Read More (${item.content.length - PREVIEW_COUNT} more)`}
                      </button>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DesignSchoolFooter() {
  const linkStyle: React.CSSProperties = { fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 1.25vw, 24px)", lineHeight: "1.11", color: "#474747", textDecoration: "none" };
  const headingStyle: React.CSSProperties = { fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(18px, 1.67vw, 32px)", lineHeight: "1", color: "#1e1e1e", marginBottom: "clamp(20px, 2.78vw, 53px)" };

  return (
    <footer className="w-full bg-white" style={{ borderTop: "1.333px solid #EFF0F6" }}>
      <div className="mx-auto" style={{ maxWidth: "1660px", padding: "clamp(40px, 8.33vw, 160px) clamp(20px, 4vw, 80px) clamp(20px, 2.5vw, 48px)" }}>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5" style={{ gap: "clamp(24px, 3vw, 60px) clamp(16px, 2vw, 40px)" }}>
          {/* Col 1: Logo */}
          <div className="col-span-2 md:col-span-1 flex flex-col" style={{ gap: "clamp(16px, 1.67vw, 32px)" }}>
            <img src="/images/footer-dsu-logo.png" alt="DSU" style={{ width: "clamp(120px, 9.17vw, 176px)", height: "auto", objectFit: "contain" }} />
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: "clamp(14px, 1.46vw, 28px)", lineHeight: "1.43", letterSpacing: "0.28px", color: "#565B5E" }}>
              Online Degree Programs
            </p>
            <div className="flex items-center" style={{ gap: "clamp(12px, 1.51vw, 29px)" }}>
              <a href="https://www.facebook.com/dsaboroad" target="_blank" rel="noopener noreferrer"><img src="/images/footer-facebook.svg" alt="Facebook" style={{ width: "15px", height: "25px" }} /></a>
              <a href="https://www.instagram.com/daboroad" target="_blank" rel="noopener noreferrer"><img src="/images/footer-instagram.svg" alt="Instagram" style={{ width: "25px", height: "25px" }} /></a>
              <a href="https://www.linkedin.com/school/dayananda-sagar-university" target="_blank" rel="noopener noreferrer"><img src="/images/footer-linkedin.svg" alt="LinkedIn" style={{ width: "25px", height: "24px" }} /></a>
              <a href="https://www.youtube.com/@DayanandaSagarUniversity" target="_blank" rel="noopener noreferrer"><img src="/images/footer-youtube.svg" alt="YouTube" style={{ width: "28px", height: "20px" }} /></a>
            </div>
          </div>

          {/* Col 2: Home */}
          <div>
            <p style={headingStyle}>Home</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "Academics", h: "/academics" }, { n: "Admissions", h: "/admissions" }, { n: "Campus Life", h: "/campus-life" }, { n: "Contact Us", h: "/contact-complaints" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 3: Schools */}
          <div>
            <p style={headingStyle}>Schools</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "School of Engineering", h: "/academics/engineering" }, { n: "School of Law", h: "/academics/law" }, { n: "School Of Health Sciences", h: "/academics/health-sciences" }, { n: "School of Computer Applications", h: "/academics/computer-applications" }, { n: "School of Design & Digital Transmedia", h: "/academics/design/bdesign" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 4: Quick Links */}
          <div>
            <p style={headingStyle}>Quick Links</p>
            <div className="flex flex-col" style={{ gap: "clamp(12px, 1.25vw, 24px)" }}>
              {[{ n: "Academic Calendar", h: "/examinations" }, { n: "Sports Facilities", h: "/campus-life" }, { n: "NCC/NSS", h: "/campus-life" }, { n: "Barrier Free Environment", h: "/facilities" }].map((l) => (
                <a key={l.n} href={l.h} style={linkStyle} className="hover:text-[#003366] transition-colors">{l.n}</a>
              ))}
            </div>
          </div>

          {/* Col 5: Contact Us */}
          <div>
            <p style={headingStyle}>Contacts us</p>
            <div className="flex flex-col" style={{ gap: "clamp(16px, 1.67vw, 32px)" }}>
              <a href="mailto:admissions@dsu.edu.in" className="flex items-center hover:text-[#003366] transition-colors" style={{ ...linkStyle, gap: "8px" }}>
                <svg width="20" height="16" viewBox="0 0 22 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M2 1h18a1.5 1.5 0 011.5 1.5v13A1.5 1.5 0 0120 17H2a1.5 1.5 0 01-1.5-1.5v-13A1.5 1.5 0 012 1z" stroke="#474747" strokeWidth="1.5"/><path d="M21.5 2L11 10.5.5 2" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                admissions@dsu.edu.in
              </a>
              <a href="tel:08046461800" className="flex items-center hover:text-[#003366] transition-colors" style={{ ...linkStyle, gap: "8px" }}>
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0"><path d="M21 15.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 013.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L7.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0121 15.92z" stroke="#474747" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                080 46461800 / 080
              </a>
              <div className="flex items-start" style={{ gap: "8px" }}>
                <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0" style={{ marginTop: "3px" }}><path d="M10 1C5.58 1 2 4.58 2 9c0 6.5 8 14 8 14s8-7.5 8-14c0-4.42-3.58-8-8-8z" stroke="#474747" strokeWidth="1.5"/><circle cx="10" cy="9" r="3" stroke="#474747" strokeWidth="1.5"/></svg>
                <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: "clamp(13px, 1.25vw, 24px)", lineHeight: "1.67", color: "#474747" }}>
                  Devarakaggalahalli, Harohalli, Kanakapura Road, Bengaluru South Dt. – 562 112
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid #EFF0F6", padding: "clamp(12px, 1.5vw, 24px) clamp(20px, 4vw, 80px)" }}>
        <div className="flex flex-col sm:flex-row items-center justify-between mx-auto" style={{ maxWidth: "1660px", gap: "12px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.25vw, 24px)", color: "#474747" }}>
            Copyright &copy; 2025 DSU. All Rights Reserved
          </p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 400, fontSize: "clamp(12px, 1.25vw, 24px)", color: "#474747" }}>
            All Rights Reserved |{" "}
            <a href="#" style={{ color: "#003366", textDecoration: "underline" }}>Terms and Conditions</a>
            {" | "}
            <a href="#" style={{ color: "#003366", textDecoration: "underline" }}>Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────── CSS Keyframes (injected once) ───────────────────── */
const styleSheet = `
@keyframes scrollUp {
  0% { transform: translateY(0); }
  100% { transform: translateY(-50%); }
}
@keyframes scrollDown {
  0% { transform: translateY(-50%); }
  100% { transform: translateY(0); }
}
@keyframes marqueeLeft {
  0% { transform: translateX(0); }
  100% { transform: translateX(-33.333%); }
}
@keyframes marqueeRight {
  0% { transform: translateX(-25%); }
  100% { transform: translateX(0); }
}
.animate-scroll-up {
  animation: scrollUp 20s linear infinite;
}
.animate-scroll-down {
  animation: scrollDown 20s linear infinite;
}
.animate-marquee-left {
  animation: marqueeLeft 25s linear infinite;
}
.animate-marquee-right {
  animation: marqueeRight 25s linear infinite;
}
`;

/* ───────────────────── Main Page ───────────────────── */
export default function DesignUXPage() {
  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "'Manrope', sans-serif" }}>
      {/* Inject keyframe animations */}
      <style>{styleSheet}</style>

      {/* Nav Bar */}
      <DesignSchoolNavBar variant="dark" />

      {/* Hero */}
      <HeroSection />

      {/* Program Info */}
      <ProgramInfoSection />

      {/* Why Choose UI/UX */}
      <WhyChooseSection />

      {/* What You'll Learn */}
      <WhatYouLearnSection />

      {/* Career Opportunities */}
      <CareerOpportunitiesSection />

      {/* Course Structure */}
      <CourseStructureSection />

      {/* Objectives & Outcomes */}
      <ObjectivesSection />

      {/* Footer */}
      <DesignSchoolFooter />
    </div>
  );
}
