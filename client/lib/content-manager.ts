/**
 * CENTRALIZED CONTENT MANAGER
 * Single file for all content-related code:
 * - Data structures (announcements, news, events)
 * - Filtering logic (by school, department)
 * - No separate components, hooks, or data files
 */

// ============================================================================
// DATA STRUCTURES & TYPES
// ============================================================================

export interface CurriculumBatch {
  year: string;
  summary: string;
  documentUrl?: string;
  current?: boolean;
}

export interface CurriculumProgram {
  id: string;
  label: string;
  description: string;
  details?: string;
  image: string;
  batches: CurriculumBatch[];
  meta?: {
    level?: "Undergraduate" | "Postgraduate" | "Certificate";
    department?: string;
    school?: string;
  };
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: "circular" | "announcement";
  category: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  priority: "high" | "medium" | "low";
  date: string;
  expiryDate?: string;
  status: "active" | "archived";
  school?: string;
  image?: string;
  attachments?: Array<{ id: string; fileName: string; fileUrl: string; fileType: string; fileSize?: string }>;
}

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  status: "published" | "draft";
  school: string;
  department?: string;
  category: "Achievement" | "Research" | "Placement" | "Accreditation" | "General";
  image?: string;
  link?: string;
  author?: string;
  tags?: string[];
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time?: string;
  endDate?: string;
  endTime?: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  school: string;
  department?: string;
  category: "Workshop" | "Seminar" | "Conference" | "Hackathon" | "Sports" | "Cultural" | "Academic";
  image?: string;
  link?: string;
  registrationRequired?: boolean;
  registrationLink?: string;
  capacity?: number;
  registered?: number;
  tags?: string[];
}

// ============================================================================
// CENTRALIZED DATA - ALL ANNOUNCEMENTS, NEWS, EVENTS
// ============================================================================
// NOTE: This data is now managed in Directus CMS
// Keep these arrays for API integration - they will be populated from Directus endpoints

const ALL_ANNOUNCEMENTS: Announcement[] = [];

const ALL_NEWS: NewsItem[] = [];

const ALL_EVENTS: Event[] = [];

