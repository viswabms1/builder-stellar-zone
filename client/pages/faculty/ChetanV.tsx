import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ChetanVPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-chetan-v")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
