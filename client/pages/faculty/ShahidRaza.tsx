import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ShahidRazaPage() {
  const faculty = cseFaculty.find(f => f.slug === "shahid-raza")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
