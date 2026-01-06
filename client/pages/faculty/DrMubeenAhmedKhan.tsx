import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrMubeenAhmedKhan() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-mubeen-ahmed-khan")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
