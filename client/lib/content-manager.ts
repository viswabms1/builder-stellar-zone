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

// Sample events - Replace with Directus CMS data
const ALL_EVENTS: Event[] = [
  {
    id: "evt-001",
    title: "AI & Machine Learning Workshop",
    description: "Comprehensive workshop on AI and ML fundamentals, covering neural networks, deep learning, and practical implementations using TensorFlow.",
    date: "2025-02-15",
    time: "10:00 AM",
    endTime: "12:30 PM",
    location: "Engineering Block - Auditorium A",
    status: "upcoming",
    school: "Engineering",
    department: "CSE",
    category: "Workshop",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    registrationRequired: true,
    registrationLink: "https://admissions.dsu.edu.in/",
    capacity: 100,
    registered: 45,
    tags: ["AI", "ML", "TensorFlow", "Workshop"],
  },
  {
    id: "evt-002",
    title: "Legal Tech Seminar: The Future of Law",
    description: "Exploring how technology is transforming the legal profession, featuring industry experts discussing blockchain, AI, and digital contracts.",
    date: "2025-02-18",
    time: "2:00 PM",
    endTime: "4:00 PM",
    location: "Law School - Conference Room",
    status: "upcoming",
    school: "Law",
    category: "Seminar",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    registrationRequired: true,
    registrationLink: "https://admissions.dsu.edu.in/",
    capacity: 80,
    registered: 32,
    tags: ["Legal Tech", "Innovation", "Seminar"],
  },
  {
    id: "evt-003",
    title: "Health Sciences Research Conference",
    description: "Annual research showcase featuring presentations from faculty and student researchers in pharmacy, nursing, and allied health sciences.",
    date: "2025-02-20",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Health Sciences Campus - Main Hall",
    status: "upcoming",
    school: "Health Sciences",
    category: "Conference",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    registrationRequired: false,
    capacity: 200,
    registered: 78,
    tags: ["Research", "Healthcare", "Conference"],
  },
  {
    id: "evt-004",
    title: "Design Hackathon 2025",
    description: "24-hour design challenge for creating innovative solutions to real-world problems. Teams will compete for prizes and industry recognition.",
    date: "2025-02-22",
    time: "8:00 AM",
    endDate: "2025-02-23",
    endTime: "8:00 AM",
    location: "Design Studio - City Innovation Campus",
    status: "upcoming",
    school: "Design & Digital Trans-Media",
    category: "Hackathon",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    registrationRequired: true,
    registrationLink: "https://admissions.dsu.edu.in/",
    capacity: 60,
    registered: 55,
    tags: ["Design", "Hackathon", "Innovation"],
  },
  {
    id: "evt-005",
    title: "Commerce & Entrepreneurship Summit",
    description: "Learn from successful entrepreneurs and business leaders about starting and scaling ventures. Includes networking sessions and mentorship opportunities.",
    date: "2025-02-25",
    time: "11:00 AM",
    endTime: "3:30 PM",
    location: "Management Studies Block - Seminar Hall",
    status: "upcoming",
    school: "Commerce & Management",
    category: "Academic",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
    registrationRequired: true,
    registrationLink: "https://admissions.dsu.edu.in/",
    capacity: 120,
    registered: 67,
    tags: ["Business", "Entrepreneurship", "Leadership"],
  },
  {
    id: "evt-006",
    title: "Campus Sports Festival",
    description: "Annual inter-departmental sports competition featuring cricket, football, badminton, and athletics. Showcasing talent and teamwork.",
    date: "2025-03-01",
    time: "8:00 AM",
    endDate: "2025-03-05",
    location: "Sports Complex - Main Ground",
    status: "upcoming",
    school: "University",
    category: "Sports",
    image: "https://images.unsplash.com/photo-1461523884005-be2f40a3ae5f?q=80&w=800&auto=format&fit=crop",
    registrationRequired: false,
    capacity: 500,
    registered: 234,
    tags: ["Sports", "Festival", "Competition"],
  },
];

// NOTE: All curriculum data is now managed in Directus CMS
const ALL_CURRICULA: CurriculumProgram[] = [];

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
