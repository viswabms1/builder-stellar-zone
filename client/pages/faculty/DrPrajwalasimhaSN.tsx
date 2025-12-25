import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrPrajwalasimhaSNPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-prajwalasimha-s-n")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
