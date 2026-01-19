import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export const aiRoboticsFaculty: Faculty[] = [
  { 
    name: "Dr. Pramod Kumar Naik", 
    title: "Chairman & Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fea692b5847174fc2a60b18bcd423667a?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Rupam Bhaduri", 
    title: "Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fccf30b6507a44fe7839de88336bbb276?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Gangadhar T G", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbfd5f92b07f24f608327d98cf09de140?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Raguvaran S", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F647b0bb5851f4aa8a935f0c7c2092f51?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Bharath Kumar S", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fba164e0203954c63a69f69f65fc5eabc?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Puneeth N", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F062bbb6a8e6a41fc9469ad66da9e384c?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Bhavya Lingampalli", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F40c984eb3d934071bf692308bedb9646?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Mr. Lalit Ashutosh", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F8efc580b6a3a4016af4efc83a11f56e9?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Mr. Vikas Vishwakarma", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F28ada92065014f27bbfaf8df55aa3391?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getAIRoboticsFacultyBySlug = (slug: string) => aiRoboticsFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  category: "teaching" | "non-teaching";
};
