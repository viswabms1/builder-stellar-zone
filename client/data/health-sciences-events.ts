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

const HEALTH_SCIENCES_EVENTS: NoticeItem[] = [
  {
    id: "health-event-1",
    title: "Clinical Research Symposium 2025",
    category: "Event",
    date: "Feb 14, 2025",
    description:
      "Annual symposium featuring presentations of cutting-edge clinical research from faculty and students in medicine, nursing, and allied health.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/HealthSciences/notices/ClinicalResearchSymposium.pdf",
    department: "Health Sciences",
  },
  {
    id: "health-event-2",
    title: "Medical Ethics and Law Workshop",
    category: "Event",
    date: "Feb 3, 2025",
    description:
      "Interactive workshop on medical ethics, patient rights, informed consent, and legal aspects of healthcare delivery.",
    image: "https://images.unsplash.com/photo-1579154204601-01d430751fb0?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-event-3",
    title: "Nursing Care Excellence Symposium",
    category: "Event",
    date: "Feb 7, 2025",
    description:
      "Conference on advanced nursing practices, patient-centered care, and leadership in healthcare settings.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-event-4",
    title: "Public Health and Epidemiology Workshop",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Hands-on workshop on epidemiological methods, disease surveillance, and public health intervention strategies.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-event-5",
    title: "Digital Health and Telemedicine Forum",
    category: "Event",
    date: "Feb 9, 2025",
    description:
      "Conference on digital health technologies, telemedicine platforms, and remote patient monitoring innovation.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
];

const HEALTH_SCIENCES_NEWS: NoticeItem[] = [
  {
    id: "health-news-1",
    title: "DSU Medical School Achieves NAAC A++ Accreditation",
    category: "News",
    date: "Nov 20, 2025",
    description:
      "School of Health Sciences receives highest accreditation status for academic excellence and research contribution.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-news-2",
    title: "New Hospital Research Wing Inaugurated",
    category: "News",
    date: "Nov 5, 2025",
    description:
      "Advanced research facility with state-of-the-art laboratories and clinical study units officially opened.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-news-3",
    title: "Faculty Publications in Top Medical Journals",
    category: "News",
    date: "Oct 15, 2025",
    description:
      "Multiple faculty publications in prestigious international medical and nursing journals recognizing quality research.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
  {
    id: "health-news-4",
    title: "100% Residency Placement for Medical Graduates",
    category: "News",
    date: "Oct 1, 2025",
    description:
      "Medical graduates secured positions in premier residency programs across India and international institutions.",
    image: "https://images.unsplash.com/photo-1576091160550-112173f31c77?w=600&h=300&fit=crop",
    department: "Health Sciences",
  },
];

const HEALTH_SCIENCES_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "health-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Health Sciences",
  },
  {
    id: "health-announce-2",
    title: "Clinical Internship Schedules Released",
    category: "Announcement",
    date: "Dec 22, 2024",
    description:
      "Clinical internship assignments and rotation schedules for 3rd and 4th year students now available on the portal.",
    department: "Health Sciences",
  },
  {
    id: "health-announce-3",
    title: "Mid-Semester Exam Schedule",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Examinations commence from February 3, 2025. Complete timetable for all programs available online.",
    department: "Health Sciences",
  },
  {
    id: "health-announce-4",
    title: "Hospital Facility Maintenance",
    category: "Announcement",
    date: "Dec 18, 2024",
    description:
      "Hospital will undergo scheduled maintenance from January 5-15. Emergency services continue uninterrupted.",
    department: "Health Sciences",
  },
  {
    id: "health-announce-5",
    title: "Research Project Submission Deadline",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final year research project submission due by January 31, 2025. Ethics approval required before submission.",
    department: "Health Sciences",
  },
];

export function getHealthSciencesEvents(): NoticeItem[] {
  return HEALTH_SCIENCES_EVENTS;
}

export function getHealthSciencesNews(): NoticeItem[] {
  return HEALTH_SCIENCES_NEWS;
}

export function getHealthSciencesAnnouncements(): NoticeItem[] {
  return HEALTH_SCIENCES_ANNOUNCEMENTS;
}

export function getAllHealthSciencesNotices(): NoticeItem[] {
  return [...HEALTH_SCIENCES_EVENTS, ...HEALTH_SCIENCES_NEWS, ...HEALTH_SCIENCES_ANNOUNCEMENTS];
}
