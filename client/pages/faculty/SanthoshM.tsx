import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SanthoshMPage() {
  const faculty = cseFaculty.find(f => f.slug === "santhosh-m")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
