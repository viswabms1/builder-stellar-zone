/**
 * Events Data Structure - Centralized for entire university
 * Filtered by school and department on respective pages
 * Ready for Directus CMS integration
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

// Engineering School Events
const ENGINEERING_EVENTS: Event[] = [
  {
    id: "event-eng-1",
    title: "HackDSU 2025: 36-Hour Hackathon",
    description:
      "Inter-disciplinary hackathon with tracks in AI for Health, Sustainable Tech, and FinTech. Open to all students.",
    date: "Feb 12, 2025",
    time: "9:00 AM",
    endDate: "Feb 14, 2025",
    endTime: "9:00 PM",
    location: "Innovation Theatre, Engineering Campus",
    status: "upcoming",
    school: "Engineering",
    department: "CSE",
    category: "Hackathon",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    registrationRequired: true,
    registrationLink: "https://example.com/hackdsu2025",
    capacity: 200,
    registered: 145,
    tags: ["hackathon", "ai", "innovation"],
  },
  {
    id: "event-eng-2",
    title: "Responsible GenAI Systems Lecture",
    description:
      "Guest lecture by Dr. Leela Narayanan, Principal Scientist at Novus Labs, discussing ethical AI and responsible AI systems.",
    date: "Jan 24, 2025",
    time: "10:30 AM",
    endTime: "12:00 PM",
    location: "Auditorium Block A",
    status: "upcoming",
    school: "Engineering",
    department: "CSE",
    category: "Seminar",
    registrationRequired: false,
    tags: ["ai", "ethics", "technology"],
  },
  {
    id: "event-eng-3",
    title: "Quantum Computing Trends Research Seminar",
    description:
      "In-depth discussion on quantum computing advances with Prof. Rajesh Kumar from IISc Bangalore.",
    date: "Feb 5, 2025",
    time: "2:00 PM",
    endTime: "4:00 PM",
    location: "Conference Room 201, Engineering Block",
    status: "upcoming",
    school: "Engineering",
    department: "CSE",
    category: "Seminar",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=600&h=300&fit=crop",
    tags: ["quantum", "research"],
  },
  {
    id: "event-eng-4",
    title: "Advanced Manufacturing Workshop",
    description:
      "Hands-on workshop on CNC machining, 3D printing, and advanced manufacturing with industry experts.",
    date: "Feb 1, 2025",
    time: "10:00 AM",
    endDate: "Feb 3, 2025",
    endTime: "4:00 PM",
    location: "Manufacturing Lab, Mechanical Department",
    status: "upcoming",
    school: "Engineering",
    department: "Mechanical",
    category: "Workshop",
    image:
      "https://images.unsplash.com/photo-1581092162562-40038f51df21?w=600&h=300&fit=crop",
    registrationRequired: true,
    capacity: 50,
    registered: 38,
    tags: ["manufacturing", "hands-on"],
  },
  {
    id: "event-eng-5",
    title: "FSAE Team Presentation and Vehicle Demo",
    description:
      "Student Formula SAE team showcases their latest electric vehicle design with technical deep dive.",
    date: "Feb 20, 2025",
    time: "3:00 PM",
    endTime: "5:00 PM",
    location: "Aerospace Lab, Campus Grounds",
    status: "upcoming",
    school: "Engineering",
    department: "Mechanical",
    category: "Academic",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=600&h=300&fit=crop",
    tags: ["fsae", "vehicle", "innovation"],
  },
  {
    id: "event-eng-6",
    title: "Drone Technology and UAV Workshop",
    description:
      "Practical workshop on unmanned aerial vehicles, drone design, and autonomous flight systems.",
    date: "Feb 7, 2025",
    time: "9:00 AM",
    endTime: "1:00 PM",
    location: "Aerospace Department Lab",
    status: "upcoming",
    school: "Engineering",
    department: "Aerospace",
    category: "Workshop",
    registrationRequired: true,
    capacity: 30,
    tags: ["uav", "drone", "technology"],
  },
  {
    id: "event-eng-7",
    title: "Embedded Systems Design Workshop",
    description:
      "Practical workshop on microcontroller programming, embedded systems design, and IoT applications.",
    date: "Feb 3, 2025",
    time: "10:00 AM",
    endTime: "3:00 PM",
    location: "ECE Lab, Block C",
    status: "upcoming",
    school: "Engineering",
    department: "ECE",
    category: "Workshop",
    registrationRequired: true,
    capacity: 40,
    registered: 35,
    tags: ["embedded", "iot"],
  },
];

// Health Sciences School Events
const HEALTH_SCIENCES_EVENTS: Event[] = [
  {
    id: "event-hs-1",
    title: "Clinical Skill Development Workshop",
    description:
      "Hands-on workshop on clinical procedures, patient communication, and medical examination techniques.",
    date: "Feb 8, 2025",
    time: "10:00 AM",
    endTime: "4:00 PM",
    location: "Clinical Skills Lab, Health Sciences Campus",
    status: "upcoming",
    school: "Health Sciences",
    category: "Workshop",
    registrationRequired: true,
    capacity: 60,
    registered: 55,
    tags: ["clinical", "skills"],
  },
  {
    id: "event-hs-2",
    title: "Pharma Industry Insights: Drug Development Pipeline",
    description:
      "Guest lecture from pharmaceutical industry leaders on modern drug development and clinical trials.",
    date: "Jan 29, 2025",
    time: "2:00 PM",
    endTime: "4:00 PM",
    location: "Auditorium, Health Sciences Block",
    status: "upcoming",
    school: "Health Sciences",
    department: "Pharmacy",
    category: "Seminar",
    registrationRequired: false,
    tags: ["pharmacy", "industry"],
  },
  {
    id: "event-hs-3",
    title: "Nursing Research Conference 2025",
    description:
      "Annual conference showcasing nursing research, best practices in patient care, and healthcare innovation.",
    date: "Mar 1, 2025",
    time: "9:00 AM",
    endDate: "Mar 2, 2025",
    endTime: "5:00 PM",
    location: "Convention Center, Campus",
    status: "upcoming",
    school: "Health Sciences",
    department: "Nursing",
    category: "Conference",
    registrationRequired: true,
    registrationLink: "https://example.com/nursing-conference-2025",
    capacity: 200,
    registered: 120,
    tags: ["nursing", "research", "conference"],
  },
];

// Commerce & Management Events
const COMMERCE_MANAGEMENT_EVENTS: Event[] = [
  {
    id: "event-cm-1",
    title: "Finance Bootcamp: Investment Analysis",
    description:
      "Intensive bootcamp on equity research, portfolio management, and financial markets analysis.",
    date: "Feb 10, 2025",
    time: "10:00 AM",
    endDate: "Feb 15, 2025",
    endTime: "5:00 PM",
    location: "Finance Lab, Commerce Block",
    status: "upcoming",
    school: "Commerce & Management",
    category: "Workshop",
    registrationRequired: true,
    capacity: 50,
    registered: 42,
    tags: ["finance", "investment"],
  },
  {
    id: "event-cm-2",
    title: "MBA Leadership Summit",
    description:
      "Annual summit featuring CEOs and business leaders discussing organizational strategy and innovation.",
    date: "Feb 25, 2025",
    time: "9:00 AM",
    endTime: "5:00 PM",
    location: "Convention Hall, Management Campus",
    status: "upcoming",
    school: "Commerce & Management",
    department: "MBA",
    category: "Conference",
    registrationRequired: true,
    capacity: 300,
    registered: 250,
    tags: ["mba", "leadership"],
  },
];

// University-wide Events
const UNIVERSITY_EVENTS: Event[] = [
  {
    id: "event-univ-1",
    title: "Annual University Sports Day",
    description:
      "Inter-departmental sports competition featuring cricket, badminton, athletics, and team events.",
    date: "Mar 5, 2025",
    time: "8:00 AM",
    endTime: "5:00 PM",
    location: "Sports Complex, Main Campus",
    status: "upcoming",
    school: "University",
    category: "Sports",
    tags: ["sports", "competition"],
  },
  {
    id: "event-univ-2",
    title: "Foundation Day Celebrations",
    description:
      "University Foundation Day celebration with cultural programs, awards, and community engagement.",
    date: "Feb 28, 2025",
    time: "10:00 AM",
    endTime: "6:00 PM",
    location: "Main Auditorium and Grounds",
    status: "upcoming",
    school: "University",
    category: "Cultural",
    tags: ["celebration", "cultural"],
  },
];

// Aggregate all events
const ALL_EVENTS: Event[] = [
  ...ENGINEERING_EVENTS,
  ...HEALTH_SCIENCES_EVENTS,
  ...COMMERCE_MANAGEMENT_EVENTS,
  ...UNIVERSITY_EVENTS,
];

/**
 * Get all upcoming/ongoing events
 */
export function getAllEvents(): Event[] {
  return ALL_EVENTS.filter((e) => e.status === "upcoming" || e.status === "ongoing").sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
}

/**
 * Get events by school only (includes university-wide events)
 */
export function getEventsBySchool(school: string): Event[] {
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      (e.school === school || e.school === "University")
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get events by school and department
 */
export function getEventsBySchoolAndDepartment(
  school: string,
  department: string
): Event[] {
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      (e.school === school || e.school === "University") &&
      (!e.department || e.department === department)
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get events by category
 */
export function getEventsByCategory(category: Event["category"]): Event[] {
  return ALL_EVENTS.filter(
    (e) => (e.status === "upcoming" || e.status === "ongoing") && e.category === category
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}

/**
 * Get upcoming events with limit
 */
export function getUpcomingEvents(limit: number = 5): Event[] {
  return getAllEvents().slice(0, limit);
}

/**
 * Get events by tag
 */
export function getEventsByTag(tag: string): Event[] {
  return ALL_EVENTS.filter(
    (e) =>
      (e.status === "upcoming" || e.status === "ongoing") &&
      e.tags?.includes(tag)
  ).sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
}
