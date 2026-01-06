import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PraveenKulkarniPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-praveen-kulkarni")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
