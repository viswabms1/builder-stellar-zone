import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export interface ECEFacultyMember extends FacultyEntry {
  email?: string;
  phone?: string;
  office?: string;
  website?: string;
  researchAreas?: string[];
  publications?: number;
  doctoralStudents?: number;
  projects?: number;
  patents?: number;
}

export const eceFaculty: ECEFacultyMember[] = [
  {
    name: "Dr. Rajesh Kumar",
    title: "Professor & Department Head ECE",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/rajesh-kumar.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/rajesh-kumar",
    email: "rajesh.kumar@dsu.edu.in",
    phone: "+91-080-49092945",
    office: "EC Block, Room 201",
    researchAreas: ["VLSI Design", "Embedded Systems", "Signal Processing", "Power Electronics"],
    publications: 24,
    doctoralStudents: 9,
    projects: 3,
    patents: 2,
  },
  {
    name: "Dr. Anita Sharma",
    title: "Associate Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/anita-sharma.jpg`,
    qualifications: "M.E., Ph.D",
    profileUrl: "/faculty/anita-sharma",
    email: "anita.sharma@dsu.edu.in",
    phone: "+91-080-49092946",
    office: "EC Block, Room 205",
    researchAreas: ["5G Communication", "IoT Systems", "Wireless Networks"],
    publications: 18,
    doctoralStudents: 5,
    projects: 2,
    patents: 1,
  },
  {
    name: "Dr. Vikram Singh",
    title: "Associate Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/vikram-singh.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/vikram-singh",
    email: "vikram.singh@dsu.edu.in",
    phone: "+91-080-49092947",
    office: "EC Block, Room 206",
    researchAreas: ["Microwave Engineering", "Antenna Design", "RF Systems"],
    publications: 21,
    doctoralStudents: 6,
    projects: 3,
  },
  {
    name: "Dr. Priya Patel",
    title: "Associate Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/priya-patel.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/priya-patel",
    email: "priya.patel@dsu.edu.in",
    phone: "+91-080-49092948",
    office: "EC Block, Room 207",
    researchAreas: ["Digital Signal Processing", "Image Processing", "Pattern Recognition"],
    publications: 19,
    doctoralStudents: 7,
    projects: 2,
  },
  {
    name: "Prof. Harish Nair",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/harish-nair.jpg`,
    qualifications: "M.Tech",
    profileUrl: "/faculty/harish-nair",
    email: "harish.nair@dsu.edu.in",
    phone: "+91-080-49092949",
    office: "EC Block, Room 208",
    researchAreas: ["Embedded Systems", "Microcontrollers", "Real-time Operating Systems"],
    publications: 12,
    doctoralStudents: 2,
  },
  {
    name: "Dr. Sneha Gupta",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/sneha-gupta.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/sneha-gupta",
    email: "sneha.gupta@dsu.edu.in",
    phone: "+91-080-49092950",
    office: "EC Block, Room 209",
    researchAreas: ["VLSI Testing", "Design for Testability", "Fault Tolerance"],
    publications: 15,
    doctoralStudents: 4,
  },
  {
    name: "Prof. Arjun Desai",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/arjun-desai.jpg`,
    qualifications: "M.Tech",
    profileUrl: "/faculty/arjun-desai",
    email: "arjun.desai@dsu.edu.in",
    phone: "+91-080-49092951",
    office: "EC Block, Room 210",
    researchAreas: ["Power Electronics", "Renewable Energy", "Power Conversion"],
    publications: 11,
  },
  {
    name: "Dr. Meera Iyer",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/meera-iyer.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/meera-iyer",
    email: "meera.iyer@dsu.edu.in",
    phone: "+91-080-49092952",
    office: "EC Block, Room 211",
    researchAreas: ["Communication Systems", "Optical Communications", "Modulation Techniques"],
    publications: 16,
    doctoralStudents: 3,
  },
  {
    name: "Prof. Rohit Verma",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/rohit-verma.jpg`,
    qualifications: "M.Tech",
    profileUrl: "/faculty/rohit-verma",
    email: "rohit.verma@dsu.edu.in",
    phone: "+91-080-49092953",
    office: "EC Block, Room 212",
    researchAreas: ["Control Systems", "Automation", "Robotics"],
    publications: 10,
  },
  {
    name: "Dr. Deepak Chakraborty",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/deepak-chakraborty.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/deepak-chakraborty",
    email: "deepak.chakraborty@dsu.edu.in",
    phone: "+91-080-49092954",
    office: "EC Block, Room 213",
    researchAreas: ["Analog Circuit Design", "Mixed-Signal ICs", "Sensor Interfaces"],
    publications: 14,
    doctoralStudents: 2,
  },
  {
    name: "Prof. Neha Singh",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/neha-singh.jpg`,
    qualifications: "M.Tech",
    profileUrl: "/faculty/neha-singh",
    email: "neha.singh@dsu.edu.in",
    phone: "+91-080-49092955",
    office: "EC Block, Room 214",
    researchAreas: ["Digital Circuit Design", "FPGA Design", "Hardware Verification"],
    publications: 9,
  },
  {
    name: "Dr. Suresh Kumar",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/suresh-kumar.jpg`,
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/suresh-kumar",
    email: "suresh.kumar@dsu.edu.in",
    phone: "+91-080-49092956",
    office: "EC Block, Room 215",
    researchAreas: ["Signal Integrity", "EMI/EMC", "High-Speed Digital Design"],
    publications: 13,
    doctoralStudents: 1,
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : BASE_URL + f.profileUrl) : undefined,
}));

export const getFacultyBySlug = (slug: string) => eceFaculty.find((f) => f.slug === slug);

export type Faculty = ECEFacultyMember;
