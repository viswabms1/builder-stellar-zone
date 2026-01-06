import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const lawFaculty: Faculty[] = [
  { name: "Prof (Dr.) Kiran Gardner", title: "Dean of Law", qualifications: "Ph.D in Law", profileUrl: "/dean-kiran-gardner" },
  { name: "Prof. (Dr.) Heena Ghanshyam Patoli", title: "Professor of Law", qualifications: "Ph.D", profileUrl: "/prof-heena-patoli" },
  { name: "Dr. Gurudev Sahil", title: "Associate Professor of Law", qualifications: "Ph.D", profileUrl: "/dr-gurudev-sahil" },
  { name: "Dr. Gajendra N", title: "Associate Professor of Economics", qualifications: "Ph.D", profileUrl: "/dr-gajendra-n" },
  { name: "Dr. Upankar Chutia", title: "Associate Professor of Law", qualifications: "Ph.D", profileUrl: "/dr-upankar-chutia" },
  { name: "Dr. Gyanashree Dutta", title: "Associate Professor of Law", qualifications: "Ph.D", profileUrl: "/dr-gyanashree-dutta" },
  { name: "Dr. Prasanta Moharaj", title: "Assistant Professor of Sociology", qualifications: "Ph.D", profileUrl: "/dr-prasanta-moharaj" },
  { name: "Dr. Shantanu Pachahara", title: "Assistant Professor of Law", qualifications: "Ph.D", profileUrl: "/dr-shantanu-pachahara" },
  { name: "Dr. Pallavi Sen", title: "Assistant Professor of Law", qualifications: "Ph.D", profileUrl: "/dr-pallavi-sen" },
  { name: "Ms. Shivani Dutta", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/ms-shivani-dutta" },
  { name: "Mr. Sanjay Utagi", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/mr-sanjay-utagi" },
  { name: "Mr. Bharath K M", title: "Assistant Professor of Political Science", qualifications: "", profileUrl: "/mr-bharath-km" },
  { name: "Ms. Stency Mariya Mark", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/ms-stency-mariya" },
  { name: "Ms. Arifa Sultana Choudhury", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/ms-arifa-sultana" },
  { name: "Mr. Nithin Rajeev", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/mr-nithin-rajeev" },
  { name: "Ms. Amthul Naseeb", title: "Assistant Professor of Management", qualifications: "", profileUrl: "/ms-amthul-naseeb" },
  { name: "Ms. Kavya. P", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/ms-kavya-p" },
  { name: "Ms. Kirti Minhas", title: "Assistant Professor of Law", qualifications: "", profileUrl: "/ms-kirti-minhas" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getLawFacultyBySlug = (slug: string) => lawFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
