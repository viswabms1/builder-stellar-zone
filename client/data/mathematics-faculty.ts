import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

export interface MathematicsFacultyMember extends FacultyEntry {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
  interests?: string[];
}

export const mathematicsFaculty: MathematicsFacultyMember[] = [
  {
    name: "Dr. Mahalakshmi P",
    title: "Professor & Chairperson",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Probability Theory", "Random Matrices", "Applied Mathematics"],
  },
  {
    name: "Dr. Rakesh Kumar Singh",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D., M.Phil",
    interests: ["Functional Analysis", "Mathematical Modeling"],
  },
  {
    name: "Dr. Srimanta Maji",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Compressed Sensing", "Signal Processing"],
  },
  {
    name: "Dr. Priyanka Pandey",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D. (thesis submitted)",
    interests: ["Complex Analysis", "Advanced Calculus"],
  },
  {
    name: "Dr. Mayank Singh Bhakuni",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Randomized Algorithms", "Computational Mathematics"],
  },
  {
    name: "Dr. Prosanta Sarkar",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Queuing Theory", "Probability Methods"],
  },
  {
    name: "Dr. Mamatha R M",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Differential Equations", "Mathematical Analysis"],
  },
  {
    name: "Mr. Manoj Solanki",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "M.Sc.",
    interests: ["Applied Mathematics", "Numerical Methods"],
  },
  {
    name: "Dr. Prasadini Mahapatra",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Matrix Theory", "Linear Algebra Applications"],
  },
  {
    name: "Dr. Shital Saha",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Real Analysis", "Topology"],
  },
  {
    name: "Zaffar Mehdi Dar",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D. (thesis submitted)",
    interests: ["Graph Theory", "Discrete Mathematics"],
  },
  {
    name: "Mr. Ajay Singh Jangal",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "M.Sc.",
    interests: ["Geometry", "Mathematical Foundations"],
  },
  {
    name: "Kruthik P. S.",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D. (thesis submitted)",
    interests: ["Abstract Algebra", "Ring Theory"],
  },
  {
    name: "Dr. SRIKUMAR",
    title: "Associate Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "M.Sc., Ph.D.",
    interests: ["Numerical Analysis", "Computational Methods"],
  },
  {
    name: "Mr. Pratik Mehta",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "M.Sc.",
    interests: ["Optimization", "Mathematical Programming"],
  },
  {
    name: "Dr. Sreenanda Raut",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Partial Differential Equations", "Applied Analysis"],
  },
  {
    name: "Dr. Om Prakash Keshri",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Number Theory", "Pure Mathematics"],
  },
  {
    name: "Dr. Hariharan S",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Functional Analysis", "Operator Theory"],
  },
  {
    name: "Dr. Naresh Saha",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Statistics", "Probability Distributions"],
  },
  {
    name: "Dr. Shilpi Jain",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Combinatorics", "Discrete Structures"],
  },
  {
    name: "Dr. Soham Swadhin Pradhan",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Calculus of Variations", "Optimization Theory"],
  },
  {
    name: "Dr. Paresh Kumar Panigrahi",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Mathematical Physics", "Quantum Mechanics"],
  },
  {
    name: "Mr. Junias J. Singh",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D. (thesis submitted)",
    interests: ["Linear Programming", "Operations Research"],
  },
  {
    name: "Mr. Mohammed Salman M",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D.",
    interests: ["Harmonic Analysis", "Fourier Analysis"],
  },
  {
    name: "Ms. Seetha Poojitha",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1507842072343-583f20270319?q=80&w=500&auto=format&fit=crop",
    qualifications: "M.Sc.",
    interests: ["Geometry", "Mathematical Visualization"],
  },
  {
    name: "Mr. Sarabindu Dolui",
    title: "Assistant Professor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=500&auto=format&fit=crop",
    qualifications: "Ph.D. (thesis submitted)",
    interests: ["Stochastic Processes", "Probability Theory"],
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
}));

export const getMathematicsFacultyBySlug = (slug: string) =>
  mathematicsFaculty.find((f) => f.slug === slug);

export type Faculty = MathematicsFacultyMember;
