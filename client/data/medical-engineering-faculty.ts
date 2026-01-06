type Faculty = {
  name: string;
  title: string;
  image?: string;
  qualifications: string;
  profileUrl?: string;
};

const BASE_URL = "https://www.dsu.edu.in";

export const medicalEngineeringFaculty: Faculty[] = [
  {
    name: "Dr. Rajesh T M",
    title: "Associate Professor & Chairperson",
    image: `${BASE_URL}/images/Engineering/ME-dept/faculty/RajeshTM.jpg`,
    qualifications: "Ph.D",
    profileUrl: "/academics/engineering/cs-medical-engineering/faculty/dr-rajesh-tm",
  },
  {
    name: "Prof. Pruthvi Patel",
    title: "Assistant Professor",
    image: `${BASE_URL}/images/Engineering/ME-dept/faculty/PruthviPatel.jpg`,
    qualifications: "M.Tech",
    profileUrl: "/academics/engineering/cs-medical-engineering/faculty/prof-pruthvi-patel",
  },
];
