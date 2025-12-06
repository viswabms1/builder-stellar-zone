const BASE_URL = "https://www.dsu.edu.in";

export interface Faculty {
  name: string;
  title: string;
  image: string;
  qualifications: string;
  profileUrl?: string;
}

export const aimlFaculty: Faculty[] = [
  { name: "Dr. Jayavrinda Vrindavanam V", title: "Professor & Chairperson, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/jayavrinda.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Vinutha N", title: "Associate Professor, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/vinutha.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Prof. Pradeep Kumar K", title: "Assistant Professor & BOS Coordinator, CSE (AI & ML)", image: `${BASE_URL}/images/Engineering/CSE-AIML/faculty/pradeep-kumar.jpg`, qualifications: "M.Tech, Ph.D" },
];
