import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function ProfGNVPrasad() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "prof-g-n-v-prasad")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
