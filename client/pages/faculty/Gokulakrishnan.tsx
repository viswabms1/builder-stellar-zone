import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function GokulakrishnanPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-gokulakrishnan-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
