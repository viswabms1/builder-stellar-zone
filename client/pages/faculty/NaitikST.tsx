import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function NaitikSTPage() {
  const faculty = cseFaculty.find(f => f.slug === "naitik-s-t")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
