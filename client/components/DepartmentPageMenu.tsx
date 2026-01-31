import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface MenuSection {
  id: string;
  label: string;
  icon?: React.ReactNode;
}

interface DepartmentPageMenuProps {
  sections: MenuSection[];
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

export function DepartmentPageMenu({
  sections,
  activeSection,
  onSectionClick,
}: DepartmentPageMenuProps) {
  const [active, setActive] = useState<string | undefined>(activeSection);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Determine if we should show sticky menu
      const heroSection = document.querySelector(".dept-hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsSticky(heroBottom <= 0);
      }

      // Update active section based on scroll position
      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      setActive(sectionId);
      onSectionClick?.(sectionId);
      
      // Smooth scroll to section
      const headerOffset = 80; // Account for sticky header if needed
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Desktop Menu - Sticky after hero */}
      <div
        className={`hidden md:block transition-all duration-300 ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/50 shadow-sm"
            : "relative bg-background border-b border-border/20"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-center gap-8 py-4">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`flex items-center gap-2 text-sm font-medium transition-colors duration-200 py-2 px-3 rounded-md ${
                  active === section.id
                    ? "text-brand-blue bg-brand-blue/10"
                    : "text-foreground/70 hover:text-foreground"
                }`}
              >
                {section.icon && <span className="w-4 h-4">{section.icon}</span>}
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <details className="group border-b border-border/20 bg-background/50 backdrop-blur-sm">
          <summary className="flex items-center justify-between px-6 py-4 cursor-pointer hover:bg-background/80 transition-colors">
            <span className="font-medium text-foreground">
              {active
                ? sections.find((s) => s.id === active)?.label || "Navigation"
                : "Navigation"}
            </span>
            <ChevronDown className="w-4 h-4 text-foreground/60 group-open:rotate-180 transition-transform" />
          </summary>
          <div className="bg-background/80 backdrop-blur-sm border-t border-border/10">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  handleClick(section.id);
                  // Close the details element
                  const details = document.querySelector(
                    "details[open]"
                  ) as HTMLDetailsElement;
                  if (details) details.open = false;
                }}
                className={`w-full text-left px-6 py-3 flex items-center gap-2 text-sm transition-colors border-t border-border/10 first:border-t-0 ${
                  active === section.id
                    ? "bg-brand-blue/10 text-brand-blue font-medium"
                    : "text-foreground/80 hover:bg-background/60"
                }`}
              >
                {section.icon && <span className="w-4 h-4">{section.icon}</span>}
                {section.label}
              </button>
            ))}
          </div>
        </details>
      </div>
    </>
  );
}
