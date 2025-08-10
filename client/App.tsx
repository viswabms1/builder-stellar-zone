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
              path="/features" 
              element={
                <Placeholder 
                  title="Features" 
                  description="Discover all the amazing features that make our platform the go-to choice for modern creators. From AI-powered design tools to lightning-fast deployment." 
                />
              } 
            />
            <Route 
              path="/gallery" 
              element={
                <Placeholder 
                  title="Gallery" 
                  description="Explore stunning creations from our community of talented designers and developers. Get inspired and find templates for your next project." 
                />
              } 
            />
            <Route 
              path="/community" 
              element={
                <Placeholder 
                  title="Community" 
                  description="Connect with creators, share your work, and collaborate on exciting projects. Join thousands of passionate builders in our vibrant community." 
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
