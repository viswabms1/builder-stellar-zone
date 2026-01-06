import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { getComputerTechnologyFacultyBySlug } from "@/data/computer-technology-faculty";
import { ChevronLeft } from "lucide-react";
import ComputerTechnologyFacultyPageTemplate from "./faculty/ComputerTechnologyFacultyPageTemplate";

export default function ComputerTechnologyFacultyProfile() {
  const { slug } = useParams();
  const f = slug ? getComputerTechnologyFacultyBySlug(slug) : undefined;

  if (!f) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <section className="px-3 py-8 text-center">
          <h1 className="headline-3 mb-3">Faculty not found</h1>
          <Link to="/academics/engineering/computer-technology/faculty">
            <Button variant="outline"><ChevronLeft className="w-4 h-4 mr-2"/>Back to Faculty</Button>
          </Link>
        </section>
      </div>
    );
  }

  return <ComputerTechnologyFacultyPageTemplate faculty={f} />;
}
