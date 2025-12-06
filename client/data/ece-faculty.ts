import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const eceFaculty: Faculty[] = [
  { name: "Dr Puttamadappa C", title: "Professor & Registrar", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Puttamadappa.jpg`, qualifications: "M.E, Ph.D" },
  { name: "Dr Arun Balodi", title: "Chairman & Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/ArunBalodi.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. S N Prasad", title: "Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/SNPrasad.jpg`, qualifications: "Ph.D" },
  { name: "Dr S. Arungalai Vendan", title: "Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Arungalai.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr S K Srivastava", title: "Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/SKSrivastava.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Theodore Chandra S", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Theodore.jpg`, qualifications: "M.E, Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getECEFacultyBySlug = (slug: string) => eceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
