import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrDurbadalChattaraj() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-durbadal-chattaraj")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
