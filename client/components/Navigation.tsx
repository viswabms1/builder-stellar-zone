import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Menu, 
  X, 
  GraduationCap, 
  Home, 
  BookOpen, 
  Users, 
  Building,
  FlaskConical,
  Calendar,
  ChevronDown 
} from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Academics", href: "/academics", icon: BookOpen },
    { name: "Admissions", href: "/admissions", icon: GraduationCap },
    { name: "Campus Life", href: "/campus-life", icon: Building },
    { name: "Research", href: "/research", icon: FlaskConical },
    { name: "About", href: "/about", icon: Users },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Following brand guidelines: minimum 128px x 35px */}
          <Link to="/" className="flex items-center space-x-3 group" style={{ minWidth: '128px', minHeight: '35px' }}>
            <div className="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-gilroy font-semibold bg-brand-gradient bg-clip-text text-transparent">
                Dayananda Sagar
              </span>
              <span className="text-xs text-muted-foreground -mt-1 font-graphik">University</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium font-gilroy transition-all duration-200 group ${
                  isActive(item.href)
                    ? "bg-brand-magenta/10 text-brand-magenta"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
                {isActive(item.href) && (
                  <div className="w-1 h-1 bg-brand-magenta rounded-full" />
                )}
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="text-muted-foreground hover:text-foreground font-gilroy"
            >
              Student Portal
            </Button>
            <Button 
              size="sm"
              className="bg-brand-gradient hover:opacity-90 text-white px-6 rounded-xl shadow-lg hover:shadow-brand-magenta/25 transition-all duration-300 font-gilroy font-semibold"
            >
              Apply Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-lg">
          <div className="px-6 py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium font-gilroy transition-all duration-200 ${
                  isActive(item.href)
                    ? "bg-brand-magenta/10 text-brand-magenta"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border/50">
              <Button 
                variant="ghost" 
                size="sm"
                className="w-full justify-start text-muted-foreground hover:text-foreground font-gilroy"
              >
                Student Portal
              </Button>
              <Button 
                size="sm"
                className="w-full bg-brand-gradient hover:opacity-90 text-white rounded-xl shadow-lg hover:shadow-brand-magenta/25 transition-all duration-300 font-gilroy font-semibold"
              >
                Apply Now
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
