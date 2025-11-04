import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PrabhakarMPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-prabhakar-m")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
