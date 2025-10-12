import { cseFaculty } from "./cse-faculty";

type FacultyDirectoryMemberBase = {
  name: string;
  title: string;
  school: string;
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

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const cseLookup = new Map(cseFaculty.map((f) => [f.name, f]));

const engineeringFaculty: FacultyDirectoryMemberBase[] = [
  {
    name: "Dr. Udaya Kumar Reddy K R",
    title: "Professor & Dean (School of Engineering)",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Academic Leadership", "Artificial Intelligence"],
    interests: ["Engineering Education", "AI Strategy", "Institution Building"],
    email: "dean-soe@dsu.edu.in",
    office: "Engineering Block · Level 5",
  },
  {
    name: "Dr. Rohit Kumar Singh",
    title: "Assistant Professor",
    school: "School of Engineering",
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
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Cloud Computing", "Software Engineering"],
    interests: ["Cloud Platforms", "Software Quality", "DevOps"],
    email: "savitha.h@dsu.edu.in",
  },
  {
    name: "Dr. Meenakshi Malhotra",
    title: "Associate Professor",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Data Science", "Applied AI"],
    interests: ["Machine Learning", "Predictive Analytics", "Data Strategy"],
    email: "meenakshi.m@dsu.edu.in",
  },
  {
    name: "Dr. Praveen Kulkarni",
    title: "Associate Professor",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Embedded Systems", "Edge Computing"],
    interests: ["Embedded Platforms", "Real-time Systems", "IoT"],
  },
  {
    name: "Dr. Sivananda Reddy",
    title: "Associate Professor",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Cyber Security", "Networks"],
    interests: ["Security Architectures", "Digital Forensics", "Governance"],
  },
  {
    name: "Dr. Gokulakrishnan S",
    title: "Assistant Professor",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["AI & ML", "Deep Learning"],
    interests: ["Generative AI", "Model Optimisation", "Intelligent Systems"],
  },
  {
    name: "Prof. Arjun Krishnamurthy",
    title: "Assistant Professor",
    school: "School of Engineering",
    department: "Computer Science & Engineering",
    focusAreas: ["Human-Computer Interaction", "Product Engineering"],
    interests: ["UX Engineering", "Design Systems", "Front-end Architecture"],
  },
];

const lawFaculty: FacultyDirectoryMemberBase[] = [
  {
    name: "Dr. Kiran Gardner",
    title: "Professor & Dean",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Constitutional Law", "Legal Pedagogy"],
    interests: ["Constitutional Governance", "Legal Education", "Law & Society"],
    email: "dean-law@dsu.edu.in",
  },
  {
    name: "Dr. Bharathi S",
    title: "Professor",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Corporate Law", "Intellectual Property"],
    interests: ["Corporate Governance", "IPR", "Contract Law"],
  },
  {
    name: "Prof. Visveswar Mavathur",
    title: "Professor of Practice",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Dispute Resolution", "Professional Practice"],
    interests: ["Arbitration", "Mediation", "Civil Litigation"],
  },
  {
    name: "Prof. Shivani Dutta",
    title: "Assistant Professor",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Human Rights", "Legal Aid"],
    interests: ["Human Rights Law", "Legal Clinics", "Gender Studies"],
  },
  {
    name: "Dr. Sheikh Inam Ul Mansoor",
    title: "Assistant Professor",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Criminal Law", "Forensics"],
    interests: ["Criminal Justice", "Criminology", "Forensic Studies"],
  },
  {
    name: "Prof. Bharath K M",
    title: "Assistant Professor",
    school: "School of Law",
    department: "Legal Studies",
    focusAreas: ["Public Policy", "Political Science"],
    interests: ["Public Policy", "Governance", "Political Theory"],
  },
];

const mapWithCSEAssets = (member: FacultyDirectoryMemberBase): FacultyDirectoryMember => {
  const cseMatch = cseLookup.get(member.name);
  const id = slugify(member.name);

  return {
    ...member,
    id,
    image: member.image ?? cseMatch?.image,
    profileUrl: member.profileUrl ?? cseMatch?.profileUrl,
  };
};

export const facultyDirectory: FacultyDirectoryMember[] = [
  ...engineeringFaculty.map(mapWithCSEAssets),
  ...lawFaculty.map(mapWithCSEAssets),
];

export const facultySchools = Array.from(
  new Set(facultyDirectory.map((member) => member.school)),
).sort();

export const facultyFocusAreas = Array.from(
  new Set(
    facultyDirectory.flatMap((member) => member.focusAreas.map((area) => area.trim())),
  ),
).sort();

export type { FacultyDirectoryMember };
