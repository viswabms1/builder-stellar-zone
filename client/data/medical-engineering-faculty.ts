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
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F9b126dfaa63c4af58a0f702a59d8f03e?format=webp&width=800",
    qualifications: "Ph.D",
    profileUrl: "/academics/engineering/cs-medical-engineering/faculty/dr-rajesh-tm",
  },
  {
    name: "Prof. Pruthvi Patel",
    title: "Assistant Professor",
    image: "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Feb7df89b40e040958d343e8067249cb5?format=webp&width=800",
    qualifications: "M.Tech",
    profileUrl: "/academics/engineering/cs-medical-engineering/faculty/prof-pruthvi-patel",
  },
];
