import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RameshSPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-ramesh-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
