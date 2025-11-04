import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ShashikiranVPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-shashikiran-v")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
