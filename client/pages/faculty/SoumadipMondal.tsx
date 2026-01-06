import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SoumadipMondalPage() {
  const faculty = cseFaculty.find(f => f.slug === "soumadip-mondal")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
