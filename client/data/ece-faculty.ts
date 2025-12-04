import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export interface ECEFacultyMember extends FacultyEntry {
  email?: string;
  phone?: string;
  office?: string;
  website?: string;
  researchAreas?: string[];
  publications?: number;
  doctoralStudents?: number;
  projects?: number;
  patents?: number;
}

export const eceFaculty: ECEFacultyMember[] = [
  {
    name: "Dr Puttamadappa C",
    title: "Professor & Registrar",
    image: "",
    qualifications: "M.E, Ph.D",
    profileUrl: "/faculty/dr-puttamadappa-c",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
  {
    name: "Dr Arun Balodi",
    title: "Chairman & Professor",
    image: "",
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/dr-arun-balodi",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
  {
    name: "Dr. S N Prasad",
    title: "Professor",
    image: "",
    qualifications: "Ph.D",
    profileUrl: "/faculty/dr-s-n-prasad",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
  {
    name: "Dr S. Arungalai Vendan",
    title: "Professor",
    image: "",
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/dr-s-arungalai-vendan",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
  {
    name: "Dr S K Srivastava",
    title: "Professor and Associate Director Instrumentation, Research & Skilling",
    image: "",
    qualifications: "M.Tech, Ph.D",
    profileUrl: "/faculty/dr-s-k-srivastava",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
  {
    name: "Dr Theodore Chandra S",
    title: "Associate Professor",
    image: "",
    qualifications: "M.E, Ph.D",
    profileUrl: "/faculty/dr-theodore-chandra-s",
    email: "",
    phone: "",
    office: "",
    researchAreas: [],
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : BASE_URL + f.profileUrl) : undefined,
}));

export const getFacultyBySlug = (slug: string) => eceFaculty.find((f) => f.slug === slug);

export type Faculty = ECEFacultyMember;
