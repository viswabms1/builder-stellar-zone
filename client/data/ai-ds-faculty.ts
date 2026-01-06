import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const aidsFaculty: Faculty[] = [
  { name: "Dr. Poongodi T", title: "Professor & Chairperson", image: `${BASE_URL}/images/Engineering/AIIDS-dept/faculty/Poongodi.jpg`, qualifications: "Ph.D", profileUrl: "/dr-poongodi" },
  { name: "Dr. Ramesh Wadawadagi", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/AIIDS-dept/faculty/Ramesh.jpg`, qualifications: "Ph.D", profileUrl: "/ramesh-w" },
  { name: "Prof. Nadavadi Harshith Gowd", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AIIDS-dept/faculty/Harshith.jpg`, qualifications: "M.Tech", profileUrl: "/harshith-gowd" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : BASE_URL + f.profileUrl) : undefined,
}));

export const getAIDSFacultyBySlug = (slug: string) => aidsFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  profileUrl?: string;
};
