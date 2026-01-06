import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const journalismFaculty: Faculty[] = [
  { name: "Dr. K Sai Prasad", title: "Professor & Dean", specialization: "Marketing, IMC, Advertising, Public Relations", profileUrl: "/sai-prasad" },
  { name: "Dr Rekha Datta", title: "Associate Professor", specialization: "English Literature, Writing, Theatre", profileUrl: "/rekha-dutta" },
  { name: "Dr. Garima Singh", title: "Assistant Professor", specialization: "Media Research, Cultural Studies, Psychoanalysis and Gender Studies", profileUrl: "/garima-singh" },
  { name: "Dr. Meghana HR", title: "Adjunct Faculty", specialization: "Journalism, Psychology", profileUrl: "/meghana-hr" },
  { name: "B R Viswanath", title: "Adjunct Faculty", specialization: "Visual Arts & Filmmaking", profileUrl: "/viswanath" },
  { name: "Surendran Unni", title: "Adjunct Faculty", specialization: "Marketing Communication", profileUrl: "/surendran-unni" },
  { name: "Geetha Shankar", title: "Adjunct Faculty", specialization: "Gender Studies", profileUrl: "/geetha-shankar" },
  { name: "Lakshmana (Venkat) Kuchi", title: "Adjunct Faculty", specialization: "Media Professional - Journalism and Content Management", profileUrl: "/lakshmana-kuchi" },
  { name: "Rakesh Katarey", title: "Former Documentary Filmmaker", specialization: "TV Production, Cinema, Media Studies and Rhetorical Analysis", profileUrl: "/rakesh-katarey" },
  { name: "Madhu Uddeboranahalli", title: "Technical Faculty", specialization: "Videography, Audiovisual Production (formerly with Bloomberg TV India, ANI)", profileUrl: "/madhu-uddeboranahalli" },
  { name: "Dr. Rajeesh Kumar T V", title: "Assistant Professor", specialization: "Journalism Studies, Political Economy of Media, Geopolitics and Media, Critical Media Studies, and Political Communication", profileUrl: "/rajeesh-kumar-tv" },
  { name: "Surabhi Vashisht", title: "Adjunct Faculty", specialization: "Theatre", profileUrl: "/surabhi-vashisht" },
  { name: "Aditya Garg", title: "Adjunct Faculty", specialization: "Digital Content Creation", profileUrl: "/aditya-garg" },
  { name: "Priyamvada", title: "Adjunct Faculty", specialization: "Radio", profileUrl: "/priyamvada" },
  { name: "Pallavi Priyadarshini", title: "Adjunct Faculty", specialization: "Podcasting", profileUrl: "/pallavi-priyadarshini" },
  { name: "Varsha Ramachandra", title: "Adjunct Faculty", specialization: "Radio, Podcasting, Films and Television, and Audio OTT", profileUrl: "/varsha-ramachandra" },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getJournalismFacultyBySlug = (slug: string) => journalismFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry & { specialization?: string };
