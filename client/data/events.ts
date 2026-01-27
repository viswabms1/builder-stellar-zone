/**
 * Events Data Structure - Interface and Re-exports
 * All event data and logic is managed in content-manager.ts
 */

// Re-export Event interface from content-manager type
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

// Re-export functions from content-manager
export {
  getAllEvents,
  getEventsBySchool,
  getEventsByDepartment,
  getEventsByCategory,
  getEventsByTag,
  getUpcomingEvents,
} from "@/lib/content-manager";
