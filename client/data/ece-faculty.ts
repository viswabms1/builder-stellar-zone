import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const eceFaculty: Faculty[] = [
  { name: "Dr Puttamadappa C", title: "Professor & Registrar", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F33340ce699b648199a243f0c7870a685?format=webp&width=800", qualifications: "M.E, Ph.D" },
  { name: "Dr Arun Balodi", title: "Chairman & Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe5ae647369374238bb5f725adae55417?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. S N Prasad", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F199808db620048a79ea2c7fbcbfbefb3?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr S. Arungalai Vendan", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F11a3cb1af741415aba4cc34816cff7c8?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr S K Shrivastava", title: "Professor and Associate Director", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0e688c31ce094a8c83375b030367913d?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Gangadharaiah S. L.", title: "Professor of Practice", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F06f374670563402c874fac1d36ee1ffb?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Theodore Chandra S", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F367c0e7798ea4995961a040e6924f7a4?format=webp&width=800", qualifications: "M.E, Ph.D" },
  { name: "Dr Pushpa Mala S", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4431df7cebb04d76be57492bcd1d7c23?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr Gayathri K M", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc046de367bfd459f92577d79d079a7ab?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr BM Ashwin Desai", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc24605f0683e40eea40492e8ee8ba98e?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Vinu R", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4abbfc4e25964f50a298ce9b2b27b77b?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Arun Ananthanarayanan", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F774511e9efb94ec6ae9c83912e7887a1?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. K. Sudheendra Rao", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc5135579ee2846e5b136c59780b289e6?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Sneha Sharma", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F66abccb1f6a24a3689a70606580ffcc5?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr Mukthi Chaturvedi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff0ac3189bdae4d8c9c27be121dc75e5a?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr Navya R", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fdbfdf75bd9e341d7bbb09887f20d44cc?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr Divyashree H B", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F905d4b0172be4c92822821a63685593b?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr Godfrey D", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F88e05d0a0502457493b8093921d1c8b2?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Supraja Eduru", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe5309385eea44135b39e9e2ea3944150?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Dr Shirshendu Roy", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fddad63eea3f34e858d01b2f35f3cc37c?format=webp&width=800", qualifications: "M.E, Ph.D" },
  { name: "Dr Rashmita Sahoo", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2d2a5f4d94e84fdfa7afeed8e71b217d?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr DEEPTHI CHAMKUR V", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F081690fd347f497ca20dc20bbcbe1d97?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Owais Ahmad Shah", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe4324f4353144970b19a6a7ab22dee00?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr G Santhosh", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F021986d01e9544aab6b19019638f81d7?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Dr Dasari Srikanya", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff275ded7c6d54fa78ee3e3d81abde1fc?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr Ramesh Amugothu", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0672aadb40ff499ba04d29e38e3214b1?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Mrs Kanmani B S", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F904e35d61ee446ada738094790520cb2?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr Abhinav Karan", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd1d4605fb3d84c0a8fa7b4a19e6dfd4f?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mrs Kokila S", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1ce179df67394780ab73ca3dd21185ef?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mrs Manasa K R", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff5d1bf7c85eb4e06ab6700c3d5f3aad2?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr Sharanabasavaraj", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4a3ba52f9eaa43e6af966653dd8195b2?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr Puneeth S", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5131847eb3c5499db7be83a53c68bd68?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mrs Jaishree Ramadevaru", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9f1358552ec5418bb87f79a47212a1f9?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr Nadeem Pasha", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5b76cd37a8654dbf846863f232ecef0e?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Ms Jisy N K", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F61feebd2b3b04bb5b1a49385cda89b05?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr V Sudharsan", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1dfc9bab4862453e8562a29d39e21814?format=webp&width=800", qualifications: "M.E" },
  { name: "Mr Srinivas Ramavath", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2cb417aa1fa446b1af99a061872284a6?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Sahil Hiralal Patil", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F44474f1494db48eea63664aaaa99babe?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mrs. Prabavathi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2f9ba1c410b8478ebcb92d4d89576fd4?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mrs. Sirisha Gullapudi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1bc656bd9ff845f891cb7db00fd3e451?format=webp&width=800", qualifications: "M.Tech" },
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
