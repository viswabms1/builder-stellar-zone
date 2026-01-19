import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const cybersecurityFaculty: Faculty[] = [
  { name: "Dr. Dilip Kumar Jang Bahadur Saini", title: "Associate Professor & Chairperson", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F81f8d6d6450a4f10a3b5e5d19757cd2d?format=webp&width=800", qualifications: "M.E, Ph.D" },
  { name: "Dr. Durbadal Chattaraj", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4874fd714b91457eb5faa661f3912890?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Prajwalasimha S N", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fac9f84ece8de42f58f50b16d8f815d6f?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Mubeen Ahmed Khan", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F50abfd8016084ecfa4d21ed0cd2669bf?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Naveen Kulkarni", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc528f51f66504839861600ab947ca0e1?format=webp&width=800", qualifications: "B.E.(ISE), M.Tech(CSE)" },
  { name: "Sharanabasappa Tadkal", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F928686c53fc54504946c1cbf1cd83080?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Deepthika Karuppusamy", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F403d460656db4e71bb95cef88d7e1e30?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Biswajit Debnath", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F78e28741391e419c8f01bdb411e99ab3?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Joshe Raj", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F20f2968787524fb285fcd2368f41c794?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Dr. D.Sumathi", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6a0b94ec6d774d0680d30ba86e37d9ed?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. G. Hemanth Kumar", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F89af291913574b7a9b51236070dadf50?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Devipriya V S", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdb967a1aed534c5a9b8b0f1d3180c66b?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Indushree M", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff82ab415f913412bbd8095f4dba9dbb2?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Vinitha V", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F73d9065c02d548f9a4a785ff485ec243?format=webp&width=800", qualifications: "M.Tech (Ph.D)" },
  { name: "Ranjima P", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F07ba210804734e768dad4ce1940db71d?format=webp&width=800", qualifications: "M.E" },
  { name: "Ms. Sayeli Dey", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2fee1bd460fc47a6ae03edd98b3d6900?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Archita Bhattacharyya", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F94f7bbc1e39f4d96a8649144210f103f?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Prof. G. N. V. Prasad", title: "Professor of Practice", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd03fc2ecdb0540f88a4ea4a209b39216?format=webp&width=800", qualifications: "M.E" },
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
