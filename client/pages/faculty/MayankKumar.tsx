import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function MayankKumarPage() {
  const faculty = cseFaculty.find(f => f.slug === "mayank-kumar")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
