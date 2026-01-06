import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function ViníthaVPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "vinitha-v")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
