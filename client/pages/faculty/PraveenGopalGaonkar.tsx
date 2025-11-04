import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function PraveenGopalGaonkarPage() {
  const faculty = cseFaculty.find(f => f.slug === "praveen-gopal-gaonkar")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
