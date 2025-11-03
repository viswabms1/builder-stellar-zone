import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import Eligibility from "./pages/Eligibility";
import InternationalAdmissions from "./pages/InternationalAdmissions";
import CampusLife from "./pages/CampusLife";
import Examinations from "./pages/Examinations";
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
import FacultyDirectory from "./pages/FacultyDirectory";
import CDSIMER from "./pages/CDSIMER";
import CDSIMERHospital from "./pages/CDSIMERHospital";
import CDSIMERLife from "./pages/CDSIMERLife";
import DeptAIML from "./pages/DeptAIML";
import DeptCSE from "./pages/DeptCSE";
import IQAC from "./pages/IQAC";
import FacultyCSE from "./pages/FacultyCSE";
import CentreOfExcellence from "./pages/CentreOfExcellence";
import VisionMission from "./pages/VisionMission";
import History from "./pages/History";
import Leadership from "./pages/Leadership";
import BoardOfGovernors from "./pages/BoardOfGovernors";
import BoardOfManagement from "./pages/BoardOfManagement";
import FinanceCommittee from "./pages/FinanceCommittee";
import AcademicCouncil from "./pages/AcademicCouncil";
import Accreditations from "./pages/Accreditations";
import Facilities from "./pages/Facilities";
import Placements from "./pages/Placements";
import { ThemeProvider } from "./providers/theme-provider";
import FacultyProfile from "./pages/FacultyProfile";
import FacultyRohitKumarSingh from "./pages/faculty/RohitKumarSingh";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-background text-foreground">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/academics/engineering" element={<Engineering />} />
              <Route
                path="/academics/computer-applications"
                element={<ComputerApplications />}
              />
              <Route path="/academics/law" element={<Law />} />
              <Route
                path="/academics/management-studies"
                element={<ManagementStudies />}
              />
              <Route
                path="/academics/health-sciences"
                element={<HealthSciences />}
              />
              <Route
                path="/academics/medical-education-research"
                element={<MedicalEducationResearch />}
              />
              <Route
                path="/academics/health-sciences/cdsimer"
                element={<CDSIMER />}
              />
              <Route
                path="/academics/health-sciences/cdsimer/hospital"
                element={<CDSIMERHospital />}
              />
              <Route
                path="/academics/health-sciences/cdsimer/life"
                element={<CDSIMERLife />}
              />
              <Route path="/academics/cee" element={<CEE />} />
              <Route
                path="/academics/journalism-mass-communication"
                element={<JournalismMassComm />}
              />
              <Route
                path="/academics/design/bdesign"
                element={<BDesignOverview />}
              />
              <Route
                path="/academics/basic-applied-sciences"
                element={<AppliedSciences />}
              />
              <Route
                path="/academics/engineering/computer-science"
                element={<DeptCSE />}
              />
              <Route
                path="/academics/engineering/ai-ml"
                element={<DeptAIML />}
              />
              <Route
                path="/academics/engineering/computer-science/faculty"
                element={<FacultyCSE />}
              />
              <Route
                path="/academics/engineering/computer-science/faculty/rohit-kumar-singh"
                element={<FacultyRohitKumarSingh />}
              />
              <Route
                path="/academics/engineering/computer-science/faculty/:slug"
                element={<FacultyProfile />}
              />
              <Route path="/faculty-directory" element={<FacultyDirectory />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/admissions/international" element={<InternationalAdmissions />} />
              <Route path="/eligibility" element={<Eligibility />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/campus-life" element={<CampusLife />} />
              <Route path="/examinations" element={<Examinations />} />
              <Route path="/research" element={<Research />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/vision-mission" element={<VisionMission />} />
              <Route path="/about/history" element={<History />} />
              <Route path="/about/leadership" element={<Leadership />} />
              <Route path="/about/board-of-governors" element={<BoardOfGovernors />} />
              <Route path="/about/board-of-management" element={<BoardOfManagement />} />
              <Route path="/about/finance-committee" element={<FinanceCommittee />} />
              <Route path="/about/academic-council" element={<AcademicCouncil />} />
              <Route path="/about/accreditations" element={<Accreditations />} />
              <Route path="/about/facilities" element={<Facilities />} />
              <Route path="/centre-of-excellence" element={<CentreOfExcellence />} />
              <Route path="/iqac" element={<IQAC />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
