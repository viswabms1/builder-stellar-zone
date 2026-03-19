import { Link } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import SearchDialog from "./SearchDialog";

const dsuLogoWhite = "/images/dsu-logo-design-school.png";
const dsuLogoDark = "https://cdn.builder.io/api/v1/image/assets%2F4aa279a8430d441dba9c55f659831878%2F359db0babe0948ae98ad938f84bc1474?format=webp&width=800";

const navItems = [
  { name: "Academics", href: "/academics", external: false },
  { name: "Admissions", href: "/admissions", external: false },
  { name: "Campus Life", href: "/campus-life", external: false },
  { name: "ERP Login", href: "https://ums.mydsi.org/Login.aspx/DSU", external: true },
];

const moreItems = [
  { name: "About", href: "/about" },
  { name: "Placements", href: "/placements" },
  { name: "Centre of Excellence", href: "/centre-of-excellence" },
  { name: "Research", href: "/research" },
  { name: "Alumni", href: "/alumni" },
  { name: "Library", href: "/library" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact-complaints" },
];

type Props = {
  variant?: "light" | "dark";
};

export default function DesignSchoolNavBar({ variant = "light" }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // "light" variant = white text (for dark hero backgrounds)
  // "dark" variant = black text (for light/white backgrounds)
  const isDark = variant === "dark";
  const textColor = isDark ? "text-black" : "text-white";
  const textHover = isDark ? "hover:text-black/60" : "hover:text-white/80";
  const iconFilter = isDark ? "invert(0) brightness(0)" : "";

  return (
    <nav className="absolute top-0 left-0 right-0 z-[10003]">
      {/*
        Fluid container — scales from mobile to 4K.
        Base design: 1440px viewport = 112px height.
        Uses clamp() so nothing gets too small or too large.
      */}
      <div
        className="relative w-full flex items-center justify-between"
        style={{
          height: "clamp(64px, 7.78vw, 140px)",
          paddingLeft: "clamp(16px, 4.65vw, 89px)",
          paddingRight: "clamp(16px, 3.5vw, 68px)",
        }}
      >
        {/* Logo — scales with viewport */}
        <Link to="/" className="flex-shrink-0 overflow-hidden relative" style={{
          width: "clamp(120px, 14.3vw, 275px)",
          height: "clamp(37px, 4.38vw, 84px)",
        }}>
          <img
            src={isDark ? dsuLogoDark : dsuLogoWhite}
            alt="Dayananda Sagar University"
            className={`absolute object-contain ${isDark ? "mix-blend-multiply" : ""}`}
            style={{
              width: isDark ? "100%" : "119.62%",
              height: isDark ? "100%" : "301.79%",
              left: isDark ? "0" : "-8.45%",
              top: isDark ? "0" : "-99.64%",
              maxWidth: "none",
            }}
          />
        </Link>

        {/* Desktop nav items — hidden below 1024px */}
        <div
          className="hidden lg:flex items-center flex-1 justify-center"
          style={{ gap: "clamp(20px, 4.3vw, 83px)" }}
        >
          {navItems.map((item) => {
            const isErp = item.name === "ERP Login";
            const style = {
              fontFamily: "'Manrope', sans-serif",
              fontWeight: isErp ? 400 : 500,
              fontSize: isErp ? "clamp(13px, 1.25vw, 24px)" : "clamp(12px, 1.15vw, 22px)",
              lineHeight: "normal" as const,
            };

            return item.external ? (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`whitespace-nowrap ${textColor} ${textHover} transition-colors`}
                style={style}
              >
                {item.name}
              </a>
            ) : (
              <Link
                key={item.name}
                to={item.href}
                className={`whitespace-nowrap ${textColor} ${textHover} transition-colors`}
                style={style}
              >
                {item.name}
              </Link>
            );
          })}

          {/* More dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => setMoreOpen(false)}
          >
            <button
              className={`flex items-center justify-center ${textColor} ${textHover} transition-colors`}
              style={{
                gap: "clamp(4px, 0.56vw, 10px)",
                padding: "clamp(4px, 0.56vw, 10px)",
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 500,
                fontSize: "clamp(12px, 1.15vw, 22px)",
                lineHeight: "normal",
              }}
            >
              <span>More</span>
              <img
                src="/images/design-nav-list.svg"
                alt=""
                style={{
                  width: "clamp(16px, 1.53vw, 30px)",
                  height: "clamp(16px, 1.53vw, 30px)",
                  ...(iconFilter ? { filter: iconFilter } : {}),
                }}
              />
            </button>

            {moreOpen && (
              <div
                className="absolute top-full right-0 mt-1 backdrop-blur-md shadow-2xl py-2"
                style={{
                  backgroundColor: isDark ? "rgba(255, 255, 255, 0.95)" : "rgba(15, 23, 42, 0.95)",
                  borderRadius: "10px",
                  border: isDark ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)",
                  minWidth: "200px",
                }}
              >
                {moreItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block ${isDark ? "hover:bg-black/5" : "hover:bg-white/10"} transition-colors`}
                    style={{
                      padding: "8px 16px",
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 400,
                      fontSize: "14px",
                      color: isDark ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.85)",
                    }}
                    onClick={() => setMoreOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Desktop right side — Apply Now + Search */}
        <div className="hidden lg:flex items-center flex-shrink-0" style={{ gap: "clamp(10px, 1.4vw, 26px)" }}>
          <a
            href="/admissions"
            className={`flex items-center justify-center flex-shrink-0 ${isDark ? "bg-[#003366]" : "bg-white"}`}
            style={{
              width: "clamp(80px, 7.78vw, 150px)",
              height: "clamp(36px, 3.61vw, 70px)",
              borderRadius: "clamp(7px, 0.69vw, 14px)",
              border: "1px solid #003366",
              fontFamily: "'Graphik Trial', 'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "clamp(12px, 1.15vw, 22px)",
              lineHeight: "normal",
              color: isDark ? "#ffffff" : "#003366",
            }}
          >
            Apply Now!
          </a>

          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center flex-shrink-0"
            aria-label="Search"
          >
            <img
              src="/images/design-nav-search.svg"
              alt="Search"
              style={{
                width: "clamp(24px, 2.5vw, 48px)",
                height: "clamp(24px, 2.5vw, 48px)",
                ...(iconFilter ? { filter: iconFilter } : {}),
              }}
            />
          </button>
        </div>

        {/* Mobile/Tablet — hamburger + search */}
        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="flex items-center justify-center"
            aria-label="Search"
          >
            <img
              src="/images/design-nav-search.svg"
              alt="Search"
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={iconFilter ? { filter: iconFilter } : {}}
            />
          </button>
          <button
            onClick={() => setMobileMenuOpen(true)}
            className={`${textColor} p-1`}
            aria-label="Open menu"
          >
            <img
              src="/images/design-nav-list.svg"
              alt="Menu"
              className="w-7 h-7 sm:w-8 sm:h-8"
              style={iconFilter ? { filter: iconFilter } : {}}
            />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet slide-out menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[10004]">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Panel */}
          <div
            className="absolute top-0 right-0 h-full w-[280px] sm:w-[320px] overflow-y-auto"
            style={{ backgroundColor: "rgba(10, 20, 40, 0.97)" }}
          >
            {/* Close button */}
            <div className="flex justify-end p-4">
              <button onClick={() => setMobileMenuOpen(false)} className="text-white p-1">
                <X className="w-7 h-7" />
              </button>
            </div>

            {/* Nav links */}
            <div className="flex flex-col px-6 pb-8">
              {navItems.map((item) =>
                item.external ? (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 500,
                      fontSize: "17px",
                      padding: "14px 12px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                    style={{
                      fontFamily: "'Manrope', sans-serif",
                      fontWeight: 500,
                      fontSize: "17px",
                      padding: "14px 12px",
                      borderBottom: "1px solid rgba(255,255,255,0.08)",
                    }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ),
              )}

              {/* Divider */}
              <div className="my-3 border-t border-white/15" />

              {/* More items */}
              {moreItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-white/70 hover:text-white hover:bg-white/10 transition-colors rounded-lg"
                  style={{
                    fontFamily: "'Manrope', sans-serif",
                    fontWeight: 400,
                    fontSize: "15px",
                    padding: "12px 12px",
                  }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Apply Now CTA */}
              <a
                href="/admissions"
                className="mt-6 flex items-center justify-center bg-white"
                style={{
                  height: "48px",
                  borderRadius: "10px",
                  border: "1px solid #003366",
                  fontFamily: "'Graphik Trial', 'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#003366",
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                Apply Now!
              </a>
            </div>
          </div>
        </div>
      )}

      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
}
