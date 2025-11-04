import FacultyPageTemplate from "./FacultyPageTemplate";
import { cseFaculty } from "@/data/cse-faculty";

export default function NatarajanVenkateswaranPage() {
  const faculty = cseFaculty.find(f => f.slug === "natarajan-venkateswaran")!;
  return <FacultyPageTemplate faculty={faculty} />;
}
