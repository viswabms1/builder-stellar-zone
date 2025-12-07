import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrIndushreeM() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-indushree-m")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
