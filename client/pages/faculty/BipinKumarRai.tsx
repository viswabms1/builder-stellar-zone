import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function BipinKumarRaiPage() {
  const faculty = cseFaculty.find(f => f.slug === "dr-bipin-kumar-rai")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
