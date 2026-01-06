import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function DamodharanDPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-damodharan-d")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
