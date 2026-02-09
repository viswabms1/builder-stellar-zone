import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { MessageCircle, ChevronDown, Sparkles, ArrowRight, Lightbulb } from "lucide-react";

interface PageCategory {
  name: string;
  emoji: string;
  pages: {
    title: string;
    path: string;
    description: string;
    category?: string;
  }[];
}

interface PageRoute {
  path: string;
  title: string;
  category: string;
  emoji: string;
  relatedPages: string[];
}

export function ReactNavigationChatbot() {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [isMinimized, setIsMinimized] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentPageInfo, setCurrentPageInfo] = useState<PageRoute | null>(null);

  const pageCategories: PageCategory[] = [
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
      name: "Academics",
      emoji: "📚",
      pages: [
        { title: "School of Engineering", path: "/academics/engineering", description: "Engineering programs" },
        { title: "School of Health Sciences", path: "/academics/health-sciences", description: "Health sciences programs" },
        { title: "School of Commerce", path: "/academics/commerce", description: "Commerce & management" },
        { title: "Electronics & Communication", path: "/academics/engineering/electronics-communication", description: "ECE department" },
        { title: "AI-Infused Academics", path: "/ai-infused-academics", description: "AI in education" },
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

  // Create a flat map of all pages for quick lookup
  const allPages = pageCategories.flatMap((cat) =>
    cat.pages.map((page) => ({
      ...page,
      category: cat.name,
      categoryEmoji: cat.emoji,
    }))
  );

  // Detect current page and show related suggestions
  useEffect(() => {
    const current = allPages.find((p) => p.path === location.pathname);
    if (current) {
      setCurrentPageInfo({
        path: location.pathname,
        title: current.title,
        category: current.category,
        emoji: current.categoryEmoji,
        relatedPages: allPages
          .filter((p) => p.category === current.category && p.path !== location.pathname)
          .slice(0, 3)
          .map((p) => p.path),
      });
      // Switch to home view when on a page
      setSelectedCategory(null);
    }
  }, [location.pathname]);

  // Typing animation effect
  useEffect(() => {
    if (!isTyping) return;

    const messages = [
      "Welcome to React Navigation Chatbot! 👋",
      "I'm here to help you explore DSU's amazing pages.",
      "Pick a category below to get started! 🚀",
    ];

    let currentMessageIndex = 0;
    let currentCharIndex = 0;
    let fullText = "";

    const typeInterval = setInterval(() => {
      if (currentMessageIndex < messages.length) {
        if (currentCharIndex < messages[currentMessageIndex].length) {
          fullText += messages[currentMessageIndex][currentCharIndex];
          setDisplayedText(fullText);
          currentCharIndex++;
        } else {
          fullText += "\n\n";
          currentMessageIndex++;
          currentCharIndex = 0;
        }
      } else {
        setIsTyping(false);
        clearInterval(typeInterval);
      }
    }, 30);

    return () => clearInterval(typeInterval);
  }, [isTyping]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
  };

  const handlePageClick = (path: string) => {
    navigate(path);
    // Don't minimize - keep chatbot open with dynamic suggestions
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  const getRelatedPages = () => {
    if (!currentPageInfo) return [];
    return allPages.filter((p) => currentPageInfo.relatedPages.includes(p.path));
  };

  return (
    <>
      {/* Floating Button - Only show when minimized */}
      {isMinimized && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={handleExpand}
            className="group relative h-16 w-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-110 flex items-center justify-center text-white animate-bounce"
          >
            <MessageCircle className="h-7 w-7" />
            <span className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 blur-xl transition-opacity" />
          </button>
        </div>
      )}

      {/* Chat Modal - Always visible unless minimized */}
      {!isMinimized && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-h-[85vh] flex flex-col rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-black border border-slate-700/50 shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 border-b border-slate-700/50 p-4 flex items-center justify-between sticky top-0">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-white">React Nav Chatbot</h3>
                <p className="text-xs text-slate-400">Explore DSU pages</p>
              </div>
            </div>
            <button
              onClick={handleMinimize}
              className="p-1 hover:bg-slate-700/50 rounded-lg transition-colors"
            >
              <ChevronDown className="h-5 w-5 text-slate-400" />
            </button>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {/* Show current page info if on a page */}
            {currentPageInfo && !selectedCategory && (
              <div className="mb-4 p-4 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30">
                <div className="flex items-start gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold text-green-300 uppercase tracking-wide">You are viewing</p>
                    <p className="text-sm font-bold text-white mt-1">{currentPageInfo.emoji} {currentPageInfo.title}</p>
                  </div>
                </div>

                {/* Related pages suggestion */}
                {getRelatedPages().length > 0 && (
                  <div className="mt-3 pt-3 border-t border-green-500/20">
                    <p className="text-xs text-green-300 font-semibold mb-2">Related pages:</p>
                    <div className="space-y-2">
                      {getRelatedPages().map((page) => (
                        <button
                          key={page.path}
                          onClick={() => handlePageClick(page.path)}
                          className="w-full text-left p-2 rounded-lg bg-slate-700/40 hover:bg-green-500/30 transition-all duration-200 group"
                        >
                          <p className="text-xs font-semibold text-green-300 group-hover:text-green-200">
                            {page.title}
                          </p>
                          <p className="text-xs text-slate-400 mt-0.5">{page.description}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {!selectedCategory ? (
              <>
                {/* Welcome Message */}
                {displayedText && !currentPageInfo && (
                  <div className="text-sm text-slate-300 whitespace-pre-wrap mb-4">
                    {displayedText}
                    {isTyping && <span className="animate-pulse">▋</span>}
                  </div>
                )}

                {/* Categories Grid */}
                <div className="grid grid-cols-2 gap-3">
                  {pageCategories.map((category) => (
                    <button
                      key={category.name}
                      onClick={() => handleCategoryClick(category.name)}
                      className="group p-3 rounded-xl bg-gradient-to-br from-slate-700/30 to-slate-800/30 border border-slate-600/50 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-blue-500/20 hover:to-purple-500/20 transition-all duration-300 text-left"
                    >
                      <div className="text-2xl mb-2">{category.emoji}</div>
                      <p className="text-sm font-semibold text-white group-hover:text-blue-300 transition-colors">
                        {category.name}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{category.pages.length} pages</p>
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <>
                {/* Back Button & Category Title */}
                <div className="flex items-center justify-between mb-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className="text-sm text-slate-400 hover:text-white transition-colors flex items-center gap-1"
                  >
                    ← Back
                  </button>
                  <h4 className="text-sm font-semibold text-white">
                    {pageCategories.find((c) => c.name === selectedCategory)?.emoji}{" "}
                    {selectedCategory}
                  </h4>
                </div>

                {/* Pages List */}
                <div className="space-y-2">
                  {pageCategories
                    .find((c) => c.name === selectedCategory)
                    ?.pages.map((page) => (
                      <button
                        key={page.path}
                        onClick={() => handlePageClick(page.path)}
                        className="w-full p-3 rounded-xl bg-gradient-to-r from-slate-700/20 to-slate-800/20 border border-slate-600/30 hover:border-purple-500/50 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 transition-all duration-300 text-left group"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-white group-hover:text-purple-300 transition-colors">
                              {page.title}
                            </p>
                            <p className="text-xs text-slate-400 mt-1">{page.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-500 group-hover:text-purple-400 transition-colors flex-shrink-0" />
                        </div>
                      </button>
                    ))}
                </div>
              </>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-slate-700/50 bg-slate-900/50 p-3 text-center sticky bottom-0">
            <p className="text-xs text-slate-500">
              Built with <span className="text-blue-400 font-semibold">React</span> &{" "}
              <span className="text-pink-400 font-semibold">Tailwind</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
