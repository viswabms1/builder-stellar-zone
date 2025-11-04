import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function GousiaThahniyathPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-gousia-thahniyath")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
