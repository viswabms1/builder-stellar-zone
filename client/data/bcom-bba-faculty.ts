import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const bcomBbaFaculty: Faculty[] = [
  // Dean
  { name: "Dr. Truptha Shankar", title: "Dean, School of Commerce & Management Studies", qualifications: "MBA, Ph.D", profileUrl: "/dean-truptha-shankar" },

  // Professors
  { name: "Prof. Arun Kumar N", title: "Professor of Practice", qualifications: "MBA", profileUrl: "/prof-arun-kumar" },

  // Associate Professors
  { name: "Dr. Chandrakala G", title: "Associate Professor & B.Com Program Manager", qualifications: "M.Phil, Ph.D", profileUrl: "/dr-chandrakala-g" },
  { name: "Dr. Roohi Kursheed Khan S", title: "Associate Professor & BBA Program Manager", qualifications: "Ph.D", profileUrl: "/dr-roohi-kursheed" },
  { name: "Dr. Laxmanrao Goranta", title: "Associate Professor", qualifications: "Ph.D", profileUrl: "/dr-laxmanrao-goranta" },
  { name: "Dr. S. Prabakar", title: "Associate Professor", qualifications: "Ph.D", profileUrl: "/dr-s-prabakar" },

  // Assistant Professors
  { name: "Dr Rajesh Kalli", title: "Assistant Professor", qualifications: "MBA, Ph.D", profileUrl: "/dr-rajesh-kalli" },
  { name: "Prof. Suneeta Hegde", title: "Assistant Professor", qualifications: "MSc, MBL, PGDHRM, EMP", profileUrl: "/prof-suneeta-hegde" },
  { name: "Prof. Suresh Kumar T M", title: "Assistant Professor", qualifications: "M.Phil", profileUrl: "/prof-suresh-kumar-tm" },
  { name: "Prof. Abhilash", title: "Assistant Professor", qualifications: "M.Com, NET", profileUrl: "/prof-abhilash" },
  { name: "Dr. Shruthi MP", title: "Assistant Professor", qualifications: "MBA, M.Com, Ph.D", profileUrl: "/dr-shruthi-mp" },
  { name: "Prof. Lohit N", title: "Assistant Professor", qualifications: "", profileUrl: "/prof-lohit-n" },
  { name: "Prof. Santosh Kumar S", title: "Assistant Professor", qualifications: "M.Phil", profileUrl: "/prof-santosh-kumar" },
  { name: "Prof. Yogashree C", title: "Assistant Professor", qualifications: "MBA", profileUrl: "/prof-yogashree-c" },
  { name: "Prof. Abhijith", title: "Assistant Professor", qualifications: "", profileUrl: "/prof-abhijith" },
  { name: "Dr. Priya K M", title: "Assistant Professor", qualifications: "MBA, M.Phil", profileUrl: "/dr-priya-km" },
  { name: "Prof. Veera Shireesha Sangu", title: "Assistant Professor", qualifications: "PGDM", profileUrl: "/prof-shireesha-sangu" },
  { name: "Prof. S S Mageswari", title: "Assistant Professor", qualifications: "PGDM", profileUrl: "/prof-mageswari" },
  { name: "Ms. Nayana Prabhash", title: "Assistant Professor", qualifications: "M.Phil", profileUrl: "/ms-nayana-prabhash" },
  { name: "Dr. A. Nagarajan", title: "Assistant Professor", qualifications: "Ph.D", profileUrl: "/dr-nagarajan" },
  { name: "Dr. S. Chudamani", title: "Assistant Professor", qualifications: "Ph.D", profileUrl: "/dr-chudamani" },
  { name: "Saruk B.S", title: "Assistant Professor", qualifications: "Ph.D (thesis submitted), M.Sc. in Statistics", profileUrl: "/saruk-bs" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getBcomBbaFacultyBySlug = (slug: string) => bcomBbaFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
