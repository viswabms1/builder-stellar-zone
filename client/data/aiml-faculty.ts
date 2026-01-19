import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";
const BASE_URL = "https://www.dsu.edu.in";

export const aimlFaculty: Faculty[] = [
  { name: "Dr. Jayavrinda Vrindavanam V", title: "Professor and Chairperson CSE(AIML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Jayavrinda.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Hanumanth Sastry Sistla", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Hanumanth.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Bahubali Shiragapur", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Bahubali.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Joshuva Arockia Dhanraj", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Joshuva.jpg`, qualifications: "Ph.D" },
  { name: "Prof. Suresh Kandasamy", title: "Professor of Practice", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Suresh.jpg`, qualifications: "B.Tech, MS, (Ph.D)" },
  { name: "Dr. Vegi Fernando A", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Vegi.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinutha N", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Vinutha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Abdul Haq Nalband", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/AbdulHaq.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Prateek Verma", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Prateek.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Jitendra Jaiswal", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Jitendra.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Mude Nagarjuna Naik", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Nagarjuna.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Princy Randhawa", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Princy.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Sumant Kumar Mohapatra", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Sumant.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Animesh Srivastava", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Animesh.jpg`, qualifications: "Ph.D" },
  { name: "Dr. A. A. Nippun Kumaar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/NippunKumaar.jpg`, qualifications: "Ph.D." },
  { name: "Dr. M. Manimaran", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Manimaran.jpg`, qualifications: "ME., Ph.D." },
  { name: "Dr. Sumit Kumar Yadav", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Sumit.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Subhash Mondal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Subhash.jpg`, qualifications: "M.Tech,(Ph.D)" },
  { name: "Mr. Pradeep Kumar K", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Pradeep.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mr. R. Sriramkumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Sriramkumar.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Mrs. Mitha Guru", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Mitha.jpg`, qualifications: "M.Tech" },
  { name: "Rakshita R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Rakshita.jpg`, qualifications: "M.Tech, (Ph.D)" },
  { name: "Dr. M. Lakshmanan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Lakshmanan.jpg`, qualifications: "Ph.D" },
  { name: "Dr. S.V.K.R.Rajeswari", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Rajeswari.jpg`, qualifications: "Ph.D" },
  { name: "Mr. Sahil Pocker", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Sahil.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Bhuvana Mohini T N", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Bhuvana.jpg`, qualifications: "M.Tech" },
  { name: "Ms Nivetha R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Nivetha.jpg`, qualifications: "M.E" },
  { name: "Prof. Ankita Thakkar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Ankita.jpg`, qualifications: "M.E.(IT), M.S.(CSE)" },
  { name: "Dr. Sugandha Saxena", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Sugandha.jpg`, qualifications: "Ph.D" },
  { name: "Prof. Trupthi Rao", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Trupthi.jpg`, qualifications: "M.Tech.,(Ph.D)" },
  { name: "Dr. Govind Kumar Pandey", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Govind.jpg`, qualifications: "Ph.D" },
  { name: "Ms. Pragnya Pragatika Mishra", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Pragnya.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Verriboina Antony", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Verriboina.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Soheli Chakraborty", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Soheli.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Anubrata Singharoy", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Anubrata.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Tejal Khade", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Tejal.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Shivnandan Rai", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Shivnandan.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Partha Protim Sen", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Partha.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Souvik Ghosh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Souvik.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Amrita Kundu", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Amrita.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Upasana Shil", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Upasana.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Hairunesa Beevi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Hairunesa.jpg`, qualifications: "M.Tech" },
  { name: "Prof. Kuna Srinidhi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Srinidhi.jpg`, qualifications: "M.Tech.,(Ph.D)" },
  { name: "Ripunjay Jaiswar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Ripunjay.jpg`, qualifications: "M.Tech" },
  { name: "Prof. Kaviyaadharshani D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/Dharshini.jpg`, qualifications: "M.E" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : base + f.image,
}));

export const getAIMLFacultyBySlug = (slug: string) => aimlFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  slug: string;
};
