import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function AnnapurnaShobilthaPage() {
  const faculty = cseFaculty.find(f => f.slug === "annapurna-shobitha-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
