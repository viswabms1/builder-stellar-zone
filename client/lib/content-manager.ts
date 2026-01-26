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

const ALL_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "univ-announce-1",
    title: "Spring Semester Registration Extended",
    content: "The spring semester registration deadline has been extended to January 31, 2025.",
    type: "announcement",
    category: "Academic",
    priority: "high",
    date: "Jan 20, 2025",
    expiryDate: "Jan 31, 2025",
    status: "active",
  },
  {
    id: "eng-announce-1",
    title: "B.Tech Project Submission Guidelines",
    content: "Final year B.Tech project submissions must follow the new standardized format.",
    type: "circular",
    category: "Academic",
    priority: "high",
    date: "Jan 22, 2025",
    school: "Engineering",
    status: "active",
  },
  {
    id: "cse-announce-1",
    title: "Hackathon Registration Open",
    content: "Register for the upcoming 48-hour coding hackathon. Prizes worth ₹2 Lakhs.",
    type: "announcement",
    category: "Event",
    priority: "medium",
    date: "Jan 25, 2025",
    school: "Engineering",
    department: "CSE",
    status: "active",
  },
  {
    id: "datascience-announce-1",
    title: "GPU Lab Access - New Timings",
    content: "NVIDIA DGX B200 lab now available 24/7 for final year data science projects.",
    type: "announcement",
    category: "Academic",
    priority: "high",
    date: "Jan 24, 2025",
    school: "Engineering",
    department: "Data Science",
    status: "active",
  },
  {
    id: "mech-announce-1",
    title: "Workshop on Advanced Manufacturing",
    content: "Industry expert session on additive manufacturing and Industry 4.0 technologies.",
    type: "announcement",
    category: "Event",
    priority: "medium",
    date: "Jan 26, 2025",
    school: "Engineering",
    department: "Mechanical",
    status: "active",
  },
  {
    id: "hs-announce-1",
    title: "Clinical Internship Batch Assignments",
    content: "Clinical internship batch assignments for Spring 2025 have been released.",
    type: "circular",
    category: "Academic",
    priority: "high",
    date: "Jan 21, 2025",
    school: "Health Sciences",
    status: "active",
  },
  {
    id: "nursing-announce-1",
    title: "Clinical Rotation Schedule - Spring 2025",
    content: "Hospital rotation schedule for final year nursing students has been published. Check your assigned departments and timings.",
    type: "announcement",
    category: "Academic",
    priority: "high",
    date: "Jan 23, 2025",
    school: "Health Sciences",
    department: "Nursing",
    status: "active",
  },
  {
    id: "physiotherapy-announce-1",
    title: "Sports Medicine Certification Program",
    content: "Registration open for advanced sports medicine certification. Limited seats available.",
    type: "announcement",
    category: "General",
    priority: "medium",
    date: "Jan 24, 2025",
    school: "Health Sciences",
    department: "Physiotherapy",
    status: "active",
  },
  {
    id: "allied-health-announce-1",
    title: "Laboratory Safety Training Mandatory",
    content: "All students must complete laboratory safety certification before accessing lab facilities.",
    type: "circular",
    category: "Administrative",
    priority: "high",
    date: "Jan 22, 2025",
    school: "Health Sciences",
    department: "Allied Health Sciences",
    status: "active",
  },
  {
    id: "law-ballb-announce-1",
    title: "Moot Court Registration Deadline Extended",
    content: "Last date to register for the National Moot Court Competition extended to Feb 10, 2025.",
    type: "announcement",
    category: "Event",
    priority: "high",
    date: "Jan 27, 2025",
    school: "Law",
    department: "BA.LLB (Hons)",
    status: "active",
  },
  {
    id: "law-llm-corp-announce-1",
    title: "Guest Lecture by Senior Corporate Counsel",
    content: "Industry expert from Fortune 500 company to deliver lecture on M&A transactions. All LLM students invited.",
    type: "announcement",
    category: "Event",
    priority: "medium",
    date: "Jan 28, 2025",
    school: "Law",
    department: "LLM Corporate & Commercial Law",
    status: "active",
  },
  {
    id: "law-llm-tech-announce-1",
    title: "AI & Law Certification Program",
    content: "New certification program in AI Regulation and Ethics now available for LLM students.",
    type: "announcement",
    category: "Academic",
    priority: "medium",
    date: "Jan 29, 2025",
    school: "Law",
    department: "LLM Law & Technology",
    status: "active",
  },
  {
    id: "commerce-bba-announce-1",
    title: "Industry Internship Applications Open",
    content: "Summer internship applications for leading corporations now open. Apply before Feb 15, 2025.",
    type: "announcement",
    category: "Academic",
    priority: "high",
    date: "Jan 30, 2025",
    school: "Commerce & Management",
    department: "BBA",
    status: "active",
  },
  {
    id: "commerce-bcom-announce-1",
    title: "Chartered Accountancy Foundation Course",
    content: "Free CA Foundation preparation classes starting from Feb 5, 2025. Register at the department office.",
    type: "circular",
    category: "Academic",
    priority: "medium",
    date: "Jan 28, 2025",
    school: "Commerce & Management",
    department: "BCom",
    status: "active",
  },
  {
    id: "commerce-mba-announce-1",
    title: "MBA Capstone Project Submission Guidelines",
    content: "Final guidelines for MBA capstone project submissions. Deadline: March 15, 2025.",
    type: "circular",
    category: "Academic",
    priority: "high",
    date: "Jan 31, 2025",
    school: "Commerce & Management",
    department: "MBA",
    status: "active",
  },
];

