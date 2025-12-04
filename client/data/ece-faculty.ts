import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const BASE_URL = "https://www.dsu.edu.in";

export const eceFaculty: Faculty[] = [
  { name: "Dr. Rajesh Kumar", title: "Professor & Department Head ECE", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/rajesh-kumar.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/rajesh-kumar" },
  { name: "Dr. Anita Sharma", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/anita-sharma.jpg`, qualifications: "M.E., Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/anita-sharma" },
  { name: "Dr. Vikram Singh", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/vikram-singh.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/vikram-singh" },
  { name: "Dr. Priya Patel", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/priya-patel.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/priya-patel" },
  { name: "Prof. Harish Nair", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/harish-nair.jpg`, qualifications: "M.Tech", profileUrl: "/academics/engineering/electronics-communication/faculty/harish-nair" },
  { name: "Dr. Sneha Gupta", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/sneha-gupta.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/sneha-gupta" },
  { name: "Prof. Arjun Desai", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/arjun-desai.jpg`, qualifications: "M.Tech", profileUrl: "/academics/engineering/electronics-communication/faculty/arjun-desai" },
  { name: "Dr. Meera Iyer", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/meera-iyer.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/meera-iyer" },
  { name: "Prof. Rohit Verma", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/rohit-verma.jpg`, qualifications: "M.Tech", profileUrl: "/academics/engineering/electronics-communication/faculty/rohit-verma" },
  { name: "Dr. Deepak Chakraborty", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/deepak-chakraborty.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/deepak-chakraborty" },
  { name: "Prof. Neha Singh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/neha-singh.jpg`, qualifications: "M.Tech", profileUrl: "/academics/engineering/electronics-communication/faculty/neha-singh" },
  { name: "Dr. Suresh Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/ECE-dept/faculty/suresh-kumar.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/academics/engineering/electronics-communication/faculty/suresh-kumar" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : BASE_URL + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : BASE_URL + f.profileUrl) : undefined,
}));

export const getFacultyBySlug = (slug: string) => eceFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
