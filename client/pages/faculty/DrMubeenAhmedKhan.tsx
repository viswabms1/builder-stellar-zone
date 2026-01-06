import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrMubeenAhmedKhanPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-mubeen-ahmed-khan")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
