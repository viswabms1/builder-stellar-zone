import { FacultyEntry, FacultyDirectory } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";
const BASE_URL = "https://www.dsu.edu.in";

export const cseFaculty: Faculty[] = [
  { name: "Dr. Girisha G S", title: "Professor & Chairperson CSE", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Girisha_GS.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/dr-girisha" },
  { name: "Dr. Udaya Kumar Reddy K R", title: "Professor & Dean SoE", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Udaya.jpg`, qualifications: "M.E, Ph.D.", profileUrl: "/images/Engineering/CSE-dept/faculty/DrUday.pdf" },
  { name: "Dr. Bipin Kumar Rai", title: "Professor & Associate Chair", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrBipin_1.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/dr-bipin" },
  { name: "Dr. Revathi V", title: "Associate Professor & Associate Chair", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Revathi_V.jpg`, qualifications: "M.E., Ph.D", profileUrl: "/dr-revathi-v" },
  { name: "Dr. Basavaraj N Hiremath", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Basavaraj_N.jpg`, qualifications: "PhD", profileUrl: "/dr-basavaraj-nh" },
  { name: "Natarajan Venkateswaran", title: "Professor of Practice", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Natarajan.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Bondu Venkateswarlu", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/venkateswarlu.png`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. S K Mouleeswaran", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Moulee.jpg`, qualifications: "M.E., Ph.D" },
  { name: "Dr. Vengatesan Krishnasamy", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Vengatesan.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. George Fernandez I", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/George.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Shashikiran V", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/shashikiran.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Tanvir Habib Sardar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Tanvir_H.png`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Gousia Thahniyath", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/gousia.jpg`, qualifications: "M.E., Ph.D" },
  { name: "Dr. N. Bharathiraja", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Bharathiraja.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. Rupam Bhagawati", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Rupam_B.jpg`, qualifications: "M.Tech, Ph.D" },
  { name: "Dr. A. Senthil Kumar", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrSenthil.jpg`, qualifications: "Ph.D" },
  { name: "Dr. J. Sebastian Nixon", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrNixon.jpg`, qualifications: "PhD", profileUrl: "/dr-nixon" },
  { name: "Dr. Prabhakar M", title: "Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrPrabhakar.jpg`, qualifications: "Ph.D", profileUrl: "/dr-prabhakar" },
  { name: "Dr. Ramesh S", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Ramesh_S.jpg`, qualifications: "Ph.D" },
  { name: "Dr. Meenakshi Malhotra", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Meenakshi.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/dr-meenakshi" },
  { name: "Dr. Praveen Kulkarni", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrPraveen.jpg`, qualifications: "Ph.D", profileUrl: "/dr-praveen" },
  { name: "Dr. Savitha Hiremath", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrSavitha.jpg`, qualifications: "M.Tech, Ph.d", profileUrl: "/dr-savitha" },
  { name: "Dr. Sridhar S K", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrSridhar.jpg`, qualifications: "Ph.D", profileUrl: "/dr-sridhar" },
  { name: "Dr. Arunkumar Gopu", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrArunkumar.jpg`, qualifications: "PhD", profileUrl: "/dr-arunkumar" },
  { name: "Dr. Kumar Dilip", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrKumar.jpg`, qualifications: "Ph.D", profileUrl: "/dr-kumar" },
  { name: "Dr. Jeeva S", title: "Associate Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrJeeva.jpg`, qualifications: "Ph.D", profileUrl: "/dr-jeeva" },
  { name: "Dr. Renuka Devi M.N", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Dr_RenukaDevi.jpg`, qualifications: "M.Tech, Ph.d", profileUrl: "/dr-renuka" },
  { name: "Prof. Arjun Krishnamurthy", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Prof_Arjun.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/arjun-krishnamurthy" },
  { name: "Dr. Gokulakrishnan S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrGokulakrishnan.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/dr-gokulakrishnan" },
  { name: "Sowmya H D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Sowmya.jpg`, qualifications: "M.Tech", profileUrl: "/sowmya-h" },
  { name: "Shreekant Salotagi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Shreekant_S.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/shreekant-s" },
  { name: "Chethan K S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Chethan.jpg`, qualifications: "M.Tech", profileUrl: "/chethan-k" },
  { name: "Yashaswini", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Yashaswini.jpg`, qualifications: "M.Tech", profileUrl: "/yashaswini-h" },
  { name: "Roshan Sanu Y", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Roshan.jpg`, qualifications: "M.Tech", profileUrl: "/roshan-sanu" },
  { name: "Mohammed Javaid", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Mohammedj.jpg`, qualifications: "M.S", profileUrl: "/mohammed-ji" },
  { name: "Dr. Pannangi Naresh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrPannangi.jpg`, qualifications: "M.Tech, Ph.D", profileUrl: "/dr-pannangi" },
  { name: "Dr. Damodharan D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/DrDamodharan.jpg`, qualifications: "Ph.D", profileUrl: "/dr-damodharan" },
  { name: "Dr. Chetan V", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/chetan1.jpeg`, qualifications: "Ph.D", profileUrl: "/dr-chetan-v" },
  { name: "Soham Ghosh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Soham.jpg`, qualifications: "M.Tech", profileUrl: "/soham-ghosh" },
  { name: "Pavithra D", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Pavithra.jpg`, qualifications: "M.Tech", profileUrl: "/d-pavithra" },
  { name: "Annapurna Shobitha S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/AnnapurnaS.jpg`, qualifications: "M.Tech", profileUrl: "/annapurna-s" },
  { name: "Smriti Bharti", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Smriti.jpg`, qualifications: "M.Tech", profileUrl: "/smriti-b" },
  { name: "Soumadip Mondal", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Soumadip.jpg`, qualifications: "M.Tech", profileUrl: "/soumadip-m" },
  { name: "Ritik Chhatwani", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Ritik.jpg`, qualifications: "M.Tech", profileUrl: "/ritik-c" },
  { name: "Shivani", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Shivani.jpg`, qualifications: "M.Tech", profileUrl: "/shivani" },
  { name: "Ms. Sweta Chopdar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Sweta.jpg`, qualifications: "M.Tech", profileUrl: "/sweta-c" },
  { name: "Manas Singha", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Manas_S.jpg`, qualifications: "M.Tech", profileUrl: "/manas-s" },
  { name: "Mayank Kumar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Mayank_K.jpg`, qualifications: "M.Tech", profileUrl: "/mayank-k" },
  { name: "Praveen Gopal Gaonkar", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Praveen_Gopal.jpg`, qualifications: "M.Tech", profileUrl: "/praveen-g" },
  { name: "Preeti Gajdhane", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Preeti_Gajdhane.jpg`, qualifications: "M.Tech", profileUrl: "/preeti-g" },
  { name: "Priya Pudke", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Priya_Pudke.jpg`, qualifications: "M.Tech", profileUrl: "/priya-p" },
  { name: "Raunit Maurya", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Raunit.jpg`, qualifications: "M.Tech", profileUrl: "/raunit-m" },
  { name: "Rohit Kumar Singh", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Rohit_KS.jpg`, qualifications: "M.Tech", interests: ["Robotics", "Autonomous Systems", "Embedded ML"], profileUrl: "/rohit-k" },
  { name: "Rupam Sah", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Rupam_Sah.jpg`, qualifications: "M.Tech", profileUrl: "/rupam-s" },
  { name: "Shahid Raza", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Shahid.jpg`, qualifications: "M.Tech", profileUrl: "/shahid-r" },
  { name: "Sonali Bairagi", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Sonali_B.jpg`, qualifications: "M.Tech", profileUrl: "/sonali-ba" },
  { name: "Trinadh Singampalli", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Trinadh.jpg`, qualifications: "M.Tech", profileUrl: "/trinadh-s" },
  { name: "Nandini K", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/NandiniK.jpg`, qualifications: "M.Tech, (Ph.D)", profileUrl: "/nandini-k" },
  { name: "Pooja Shree H R", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/PoojaShree.jpg`, qualifications: "M.Tech", profileUrl: "/pooja-shree" },
  { name: "Kavyashree I Pattan", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/kavyashreei.jpg`, qualifications: "M.Tech", profileUrl: "/kavyashree-i" },
  { name: "Santhosh M", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Santhosh.jpg`, qualifications: "M.Tech", profileUrl: "/santhosh-m" },
  { name: "Naitik S T", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Naitik.jpg`, qualifications: "M.Tech(CNE), Ph.D", profileUrl: "/naitik-s" },
  { name: "Sasikala N", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Sasikala_N.jpg`, qualifications: "M.Tech", profileUrl: "/sasikala-n" },
  { name: "Radhika K", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/Radhika_K.jpg`, qualifications: "M.Tech", profileUrl: "/radhika-k" },
  { name: "Benaka Santhosha S", title: "Assistant Professor", image: `${BASE_URL}/images/Engineering/CSE-dept/faculty/benaka-s`, qualifications: "M.Tech, (Ph.D)", profileUrl: "/benaka-s" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : base + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : base + f.profileUrl) : undefined,
}));

export const getFacultyBySlug = (slug: string) => cseFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
