/**
 * News Data Structure - Centralized for entire university
 * Filtered by school and department on respective pages
 * Ready for Directus CMS integration
 */

export interface NewsItem {
  id: string;
  title: string;
  content: string;
  excerpt?: string;
  date: string;
  status: "published" | "draft";
  school: string; // "Engineering", "Health Sciences", "Commerce & Management", etc.
  department?: string; // "CSE", "Mechanical", "Pharmacy", etc. (optional)
  category: "Achievement" | "Research" | "Placement" | "Accreditation" | "General";
  image?: string;
  link?: string;
  author?: string;
  tags?: string[];
}

// University-wide news
const UNIVERSITY_NEWS: NewsItem[] = [
  {
    id: "news-univ-1",
    title: "DSU Receives NAAC 'A+' Accreditation",
    excerpt: "University achieves excellence in teaching, research, and infrastructure",
    content:
      "DSU has received the prestigious NAAC 'A+' accreditation, affirming its commitment to academic excellence and innovation across all schools.",
    date: "Jan 20, 2025",
    status: "published",
    school: "University",
    category: "Accreditation",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    author: "Communications Office",
    tags: ["accreditation", "achievement"],
  },
  {
    id: "news-univ-2",
    title: "New Research Innovation Center Inaugurated",
    excerpt: "State-of-the-art facility supporting interdisciplinary research",
    content:
      "The university inaugurates a state-of-the-art Research Innovation Center equipped with advanced laboratories and collaborative spaces for faculty and students.",
    date: "Jan 15, 2025",
    status: "published",
    school: "University",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=300&fit=crop",
    author: "Research Affairs",
    tags: ["research", "infrastructure"],
  },
];

// Engineering School News
const ENGINEERING_NEWS: NewsItem[] = [
  {
    id: "news-eng-1",
    title: "School of Engineering: 96% Placement Rate Achieved",
    excerpt: "Record-breaking placements with average package of ₹18 LPA",
    content:
      "The School of Engineering achieves 96% placement rate for the 2024-25 batch with students receiving offers from leading tech and manufacturing companies. Average package stands at ₹18 LPA with highest package at ₹42 LPA.",
    date: "Jan 18, 2025",
    status: "published",
    school: "Engineering",
    category: "Placement",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    author: "Placement Cell",
    tags: ["placement", "achievement"],
  },
  {
    id: "news-eng-2",
    title: "CSE Department Wins National Hackathon 2025",
    excerpt: "Students from CSE secure first place in inter-college hackathon",
    content:
      "A team of CSE department students wins the National College Hackathon 2025 with an innovative AI-based health monitoring system. The project received recognition for originality and implementation excellence.",
    date: "Jan 10, 2025",
    status: "published",
    school: "Engineering",
    department: "CSE",
    category: "Achievement",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&h=300&fit=crop",
    author: "CSE Department",
    tags: ["hackathon", "achievement", "ai"],
  },
  {
    id: "news-eng-3",
    title: "Mechanical Engineering: Industry Collaboration with Bosch",
    excerpt: "Joint research initiative on automotive electrification",
    content:
      "School of Engineering signs MOU with Bosch for collaborative research in electric vehicle technology. This partnership will involve faculty and students in cutting-edge automotive research.",
    date: "Jan 5, 2025",
    status: "published",
    school: "Engineering",
    department: "Mechanical",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1581092162562-40038f51df21?w=600&h=300&fit=crop",
    author: "Department Head",
    tags: ["research", "industry", "automotive"],
  },
  {
    id: "news-eng-4",
    title: "Aerospace Department launches UAV Research Lab",
    excerpt: "New laboratory dedicated to unmanned aerial systems",
    content:
      "The Aerospace Department inaugurates a specialized UAV Research Lab equipped with drone simulators, design workstations, and testing facilities for autonomous flight systems.",
    date: "Dec 28, 2024",
    status: "published",
    school: "Engineering",
    department: "Aerospace",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=300&fit=crop",
    tags: ["research", "robotics", "uav"],
  },
];

