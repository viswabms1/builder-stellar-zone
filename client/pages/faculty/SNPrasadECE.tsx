import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function SNPrasadECEPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-s-n-prasad")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
