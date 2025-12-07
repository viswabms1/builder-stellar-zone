import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function ViníthaV() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "vinitha-v")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
