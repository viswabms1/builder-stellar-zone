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

const LAW_EVENTS: NoticeItem[] = [
  {
    id: "law-event-1",
    title: "National Moot Court Championship 2025",
    category: "Event",
    date: "Feb 15, 2025",
    description:
      "Annual moot court competition with participating law schools from across India. Register your team by January 25, 2025.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/Law/notices/MootCourt-2025.pdf",
    department: "Law School",
  },
  {
    id: "law-event-2",
    title: "Legal Aid Clinic Initiative Launch",
    category: "Event",
    date: "Feb 1, 2025",
    description:
      "Students engage in pro bono legal services providing counsel to underserved communities. Open to all law students.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=300&fit=crop",
    department: "Law School",
  },
  {
    id: "law-event-3",
    title: "Industry Lecture: Contemporary Corporate Law Challenges",
    category: "Event",
    date: "Jan 30, 2025",
    description:
      "Guest lecture by senior corporate counsel from a Fortune 500 company. Venue: Conference Hall A, 3:00 PM.",
    image: "https://images.unsplash.com/photo-1528740579684-5809094cdaa1?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/Law/notices/CorporateLaw-Lecture.pdf",
    department: "Law School",
  },
  {
    id: "law-event-4",
    title: "Constitutional Law Seminar Series",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Multi-part seminar exploring constitutional interpretation, judicial review, and emerging constitutional challenges.",
    image: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?w=600&h=300&fit=crop",
    department: "Law School",
  },
  {
    id: "law-event-5",
    title: "International Law Workshop",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Hands-on workshop on international treaties, dispute resolution mechanisms, and cross-border legal frameworks.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=300&fit=crop",
    department: "Law School",
  },
];

const LAW_NEWS: NoticeItem[] = [
  {
    id: "law-news-1",
    title: "DSU Law Students Win All India Moot Court Championship 2025",
    category: "News",
    date: "Nov 15, 2025",
    description:
      "DSU Law team clinches first position at the prestigious National Moot Court Championship with outstanding oral advocacy and legal reasoning.",
    image: "https://images.unsplash.com/photo-1528740579684-5809094cdaa1?w=600&h=300&fit=crop",
    department: "Law School",
  },
  {
    id: "law-news-2",
    title: "Faculty Research Published in Harvard Law Review",
    category: "News",
    date: "Nov 10, 2025",
    description:
      "Prof. Justice Sharma's groundbreaking work on constitutional interpretation and alternative dispute resolution published in leading international legal journal.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Law School",
  },
  {
    id: "law-news-3",
    title: "100% Placement Rate for 2024-25 Law Batch",
    category: "News",
    date: "Oct 25, 2025",
    description:
      "Law graduates placed at top law firms, corporate legal departments, and government organizations with competitive packages.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=300&fit=crop",
    department: "Law School",
  },
  {
    id: "law-news-4",
    title: "New Centre for Constitutional Studies Established",
    category: "News",
    date: "Oct 1, 2025",
    description:
      "Advanced research center dedicated to constitutional law studies, policy research, and judicial process innovation.",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=600&h=300&fit=crop",
    department: "Law School",
  },
];

const LAW_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "law-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Law School",
  },
  {
    id: "law-announce-2",
    title: "Mid-Semester Exam Schedule Released",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Mid-semester examinations will commence from February 3, 2025. Complete timetable available on the student portal.",
    department: "Law School",
  },
  {
    id: "law-announce-3",
    title: "Internship Program Submission Deadline",
    category: "Announcement",
    date: "Dec 15, 2024",
    description:
      "Mandatory internship program submissions due by January 25, 2025. Guidelines and forms available on the portal.",
    department: "Law School",
  },
  {
    id: "law-announce-4",
    title: "Campus Maintenance Notice: Library Renovation",
    category: "Announcement",
    date: "Dec 18, 2024",
    description:
      "Law library will be temporarily closed from January 5-15 for infrastructure upgrades. Alternative reading rooms available.",
    department: "Law School",
  },
  {
    id: "law-announce-5",
    title: "Project Submission Deadline Extension",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final year thesis project submission deadline extended to January 31, 2025. No further extensions will be granted.",
    department: "Law School",
  },
];

export function getLawEvents(): NoticeItem[] {
  return LAW_EVENTS;
}

export function getLawNews(): NoticeItem[] {
  return LAW_NEWS;
}

export function getLawAnnouncements(): NoticeItem[] {
  return LAW_ANNOUNCEMENTS;
}

export function getAllLawNotices(): NoticeItem[] {
  return [...LAW_EVENTS, ...LAW_NEWS, ...LAW_ANNOUNCEMENTS];
}