// Health Sciences School News
const HEALTH_SCIENCES_NEWS: NewsItem[] = [
  {
    id: "news-hs-1",
    title: "School of Health Sciences: 93% Placement Rate in Healthcare Sector",
    excerpt: "Graduates placed in leading hospitals and healthcare institutions",
    content:
      "The School of Health Sciences achieves 93% placement rate for nursing, pharmacy, and allied health graduates. Placements span prestigious hospitals, pharmaceutical companies, and healthcare startups.",
    date: "Jan 16, 2025",
    status: "published",
    school: "Health Sciences",
    category: "Placement",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=300&fit=crop",
    author: "Placement Cell",
    tags: ["placement", "healthcare"],
  },
  {
    id: "news-hs-2",
    title: "Pharmacy Department Launches Clinical Trial Research Program",
    excerpt: "New initiative supporting pharmaceutical research and student training",
    content:
      "The Department of Pharmacy launches a clinical trial research program in partnership with leading pharmaceutical companies. Students gain hands-on experience in drug development and testing.",
    date: "Jan 12, 2025",
    status: "published",
    school: "Health Sciences",
    department: "Pharmacy",
    category: "Research",
    image:
      "https://images.unsplash.com/photo-1584308666744-24d5f400f6f4?w=600&h=300&fit=crop",
    author: "Pharmacy Department",
    tags: ["research", "pharmacy", "clinical"],
  },
  {
    id: "news-hs-3",
    title: "Nursing Program Accredited by International Nursing Council",
    excerpt: "Recognition of excellence in nursing education and clinical training",
    content:
      "The BSc Nursing program receives accreditation from the International Nursing Council, affirming the quality of curriculum, faculty expertise, and student outcomes.",
    date: "Jan 8, 2025",
    status: "published",
    school: "Health Sciences",
    department: "Nursing",
    category: "Accreditation",
    image:
      "https://images.unsplash.com/photo-1576091160671-112d4fbbc593?w=600&h=300&fit=crop",
    tags: ["accreditation", "nursing"],
  },
];

// Commerce & Management School News
const COMMERCE_MANAGEMENT_NEWS: NewsItem[] = [
  {
    id: "news-cm-1",
    title: "B.Com and BBA: 88% Placement with Avg Package ₹12 LPA",
    excerpt: "Strong placement record in finance, consulting, and retail sectors",
    content:
      "School of Commerce & Management records 88% placement for undergraduate programs with placements in top financial institutions, consulting firms, and retail companies.",
    date: "Jan 14, 2025",
    status: "published",
    school: "Commerce & Management",
    category: "Placement",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    author: "Placement Cell",
    tags: ["placement", "commerce"],
  },
  {
    id: "news-cm-2",
    title: "MBA Program: Corporate Immersion Week with Leading Companies",
    excerpt: "Students gain industry exposure through structured workplace learning",
    content:
      "MBA program organizes Corporate Immersion Week where students work directly with industry partners including McKinsey, Deloitte, and Amazon on real business challenges.",
    date: "Dec 30, 2024",
    status: "published",
    school: "Commerce & Management",
    department: "MBA",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=300&fit=crop",
    author: "MBA Program Director",
    tags: ["mba", "corporate", "internship"],
  },
];

// Aggregate all news
const ALL_NEWS: NewsItem[] = [
  ...UNIVERSITY_NEWS,
  ...ENGINEERING_NEWS,
  ...HEALTH_SCIENCES_NEWS,
  ...COMMERCE_MANAGEMENT_NEWS,
];

/**
 * Get all published news
 */
export function getAllNews(): NewsItem[] {
  return ALL_NEWS.filter((n) => n.status === "published").sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

/**
 * Get news by school only (includes university-wide news)
 */
export function getNewsBySchool(school: string): NewsItem[] {
  return ALL_NEWS.filter(
    (n) =>
      n.status === "published" &&
      (n.school === school || n.school === "University")
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get news by school and department
 */
export function getNewsBySchoolAndDepartment(
  school: string,
  department: string
): NewsItem[] {
  return ALL_NEWS.filter(
    (n) =>
      n.status === "published" &&
      (n.school === school || n.school === "University") &&
      (!n.department || n.department === department)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get news by category
 */
export function getNewsByCategory(category: NewsItem["category"]): NewsItem[] {
  return ALL_NEWS.filter(
    (n) => n.status === "published" && n.category === category
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get latest news items with limit
 */
export function getLatestNews(limit: number = 5): NewsItem[] {
  return getAllNews().slice(0, limit);
}

/**
 * Get news by tag
 */
export function getNewsByTag(tag: string): NewsItem[] {
  return ALL_NEWS.filter(
    (n) => n.status === "published" && n.tags?.includes(tag)
  ).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
