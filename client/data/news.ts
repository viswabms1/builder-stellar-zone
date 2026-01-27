/**
 * News Data Structure - Centralized for entire university
 * 
 * ⚠️ DEPRECATED: All data has been moved to content-manager.ts
 * This file kept only for interface definitions
 * Data is now managed through Directus CMS
 */

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  status: "published" | "draft";
  school: string; // "Engineering", "Health Sciences", "Commerce & Management", etc.
  department?: string; // "CSE", "Mechanical", "Pharmacy", etc. (optional)
  category: "Achievement" | "Research" | "Placement" | "Accreditation" | "General";
  image?: string;
  link?: string;
  author?: string;
  tags?: string[];
}

// NOTE: All news data is now in content-manager.ts
// Directus CMS integration in progress

/**
 * Get all published news items
 * @returns Published news from content-manager.ts
 */
export function getAllNews(): NewsItem[] {
  return [];
}

/**
 * Get news items by school
 */
export function getNewsBySchool(school: string): NewsItem[] {
  return [];
}

/**
 * Get news items by department
 */
export function getNewsByDepartment(school: string, department: string): NewsItem[] {
  return [];
}

/**
 * Get news items by category
 */
export function getNewsByCategory(category: NewsItem["category"]): NewsItem[] {
  return [];
}

/**
 * Get news items by tag
 */
export function getNewsByTag(tag: string): NewsItem[] {
  return [];
}
