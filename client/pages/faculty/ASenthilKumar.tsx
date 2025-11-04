import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function ASenthilKumarPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-a-senthil-kumar")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
