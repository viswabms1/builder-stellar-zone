import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function PuttamadappaECEPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-puttamadappa-c")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
