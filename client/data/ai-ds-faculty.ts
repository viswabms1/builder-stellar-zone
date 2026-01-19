import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const aidsFaculty: Faculty[] = [
  { name: "Dr. Poongodi T", title: "Professor & Chairperson", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F04e454a069534bb1b04043c3fb2d6858?format=webp&width=800", qualifications: "Ph.D", profileUrl: "/dr-poongodi" },
  { name: "Dr. Ramesh Wadawadagi", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fad4643fd4a0247c6bf03b58ad7a3878c?format=webp&width=800", qualifications: "Ph.D", profileUrl: "/ramesh-w" },
  { name: "Prof. Nadavadi Harshith Gowd", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa213dab19f8d450a9b1b78459c984c4d?format=webp&width=800", qualifications: "M.Tech", profileUrl: "/harshith-gowd" },
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
