import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RupamBhagawatiPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-rupam-bhagawati")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
