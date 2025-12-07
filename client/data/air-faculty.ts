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
  { name: "Dr. Rupam Bhaduri", title: "Professor", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Rupam.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Gangadhar T G", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Gangadhar.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Bharath Kumar S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Bharath.jpg`, qualifications: "Ph.D" },
  { name: "Mr. Vikas Vishwakarma", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Vikas.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Lalit Ashutosh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AIR-dept/faculty/Lalit.jpg`, qualifications: "M.Tech" },
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
