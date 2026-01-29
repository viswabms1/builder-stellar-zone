import { useParams, useNavigate } from "react-router-dom";
import FacultyPageTemplate from "./FacultyPageTemplate";
import { eceFaculty } from "@/data/ece-faculty";

export default function ECEFacultyProfile() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  if (!slug) {
    navigate("/academics/engineering/electronics-communication/faculty");
    return null;
  }

  const faculty = eceFaculty.find(f => f.slug === slug);

  if (!faculty) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Faculty Not Found</h1>
          <p className="text-gray-600 mb-6">The faculty member with slug "{slug}" was not found.</p>
          <button
            onClick={() => navigate("/academics/engineering/electronics-communication/faculty")}
            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Back to ECE Faculty
          </button>
        </div>
      </div>
    );
  }

  return (
    <FacultyPageTemplate
      faculty={faculty}
      department="Electronics & Communication Engineering"
      departmentLink="/academics/engineering/electronics-communication/faculty"
    />
  );
}
