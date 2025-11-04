import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PreetiGajdhanePage() {
  const faculty = cseFaculty.find(f => f.slug === "preeti-gajdhane")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
