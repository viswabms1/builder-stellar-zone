import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const mbaFaculty: Faculty[] = [
  // Dean
  { name: "Capt. Nagaraj Subbarao", title: "Dean, School of Commerce & Management Studies", qualifications: "MBA, M.Phil., PhD in HRM", profileUrl: "/dean-nagaraj-subbarao" },

  // Senior Faculty
  { name: "Dr. S Sai Ganesh", title: "Professor of Marketing, Strategy & Brand Management", qualifications: "Ph.D", profileUrl: "/prof-sai-ganesh" },
  { name: "Dr. M M Bagali", title: "Professor of Management Practices and Human Resources", qualifications: "Ph.D", profileUrl: "/prof-mm-bagali" },
  { name: "Dr Indrajit Goswami", title: "Professor of Strategic Management", qualifications: "Ph.D", profileUrl: "/prof-indrajit-goswami" },
  { name: "Prof. G V Muralidhara", title: "Professor of Practice and Deputy Director, SCMS Case Research Centre", qualifications: "CFA", profileUrl: "/prof-gv-muralidhara" },

  // Associate Professors
  { name: "Dr. Chinmoy Kumar", title: "Associate Professor of IT & Systems Management", qualifications: "Ph.D", profileUrl: "/dr-chinmoy-kumar" },
  { name: "Dr. Nisha Goyal", title: "Associate Professor of Finance", qualifications: "Ph.D", profileUrl: "/dr-nisha-goyal" },
  { name: "Dr. Shweta Kaur Khalsa", title: "Associate Professor of Entrepreneurship and Marketing", qualifications: "Ph.D", profileUrl: "/dr-shweta-khalsa" },

  // Assistant Professors & Faculty
  { name: "Dr. Abhijit Chakraborty", title: "Assistant Professor and Deputy Director (EE)", qualifications: "Ph.D", profileUrl: "/dr-abhijit-chakraborty" },
  { name: "Dr. Suresh Ranganathan", title: "Professor of Marketing and Retail Management", qualifications: "Ph.D", profileUrl: "/prof-suresh-ranganathan" },
  { name: "Dr. Pavithra S", title: "Associate Professor of Human Resource Management", qualifications: "Ph.D", profileUrl: "/dr-pavithra-s" },
  { name: "Dr Somnath Debnath", title: "Associate Professor of Management and Finance", qualifications: "FCMA, Ph.D", profileUrl: "/dr-somnath-debnath" },
  { name: "Dr Silky Sharma", title: "Assistant Professor of OB & HRM", qualifications: "Ph.D", profileUrl: "/dr-silky-sharma" },
  { name: "Dr. Priyanka Roy", title: "Assistant Professor of Finance", qualifications: "Ph.D", profileUrl: "/dr-priyanka-roy" },
  { name: "Dr. Abhijit Ranjan Das", title: "Assistant Professor of Accounting and Finance", qualifications: "Ph.D", profileUrl: "/dr-abhijit-das" },
  { name: "Dr. N. Parthasarathi", title: "Professor of Operations Management", qualifications: "Ph.D", profileUrl: "/prof-parthasarathi" },
  { name: "Prof. Jayashree N", title: "Assistant Professor of Finance", qualifications: "MBA", profileUrl: "/prof-jayashree-n" },
  { name: "Prof. Navita Vijay", title: "Finance Professional and Industry Practitioner", qualifications: "MBA", profileUrl: "/prof-navita-vijay" },
  { name: "Prof. Mohan Srinivasan", title: "Professor of Operations Management", qualifications: "PMP, IBM Certified", profileUrl: "/prof-mohan-srinivasan" },
  { name: "Prof. Anurag Jalan", title: "Professor of Economics, Innovation and General Management", qualifications: "B.Tech, Management Qualification", profileUrl: "/prof-anurag-jalan" },
  { name: "Prof. Vasudevan", title: "Professor of Strategy and Analytics", qualifications: "MBA, Ph.D in Marketing", profileUrl: "/prof-vasudevan" },
  { name: "Prof. Anant Pophali", title: "Senior Level Executive and Adjunct Faculty", qualifications: "", profileUrl: "/prof-anant-pophali" },
  { name: "Prof. Jitendranath Patri", title: "Adjunct Faculty, Entrepreneurship and Marketing", qualifications: "", profileUrl: "/prof-jitendranath-patri" },
  { name: "Prof. Commander Himanshu Joshi", title: "Adjunct Faculty, HR and Leadership", qualifications: "", profileUrl: "/prof-himanshu-joshi" },
  { name: "Prof. Amit K Sinha", title: "Adjunct Faculty, Data Analytics and AI", qualifications: "BTech, MBA", profileUrl: "/prof-amit-sinha" },
  { name: "Dr. Amulya Panda", title: "Professor of Supply Chain Management and Operations", qualifications: "Ph.D", profileUrl: "/prof-amulya-panda" },
  { name: "Prof. H.N. Shankar", title: "Faculty of Business Analytics", qualifications: "", profileUrl: "/prof-hn-shankar" },
  { name: "Prof. A.G. Krishnan", title: "Professor of Finance", qualifications: "CA", profileUrl: "/prof-ag-krishnan" },
  { name: "Prof. M.G. Raghuraman", title: "Faculty of Operations and Project Management", qualifications: "", profileUrl: "/prof-mg-raghuraman" },
  { name: "Prof.Rajat Rashmi", title: "Professor of Legal Aspects of Business and International Finance", qualifications: "CA", profileUrl: "/prof-rajat-rashmi" },
  { name: "Prof.Ramesh N", title: "Professor of Marketing and Satellite Services", qualifications: "", profileUrl: "/prof-ramesh-n" },
  { name: "Prof.Amarnath", title: "Professor of Business Analytics and Statistics", qualifications: "", profileUrl: "/prof-amarnath" },
  { name: "Prof.Sriramu M.S.", title: "Faculty of Business Analytics and Research Methodology", qualifications: "", profileUrl: "/prof-sriramu" },
  { name: "Prof.Ravishankar Iyer", title: "Faculty of Financial Markets and Management Consulting", qualifications: "CFA, SEBI RIA", profileUrl: "/prof-ravishankar-iyer" },
  { name: "Prof Hari Ambadapudi", title: "Professor of Analytics and Decision Sciences", qualifications: "PMP, Six Sigma", profileUrl: "/prof-hari-ambadapudi" },
  { name: "Prof.Tejas Rao", title: "Professor of Strategy and General Management", qualifications: "MBA", profileUrl: "/prof-tejas-rao" },
  { name: "Prof Solai Baskaran", title: "Faculty of Operations and HR Management", qualifications: "LLB, Ph.D", profileUrl: "/prof-solai-baskaran" },
  { name: "Prof. Satish Talikota", title: "Faculty of SAP S4 HANA and ERP Management", qualifications: "", profileUrl: "/prof-satish-talikota" },
  { name: "Prof Srinivas Iyengar", title: "Adjunct Faculty, Information Technology and Finance", qualifications: "", profileUrl: "/prof-srinivas-iyengar" },
  { name: "Prof.Sanjai K", title: "Adjunct Faculty, Information Technology and Enterprise Software", qualifications: "", profileUrl: "/prof-sanjai-k" },
  { name: "Prof.Pramod Deshpande", title: "Adjunct Faculty, Insurance Industry and Technology Solutions", qualifications: "MBA", profileUrl: "/prof-pramod-deshpande" },
  { name: "Prof.Srinivas Padmanabhuni", title: "Faculty of AI, Machine Learning and Software Engineering", qualifications: "Ph.D", profileUrl: "/prof-srinivas-padmanabhuni" },
  { name: "Prof. Archie D'Souza", title: "Faculty of Supply Chain and Project Management", qualifications: "", profileUrl: "/prof-archie-dsouza" },
  { name: "Shashank Narendra", title: "Adjunct Faculty, Sales Leadership and GTM Strategy", qualifications: "MBA", profileUrl: "/shashank-narendra" },
  { name: "Mr. Arnab Sarkar", title: "Adjunct Faculty, Software, Banking and Fintech", qualifications: "BTech, MBA", profileUrl: "/mr-arnab-sarkar" },
  { name: "Prof. Sridharan Narayan", title: "Faculty of Marketing and Brand Consulting", qualifications: "", profileUrl: "/prof-sridharan-narayan" },
  { name: "Sandeep Raman Sharma", title: "Adjunct Faculty, Supply Chain and Operations", qualifications: "BTech", profileUrl: "/sandeep-raman-sharma" },
  { name: "Prof Buchi Babu Muvva", title: "Faculty of Business Research Methods and Analytics", qualifications: "Ph.D", profileUrl: "/prof-buchi-babu" },
  { name: "Sanjay. N", title: "Adjunct Faculty, Global Delivery and AI Adoption", qualifications: "BTech, PG Diploma", profileUrl: "/sanjay-n" },

  // International Visiting Faculty
  { name: "Prof. Chaminda Hettiarachchi", title: "International Visiting Faculty, Project Management", qualifications: "MBA", profileUrl: "/prof-chaminda-hettiarachchi" },
  { name: "Dr Stephen McKenna", title: "International Visiting Faculty, Global HRM", qualifications: "Ph.D", profileUrl: "/dr-stephen-mckenna" },
  { name: "Prof. Lloyd Sanford", title: "International Visiting Faculty, Supply Chain Logistics", qualifications: "", profileUrl: "/prof-lloyd-sanford" },
  { name: "Prof. Venkatesh Raghavendra", title: "International Visiting Faculty, Entrepreneurship", qualifications: "MBA", profileUrl: "/prof-venkatesh-raghavendra" },
  { name: "Prof. Golda El Khoury", title: "International Visiting Faculty, Leadership and Governance", qualifications: "Ph.D", profileUrl: "/prof-golda-elkhoury" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getMBAFacultyBySlug = (slug: string) => mbaFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
