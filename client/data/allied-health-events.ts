export interface NoticeItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: "Event" | "News" | "Announcement";
  image?: string;
  link?: string;
  department?: string;
}

export const getAlliedHealthEvents = (): NoticeItem[] => [
  {
    id: "1",
    title: "World Health Day Seminar",
    description: "Joint seminar on modern healthcare practices in Allied Health Sciences.",
    date: "April 7, 2024",
    category: "Event",
    image: "https://images.unsplash.com/photo-1505751172107-104990666014?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Clinical Workshop",
    description: "Hands-on workshop on advanced diagnostic imaging techniques.",
    date: "May 15, 2024",
    category: "Event",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
  },
];

export const getAlliedHealthNews = (): NoticeItem[] => [
  {
    id: "news-1",
    title: "Excellence in Research Award",
    description: "Faculty members of Allied Health Sciences received awards for their research in medical technology.",
    date: "March 20, 2024",
    category: "News",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop",
  },
];

export const getAlliedHealthAnnouncements = (): NoticeItem[] => [
  {
    id: "ann-1",
    title: "Admission Open for 2024-25",
    description: "Applications are invited for various B.Sc and M.Sc Allied Health Sciences programs.",
    date: "Ongoing",
    category: "Announcement",
  },
];
