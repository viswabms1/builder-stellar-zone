import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PannangiNareshPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-pannangi-naresh")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
