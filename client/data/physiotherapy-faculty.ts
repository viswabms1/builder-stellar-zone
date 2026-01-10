import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export interface PhysiotherapyFacultyMember extends FacultyEntry {
  qualifications: string;
  specialty: string;
  googleScholar?: string;
  department: string;
}

const rawFaculty = [
  {
    department: "Musculoskeletal and Sports Physiotherapy",
    members: [
      {
        name: "Dr. Sathya Guruprasad",
        title: "Principal & Professor",
        qualifications: "M.P.T, PhD",
        specialty: "Musculoskeletal & Sports Physiotherapy",
        googleScholar: "https://scholar.google.com/",
      },
      {
        name: "Dr. Vimarsha Nayak",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Musculoskeletal & sports Physiotherapy",
      },
      {
        name: "Dr. Satvik Acharya",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Musculoskeletal and Sports injuries",
      },
      {
        name: "Dr. Vinod Kumar K C",
        title: "Associate Professor",
        qualifications: "MPT, (PhD)",
        specialty: "Musculoskeletal & sports Physiotherapy",
        googleScholar: "https://scholar.google.com/",
      },
      {
        name: "Dr. Swapna Rout",
        title: "Assistant Professor",
        qualifications: "MPT(PhD)",
        specialty: "Sports Rehabilitation",
      },
      {
        name: "Dr. Siddesh G",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Musculoskeletal & sports Physiotherapy",
      },
    ],
  },
  {
    department: "NeuroPhysiotherapy",
    members: [
      {
        name: "Dr. Aditi Bhat",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Neurosciences (Adult)",
      },
      {
        name: "Dr. Anitha M",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Neurological and Psychosomatic Disorders",
      },
      {
        name: "Dr. Olivia Rose Mary (PT)",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Neurological Sciences (Adult)",
      },
      {
        name: "Dr. Mrudula K P",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Paediatrics",
      },
    ],
  },
  {
    department: "Cardio-Respiratory and General",
    members: [
      {
        name: "Dr. Srihari Sharma K N",
        title: "Associate Professor",
        qualifications: "MPT, PhD",
        specialty: "Cardiorespiratory & General Physiotherapy",
      },
      {
        name: "Dr. Kanchan P Sugandhi",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Cardio-Respiratory Disorders and Intensive Care",
      },
    ],
  },
  {
    department: "Community Based Rehabilitation",
    members: [
      {
        name: "Dr. Gayathri Poojary",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Community Physiotherapy & Rehabilitation",
      },
      {
        name: "Dr. Pramod Kashyap C",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Community Health",
      },
      {
        name: "Dr. Eluri Mani Sandhya Devi",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Community Physiotherapy",
      },
    ],
  },
  {
    department: "Obstetrics and Gynecology Physiotherapy",
    members: [
      {
        name: "Dr. Feba Roy",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Obstetrics and Gynecology PT",
      },
      {
        name: "Dr. Jagrruthi NS",
        title: "Assistant Professor",
        qualifications: "MPT",
        specialty: "Obstetrics and Gynecology PT",
      },
    ],
  },
  {
    department: "Tutor/Clinical Therapist",
    members: [
      {
        name: "Dr. Apoorva D J",
        title: "Tutor/Clinical Therapist",
        qualifications: "BPT",
        specialty: "Physiotherapy",
      },
      {
        name: "Dr. Shiv Kumar Yadav",
        title: "Tutor/Clinical Therapist",
        qualifications: "BPT",
        specialty: "Physiotherapy",
      },
      {
        name: "Dr. Nitika Momen",
        title: "Tutor/Clinical Therapist",
        qualifications: "BPT",
        specialty: "Physiotherapy",
      },
      {
        name: "Dr. Manish Gowda K.S",
        title: "Tutor/Clinical Therapist",
        qualifications: "BPT",
        specialty: "Physiotherapy",
      },
    ],
  },
];

export const physiotherapyFaculty: PhysiotherapyFacultyMember[] = rawFaculty.flatMap(
  (dept) =>
    dept.members.map((member) => ({
      ...member,
      department: dept.department,
      slug: make(member.name),
      image: `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=random&color=fff`,
    })),
);

export const getPhysiotherapyFacultyBySlug = (slug: string) =>
  physiotherapyFaculty.find((f) => f.slug === slug);
