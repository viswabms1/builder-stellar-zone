import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const dataScienceFaculty: Faculty[] = [
  { name: "Dr. Shaila S. G", title: "Professor and Chairperson - Data Science", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Shaila.jpg`, qualifications: "Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getDataScienceFacultyBySlug = (slug: string) => dataScienceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
