import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function MrBiswajitDebnath() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "mr-biswajit-debnath")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
