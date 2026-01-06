import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SwetaChopdarPage() {
  const faculty = cseFaculty.find(f => f.slug === "ms-sweta-chopdar")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