const ALL_NEWS: NewsItem[] = [
  {
    id: "news-univ-1",
    title: "DSU Receives NAAC 'A+' Accreditation",
    excerpt: "University achieves excellence in teaching, research, and infrastructure",
    content: "DSU has received the prestigious NAAC 'A+' accreditation.",
    date: "Jan 20, 2025",
    status: "published",
    school: "University",
    category: "Accreditation",
    image: "https://images.pexels.com/photos/8090286/pexels-photo-8090286.jpeg",
  },
  {
    id: "news-eng-1",
    title: "School of Engineering: 96% Placement Rate Achieved",
    excerpt: "Record-breaking placements with average package of ₹18 LPA",
    content: "The School of Engineering achieves 96% placement rate for the 2024-25 batch.",
    date: "Jan 18, 2025",
    status: "published",
    school: "Engineering",
    category: "Placement",
    image: "https://images.pexels.com/photos/3862638/pexels-photo-3862638.jpeg",
  },
  {
    id: "news-hs-1",
    title: "School of Health Sciences: 93% Placement Rate in Healthcare Sector",
    excerpt: "Graduates placed in leading hospitals and healthcare institutions",
    content: "The School of Health Sciences achieves 93% placement rate.",
    date: "Jan 16, 2025",
    status: "published",
    school: "Health Sciences",
    category: "Placement",
    image: "https://images.pexels.com/photos/1279365/pexels-photo-1279365.jpeg",
  },
  {
    id: "news-nursing-1",
    title: "Nursing Students Achieve 100% NCLEX Pass Rate",
    excerpt: "All graduating nursing students successfully clear international nursing licensure examination",
    content: "The College of Nursing Sciences celebrates a landmark achievement with 100% NCLEX pass rate.",
    date: "Jan 22, 2025",
    status: "published",
    school: "Health Sciences",
    department: "Nursing",
    category: "Achievement",
    image: "https://images.pexels.com/photos/4225880/pexels-photo-4225880.jpeg",
  },
  {
    id: "news-physiotherapy-1",
    title: "Physiotherapy Department Wins National Research Award",
    excerpt: "Innovative research in sports rehabilitation recognized at national conference",
    content: "The Department of Physiotherapy receives the Excellence in Clinical Research Award.",
    date: "Jan 19, 2025",
    status: "published",
    school: "Health Sciences",
    department: "Physiotherapy",
    category: "Research",
    image: "https://images.pexels.com/photos/3760638/pexels-photo-3760638.jpeg",
  },
  {
    id: "news-allied-health-1",
    title: "Allied Health Students Win State-Level Competition",
    excerpt: "First place in diagnostic techniques at Karnataka Allied Health Sciences Meet",
    content: "Students from Allied Health Sciences department secure top position in state competition.",
    date: "Jan 17, 2025",
    status: "published",
    school: "Health Sciences",
    department: "Allied Health Sciences",
    category: "Achievement",
    image: "https://images.pexels.com/photos/3825586/pexels-photo-3825586.jpeg",
  },
  {
    id: "news-law-ballb-1",
    title: "BA.LLB Students Win National Moot Court Championship",
    excerpt: "DSU Law team secures first place at prestigious national moot court competition",
    content: "The BA.LLB program students bring home the trophy from the National Moot Court Championship.",
    date: "Jan 23, 2025",
    status: "published",
    school: "Law",
    department: "BA.LLB (Hons)",
    category: "Achievement",
    image: "https://images.pexels.com/photos/5668838/pexels-photo-5668838.jpeg",
  },
  {
    id: "news-law-llm-corp-1",
    title: "LLM Student Published in International Law Journal",
    excerpt: "Research on corporate governance featured in prestigious international publication",
    content: "Corporate Law student's research paper published in Harvard International Law Journal.",
    date: "Jan 25, 2025",
    status: "published",
    school: "Law",
    department: "LLM Corporate & Commercial Law",
    category: "Research",
    image: "https://images.pexels.com/photos/8111764/pexels-photo-8111764.jpeg",
  },
  {
    id: "news-law-llm-tech-1",
    title: "Law & Technology Students Intern at Leading Tech Firms",
    excerpt: "Students secure internships at Google, Microsoft, and Amazon legal teams",
    content: "LLM Law & Technology program students placed at top global tech companies.",
    date: "Jan 26, 2025",
    status: "published",
    school: "Law",
    department: "LLM Law & Technology",
    category: "Placement",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
  {
    id: "news-commerce-bba-1",
    title: "BBA Students Win National Business Plan Competition",
    excerpt: "DSU BBA team secures first place at IIM Bangalore's B-Plan competition",
    content: "The BBA program students clinch top honors at the prestigious national business plan competition.",
    date: "Jan 27, 2025",
    status: "published",
    school: "Commerce & Management",
    department: "BBA",
    category: "Achievement",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg",
  },
  {
    id: "news-commerce-bcom-1",
    title: "BCom Students Achieve 100% CPA Pass Rate",
    excerpt: "All BCom graduates successfully clear Certified Professional Accountant examination",
    content: "Department of Commerce celebrates unprecedented success in professional certifications.",
    date: "Jan 29, 2025",
    status: "published",
    school: "Commerce & Management",
    department: "BCom",
    category: "Achievement",
    image: "https://images.pexels.com/photos/4386431/pexels-photo-4386431.jpeg",
  },
  {
    id: "news-commerce-mba-1",
    title: "MBA Placements: 98% Success Rate with Top Packages",
    excerpt: "Record placements with highest package of ₹45 LPA at leading consulting firms",
    content: "MBA program achieves exceptional placement results with students placed at McKinsey, BCG, and Bain.",
    date: "Jan 30, 2025",
    status: "published",
    school: "Commerce & Management",
    department: "MBA",
    category: "Placement",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg",
  },
];

const ALL_EVENTS: Event[] = [
  {
    id: "event-eng-1",
    title: "HackDSU 2025: 36-Hour Hackathon",
    description: "Inter-disciplinary hackathon with tracks in AI for Health, Sustainable Tech, and FinTech.",
    date: "Feb 12, 2025",
    time: "9:00 AM",
    location: "Innovation Theatre, Engineering Campus",
    status: "upcoming",
    school: "Engineering",
    department: "CSE",
    category: "Hackathon",
    image: "https://images.pexels.com/photos/9242838/pexels-photo-9242838.jpeg",
  },
  {
    id: "event-hs-1",
    title: "Clinical Skill Development Workshop",
    description: "Hands-on workshop on clinical procedures and patient communication.",
    date: "Feb 8, 2025",
    time: "10:00 AM",
    location: "Clinical Skills Lab, Health Sciences Campus",
    status: "upcoming",
    school: "Health Sciences",
    category: "Workshop",
    image: "https://images.pexels.com/photos/5726794/pexels-photo-5726794.jpeg",
  },
  {
    id: "event-law-ballb-1",
    title: "Moot Court Competition - National Level",
    description: "Participate in the annual national moot court competition with leading law schools.",
    date: "Feb 22, 2025",
    time: "9:00 AM",
    location: "School of Law Auditorium",
    status: "upcoming",
    school: "Law",
    department: "BA.LLB (Hons)",
    category: "Conference",
    image: "https://images.pexels.com/photos/8111952/pexels-photo-8111952.jpeg",
  },
  {
    id: "event-law-llm-corp-1",
    title: "Corporate Governance Seminar",
    description: "Industry experts discuss latest trends in corporate governance and compliance.",
    date: "Feb 25, 2025",
    time: "2:00 PM",
    location: "Law School Conference Hall",
    status: "upcoming",
    school: "Law",
    department: "LLM Corporate & Commercial Law",
    category: "Seminar",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
  },
  {
    id: "event-law-llm-tech-1",
    title: "Cybersecurity Law Workshop",
    description: "Hands-on session on data privacy regulations and cybersecurity compliance.",
    date: "Feb 28, 2025",
    time: "11:00 AM",
    location: "Law & Technology Lab",
    status: "upcoming",
    school: "Law",
    department: "LLM Law & Technology",
    category: "Workshop",
    image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg",
  },
  {
    id: "event-nursing-1",
    title: "Advanced Patient Care Symposium",
    description: "Learn advanced nursing techniques and evidence-based practice methodologies.",
    date: "Feb 15, 2025",
    time: "2:00 PM",
    location: "College of Nursing Sciences Auditorium",
    status: "upcoming",
    school: "Health Sciences",
    department: "Nursing",
    category: "Seminar",
    image: "https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg",
  },
  {
    id: "event-physiotherapy-1",
    title: "Sports Rehabilitation Workshop",
    description: "Hands-on training in sports injury assessment and rehabilitation protocols.",
    date: "Feb 18, 2025",
    time: "10:00 AM",
    location: "Physiotherapy Rehabilitation Lab",
    status: "upcoming",
    school: "Health Sciences",
    department: "Physiotherapy",
    category: "Workshop",
    image: "https://images.pexels.com/photos/3823187/pexels-photo-3823187.jpeg",
  },
  {
    id: "event-allied-health-1",
    title: "Laboratory Diagnostics Seminar",
    description: "Latest advances in clinical laboratory techniques and diagnostic methodologies.",
    date: "Feb 20, 2025",
    time: "11:00 AM",
    location: "Allied Health Sciences Lab Complex",
    status: "upcoming",
    school: "Health Sciences",
    department: "Allied Health Sciences",
    category: "Seminar",
    image: "https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg",
  },
];

// ============================================================================
// FILTERING FUNCTIONS
// ============================================================================

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
    (a) => a.status === "active" && a.school === school
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
