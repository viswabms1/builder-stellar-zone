import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function JSebastianNixonPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-j-sebastian-nixon")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
