import { cseFaculty } from "./cse-faculty";

type FacultySchoolMeta = {
  id: string;
  name: string;
  description: string;
  href?: string;
  highlight?: string;
};

export const facultySchoolsMeta: FacultySchoolMeta[] = [
  {
    id: "engineering",
    name: "School of Engineering",
    description:
      "Engineering disciplines spanning computing, electronics, mechanical systems, aerospace and interdisciplinary innovation labs.",
    href: "/academics/engineering",
    highlight: "Innovation-driven engineering education",
  },
  {
    id: "computer-applications",
    name: "School of Computer Applications",
    description:
      "Undergraduate and postgraduate programmes focused on software development, data, cloud and emerging application stacks.",
    href: "/academics/computer-applications",
    highlight: "Programming, data and cloud specialisations",
  },
  {
    id: "management",
    name: "Commerce & Management Studies",
    description:
      "Business and management programmes integrating analytics, entrepreneurship, finance, marketing and leadership practice.",
    href: "/academics/management-studies",
    highlight: "Industry-aligned business education",
  },
  {
    id: "law",
    name: "School of Law",
    description:
      "Integrated legal education with moot courts, internships, policy labs and interdisciplinary foundations in humanities and social sciences.",
    href: "/academics/law",
    highlight: "Practice-ready legal education",
  },
  {
    id: "applied-sciences",
    name: "Basic & Applied Sciences",
    description:
      "Foundational sciences, interdisciplinary research and laboratory immersion across physics, chemistry, mathematics and biotechnology.",
    href: "/academics/basic-applied-sciences",
    highlight: "Research-driven sciences and analytics",
  },
  {
    id: "health-sciences",
    name: "School of Health Sciences",
    description:
      "Nursing, pharmacy, physiotherapy and allied health programmes with simulation labs, clinical rotations and patient-centric training.",
    href: "/academics/health-sciences",
    highlight: "Clinical immersion and healthcare innovation",
  },
  {
    id: "medical",
    name: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research",
    description:
      "Medical education and translational research bridging clinical excellence, community engagement and innovative healthcare delivery.",
    href: "/academics/medical-education-research",
    highlight: "Translational medical research & care",
  },
  {
    id: "design",
    name: "Design & Digital Trans Media",
    description:
      "Design, storytelling and digital media programmes spanning UX/UI, animation, transmedia and creative technology labs.",
    href: "/academics/design/bdesign",
    highlight: "Human-centred design and storytelling",
  },
  {
    id: "online",
    name: "Online Degree Programs",
    description:
      "Flexible online programmes combining live sessions, industry projects and career mentoring across business and technology domains.",
    href: "https://www.dsu.edu.in/online-degree-programs",
    highlight: "Flexible online learning ecosystems",
  },
];

export type FacultySchoolId = (typeof facultySchoolsMeta)[number]["id"];

const schoolLookup = new Map(
  facultySchoolsMeta.map((school) => [school.id, school]),
);

export const getFacultySchoolMeta = (id: FacultySchoolId) =>
  schoolLookup.get(id);

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

type FacultyDirectoryMemberBase = {
  name: string;
  title: string;
  schoolId: FacultySchoolId;
  department: string;
  focusAreas: string[];
  interests: string[];
  email?: string;
  phone?: string;
  office?: string;
  image?: string;
  profileUrl?: string;
};

type FacultyDirectoryMember = FacultyDirectoryMemberBase & {
  id: string;
};

const engineeringFaculty: FacultyDirectoryMemberBase[] = [
  {
    name: "Dr. Udaya Kumar Reddy K R",
    title: "Professor & Dean (School of Engineering)",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: [
      "Academic Leadership",
      "Artificial Intelligence",
      "Systems Engineering",
    ],
    interests: ["Engineering Education", "AI Strategy", "Institution Building"],
    email: "dean-soe@dsu.edu.in",
    office: "Engineering Block · Level 5",
  },
  {
    name: "Dr. Rohit Kumar Singh",
    title: "Assistant Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Robotics & Autonomous Systems", "Embedded Intelligence"],
    interests: ["Robot Perception", "Planning", "Field Robotics"],
    email: "rohit.ks@dsu.edu.in",
    office: "Robotics Lab · Tech Park Level 2",
    profileUrl:
      "/academics/engineering/computer-science/faculty/rohit-kumar-singh",
  },
  {
    name: "Dr. Savitha Hiremath",
    title: "Associate Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Cloud Computing", "Software Engineering"],
    interests: ["Cloud Platforms", "Software Quality", "DevOps"],
    email: "savitha.h@dsu.edu.in",
  },
  {
    name: "Dr. Meenakshi Malhotra",
    title: "Associate Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Data Science", "Applied AI"],
    interests: ["Machine Learning", "Predictive Analytics", "Data Strategy"],
    email: "meenakshi.m@dsu.edu.in",
  },
  {
    name: "Dr. Praveen Kulkarni",
    title: "Associate Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Embedded Systems", "Edge Computing"],
    interests: ["Embedded Platforms", "Real-time Systems", "IoT"],
  },
  {
    name: "Dr. Sivananda Reddy",
    title: "Associate Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Cyber Security", "Networks"],
    interests: ["Security Architectures", "Digital Forensics", "Governance"],
  },
  {
    name: "Dr. Gokulakrishnan S",
    title: "Assistant Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["AI & ML", "Deep Learning"],
    interests: ["Generative AI", "Model Optimisation", "Intelligent Systems"],
  },
  {
    name: "Prof. Arjun Krishnamurthy",
    title: "Assistant Professor",
    schoolId: "engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Human-Computer Interaction", "Product Engineering"],
    interests: ["UX Engineering", "Design Systems", "Front-end Architecture"],
  },
];

