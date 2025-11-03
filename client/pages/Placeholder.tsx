import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, ArrowLeft, Sparkles } from "lucide-react";

interface PlaceholderProps {
  title: string;
  description: string;
  comingSoon?: boolean;
}

export default function Placeholder({ 
  title, 
  description, 
  comingSoon = true 
}: PlaceholderProps) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-6 py-12">
      <Card className="max-w-md w-full text-center bg-card/50 backdrop-blur-sm border border-border/50">
        <CardHeader>
          <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            {comingSoon ? (
              <Sparkles className="w-8 h-8 text-neon-purple animate-pulse" />
            ) : (
              <Construction className="w-8 h-8 text-neon-yellow" />
            )}
          </div>
          <CardTitle className="text-2xl font-bold">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              {title}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>
          
          {comingSoon && (
            <div className="inline-flex items-center px-3 py-1 bg-neon-purple/10 rounded-full">
              <span className="text-sm font-medium text-neon-purple">
                Coming Soon
              </span>
            </div>
          )}
          
          <div className="space-y-3">
            <Button 
              asChild
              className="w-full bg-gradient-to-r from-neon-purple to-neon-pink hover:from-neon-pink hover:to-neon-purple text-muted-foreground rounded-xl transition-all duration-300"
            >
              <Link to="/">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Link>
            </Button>
            
            <p className="text-xs text-muted-foreground">
              Want this page prioritized? Let us know what you'd like to see here!
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
