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
  { name: "Dr. Jayavrinda Vrindavanam V", title: "Professor & Chairperson, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/jayavrinda.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Hanumanth Sastry Sistla", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/hanumanth.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Bahubali Shiragapur", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/bahubali.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Joshuva Arockia Dhanraj", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/joshuva.jpg`, qualifications: "Ph.D" },
  { name: "Prof. Suresh Kandasamy", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/suresh-k.jpg`, qualifications: "B.Tech, MS, Ph.D" },
  { name: "Dr. Vegi Fernando A", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/vegi-fernando.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinutha N", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/vinutha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Abdul Haq Nalband", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/abdul-haq.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Prateek Verma", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/prateek-verma.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Jitendra Jaiswal", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/jitendra-jaiswal.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Mude Nagarjuna Naik", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/nagarjuna-naik.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Princy Randhawa", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/princy-r.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Sumant Kumar Mohapatra", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/sumant-km.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Animesh Srivastava", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/animesh-s.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Sumit Kumar Yadav", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/sumit-yadav.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Subhash Mondal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/subhash-mondal.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Pradeep Kumar K", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/pradeep-kumar.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. R. Sriramkumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/sriramkumar-r.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mrs. Mitha Guru", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/mitha-guru.jpg`, qualifications: "M.Tech" },
  { name: "Rakshita R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/rakshita-r.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. M. Lakshmanan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/dr-lakshmanan.jpg`, qualifications: "Ph.D" },
  { name: "Dr. S.V.K.R. Rajeswari", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/rajeswari.jpg`, qualifications: "Ph.D" },
  { name: "Mr. Sahil Pocker", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/sahil-pocker.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Bhuvana Mohini T N", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/bhuvana-mohini.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Nivetha R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/nivetha-r.jpg`, qualifications: "M.E" },
  { name: "Prof. Ankita Thakkar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/ankita-t.jpg`, qualifications: "M.E (IT), M.S (CSE)" },
  { name: "Dr. Sugandha Saxena", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/sugandha-s.jpg`, qualifications: "Ph.D" },
  { name: "Prof. Trupthi Rao", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/trupthi-r.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Mr. Govind Kumar Pandey", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/govind-k.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Pragnya Pragatika Mishra", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/pragnya-p.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Verriboina Antony", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/verriboina-a.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Soheli Chakraborty", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/soheli-chakraborty.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Anubrata Singharoy", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/anubrata-singharoy.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Tejal Khade", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/tejal-khade.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Shivnandan Rai", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/shivanandan-rai.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Partha Protim Sen", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/partha-protim.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Arpit Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/arpit-kumar.jpg`, qualifications: "M.Tech" },
  { name: "Mr. Souvik Ghosh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/souvik-ghosh.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Amrita Kundu", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/amrita-kundu.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Upasana Shil", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/upasana-shil.jpg`, qualifications: "M.Tech" },
  { name: "Ms. Hairunesa Beevi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/hairunesa-beevi.jpg`, qualifications: "M.Tech" },
  { name: "Prof. Kuna Srinidhi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/srinidhi-k.jpg`, qualifications: "M.Tech, Ph.D" },
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
