import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrPrajwalasimhaSN() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-prajwalasimha-s-n")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
