import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SKMouleeswaranPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-s-k-mouleeswaran")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
