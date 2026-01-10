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

const NURSING_EVENTS: NoticeItem[] = [
  {
    id: "nursing-event-1",
    title: "Annual Nursing Excellence Conference 2025",
    category: "Event",
    date: "Feb 21, 2025",
    description:
      "Conference featuring presentations on advanced nursing practices, clinical leadership, and healthcare innovation from faculty and students.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/HealthSciences/nursing/NursingExcellenceConference.pdf",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-event-2",
    title: "Clinical Skills Workshop - Critical Care",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "Hands-on workshop on advanced critical care nursing, ventilator management, and intensive care unit protocols.",
    image:
      "https://images.unsplash.com/photo-1578496321055-f8ee998ebb03?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-event-3",
    title: "Nursing Research Methodology Seminar",
    category: "Event",
    date: "Feb 5, 2025",
    description:
      "Seminar on research design, data analysis, ethics, and publication strategies for nursing research.",
    image:
      "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-event-4",
    title: "Community Health Outreach Camp",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Community-based health promotion and disease prevention camp organized by nursing students and faculty.",
    image:
      "https://images.unsplash.com/photo-1631217314830-4475217b10a8?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-event-5",
    title: "Patient-Centered Care Symposium",
    category: "Event",
    date: "Feb 15, 2025",
    description:
      "Symposium on holistic nursing care, patient education, and excellence in clinical practice.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
];

const NURSING_NEWS: NoticeItem[] = [
  {
    id: "nursing-news-1",
    title: "DSU Nursing Graduates Achieve 98% Placement Rate",
    category: "News",
    date: "Nov 18, 2025",
    description:
      "B.Sc Nursing graduates secured positions at leading hospitals and healthcare institutions globally.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-news-2",
    title: "New Simulation Lab Facility Inaugurated",
    category: "News",
    date: "Nov 8, 2025",
    description:
      "State-of-the-art clinical simulation lab with high-fidelity patient simulators opened for nursing education.",
    image:
      "https://images.unsplash.com/photo-1578496321055-f8ee998ebb03?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-news-3",
    title: "Faculty Member Awarded Best Nursing Educator",
    category: "News",
    date: "Oct 20, 2025",
    description:
      "Dr. Sarah Johnson recognized for excellence in nursing education and mentorship at national conference.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-news-4",
    title: "Nursing Research Published in International Journal",
    category: "News",
    date: "Oct 5, 2025",
    description:
      "Faculty-led nursing research on patient care outcomes published in top-tier international journal.",
    image:
      "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "College of Nursing Sciences",
  },
];

const NURSING_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "nursing-announce-1",
    title: "Clinical Rotation Schedule Released",
    category: "Announcement",
    date: "Dec 27, 2024",
    description:
      "Clinical internship assignments and hospital rotation schedules for 3rd and 4th semester students now available.",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-announce-2",
    title: "Theory Examinations Schedule",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Mid-semester theory examinations commence from January 28, 2025. Complete timetable available online.",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-announce-3",
    title: "Clinical Lab Access Timings",
    category: "Announcement",
    date: "Dec 15, 2024",
    description:
      "Nursing skill lab and simulation center access timings expanded to support clinical skill development.",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-announce-4",
    title: "Nursing Capstone Project Submission",
    category: "Announcement",
    date: "Dec 10, 2024",
    description:
      "Final year nursing research project submission deadline extended to February 14, 2025.",
    department: "College of Nursing Sciences",
  },
  {
    id: "nursing-announce-5",
    title: "Professional Development Workshops",
    category: "Announcement",
    date: "Dec 5, 2024",
    description:
      "Monthly workshops on communication skills, leadership, and professional ethics for all nursing students.",
    department: "College of Nursing Sciences",
  },
];

export function getNursingEvents(): NoticeItem[] {
  return NURSING_EVENTS;
}

export function getNursingNews(): NoticeItem[] {
  return NURSING_NEWS;
}

export function getNursingAnnouncements(): NoticeItem[] {
  return NURSING_ANNOUNCEMENTS;
}

export function getAllNursingNotices(): NoticeItem[] {
  return [...NURSING_EVENTS, ...NURSING_NEWS, ...NURSING_ANNOUNCEMENTS];
}
