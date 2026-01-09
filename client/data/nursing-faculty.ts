import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const nursingFaculty: Faculty[] = [
  { name: "Dr. Shejila CH", title: "Professor & Principal (I/C)", qualifications: "Ph.D Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/dr-shejila-ch" },
  { name: "Dr. Sharmila J", title: "Professor & HOD", qualifications: "Ph.D Nursing", specialty: "Mental Health Nursing", profileUrl: "/nursing-faculty/dr-sharmila-j" },
  { name: "Dr. Jamuna PP", title: "Associate Professor", qualifications: "Ph.D Nursing", specialty: "OBG Nursing", profileUrl: "/nursing-faculty/dr-jamuna-pp" },
  { name: "Mr. Ravi Kulal", title: "Associate Professor", qualifications: "M.Sc. Nursing", specialty: "Community Health Nursing", profileUrl: "/nursing-faculty/mr-ravi-kulal" },
  { name: "Dr. Sujitha M", title: "Associate Professor", qualifications: "Ph.D Nursing", specialty: "Mental Health Nursing", profileUrl: "/nursing-faculty/dr-sujitha-m" },
  { name: "Mr. Ramesh S", title: "Associate Professor", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/mr-ramesh-s" },
  { name: "Mrs. S Suseela", title: "Associate Professor", qualifications: "M.Sc. Nursing", specialty: "OBG Nursing", profileUrl: "/nursing-faculty/mrs-s-suseela" },
  { name: "Ms. Julice Varughese", title: "Associate Professor", qualifications: "M.Sc. Nursing", specialty: "Child Health Nursing", profileUrl: "/nursing-faculty/ms-julice-varughese" },
  { name: "Dr. Prathiba", title: "Assistant Professor", qualifications: "Ph.D Nursing", specialty: "Child Health Nursing", profileUrl: "/nursing-faculty/dr-prathiba" },
  { name: "Mrs. Sejal Darbar", title: "Assistant Professor", qualifications: "M.Sc Nursing", specialty: "Mental Health Nursing", profileUrl: "/nursing-faculty/mrs-sejal-darbar" },
  { name: "Mrs. Sabina Christina J L", title: "Assistant Professor", qualifications: "M.Sc Nursing", specialty: "Community Health Nursing", profileUrl: "/nursing-faculty/mrs-sabina-christina-jl" },
  { name: "Mrs. Joy Priscilla", title: "Assistant Professor", qualifications: "M.Sc Nursing", specialty: "Child Health Nursing", profileUrl: "/nursing-faculty/mrs-joy-priscilla" },
  { name: "Mrs. Aruna T", title: "Assistant Professor", qualifications: "M.Sc Nursing", specialty: "OBG Nursing", profileUrl: "/nursing-faculty/mrs-aruna-t" },
  { name: "Ms. Ashwini A", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Community Health Nursing", profileUrl: "/nursing-faculty/ms-ashwini-a" },
  { name: "Mr. Mahesh", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/mr-mahesh" },
  { name: "Ms. Jyothi Nirola", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Community Health Nursing", profileUrl: "/nursing-faculty/ms-jyothi-nirola" },
  { name: "Mr. Manojit Bera", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/mr-manojit-bera" },
  { name: "Ms. Pallabi Ghosh", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/ms-pallabi-ghosh" },
  { name: "Mr. Subhajit Bera", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Mental Health Nursing", profileUrl: "/nursing-faculty/mr-subhajit-bera" },
  { name: "Ms. Sathana G", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Child Health Nursing", profileUrl: "/nursing-faculty/ms-sathana-g" },
  { name: "Ms. Sowmya", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "OBG Nursing", profileUrl: "/nursing-faculty/ms-sowmya" },
  { name: "Ms. Anusha KS", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/ms-anusha-ks" },
  { name: "Ms. Mehak Mazoor", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Medical Surgical Nursing", profileUrl: "/nursing-faculty/ms-mehak-mazoor" },
  { name: "Ms. Shalini", title: "Lecturer", qualifications: "M.Sc Nursing", specialty: "Mental Health Nursing", profileUrl: "/nursing-faculty/ms-shalini" },
  { name: "Ms. Nikitha Nath", title: "Tutor", qualifications: "B.Sc Nursing", specialty: "", profileUrl: "/nursing-faculty/ms-nikitha-nath" },
  { name: "Ms. Sai Upasana", title: "Tutor", qualifications: "B.Sc Nursing", specialty: "", profileUrl: "/nursing-faculty/ms-sai-upasana" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getNursingFacultyBySlug = (slug: string) => nursingFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & { specialty?: string };
