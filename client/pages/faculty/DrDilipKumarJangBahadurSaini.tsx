import FacultyPageTemplate from "./FacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrDilipKumarJangBahadurSainiPage() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-dilip-kumar-jang-bahadur-saini")!;
  return <FacultyPageTemplate faculty={faculty} department="Cybersecurity" departmentLink="/academics/engineering/cybersecurity/faculty" />;
}
