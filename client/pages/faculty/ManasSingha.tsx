import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ManasSinghaPage() {
  const faculty = cseFaculty.find(f => f.slug === "manas-singha")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
