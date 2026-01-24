export interface SearchResult {
  id: string;
  title: string;
  description: string;
  path: string;
  category: string;
}

export const searchIndex: SearchResult[] = [
  // Home
  {
    id: "home",
    title: "Home",
    description: "Dayananda Sagar University - Welcome to our institution",
    path: "/",
    category: "Main",
  },

  // About Section
  {
    id: "about",
    title: "About DSU",
    description: "Learn about Dayananda Sagar University and our values",
    path: "/about",
    category: "About",
  },
  {
    id: "vision-mission",
    title: "Vision & Mission",
    description: "Our vision and mission statements guide our institution",
    path: "/about/vision-mission",
    category: "About",
  },
  {
    id: "history",
    title: "History",
    description: "The history and heritage of Dayananda Sagar University",
    path: "/about/history",
    category: "About",
  },
  {
    id: "leadership",
    title: "Leadership & Administration",
    description: "Meet our leadership team and administrative staff",
    path: "/about/leadership",
    category: "About",
  },
  {
    id: "administrative-committees",
    title: "Administrative Committees",
    description: "Governance structure and administrative committees",
    path: "/about/leadership",
    category: "About",
  },
  {
    id: "accreditations",
    title: "Accreditations",
    description: "Our accreditations and certifications",
    path: "/about/accreditations",
    category: "About",
  },
  {
    id: "facilities",
    title: "Facilities",
    description: "Campus facilities and infrastructure",
    path: "/about/facilities",
    category: "About",
  },

  // Academics Section
  {
    id: "academics",
    title: "Academics",
    description: "Explore our academic programs and departments",
    path: "/academics",
    category: "Academics",
  },
  {
    id: "engineering",
    title: "Engineering",
    description: "Bachelor and Master programs in Engineering",
    path: "/academics/engineering",
    category: "Academics",
  },
  {
    id: "cse",
    title: "Computer Science & Engineering",
    description: "Department of Computer Science and Engineering",
    path: "/academics/engineering/computer-science",
    category: "Academics",
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Artificial Intelligence and Machine Learning programs",
    path: "/academics/engineering/ai-ml",
    category: "Academics",
  },
  {
    id: "computer-applications",
    title: "Computer Applications",
    description: "Postgraduate programs in Computer Applications",
    path: "/academics/computer-applications",
    category: "Academics",
  },
  {
    id: "law",
    title: "Law",
    description: "Undergraduate and postgraduate law programs",
    path: "/academics/law",
    category: "Academics",
  },
  {
    id: "management-studies",
    title: "Management Studies",
    description: "MBA and Management programs",
    path: "/academics/management-studies",
    category: "Academics",
  },
  {
    id: "health-sciences",
    title: "Health Sciences",
    description: "Medical and health-related programs",
    path: "/academics/health-sciences",
    category: "Academics",
  },
  {
    id: "medical-education",
    title: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
    description: "Advanced programs in medical education and research",
    path: "/academics/medical-education-research",
    category: "Academics",
  },
  {
    id: "cdsimer",
    title: "CDSIMER",
    description: "Centre for Dayananda Sagar Institute of Medical Education and Research",
    path: "/academics/health-sciences/cdsimer",
    category: "Academics",
  },
  {
    id: "cdsimer-hospital",
    title: "CDSIMER Hospital",
    description: "State-of-the-art hospital facilities",
    path: "/academics/health-sciences/cdsimer/hospital",
    category: "Academics",
  },
  {
    id: "applied-sciences",
    title: "Basic & Applied Sciences",
    description: "Programs in basic and applied sciences",
    path: "/academics/basic-applied-sciences",
    category: "Academics",
  },
  {
    id: "cee",
    title: "Centre of Excellence",
    description: "Research and innovation center",
    path: "/academics/cee",
    category: "Academics",
  },
  {
    id: "journalism",
    title: "Journalism & Mass Communication",
    description: "Programs in journalism and mass communication",
    path: "/academics/journalism-mass-communication",
    category: "Academics",
  },
  {
    id: "bdesign",
    title: "B.Design",
    description: "Bachelor of Design programs",
    path: "/academics/design/bdesign",
    category: "Academics",
  },

  // Admissions Section
  {
    id: "admissions",
    title: "Admissions",
    description: "Admission information and process",
    path: "/admissions",
    category: "Admissions",
  },
  {
    id: "international-admissions",
    title: "International Admissions",
    description: "International student admission process",
    path: "/admissions/international",
    category: "Admissions",
  },
  {
    id: "eligibility",
    title: "Eligibility",
    description: "Eligibility criteria for various programs",
    path: "/eligibility",
    category: "Admissions",
  },

  // Campus Life Section
  {
    id: "campus-life",
    title: "Campus Life",
    description: "Student life and campus activities",
    path: "/campus-life",
    category: "Campus",
  },
  {
    id: "placements",
    title: "Placements",
    description: "Career and placement information",
    path: "/placements",
    category: "Campus",
  },
  {
    id: "examinations",
    title: "Examinations",
    description: "Examination schedules and information",
    path: "/examinations",
    category: "Campus",
  },

  // Other
  {
    id: "research",
    title: "Research",
    description: "Research opportunities and initiatives",
    path: "/research",
    category: "Research",
  },
  {
    id: "faculty-directory",
    title: "Faculty Directory",
    description: "Directory of faculty members",
    path: "/faculty-directory",
    category: "Faculty",
  },
  {
    id: "iqac",
    title: "IQAC",
    description: "Internal Quality Assurance Cell",
    path: "/iqac",
    category: "Administration",
  },
];

export function searchContent(query: string): SearchResult[] {
  if (!query.trim()) {
    return [];
  }

  const lowerQuery = query.toLowerCase().trim();

  return searchIndex.filter((item) => {
    const searchText =
      `${item.title} ${item.description} ${item.category}`.toLowerCase();
    return searchText.includes(lowerQuery);
  });
}
