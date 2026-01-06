import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function SharanabasappaTadkal() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "sharanabasappa-tadkal")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
