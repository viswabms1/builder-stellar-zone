import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const computerTechnologyFaculty: Faculty[] = [
  { name: "Dr M Shahina Parveen", title: "Professor & Chairperson", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Shahina.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Sudha D", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Sudha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Ramandeep Kaur", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Ramandeep.jpg`, qualifications: "M.Tech., Ph.D" },
  { name: "Vinayaka V M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Vinayaka.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Dr. Nur Alom Talukdar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Nur.jpg`, qualifications: "M.Tech., Ph.D" },
  { name: "Dr Neha Bhushan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Neha.jpg`, qualifications: "M.S" },
  { name: "Dr. V. K. Hariharan", title: "Professor of Practice CST", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Hariharan.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Santhosh Kumar J", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Santhosh.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Chithambarathanu M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Chithambarathanu.jpg`, qualifications: "M.Tech (CITE), (Ph.D)" },
  { name: "Yashaswini B V", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Yashaswini.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Junaid Mundichipparakkal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CST-dept/faculty/Junaid.jpg`, qualifications: "M.S" },
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
};
