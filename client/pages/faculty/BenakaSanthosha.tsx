import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function BenakaSanthoshaPage() {
  const faculty = cseFaculty.find(f => f.slug === "benaka-santhosha-s")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
