import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function MsSayeliDey() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "ms-sayeli-dey")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
