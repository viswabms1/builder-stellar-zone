import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/providers/language-provider";
import {
  Menu,
  X,
  GraduationCap,
  Home,
  BookOpen,
  Users,
  Building,
  Calendar,
  Lightbulb,
  ChevronDown,
  Search,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const aboutSubmenus = [
    { name: "About DSU", href: "/about" },
    { name: t("nav.vision"), href: "/about/vision-mission" },
    { name: t("nav.history"), href: "/about/history" },
    { name: t("nav.leadership"), href: "/about/leadership" },
    { name: "Administrative Committees", href: "/about/leadership#administrative-committees" },
    { name: "Accreditations", href: "/about/accreditations" },
    { name: t("nav.facilities"), href: "/about/facilities" },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/", icon: Home },
    { name: t("nav.about"), href: "/about", icon: Users },
    { name: t("nav.academics"), href: "/academics", icon: BookOpen },
    { name: t("nav.admissions"), href: "/admissions", icon: GraduationCap },
    { name: t("nav.campusLife"), href: "/campus-life", icon: Building },
    { name: t("nav.centreOfExcellence"), href: "/centre-of-excellence", icon: Lightbulb },
    { name: t("nav.placements"), href: "/placements", icon: GraduationCap },
    {
      name: t("nav.publicSelfDisclosure"),
      href: "https://www.dsu.edu.in/images/University/Public_Self_Disclosure_DSU.pdf",
      icon: Calendar,
      external: true,
    },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-orange-500 to-red-600 border-b border-orange-600/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Official DSU Logo */}
          <Link
            to="/"
            className="flex items-center group"
            style={{ minWidth: "128px", minHeight: "35px" }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F7780ec15004a435f8de3f5f98762eed4?format=webp&width=800"
              alt="Dayananda Sagar University Logo"
              className="h-16 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              style={{ minHeight: "35px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const sharedClasses = `flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-200 group ${
                active || (isAbout && aboutMenuOpen)
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (item.external) {
                return (
                  <a
                    key={idx}
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

              if (isAbout) {
                return (
                  <div
                    key={idx}
                    className="relative group"
                    onMouseEnter={() => setAboutMenuOpen(true)}
                    onMouseLeave={() => setAboutMenuOpen(false)}
                  >
                    <button className={sharedClasses}>
                      <item.icon className="w-4 h-4" />
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                      {active && <div className="w-1 h-1 bg-white rounded-full" />}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div className="absolute left-0 top-full mt-0 w-64 bg-gradient-to-b from-orange-600 to-red-700 text-white rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                      {aboutSubmenus.map((submenu) => (
                        <Link
                          key={submenu.name}
                          to={submenu.href}
                          className="block px-6 py-3 hover:bg-white/20 transition-colors text-sm border-b border-white/20 last:border-b-0"
                        >
                          {submenu.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link key={idx} to={item.href} className={sharedClasses}>
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                  {active && <div className="w-1 h-1 bg-white rounded-full" />}
                </Link>
              );
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="text-white/80 hover:text-white hover:bg-white/10 gap-2"
            >
              <Search className="w-4 h-4" />
              <span className="hidden lg:inline text-xs text-white/60">
                Cmd+K
              </span>
            </Button>
            <LanguageSwitcher />
            <ThemeToggle className="text-white/80 hover:text-white hover:bg-white/10" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-white/80 hover:text-white"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-orange-600/20 bg-gradient-to-r from-orange-500 to-red-600">
          <div className="px-6 py-4 space-y-3">
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const sharedClasses = `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium font-display transition-all duration-200 ${
                active
                  ? "bg-white/20 text-white font-semibold"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (item.external) {
                return (
                  <a
                    key={idx}
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

              if (isAbout) {
                return (
                  <div key={idx} className="space-y-2">
                    <button
                      onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                      className={`w-full text-left ${sharedClasses}`}
                    >
                      <item.icon className="w-4 h-4" />
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          aboutMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile About Submenu */}
                    {aboutMenuOpen && (
                      <div className="bg-white/20 rounded-lg py-2 ml-4 border-l-2 border-white/40">
                        {aboutSubmenus.map((submenu, subIdx) => (
                          <Link
                            key={subIdx}
                            to={submenu.href}
                            onClick={() => {
                              setIsOpen(false);
                              setAboutMenuOpen(false);
                            }}
                            className="block px-4 py-2 text-sm text-white hover:bg-white/20 rounded transition-colors"
                          >
                            {submenu.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
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
                onClick={() => {
                  setSearchOpen(true);
                  setIsOpen(false);
                }}
                className="w-full text-left text-white/80 hover:text-white hover:bg-white/10 justify-start gap-3"
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </Button>
              <ThemeToggle
                className="self-start text-white/80 hover:text-white hover:bg-white/10"
                onToggle={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
}
