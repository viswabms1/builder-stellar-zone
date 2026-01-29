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
  description: string; // Directus uses 'description' not 'content'
  type?: "circular" | "announcement";
  category?: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  priority?: "high" | "medium" | "low";
  date?: string;
  expiry_date?: string; // Directus uses 'expiry_date'
  status?: "active" | "archived";
  school_code?: string; // Directus uses 'school_code' (e.g., ENG, HS, LAW)
  department_code?: string; // Directus uses 'department_code' (e.g., aero, cse, mech)
  image?: string;
  attachment?: string | { url: string; name: string }; // Directus: file ID string, Strapi: object with url and name
}

export interface NewsItem {
  id: string;
  title: string;
  summary: string; // Directus uses 'summary'
  description?: string; // Optional detailed description
  date?: string;
  status?: "published" | "draft";
  school_code?: string; // Directus uses 'school_code' (e.g., ENG, HS, LAW)
  department_code?: string; // Directus uses 'department_code' (e.g., aero, cse, mech)
  category?: "Achievement" | "Research" | "Placement" | "Accreditation" | "General";
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
  end_date?: string; // Directus uses snake_case
  end_time?: string;
  location?: string;
  status?: "upcoming" | "ongoing" | "completed";
  school_code?: string; // Directus uses school_code (e.g., ENG, HS, LAW)
  department_code?: string; // Directus uses department_code (e.g., aero, cse)
  category?: "Workshop" | "Seminar" | "Conference" | "Hackathon" | "Sports" | "Cultural" | "Academic";
  events_image?: string | { id: string }; // Can be string ID or object with id
  link?: string;
  registration_required?: boolean; // Directus uses snake_case
  registration_link?: string;
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

// Sample events - Keep empty, will be populated from Directus CMS
const ALL_EVENTS: Event[] = [];

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
  if (!school) return ALL_ANNOUNCEMENTS.filter((a) => a.status === "active" && !a.school_code);
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.status === "active" && (a.school_code === school || !a.school_code)
  ).sort((a, b) => {
    const dateA = new Date(a.expiry_date || a.date || 0).getTime();
    const dateB = new Date(b.expiry_date || b.date || 0).getTime();
    return dateB - dateA;
  });
}

export function getNewsBySchool(school: string | undefined): NewsItem[] {
  if (!school) return ALL_NEWS.filter((n) => (!n.status || n.status === "published") && !n.school_code);
  return ALL_NEWS.filter(
    (n) => (!n.status || n.status === "published") && (n.school_code === school || !n.school_code)
  ).sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

export function getEventsBySchool(school: string | undefined): Event[] {
  if (!school) return ALL_EVENTS.filter((e) => e.status === "upcoming" || e.status === "ongoing");
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      (e.school_code === school || !e.school_code)
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
  let link: string | undefined;

  if (a.attachment) {
    // Handle both Strapi (object with url) and Directus (string ID) formats
    if (typeof a.attachment === 'object' && (a.attachment as any).url) {
      link = (a.attachment as any).url;
    } else if (typeof a.attachment === 'string') {
      // Directus format - file ID
      link = `https://dsu-website-headless-cms.directus.app/assets/${a.attachment}`;
    }
  }

  return {
    id: a.id,
    title: a.title,
    category: "Announcement",
    date: a.date || a.expiry_date || new Date().toISOString(),
    description: a.description,
    image: a.image,
    link: link,
  };
}

export function convertNewsToCarouselItem(n: NewsItem): CarouselItem {
  return {
    id: n.id,
    title: n.title,
    category: "News",
    date: n.date || new Date().toISOString(),
    description: n.summary || n.description || "",
    image: n.image ? `https://dsu-website-headless-cms.directus.app/assets/${n.image}` : undefined,
  };
}

export function convertEventToCarouselItem(e: Event): CarouselItem {
  const imageId = typeof e.events_image === 'string' ? e.events_image : e.events_image?.id;
  const imageUrl = imageId ? `https://dsu-website-headless-cms.directus.app/assets/${imageId}` : undefined;

  console.log("[convertEventToCarouselItem] Event:", e.title);
  console.log("[convertEventToCarouselItem] events_image:", e.events_image);
  console.log("[convertEventToCarouselItem] imageId:", imageId);
  console.log("[convertEventToCarouselItem] imageUrl:", imageUrl);

  return {
    id: e.id,
    title: e.title,
    category: "Event",
    date: e.date,
    description: e.description,
    image: imageUrl,
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
    (n) => (!n.status || n.status === "published") && n.school_code === school && n.department_code === department
  ).sort((a, b) => {
    const dateA = new Date(a.date || 0).getTime();
    const dateB = new Date(b.date || 0).getTime();
    return dateB - dateA;
  });
}

export function getEventsByDepartment(school: string | undefined, department: string | undefined): Event[] {
  if (!school || !department) return [];
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      e.school_code === school &&
      e.department_code === department
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getEventsByCategory(category: Event["category"]): Event[] {
  return ALL_EVENTS.filter(
    (e) => (e.status === "upcoming" || e.status === "ongoing") && e.category === category
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getAllEvents(): Event[] {
  return ALL_EVENTS.filter((e) => e.status === "upcoming" || e.status === "ongoing").sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

export function getUpcomingEvents(limit: number = 10): Event[] {
  return getAllEvents().slice(0, limit);
}

export function getEventsByTag(tag: string): Event[] {
  return ALL_EVENTS.filter(
    (e) => (e.status === "upcoming" || e.status === "ongoing") && e.tags?.includes(tag)
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getEventsBySchoolAndDepartment(school: string | undefined, department: string | undefined): Event[] {
  if (!school || !department) return [];
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      e.school_code === school &&
      e.department_code === department
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

export function getAnnouncementsByDepartment(school: string | undefined, department: string | undefined): Announcement[] {
  if (!school || !department) return [];
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.status === "active" && a.school_code === school && a.department_code === department
  ).sort((a, b) => {
    const dateA = new Date(a.expiry_date || a.date || 0).getTime();
    const dateB = new Date(b.expiry_date || b.date || 0).getTime();
    return dateB - dateA;
  });
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
