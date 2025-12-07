import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DeepthikaKaruppusamy() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "deepthika-karuppusamy")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
