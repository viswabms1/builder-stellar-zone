import ECEFacultyPageTemplate from "./ECEFacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function ArungalaiVendanPage() {
  const faculty = eceFaculty.find(f => f.slug === "dr-s-arungalai-vendan")!;
  return <ECEFacultyPageTemplate faculty={faculty} />;
}
