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
  { name: "Dr S K Shrivastava", title: "Professor and Associate Director", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffc9ed024c45a49babcb2a27a367cac9c?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Gangadharaiah S. L.", title: "Professor of Practice", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Gangadharaiah.jpg`, qualifications: "Ph.D" },
  { name: "Dr Theodore Chandra S", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Theodore.jpg`, qualifications: "M.E, Ph.D" },
  { name: "Dr Pushpa Mala S", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Pushpa.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Gayathri K M", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Gayathri.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr BM Ashwin Desai", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Ashwin.jpg`, qualifications: "Ph.D" },
  { name: "Dr Vinu R", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Vinu.jpg`, qualifications: "Ph.D" },
  { name: "Dr Arun Ananthanarayanan", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/ArunAnan.jpg`, qualifications: "Ph.D" },
  { name: "Dr. K. Sudheendra Rao", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sudheendra.jpg`, qualifications: "Ph.D" },
  { name: "Dr Sneha Sharma", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sneha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Mukthi Chaturvedi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Mukti.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Navya R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Navya.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Divyashree H B", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Divyashree.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr Godfrey D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Godfrey.jpg`, qualifications: "Ph.D" },
  { name: "Dr Supraja Eduru", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Supraja.jpg`, qualifications: "M.Tech" },
  { name: "Dr Shirshendu Roy", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Shirshendu.jpg`, qualifications: "M.E, Ph.D" },
  { name: "Dr Rashmita Sahoo", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Rashmita.jpg`, qualifications: "Ph.D" },
  { name: "Dr DEEPTHI CHAMKUR V", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Deepthi.jpg`, qualifications: "Ph.D" },
  { name: "Dr Owais Ahmad Shah", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Owais.jpg`, qualifications: "Ph.D" },
  { name: "Dr G Santhosh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Santhosh.jpg`, qualifications: "M.Tech" },
  { name: "Dr Dasari Srikanya", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Srikanya.jpg`, qualifications: "Ph.D" },
  { name: "Dr Ramesh Amugothu", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Ramesh.jpg`, qualifications: "Ph.D" },
  { name: "Mrs Kanmani B S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Kanmani.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr Abhinav Karan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Abhinav.jpg`, qualifications: "M.Tech" },
  { name: "Mrs Kokila S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Kokila.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mrs Manasa K R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Manasa.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr Sharanabasavaraj", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sharana.jpg`, qualifications: "M.Tech" },
  { name: "Mr Puneeth S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Punith.jpg`, qualifications: "M.Tech" },
  { name: "Mrs Jaishree Ramadevaru", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Jaishree.jpg`, qualifications: "M.Tech" },
  { name: "Mr Nadeem Pasha", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Nadeem.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Ms Jisy N K", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Jisy.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr V Sudharsan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sudharshan.jpg`, qualifications: "M.E" },
  { name: "Mr Srinivas Ramavath", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Srinivas.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Sahil Hiralal Patil", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sahil.jpg`, qualifications: "M.Tech" },
  { name: "Mrs. Prabavathi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Prabavathi.jpg`, qualifications: "M.Tech" },
  { name: "Mrs. Sirisha Gullapudi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/Sirisha.jpg`, qualifications: "M.Tech" },
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
