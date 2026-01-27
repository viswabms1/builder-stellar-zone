/**
 * Announcements Data Structure
 * 
 * ⚠️ DEPRECATED: All data has been moved to content-manager.ts
 * This file kept only for interface definitions
 * Data is now managed through Directus CMS
 */

export interface Attachment {
  id: string;
  fileName: string;
  fileUrl: string;
  fileType: string; // pdf, doc, docx, xlsx, etc.
  fileSize?: string; // e.g., "2.5 MB"
}

export interface Announcement {
  id: string;
  title: string;
  content: string;
  type: "circular" | "announcement"; // Circular = formal document, Announcement = simple notice
  category: "Academic" | "Administrative" | "Event" | "Urgent" | "General";
  priority: "high" | "medium" | "low";
  date: string;
  expiryDate?: string;
  status: "active" | "archived";
  school?: string; // Engineering, Health Sciences, etc.
  image?: string;
  attachments?: Attachment[]; // Files like PDFs, documents
}

// NOTE: All announcement data is now in content-manager.ts
// Directus CMS integration in progress

/**
 * Get all active announcements
 * @returns Active announcements from content-manager.ts
 */
export function getAllAnnouncements(): Announcement[] {
  // Import from content-manager.ts when Directus is ready
  return [];
}

/**
 * Get announcements filtered by priority
 */
export function getAnnouncementsByPriority(
  priority: "high" | "medium" | "low"
): Announcement[] {
  return [];
}

/**
 * Get announcements by category
 */
export function getAnnouncementsByCategory(
  category: Announcement["category"]
): Announcement[] {
  return [];
}

/**
 * Get announcements by school
 */
export function getAnnouncementsBySchool(school: string): Announcement[] {
  return [];
}

/**
 * Get high-priority announcements (for homepage banner)
 */
export function getUrgentAnnouncements(): Announcement[] {
  return [];
}
