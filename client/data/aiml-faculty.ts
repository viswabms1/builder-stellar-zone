import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";
const BASE_URL = "https://www.dsu.edu.in";

export const aimlFaculty: Faculty[] = [
  { name: "Dr. Jayavrinda Vrindavanam V", title: "Professor and Chairperson CSE(AIML)", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8e5cfa68b7d441c48c9f98ef001d7033?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Hanumanth Sastry Sistla", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff762cff9586b4610aaff3a8302e35071?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Bahubali Shiragapur", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3bf860aef9354034a74422a4475708b7?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Joshuva Arockia Dhanraj", title: "Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fad13667bb8444527a28dbc92bcc9dc23?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Prof. Suresh Kandasamy", title: "Professor of Practice", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa913136b76ab4dffb060c56de3d88584?format=webp&width=800", qualifications: "B.Tech, MS, (Ph.D)" },
  { name: "Dr. Vegi Fernando A", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F644f62496eb1451bbf67e6e63cb4d3bd?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinutha N", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9de05e872cdb4717b14cd738588073ca?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Abdul Haq Nalband", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F81296b77c90a41ebb15ade53b7fe444d?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Prateek Verma", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbba0607f3ccc43548c0948db08a3161a?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Jitendra Jaiswal", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2c5070ce77684842a80d00c372fb42e9?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Mude Nagarjuna Naik", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc06c8db3676e4a3895d86b99acfc1afa?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Princy Randhawa", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffcc4a988a99d40eb882f9f02063068df?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Sumant Kumar Mohapatra", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F91c3f9d2426f418c8f9b6de4d5534b52?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. Animesh Srivastava", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb16c48db5db0487bb5462457f7414fb1?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. A. A. Nippun Kumaar", title: "Associate Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2a0e443e3afd4b4ab9183fc1bb4b08ad?format=webp&width=800", qualifications: "Ph.D." },
  { name: "Dr. M. Manimaran", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F11e01e18877542d7be66713dea0f42cd?format=webp&width=800", qualifications: "ME., Ph.D." },
  { name: "Dr. Sumit Kumar Yadav", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F08b4b0526b194f1fb512ca5ffcdb1abe?format=webp&width=800", qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Subhash Mondal", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1b6c9f4039ef42cb8ef8adce818e4dd8?format=webp&width=800", qualifications: "M.Tech,(Ph.D)" },
  { name: "Mr. Pradeep Kumar K", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F28f6b41c291445e2b065e2eb3a0f91b3?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr. R. Sriramkumar", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff4a429d11ed44cd9971d97fe2593f723?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Mrs. Mitha Guru", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fad7af720354940359a0ca052ae1d0a08?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Rakshita R", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fcc05fb004a2a43a589c0f476bd2db0fc?format=webp&width=800", qualifications: "M.Tech, (Ph.D)" },
  { name: "Dr. M. Lakshmanan", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F500470f6d81d4cd1a9bb06c5bbeaaae2?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Dr. S.V.K.R.Rajeswari", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa6b87662fe584b1d8cce417bb93b5c80?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Mr. Sahil Pocker", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb3739bdb85bf4215918a629c772690a7?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Bhuvana Mohini T N", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ffcc62d26fb23415a83f9faca235dca61?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms Nivetha R", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4358a3a221634affa028a29a56ddad5a?format=webp&width=800", qualifications: "M.E" },
  { name: "Prof. Ankita Thakkar", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8da4f0ccf283408e995bef940270184e?format=webp&width=800", qualifications: "M.E.(IT), M.S.(CSE)" },
  { name: "Dr. Sugandha Saxena", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7106ad5621e94f4eb71c199c8316afb3?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Prof. Trupthi Rao", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F85c8127061b54f3981299824a1877c16?format=webp&width=800", qualifications: "M.Tech.,(Ph.D)" },
  { name: "Dr. Govind Kumar Pandey", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9f98040885a04058ad8d429e26317f3b?format=webp&width=800", qualifications: "Ph.D" },
  { name: "Ms. Pragnya Pragatika Mishra", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F948b67e62c914110b5394666bbd822e0?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Verriboina Antony", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa31e788b14db47d79baab046815bb9b8?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Soheli Chakraborty", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F23c64af862834c5090de0b0f653c87ef?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Anubrata Singharoy", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1f937cb38d684f68871aa656e0cb6dce?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Tejal Khade", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2db518b97eed446185a5bc8ea5dfbe44?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Shivnandan Rai", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fafa3d913c0fc46cc8587f0c957785fe7?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Partha Protim Sen", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7baf5832127545bbaad5a28c9103d1af?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Mr. Souvik Ghosh", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8e8c6431cffa428fb9a9f43b4a25e560?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Amrita Kundu", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fd6b8adebb1eb4d0e80f2dcd71bf59bcc?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Upasana Shil", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8301a4b5ce9d4023aecd7e2b1a48205f?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Ms. Hairunesa Beevi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8e39287ffc504127ab9043a9413fc75c?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Prof. Kuna Srinidhi", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2cbf093e3c7c4047b4bf96f6fc1f9e7e?format=webp&width=800", qualifications: "M.Tech.,(Ph.D)" },
  { name: "Ripunjay Jaiswar", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7c288e6b4e01458e8b04bad6f0850c79?format=webp&width=800", qualifications: "M.Tech" },
  { name: "Prof. Kaviyaadharshani D", title: "Assistant Professor", image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F2aff2b408be14632989c9c78cd94c72c?format=webp&width=800", qualifications: "M.E" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : base + f.image,
}));

export const getAIMLFacultyBySlug = (slug: string) => aimlFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
