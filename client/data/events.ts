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
// Using local data; will migrate to Directus CMS

// Import from content-manager for now
import {
  getEventsBySchool as getEventsBySchoolCM,
  getEventsByCategory as getEventsByCategoryCM,
  Event as CMEvent,
} from "@/lib/content-manager";

/**
 * Get all upcoming and ongoing events
 * @returns All upcoming and ongoing events
 */
export function getAllEvents(): Event[] {
  // Import locally to avoid circular dependency
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsBySchool(undefined);
}

/**
 * Get events by school
 */
export function getEventsBySchool(school: string): Event[] {
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsBySchool(school);
}

/**
 * Get events by department
 */
export function getEventsByDepartment(school: string, department: string): Event[] {
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsBySchoolAndDepartment(school, department);
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: Event["category"]): Event[] {
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsByCategory(category);
}

/**
 * Get events by tag
 */
export function getEventsByTag(tag: string): Event[] {
  const contentManager = require("@/lib/content-manager");
  const allEvents = contentManager.getEventsBySchool(undefined);
  return allEvents.filter((e: Event) => e.tags?.includes(tag));
}

/**
 * Get events by school and department
 */
export function getEventsBySchoolAndDepartment(school: string, department: string): Event[] {
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsBySchoolAndDepartment(school, department);
}

/**
 * Get upcoming events (limited by count)
 */
export function getUpcomingEvents(limit: number = 10): Event[] {
  const contentManager = require("@/lib/content-manager");
  return contentManager.getEventsBySchool(undefined).slice(0, limit);
}
