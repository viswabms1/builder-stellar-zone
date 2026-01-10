import { FacultyEntry } from "@/shared/api";

function make(name: string) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]/g, "");
}

const base = "https://www.dsu.edu.in";

export const appliedSciencesFaculty: Faculty[] = [
  // Dean
  {
    name: "Dr. Sunil S. More",
    title: "Professor & Dean",
    qualifications: "Ph.D in Biochemistry",
    profileUrl: "/academics/basic-applied-sciences/faculty/sunil-more",
  },
  // Associate Professors
  {
    name: "Dr. Susweta Das",
    title: "Associate Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/susweta-das",
  },
  {
    name: "Dr. Blessy Baby Mathew",
    title: "Associate Professor",
    qualifications: "M.Tech, Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/blessy-mathew",
  },
  {
    name: "Dr. Aneesa Fasim",
    title: "Associate Professor",
    qualifications: "M.Sc, Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/aneesa-fasim",
  },
  {
    name: "Dr. Santosh Choudhari",
    title: "Associate Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/santosh-choudhari",
  },
  {
    name: "Dr. Ajay Nair",
    title: "Associate Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/ajay-nair",
  },
  {
    name: "Dr. Archana S Rao",
    title: "Associate Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/archana-rao",
  },
  // Assistant Professors
  {
    name: "Dr. Manjula N G",
    title: "Assistant Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/manjula-ng",
  },
  {
    name: "Dr. Dinesh S.M",
    title: "Assistant Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/dinesh-sm",
  },
  {
    name: "Dr. Vineetha MS",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/vineetha-ms",
  },
  {
    name: "Dr. Shristi Ram",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/shristi-ram",
  },
  {
    name: "Dr. Sangeetha Gowda K R",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/sangeetha-gowda",
  },
  {
    name: "Dr. Neha Deora",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/neha-deora",
  },
  {
    name: "Dr. Anoop R Markande",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/anoop-markande",
  },
  {
    name: "Dr. Pavithra A J",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/pavithra-aj",
  },
  {
    name: "Dr. Nayana Borah",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/nayana-borah",
  },
  {
    name: "Dr. Ullas Prasanna S",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/ullas-prasanna",
  },
  {
    name: "Dr. Jayachandra K",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/jayachandra-k",
  },
  {
    name: "Dr. Prakruti P Acharya",
    title: "Assistant Professor",
    qualifications: "M.Sc Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/prakruti-acharya",
  },
  {
    name: "Dr. Shyamala K. Venkatesh",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/shyamala-venkatesh",
  },
  {
    name: "Dr. Kumar Perinbam",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/kumar-perinbam",
  },
  {
    name: "Dr. Arpi Dey",
    title: "Assistant Professor",
    qualifications: "Ph.D",
    profileUrl: "/academics/basic-applied-sciences/faculty/arpi-dey",
  },
  {
    name: "Dr. Bhavya J",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/bhavya-j",
  },
  {
    name: "Dr. Anantha Krishna T H",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/anantha-krishna",
  },
  {
    name: "Dr. S Geetha Priya",
    title: "Assistant Professor",
    qualifications: "M.Tech, Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/geetha-priya",
  },
  {
    name: "Dr. Pronama Biswas",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/pronama-biswas",
  },
  {
    name: "Dr. Manjushree H K",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/manjushree-hk",
  },
  {
    name: "Dr. Moulika Bhattacharyya",
    title: "Assistant Professor",
    qualifications: "M.Sc Ph.D.",
    profileUrl:
      "/academics/basic-applied-sciences/faculty/moulika-bhattacharyya",
  },
  {
    name: "Dr. Feroza Owaice",
    title: "Assistant Professor",
    qualifications: "Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/feroza-owaice",
  },
  {
    name: "Dr. Chinmayee C V",
    title: "Assistant Professor",
    qualifications: "M.Sc Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/chinmayee-cv",
  },
  {
    name: "Ms. Rashmi R",
    title: "Assistant Professor",
    qualifications: "M.Sc, B.Ed., Ph.D.",
    profileUrl: "/academics/basic-applied-sciences/faculty/rashmi-r",
  },
].map((f) => ({
  ...f,
  slug: make(f.name),
  image: `https://ui-avatars.com/api/?name=${encodeURIComponent(f.name)}&background=random&color=fff`,
  profileUrl: f.profileUrl ? base + f.profileUrl : undefined,
}));

export const getAppliedSciencesFacultyBySlug = (slug: string) =>
  appliedSciencesFaculty.find((f) => f.slug === slug);

export type Faculty = FacultyEntry;
