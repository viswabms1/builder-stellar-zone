import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export const dataScienceFaculty: Faculty[] = [
  { 
    name: "Dr. Shaila S. G", 
    title: "Professor and Chairperson", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0e958e5bcc6447aebd40bae0c783af4a?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Santhosh Kumar G", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8a95ffb59ce5496890e14078d9cb2000?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Suresh Arumugam", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fe46af5192eb840cbb7389745191b2957?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. U. Pavan Kumar", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F32ef7448d3bd41e9bf86ee82054b6cf3?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Shivamma D", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5d53b2405a494574965b36a7d6f09c3a?format=webp&width=800", 
    qualifications: "M.Tech (Ph.D)",
    category: "teaching"
  },
  { 
    name: "Monish L", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F36fde925b0c04896935626f6adfcce91?format=webp&width=800", 
    qualifications: "M.Tech (Ph.D)",
    category: "teaching"
  },
  { 
    name: "Manjula M", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbbffca22087846bfbbf28c4718be4f57?format=webp&width=800", 
    qualifications: "M.Tech (Ph.D)",
    category: "teaching"
  },
  { 
    name: "Sindhu A", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4c3e83f72e874715af866dedaa806ee6?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Godhandaraman T", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F07d367182b544090933fb8ee3f515003?format=webp&width=800", 
    qualifications: "M.E",
    category: "teaching"
  },
  { 
    name: "Prof. Chandrakala L", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4050a19a52d74f4698de6779ef9373e9?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Prof. Prapti Bhattacharjee", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb739ab7490314bc2989c569eafd83e12?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Mithun Kumar", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F23062726f3d54eb5960e991dea37264f?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Megha Chandel", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F05aa65a8a80c45df94219827c315916e?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Kishor Malakar", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F6c306c1b1e0845df883c3b3730d0d277?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Shashank Shekhar", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc92aedab36d743b9bff9df468250c40c?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Ms. Souramita Bhowmik", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fa8c07493382c4dc5aea39afb6a13ed34?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Mriganka Das", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbd1dd9ba91a647e9ba79347bdba995d4?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Ms. Snigdha Sikha Kashyap", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F395a1a9b4c114312bba3b11d6f1c3784?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Dr. Jobin Thomas", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F317b66a0e7b2454bade4b7ea8aed2eee?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D",
    category: "teaching"
  },
  { 
    name: "Mr. Shivabashayya Puranikmath", 
    title: "Office Assistant", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc12a9e1120d4416a97967d92d9a2ebe9?format=webp&width=800", 
    qualifications: "B.A",
    category: "non-teaching"
  },
  { 
    name: "Ms. Divya R", 
    title: "Teaching Assistant and Lab Instructor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fce032072483d4536b522c384b445ae13?format=webp&width=800", 
    qualifications: "M.Sc",
    category: "non-teaching"
  },
  { 
    name: "Mr. Kiran Kumar H L", 
    title: "Lab Instructor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F856e323ba08b4ec3a2ca4740d874c396?format=webp&width=800", 
    qualifications: "B.E",
    category: "non-teaching"
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getDataScienceFacultyBySlug = (slug: string) => dataScienceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  category: "teaching" | "non-teaching";
};
