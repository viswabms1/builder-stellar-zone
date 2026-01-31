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
      const headerOffset = 80;
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
      {/* Desktop Menu - Not sticky, flows naturally */}
      <div
        className={`hidden md:block transition-all duration-300 bg-background border-b border-border/20`}
        style={{
          padding: "clamp(0.5rem, 1vw, 0.75rem) 1.5rem",
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div 
            className="flex items-center justify-center flex-wrap"
            style={{
              gap: "clamp(0.75rem, 2vw, 1.5rem)",
            }}
          >
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`inline-flex items-center transition-colors duration-200 font-medium whitespace-nowrap ${
                  active === section.id
                    ? "text-brand-blue"
                    : "text-foreground/70 hover:text-foreground"
                }`}
                style={{
                  fontSize: "clamp(0.875rem, 1.1vw, 1rem)",
                }}
                style={{
                  padding: "clamp(0.375rem, 0.5vw, 0.5rem) clamp(0.5rem, 1vw, 0.75rem)",
                }}
              >
                {section.icon && <span className="w-4 h-4 mr-1.5 flex-shrink-0">{section.icon}</span>}
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className="md:hidden">
        <details 
          className="group border-b border-border/20 bg-background/50 backdrop-blur-sm"
        >
          <summary 
            className="flex items-center justify-between cursor-pointer hover:bg-background/80 transition-colors"
            style={{
              padding: "clamp(0.75rem, 2vw, 1rem) 1.5rem",
            }}
          >
            <span className="font-medium text-foreground text-sm">
              {active
                ? sections.find((s) => s.id === active)?.label || "Navigation"
                : "Navigation"}
            </span>
            <ChevronDown className="w-4 h-4 text-foreground/60 group-open:rotate-180 transition-transform flex-shrink-0" />
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
                className={`w-full text-left flex items-center gap-2 text-sm transition-colors border-t border-border/10 first:border-t-0 ${
                  active === section.id
                    ? "bg-brand-blue/10 text-brand-blue font-medium"
                    : "text-foreground/80 hover:bg-background/60"
                }`}
                style={{
                  padding: "clamp(0.625rem, 1.5vw, 0.75rem) 1.5rem",
                }}
              >
                {section.icon && <span className="w-4 h-4 flex-shrink-0">{section.icon}</span>}
                {section.label}
              </button>
            ))}
          </div>
        </details>
      </div>
    </>
  );
}