const ALL_CURRICULA: CurriculumProgram[] = [
  // ============ HEALTH SCIENCES: NURSING ============
  {
    id: "nursing-bsc",
    label: "B.Sc Nursing",
    description:
      "4-year comprehensive nursing program with clinical integration",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Latest curriculum with clinical rotation integration and evidence-based nursing practice across all 8 semesters",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/nursing/BSC-Curriculum-2025-26.pdf",
        current: true,
      },
      {
        year: "2024-25",
        summary: "Previous curriculum batch with comprehensive nursing theory and clinical practice",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/nursing/BSC-Curriculum-2024-25.pdf",
      },
    ],
    meta: { level: "Undergraduate", department: "Nursing", school: "Health Sciences" },
  },
  {
    id: "nursing-msc",
    label: "M.Sc Nursing",
    description: "2-year postgraduate specialization program",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Advanced specializations in Medical Surgical, Child Health, Mental Health, OB-GYN, and Psychiatric Nursing",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/nursing/MSC-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Postgraduate", department: "Nursing", school: "Health Sciences" },
  },
  // ============ HEALTH SCIENCES: PHYSIOTHERAPY ============
  {
    id: "physiotherapy-bpt",
    label: "B.P.T Physiotherapy",
    description:
      "4-year comprehensive physiotherapy program with clinical excellence",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Latest curriculum with clinical rotation integration, rehabilitation lab training, and evidence-based physiotherapy practice across all 8 semesters",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/physiotherapy/BPT-Curriculum-2025-26.pdf",
        current: true,
      },
      {
        year: "2024-25",
        summary:
          "Previous curriculum batch with comprehensive physiotherapy theory and clinical practice components",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/physiotherapy/BPT-Curriculum-2024-25.pdf",
      },
    ],
    meta: { level: "Undergraduate", department: "Physiotherapy", school: "Health Sciences" },
  },
  {
    id: "physiotherapy-mpt",
    label: "Master of Physiotherapy (MPT)",
    description: "2-year postgraduate specialization in physiotherapy",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Advanced specializations in Sports & Musculo Skeletal, Cardio Pulmonary, Women's Health, Neuro, and Community-Based Rehabilitation",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/physiotherapy/MPT-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Postgraduate", department: "Physiotherapy", school: "Health Sciences" },
  },
  // ============ HEALTH SCIENCES: PHARMACY ============
  {
    id: "pharmacy-bpharm",
    label: "B.Pharm",
    description: "4-year undergraduate pharmacy program with clinical training",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Comprehensive pharmacy curriculum with pharmaceutical sciences, clinical practice, and industry exposure across 8 semesters",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/pharmacy/BPharm-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Pharmacy", school: "Health Sciences" },
  },
  {
    id: "pharmacy-mpharm",
    label: "M.Pharm",
    description: "2-year postgraduate pharmacy specialization",
    image:
      "https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Advanced specializations in Pharmaceutics, Pharmacology, Pharmaceutical Analysis, and Pharmacognosy",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/pharmacy/MPharm-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Postgraduate", department: "Pharmacy", school: "Health Sciences" },
  },
  // ============ HEALTH SCIENCES: ALLIED HEALTH ============
  {
    id: "allied-health-bsc",
    label: "B.Sc Allied Health Sciences",
    description: "4-year undergraduate allied health program",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Comprehensive allied health curriculum with laboratory sciences, diagnostic techniques, and clinical training",
        documentUrl: "https://www.dsu.edu.in/images/HealthSciences/allied-health/BSC-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Allied Health Sciences", school: "Health Sciences" },
  },
  // ============ COMMERCE & MANAGEMENT: BBA ============
  {
    id: "bba-regular",
    label: "BBA (Regular)",
    description: "3-year comprehensive program preparing effective managers with modern teaching, research, and industry interaction",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Curriculum designed to develop competent, innovation-oriented, ethical managers with focus on leadership in global marketplace across 6 semesters",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-Regular-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BBA", school: "Commerce & Management" },
  },
  {
    id: "bba-bfsi",
    label: "BBA BFSI",
    description: "Specialization in Banking, Financial Services & Insurance with quantitative techniques and financial expertise",
    image: "https://images.unsplash.com/photo-1606531824254-d473aeb44dc5?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "Specialized curriculum emphasizing application of quantitative techniques to finance, investment banking, securities trading, and risk management",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-BFSI-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BBA", school: "Commerce & Management" },
  },
  {
    id: "bba-ro",
    label: "BBA Retail Operations (RO)",
    description: "4-year program in association with Retailers Association's Skill Council with earn-while-you-learn approach",
    image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary:
          "8-semester program covering retail operations with on-the-job internships, dual degree from DSU and RASCI, hands-on retail industry exposure",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/BBA-RO-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BBA", school: "Commerce & Management" },
  },
  // ============ COMMERCE & MANAGEMENT: BCOM ============
  {
    id: "bcom-standard",
    label: "B.Com (Standard)",
    description: "3-year comprehensive undergraduate program with foundation in accounting, finance, and commerce",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary: "Latest curriculum across 6 semesters combining rigorous academics with practical application",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-Standard-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BCom", school: "Commerce & Management" },
  },
  {
    id: "bcom-acca",
    label: "B.Com with ACCA Coaching",
    description: "3-year program integrated with ACCA (Association of Chartered Certified Accountants) coaching",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary: "Dual certification program combining B.Com degree with ACCA coaching and up to 6 paper exemptions",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-ACCA-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BCom", school: "Commerce & Management" },
  },
  {
    id: "bcom-cma",
    label: "B.Com with USA-CMA Coaching",
    description: "3-year program with Certified Management Accountant (CMA) certification from USA",
    image: "https://images.unsplash.com/photo-1553729784-e91953dec042?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary: "Advanced curriculum covering financial reporting, planning, performance control, and financial decision making",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CMA-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BCom", school: "Commerce & Management" },
  },
  {
    id: "bcom-ca",
    label: "B.Com with CA Foundation Coaching",
    description: "3-year program enabling simultaneous pursuit of B.Com and Chartered Accountant (CA)",
    image: "https://images.unsplash.com/photo-1590080876-e50b5ff8f5d9?q=80&w=1200&auto=format&fit=crop",
    batches: [
      {
        year: "2025-26",
        summary: "Integrated program blending B.Com and CA curricula with morning UG classes and afternoon CA classes on campus",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/B-Com-CA-Curriculum-2025-26.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "BCom", school: "Commerce & Management" },
  },
  // ============ COMMERCE & MANAGEMENT: MBA ============
  {
    id: "mba-general",
    label: "MBA (General)",
    description: "2-year postgraduate management program with specializations",
    image: "https://images.unsplash.com/photo-3184338/pexels-photo-3184338.jpeg",
    batches: [
      {
        year: "2025-27",
        summary: "Latest MBA curriculum with specializations in Finance, Marketing, Operations, and Business Analytics across 4 semesters",
        documentUrl: "https://www.dsu.edu.in/images/Commerce/MBA-General-Curriculum-2025-27.pdf",
        current: true,
      },
    ],
    meta: { level: "Postgraduate", department: "MBA", school: "Commerce & Management" },
  },
  // ============ ENGINEERING: CSE ============
  {
    id: "btech-cse",
    label: "B.Tech Computer Science Engineering",
    description: "4-year undergraduate program with AI/ML and cloud computing focus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Latest curriculum with core CSE, AI/ML specializations, cloud computing, data structures, and software development across 8 semesters",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-CSE-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "CSE", school: "Engineering" },
  },
  // ============ ENGINEERING: ECE ============
  {
    id: "btech-ece",
    label: "B.Tech Electronics & Communication Engineering",
    description: "4-year undergraduate program with VLSI and embedded systems focus",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Comprehensive curriculum with digital electronics, VLSI design, embedded systems, signal processing, and communication networks",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-ECE-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "ECE", school: "Engineering" },
  },
  // ============ ENGINEERING: DATA SCIENCE ============
  {
    id: "btech-data-science",
    label: "B.Tech Data Science Engineering",
    description: "4-year undergraduate program with big data and AI focus",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Advanced curriculum with big data analytics, machine learning, data mining, statistics, and cloud-based data systems",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-DataScience-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Data Science", school: "Engineering" },
  },
  // ============ ENGINEERING: MECHANICAL ============
  {
    id: "btech-mechanical",
    label: "B.Tech Mechanical Engineering",
    description: "4-year undergraduate program with manufacturing and automation focus",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Comprehensive curriculum with thermodynamics, mechanics, manufacturing, automation, CAD, and design engineering",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-Mechanical-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Mechanical", school: "Engineering" },
  },
  // ============ ENGINEERING: AEROSPACE ============
  {
    id: "btech-aerospace",
    label: "B.Tech Aerospace Engineering",
    description: "4-year undergraduate program with aircraft design and propulsion focus",
    image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Advanced curriculum with aerodynamics, flight mechanics, propulsion systems, aircraft design, and composite materials",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-Aerospace-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Aerospace", school: "Engineering" },
  },
  // ============ ENGINEERING: AIML ============
  {
    id: "btech-aiml",
    label: "B.Tech AI & Machine Learning",
    description: "4-year undergraduate program with deep learning and NLP focus",
    image: "https://images.unsplash.com/photo-1677442d019cecf4d49f15583663176d36f08e857?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Specialized curriculum with machine learning, deep learning, NLP, computer vision, reinforcement learning, and AI ethics",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-AIML-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "AIML", school: "Engineering" },
  },
  // ============ ENGINEERING: AIDS ============
  {
    id: "btech-aids",
    label: "B.Tech Artificial Intelligence & Data Science",
    description: "4-year undergraduate program with AI systems and analytics focus",
    image: "https://images.unsplash.com/photo-1677442d019cecf4d49f15583663176d36f08e857?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Comprehensive curriculum combining AI fundamentals, data science, analytics, intelligent systems, and industrial applications",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-AIDS-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "AIDS", school: "Engineering" },
  },
  // ============ ENGINEERING: AI ROBOTICS ============
  {
    id: "btech-ai-robotics",
    label: "B.Tech AI & Robotics",
    description: "4-year undergraduate program with robotics and autonomous systems focus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Specialized curriculum with robotics, autonomous systems, computer vision, control systems, and AI for robotics",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-AIRobotics-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "AI Robotics", school: "Engineering" },
  },
  // ============ ENGINEERING: CYBERSECURITY ============
  {
    id: "btech-cybersecurity",
    label: "B.Tech Cybersecurity",
    description: "4-year undergraduate program with information security and cryptography focus",
    image: "https://images.unsplash.com/photo-1516321318423-f06f70a504f0?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Advanced curriculum with cryptography, network security, application security, digital forensics, and ethical hacking",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-Cybersecurity-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Cybersecurity", school: "Engineering" },
  },
  // ============ ENGINEERING: COMPUTER TECHNOLOGY ============
  {
    id: "btech-computer-technology",
    label: "B.Tech Computer Technology",
    description: "4-year undergraduate program with hardware and software integration focus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Integrated curriculum with computer architecture, operating systems, embedded systems, and system design",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-ComputerTech-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Computer Technology", school: "Engineering" },
  },
  // ============ DESIGN ============
  {
    id: "bdesign-product",
    label: "B.Design Product Design",
    description: "4-year undergraduate program with product development and UX focus",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Comprehensive curriculum with design thinking, product design, UX/UI, materials, prototyping, and industry collaboration",
        documentUrl: "https://www.dsu.edu.in/images/Design/BDesign-ProductDesign-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Design", school: "Design" },
  },
  // ============ MEDICAL ENGINEERING ============
  {
    id: "btech-medical-engineering",
    label: "B.Tech Medical Engineering",
    description: "4-year undergraduate program with biomedical devices and healthcare tech focus",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-29",
        summary: "Specialized curriculum with biomedical instrumentation, medical devices, healthcare IT, signal processing, and biomechanics",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/BTech-MedicalEng-Curriculum-2025-29.pdf",
        current: true,
      },
    ],
    meta: { level: "Undergraduate", department: "Medical Engineering", school: "Engineering" },
  },
  // ============ MCA ============
  {
    id: "mca-general",
    label: "Master of Computer Applications",
    description: "3-year postgraduate program with advanced software development focus",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=400&fit=crop",
    batches: [
      {
        year: "2025-28",
        summary: "Comprehensive MCA curriculum with advanced programming, databases, web technologies, software engineering, and cloud computing",
        documentUrl: "https://www.dsu.edu.in/images/Engineering/MCA-Curriculum-2025-28.pdf",
        current: true,
      },
    ],
    meta: { level: "Postgraduate", department: "MCA", school: "Engineering" },
  },
  // NOTE: All curriculum data is now in Directus CMS
];

