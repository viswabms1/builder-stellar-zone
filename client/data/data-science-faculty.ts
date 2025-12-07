import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const dataScienceFaculty: Faculty[] = [
  { name: "Dr. Shaila S. G", title: "Professor and Chairperson", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Shaila.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Santhosh Kumar G", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Santhosh.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Suresh Arumugam", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Suresh.jpg`, qualifications: "Ph.D" },
  { name: "Dr. U. Pavan Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Pavan.jpg`, qualifications: "Ph.D" },
  { name: "Shivamma D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Shivamma.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Monish L", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Monish.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Manjula M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Manjula.jpg`, qualifications: "M.Tech (Ph.D)" },
  { name: "Sindhu A", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Sindhu.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Godhandaraman T", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Godhandaraman.jpg`, qualifications: "M.E" },
  { name: "Prof. Chandrakala L", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Chandrakala.jpg`, qualifications: "M.Tech" },
  { name: "Prof. Prapti Bhattacharjee", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Prapti.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Mithun Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Mithun.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Megha Chandel", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Megha.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Kishor Malakar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Kishor.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Shashank Shekhar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Shashank.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Souramita Bhowmik", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Souramita.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Mriganka Das", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Mriganka.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Snigdha Sikha Kashyap", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Snigdha.jpg`, qualifications: "M.Tech" },
  { name: "Dr. Jobin Thomas", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/DS-dept/faculty/Jobin.jpg`, qualifications: "M.Tech, Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getDataScienceFacultyBySlug = (slug: string) => dataScienceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
