import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const eceFaculty: Faculty[] = [
  { name: "Dr Puttamadappa C", title: "Professor & Registrar", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbe2665c15b5f4a108d108c5cf6bea79f?format=webp&width=800", qualifications: "M.E, Ph.D" },
  { name: "Dr Arun Balodi", title: "Chairman & Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbbcc17111d834d40abcb56930cdbce58?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. S N Prasad", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1cc6c7408b034324bb236796cff4787f?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr S. Arungalai Vendan", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F812080a3d9644cd3b78b90311f12fcd7?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr S K Srivastava", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffc9ed024c45a49babcb2a27a367cac9c?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
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
