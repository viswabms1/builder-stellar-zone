import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const computerTechnologyFaculty: Faculty[] = [
  { name: "Dr M Shahina Parveen", title: "Professor & Chairperson", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Shahina.jpg`, qualifications: "Ph.D", interests: ["Software Engineering", "Cloud Computing", "Systems Design"] },
  { name: "Dr. Sudha D", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Sudha.jpg`, qualifications: "M.Tech, Ph.D", interests: ["Data Structures", "Algorithms", "Compiler Design"] },
  { name: "Dr. Ramandeep Kaur", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Ramandeep.jpg`, qualifications: "M.Tech., Ph.D", interests: ["Web Technologies", "Database Systems", "Information Security"] },
  { name: "Vinayaka V M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Vinayaka.jpg`, qualifications: "M.Tech (Ph.D)", interests: ["Cloud Computing", "DevOps", "Microservices"] },
  { name: "Dr. Nur Alom Talukdar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Nur.jpg`, qualifications: "M.Tech., Ph.D", interests: ["Machine Learning", "Data Science", "Big Data"] },
  { name: "Dr Neha Bhushan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Neha.jpg`, qualifications: "M.S", interests: ["Artificial Intelligence", "Deep Learning", "Neural Networks"] },
  { name: "Dr. V. K. Hariharan", title: "Professor of Practice CST", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Hariharan.jpg`, qualifications: "M.Tech, Ph.D", interests: ["Software Design Patterns", "Enterprise Architecture", "Testing"] },
  { name: "Dr. Santhosh Kumar J", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Santhosh.jpg`, qualifications: "M.Tech, Ph.D", interests: ["Network Security", "Cryptography", "Cybersecurity"] },
  { name: "Chithambarathanu M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Chithambarathanu.jpg`, qualifications: "M.Tech (CITE), (Ph.D)", interests: ["Web Development", "IoT", "Embedded Systems"] },
  { name: "Yashaswini B V", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Yashaswini.jpg`, qualifications: "M.Tech (Ph.D)", interests: ["Cloud Technologies", "DevOps Practices", "Infrastructure as Code"] },
  { name: "Junaid Mundichipparakkal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Junaid.jpg`, qualifications: "M.S", interests: ["Mobile Development", "Full Stack Development", "UI/UX Design"] },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getComputerTechnologyFacultyBySlug = (slug: string) => computerTechnologyFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
  email?: string;
};
