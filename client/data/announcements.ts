/**
 * Announcements Data Structure
 * Central source for all university announcements
 * Ready for Directus CMS integration
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

// University-wide announcements
const UNIVERSITY_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "univ-announce-1",
    title: "CIRCULAR: Spring Semester Registration Extended",
    type: "circular",
    content:
      "The spring semester registration deadline has been extended to January 31, 2025. All students must complete their registration by this date to avoid late fee charges. Detailed instructions are provided in the attached circular.",
    category: "Academic",
    priority: "high",
    date: "Jan 20, 2025",
    expiryDate: "Jan 31, 2025",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    attachments: [
      {
        id: "att-1",
        fileName: "Spring_Semester_Registration_Circular.pdf",
        fileUrl: "https://example.com/files/Spring_Registration_Circular.pdf",
        fileType: "pdf",
        fileSize: "1.2 MB",
      },
      {
        id: "att-2",
        fileName: "Registration_Portal_Guide.docx",
        fileUrl: "https://example.com/files/Registration_Guide.docx",
        fileType: "docx",
        fileSize: "0.8 MB",
      },
    ],
  },
  {
    id: "univ-announce-2",
    title: "Campus Maintenance: Library Renovation",
    type: "announcement",
    content:
      "Central library will undergo infrastructure renovation from January 28 to February 7, 2025. All reading rooms will be closed. Alternative study spaces are available at departmental libraries.",
    category: "Administrative",
    priority: "medium",
    date: "Jan 15, 2025",
    expiryDate: "Feb 7, 2025",
    status: "active",
  },
  {
    id: "univ-announce-3",
    title: "CIRCULAR: Placement Season 2025 Kickoff",
    type: "circular",
    content:
      "Recruitment season for 2025 graduating batch begins on February 1. All final-year students must ensure their profiles are updated in the placement portal. Important guidelines and deadlines are attached.",
    category: "Event",
    priority: "high",
    date: "Jan 18, 2025",
    status: "active",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    attachments: [
      {
        id: "att-3",
        fileName: "Placement_Process_2025.pdf",
        fileUrl: "https://example.com/files/Placement_Process_2025.pdf",
        fileType: "pdf",
        fileSize: "2.5 MB",
      },
    ],
  },
  {
    id: "univ-announce-4",
    title: "Mid-Semester Exam Schedule Released",
    type: "announcement",
    content:
      "Mid-semester examinations will commence from February 10, 2025. Detailed timetable with subject codes available on the student portal.",
    category: "Academic",
    priority: "high",
    date: "Jan 10, 2025",
    status: "active",
  },
  {
    id: "univ-announce-5",
    title: "Campus WiFi Upgrade Complete",
    type: "announcement",
    content:
      "High-speed WiFi infrastructure has been upgraded across campus. All users will experience faster and more reliable connectivity.",
    category: "General",
    priority: "low",
    date: "Jan 5, 2025",
    status: "active",
  },
];

// Engineering school specific announcements
const ENGINEERING_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "eng-announce-1",
    title: "B.Tech Project Submission Guidelines",
    content:
      "Final year B.Tech project submissions must follow the new standardized format. Guidelines document is available on the engineering department portal.",
    category: "Academic",
    priority: "high",
    date: "Jan 22, 2025",
    school: "Engineering",
    status: "active",
  },
  {
    id: "eng-announce-2",
    title: "Engineering Lab Safety Training Mandatory",
    content:
      "All students using engineering labs must complete the mandatory 2-hour safety training. Sessions scheduled daily from 10 AM to 4 PM.",
    category: "Administrative",
    priority: "high",
    date: "Jan 20, 2025",
    school: "Engineering",
    status: "active",
  },
];

// Health Sciences school specific announcements
const HEALTH_SCIENCES_ANNOUNCEMENTS: Announcement[] = [
  {
    id: "hs-announce-1",
    title: "Clinical Internship Batch Assignments",
    content:
      "Clinical internship batch assignments for Spring 2025 have been released. Check the health sciences department portal for details.",
    category: "Academic",
    priority: "high",
    date: "Jan 21, 2025",
    school: "Health Sciences",
    status: "active",
  },
];

// Aggregate all announcements
const ALL_ANNOUNCEMENTS: Announcement[] = [
  ...UNIVERSITY_ANNOUNCEMENTS,
  ...ENGINEERING_ANNOUNCEMENTS,
  ...HEALTH_SCIENCES_ANNOUNCEMENTS,
];

/**
 * Get all active announcements
 */
export function getAllAnnouncements(): Announcement[] {
  return ALL_ANNOUNCEMENTS.filter((a) => a.status === "active");
}

/**
 * Get announcements filtered by priority
 */
export function getAnnouncementsByPriority(
  priority: "high" | "medium" | "low"
): Announcement[] {
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.priority === priority && a.status === "active"
  );
}

/**
 * Get announcements by category
 */
export function getAnnouncementsByCategory(
  category: Announcement["category"]
): Announcement[] {
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.category === category && a.status === "active"
  );
}

/**
 * Get announcements by school
 */
export function getAnnouncementsBySchool(school: string): Announcement[] {
  return ALL_ANNOUNCEMENTS.filter(
    (a) => a.school === school && a.status === "active"
  );
}

/**
 * Get high-priority announcements (for homepage banner)
 */
export function getUrgentAnnouncements(): Announcement[] {
  return ALL_ANNOUNCEMENTS.filter((a) => a.priority === "high" && a.status === "active").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
