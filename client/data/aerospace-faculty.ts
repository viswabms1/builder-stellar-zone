import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const aerospaceFaculty: Faculty[] = [
  { name: "Dr. Nagaraja S. R.", title: "Professor & Chairman - Aerospace Engineering", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Nagaraja.jpg`, qualifications: "Ph.D" },
  { name: "Dr. B V N Ramakumar", title: "Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Ramakumar.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Prashantha Kumar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Prashanth.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Avinash Kumar Saurav", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Avinash.jpg`, qualifications: "Ph.D" },
  { name: "Prof. Sripad Kulkarni", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Sripad.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Ajey Singh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Ajey.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. G K Suryanarayana", title: "Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Suryanarayana.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Mathew Chacko", title: "Professor of Practice", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Mathew.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Kartik S. Tandel", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Kartik.jpg`, qualifications: "M.Tech" },
  { name: "Dr. Srinath Ramakrishnan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Srinath.jpg`, qualifications: "M.S., Ph.D" },
  { name: "Ms. Swagatika", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Swagatika.jpg`, qualifications: "M.Tech" },
  { name: "Dr. Vivek Anand", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/AE-dept/faculty/Vivek.jpg`, qualifications: "Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getAerospaceFacultyBySlug = (slug: string) => aerospaceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
