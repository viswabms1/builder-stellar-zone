import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export const aerospaceFaculty: Faculty[] = [
  { 
    name: "Dr. Nagaraja S. R.", 
    title: "Professor & Chairman", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fabaab2c9e2c04bb2bf7c30a8c9f43473?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. B V N Ramakumar", 
    title: "Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F798514e7ed1b4ed7b671c3f786dfb7d5?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Prashantha Kumar", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Ff9ecd048a6684bacb9ae7935b93e0eb1?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Avinash Kumar Saurav", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4ece01286d7d4912908e4f1bb85d7c70?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Prof. Sripad Kulkarni", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb599dfbe385e4d9281a47b0be6c99f01?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Ajey Singh", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F83af43ef749343649c8f7bff4d1b1fe4?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. G K Suryanarayana", 
    title: "Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fab5ce265c92d4e5db4e932c9b73e4984?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Mathew Chacko", 
    title: "Professor of Practice", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F541c3ea3e1d047a3a2a7e90a6ff6d0ef?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
  { 
    name: "Dr. Kartik S. Tandel", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fbaa4908ca9444125a0f0412d96ab2d24?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Dr. Srinath Ramakrishnan", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F1931f12909e540a9945b44e59b325fee?format=webp&width=800", 
    qualifications: "M.S., Ph.D",
    category: "teaching"
  },
  { 
    name: "Ms. Swagatika", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4997bc48b1c24d238a0a2938284fd5c1?format=webp&width=800", 
    qualifications: "M.Tech",
    category: "teaching"
  },
  { 
    name: "Dr. Vivek Anand", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F756c0cb42f17406d87cdde652171d82a?format=webp&width=800", 
    qualifications: "Ph.D",
    category: "teaching"
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getAerospaceFacultyBySlug = (slug: string) => aerospaceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  category: "teaching" | "non-teaching";
};
