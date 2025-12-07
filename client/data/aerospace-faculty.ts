import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const aerospaceFaculty: Faculty[] = [
  { name: "Dr. Nagaraja S. R.", title: "Professor & Chairperson - Aerospace Engineering", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Nagaraja.jpg`, qualifications: "Ph.D, M.Tech" },
  { name: "Dr. Rajesh Kumar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Rajesh.jpg`, qualifications: "Ph.D, M.Tech" },
  { name: "Dr. Priya Sharma", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Priya.jpg`, qualifications: "Ph.D, M.Tech" },
  { name: "Dr. Arun Kumar S.", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Arun.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Anita Gupta", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Anita.jpg`, qualifications: "Ph.D, M.Tech" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getAerospaceFacultyBySlug = (slug: string) => aerospaceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
