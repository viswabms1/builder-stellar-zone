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

const DESIGN_EVENTS: NoticeItem[] = [
  {
    id: "design-event-1",
    title: "Design Thinking Workshop",
    category: "Event",
    date: "Feb 15, 2025",
    description:
      "Hands-on workshop on design thinking methodology, prototyping, and user-centered design principles.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/BDesign/notices/DesignThinking.pdf",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-event-2",
    title: "Sustainable Design Masterclass",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Professional training on sustainable design practices, eco-friendly materials, and circular design principles.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-event-3",
    title: "Design Critique and Portfolio Review",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Industry critique session with design professionals reviewing student portfolios and providing feedback.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-event-4",
    title: "Innovation Lab Showcase",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "Annual showcase of student design projects and innovations in product design, communication, and experience design.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
];

const DESIGN_NEWS: NoticeItem[] = [
  {
    id: "design-news-1",
    title: "B.Design Students Win International Design Competition",
    category: "News",
    date: "Nov 22, 2025",
    description:
      "DSU design students' sustainable product design wins gold at international design competition.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-news-2",
    title: "Design Studio Partnership with Tech Giants",
    category: "News",
    date: "Nov 10, 2025",
    description:
      "New collaboration with leading tech companies bringing real-world design projects to students.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-news-3",
    title: "Advanced Design Facilities Expanded",
    category: "News",
    date: "Oct 20, 2025",
    description:
      "New state-of-the-art design studios with 3D printing, prototyping labs, and digital fabrication equipment now available.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=300&fit=crop",
    department: "School of Design & Digital Trans-Media",
  },
];

const DESIGN_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "design-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-announce-2",
    title: "Design Internship Opportunities Available",
    category: "Announcement",
    date: "Dec 22, 2024",
    description:
      "Summer internship opportunities with leading design studios and companies. Apply by January 15, 2025.",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-announce-3",
    title: "Studio Project Submissions Due",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Final design projects and portfolios due by January 31, 2025. Guidelines available on student portal.",
    department: "School of Design & Digital Trans-Media",
  },
  {
    id: "design-announce-4",
    title: "Design Exhibition Next Month",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Annual student design exhibition showcasing best works from all specialization tracks. Mark your calendars!",
    department: "School of Design & Digital Trans-Media",
  },
];

export function getDesignEvents(): NoticeItem[] {
  return DESIGN_EVENTS;
}

export function getDesignNews(): NoticeItem[] {
  return DESIGN_NEWS;
}

export function getDesignAnnouncements(): NoticeItem[] {
  return DESIGN_ANNOUNCEMENTS;
}

export function getAllDesignNotices(): NoticeItem[] {
  return [...DESIGN_EVENTS, ...DESIGN_NEWS, ...DESIGN_ANNOUNCEMENTS];
}
