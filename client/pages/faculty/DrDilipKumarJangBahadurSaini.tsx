import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrDilipKumarJangBahadurSaini() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-dilip-kumar-jang-bahadur-saini")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
