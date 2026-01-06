import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function RanjimaPPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "ranjima-p")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
