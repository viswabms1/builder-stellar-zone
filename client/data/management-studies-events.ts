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

const MANAGEMENT_EVENTS: NoticeItem[] = [
  {
    id: "mgmt-event-1",
    title: "Case Study Competition 2025",
    category: "Event",
    date: "Feb 12, 2025",
    description:
      "National case study competition with real business scenarios from leading corporations. Teams compete in strategic analysis and decision-making.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/ManagementStudies/notices/CaseStudy-2025.pdf",
    department: "Management Studies",
  },
  {
    id: "mgmt-event-2",
    title: "Leadership Conclave with Industry Titans",
    category: "Event",
    date: "Feb 5, 2025",
    description:
      "Keynote addresses and panel discussions with CEOs and business leaders from Fortune 500 companies. Register by January 28.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    link: "https://www.dsu.edu.in/images/ManagementStudies/notices/LeadershipConclave.pdf",
    department: "Management Studies",
  },
  {
    id: "mgmt-event-3",
    title: "Business Analytics and Data Science Workshop",
    category: "Event",
    date: "Feb 8, 2025",
    description:
      "Hands-on workshop on advanced analytics, predictive modeling, and business intelligence tools. Taught by industry practitioners.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
  {
    id: "mgmt-event-4",
    title: "Entrepreneurship Bootcamp",
    category: "Event",
    date: "Feb 1, 2025",
    description:
      "Intensive 4-week bootcamp for aspiring entrepreneurs covering ideation, validation, funding, and scaling strategies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
  {
    id: "mgmt-event-5",
    title: "Sustainability and ESG Summit",
    category: "Event",
    date: "Feb 10, 2025",
    description:
      "Conference on environmental, social, and governance practices in corporate strategy and stakeholder value creation.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
];

const MANAGEMENT_NEWS: NoticeItem[] = [
  {
    id: "mgmt-news-1",
    title: "Management School Receives Global Rankings Recognition",
    category: "News",
    date: "Nov 15, 2025",
    description:
      "DSU Management School ranked in top 50 business schools in India by leading international ranking agencies.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
  {
    id: "mgmt-news-2",
    title: "Average Placement Package Hits ₹15 LPA",
    category: "News",
    date: "Nov 1, 2025",
    description:
      "2024-25 batch achieves 98% placement with average package exceeding ₹15 LPA across consulting, finance, and tech sectors.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
  {
    id: "mgmt-news-3",
    title: "New Centre for Innovation and Entrepreneurship",
    category: "News",
    date: "Oct 20, 2025",
    description:
      "Dedicated innovation hub launched to incubate student ventures and provide mentorship from successful entrepreneurs and investors.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
  {
    id: "mgmt-news-4",
    title: "Industry-Academia Research Initiative Launched",
    category: "News",
    date: "Oct 1, 2025",
    description:
      "Strategic partnerships with leading corporations for applied research projects benefiting both academia and industry.",
    image: "https://images.unsplash.com/photo-1516937941344-00b4b0ba8c00?w=600&h=300&fit=crop",
    department: "Management Studies",
  },
];

const MANAGEMENT_ANNOUNCEMENTS: NoticeItem[] = [
  {
    id: "mgmt-announce-1",
    title: "Spring Semester Registration Extended",
    category: "Announcement",
    date: "Dec 28, 2024",
    description:
      "Registration deadline has been extended to January 20, 2025. All students must complete registration by this date.",
    department: "Management Studies",
  },
  {
    id: "mgmt-announce-2",
    title: "MBA Internship Placements Open",
    category: "Announcement",
    date: "Dec 22, 2024",
    description:
      "MBA summer internship drive begins with 200+ opportunities in consulting, finance, and operations. Register your profile by January 15.",
    department: "Management Studies",
  },
  {
    id: "mgmt-announce-3",
    title: "Mid-Semester Exams Schedule Released",
    category: "Announcement",
    date: "Dec 20, 2024",
    description:
      "Mid-semester examinations commence from February 3, 2025. Complete timetable available on the student portal.",
    department: "Management Studies",
  },
  {
    id: "mgmt-announce-4",
    title: "Campus Facilities Maintenance",
    category: "Announcement",
    date: "Dec 18, 2024",
    description:
      "Business school facilities will undergo maintenance from January 5-15. Alternative spaces arranged for classes and study.",
    department: "Management Studies",
  },
  {
    id: "mgmt-announce-5",
    title: "Capstone Project Submission Deadline",
    category: "Announcement",
    date: "Dec 14, 2024",
    description:
      "Final semester capstone project submission due by January 31, 2025. Late submissions will face grade penalties.",
    department: "Management Studies",
  },
];

export function getManagementEvents(): NoticeItem[] {
  return MANAGEMENT_EVENTS;
}

export function getManagementNews(): NoticeItem[] {
  return MANAGEMENT_NEWS;
}

export function getManagementAnnouncements(): NoticeItem[] {
  return MANAGEMENT_ANNOUNCEMENTS;
}

export function getAllManagementNotices(): NoticeItem[] {
  return [...MANAGEMENT_EVENTS, ...MANAGEMENT_NEWS, ...MANAGEMENT_ANNOUNCEMENTS];
}
