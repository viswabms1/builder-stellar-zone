/**
 * Events Data Structure - Centralized for entire university
 * 
 * All events data is managed in content-manager.ts
 * This file provides the interface and re-exports functions
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

// Get events from centralized manager
let cachedEvents: Event[] | null = null;

function getAllEventsFromCache(): Event[] {
  if (cachedEvents === null) {
    try {
      // This will work via the dynamic import during runtime
      const cm = require("@/lib/content-manager");
      if (cm && cm.getEventsBySchool) {
        cachedEvents = cm.getEventsBySchool(undefined) || [];
      } else {
        cachedEvents = [];
      }
    } catch (e) {
      cachedEvents = [];
    }
  }
  return cachedEvents;
}

/**
 * Get all upcoming and ongoing events
 */
export function getAllEvents(): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) => e.status === "upcoming" || e.status === "ongoing");
}

/**
 * Get events by school
 */
export function getEventsBySchool(school: string): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) => 
    (e.status === "upcoming" || e.status === "ongoing") &&
    (e.school === school || e.school === "University")
  );
}

/**
 * Get events by department
 */
export function getEventsByDepartment(school: string, department: string): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) =>
    (e.status === "upcoming" || e.status === "ongoing") &&
    e.school === school &&
    e.department === department
  );
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: Event["category"]): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) =>
    (e.status === "upcoming" || e.status === "ongoing") &&
    e.category === category
  );
}

/**
 * Get events by tag
 */
export function getEventsByTag(tag: string): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) =>
    (e.status === "upcoming" || e.status === "ongoing") &&
    e.tags?.includes(tag)
  );
}

/**
 * Get events by school and department
 */
export function getEventsBySchoolAndDepartment(school: string, department: string): Event[] {
  const events = getAllEventsFromCache();
  return events.filter((e) =>
    (e.status === "upcoming" || e.status === "ongoing") &&
    e.school === school &&
    e.department === department
  );
}

/**
 * Get upcoming events (limited by count)
 */
export function getUpcomingEvents(limit: number = 10): Event[] {
  return getAllEvents().slice(0, limit);
}
