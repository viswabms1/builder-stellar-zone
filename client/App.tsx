import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Index from "./pages/Index";
import Placeholder from "./pages/Placeholder";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background text-foreground">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route 
              path="/academics" 
              element={
                <Placeholder 
                  title="Academics" 
                  description="Explore our comprehensive academic programs across Engineering, Business, Liberal Arts, and Sciences. Discover cutting-edge curricula designed for tomorrow's leaders." 
                />
              } 
            />
            <Route 
              path="/admissions" 
              element={
                <Placeholder 
                  title="Admissions" 
                  description="Start your journey at Dayananda Sagar University. Learn about admission requirements, application deadlines, scholarships, and how to apply." 
                />
              } 
            />
            <Route 
              path="/campus-life" 
              element={
                <Placeholder 
                  title="Campus Life" 
                  description="Experience the vibrant campus community with 100+ student organizations, cultural events, sports, and modern facilities that make DSU feel like home." 
                />
              } 
            />
            <Route 
              path="/research" 
              element={
                <Placeholder 
                  title="Research" 
                  description="Discover groundbreaking research initiatives and innovation centers. Join faculty and students in advancing knowledge across multiple disciplines." 
                />
              } 
            />
            <Route 
              path="/about" 
              element={
                <Placeholder 
                  title="About DSU" 
                  description="Learn about our history, mission, vision, and commitment to academic excellence. Discover what makes Dayananda Sagar University a leader in higher education." 
                />
              } 
            />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
