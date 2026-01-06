import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export interface PhysicsFacultyMember extends FacultyEntry {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
}

export const physicsFaculty: PhysicsFacultyMember[] = [
  {
    name: "Dr. Yogesh Kalegowda",
    title: "Chairman & Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D., FIAAM",
    interests: ["Quantum Materials", "Condensed Matter Physics", "Nanotechnology"],
  },
  {
    name: "Dr. M V Hanumantha Rao",
    title: "Research Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Bioinformatics", "Molecular Modeling", "Complex Systems"],
  },
  {
    name: "Dr. K Vijaya Kumar",
    title: "Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D., FIAAM, IASA",
    interests: ["Photonics", "Instrumentation", "Energy Systems"],
  },
  {
    name: "Dr. Rajesh Kumar",
    title: "Associate Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Nanomaterials", "Applied Physics", "Materials Science"],
  },
  {
    name: "Dr. Priya Sharma",
    title: "Associate Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Computational Physics", "Quantum Computing", "Simulation Methods"],
  },
  {
    name: "Dr. Arun Kumar Singh",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Sensor Technology", "Microelectronics", "Optoelectronics"],
  },
  {
    name: "Dr. Meera Patel",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Thermodynamics", "Statistical Physics", "Materials Engineering"],
  },
  {
    name: "Dr. Suresh Reddy",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Renewable Energy", "Photovoltaics", "Sustainable Physics"],
  },
  {
    name: "Dr. Neha Gupta",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Acoustics", "Signal Processing", "Wave Phenomena"],
  },
  {
    name: "Dr. Vikram Desai",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Nuclear Physics", "Radiation Science", "Environmental Monitoring"],
  },
  {
    name: "Dr. Anita Verma",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Laser Physics", "Nonlinear Optics", "Photonics Engineering"],
  },
  {
    name: "Dr. Deepak Nair",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Electronics", "Semiconductor Physics", "Device Engineering"],
  },
  {
    name: "Dr. Ravi Kumar Yadav",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Particle Physics", "High Energy Physics", "Experimental Methods"],
  },
  {
    name: "Dr. Sweta Chatterjee",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Fluid Mechanics", "Hydrodynamics", "Applied Physics"],
  },
  {
    name: "Dr. Rajendra Singh",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Spectroscopy", "Analytical Techniques", "Material Characterization"],
  },
  {
    name: "Dr. Pooja Malhotra",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Biophysics", "Medical Imaging", "Biomedical Physics"],
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getPhysicsFacultyBySlug = (slug: string) =>
  physicsFaculty.find((f) => f.slug === slug);

export type Faculty = PhysicsFacultyMember;
