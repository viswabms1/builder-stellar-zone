import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function TanvirHabibSardarPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-tanvir-habib-sardar")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
