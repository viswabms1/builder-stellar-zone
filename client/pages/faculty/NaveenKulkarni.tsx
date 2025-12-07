import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function NaveenKulkarni() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "naveen-kulkarni")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
