import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const mechFaculty: Faculty[] = [
  { name: "Dr. Saravana Bavan D", title: "Chairperson - Mechanical Engineering", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa818b7e6f1f64b9092c86114083a5a70?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Viswanathan R", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F39ee91360c7c43fd8745f634368706e6?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinayak B Hemadri", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbb36e15544ff49fe9c3d87adfbfc94c5?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Rahul Kumar", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5674ef9995f74dea9f5d4b11c533f379?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Shashidhara L C", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4cd147930a674000b182cd6fa9babbee?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Ravitej Y P", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdec84d11575d47a69712c9277f844b75?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Abhijith N", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F72147ed177c54ed5bc8fa48f0a738267?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Dr. Manish Kumar Mishra", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3af544cb4cc74e1e816470f3e6ffae8d?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Abhilash O", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa5928179f1144e8eb910c0862de746bf?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Rajeev Kumar Gupta", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5faeba037e4e415f93ed0e6ff0f15e62?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Naseem Khayum", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F88405d85524649d68ae2cde02cd1d1e0?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Rajesh Ranjan Ravi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F216ee5c05d794102adb13791c5157b63?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. K. Sudha Deepthi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc2ba78ccd20045f89abfa6742bf90a03?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Vinay M S", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa956b459e92246efb033de4ec54edbe7?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Karthik S B", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5f67a80f38a448bc905c7758a2d09d0b?format=webp&width=800", qualifications: "M.E, (Ph.D)" },
  { name: "Dr. P M G B Asdaque", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd98942a8a498450eb898bdcff7c42357?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Joy Mondal", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0c835874b52f447aa48853d31c33cf34?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Velugula Ravi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb581ea17c09647a9bc335364f8f323d8?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Deepu Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Deepu.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Lokendra Singh", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F12d0395467324f33b412292bbe40fe7c?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Samrat Sagar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Samrat.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Ashok Kaushal", title: "Visiting Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1176ba2930624ad9bcb3e710881f87b2?format=webp&width=800", qualifications: "Ph.D, PEO" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getMechFacultyBySlug = (slug: string) => mechFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
