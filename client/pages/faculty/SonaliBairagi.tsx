import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function SonaliBairsgiPage() {
  const faculty = cseFaculty.find(f => f.slug === "sonali-bairagi")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
