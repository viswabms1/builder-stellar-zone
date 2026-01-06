import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function MrJosheRaj() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "mr-joshe-raj")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
