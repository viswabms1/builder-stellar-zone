import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function MeenakshiMalhotraPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-meenakshi-malhotra")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
