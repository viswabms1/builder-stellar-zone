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

const JOURNALISM_EVENTS: NoticeItem[] = [
  {
    id: "jmc-event-1",
    title: "Digital Journalism and Storytelling Workshop",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "Hands-on workshop on multimedia storytelling, data journalism, and digital content creation for modern media.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/JournalismMassComm/notices/DigitalJournalism.pdf",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-event-2",
    title: "Broadcast Production and Videography Masterclass",
    category: "Event",
    date: "Feb 5, 2025",
    description:
      "Professional training on broadcast standards, video production techniques, and post-production workflows.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-event-3",
    title: "Documentary Filmmaking Forum",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Seminar on documentary production, storytelling techniques, and impact journalism with industry professionals.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-event-4",
    title: "Media Ethics and Responsible Journalism Symposium",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Conference on media ethics, journalistic integrity, and responsible reporting in the digital age.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
];

const JOURNALISM_NEWS: NoticeItem[] = [
  {
    id: "jmc-news-1",
    title: "Student Documentary Wins National Film Festival Award",
    category: "News",
    date: "Nov 20, 2025",
    description:
      "JMC student documentary recognized for artistic excellence and impactful social commentary at national film festival.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-news-2",
    title: "Alumni Journalist Featured in International News Outlet",
    category: "News",
    date: "Nov 5, 2025",
    description:
      "DSU JMC alumnus published investigative journalism piece in leading international newspaper.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-news-3",
    title: "New Media Studio Facility Launched",
    category: "News",
    date: "Oct 18, 2025",
    description:
      "State-of-the-art broadcast studio with 4K equipment and post-production facilities now operational for student projects.",
    image: "https://images.unsplash.com/photo-1514306688772-ac26924e2ce2?w=600&h=300&fit=crop",
    department: "Journalism & Mass Communication",
  },
];

const JOURNALISM_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "jmc-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-announce-2",
    title: "Media Internship Applications Open",
    category: "Announcement",
    date: "Dec 22, 2024",
    description:
      "Summer internship opportunities with news networks and media houses. Apply by January 15, 2025.",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-announce-3",
    title: "Mid-Semester Exam Schedule Released",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Examinations commence from February 3, 2025. Complete schedule available on the student portal.",
    department: "Journalism & Mass Communication",
  },
  {
    id: "jmc-announce-4",
    title: "Final Project Submission Guidelines",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final semester project submission due by January 31, 2025. Guidelines and rubrics available online.",
    department: "Journalism & Mass Communication",
  },
];

export function getJournalismEvents(): NoticeItem[] {
  return JOURNALISM_EVENTS;
}

export function getJournalismNews(): NoticeItem[] {
  return JOURNALISM_NEWS;
}

export function getJournalismAnnouncements(): NoticeItem[] {
  return JOURNALISM_ANNOUNCEMENTS;
}

export function getAllJournalismNotices(): NoticeItem[] {
  return [...JOURNALISM_EVENTS, ...JOURNALISM_NEWS, ...JOURNALISM_ANNOUNCEMENTS];
}
