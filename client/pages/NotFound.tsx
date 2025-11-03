import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertTriangle, ArrowLeft, Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
      <Card className="max-w-md w-full text-center bg-card/50 backdrop-blur-sm border border-border/50">
        <CardHeader>
          <div className="w-16 h-16 bg-destructive/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-destructive" />
          </div>
          <CardTitle className="text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-pink to-neon-purple bg-clip-text text-transparent">
              404
            </span>
          </CardTitle>
          <CardTitle className="text-2xl font-bold text-foreground">
            Page Not Found
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardDescription className="text-foreground leading-relaxed">
            Oops! The page you're looking for seems to have vanished into the digital void. 
            Don't worry, we'll help you get back on track.
          </CardDescription>
          
          <div className="space-y-3">
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-foreground rounded-xl transition-all duration-300"
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <Button 
              variant="outline"
              onClick={() => window.history.back()}
              className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-background rounded-xl transition-all duration-300"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotFound;
