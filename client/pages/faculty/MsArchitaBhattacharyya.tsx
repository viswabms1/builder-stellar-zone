import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function MsArchitaBhattacharyya() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "ms-archita-bhattacharyya")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
