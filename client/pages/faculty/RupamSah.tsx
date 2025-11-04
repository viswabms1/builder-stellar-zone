import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RupamSahPage() {
  const faculty = cseFaculty.find(f => f.slug === "rupam-sah")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
