import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export interface ChemistryFacultyMember extends FacultyEntry {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
}

export const chemistryFaculty: ChemistryFacultyMember[] = [
  {
    name: "Dr. Venkataramanan N S",
    title: "Professor & Chairperson",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Electrochemistry", "Catalysis", "Materials Science"],
  },
  {
    name: "Dr. A V RAGHU",
    title: "Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Chemistry Education", "Research Mentorship"],
  },
  {
    name: "Dr. Bhavana Rikhari",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Analytical Chemistry", "Environmental Chemistry"],
  },
  {
    name: "Dr. Sai Prasad Nayak",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Organic Chemistry", "Synthesis"],
  },
  {
    name: "Dr. Pradeep Kumar Badiya",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Physical Chemistry", "Computational Methods"],
  },
  {
    name: "Dr. Shreeganesh Subraya Hegde",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Inorganic Chemistry", "Drug Design"],
  },
  {
    name: "Dr. SK Habibullah",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Biochemistry", "Laboratory Science"],
  },
  {
    name: "Dr. V. Srinivasa Murthy",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Chemical Engineering", "Process Chemistry"],
  },
  {
    name: "Dr. Manas Barai",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Materials Chemistry", "Nanomaterials"],
  },
  {
    name: "Dr. Dipen Biswakarma",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Green Chemistry", "Sustainable Synthesis"],
  },
  {
    name: "Dr. Manjodh Kaur",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Polymer Chemistry", "Materials Development"],
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getChemistryFacultyBySlug = (slug: string) =>
  chemistryFaculty.find((f) => f.slug === slug);

export type Faculty = ChemistryFacultyMember;
