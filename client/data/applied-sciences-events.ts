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

const APPLIED_SCIENCES_EVENTS: NoticeItem[] = [
  {
    id: "sci-event-1",
    title: "Research and Innovation Expo 2025",
    category: "Event",
    date: "Feb 16, 2025",
    description:
      "Showcase of student research projects in physics, chemistry, and mathematics with interactive demonstrations and poster presentations.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/AppliedSciences/notices/ResearchExpo-2025.pdf",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-event-2",
    title: "Advanced Materials Science Workshop",
    category: "Event",
    date: "Feb 4, 2025",
    description:
      "Hands-on workshop on materials characterization, synthesis techniques, and applications in emerging technologies.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-event-3",
    title: "Quantum Physics Seminar Series",
    category: "Event",
    date: "Feb 6, 2025",
    description:
      "Multi-part seminar on quantum mechanics, quantum computing, and applications in cryptography and sensors.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-event-4",
    title: "Computational Chemistry and Molecular Modeling Workshop",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Practical training on molecular dynamics simulations, quantum chemistry calculations, and drug discovery applications.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-event-5",
    title: "Mathematical Modeling for Real-World Problems",
    category: "Event",
    date: "Feb 11, 2025",
    description:
      "Workshop on applying mathematical models to environmental, biological, and engineering challenges.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
];

const APPLIED_SCIENCES_NEWS: NoticeItem[] = [
  {
    id: "sci-news-1",
    title: "Research Initiative Funded by National Science Board",
    category: "News",
    date: "Nov 18, 2025",
    description:
      "School of Basic & Applied Sciences receives major research grant for advanced materials and quantum physics research projects.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-news-2",
    title: "Faculty Publications in Nature and Science Journals",
    category: "News",
    date: "Nov 5, 2025",
    description:
      "Multiple faculty members published groundbreaking research in top-tier international scientific journals.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-news-3",
    title: "New Advanced Laboratory Facilities Inaugurated",
    category: "News",
    date: "Oct 22, 2025",
    description:
      "State-of-the-art laboratory with advanced instrumentation for physics, chemistry, and mathematical research.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-news-4",
    title: "Student Research Wins National Science Fair",
    category: "News",
    date: "Oct 10, 2025",
    description:
      "Applied Sciences student team wins national science fair recognition for innovative research project in quantum physics.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    department: "School of Basic & Applied Sciences",
  },
];

const APPLIED_SCIENCES_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "sci-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-announce-2",
    title: "Laboratory Safety Training Mandatory",
    category: "Announcement",
    date: "Dec 24, 2024",
    description:
      "All students must complete safety training before accessing laboratories. Sessions available January 6-10, 2025.",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-announce-3",
    title: "Mid-Semester Exam Schedule Released",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Examinations commence from February 3, 2025. Complete timetable available on the student portal.",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-announce-4",
    title: "Laboratory Equipment Upgrade Underway",
    category: "Announcement",
    date: "Dec 18, 2024",
    description:
      "Laboratory facilities will undergo upgrades from January 5-20. Practical classes rescheduled accordingly.",
    department: "School of Basic & Applied Sciences",
  },
  {
    id: "sci-announce-5",
    title: "Research Paper Submission Deadline",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final year research paper submission due by January 31, 2025. Submit via the online portal with supervisor approval.",
    department: "School of Basic & Applied Sciences",
  },
];

export function getAppliedSciencesEvents(): NoticeItem[] {
  return APPLIED_SCIENCES_EVENTS;
}

export function getAppliedSciencesNews(): NoticeItem[] {
  return APPLIED_SCIENCES_NEWS;
}

export function getAppliedSciencesAnnouncements(): NoticeItem[] {
  return APPLIED_SCIENCES_ANNOUNCEMENTS;
}

export function getAllAppliedSciencesNotices(): NoticeItem[] {
  return [...APPLIED_SCIENCES_EVENTS, ...APPLIED_SCIENCES_NEWS, ...APPLIED_SCIENCES_ANNOUNCEMENTS];
}
