import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function YashaswinePage() {
  const faculty = cseFaculty.find(f => f.slug === "yashaswini")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
