import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RaunitMauryaPage() {
  const faculty = cseFaculty.find(f => f.slug === "raunit-maurya")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
