import CybersecurityFacultyPageTemplate from "./CybersecurityFacultyPageTemplate";
import { cybersecurityFaculty } from "@/data/cybersecurity-faculty";

export default function DrDevipriyaVS() {
  const faculty = cybersecurityFaculty.find(f => f.slug === "dr-devipriya-v-s")!;
  return <CybersecurityFacultyPageTemplate faculty={faculty} />;
}
