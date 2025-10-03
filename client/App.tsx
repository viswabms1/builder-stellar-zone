import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Research from "./pages/Research";
import Engineering from "./pages/Engineering";
import ComputerApplications from "./pages/ComputerApplications";
import Law from "./pages/Law";
import AppliedSciences from "./pages/AppliedSciences";
import ManagementStudies from "./pages/ManagementStudies";
import HealthSciences from "./pages/HealthSciences";
import MedicalEducationResearch from "./pages/MedicalEducationResearch";
import CEE from "./pages/CEE";
import JournalismMassComm from "./pages/JournalismMassComm";
import BDesignOverview from "./pages/BDesignOverview";
import CDSIMER from "./pages/CDSIMER";
import CDSIMERHospital from "./pages/CDSIMERHospital";
import CDSIMERLife from "./pages/CDSIMERLife";
import DeptCSE from "./pages/DeptCSE";
import FacultyCSE from "./pages/FacultyCSE";
import FacultyProfile from "./pages/FacultyProfile";
import FacultyRohitKumarSingh from "./pages/faculty/RohitKumarSingh";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/academics/engineering" element={<Engineering />} />
            <Route path="/academics/computer-applications" element={<ComputerApplications />} />
            <Route path="/academics/law" element={<Law />} />
            <Route path="/academics/management-studies" element={<ManagementStudies />} />
            <Route path="/academics/health-sciences" element={<HealthSciences />} />
            <Route path="/academics/medical-education-research" element={<MedicalEducationResearch />} />
            <Route path="/academics/health-sciences/cdsimer" element={<CDSIMER />} />
            <Route path="/academics/health-sciences/cdsimer/hospital" element={<CDSIMERHospital />} />
            <Route path="/academics/health-sciences/cdsimer/life" element={<CDSIMERLife />} />
            <Route path="/academics/cee" element={<CEE />} />
            <Route path="/academics/journalism-mass-communication" element={<JournalismMassComm />} />
            <Route path="/academics/design/bdesign" element={<BDesignOverview />} />
            <Route path="/academics/basic-applied-sciences" element={<AppliedSciences />} />
            <Route path="/academics/engineering/computer-science" element={<DeptCSE />} />
            <Route path="/academics/engineering/computer-science/faculty" element={<FacultyCSE />} />
            <Route path="/academics/engineering/computer-science/faculty/rohit-kumar-singh" element={<FacultyRohitKumarSingh />} />
            <Route path="/academics/engineering/computer-science/faculty/:slug" element={<FacultyProfile />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/campus-life" element={<CampusLife />} />
            <Route path="/research" element={<Research />} />
            <Route path="/about" element={<About />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
