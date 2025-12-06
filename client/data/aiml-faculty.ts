import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";
const BASE_URL = "https://www.dsu.edu.in";

export const aimlFaculty: Faculty[] = [
  { name: "Dr. Jayavrinda Vrindavanam V", title: "Professor & Chairperson, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/jayavrinda.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinutha N", title: "Associate Professor, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/vinutha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Prof. Pradeep Kumar K", title: "Assistant Professor & BOS Coordinator, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/pradeep-kumar.jpg`, qualifications: "M.Tech, Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : base + f.image,
}));

export const getAIMLFacultyBySlug = (slug: string) => aimlFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