const lawFaculty: FacultyDirectoryMemberBase[] = [
  {
    name: "Dr. Kiran Gardner",
    title: "Professor & Dean",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Constitutional Law", "Legal Pedagogy"],
    interests: ["Governance", "Higher Education", "Law & Society"],
    email: "dean-law@dsu.edu.in",
  },
  {
    name: "Dr. Bharathi S",
    title: "Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Corporate Law", "Intellectual Property"],
    interests: ["Corporate Governance", "IPR", "Contracts"],
  },
  {
    name: "Prof. Visveswar Mavathur",
    title: "Professor of Practice",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Dispute Resolution", "Professional Practice"],
    interests: ["Arbitration", "Mediation", "Civil Litigation"],
  },
  {
    name: "Dr. Prabhakar S",
    title: "Associate Professor",
    schoolId: "law",
    department: "Management & Law",
    focusAreas: ["Management", "Business Law"],
    interests: [
      "Strategic Management",
      "Corporate Regulation",
      "Entrepreneurship",
    ],
  },
  {
    name: "Prof. Shivani Dutta",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Human Rights", "Legal Aid"],
    interests: ["Human Rights Law", "Gender Studies", "Legal Clinics"],
  },
  {
    name: "Dr. Gajendra N",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Economics for Law",
    focusAreas: ["Economics", "Public Policy"],
    interests: [
      "Development Economics",
      "Policy Analysis",
      "Quantitative Research",
    ],
  },
  {
    name: "Prof. Cauvery M T",
    title: "Adjunct Faculty",
    schoolId: "law",
    department: "Humanities",
    focusAreas: ["English Literature", "Communication"],
    interests: ["Literary Studies", "Academic Writing", "Communication Skills"],
  },
  {
    name: "Prof. Sanjay Utagi",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Moot Courts", "Advocacy"],
    interests: ["Trial Practice", "Legal Skills", "Clinical Education"],
  },
  {
    name: "Prof. Navaruna Borah",
    title: "Assistant Professor",
    schoolId: "law",
    department: "History & Law",
    focusAreas: ["Legal History", "Cultural Studies"],
    interests: ["Socio-legal History", "Heritage Studies", "Comparative Law"],
  },
  {
    name: "Dr. Prasanta Moharaj",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Sociology",
    focusAreas: ["Sociology", "Public Policy"],
    interests: ["Social Justice", "Community Studies", "Policy"],
  },
  {
    name: "Prof. Bharath K M",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Political Science",
    focusAreas: ["Political Science", "Public Policy"],
    interests: ["Political Theory", "Comparative Politics", "Public Affairs"],
  },
  {
    name: "Dr. Sheikh Inam Ul Mansoor",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Criminal Law", "Forensics"],
    interests: ["Criminal Justice", "Criminology", "Forensic Studies"],
  },
  {
    name: "Prof. Shantanu Pachahara",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Business Law", "Corporate Governance"],
    interests: ["Company Law", "Corporate Compliance", "Start-up Policy"],
  },
  {
    name: "Prof. Sakshi Mehta",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Media Law", "Intellectual Property"],
    interests: ["Media Regulation", "Technology Law", "Creative Industries"],
  },
  {
    name: "Prof. Arifa Sultana Choudhury",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Family Law", "Gender Studies"],
    interests: ["Family Justice", "Policy", "Women & Law"],
  },
  {
    name: "Prof. Nithin Rajeev",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["Technology Law", "Cyber Law"],
    interests: ["Cyber Security", "Data Protection", "Digital Rights"],
  },
  {
    name: "Prof. Stency Mariya Mark",
    title: "Assistant Professor",
    schoolId: "law",
    department: "Legal Studies",
    focusAreas: ["International Law", "Public Policy"],
    interests: ["International Relations", "Global Governance", "Policy"],
  },
];

const cseLookup = new Map(cseFaculty.map((f) => [f.name, f]));

const applyCSEAssets = (
  member: FacultyDirectoryMemberBase,
): FacultyDirectoryMember => {
  const cseMatch = cseLookup.get(member.name);
  const id = slugify(member.name);

  return {
    ...member,
    id,
    image: member.image ?? cseMatch?.image,
    profileUrl: member.profileUrl ?? cseMatch?.profileUrl,
  };
};

const directoryEntries: FacultyDirectoryMember[] = [
  ...engineeringFaculty.map(applyCSEAssets),
  ...lawFaculty.map((member) => ({
    ...member,
    id: slugify(member.name),
  })),
];

export const facultyDirectory = directoryEntries;

export const facultyFocusAreas = Array.from(
  new Set(directoryEntries.flatMap((member) => member.focusAreas)),
).sort((a, b) => a.localeCompare(b));

export type { FacultyDirectoryMember };
