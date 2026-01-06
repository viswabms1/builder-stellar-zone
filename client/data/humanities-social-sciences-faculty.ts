import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export interface HumanitiesSocialSciencesFacultyMember extends FacultyEntry {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
}

export const humanitiesSocialSciencesFaculty: HumanitiesSocialSciencesFacultyMember[] = [
  {
    name: "Dr. Seema Tharannum",
    title: "Professor, Biological Sciences",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Biological Sciences", "Research Mentorship", "Academic Excellence"],
  },
  {
    name: "Dr. Rochna Roy",
    title: "Assistant Professor, Technical English",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Technical English", "Communication", "Academic Writing"],
  },
  {
    name: "Dr. V. Sreemathy",
    title: "Assistant Professor, Technical English",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Technical Communication", "English Language", "Curriculum Development"],
  },
  {
    name: "Dr. P Wagdevi",
    title: "Assistant Professor & Assistant Registrar, Humanities",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Humanities Education", "Administrative Affairs", "Student Development"],
  },
  {
    name: "Prof. Nagendra H. G.",
    title: "Assistant Professor, Humanities",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Humanities", "Social Sciences", "Interdisciplinary Studies"],
  },
  {
    name: "Dr. Vanishree R",
    title: "Visiting Faculty, Biological Sciences",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Biological Sciences", "Research", "Applied Science"],
  },
  {
    name: "Dr. Mythri R",
    title: "Visiting Faculty, Biological Sciences",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Biological Sciences", "Laboratory Research", "Scientific Innovation"],
  },
  {
    name: "Dr. Bhagyajyothi K S",
    title: "Assistant Director, Physical Education",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Physical Education", "Sports Science", "Student Wellness"],
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getHumanitiesSocialSciencesFacultyBySlug = (slug: string) =>
  humanitiesSocialSciencesFaculty.find((f) => f.slug === slug);

export type Faculty = HumanitiesSocialSciencesFacultyMember;
