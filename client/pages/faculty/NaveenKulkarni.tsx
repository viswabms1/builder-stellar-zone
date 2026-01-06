import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function NaveenKulkarniPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "naveen-kulkarni")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
