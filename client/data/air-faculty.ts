import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const airFaculty: Faculty[] = [
  { name: "Dr. Pramod Kumar Naik", title: "Chairman & Associate Professor - AI and Robotics", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Pramod.jpg`, qualifications: "Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getAIRoboticsFacultyBySlug = (slug: string) => airFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
