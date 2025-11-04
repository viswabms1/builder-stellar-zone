import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function KumarDilipPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-kumar-dilip")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
