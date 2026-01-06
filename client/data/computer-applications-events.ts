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

const COMPUTER_APPLICATIONS_EVENTS: NoticeItem[] = [
  {
    id: "ca-event-1",
    title: "Web Development and Cloud Computing Bootcamp",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Intensive bootcamp on modern web frameworks, cloud platforms, and deployment strategies for enterprise applications.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/ComputerApplications/notices/WebDevBootcamp.pdf",
    department: "Computer Applications",
  },
  {
    id: "ca-event-2",
    title: "Software Development Lifecycle Masterclass",
    category: "Event",
    date: "Feb 6, 2025",
    description:
      "Comprehensive workshop on Agile methodologies, DevOps practices, and software testing frameworks used in industry.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
  {
    id: "ca-event-3",
    title: "Database Management and SQL Optimization",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Training on relational database design, SQL optimization, and NoSQL technologies for scalable applications.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
  {
    id: "ca-event-4",
    title: "Hackathon 2025: Innovation Challenge",
    category: "Event",
    date: "Feb 15, 2025",
    description:
      "24-hour hackathon challenging students to build innovative solutions using cutting-edge technologies.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
];

const COMPUTER_APPLICATIONS_NEWS: NoticeItem[] = [
  {
    id: "ca-news-1",
    title: "Computer Applications Graduates Land Top Tech Roles",
    category: "News",
    date: "Nov 12, 2025",
    description:
      "2024-25 batch achieves 96% placement with graduates joining leading IT firms and startups.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
  {
    id: "ca-news-2",
    title: "New Cloud Computing Lab Inaugurated",
    category: "News",
    date: "Nov 1, 2025",
    description:
      "State-of-the-art laboratory for cloud technologies and distributed systems now operational for student projects.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
  {
    id: "ca-news-3",
    title: "Student Project Wins Regional Innovation Award",
    category: "News",
    date: "Oct 15, 2025",
    description:
      "Computer Applications students recognized for innovative mobile application development project at national competition.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    department: "Computer Applications",
  },
];

const COMPUTER_APPLICATIONS_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "ca-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Computer Applications",
  },
  {
    id: "ca-announce-2",
    title: "Industry Internship Openings Available",
    category: "Announcement",
    date: "Dec 22, 2024",
    description:
      "Summer internship opportunities with tech companies. Register your profile by January 15 for placements.",
    department: "Computer Applications",
  },
  {
    id: "ca-announce-3",
    title: "Mid-Semester Exam Schedule",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Examinations commence from February 3, 2025. Complete timetable available on the student portal.",
    department: "Computer Applications",
  },
  {
    id: "ca-announce-4",
    title: "Capstone Project Submission Deadline",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final year capstone project submission due by January 31, 2025. Submit via the online portal with documentation.",
    department: "Computer Applications",
  },
];

export function getComputerApplicationsEvents(): NoticeItem[] {
  return COMPUTER_APPLICATIONS_EVENTS;
}

export function getComputerApplicationsNews(): NoticeItem[] {
  return COMPUTER_APPLICATIONS_NEWS;
}

export function getComputerApplicationsAnnouncements(): NoticeItem[] {
  return COMPUTER_APPLICATIONS_ANNOUNCEMENTS;
}

export function getAllComputerApplicationsNotices(): NoticeItem[] {
  return [...COMPUTER_APPLICATIONS_EVENTS, ...COMPUTER_APPLICATIONS_NEWS, ...COMPUTER_APPLICATIONS_ANNOUNCEMENTS];
}
