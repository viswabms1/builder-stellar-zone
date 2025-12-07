import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrGHemanthKumar() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-g-hemanth-kumar")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
