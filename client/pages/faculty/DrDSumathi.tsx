import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrDSumathi() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-dsumathi")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
