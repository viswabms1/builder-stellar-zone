import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTheme } from "@/providers/theme-provider";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  ArrowRight,
  Home as HomeIcon,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [topBarHeight, setTopBarHeight] = useState(0);
  const [navBarHeight, setNavBarHeight] = useState(0);
  const [isNavFixed, setIsNavFixed] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const [alumniMenuOpen, setAlumniMenuOpen] = useState(false);
  const [libraryMenuOpen, setLibraryMenuOpen] = useState(false);
  const [internationalAdmissionsMenuOpen, setInternationalAdmissionsMenuOpen] =
    useState(false);
  const [
    internationalAdmissionsMobileMenuOpen,
    setInternationalAdmissionsMobileMenuOpen,
  ] = useState(false);
  const [internationalAdmissionsPosition, setInternationalAdmissionsPosition] =
    useState<{ top: number; left: number } | null>(null);
  const [expandedSubGroups, setExpandedSubGroups] = useState<Set<string>>(
    new Set(),
  );
  const [searchOpen, setSearchOpen] = useState(false);
  const aboutCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const academicsCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const internationalAdmissionsCloseTimeoutRef = useRef<NodeJS.Timeout | null>(
    null,
  );
  const internationalAdmissionsButtonRef = useRef<HTMLAnchorElement>(null);
  const topBarRef = useRef<HTMLDivElement>(null);
  const navBarRef = useRef<HTMLElement>(null);
  const location = useLocation();
  const { theme } = useTheme();

  const handleAboutMenuLeave = () => {
    aboutCloseTimeoutRef.current = setTimeout(() => {
      setAboutMenuOpen(false);
    }, 300);
  };

  const handleAboutMenuEnter = () => {
    if (aboutCloseTimeoutRef.current) {
      clearTimeout(aboutCloseTimeoutRef.current);
      aboutCloseTimeoutRef.current = null;
    }
    setAboutMenuOpen(true);
  };

  const handleAcademicsMenuLeave = () => {
    academicsCloseTimeoutRef.current = setTimeout(() => {
      setAcademicsMenuOpen(false);
    }, 300);
  };

  const handleAcademicsMenuEnter = () => {
    if (academicsCloseTimeoutRef.current) {
      clearTimeout(academicsCloseTimeoutRef.current);
      academicsCloseTimeoutRef.current = null;
    }
    setAcademicsMenuOpen(true);
  };

  const handleInternationalAdmissionsMenuLeave = () => {
    internationalAdmissionsCloseTimeoutRef.current = setTimeout(() => {
      setInternationalAdmissionsMenuOpen(false);
    }, 300);
  };

  const handleInternationalAdmissionsMenuEnter = () => {
    if (internationalAdmissionsCloseTimeoutRef.current) {
      clearTimeout(internationalAdmissionsCloseTimeoutRef.current);
      internationalAdmissionsCloseTimeoutRef.current = null;
    }
    setInternationalAdmissionsMenuOpen(true);
  };

  const toggleSubGroup = (schoolName: string, groupName: string) => {
    const key = `${schoolName}-${groupName}`;
    const newSet = new Set(expandedSubGroups);
    if (newSet.has(key)) {
      newSet.delete(key);
    } else {
      newSet.add(key);
    }
    setExpandedSubGroups(newSet);
  };

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

  useEffect(() => {
    const updateHeights = () => {
      setTopBarHeight(topBarRef.current?.offsetHeight ?? 0);
      setNavBarHeight(navBarRef.current?.offsetHeight ?? 0);
    };

    updateHeights();
    window.addEventListener("resize", updateHeights);
    return () => window.removeEventListener("resize", updateHeights);
  }, []);

  // Calculate position for International Admissions submenu - above the nav bar
  useEffect(() => {
    const updatePosition = () => {
      if (
        internationalAdmissionsMenuOpen &&
        internationalAdmissionsButtonRef.current
      ) {
        const rect =
          internationalAdmissionsButtonRef.current.getBoundingClientRect();
        const navTop = navBarRef.current?.getBoundingClientRect().top ?? 0;
        const navHeight = navBarRef.current?.offsetHeight ?? 60;

        setInternationalAdmissionsPosition({
          top: navTop - 160, // Position above the nav bar (160px for dropdown height + gap)
          left: rect.left,
        });
      }
    };

    updatePosition();

    if (internationalAdmissionsMenuOpen) {
      window.addEventListener("scroll", updatePosition);
      window.addEventListener("resize", updatePosition);

      return () => {
        window.removeEventListener("scroll", updatePosition);
        window.removeEventListener("resize", updatePosition);
      };
    }
  }, [internationalAdmissionsMenuOpen]);

  // Handle scroll to fix nav bar when scrolling past top bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = topBarHeight;
      setIsNavFixed(scrollY >= threshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Check initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, [topBarHeight]);

  // Reset expandedSubGroups when academics menu closes
  useEffect(() => {
    if (!academicsMenuOpen) {
      setExpandedSubGroups(new Set());
    }
  }, [academicsMenuOpen]);

  // Reset expandedSubGroups when mobile menu closes
  useEffect(() => {
    if (!isOpen) {
      setExpandedSubGroups(new Set());
    }
  }, [isOpen]);

  const aboutSubmenus = [
    { name: "About DSU", href: "/about" },
    { name: "Vision & Mission", href: "/about/vision-mission" },
    { name: "History", href: "/about/history" },
    { name: "Leadership", href: "/about/leadership" },
    {
      name: "Administrative Committees",
      href: "/about/leadership#administrative-committees",
    },
  ];

  const alumniSubmenus = [
    { name: "Alumni Home", href: "/alumni" },
    { name: "Vision & Mission", href: "/alumni/vision-mission" },
    { name: "Alumni Events", href: "/alumni/events" },
    { name: "Newsletter", href: "/alumni/newsletter" },
    { name: "Contact & Support", href: "/alumni/contact" },
  ];

  const librarySubmenus = [
    { name: "Library Home", href: "/library" },
    { name: "Vision & Mission", href: "/library/vision-mission" },
    { name: "Our Team", href: "/library/team" },
    { name: "Collections", href: "/library/collections" },
    { name: "E-Resources", href: "/library/e-resources" },
    { name: "Rules & Regulations", href: "/library/rules-regulations" },
    { name: "Anti-Plagiarism Tools", href: "/library/anti-plagiarism" },
    { name: "Corporate Membership", href: "/library/corporate-membership" },
    { name: "Useful Links", href: "/library/useful-links" },
    { name: "Brochure", href: "/library/brochure" },
    { name: "Constituent Libraries", href: "/library/constituent-libraries" },
    { name: "Advisory Committee", href: "/library/advisory-committee" },
    { name: "Gallery", href: "/library/gallery" },
    { name: "Contact & Support", href: "/library/contact" },
  ];

  const academicsSubmenus = {
    schools: [
      {
        name: "School of Engineering",
        href: "/academics/engineering",
        hasSubGroups: true,
        subGroups: [
          {
            name: "B.Tech",
            departments: [
              {
                name: "B.Tech CSE",
                href: "/academics/engineering/computer-science",
              },
              {
                name: "B.Tech CSE (AI & ML)",
                href: "/academics/engineering/artificial-intelligence",
              },
              {
                name: "B.Tech CSE (AI & Data Science)",
                href: "/academics/engineering/ai-data-science",
              },
              {
                name: "B.Tech CSE (Cybersecurity)",
                href: "/academics/engineering/cybersecurity",
              },
              {
                name: "B.Tech CSE (Data Science)",
                href: "/academics/engineering/data-science",
              },
              {
                name: "B.Tech CSE (AI & Robotics)",
                href: "/academics/engineering/ai-robotics",
              },
              {
                name: "B.Tech Mechanical Engineering",
                href: "/academics/engineering/mechanical-engineering",
              },
              {
                name: "B.Tech Aerospace Engineering",
                href: "/academics/engineering/aerospace-engineering",
              },
              {
                name: "B.Tech Electronics & Communication",
                href: "/academics/engineering/electronics-communication",
              },
              {
                name: "B.Tech Computer Science & Technology",
                href: "/academics/engineering/computer-technology",
              },
              {
                name: "B.Tech Computer Science and Medical Engineering",
                href: "/academics/engineering/cs-medical-engineering",
              },
            ],
          },
          {
            name: "M.Tech",
            departments: [
              {
                name: "M.Tech Computer Science & Engineering",
                href: "/academics/engineering/computer-science",
              },
              {
                name: "M.Tech Artificial Intelligence & Machine Learning",
                href: "/academics/engineering/artificial-intelligence",
              },
              {
                name: "M.Tech Artificial Intelligence & Data Science",
                href: "/academics/engineering/ai-data-science",
              },
              {
                name: "M.Tech Artificial Intelligence & Robotics",
                href: "/academics/engineering/ai-robotics",
              },
              {
                name: "M.Tech Embedded Systems",
                href: "/academics/engineering/electronics-communication",
              },
              {
                name: "M.Tech Design Engineering",
                href: "/academics/engineering/mechanical-engineering",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Health Sciences",
        href: "/academics/health-sciences",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Nursing",
            departments: [
              {
                name: "B.Sc Nursing",
                href: "/academics/health-sciences/bsc-nursing",
              },
              {
                name: "Post Basic B.Sc Nursing",
                href: "/academics/health-sciences/pb-bsc-nursing",
              },
              {
                name: "M.Sc Nursing",
                href: "/academics/health-sciences/msc-nursing",
              },
            ],
          },
          {
            name: "Pharmacy",
            departments: [
              {
                name: "B.Pharm",
                href: "/academics/health-sciences/pharmacy",
              },
              {
                name: "Pharm.D",
                href: "/academics/health-sciences/pharmd",
              },
              {
                name: "M.Pharm",
                href: "/academics/health-sciences/mpharm",
              },
            ],
          },
          {
            name: "Physiotherapy",
            departments: [
              { name: "BPT", href: "/academics/health-sciences/bpt" },
              { name: "MPT", href: "/academics/health-sciences/mpt" },
            ],
          },
          {
            name: "Allied Health Sciences (CAHS)",
            departments: [
              {
                name: "B.Sc. Allied Health Sciences",
                href: "/academics/health-sciences/allied-health-bsc",
              },
              {
                name: "MPH (Public Health)",
                href: "/academics/health-sciences/mph",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Law",
        href: "/academics/law",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Undergraduate",
            departments: [
              { name: "LLB (3-Year)", href: "/academics/law/llb-3-year" },
            ],
          },
          {
            name: "Postgraduate (LLM)",
            departments: [
              {
                name: "LLM in Law & Technology",
                href: "/academics/law/llm-law-technology",
              },
              {
                name: "LLM in Corporate Law",
                href: "/academics/law/llm-corporate-commercial",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Commerce & Management",
        href: "/academics/management-studies",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Commerce",
            departments: [
              {
                name: "B.Com",
                href: "/academics/commerce-and-management/bcom",
              },
            ],
          },
          {
            name: "Management",
            departments: [
              { name: "BBA", href: "/academics/commerce-and-management/bba" },
              { name: "MBA", href: "/academics/commerce-and-management/mba" },
            ],
          },
          {
            name: "Executive Education",
            departments: [
              {
                name: "Center for Executive Education",
                href: "/academics/cee",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Basic & Applied Sciences",
        href: "/academics/basic-applied-sciences",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Undergraduate",
            departments: [
              {
                name: "B.Sc. Triple Major",
                href: "/academics/basic-applied-sciences/bsc-triple-major",
              },
            ],
          },
          {
            name: "Postgraduate",
            departments: [
              {
                name: "M.Sc. Specializations",
                href: "/academics/basic-applied-sciences/msc-specializations",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Design & Digital Trans-Media",
        href: "/academics/design/bdesign",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Undergraduate",
            departments: [
              {
                name: "B.Design",
                href: "/academics/design/bdesign/program",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Arts, Design & Humanities",
        href: "/academics/journalism-mass-communication",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Undergraduate",
            departments: [
              {
                name: "B.A. Journalism & Mass Communication",
                href: "/academics/journalism-mass-communication/ba",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "Computer Applications",
        href: "/academics/computer-applications",
        hasSubGroups: true,
        subGroups: [
          {
            name: "Undergraduate",
            departments: [
              { name: "B.C.A.", href: "/academics/computer-applications/bca" },
              {
                name: "B.Sc. Data Science",
                href: "/academics/computer-applications/data-science",
              },
            ],
          },
          {
            name: "Postgraduate",
            departments: [
              { name: "M.C.A.", href: "/academics/computer-applications/mca" },
              {
                name: "M.Sc. Data Science",
                href: "/academics/computer-applications/msc-data-science",
              },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "Dr. Chandramma Dayananda Sagar Institute of Medical Education & Research (CDSIMER)",
        href: "https://cdsimer.edu.in",
        departments: [],
        external: true,
      },
      {
        name: "Online Degree Programs",
        href: "https://dsuonline.com/",
        departments: [
          { name: "Online Degree Programs", href: "https://dsuonline.com/" },
          { name: "Apply Now", href: "https://apply.dsuonline.com/" },
        ],
        external: true,
      },
    ],
  };

  const isHomePage = location.pathname === "/";

  const topMenuItems = [
    { name: "Research", href: "/research" },
    { name: "Alumni", href: "/alumni" },
    { name: "Library", href: "/library" },
    { name: "Committees", href: "/contact-complaints" },
    { name: "Examinations", href: "/examinations" },
    { name: "Careers", href: "/careers" },
    {
      name: "International",
      href: "https://dsu.edu.in/international/",
      external: true,
      hasSubmenu: true,
    },
    { name: "Hostel@Campus", href: "https://myposhtell.com", external: true },
    {
      name: "Public Self Disclosure",
      href: "https://dsu.edu.in/images/University/Public_Self_Disclosure_DSU.pdf",
      external: true,
    },
  ];

  const internationalSubmenuItems = [
    {
      name: "International Admissions",
      href: "https://dsu.edu.in/international/",
    },
    {
      name: "International Affairs",
      href: "https://dsu.edu.in/international/international-affairs/",
    },
    { name: "Study in India", href: "/study-in-india" },
  ];

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "AI-Infused Academics", href: "/academics" },
    { name: "Admissions", href: "/admissions" },
    { name: "Campus Life", href: "/campus-life" },
    { name: "Centre of Excellence", href: "/centre-of-excellence" },
    { name: "Placements", href: "/placements" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Menu Bar - Hidden on mobile/tablet portrait, shown on larger screens */}
      <div
        ref={topBarRef}
        className={`hidden lg:flex z-[10001] items-center ${
          theme === "light"
            ? "bg-gradient-to-r from-blue-50 to-white border-b-2 border-blue-200/50"
            : "bg-gradient-to-r from-slate-900 to-slate-950 border-b-2 border-blue-600/30"
        }`}
        style={{
          padding: "clamp(0.25rem, 0.7vmin, 0.5rem) 0",
        }}
      >
        <div
          className="w-full mx-auto flex items-center justify-end"
          style={{
            paddingLeft: "clamp(0.5rem, 2vw, 1.5rem)",
            paddingRight: "clamp(0.5rem, 2vw, 1.5rem)",
            gap: "0",
          }}
        >
          {/* All Top Menu Items in one continuous row - with scrollable container */}
          <div
            className="flex items-center flex-nowrap overflow-x-auto scrollbar-hide order-2"
            style={{
              gap: "clamp(0.1rem, 0.5vw, 0.25rem)",
            }}
          >
            {topMenuItems.map((item, idx) => {
              const isAlumni = item.href === "/alumni";
              const isLibrary = item.href === "/library";
              const isInternationalAdmissions =
                item.href === "https://dsu.edu.in/international/";
              const sharedClasses = `font-medium transition-all duration-200 whitespace-nowrap rounded-md hover:scale-105 flex-shrink-0 flex items-center gap-0.5 ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              if (isInternationalAdmissions) {
                return (
                  <div
                    key={idx}
                    className="flex-shrink-0 relative"
                    onMouseEnter={handleInternationalAdmissionsMenuEnter}
                    onMouseLeave={handleInternationalAdmissionsMenuLeave}
                  >
                    <a
                      ref={internationalAdmissionsButtonRef}
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setInternationalAdmissionsMenuOpen(
                          !internationalAdmissionsMenuOpen,
                        );
                      }}
                      className={`${sharedClasses} flex items-center gap-1 cursor-pointer`}
                      style={{
                        fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
                        padding:
                          "clamp(0.75rem, 1.5vmin, 1rem) clamp(0.5rem, 1vw, 0.75rem)",
                      }}
                    >
                      <span>{item.name}</span>
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${internationalAdmissionsMenuOpen ? "rotate-180" : ""}`}
                      />
                    </a>

                    {/* International Admissions Submenu - Absolute positioning relative to parent */}
                    {internationalAdmissionsMenuOpen && (
                        <div
                          className={`absolute rounded-lg shadow-lg min-w-max backdrop-blur-sm z-[10002] py-2 bottom-full mb-1 left-0 ${
                            theme === "light"
                              ? "bg-white/95 border border-blue-200/50"
                              : "bg-slate-800/95 border border-blue-600/30"
                          }`}
                          onMouseEnter={handleInternationalAdmissionsMenuEnter}
                          onMouseLeave={handleInternationalAdmissionsMenuLeave}
                        >
                          {internationalSubmenuItems.map(
                            (submenuItem, submenuIdx) => {
                              const isExternal =
                                submenuItem.href.startsWith("http");
                              const baseClasses = `block px-4 py-2.5 text-xs sm:text-sm whitespace-nowrap transition-all ${
                                theme === "light"
                                  ? "text-gray-700 hover:bg-orange-100 hover:text-orange-700"
                                  : "text-white/80 hover:bg-white/20 hover:text-white"
                              } ${submenuIdx < internationalSubmenuItems.length - 1 ? (theme === "light" ? "border-b border-orange-200/30" : "border-b border-white/10") : ""}`;

                              if (isExternal) {
                                return (
                                  <a
                                    key={submenuItem.name}
                                    href={submenuItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() =>
                                      setInternationalAdmissionsMenuOpen(false)
                                    }
                                    className={baseClasses}
                                  >
                                    {submenuItem.name}
                                  </a>
                                );
                              }

                              return (
                                <Link
                                  key={submenuItem.name}
                                  to={submenuItem.href}
                                  onClick={() =>
                                    setInternationalAdmissionsMenuOpen(false)
                                  }
                                  className={baseClasses}
                                >
                                  {submenuItem.name}
                                </Link>
                              );
                            },
                          )}
                        </div>
                      )}
                  </div>
                );
              }

              if (item.external && !isInternationalAdmissions) {
                return (
                  <a
                    key={idx}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`font-medium transition-all duration-200 whitespace-nowrap rounded-md hover:scale-105 flex-shrink-0 text-center ${
                      theme === "light"
                        ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
                      padding:
                        "clamp(0.75rem, 1.5vmin, 1rem) clamp(0.5rem, 1vw, 0.75rem)",
                    }}
                  >
                    <span>{item.name}</span>
                  </a>
                );
              }

              if (!isInternationalAdmissions) {
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    className={`font-medium transition-all duration-200 whitespace-nowrap rounded-md hover:scale-105 flex-shrink-0 text-center ${
                      theme === "light"
                        ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                        : "text-white/80 hover:text-white hover:bg-white/10"
                    }`}
                    style={{
                      fontSize: "clamp(0.7rem, 1.2vw, 0.85rem)",
                      padding:
                        "clamp(0.75rem, 1.5vmin, 1rem) clamp(0.5rem, 1vw, 0.75rem)",
                    }}
                  >
                    {item.name}
                  </Link>
                );
              }
            })}
            <a
              href="https://ums.mydsi.org/Login.aspx/DSU"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs sm:text-sm font-medium transition-all duration-200 whitespace-nowrap px-1.5 sm:px-2.5 py-1.5 sm:py-2 rounded-md hover:scale-105 flex-shrink-0 text-center ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            >
              ERP Login
            </a>
          </div>

          {/* Right side - Search and Language Switcher */}
          <div className="flex items-center gap-1 sm:gap-2 flex-shrink-0 order-3">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className={`gap-2 border rounded-md p-1.5 hover:scale-105 transition-all ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50 border-gray-300 hover:border-orange-400"
                  : "text-white/80 hover:text-white hover:bg-white/10 border-white/20 hover:border-white/40"
              }`}
            >
              <Search className="w-4 h-4" />
            </Button>
            <ThemeToggle
              className={`rounded-md hover:scale-105 transition-all p-1.5 ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`}
            />
            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Spacer when nav is fixed to prevent layout shift */}
      {isNavFixed && (
        <div style={{ height: navBarHeight }} aria-hidden="true" />
      )}

      {/* Main Navigation Bar */}
      <nav
        ref={navBarRef}
        className={`${isNavFixed ? "fixed top-0 left-0 right-0" : ""} z-[10002] overflow-visible shadow-md ${
          theme === "light"
            ? "bg-white/95 backdrop-blur-sm border-b-2 border-orange-200/50"
            : "bg-slate-950/95 backdrop-blur-sm border-b-2 border-orange-600/30"
        }`}
      >
        <div className="w-full overflow-visible">
          <div className="flex flex-row items-center justify-between py-2 lg:py-0 lg:flex-col lg:items-center lg:justify-center lg:flex-row">
            {/* Mobile Logo - Left side */}
            <Link
              to="/"
              className="lg:hidden flex-shrink-0 flex items-center justify-start px-1"
            >
              <img
                src={
                  theme === "light"
                    ? "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F359db0babe0948ae98ad938f84bc1474?format=webp&width=800"
                    : "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0caf0bf29be6421997005f26cdaae0ed?format=webp&width=800"
                }
                alt="Dayananda Sagar University Logo"
                className={`h-12 w-auto object-contain ${
                  theme === "light"
                    ? "mix-blend-multiply"
                    : "mix-blend-screen"
                }`}
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-4 justify-center w-full px-0 py-2">
              {navigation.map((item, idx) => {
                const active = !item.external && isActive(item.href);
                const isAbout = item.href === "/about";
                const isAcademics = item.href === "/academics";
                const sharedClasses = `flex items-center space-x-1 rounded-lg font-medium font-display transition-all duration-200 group flex-shrink ${
                  theme === "light"
                    ? active ||
                      (isAbout && aboutMenuOpen) ||
                      (isAcademics && academicsMenuOpen)
                      ? "bg-orange-100 text-orange-900 font-semibold shadow-sm"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                    : active ||
                        (isAbout && aboutMenuOpen) ||
                        (isAcademics && academicsMenuOpen)
                      ? "bg-white/20 text-white font-semibold shadow-sm"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                }`;
                const sharedStyle = {
                  fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
                  padding: "clamp(0.6rem, 1.2vmin, 0.9rem) clamp(0.5rem, 1vw, 0.75rem)",
                };

                const itemElement = (() => {
                  if (item.external) {
                    return (
                      <a
                        key={idx}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        className={sharedClasses}
                        style={sharedStyle}
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
                        onMouseEnter={handleAboutMenuEnter}
                        onMouseLeave={handleAboutMenuLeave}
                      >
                        <button
                          onClick={() => setAboutMenuOpen(!aboutMenuOpen)}
                          className={`${sharedClasses} justify-center`}
                          style={sharedStyle}
                        >
                          <span className="text-center leading-tight">
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${aboutMenuOpen ? "rotate-180" : ""}`}
                          />
                          {active && (
                            <div
                              className={`w-0.5 h-0.5 rounded-full ${
                                theme === "light" ? "bg-orange-600" : "bg-white"
                              }`}
                            />
                          )}
                        </button>

                        {/* Mega Menu Dropdown - Modern Card-Based Layout */}
                        <div
                          onMouseEnter={handleAboutMenuEnter}
                          onMouseLeave={handleAboutMenuLeave}
                          className={`absolute left-0 top-full mt-0 w-auto min-w-max max-w-2xl rounded-2xl shadow-2xl transition-all duration-300 py-5 px-5 max-h-[600px] overflow-y-auto backdrop-blur-sm z-[9999] ${
                            aboutMenuOpen
                              ? "opacity-100 visible pointer-events-auto"
                              : "opacity-0 invisible pointer-events-none"
                          } ${
                            theme === "light"
                              ? "bg-white/95 border border-blue-200/50"
                              : "bg-slate-800/95 border border-blue-600/30"
                          }`}
                          style={{
                            scrollbarWidth: "thin",
                            scrollbarColor:
                              theme === "light"
                                ? "rgba(59, 130, 246, 0.5) rgba(59, 130, 246, 0.1)"
                                : "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          <div className="grid grid-cols-2 gap-4">
                            {aboutSubmenus.map((submenu, idx) => {
                              const cardColors = [
                                {
                                  bg:
                                    theme === "light"
                                      ? "bg-orange-50"
                                      : "bg-orange-900/20",
                                  border:
                                    "border-orange-200/50 dark:border-orange-600/30",
                                  text: "text-orange-900 dark:text-orange-100",
                                },
                                {
                                  bg:
                                    theme === "light"
                                      ? "bg-emerald-50"
                                      : "bg-emerald-900/20",
                                  border:
                                    "border-emerald-200/50 dark:border-emerald-600/30",
                                  text: "text-emerald-900 dark:text-emerald-100",
                                },
                                {
                                  bg:
                                    theme === "light"
                                      ? "bg-blue-50"
                                      : "bg-blue-900/20",
                                  border:
                                    "border-blue-200/50 dark:border-blue-600/30",
                                  text: "text-blue-900 dark:text-blue-100",
                                },
                                {
                                  bg:
                                    theme === "light"
                                      ? "bg-purple-50"
                                      : "bg-purple-900/20",
                                  border:
                                    "border-purple-200/50 dark:border-purple-600/30",
                                  text: "text-purple-900 dark:text-purple-100",
                                },
                              ];
                              const colors =
                                cardColors[idx % cardColors.length];

                              return (
                                <Link
                                  key={submenu.name}
                                  to={submenu.href}
                                  onClick={() => setAboutMenuOpen(false)}
                                  className={`${colors.bg} ${colors.border} border rounded-xl p-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group block text-sm font-semibold ${
                                    theme === "light"
                                      ? "text-gray-900 group-hover:text-orange-600"
                                      : "text-white group-hover:text-orange-200"
                                  }`}
                                >
                                  {submenu.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  if (isAcademics) {
                    return (
                      <div
                        key={idx}
                        className="relative group"
                        onMouseEnter={handleAcademicsMenuEnter}
                        onMouseLeave={handleAcademicsMenuLeave}
                      >
                        <button
                          onClick={() =>
                            setAcademicsMenuOpen(!academicsMenuOpen)
                          }
                          className={`${sharedClasses} ml-0 sm:ml-4 justify-center`}
                          style={sharedStyle}
                        >
                          <span className="text-center leading-tight">
                            {item.name}
                          </span>
                          <ChevronDown
                            className={`w-3 h-3 transition-transform ${academicsMenuOpen ? "rotate-180" : ""}`}
                          />
                          {active && (
                            <div
                              className={`w-0.5 h-0.5 rounded-full ${
                                theme === "light" ? "bg-orange-600" : "bg-white"
                              }`}
                            />
                          )}
                        </button>

                        {/* Academics Mega Menu - Modern Card-Based Layout */}
                        <div
                          onMouseEnter={handleAcademicsMenuEnter}
                          onMouseLeave={handleAcademicsMenuLeave}
                          className={`absolute left-0 top-full mt-0 w-auto min-w-max max-w-5xl rounded-2xl shadow-2xl transition-all duration-300 py-5 px-5 max-h-[600px] overflow-y-auto backdrop-blur-sm z-[9999] ${
                            academicsMenuOpen
                              ? "opacity-100 visible pointer-events-auto"
                              : "opacity-0 invisible pointer-events-none"
                          } ${
                            theme === "light"
                              ? "bg-white/95 border border-blue-200/50"
                              : "bg-slate-800/95 border border-blue-600/30"
                          }`}
                          style={{
                            scrollbarWidth: "thin",
                            scrollbarColor:
                              theme === "light"
                                ? "rgba(59, 130, 246, 0.5) rgba(59, 130, 246, 0.1)"
                                : "rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)",
                          }}
                        >
                          {/* Academics Overview Link */}
                          <Link
                            to="/academics"
                            onClick={() => setAcademicsMenuOpen(false)}
                            className={`w-full block rounded-xl p-4 mb-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 font-semibold text-sm ${
                              theme === "light"
                                ? "bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200/50 text-orange-900 hover:bg-orange-100 hover:text-orange-700"
                                : "bg-gradient-to-r from-orange-900/30 to-orange-900/10 border border-orange-600/30 text-orange-200 hover:bg-orange-900/40 hover:text-orange-100"
                            }`}
                          >
                            Explore All Academics
                            <ArrowRight className="w-4 h-4 inline ml-2" />
                          </Link>

                          <div className="grid grid-cols-2 gap-4">
                            {academicsSubmenus.schools.map(
                              (school, schoolIdx) => {
                                const cardColors = [
                                  {
                                    bg:
                                      theme === "light"
                                        ? "bg-orange-50"
                                        : "bg-orange-900/20",
                                    border:
                                      "border-orange-200/50 dark:border-orange-600/30",
                                    text: "text-orange-900 dark:text-orange-100",
                                  },
                                  {
                                    bg:
                                      theme === "light"
                                        ? "bg-emerald-50"
                                        : "bg-emerald-900/20",
                                    border:
                                      "border-emerald-200/50 dark:border-emerald-600/30",
                                    text: "text-emerald-900 dark:text-emerald-100",
                                  },
                                  {
                                    bg:
                                      theme === "light"
                                        ? "bg-blue-50"
                                        : "bg-blue-900/20",
                                    border:
                                      "border-blue-200/50 dark:border-blue-600/30",
                                    text: "text-blue-900 dark:text-blue-100",
                                  },
                                  {
                                    bg:
                                      theme === "light"
                                        ? "bg-purple-50"
                                        : "bg-purple-900/20",
                                    border:
                                      "border-purple-200/50 dark:border-purple-600/30",
                                    text: "text-purple-900 dark:text-purple-100",
                                  },
                                ];
                                const colors =
                                  cardColors[schoolIdx % cardColors.length];

                                return (
                                  <div
                                    key={school.name}
                                    className={`${colors.bg} ${colors.border} border rounded-xl p-3 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group`}
                                  >
                                    {school.external ? (
                                      <a
                                        href={school.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`block font-bold text-sm mb-2 transition-colors ${
                                          theme === "light"
                                            ? "text-gray-900 group-hover:text-orange-600"
                                            : "text-white group-hover:text-orange-200"
                                        }`}
                                      >
                                        {school.name}
                                      </a>
                                    ) : (
                                      <Link
                                        to={school.href}
                                        onClick={() =>
                                          setAcademicsMenuOpen(false)
                                        }
                                        className={`block font-bold text-sm mb-2 transition-colors ${
                                          theme === "light"
                                            ? "text-gray-900 group-hover:text-orange-600"
                                            : "text-white group-hover:text-orange-200"
                                        }`}
                                      >
                                        {school.name}
                                      </Link>
                                    )}

                                    {(school as any).hasSubGroups ? (
                                      <div className="space-y-2">
                                        {(school as any).subGroups.map(
                                          (group: any) => {
                                            const isExpanded =
                                              expandedSubGroups.has(
                                                `${school.name}-${group.name}`,
                                              );
                                            return (
                                              <div key={group.name}>
                                                <button
                                                  onClick={() =>
                                                    toggleSubGroup(
                                                      school.name,
                                                      group.name,
                                                    )
                                                  }
                                                  className={`text-xs font-semibold flex items-center gap-2 transition-all w-full p-2 rounded hover:bg-white/30 dark:hover:bg-white/10 ${
                                                    theme === "light"
                                                      ? "text-gray-700 hover:text-orange-700"
                                                      : "text-white/80 hover:text-white"
                                                  }`}
                                                >
                                                  <ChevronDown
                                                    className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-0" : "-rotate-90"}`}
                                                  />
                                                  {group.name}
                                                </button>
                                                {isExpanded && (
                                                  <div className="space-y-1 ml-2 pl-2 border-l border-white/20">
                                                    {group.departments.map(
                                                      (dept: any) => (
                                                        <Link
                                                          key={dept.name}
                                                          to={dept.href}
                                                          onClick={() =>
                                                            setAcademicsMenuOpen(
                                                              false,
                                                            )
                                                          }
                                                          className={`block text-xs py-1 px-2 rounded transition-all hover:bg-white/20 dark:hover:bg-white/10 ${
                                                            theme === "light"
                                                              ? "text-gray-700 hover:text-orange-700"
                                                              : "text-white/70 hover:text-white"
                                                          }`}
                                                        >
                                                          {dept.name}
                                                        </Link>
                                                      ),
                                                    )}
                                                  </div>
                                                )}
                                              </div>
                                            );
                                          },
                                        )}
                                      </div>
                                    ) : (
                                      school.departments.length > 0 && (
                                        <div className="space-y-2">
                                          {school.departments.map((dept) => (
                                            <Link
                                              key={dept.name}
                                              to={dept.href}
                                              onClick={() =>
                                                setAcademicsMenuOpen(false)
                                              }
                                              className={`block text-xs py-1 px-2 rounded transition-all hover:bg-white/20 dark:hover:bg-white/10 ${
                                                theme === "light"
                                                  ? "text-gray-700 hover:text-orange-700"
                                                  : "text-white/70 hover:text-white"
                                              }`}
                                            >
                                              {dept.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )
                                    )}
                                  </div>
                                );
                              },
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  }

                  const isHome = item.href === "/";
                  return (
                    <Link
                      key={idx}
                      to={item.href}
                      className={`${sharedClasses} justify-center`}
                      style={sharedStyle}
                      title={isHome ? "Home" : undefined}
                    >
                      {isHome ? (
                        <HomeIcon className="w-4 h-4" />
                      ) : (
                        <span className="text-center leading-tight">
                          {item.name}
                        </span>
                      )}
                      {active && (
                        <div
                          className={`w-0.5 h-0.5 rounded-full ${
                            theme === "light" ? "bg-orange-600" : "bg-white"
                          }`}
                        />
                      )}
                    </Link>
                  );
                })();

                if (idx === 1) {
                  const nvidiaActive = isActive("/nvidia-ai-architecture");
                  const nvidiaClasses = `flex items-center space-x-1 rounded-lg font-medium font-display transition-all duration-200 group ml-0 justify-center flex-shrink ${
                    theme === "light"
                      ? nvidiaActive
                        ? "bg-orange-100 text-orange-900 font-semibold shadow-sm"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : nvidiaActive
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`;
                  return [
                    itemElement,
                    <Link
                      key="nvidia-ai"
                      to="/nvidia-ai-architecture"
                      className={nvidiaClasses}
                      style={sharedStyle}
                    >
                      <span className="text-center leading-tight">
                        NVIDIA's AI Architecture
                      </span>
                    </Link>,
                  ];
                }

                if (idx === 3) {
                  const aiFirstActive = isActive("/ai-first");
                  const aiFirstClasses = `flex items-center space-x-1 rounded-lg font-medium font-display transition-all duration-200 group ml-0 justify-center flex-shrink ${
                    theme === "light"
                      ? aiFirstActive
                        ? "bg-orange-100 text-orange-900 font-semibold shadow-sm"
                        : "text-gray-700 hover:text-orange-600 hover:bg-orange-50"
                      : aiFirstActive
                        ? "bg-white/20 text-white font-semibold shadow-sm"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                  }`;
                  return [
                    itemElement,
                    <Link
                      key="logo"
                      to="/"
                      className="flex items-center group flex-shrink-0 px-0 py-0 !rounded-none transition-all duration-300 !bg-transparent hover:!bg-transparent"
                    >
                      <img
                        src={
                          theme === "light"
                            ? "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F359db0babe0948ae98ad938f84bc1474?format=webp&width=800"
                            : "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F0caf0bf29be6421997005f26cdaae0ed?format=webp&width=800"
                        }
                        alt="Dayananda Sagar University Logo"
                        className={`max-h-[4rem] w-auto object-contain group-hover:scale-105 transition-all duration-300 ${
                          theme === "light"
                            ? "mix-blend-multiply"
                            : "mix-blend-screen"
                        }`}
                      />
                    </Link>,
                    <Link
                      key="ai-label"
                      to="/ai-first"
                      className={aiFirstClasses}
                      style={sharedStyle}
                    >
                      <span className="text-center leading-[0.9] flex flex-col items-center gap-0">
                        <span className="whitespace-nowrap">AI-First @</span>
                        <span>DSU</span>
                      </span>
                    </Link>,
                  ];
                }

                return itemElement;
              })}
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsOpen(!isOpen)}
                className={`${
                  theme === "light"
                    ? "text-gray-700 hover:text-orange-600"
                    : "text-white/80 hover:text-white"
                } !bg-transparent !hover:bg-transparent active:!bg-transparent`}
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
          <div
            className={`lg:hidden border-t w-full ${
              theme === "light"
                ? "border-blue-200/30 bg-white"
                : "border-blue-600/20 bg-slate-900"
            }`}
          >
            <div className="px-2 py-2 space-y-1.5 max-h-[calc(100vh-140px)] sm:max-h-[calc(100vh-180px)] overflow-y-auto w-full">
              {/* Main Navigation Items */}
              {navigation.map((item, idx) => {
                const active = !item.external && isActive(item.href);
                const isAbout = item.href === "/about";
                const isAcademics = item.href === "/academics";
                const sharedClasses = `flex items-center space-x-2 px-3 py-2.5 rounded-xl text-base sm:text-lg font-medium font-display transition-all duration-200 w-full ${
                  theme === "light"
                    ? active
                      ? "bg-orange-200 text-orange-900 font-semibold"
                      : "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                    : active
                      ? "bg-white/20 text-white font-semibold"
                      : "text-white hover:text-white hover:bg-white/10"
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
                        <div
                          className={`rounded-lg py-2 ml-4 border-l-2 ${
                            theme === "light"
                              ? "bg-orange-100 border-l-orange-300"
                              : "bg-white/20 border-l-white/40"
                          }`}
                        >
                          {aboutSubmenus.map((submenu, subIdx) => (
                            <Link
                              key={subIdx}
                              to={submenu.href}
                              onClick={() => {
                                setIsOpen(false);
                                setAboutMenuOpen(false);
                              }}
                              className={`block px-4 py-1.5 text-base sm:text-lg rounded transition-colors ${
                                theme === "light"
                                  ? "text-gray-700 hover:bg-orange-200"
                                  : "text-white hover:bg-white/20"
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

                if (isAcademics) {
                  return (
                    <div key={idx} className="space-y-2">
                      <button
                        onClick={() => setAcademicsMenuOpen(!academicsMenuOpen)}
                        className={`w-full text-left ${sharedClasses}`}
                      >
                        <span className="flex-1">{item.name}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${
                            academicsMenuOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {/* Mobile Academics Submenu */}
                      {academicsMenuOpen && (
                        <div
                          className={`rounded-lg py-2 ml-4 border-l-2 max-h-96 overflow-y-auto ${
                            theme === "light"
                              ? "bg-orange-100 border-l-orange-300"
                              : "bg-white/20 border-l-white/40"
                          }`}
                        >
                          {academicsSubmenus.schools.map(
                            (school, schoolIdx) => (
                              <div key={schoolIdx} className="mb-2">
                                {school.external ? (
                                  <a
                                    href={school.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setAcademicsMenuOpen(false);
                                    }}
                                    className={`block px-4 py-2 text-base sm:text-lg font-semibold rounded transition-colors ${
                                      theme === "light"
                                        ? "text-orange-900 hover:bg-orange-200"
                                        : "text-white hover:bg-white/20"
                                    }`}
                                  >
                                    {school.name}
                                  </a>
                                ) : (
                                  <Link
                                    to={school.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setAcademicsMenuOpen(false);
                                    }}
                                    className={`block px-4 py-2 text-base sm:text-lg font-semibold rounded transition-colors ${
                                      theme === "light"
                                        ? "text-orange-900 hover:bg-orange-200"
                                        : "text-white hover:bg-white/20"
                                    }`}
                                  >
                                    {school.name}
                                  </Link>
                                )}

                                {(school as any).hasSubGroups ? (
                                  <div className="ml-4 space-y-2">
                                    {(school as any).subGroups.map(
                                      (group: any, groupIdx: number) => {
                                        const isExpanded =
                                          expandedSubGroups.has(
                                            `${school.name}-${group.name}`,
                                          );
                                        return (
                                          <div key={groupIdx}>
                                            <button
                                              onClick={() =>
                                                toggleSubGroup(
                                                  school.name,
                                                  group.name,
                                                )
                                              }
                                              className={`w-full text-left px-4 py-1 text-sm sm:text-base font-semibold flex items-center gap-1 rounded transition-colors ${
                                                theme === "light"
                                                  ? "text-orange-900 hover:bg-orange-200"
                                                  : "text-white/90 hover:bg-white/20"
                                              }`}
                                            >
                                              <ChevronDown
                                                className={`w-3 h-3 transition-transform ${isExpanded ? "rotate-0" : "-rotate-90"}`}
                                              />
                                              {group.name}
                                            </button>
                                            {isExpanded && (
                                              <div className="space-y-1">
                                                {group.departments.map(
                                                  (
                                                    dept: any,
                                                    deptIdx: number,
                                                  ) => (
                                                    <Link
                                                      key={deptIdx}
                                                      to={dept.href}
                                                      onClick={() => {
                                                        setIsOpen(false);
                                                        setAcademicsMenuOpen(
                                                          false,
                                                        );
                                                      }}
                                                      className={`block px-6 py-1 text-sm sm:text-base rounded transition-colors ${
                                                        theme === "light"
                                                          ? "text-gray-700 hover:bg-orange-200"
                                                          : "text-white/80 hover:bg-white/20"
                                                      }`}
                                                    >
                                                      {dept.name}
                                                    </Link>
                                                  ),
                                                )}
                                              </div>
                                            )}
                                          </div>
                                        );
                                      },
                                    )}
                                  </div>
                                ) : (
                                  school.departments.length > 0 && (
                                    <div className="ml-4 space-y-1">
                                      {school.departments.map(
                                        (dept, deptIdx) => (
                                          <Link
                                            key={deptIdx}
                                            to={dept.href}
                                            onClick={() => {
                                              setIsOpen(false);
                                              setAcademicsMenuOpen(false);
                                            }}
                                            className={`block px-4 py-1 text-sm sm:text-base rounded transition-colors ${
                                              theme === "light"
                                                ? "text-gray-700 hover:bg-orange-200"
                                                : "text-white/80 hover:bg-white/20"
                                            }`}
                                          >
                                            {dept.name}
                                          </Link>
                                        ),
                                      )}
                                    </div>
                                  )
                                )}
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  );
                }

                const isHome = item.href === "/";
                return (
                  <Link
                    key={idx}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={sharedClasses}
                    title={isHome ? "Home" : undefined}
                  >
                    {isHome ? (
                      <HomeIcon className="w-5 h-5" />
                    ) : (
                      <span
                        className={
                          item.href === "/centre-of-excellence"
                            ? "max-w-[100px]"
                            : ""
                        }
                      >
                        {item.name}
                      </span>
                    )}
                  </Link>
                );
              })}
              {/* Additional Menu Items for Mobile */}
              <Link
                to="/nvidia-ai-architecture"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-base sm:text-lg font-medium font-display transition-all duration-200 w-full ${
                  theme === "light"
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="truncate">NVIDIA's AI Architecture</span>
              </Link>
              <Link
                to="/ai-first"
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-base sm:text-lg font-medium font-display transition-all duration-200 w-full ${
                  theme === "light"
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                    : "text-white hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="truncate">AI-First @ DSU</span>
              </Link>

              {/* Top Menu Items (Below Main Navigation) */}
              <div
                className={`pt-4 space-y-2 border-t ${
                  theme === "light" ? "border-blue-200" : "border-white/20"
                }`}
              >
                {topMenuItems.map((item, idx) => {
                  const isAlumni = item.href === "/alumni";
                  const isLibrary = item.href === "/library";
                  const isInternationalAdmissions =
                    item.href === "https://dsu.edu.in/international/";
                  const sharedClasses = `flex items-center space-x-2 px-3 py-2 rounded-xl text-base sm:text-lg font-medium font-display transition-all duration-200 w-full ${
                    theme === "light"
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`;

                  if (isInternationalAdmissions) {
                    return (
                      <div key={`top-${idx}`} className="space-y-2">
                        <button
                          onClick={() =>
                            setInternationalAdmissionsMobileMenuOpen(
                              !internationalAdmissionsMobileMenuOpen,
                            )
                          }
                          className={`w-full text-left ${sharedClasses}`}
                        >
                          <span className="flex-1 truncate">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform flex-shrink-0 ${
                              internationalAdmissionsMobileMenuOpen
                                ? "rotate-180"
                                : ""
                            }`}
                          />
                        </button>

                        {/* Mobile International Admissions Submenu */}
                        {internationalAdmissionsMobileMenuOpen && (
                          <div
                            className={`rounded-lg py-2 ml-4 border-l-2 space-y-0 ${
                              theme === "light"
                                ? "bg-orange-100 border-l-orange-300"
                                : "bg-orange-900/20 border-l-orange-600"
                            }`}
                          >
                            {internationalSubmenuItems.map((submenuItem) => {
                              const isExternal =
                                submenuItem.href.startsWith("http");
                              const baseClasses = `block px-4 py-2.5 text-base sm:text-lg transition-colors ${
                                theme === "light"
                                  ? "text-gray-700 hover:bg-orange-200"
                                  : "text-white hover:bg-orange-900/40"
                              }`;

                              if (isExternal) {
                                return (
                                  <a
                                    key={submenuItem.name}
                                    href={submenuItem.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                      setIsOpen(false);
                                      setInternationalAdmissionsMobileMenuOpen(
                                        false,
                                      );
                                    }}
                                    className={baseClasses}
                                  >
                                    {submenuItem.name}
                                  </a>
                                );
                              }

                              return (
                                <Link
                                  key={submenuItem.name}
                                  to={submenuItem.href}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setInternationalAdmissionsMobileMenuOpen(
                                      false,
                                    );
                                  }}
                                  className={baseClasses}
                                >
                                  {submenuItem.name}
                                </Link>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (isAlumni) {
                    return (
                      <div key={`top-${idx}`} className="space-y-2">
                        <button
                          onClick={() => setAlumniMenuOpen(!alumniMenuOpen)}
                          className={`w-full text-left ${sharedClasses}`}
                        >
                          <span className="flex-1 truncate">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform flex-shrink-0 ${
                              alumniMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Alumni Submenu */}
                        {alumniMenuOpen && (
                          <div
                            className={`rounded-lg py-2 ml-4 border-l-2 ${
                              theme === "light"
                                ? "bg-purple-100 border-l-purple-300"
                                : "bg-purple-900/20 border-l-purple-600"
                            }`}
                          >
                            {alumniSubmenus.map((submenu, subIdx) => (
                              <Link
                                key={subIdx}
                                to={submenu.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setAlumniMenuOpen(false);
                                }}
                                className={`block px-4 py-1.5 text-base sm:text-lg rounded transition-colors ${
                                  theme === "light"
                                    ? "text-gray-700 hover:bg-purple-200"
                                    : "text-white hover:bg-purple-900/40"
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

                  if (isLibrary) {
                    return (
                      <div key={`top-${idx}`} className="space-y-2">
                        <button
                          onClick={() => setLibraryMenuOpen(!libraryMenuOpen)}
                          className={`w-full text-left ${sharedClasses}`}
                        >
                          <span className="flex-1 truncate">{item.name}</span>
                          <ChevronDown
                            className={`w-4 h-4 transition-transform flex-shrink-0 ${
                              libraryMenuOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* Mobile Library Submenu */}
                        {libraryMenuOpen && (
                          <div
                            className={`rounded-lg py-2 ml-4 border-l-2 max-h-64 overflow-y-auto ${
                              theme === "light"
                                ? "bg-blue-100 border-l-blue-300"
                                : "bg-blue-900/20 border-l-blue-600"
                            }`}
                          >
                            {librarySubmenus.map((submenu, subIdx) => (
                              <Link
                                key={subIdx}
                                to={submenu.href}
                                onClick={() => {
                                  setIsOpen(false);
                                  setLibraryMenuOpen(false);
                                }}
                                className={`block px-4 py-1.5 text-base sm:text-lg rounded transition-colors ${
                                  theme === "light"
                                    ? "text-gray-700 hover:bg-blue-200"
                                    : "text-white hover:bg-blue-900/40"
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

                  if (item.external) {
                    return (
                      <a
                        key={`top-${idx}`}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)}
                        className={sharedClasses}
                      >
                        <span className="truncate">{item.name}</span>
                      </a>
                    );
                  }

                  return (
                    <Link
                      key={`top-${idx}`}
                      to={item.href}
                      onClick={() => setIsOpen(false)}
                      className={sharedClasses}
                    >
                      <span className="truncate">{item.name}</span>
                    </Link>
                  );
                })}
              </div>

              <div
                className={`pt-4 space-y-3 border-t ${
                  theme === "light" ? "border-blue-200" : "border-white/20"
                }`}
              >
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSearchOpen(true);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left justify-start gap-3 text-base sm:text-lg ${
                    theme === "light"
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <Search className="w-4 h-4" />
                  <span>Search</span>
                </Button>
                <ThemeToggle
                  className={`self-start text-base sm:text-lg ${
                    theme === "light"
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                  onToggle={() => setIsOpen(false)}
                />
                <LanguageSwitcher />
                <a
                  href="https://ums.mydsi.org/Login.aspx/DSU"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-base sm:text-lg font-medium font-display transition-all duration-200 w-full ${
                    theme === "light"
                      ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="truncate">ERP Login</span>
                </a>
              </div>
            </div>
          </div>
        )}

        <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
      </nav>

    </>
  );
}
