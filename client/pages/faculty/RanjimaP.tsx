import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function RanjimaP() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "ranjima-p")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
