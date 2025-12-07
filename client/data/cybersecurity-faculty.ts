import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const cybersecurityFaculty: Faculty[] = [
  { name: "Dr. Dilip Kumar Jang Bahadur Saini", title: "Associate Professor & Chairperson", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/DilipKumar.jpg`, qualifications: "M.E, Ph.D" },
  { name: "Dr. Durbadal Chattaraj", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Durbadal.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Prajwalasimha S N", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Prajwalasimha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Mubeen Ahmed Khan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Mubeen.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Naveen Kulkarni", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Naveen.jpg`, qualifications: "B.E.(ISE), M.Tech(CSE)" },
  { name: "Sharanabasappa Tadkal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Sharanabasappa.jpg`, qualifications: "M.Tech" },
  { name: "Deepthika Karuppusamy", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Deepthika.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Biswajit Debnath", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Biswajit.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Joshe Raj", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Joshe.jpg`, qualifications: "M.Tech" },
  { name: "Dr. D.Sumathi", title: "Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Sumathi.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. G. Hemanth Kumar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Hemanth.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Devipriya V S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Devipriya.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Indushree M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Indushree.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Vinitha V", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Vinitha.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Ranjima P", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Ranjima.jpg`, qualifications: "M.E" },
  { name: "Ms. Sayeli Dey", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Sayeli.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Archita Bhattacharyya", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Archita.jpg`, qualifications: "M.Tech" },
  { name: "Prof. G. N. V. Prasad", title: "Professor of Practice", image: `${BASE_URL}/images/Engineering/Cybersec-dept/faculty/Prasad.jpg`, qualifications: "M.E" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getCybersecurityFacultyBySlug = (slug: string) => cybersecurityFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
