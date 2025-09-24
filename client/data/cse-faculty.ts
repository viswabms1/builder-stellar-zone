export type Faculty = {
  slug: string;
  name: string;
  title: string;
  image: string;
  email?: string;
  qualifications?: string;
  interests?: string[];
  profileUrl?: string;
};

const base = "https://www.dsu.edu.in";

const make = (n: string) =>
  n
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const cseFaculty: Faculty[] = [
  { name: "Dr. Udaya Kumar Reddy K R", title: "Professor & Dean SoE", image: "/images/Engineering/CSE-dept/faculty/Udaya.jpg", qualifications: "M.E, Ph.D.", profileUrl: "/images/Engineering/CSE-dept/faculty/DrUday.pdf" },
  { name: "Dr. Bipin Kumar Rai", title: "Professor & Associate Chair", image: "/images/Engineering/CSE-dept/faculty/DrBipin_1.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/dr-bipin" },
  { name: "Dr. Basavaraj N Hiremath", title: "Professor", image: "/images/Engineering/CSE-dept/faculty/Basavaraj_N.jpg", qualifications: "PhD", profileUrl: "/dr-basavaraj-nh" },
  { name: "Dr. Gopalsharma R. Joshi", title: "Professor", image: "/images/Engineering/CSE-dept/faculty/gopalsharma_r.jpg", qualifications: "Ph.D", profileUrl: "/dr-gopalsharma-r" },
  { name: "Dr. J. Sebastian Nixon", title: "Professor", image: "/images/Engineering/CSE-dept/faculty/DrNixon.jpg", qualifications: "PhD", profileUrl: "/dr-nixon" },
  { name: "Dr. Prabhakar M", title: "Professor", image: "/images/Engineering/CSE-dept/faculty/Prabhakar.jpg", qualifications: "Ph.D", profileUrl: "/dr-prabhakar" },
  { name: "Dr. Praveen Kulkarni", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrPraveen.jpg", qualifications: "Ph.D", profileUrl: "/dr-praveen" },
  { name: "Dr. Savitha Hiremath", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrSavitha.jpg", qualifications: "M.Tech, Ph.d", profileUrl: "/dr-savitha" },
  { name: "Dr. Meenakshi Malhotra", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/Meenakshi.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/dr-meenakshi" },
  { name: "Dr. Sridhar S K", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrSridhar.jpg", qualifications: "Ph.D", profileUrl: "/dr-sridhar" },
  { name: "Dr. Arunkumar Gopu", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrArunkumar.jpg", qualifications: "PhD", profileUrl: "/dr-arunkumar" },
  { name: "Dr. Kumar Dilip", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrKumar.jpg", qualifications: "Ph.D", profileUrl: "/dr-kumar" },
  { name: "Dr. Sivananda Reddy", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrSivananda.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/dr-sivananda" },
  { name: "Dr. Jeeva S", title: "Associate Professor", image: "/images/Engineering/CSE-dept/faculty/DrJeeva.jpg", qualifications: "Ph.D", profileUrl: "/dr-jeeva" },
  { name: "Dr. Renuka Devi M.N", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/DrRenukaDevi.jpg", qualifications: "M.Tech, Ph.d", profileUrl: "/dr-renuka" },
  { name: "Prof. Arjun Krishnamurthy", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Prof_Arjun.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/arjun-krishnamurthy" },
  { name: "Gaurav Kumar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/GauravK.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/gaurav-kumar" },
  { name: "Bharath B", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/BharathB.jpg", qualifications: "M.Tech", profileUrl: "/bharath-b" },
  { name: "Yashpal Gupta S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Yashpal.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/yashpal-gupta" },
  { name: "Vishwas D B", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/VishwasD.jpg", qualifications: "M.Tech", profileUrl: "/vishwas-d" },
  { name: "Dharmendra D P", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Dharmendra.jpg", qualifications: "M.Tech", profileUrl: "/dharmendra-d" },
  { name: "Sushma D S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sushma_d.jpg", qualifications: "M.E", profileUrl: "/sushma-d" },
  { name: "Vishnu Shankar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Vishnu.jpg", qualifications: "M.Tech", profileUrl: "/vishnu-s" },
  { name: "Asfiya Zaman", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Asfiya.jpg", qualifications: "M.Tech", profileUrl: "/asfiya-z" },
  { name: "Prateek Jha", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Prateek.jpg", qualifications: "M.Tech", profileUrl: "/prateek-jha" },
  { name: "Sruthi Yapalaparvi", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sruthi.jpg", qualifications: "M.Tech", profileUrl: "/sruthi-y" },
  { name: "Aman Aditya", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Aman.jpg", qualifications: "M.Tech", profileUrl: "/aman-a" },
  { name: "Anisha Dawar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Anisha.jpg", qualifications: "M.Tech", profileUrl: "/anisha-d" },
  { name: "Anurag Gupta", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Anurag.jpg", qualifications: "M.Tech", profileUrl: "/anurag-g" },
  { name: "Archana R C", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Archana.jpg", qualifications: "M.Tech", profileUrl: "/archana-r" },
  { name: "Bikramjit Saha", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Bikramjit.jpg", qualifications: "M.Tech", profileUrl: "/bikramjit-s" },
  { name: "Chandan Maji", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Chandan_Maji.jpg", qualifications: "M.Tech", profileUrl: "/chandan-m" },
  { name: "Joydeep Patar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Joydeep.jpg", qualifications: "M.Tech", profileUrl: "/joydeep-p" },
  { name: "Jyotishna Singh", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Jyotishna.jpg", qualifications: "M.Tech", profileUrl: "/jyotishna-s" },
  { name: "Mahendra M K", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Mahendra_MK.jpg", qualifications: "M.Tech", profileUrl: "/mahendra-m" },
  { name: "Mahendra", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Mahendra.jpg", qualifications: "M.Tech", profileUrl: "/mahendra" },
  { name: "Sumit Sharma", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sumit_Sharma.jpg", qualifications: "M.Tech", profileUrl: "/sumit-s" },
  { name: "Yakantika Roy", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Yakantika.jpg", qualifications: "M.Tech", profileUrl: "/yakantika-r" },
  { name: "Nandini K", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/NandiniK.jpg", qualifications: "M.Tech, (Ph.D)", profileUrl: "/nandini-k" },
  { name: "Pooja Shree H R", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/PoojaShree.jpg", qualifications: "M.Tech", profileUrl: "/pooja-shree" },
  { name: "Kavyashree I Pattan", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/kavyashreei.jpg", qualifications: "M.Tech", profileUrl: "/kavyashree-i" },
  { name: "Santhosh M", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Santhosh.jpg", qualifications: "M.Tech", profileUrl: "/santhosh-m" },
  { name: "Naitik S T", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Naitik.jpg", qualifications: "M.Tech(CNE), Ph.D", profileUrl: "/naitik-s" },
  { name: "Sasikala N", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/sasikalan.jpg", qualifications: "M.Tech", profileUrl: "/sasikala-n" },
  { name: "Radhika K", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Radhika.jpg", qualifications: "M.Tech", profileUrl: "/radhika-k" },
  { name: "Benaka Santhosha S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/benaka.jpg", qualifications: "M.Tech, (Ph.D)", profileUrl: "/benaka-s" },
  { name: "Dr. Gokulakrishnan S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/DrGokulakrishnan.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/dr-gokulakrishnan" },
  { name: "Sowmya H D", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sowmya.jpg", qualifications: "M.Tech", profileUrl: "/sowmya-h" },
  { name: "Shreekant Salotagi", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Shreekant_S.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/shreekant-s" },
  { name: "Chethan K S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Chethan.jpg", qualifications: "M.Tech", profileUrl: "/chethan-k" },
  { name: "Yashaswini", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Yashaswini.jpg", qualifications: "M.Tech", profileUrl: "/yashaswini-h" },
  { name: "Roshan Sanu Y", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Roshan.jpg", qualifications: "M.Tech", profileUrl: "/roshan-sanu" },
  { name: "Mohammed Javaid", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Mohammedj.jpg", qualifications: "M.S", profileUrl: "/mohammed-ji" },
  { name: "Dr. Pannangi Naresh", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/DrPannangi.jpg", qualifications: "M.Tech, Ph.D", profileUrl: "/dr-pannangi" },
  { name: "Dr. Damodharan D", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty//DrDamodharan.jpg", qualifications: "Ph.D", profileUrl: "/dr-damodharan" },
  { name: "Dr. Chetan V", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/chetan1.jpeg", qualifications: "Ph.D", profileUrl: "/dr-chetan-v" },
  { name: "Soham Ghosh", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Soham.jpg", qualifications: "M.Tech", profileUrl: "/soham-ghosh" },
  { name: "Pavithra D", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Pavithra.jpg", qualifications: "M.Tech", profileUrl: "/d-pavithra" },
  { name: "Annapurna Shobitha S", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/AnnapurnaS.jpg", qualifications: "M.Tech", profileUrl: "/annapurna-s" },
  { name: "Smriti Bharti", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Smriti.jpg", qualifications: "M.Tech", profileUrl: "/smriti-b" },
  { name: "Soumadip Mondal", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Soumadip.jpg", qualifications: "M.Tech", profileUrl: "/soumadip-m" },
  { name: "Ritik Chhatwani", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Ritik.jpg", qualifications: "M.Tech", profileUrl: "/ritik-c" },
  { name: "Shivani", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Shivani.jpg", qualifications: "M.Tech", profileUrl: "/shivani" },
  { name: "Ms. Sweta Chopdar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sweta.jpg", qualifications: "M.Tech", profileUrl: "/sweta-c" },
  { name: "Manas Singha", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Manas_S.jpg", qualifications: "M.Tech", profileUrl: "/manas-s" },
  { name: "Mayank Kumar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Mayank_K.jpg", qualifications: "M.Tech", profileUrl: "/mayank-k" },
  { name: "Praveen Gopal Gaonkar", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Praveen_Gopal.jpg", qualifications: "M.Tech", profileUrl: "/praveen-g" },
  { name: "Preeti  Gajdhane", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Preeti_Gajdhane.jpg", qualifications: "M.Tech", profileUrl: "/preeti-g" },
  { name: "Priya Pudke", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Priya_Pudke.jpg", qualifications: "M.Tech", profileUrl: "/priya-p" },
  { name: "Raunit Maurya", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Raunit.jpg", qualifications: "M.Tech", profileUrl: "/raunit-m" },
  { name: "Rohit Kumar Singh", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Rohit_KS.jpg", qualifications: "M.Tech", interests: ["Robotics", "Autonomous Systems", "Embedded ML"], profileUrl: "/rohit-k" },
  { name: "Rupam Sah", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Rupam_Sah.jpg", qualifications: "M.Tech", profileUrl: "/rupam-s" },
  { name: "Shahid Raza", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Shahid.jpg", qualifications: "M.Tech", profileUrl: "/shahid-r" },
  { name: "Sonali Bairagi", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Sonali_B.jpg", qualifications: "M.Tech", profileUrl: "/sonali-ba" },
  { name: "Suhita Biswas", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Suhita_B.jpg", qualifications: "M.E", profileUrl: "/suhita-b" },
  { name: "Trinadh Singampalli", title: "Assistant Professor", image: "/images/Engineering/CSE-dept/faculty/Trinadh.jpg", qualifications: "M.Tech", profileUrl: "/trinadh-s" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: f.image.startsWith("http") ? f.image : base + f.image,
  profileUrl: f.profileUrl ? (f.profileUrl.startsWith("http") ? f.profileUrl : base + f.profileUrl) : undefined,
}));

export const getFacultyBySlug = (slug: string) => cseFaculty.find((f) => f.slug === slug);
