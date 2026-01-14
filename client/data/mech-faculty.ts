import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const mechFaculty: Faculty[] = [
  { name: "Dr. Saravana Bavan D", title: "Chairperson - Mechanical Engineering", image: `${BASE_URL}/images/Engineering/Mechanical-dept/SaravanaBavan.png`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Viswanathan R", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Viswanathan.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinayak B Hemadri", title: "Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Vinayak.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Rahul Kumar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Rahul.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Shashidhara L C", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Shashidhara.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Ravitej Y P", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Ravitej.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Abhijith N", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Abhijith.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Dr. Manish Kumar Mishra", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Manish.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Abhilash O", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Abhilash.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Rajeev Kumar Gupta", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Rajeev.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Naseem Khayum", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Naseem.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Rajesh Ranjan Ravi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Rajesh.jpg`, qualifications: "Ph.D" },
  { name: "Dr. K. Sudha Deepthi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Sudha.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Vinay M S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Vinay.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Karthik S B", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Karthik.jpg`, qualifications: "M.E, (Ph.D)" },
  { name: "Dr. P M G B Asdaque", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Asdaque.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Joy Mondal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Joy.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Velugula Ravi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Velugula.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Deepu Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Deepu.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Lokendra Singh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Lokendra.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Samrat Sagar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ME-dept/faculty/Samrat.jpg`, qualifications: "Ph.D" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
}));

export const getMechFacultyBySlug = (slug: string) => mechFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
