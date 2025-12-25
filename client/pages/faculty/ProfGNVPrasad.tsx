import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function ProfGNVPrasadPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "prof-g-n-v-prasad")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
