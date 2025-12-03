import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";
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
  const { theme } = useTheme();

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
    <nav className={`sticky top-0 z-50 backdrop-blur-md transition-all duration-300 ${
      theme === 'light'
        ? 'bg-white/80 border-b border-gray-200/30'
        : 'bg-transparent bg-white/5 border-b border-white/10'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Official DSU Logo */}
          <Link
            to="/"
            className="flex items-center group flex-shrink-0 -ml-40"
            style={{ minHeight: "60px" }}
          >
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc9f5a55fa7004ae596d21cc4fa4aed1f?format=webp&width=1200"
              alt="Dayananda Sagar University Logo"
              className="h-24 w-auto object-contain group-hover:scale-105 transition-all duration-300"
              style={{ minHeight: "60px" }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const sharedClasses = `flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium font-display transition-all duration-200 group ${
                theme === 'light'
                  ? active || (isAbout && aboutMenuOpen)
                    ? "bg-orange-100 text-orange-900 font-semibold"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-100"
                  : active || (isAbout && aboutMenuOpen)
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
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                      {active && <div className={`w-1 h-1 rounded-full ${
                        theme === 'light' ? 'bg-orange-600' : 'bg-white'
                      }`} />}
                    </button>

                    {/* Mega Menu Dropdown */}
                    <div className={`absolute left-0 top-full mt-0 w-64 rounded-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4 ${
                      theme === 'light'
                        ? 'bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 border border-orange-200'
                        : 'bg-gradient-to-b from-orange-600 to-red-700 text-white'
                    }`}>
                      {aboutSubmenus.map((submenu) => (
                        <Link
                          key={submenu.name}
                          to={submenu.href}
                          className={`block px-6 py-3 transition-colors text-sm ${
                            theme === 'light'
                              ? 'hover:bg-orange-200 border-b border-orange-200 last:border-b-0'
                              : 'hover:bg-white/20 border-b border-white/20 last:border-b-0'
                          }`}
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
                  <span>{item.name}</span>
                  {active && <div className={`w-1 h-1 rounded-full ${
                    theme === 'light' ? 'bg-orange-600' : 'bg-white'
                  }`} />}
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
              className={`gap-2 ${
                theme === 'light'
                  ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
                  : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              <Search className="w-4 h-4" />
              <span className={`hidden lg:inline text-xs ${
                theme === 'light'
                  ? 'text-gray-500'
                  : 'text-white/60'
              }`}>
                Cmd+K
              </span>
            </Button>
            <LanguageSwitcher />
            <ThemeToggle className={theme === 'light'
              ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
              : 'text-white/80 hover:text-white hover:bg-white/10'
            } />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={theme === 'light'
                ? 'text-gray-700 hover:text-orange-600'
                : 'text-white/80 hover:text-white'
              }
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
        <div className={`md:hidden border-t ${
          theme === 'light'
            ? 'border-orange-200/30 bg-gradient-to-r from-orange-50 to-orange-100'
            : 'border-orange-600/20 bg-gradient-to-r from-orange-500 to-red-600'
        }`}>
          <div className="px-6 py-4 space-y-3">
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const sharedClasses = `flex items-center space-x-3 px-4 py-3 rounded-xl text-sm font-medium font-display transition-all duration-200 ${
                theme === 'light'
                  ? active
                    ? "bg-orange-200 text-orange-900 font-semibold"
                    : "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : active
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
                      <span className="flex-1">{item.name}</span>
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${
                          aboutMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Mobile About Submenu */}
                    {aboutMenuOpen && (
                      <div className={`rounded-lg py-2 ml-4 border-l-2 ${
                        theme === 'light'
                          ? 'bg-orange-100 border-l-orange-300'
                          : 'bg-white/20 border-l-white/40'
                      }`}>
                        {aboutSubmenus.map((submenu, subIdx) => (
                          <Link
                            key={subIdx}
                            to={submenu.href}
                            onClick={() => {
                              setIsOpen(false);
                              setAboutMenuOpen(false);
                            }}
                            className={`block px-4 py-2 text-sm rounded transition-colors ${
                              theme === 'light'
                                ? 'text-gray-700 hover:bg-orange-200'
                                : 'text-white hover:bg-white/20'
                            }`}
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
            <div className={`pt-4 space-y-3 border-t ${
              theme === 'light'
                ? 'border-orange-200'
                : 'border-white/20'
            }`}>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchOpen(true);
                  setIsOpen(false);
                }}
                className={`w-full text-left justify-start gap-3 ${
                  theme === 'light'
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </Button>
              <ThemeToggle
                className={`self-start ${
                  theme === 'light'
                    ? 'text-gray-700 hover:text-orange-600 hover:bg-orange-100'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
                }`}
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
