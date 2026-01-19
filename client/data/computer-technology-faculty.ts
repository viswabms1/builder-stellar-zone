import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export const computerTechnologyFaculty: Faculty[] = [
  { 
    name: "Dr M Shahina Parveen", 
    title: "Professor & Chairperson", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb547c6f796724518afb2e793e672e093?format=webp&width=800", 
    qualifications: "Ph.D", 
    interests: ["Software Engineering", "Cloud Computing", "Systems Design"],
    category: "teaching"
  },
  { 
    name: "Dr. Sudha D", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb0cb86b255434f54856a82bb807c7d01?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D", 
    interests: ["Data Structures", "Algorithms", "Compiler Design"],
    category: "teaching"
  },
  { 
    name: "Dr. Ramandeep Kaur", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7c8707a852a1485ca034292583616990?format=webp&width=800", 
    qualifications: "M.Tech., Ph.D", 
    interests: ["Web Technologies", "Database Systems", "Information Security"],
    category: "teaching"
  },
  { 
    name: "Vinayaka V M", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fb09b1dc3ac27490291bd4b2011f9dc46?format=webp&width=800", 
    qualifications: "M.Tech (Ph.D)", 
    interests: ["Cloud Computing", "DevOps", "Microservices"],
    category: "teaching"
  },
  { 
    name: "Dr. Nivetha B", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F01f705f7c069446d9c0f647c56a51d71?format=webp&width=800", 
    qualifications: "M.Tech., Ph.D", 
    interests: ["Machine Learning", "Data Science", "Big Data"],
    category: "teaching"
  },
  { 
    name: "Dr Neha Bhushan", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fba9e6bf8199b4b2e83fb449aed4f181f?format=webp&width=800", 
    qualifications: "M.S", 
    interests: ["Artificial Intelligence", "Deep Learning", "Neural Networks"],
    category: "teaching"
  },
  { 
    name: "Dr. V. K. Hariharan", 
    title: "Professor of Practice CST", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc2f1b24c1e514e39857c8102a749c290?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D", 
    interests: ["Software Design Patterns", "Enterprise Architecture", "Testing"],
    category: "teaching"
  },
  { 
    name: "Dr. Santhosh Kumar J", 
    title: "Associate Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3a436ab2988c465da7ead81e80b5e8e0?format=webp&width=800", 
    qualifications: "M.Tech, Ph.D", 
    interests: ["Network Security", "Cryptography", "Cybersecurity"],
    category: "teaching"
  },
  { 
    name: "Tekumudi Divya", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F289bd85d9df1467ca2e0ca71db047e90?format=webp&width=800", 
    qualifications: "M.Tech (CITE), (Ph.D)", 
    interests: ["Web Development", "IoT", "Embedded Systems"],
    category: "teaching"
  },
  { 
    name: "Yashaswini B V", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F56089d5738314815bdc861c98f8acdb9?format=webp&width=800", 
    qualifications: "M.Tech (Ph.D)", 
    interests: ["Cloud Technologies", "DevOps Practices", "Infrastructure as Code"],
    category: "teaching"
  },
  { 
    name: "Junaid Mundichipparakkal", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F71b818188024415cbc247d0bbedb5204?format=webp&width=800", 
    qualifications: "M.S", 
    interests: ["Mobile Development", "Full Stack Development", "UI/UX Design"],
    category: "teaching"
  },
  { 
    name: "Hemachandra Reddy K", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F5a258e2cc50c4a15b7df05e92c43587c?format=webp&width=800", 
    qualifications: "M.Tech", 
    interests: ["Software Engineering", "Cloud Computing", "Distributed Systems"],
    category: "teaching"
  },
  { 
    name: "Abhishek K", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7dab269ddb944439bbb6f7a407b2c90d?format=webp&width=800", 
    qualifications: "M.Tech", 
    interests: ["Web Technologies", "Database Systems", "Application Development"],
    category: "teaching"
  },
  { 
    name: "Dr. Praveen K", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F4400b9d637cd42e6842cadf6d846f211?format=webp&width=800", 
    qualifications: "Ph.D", 
    interests: ["Machine Learning", "Artificial Intelligence", "Computer Vision"],
    category: "teaching"
  },
  { 
    name: "Santosh Reddy P", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F3058b9793a0448fcad8c138fc2bdb638?format=webp&width=800", 
    qualifications: "M.Tech", 
    interests: ["Cybersecurity", "Network Security", "Information Systems"],
    category: "teaching"
  },
  { 
    name: "Velumani V", 
    title: "Assistant Professor", 
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F207d0c1ed84843029b603f4063b45e0c?format=webp&width=800", 
    qualifications: "M.Tech", 
    interests: ["Software Development", "Database Design", "System Architecture"],
    category: "teaching"
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getComputerTechnologyFacultyBySlug = (slug: string) => computerTechnologyFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
  email?: string;
  category?: "teaching" | "non-teaching";
};