// ============================================================================
// FILTERING FUNCTIONS
// ============================================================================

export function getCurriculumByDepartment(
  school: string | undefined,
  department: string | undefined
): CurriculumProgram[] {
  if (!school || !department) return [];
  return ALL_CURRICULA.filter(
    (c) =>
      c.meta?.school === school && c.meta?.department === department
  );
}

export function getCurriculumBySchool(school: string | undefined): CurriculumProgram[] {
  if (!school) return [];
  return ALL_CURRICULA.filter((c) => c.meta?.school === school);
}

export function getAnnouncementsBySchool(school: string | undefined): Announcement[] {
  if (!school) return ALL_ANNOUNCEMENTS.filter((a) => a.status === "active" && !a.school);
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.status === "active" && (a.school === school || !a.school)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getNewsBySchool(school: string | undefined): NewsItem[] {
  if (!school) return ALL_NEWS.filter((n) => n.status === "published" && n.school === "University");
  return ALL_NEWS.filter(
    (n) => n.status === "published" && (n.school === school || n.school === "University")
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventsBySchool(school: string | undefined): Event[] {
  if (!school) return ALL_EVENTS.filter((e) => e.status === "upcoming" || e.status === "ongoing");
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      (e.school === school || e.school === "University")
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

// ============================================================================
// CAROUSEL RENDERING LOGIC
// ============================================================================

export type CarouselItem = {
  id: string;
  title: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  description: string;
  image?: string;
  link?: string;
};

export function convertAnnouncementToCarouselItem(a: Announcement): CarouselItem {
  return {
    id: a.id,
    title: a.title,
    category: "Announcement",
    date: a.date,
    description: a.content,
    image: a.image,
    link: a.attachments?.[0]?.fileUrl,
  };
}

export function convertNewsToCarouselItem(n: NewsItem): CarouselItem {
  return {
    id: n.id,
    title: n.title,
    category: "News",
    date: n.date,
    description: n.excerpt || n.content.substring(0, 100),
    image: n.image,
  };
}

export function convertEventToCarouselItem(e: Event): CarouselItem {
  return {
    id: e.id,
    title: e.title,
    category: "Event",
    date: e.date,
    description: e.description,
    image: e.image,
  };
}

export function getCategoryStyles(category: "Event" | "News" | "Announcement") {
  switch (category) {
    case "Event":
      return {
        borderColor: "border-brand-magenta",
        bgColor: "bg-brand-magenta/10",
        textColor: "text-brand-magenta",
        dotColor: "bg-brand-magenta",
      };
    case "News":
      return {
        borderColor: "border-brand-orange",
        bgColor: "bg-brand-orange/10",
        textColor: "text-brand-orange",
        dotColor: "bg-brand-orange",
      };
    default:
      return {
        borderColor: "border-brand-blue",
        bgColor: "bg-brand-blue/10",
        textColor: "text-brand-blue",
        dotColor: "bg-brand-blue",
      };
  }
}

// ============================================================================
// DEPARTMENT-SPECIFIC FILTERS
// ============================================================================

export function getNewsByDepartment(school: string | undefined, department: string | undefined): NewsItem[] {
  if (!school || !department) return [];
  return ALL_NEWS.filter(
    (n) => n.status === "published" && n.school === school && n.department === department
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEventsByDepartment(school: string | undefined, department: string | undefined): Event[] {
  if (!school || !department) return [];
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      e.school === school &&
      e.department === department
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getAnnouncementsByDepartment(school: string | undefined, department: string | undefined): Announcement[] {
  if (!school || !department) return [];
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.status === "active" && a.school === school && a.department === department
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// ============================================================================
// EXPORT SCHOOL-SPECIFIC GETTERS
// ============================================================================

export function getSchoolContent(school: string | undefined) {
  return {
    announcements: getAnnouncementsBySchool(school)
      .map(convertAnnouncementToCarouselItem)
      .slice(0, 10),
    news: getNewsBySchool(school)
      .map(convertNewsToCarouselItem)
      .slice(0, 10),
    events: getEventsBySchool(school)
      .map(convertEventToCarouselItem)
      .slice(0, 10),
  };
}

export function getDepartmentContent(school: string | undefined, department: string | undefined) {
  return {
    announcements: getAnnouncementsByDepartment(school, department)
      .map(convertAnnouncementToCarouselItem)
      .slice(0, 10),
    news: getNewsByDepartment(school, department)
      .map(convertNewsToCarouselItem)
      .slice(0, 10),
    events: getEventsByDepartment(school, department)
      .map(convertEventToCarouselItem)
      .slice(0, 10),
  };
}
