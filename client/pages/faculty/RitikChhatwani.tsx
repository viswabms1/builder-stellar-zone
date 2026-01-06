import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function RitikChhatwaniPage() {
  const faculty = cseFaculty.find(f => f.slug === "ritik-chhatwani")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
