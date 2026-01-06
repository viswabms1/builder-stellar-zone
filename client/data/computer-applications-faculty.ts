import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";
const BASE_URL = "https://www.dsu.edu.in";

export const computerApplicationsFaculty: Faculty[] = [
  { name: "Dr. S. Senthil", title: "Professor & Dean", qualifications: "Ph.D", profileUrl: "/dr-s-senthil" },
  { name: "Dr. Vasanthikumari P", title: "Professor", qualifications: "Ph.D", profileUrl: "/dr-vasanthikumari-p" },
  { name: "Dr. R Kokila", title: "Associate Professor", qualifications: "M.Sc, M.Phil", profileUrl: "/dr-r-kokila" },
  { name: "Mrs. Padmageetha B G", title: "Associate Professor", qualifications: "MCA, M.Phil", profileUrl: "/padmageetha-bg" },
  { name: "Dr. M.S.Nidhya", title: "Associate Professor", qualifications: "Ph.D (Computer Science)", profileUrl: "/dr-ms-nidhya" },
  { name: "Dr. Ramesh Reddy Chundi", title: "Assistant Professor", qualifications: "Ph.D", profileUrl: "/dr-ramesh-reddy" },
  { name: "Dr. G Sandhya Madhuri", title: "Assistant Professor", qualifications: "Ph.D", profileUrl: "/dr-g-sandhya" },
  { name: "Mrs. Sindhu S", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/sindhu-s" },
  { name: "Mr. Ambanna S", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/ambanna-s" },
  { name: "Ms. D Priyanka Rukesh", title: "Assistant Professor", qualifications: "MCA, M.Phil", profileUrl: "/priyanka-rukesh" },
  { name: "Ms. Jithy Lijo", title: "Assistant Professor", qualifications: "MCA, M.Phil", profileUrl: "/jithy-lijo" },
  { name: "Ms. Varshitha K", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/varshitha-k" },
  { name: "Ms. Akancha Minz", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/akancha-minz" },
  { name: "Mr. Aqib Hussain", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/aqib-hussain" },
  { name: "Bhukya Chinna", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/bhukya-chinna" },
  { name: "Mr. Dhirendra Yadav", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/dhirendra-yadav" },
  { name: "Haripriya Ramalingam", title: "Assistant Professor", qualifications: "", profileUrl: "/haripriya-ramalingam" },
  { name: "Mr. Mohd Adil", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/mohd-adil" },
  { name: "Neha Gupta", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/neha-gupta" },
  { name: "Ms. Nimisha R Nair", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/nimisha-r-nair" },
  { name: "Ms. Pradisha Baranwal", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/pradisha-baranwal" },
  { name: "Mr. Rajan Niranjan", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/rajan-niranjan" },
  { name: "Shahil Kumar Ray", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/shahil-kumar-ray" },
  { name: "Shreshthav Bisht", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/shreshthav-bisht" },
  { name: "Tanya Gupta", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/tanya-gupta" },
  { name: "Mrs. Sumana S G", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/sumana-sg" },
  { name: "Ms. Vaishnavi K C", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/vaishnavi-kc" },
  { name: "Mrs. Alpa Patel", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/alpa-patel" },
  { name: "Mrs. K Ashtalakshmi Rajaram", title: "Assistant Professor", qualifications: "M.Sc, M.Phil", profileUrl: "/ashtalakshmi-rajaram" },
  { name: "Ms. Rakshitha S", title: "Assistant Professor - Mathematics", qualifications: "MSc Applied Mathematics", profileUrl: "/rakshitha-s" },
  { name: "Mr. Adarsh Kumar Jha", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/adarsh-kumar-jha" },
  { name: "Mr. Amanjyoti Baidya", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/amanjyoti-baidya" },
  { name: "Mr. Ashutosh Kumar", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/ashutosh-kumar" },
  { name: "Mr. Chandaka Giri Babu", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/chandaka-giri-babu" },
  { name: "Mr. Hariom", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/hariom" },
  { name: "Ms. Jyoti Singh", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/jyoti-singh" },
  { name: "Mr. Mohit Singh", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/mohit-singh" },
  { name: "Nikita Patel", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/nikita-patel" },
  { name: "Mr. Pavan Kalyan G", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/pavan-kalyan-g" },
  { name: "Priyanka Soni", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/priyanka-soni" },
  { name: "Mr. Sandeep Kumar", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/sandeep-kumar" },
  { name: "Shital Kumari", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/shital-kumari" },
  { name: "Sourabh Pandey", title: "Assistant Professor", qualifications: "MCA", profileUrl: "/sourabh-pandey" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getFacultyBySlug = (slug: string) => computerApplicationsFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
