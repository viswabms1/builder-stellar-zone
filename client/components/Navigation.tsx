import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import SearchDialog from "./SearchDialog";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLanguage } from "@/providers/language-provider";
import { useTheme } from "@/providers/theme-provider";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [academicsMenuOpen, setAcademicsMenuOpen] = useState(false);
  const [expandedSubGroups, setExpandedSubGroups] = useState<Set<string>>(new Set());
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();
  const { t } = useLanguage();
  const { theme } = useTheme();

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
    { name: t("nav.vision"), href: "/about/vision-mission" },
    { name: t("nav.history"), href: "/about/history" },
    { name: t("nav.leadership"), href: "/about/leadership" },
    {
      name: "Administrative Committees",
      href: "/about/leadership#administrative-committees",
    },
    { name: "Accreditations", href: "/about/accreditations" },
    { name: t("nav.facilities"), href: "/about/facilities" },
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
              { name: "B.Tech CSE", href: "/academics/engineering/computer-science" },
              { name: "B.Tech CSE (AI & ML)", href: "/academics/engineering/cse-aiml" },
              { name: "B.Tech CSE (AI & Data Science)", href: "/academics/engineering/cse-ai-ds" },
              { name: "B.Tech CSE (Cybersecurity)", href: "/academics/engineering/cybersecurity" },
              { name: "B.Tech CSE (Data Science)", href: "/academics/engineering/data-science" },
              { name: "B.Tech CSE (AI & Robotics)", href: "/academics/engineering/ai-robotics" },
              { name: "B.Tech Mechanical Engineering", href: "/academics/engineering/mechanical-engineering" },
              { name: "B.Tech Aerospace Engineering", href: "/academics/engineering/aerospace-engineering" },
              { name: "B.Tech Electronics & Communication", href: "/academics/engineering/electronics-communication" },
              { name: "B.Tech Computer Science & Technology", href: "/academics/engineering/computer-technology" },
              { name: "B.Tech Computer Science and Medical Engineering", href: "/academics/engineering/cs-medical-engineering" },
            ],
          },
          {
            name: "M.Tech",
            departments: [
              { name: "M.Tech Computer Science", href: "/academics/engineering/computer-science" },
              { name: "M.Tech Embedded Systems", href: "/academics/engineering/electronics-communication" },
              { name: "M.Tech Design Engineering", href: "/academics/engineering/mechanical-engineering" },
            ],
          },
        ],
        departments: [],
      },
      {
        name: "School of Health Sciences",
        href: "/academics/health-sciences",
        departments: [
          { name: "Pharmacy", href: "/academics/health-sciences" },
          { name: "Nursing", href: "/academics/health-sciences" },
          { name: "CDSIMER", href: "/academics/health-sciences/cdsimer" },
        ],
      },
      {
        name: "School of Law",
        href: "/academics/law",
        departments: [
          { name: "Explore Programs", href: "/academics/law/programs" },
          { name: "LLB (3-Year)", href: "/academics/law/llb-3-year" },
          { name: "LLM in Law & Technology", href: "/academics/law/llm-law-technology" },
          { name: "LLM in Corporate Law", href: "/academics/law/llm-corporate-commercial" },
        ],
      },
      {
        name: "School of Commerce & Management",
        href: "/academics/management-studies",
        departments: [
          { name: "Explore Programs", href: "/academics/management-studies" },
          { name: "B.Com", href: "/academics/commerce-and-management/bcom" },
          { name: "BBA", href: "/academics/commerce-and-management/bba" },
          { name: "School of Commerce & Management (UG) Faculty", href: "/academics/commerce-and-management/bcom/faculty" },
          { name: "MBA", href: "/academics/commerce-and-management/mba" },
          { name: "MBA Faculty", href: "/academics/commerce-and-management/mba/faculty" },
        ],
      },
      {
        name: "School of Applied Sciences",
        href: "/academics/basic-applied-sciences",
        departments: [
          { name: "Explore Programs", href: "/academics/basic-applied-sciences" },
        ],
      },
      {
        name: "School of Design & Digital Media",
        href: "/academics/design/bdesign",
        departments: [
          { name: "B.Design", href: "/academics/design/bdesign" },
        ],
      },
      {
        name: "School of Media & Communication",
        href: "/academics/journalism-mass-communication",
        departments: [
          { name: "Journalism & Mass Communication", href: "/academics/journalism-mass-communication" },
        ],
      },
      {
        name: "Computer Applications",
        href: "/academics/computer-applications",
        departments: [
          { name: "Explore Programs", href: "/academics/computer-applications" },
          { name: "B.C.A.", href: "/academics/computer-applications/bca" },
          { name: "B.Sc. Data Science", href: "/academics/computer-applications/data-science" },
          { name: "M.C.A.", href: "/academics/computer-applications/mca" },
          { name: "M.Sc. Data Science", href: "/academics/computer-applications/msc-data-science" },
        ],
      },
      {
        name: "Medical Education & Research (CDSIMER)",
        href: "https://cdsimer.edu.in",
        departments: [],
        external: true,
      },
      {
        name: "Center for Executive Education",
        href: "/academics/cee",
        departments: [
          { name: "Explore Programs", href: "/academics/cee" },
        ],
      },
    ],
  };

  const isHomePage = location.pathname === "/";

  const topMenuItems = [
    { name: "Research", href: "/research" },
    { name: "Alumni", href: "/alumni" },
    { name: "Library", href: "/library" },
    { name: "Insights", href: "/insights" },
    { name: "Conferences", href: "/conferences" },
    { name: "Committees", href: "/committees" },
    { name: "News & Events", href: "/news-events" },
    { name: "Blog", href: "/blog" },
    { name: "Careers", href: "/careers" },
    { name: "Public Self Disclosure", href: "/mandatory-disclosure" },
  ];

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "/about" },
    { name: "AI-Infused Academics", href: "/academics" },
    { name: t("nav.admissions"), href: "/admissions" },
    { name: t("nav.campusLife"), href: "/campus-life" },
    { name: t("nav.centreOfExcellence"), href: "/centre-of-excellence" },
    { name: t("nav.placements"), href: "/placements" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <>
      {/* Top Menu Bar */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          theme === "light"
            ? "bg-transparent border-b border-transparent"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 py-1.5 flex items-center justify-end gap-4">
          {/* Top Menu Items - pushed to right starting from half screen */}
          <div className="hidden sm:flex items-center gap-3">
            {topMenuItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.href}
                className={`text-xs font-medium transition-colors whitespace-nowrap ${
                  theme === "light"
                    ? "text-gray-600 hover:text-orange-600"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Right side - Language Switcher and ERP Login */}
          <div className="flex items-center gap-3">
            <LanguageSwitcher />
            <a
              href="https://ums.mydsi.org/Login.aspx/DSU"
              target="_blank"
              rel="noopener noreferrer"
              className={`text-xs font-medium transition-colors whitespace-nowrap ${
                theme === "light"
                  ? "text-gray-600 hover:text-orange-600"
                  : "text-white/80 hover:text-white"
              }`}
            >
              ERP Login
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        theme === "light"
          ? "bg-transparent border-b border-transparent"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between h-20">
          {/* Mobile menu button placeholder for spacing */}
          <div className="md:hidden w-12" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-0.5">
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const isAcademics = item.href === "/academics";
              const sharedClasses = `flex items-center space-x-1 px-3 py-1.5 rounded-xl text-sm font-medium font-display transition-all duration-200 group ${
                theme === "light"
                  ? active || (isAbout && aboutMenuOpen) || (isAcademics && academicsMenuOpen)
                    ? "bg-orange-100 text-orange-900 font-semibold"
                    : "text-gray-700 hover:text-orange-600 hover:bg-gray-100"
                  : active || (isAbout && aboutMenuOpen) || (isAcademics && academicsMenuOpen)
                    ? "bg-white/20 text-white font-semibold"
                    : "text-white hover:text-white hover:bg-white/10"
              }`;

              const itemElement = (() => {
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
                      <button onClick={() => setAboutMenuOpen(!aboutMenuOpen)} className={sharedClasses}>
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${aboutMenuOpen ? "rotate-180" : ""}`} />
                        {active && (
                          <div
                            className={`w-1 h-1 rounded-full ${
                              theme === "light" ? "bg-orange-600" : "bg-white"
                            }`}
                          />
                        )}
                      </button>

                      {/* Mega Menu Dropdown */}
                      <div
                        className={`absolute left-0 top-full mt-0 w-64 rounded-lg shadow-2xl transition-all duration-200 py-4 ${
                          aboutMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        } ${
                          theme === "light"
                            ? "bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 border border-orange-200"
                            : "bg-gradient-to-b from-orange-600 to-red-700 text-white"
                        }`}
                      >
                        {aboutSubmenus.map((submenu) => (
                          <Link
                            key={submenu.name}
                            to={submenu.href}
                            onClick={() => setAboutMenuOpen(false)}
                            className={`block px-3 py-2.5 transition-colors text-sm ${
                              theme === "light"
                                ? "hover:bg-orange-200 border-b border-orange-200 last:border-b-0"
                                : "hover:bg-white/20 border-b border-white/20 last:border-b-0"
                            }`}
                          >
                            {submenu.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                if (isAcademics) {
                  return (
                    <div
                      key={idx}
                      className="relative group"
                      onMouseEnter={() => setAcademicsMenuOpen(true)}
                      onMouseLeave={() => setAcademicsMenuOpen(false)}
                    >
                      <button onClick={() => setAcademicsMenuOpen(!academicsMenuOpen)} className={sharedClasses}>
                        <span>{item.name}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform ${academicsMenuOpen ? "rotate-180" : ""}`} />
                        {active && (
                          <div
                            className={`w-1 h-1 rounded-full ${
                              theme === "light" ? "bg-orange-600" : "bg-white"
                            }`}
                          />
                        )}
                      </button>

                      {/* Academics Mega Menu - Multi-column Layout */}
                      <div
                        className={`absolute left-0 top-full mt-0 w-auto min-w-max max-w-5xl rounded-lg shadow-2xl transition-all duration-200 py-4 px-6 max-h-96 overflow-y-auto ${
                          academicsMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        } ${
                          theme === "light"
                            ? "bg-gradient-to-b from-orange-50 to-orange-100 text-gray-900 border border-orange-200"
                            : "bg-gradient-to-b from-orange-600 to-red-700 text-white"
                        }`}
                        style={{
                          scrollbarWidth: 'thin',
                          scrollbarColor: theme === "light" ? 'rgba(249, 115, 22, 0.5) rgba(249, 115, 22, 0.1)' : 'rgba(255, 255, 255, 0.3) rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        <div className="grid grid-cols-4 gap-5">
                          {academicsSubmenus.schools.map((school) => (
                            <div key={school.name}>
                              {school.external ? (
                                <a
                                  href={school.href}
                                  target="_blank"
                                  rel="noreferrer"
                                  className={`block font-semibold text-sm mb-3 transition-colors hover:text-orange-400 ${
                                    theme === "light" ? "text-orange-900" : "text-white"
                                  }`}
                                >
                                  {school.name}
                                </a>
                              ) : (
                                <Link
                                  to={school.href}
                                  onClick={() => setAcademicsMenuOpen(false)}
                                  className={`block font-semibold text-sm mb-3 transition-colors hover:text-orange-400 ${
                                    theme === "light" ? "text-orange-900" : "text-white"
                                  }`}
                                >
                                  {school.name}
                                </Link>
                              )}

                              {(school as any).hasSubGroups ? (
                                <div className="space-y-2 ml-2">
                                  {(school as any).subGroups.map((group: any) => {
                                    const isExpanded = expandedSubGroups.has(`${school.name}-${group.name}`);
                                    return (
                                      <div key={group.name} className="border-l-2 pl-3" style={{
                                        borderColor: theme === "light" ? "rgba(249, 115, 22, 0.3)" : "rgba(255, 255, 255, 0.2)"
                                      }}>
                                        <button
                                          onClick={() => toggleSubGroup(school.name, group.name)}
                                          className={`text-xs font-semibold flex items-center gap-1 transition-colors ${
                                            theme === "light" ? "text-orange-900 hover:text-orange-700" : "text-white/90 hover:text-white"
                                          }`}
                                        >
                                          <ChevronDown
                                            className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                                          />
                                          {group.name}
                                        </button>
                                        {isExpanded && (
                                          <div className="space-y-1 mt-2">
                                            {group.departments.map((dept: any) => (
                                              <Link
                                                key={dept.name}
                                                to={dept.href}
                                                onClick={() => setAcademicsMenuOpen(false)}
                                                className={`block text-xs py-1 transition-colors ${
                                                  theme === "light"
                                                    ? "text-gray-700 hover:text-orange-700"
                                                    : "text-white/80 hover:text-white"
                                                }`}
                                              >
                                                {dept.name}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    );
                                  })}
                                </div>
                              ) : school.departments.length > 0 && (
                                <div className="space-y-2 ml-2 border-l-2 pl-3" style={{
                                  borderColor: theme === "light" ? "rgba(249, 115, 22, 0.3)" : "rgba(255, 255, 255, 0.2)"
                                }}>
                                  {school.departments.map((dept) => (
                                    <Link
                                      key={dept.name}
                                      to={dept.href}
                                      onClick={() => setAcademicsMenuOpen(false)}
                                      className={`block text-xs py-1 transition-colors ${
                                        theme === "light"
                                          ? "text-gray-700 hover:text-orange-700"
                                          : "text-white/80 hover:text-white"
                                      }`}
                                    >
                                      {dept.name}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <Link key={idx} to={item.href} className={sharedClasses}>
                    <span
                      className={
                        item.href === "/centre-of-excellence"
                          ? "max-w-[80px] text-center"
                          : ""
                      }
                    >
                      {item.name}
                    </span>
                    {active && (
                      <div
                        className={`w-1 h-1 rounded-full ${
                          theme === "light" ? "bg-orange-600" : "bg-white"
                        }`}
                      />
                    )}
                  </Link>
                );
              })();

              if (idx === 3) {
                return [
                  itemElement,
                  <Link
                    key="ai-label"
                    to="/ai-first"
                    className={sharedClasses}
                  >
                    <span>AI-First @ DSU</span>
                  </Link>,
                  <Link
                    key="logo"
                    to="/"
                    className={`flex items-center group flex-shrink-0 px-4 py-3 rounded-xl transition-all duration-300 ${
                      theme === "light"
                        ? "bg-white hover:bg-white"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2Fc9f5a55fa7004ae596d21cc4fa4aed1f?format=webp&width=1200"
                      alt="Dayananda Sagar University Logo"
                      className={`h-20 w-auto object-contain group-hover:scale-110 transition-all duration-300 ${
                        theme === "light"
                          ? ""
                          : "brightness-110 drop-shadow-lg"
                      }`}
                    />
                  </Link>,
                  <Link
                    key="nvidia-ai"
                    to="/nvidia-ai-architecture"
                    className={sharedClasses}
                  >
                    <span>NVIDIA's AI Architecture</span>
                  </Link>,
                ];
              }

              return itemElement;
            })}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className={`gap-2 border ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100 border-gray-300"
                  : "text-white/80 hover:text-white hover:bg-white/10 border-white/20"
              }`}
            >
              <Search className="w-4 h-4" />
            </Button>
            <ThemeToggle
              className={
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }
            />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className={
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600"
                  : "text-white/80 hover:text-white"
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
        <div
          className={`md:hidden border-t ${
            theme === "light"
              ? "border-orange-200/30 bg-white"
              : "border-orange-600/20 bg-slate-900"
          }`}
        >
          <div className="px-3 py-4 space-y-3 max-h-[calc(100vh-180px)] overflow-y-auto">
            {/* Main Navigation Items */}
            {navigation.map((item, idx) => {
              const active = !item.external && isActive(item.href);
              const isAbout = item.href === "/about";
              const isAcademics = item.href === "/academics";
              const sharedClasses = `flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium font-display transition-all duration-200 ${
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
                            className={`block px-4 py-1.5 text-sm rounded transition-colors ${
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
                        {academicsSubmenus.schools.map((school, schoolIdx) => (
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
                                className={`block px-4 py-2 text-sm font-semibold rounded transition-colors ${
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
                                className={`block px-4 py-2 text-sm font-semibold rounded transition-colors ${
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
                                {(school as any).subGroups.map((group: any, groupIdx: number) => {
                                  const isExpanded = expandedSubGroups.has(`${school.name}-${group.name}`);
                                  return (
                                    <div key={groupIdx}>
                                      <button
                                        onClick={() => toggleSubGroup(school.name, group.name)}
                                        className={`w-full text-left px-4 py-1 text-xs font-semibold flex items-center gap-1 rounded transition-colors ${
                                          theme === "light" ? "text-orange-900 hover:bg-orange-200" : "text-white/90 hover:bg-white/20"
                                        }`}
                                      >
                                        <ChevronDown
                                          className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-0' : '-rotate-90'}`}
                                        />
                                        {group.name}
                                      </button>
                                      {isExpanded && (
                                        <div className="space-y-1">
                                          {group.departments.map((dept: any, deptIdx: number) => (
                                            <Link
                                              key={deptIdx}
                                              to={dept.href}
                                              onClick={() => {
                                                setIsOpen(false);
                                                setAcademicsMenuOpen(false);
                                              }}
                                              className={`block px-6 py-1 text-xs rounded transition-colors ${
                                                theme === "light"
                                                  ? "text-gray-700 hover:bg-orange-200"
                                                  : "text-white/80 hover:bg-white/20"
                                              }`}
                                            >
                                              {dept.name}
                                            </Link>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            ) : school.departments.length > 0 && (
                              <div className="ml-4 space-y-1">
                                {school.departments.map((dept, deptIdx) => (
                                  <Link
                                    key={deptIdx}
                                    to={dept.href}
                                    onClick={() => {
                                      setIsOpen(false);
                                      setAcademicsMenuOpen(false);
                                    }}
                                    className={`block px-4 py-1 text-xs rounded transition-colors ${
                                      theme === "light"
                                        ? "text-gray-700 hover:bg-orange-200"
                                        : "text-white/80 hover:bg-white/20"
                                    }`}
                                  >
                                    {dept.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
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
                  <span
                    className={
                      item.href === "/centre-of-excellence"
                        ? "max-w-[100px]"
                        : ""
                    }
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
            {/* Additional Menu Items for Mobile */}
            <Link
              to="/ai-first"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium font-display transition-all duration-200 ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              <span>AI-First @ DSU</span>
            </Link>
            <Link
              to="/nvidia-ai-architecture"
              onClick={() => setIsOpen(false)}
              className={`flex items-center space-x-2 px-3 py-2.5 rounded-xl text-sm font-medium font-display transition-all duration-200 ${
                theme === "light"
                  ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                  : "text-white hover:text-white hover:bg-white/10"
              }`}
            >
              <span>NVIDIA's AI Architecture</span>
            </Link>

            <div
              className={`pt-4 space-y-3 border-t ${
                theme === "light" ? "border-orange-200" : "border-white/20"
              }`}
            >
              <Button
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchOpen(true);
                  setIsOpen(false);
                }}
                className={`w-full text-left justify-start gap-3 ${
                  theme === "light"
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
              >
                <Search className="w-4 h-4" />
                <span>Search</span>
              </Button>
              <ThemeToggle
                className={`self-start ${
                  theme === "light"
                    ? "text-gray-700 hover:text-orange-600 hover:bg-orange-100"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`}
                onToggle={() => setIsOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
    </>
  );
}
