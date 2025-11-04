import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function GirishaGSPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-girisha-g-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
