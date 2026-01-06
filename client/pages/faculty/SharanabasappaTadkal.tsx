import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function SharanabasappaTadkalPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "sharanabasappa-tadkal")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
