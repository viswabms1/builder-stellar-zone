import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function MsArchitaBhattacharyyaPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "ms-archita-bhattacharyya")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
