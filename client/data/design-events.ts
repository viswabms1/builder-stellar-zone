/**
 * Design School Events, News, and Announcements
 * 
 * ⚠️ DEPRECATED: All data has been moved to content-manager.ts
 * This file kept only for interface definitions and function stubs
 * Data is now managed through Directus CMS
 */

export interface NoticeItem {
  id: string;
  title: string;
  description: string;
  category: "Event" | "News" | "Announcement";
  date: string;
  image?: string;
  link?: string;
  department?: string;
}

// NOTE: All event, news, and announcement data is now in content-manager.ts
// Directus CMS integration in progress

export function getDesignEvents(): NoticeItem[] {
  return [];
}

export function getDesignNews(): NoticeItem[] {
  return [];
}

export function getDesignAnnouncements(): NoticeItem[] {
  return [];
}

export function getAllDesignNotices(): NoticeItem[] {
  return [];
}
