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

const PHYSIOTHERAPY_EVENTS: NoticeItem[] = [
  {
    id: "physio-event-1",
    title: "Annual Physiotherapy Excellence Conference 2025",
    category: "Event",
    date: "Feb 21, 2025",
    description:
      "Conference featuring presentations on advanced rehabilitation techniques, sports physiotherapy, and clinical innovations from faculty and students.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/HealthSciences/physiotherapy/PhysiotherapyExcellenceConference.pdf",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-event-2",
    title: "Clinical Skills Workshop - Sports Physiotherapy",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "Hands-on workshop on sports injury management, rehabilitation protocols, and performance enhancement techniques.",
    image:
      "https://images.unsplash.com/photo-1578496321055-f8ee998ebb03?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-event-3",
    title: "Physiotherapy Research Methodology Seminar",
    category: "Event",
    date: "Feb 5, 2025",
    description:
      "Seminar on research design, evidence-based practice, data analysis, and publication strategies for physiotherapy research.",
    image:
      "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-event-4",
    title: "Community Health and Wellness Outreach Camp",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Community-based ergonomics awareness and health promotion camp organized by physiotherapy students and faculty.",
    image:
      "https://images.unsplash.com/photo-1631217314830-4475217b10a8?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-event-5",
    title: "Patient-Centered Rehabilitation Symposium",
    category: "Event",
    date: "Feb 15, 2025",
    description:
      "Symposium on holistic rehabilitation, functional recovery, and excellence in clinical practice for diverse patient populations.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
];

const PHYSIOTHERAPY_NEWS: NoticeItem[] = [
  {
    id: "physio-news-1",
    title: "DSU Physiotherapy Graduates Achieve 96% Placement Rate",
    category: "News",
    date: "Nov 18, 2025",
    description:
      "BPT graduates secured positions at leading hospitals, rehabilitation centers, and sports clinics globally.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-news-2",
    title: "Advanced Rehabilitation Lab Facility Inaugurated",
    category: "News",
    date: "Nov 8, 2025",
    description:
      "State-of-the-art rehabilitation laboratory with advanced therapeutic equipment opened for physiotherapy education and research.",
    image:
      "https://images.unsplash.com/photo-1578496321055-f8ee998ebb03?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-news-3",
    title: "Faculty Member Awarded Best Clinical Educator",
    category: "News",
    date: "Oct 20, 2025",
    description:
      "Dr. Rajesh Kumar recognized for excellence in physiotherapy education and clinical mentorship at national conference.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-news-4",
    title: "Physiotherapy Research Published in International Journal",
    category: "News",
    date: "Oct 5, 2025",
    description:
      "Faculty-led physiotherapy research on functional outcomes published in top-tier international journal.",
    image:
      "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "College of Physiotherapy",
  },
];

const PHYSIOTHERAPY_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "physio-announce-1",
    title: "Clinical Internship Rotation Schedule Released",
    category: "Announcement",
    date: "Dec 27, 2024",
    description:
      "Clinical placement assignments and hospital/rehabilitation center rotation schedules for 3rd and 4th semester students now available.",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-announce-2",
    title: "Theory Examinations Schedule",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Mid-semester theory examinations commence from January 28, 2025. Complete timetable available online.",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-announce-3",
    title: "Rehabilitation Lab Access Timings",
    category: "Announcement",
    date: "Dec 15, 2024",
    description:
      "Physiotherapy clinical lab and rehabilitation center access timings expanded to support practical skill development.",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-announce-4",
    title: "Physiotherapy Capstone Project Submission",
    category: "Announcement",
    date: "Dec 10, 2024",
    description:
      "Final year physiotherapy research project submission deadline extended to February 14, 2025.",
    department: "College of Physiotherapy",
  },
  {
    id: "physio-announce-5",
    title: "Professional Development Workshops",
    category: "Announcement",
    date: "Dec 5, 2024",
    description:
      "Monthly workshops on clinical reasoning, communication skills, professional ethics, and practice management for all physiotherapy students.",
    department: "College of Physiotherapy",
  },
];

export function getPhysiotherapyEvents(): NoticeItem[] {
  return PHYSIOTHERAPY_EVENTS;
}

export function getPhysiotherapyNews(): NoticeItem[] {
  return PHYSIOTHERAPY_NEWS;
}

export function getPhysiotherapyAnnouncements(): NoticeItem[] {
  return PHYSIOTHERAPY_ANNOUNCEMENTS;
}

export function getAllPhysiotherapyNotices(): NoticeItem[] {
  return [
    ...PHYSIOTHERAPY_EVENTS,
    ...PHYSIOTHERAPY_NEWS,
    ...PHYSIOTHERAPY_ANNOUNCEMENTS,
  ];
}
