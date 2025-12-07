import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const cybersecurityFaculty: Faculty[] = [
  { name: "Dr. Dilip Kumar Jang Bahadur Saini", title: "Associate Professor & Chairperson", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/DilipKumar.jpg`, qualifications: "Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getCybersecurityFacultyBySlug = (slug: string) => cybersecurityFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
