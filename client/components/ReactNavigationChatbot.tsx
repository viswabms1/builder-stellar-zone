import { useState, useEffect, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, ChevronDown, Sparkles, ArrowRight, Lightbulb, MapPin, BookOpen, Search, X } from "lucide-react";

interface AcademicProgram {
  title: string;
  path: string;
  description?: string;
}

interface AcademicDepartment {
  title: string;
  emoji?: string;
  programs: AcademicProgram[];
}

interface AcademicSchool {
  title: string;
  emoji: string;
  path: string;
  departments: AcademicDepartment[];
}

interface PageRoute {
  path: string;
  title: string;
  category: string;
  emoji: string;
}

interface NavigationState {
  view: "home";
}

export function ReactNavigationChatbot() {
  const navigate = useNavigate();
  const location = useLocation();
  const chatbotRef = useRef<HTMLDivElement>(null);
  const floatingButtonRef = useRef<HTMLDivElement>(null);

  const [isMinimized, setIsMinimized] = useState(true);
  const [currentPageInfo, setCurrentPageInfo] = useState<PageRoute | null>(null);
  const [navState, setNavState] = useState<NavigationState>({ view: "home" });
  const [currentSchool, setCurrentSchool] = useState<AcademicSchool | null>(null);
  const [currentDepartment, setCurrentDepartment] = useState<AcademicDepartment | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ type: "school" | "department" | "program", school?: AcademicSchool, department?: AcademicDepartment, program?: AcademicProgram, title: string }>>([]);

  // Comprehensive Academic Structure
  const academicSchools: AcademicSchool[] = [
    {
      title: "School of Engineering",
      emoji: "⚙️",
      path: "/academics/engineering",
      departments: [
        {
          title: "Computer Science & Engineering",
          programs: [
            { title: "Overview", path: "/academics/engineering/computer-science" },
            { title: "Faculty", path: "/academics/engineering/computer-science/faculty" },
          ],
        },
        {
          title: "Artificial Intelligence & ML",
          programs: [
            { title: "Overview", path: "/academics/engineering/artificial-intelligence" },
            { title: "Faculty", path: "/academics/engineering/artificial-intelligence/faculty" },
          ],
        },
        {
          title: "AI & Data Science",
          programs: [
            { title: "Overview", path: "/academics/engineering/ai-data-science" },
            { title: "Faculty", path: "/academics/engineering/ai-data-science/faculty" },
          ],
        },
        {
          title: "AI & Robotics",
          programs: [
            { title: "Overview", path: "/academics/engineering/ai-robotics" },
            { title: "Faculty", path: "/academics/engineering/ai-robotics/faculty" },
          ],
        },
        {
          title: "Data Science",
          programs: [
            { title: "Overview", path: "/academics/engineering/data-science" },
            { title: "Faculty", path: "/academics/engineering/data-science/faculty" },
          ],
        },
        {
          title: "Cybersecurity",
          programs: [
            { title: "Overview", path: "/academics/engineering/cybersecurity" },
            { title: "Faculty", path: "/academics/engineering/cybersecurity/faculty" },
          ],
        },
        {
          title: "Computer Technology",
          programs: [
            { title: "Overview", path: "/academics/engineering/computer-technology" },
            { title: "Faculty", path: "/academics/engineering/computer-technology/faculty" },
          ],
        },
        {
          title: "Medical Engineering",
          programs: [
            { title: "Overview", path: "/academics/engineering/cs-medical-engineering" },
            { title: "Faculty", path: "/academics/engineering/cs-medical-engineering/faculty" },
          ],
        },
        {
          title: "Mechanical Engineering",
          programs: [
            { title: "Overview", path: "/academics/engineering/mechanical-engineering" },
            { title: "Faculty", path: "/academics/engineering/mechanical-engineering/faculty" },
          ],
        },
        {
          title: "Aerospace Engineering",
          programs: [
            { title: "Overview", path: "/academics/engineering/aerospace-engineering" },
            { title: "Faculty", path: "/academics/engineering/aerospace-engineering/faculty" },
          ],
        },
        {
          title: "Electronics & Communication",
          programs: [
            { title: "Overview", path: "/academics/engineering/electronics-communication" },
            { title: "Faculty", path: "/academics/engineering/electronics-communication/faculty" },
          ],
        },
      ],
    },
    {
      title: "School of Health Sciences",
      emoji: "🏥",
      path: "/academics/health-sciences",
      departments: [
        {
          title: "Nursing",
          programs: [
            { title: "B.Sc Nursing", path: "/academics/health-sciences/bsc-nursing" },
            { title: "Post Basic B.Sc Nursing", path: "/academics/health-sciences/pb-bsc-nursing" },
            { title: "M.Sc Nursing", path: "/academics/health-sciences/msc-nursing" },
            { title: "Faculty", path: "/academics/health-sciences/nursing/faculty" },
          ],
        },
        {
          title: "Physiotherapy",
          programs: [
            { title: "BPT", path: "/academics/health-sciences/bpt" },
            { title: "MPT", path: "/academics/health-sciences/mpt" },
            { title: "Faculty", path: "/academics/health-sciences/physiotherapy/faculty" },
          ],
        },
        {
          title: "Pharmacy",
          programs: [
            { title: "B.Pharm", path: "/academics/health-sciences/b-pharm" },
            { title: "Pharm.D", path: "/academics/health-sciences/pharm-d" },
            { title: "M.Pharm Pharmaceutics", path: "/academics/health-sciences/m-pharm-pharmaceutics" },
            { title: "M.Pharm Pharmacology", path: "/academics/health-sciences/m-pharm-pharmacology" },
            { title: "Faculty", path: "/academics/health-sciences/pharmacy/faculty" },
          ],
        },
        {
          title: "Allied Health Sciences",
          programs: [
            { title: "Overview", path: "/academics/health-sciences/allied-health" },
            { title: "B.Sc", path: "/academics/health-sciences/allied-health-bsc" },
            { title: "M.P.H", path: "/academics/health-sciences/mph" },
          ],
        },
        {
          title: "CDSIMER",
          programs: [
            { title: "Overview", path: "/academics/health-sciences/cdsimer" },
            { title: "Hospital", path: "/academics/health-sciences/cdsimer/hospital" },
            { title: "Life", path: "/academics/health-sciences/cdsimer/life" },
          ],
        },
      ],
    },
    {
      title: "School of Law",
      emoji: "⚖️",
      path: "/academics/law",
      departments: [
        {
          title: "Undergraduate Programs",
          programs: [
            { title: "BA LLB (Hons)", path: "/academics/law/ba-llb-honors" },
            { title: "BBA LLB (Hons)", path: "/academics/law/bba-llb-honors" },
            { title: "LLB (3 Year)", path: "/academics/law/llb-3-year" },
          ],
        },
        {
          title: "Postgraduate Programs",
          programs: [
            { title: "LLM - Law & Technology", path: "/academics/law/llm-law-technology" },
            { title: "LLM - Corporate & Commercial", path: "/academics/law/llm-corporate-commercial" },
          ],
        },
        {
          title: "Faculty & Resources",
          programs: [
            { title: "Programs Overview", path: "/academics/law/programs" },
            { title: "Faculty", path: "/academics/law/faculty" },
          ],
        },
      ],
    },
    {
      title: "School of Commerce & Management",
      emoji: "💼",
      path: "/academics/management-studies",
      departments: [
        {
          title: "Undergraduate",
          programs: [
            { title: "B.Com", path: "/academics/commerce-and-management/bcom" },
            { title: "BBA", path: "/academics/commerce-and-management/bba" },
          ],
        },
        {
          title: "Postgraduate",
          programs: [
            { title: "MBA", path: "/academics/commerce-and-management/mba" },
            { title: "Executive Education", path: "/academics/cee" },
          ],
        },
        {
          title: "Faculty",
          programs: [
            { title: "B.Com & BBA Faculty", path: "/academics/commerce-and-management/bcom/faculty" },
            { title: "MBA Faculty", path: "/academics/commerce-and-management/mba/faculty" },
          ],
        },
      ],
    },
    {
      title: "School of Basic & Applied Sciences",
      emoji: "🧪",
      path: "/academics/basic-applied-sciences",
      departments: [
        {
          title: "Physics",
          programs: [
            { title: "Overview", path: "/academics/physics" },
            { title: "Faculty", path: "/academics/physics/faculty" },
          ],
        },
        {
          title: "Chemistry",
          programs: [
            { title: "Overview", path: "/academics/chemistry" },
            { title: "Faculty", path: "/academics/chemistry/faculty" },
          ],
        },
        {
          title: "Mathematics",
          programs: [
            { title: "Overview", path: "/academics/mathematics" },
            { title: "Faculty", path: "/academics/mathematics/faculty" },
          ],
        },
        {
          title: "Undergraduate Programs",
          programs: [
            { title: "B.Sc Triple Major", path: "/academics/basic-applied-sciences/bsc-triple-major" },
            { title: "M.Sc Specializations", path: "/academics/basic-applied-sciences/msc-specializations" },
          ],
        },
        {
          title: "Faculty",
          programs: [
            { title: "Faculty List", path: "/academics/basic-applied-sciences/faculty" },
          ],
        },
      ],
    },
    {
      title: "School of Computer Applications",
      emoji: "💻",
      path: "/academics/computer-applications",
      departments: [
        {
          title: "Undergraduate",
          programs: [
            { title: "BCA", path: "/academics/computer-applications/bca" },
            { title: "B.Sc Data Science", path: "/academics/computer-applications/data-science" },
          ],
        },
        {
          title: "Postgraduate",
          programs: [
            { title: "MCA", path: "/academics/computer-applications/mca" },
            { title: "M.Sc Data Science", path: "/academics/computer-applications/msc-data-science" },
          ],
        },
        {
          title: "Faculty",
          programs: [
            { title: "Faculty List", path: "/academics/computer-applications/faculty" },
          ],
        },
      ],
    },
    {
      title: "School of Design & Digital Trans-Media",
      emoji: "🎨",
      path: "/academics/design/bdesign",
      departments: [
        {
          title: "B.Design Programs",
          programs: [
            { title: "Overview", path: "/academics/design/bdesign" },
            { title: "Program Details", path: "/academics/design/bdesign/program" },
          ],
        },
      ],
    },
    {
      title: "School of Arts, Design & Humanities",
      emoji: "📰",
      path: "/academics/journalism-mass-communication",
      departments: [
        {
          title: "Programs",
          programs: [
            { title: "Overview", path: "/academics/journalism-mass-communication" },
            { title: "BA Journalism", path: "/academics/journalism-mass-communication/ba" },
            { title: "Faculty", path: "/academics/journalism-mass-communication/faculty" },
          ],
        },
      ],
    },
  ];

  const otherCategories = [
    {
      name: "About DSU",
      emoji: "🏫",
      pages: [
        { title: "Vision & Mission", path: "/vision-mission", description: "Our direction & purpose" },
        { title: "About Us", path: "/about", description: "Explore our story" },
        { title: "Leadership", path: "/leadership", description: "Meet our leaders" },
      ],
    },
    {
      name: "Research & Innovation",
      emoji: "🔬",
      pages: [
        { title: "Research Center", path: "/research", description: "Our research initiatives" },
        { title: "Centre of Excellence", path: "/centre-of-excellence", description: "Our excellence centers" },
        { title: "AI-First Initiative", path: "/ai-first", description: "AI-powered education" },
        { title: "NVIDIA Architecture", path: "/nvidia-architecture", description: "AI infrastructure" },
      ],
    },
    {
      name: "Student Life",
      emoji: "🎓",
      pages: [
        { title: "Campus Life", path: "/campus-life", description: "Experience campus" },
        { title: "Placements", path: "/placements", description: "Career opportunities" },
        { title: "Library", path: "/library", description: "Our library resources" },
        { title: "E-Resources", path: "/library/e-resources", description: "Digital library" },
        { title: "Examinations", path: "/examinations", description: "Exam resources" },
      ],
    },
    {
      name: "Community",
      emoji: "🌍",
      pages: [
        { title: "Alumni", path: "/alumni", description: "Alumni community" },
        { title: "Contact Us", path: "/contact", description: "Get in touch" },
      ],
    },
  ];

  // Handle search
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: typeof searchResults = [];

    // Search schools
    academicSchools.forEach((school) => {
      if (school.title.toLowerCase().includes(query)) {
        results.push({
          type: "school",
          school,
          title: school.title,
        });
      }

      // Search departments within school
      school.departments.forEach((dept) => {
        if (dept.title.toLowerCase().includes(query)) {
          results.push({
            type: "department",
            school,
            department: dept,
            title: `${dept.title} (${school.title})`,
          });
        }

        // Search programs within department
        dept.programs.forEach((prog) => {
          if (prog.title.toLowerCase().includes(query)) {
            results.push({
              type: "program",
              school,
              department: dept,
              program: prog,
              title: `${prog.title} (${dept.title})`,
            });
          }
        });
      });
    });

    // Search other categories
    otherCategories.forEach((cat) => {
      cat.pages.forEach((page) => {
        if (page.title.toLowerCase().includes(query)) {
          results.push({
            type: "program",
            program: { title: page.title, path: page.path },
            title: `${page.title} (${cat.name})`,
          });
        }
      });
    });

    setSearchResults(results.slice(0, 8)); // Limit to 8 results
  }, [searchQuery]);

  // Handle clicks outside chatbot to minimize
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        chatbotRef.current &&
        floatingButtonRef.current &&
        !chatbotRef.current.contains(target) &&
        !floatingButtonRef.current.contains(target)
      ) {
        setIsMinimized(true);
      }
    };

    if (!isMinimized) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMinimized]);

  // Detect current page and related context
  useEffect(() => {
    let foundSchool: AcademicSchool | null = null;
    let foundDept: AcademicDepartment | null = null;

    // Check in academics schools
    for (const school of academicSchools) {
      // Check if we're on this school's overview page
      if (location.pathname === school.path) {
        setCurrentSchool(school);
        setCurrentDepartment(null);
        setCurrentPageInfo({
          path: location.pathname,
          title: school.title,
          category: "Academics",
          emoji: school.emoji,
        });
        return;
      }

      // Check departments and programs
      for (const dept of school.departments) {
        for (const prog of dept.programs) {
          if (prog.path === location.pathname) {
            foundSchool = school;
            foundDept = dept;
            setCurrentSchool(school);
            setCurrentDepartment(dept);
            setCurrentPageInfo({
              path: location.pathname,
              title: prog.title,
              category: school.title,
              emoji: school.emoji,
            });
            return;
          }
        }
      }
    }

    // Check in other categories
    setCurrentSchool(null);
    setCurrentDepartment(null);
    for (const cat of otherCategories) {
      for (const page of cat.pages) {
        if (page.path === location.pathname) {
          setCurrentPageInfo({
            path: location.pathname,
            title: page.title,
            category: cat.name,
            emoji: cat.emoji,
          });
          return;
        }
      }
    }
  }, [location.pathname]);

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  const handleSchoolClick = (school: AcademicSchool) => {
    // Navigate directly to school's overview page
    navigate(school.path);
  };

  const handleDepartmentClick = (department: AcademicDepartment) => {
    // Navigate to first program in the department
    if (department.programs.length > 0) {
      navigate(department.programs[0].path);
    }
  };

  const handleBackToSchool = () => {
    if (currentSchool) {
      navigate(currentSchool.path);
    }
  };

  const handleBackToAllSchools = () => {
    navigate("/academics");
  };


  return (
    <>
      {/* Floating Button */}
      {isMinimized && (
        <div ref={floatingButtonRef} className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsMinimized(false)}
            className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white animate-bounce"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>
        </div>
      )}

      {/* Chat Modal */}
      {!isMinimized && (
        <div
          ref={chatbotRef}
          className="fixed bottom-6 right-6 z-50 w-96 max-h-[85vh] flex flex-col rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-slate-700/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-b border-slate-700/50 p-4 flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              <div>
                <h3 className="font-bold text-white text-sm">Nav Chatbot</h3>
                <p className="text-xs text-slate-400">Explore DSU</p>
              </div>
            </div>
            <button
              onClick={() => setIsMinimized(true)}
              className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          {/* Search Bar */}
          <div className="p-3 border-b border-slate-700/50 sticky top-0 z-20 bg-slate-900/80 backdrop-blur">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="text"
                placeholder="Search schools, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-9 py-2 rounded-lg bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors text-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-2.5 hover:text-slate-300 transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">

            {/* Search Results */}
            {searchQuery && searchResults.length > 0 && (
              <div className="space-y-2 animate-in fade-in duration-200">
                <p className="text-xs font-semibold text-slate-400 uppercase px-2">Search Results</p>
                {searchResults.map((result, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      if (result.type === "school" && result.school) {
                        handleSchoolClick(result.school);
                        setSearchQuery("");
                      } else if (result.type === "department" && result.school && result.department) {
                        setCurrentSchool(result.school);
                        setCurrentDepartment(result.department);
                        setSearchQuery("");
                      } else if (result.program) {
                        handleNavigate(result.program.path);
                        setSearchQuery("");
                      }
                    }}
                    className="w-full p-3 rounded-lg bg-gradient-to-r from-slate-700/30 to-slate-800/30 border border-slate-600/30 hover:border-pink-500/50 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-rose-500/20 transition-all duration-300 text-left group"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold text-white group-hover:text-pink-300">{result.title}</p>
                        <p className="text-xs text-slate-400 mt-0.5">
                          {result.type === "school" && "🏫 School"}
                          {result.type === "department" && "📚 Department"}
                          {result.type === "program" && "📖 Program"}
                        </p>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-pink-400" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {searchQuery && searchResults.length === 0 && (
              <div className="p-4 text-center">
                <p className="text-sm text-slate-400">No results found for "{searchQuery}"</p>
              </div>
            )}

            {/* Current Page Info */}
            {!searchQuery && currentPageInfo && (
              <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/30 mb-2">
                <p className="text-xs text-slate-400 mb-1">Currently Viewing</p>
                <p className="text-sm font-semibold text-blue-300">{currentPageInfo.emoji} {currentPageInfo.title}</p>
              </div>
            )}

            {/* Navigation Breadcrumbs and Back Buttons */}
            {!searchQuery && currentDepartment && currentSchool && (
              <div className="space-y-2">
                <button
                  onClick={handleBackToSchool}
                  className="w-full p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 transition-colors text-left"
                >
                  <p className="text-xs font-semibold text-amber-300">← Back to {currentSchool.emoji} {currentSchool.title}</p>
                </button>
              </div>
            )}

            {!searchQuery && currentSchool && !currentDepartment && (
              <div className="space-y-2">
                <button
                  onClick={handleBackToAllSchools}
                  className="w-full p-2 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/30 transition-colors text-left"
                >
                  <p className="text-xs font-semibold text-amber-300">← Back to All Schools</p>
                </button>
              </div>
            )}

            {/* Context-Aware View */}
            {!searchQuery && navState.view === "home" && (
              <div className="space-y-3">
                {/* If on a School page, show its departments */}
                {currentSchool && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">📚 {currentSchool.title} Departments</p>
                    <div className="space-y-1">
                      {currentSchool.departments.map((dept, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleDepartmentClick(dept)}
                          className="w-full p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left group"
                        >
                          <p className="text-xs font-semibold text-white group-hover:text-blue-300">{dept.title}</p>
                          <p className="text-xs text-slate-400">{dept.programs.length} programs</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* If on a Department page, show its programs */}
                {currentSchool && currentDepartment && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">📖 Programs in {currentDepartment.title}</p>
                    <div className="space-y-1">
                      {currentDepartment.programs.map((prog, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleNavigate(prog.path)}
                          className="w-full p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left group"
                        >
                          <p className="text-xs font-semibold text-white group-hover:text-green-300">{prog.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* If not on academics page, show all schools */}
                {!currentSchool && (
                  <div>
                    <p className="text-xs font-semibold text-slate-400 uppercase px-2 mb-2">📚 Academics</p>
                    <div className="space-y-1">
                      {academicSchools.map((school) => (
                        <button
                          key={school.title}
                          onClick={() => handleSchoolClick(school)}
                          className="w-full p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left group"
                        >
                          <p className="text-xs font-semibold text-white group-hover:text-purple-300">{school.emoji} {school.title}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Other Categories */}
                {otherCategories.map((cat) => (
                  <div key={cat.name} className="space-y-2">
                    <p className="text-xs font-semibold text-slate-400 uppercase px-2">{cat.emoji} {cat.name}</p>
                    <div className="space-y-1">
                      {cat.pages.map((page) => (
                        <button
                          key={page.path}
                          onClick={() => handleNavigate(page.path)}
                          className="w-full p-2 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors text-left"
                        >
                          <p className="text-xs font-semibold text-white">{page.title}</p>
                          <p className="text-xs text-slate-400">{page.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

          </div>

          {/* Footer */}
          <div className="border-t border-slate-700/50 bg-slate-900/50 p-2 text-center sticky bottom-0 z-10">
            <p className="text-xs text-slate-500">React × Tailwind</p>
          </div>
        </div>
      )}
    </>
  );
}
