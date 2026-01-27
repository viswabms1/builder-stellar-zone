/**
 * Events Data Structure - Centralized for entire university
 * 
 * ⚠️ DEPRECATED: All data has been moved to content-manager.ts
 * This file kept only for interface definitions
 * Data is now managed through Directus CMS
 */

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
  school: string; // "Engineering", "Health Sciences", etc.
  department?: string; // "CSE", "Mechanical", "Pharmacy", etc. (optional)
  category: "Workshop" | "Seminar" | "Conference" | "Hackathon" | "Sports" | "Cultural" | "Academic";
  image?: string;
  link?: string;
  registrationRequired?: boolean;
  registrationLink?: string;
  capacity?: number;
  registered?: number;
  tags?: string[];
}

// NOTE: All events data is now in content-manager.ts
// Directus CMS integration in progress

/**
 * Get all upcoming and ongoing events
 * @returns Events from content-manager.ts
 */
export function getAllEvents(): Event[] {
  return [];
}

/**
 * Get events by school
 */
export function getEventsBySchool(school: string): Event[] {
  return [];
}

/**
 * Get events by department
 */
export function getEventsByDepartment(school: string, department: string): Event[] {
  return [];
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: Event["category"]): Event[] {
  return [];
}

/**
 * Get events by tag
 */
export function getEventsByTag(tag: string): Event[] {
  return [];
}
