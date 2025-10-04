import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
  CalendarClock
} from "lucide-react";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Academics", href: "/academics", icon: BookOpen },
    { name: "Admissions", href: "/admissions", icon: GraduationCap },
    { name: "Examinations", href: "/examinations", icon: CalendarClock },
    { name: "Campus Life", href: "/campus-life", icon: Building },
    { name: "Research", href: "/research", icon: FlaskConical },
    { name: "About", href: "/about", icon: Users },
    {
      name: "Public Self Disclosure",
      href: "https://www.dsu.edu.in/images/University/Public_Self_Disclosure_DSU.pdf",
      icon: Calendar,
      external: true
    }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 border-b border-orange-600/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Official DSU Logo */}
          <Link to="/" className="flex items-center group" style={{ minWidth: '128px', minHeight: '35px' }}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7780ec15004a435f8de3f5f98762eed4?format=webp&width=800"
              alt="Dayananda Sagar University Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              style={{ minHeight: '35px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const active = !item.external && isActive(item.href);
              const sharedClasses = `flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium font-gilroy transition-all duration-200 group ${
                active ? "bg-white/20 text-white font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className={sharedClasses}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              }

              return (
                <Link key={item.name} to={item.href} className={sharedClasses}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {active && <div className="w-1 h-1 bg-white rounded-full" />}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              className="text-white/80 hover:text-white hover:bg-white/10 font-gilroy"
            >
              Student Portal
            </Button>
            <Button
              size="sm"
              className="bg-white text-orange-600 hover:bg-white/90 px-6 rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 font-gilroy font-semibold"
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
              className="text-white/80 hover:text-white"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-600/20 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="px-6 py-4 space-y-3">
            {navigation.map((item) => {
              const active = !item.external && isActive(item.href);
              const sharedClasses = `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium font-gilroy transition-all duration-200 ${
                active ? "bg-white/20 text-white font-semibold" : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (item.external) {
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setIsOpen(false)}
                    className={sharedClasses}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </a>
                );
              }

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={sharedClasses}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <div className="pt-4 space-y-3 border-t border-white/20">
              <Button
                variant="ghost"
                size="sm"
                className="w-full justify-start text-white/80 hover:text-white hover:bg-white/10 font-gilroy"
              >
                Student Portal
              </Button>
              <Button
                size="sm"
                className="w-full bg-white text-orange-600 hover:bg-white/90 rounded-xl shadow-lg hover:shadow-white/25 transition-all duration-300 font-gilroy font-semibold"
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
