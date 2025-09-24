import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Academics from "./pages/Academics";
import Admissions from "./pages/Admissions";
import CampusLife from "./pages/CampusLife";
import Research from "./pages/Research";
import Engineering from "./pages/Engineering";
import DeptCSE from "./pages/DeptCSE";
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
            <Route path="/academics/engineering/computer-science" element={<DeptCSE />} />
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
