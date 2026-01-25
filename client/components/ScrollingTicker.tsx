import { useEffect, useState } from "react";

interface TickerItem {
  text: string;
  href?: string;
  external?: boolean;
}

export default function ScrollingTicker() {
  const tickerItems: TickerItem[] = [
    {
      text: "NetZero Conclave",
      href: "https://dsu.edu.in/netzero-conclave/",
      external: true,
    },
    {
      text: "Academic Calendar - Even Semester 2025-26 (SOE)",
      href: "https://dsu.edu.in/images/Engineering/coe/AC_Even_sem_2025_26.pdf",
      external: true,
    },
    {
      text: "Academic Calendar - 2025-26",
      href: "https://dsu.edu.in/images/AC_11082025.pdf",
      external: true,
    },
    {
      text: "Center for Executive Education (CEE)",
      href: "https://dsu.edu.in/academics/cee",
      external: true,
    },
    {
      text: "AIC-DSU Foundation",
      href: "https://dsu.edu.in/images/AIC-DSU_CONTENT.pdf",
      external: true,
    },
    {
      text: "National Anti Ragging Help Line: 1800-180-5522",
    },
    {
      text: "DSU 3 Years LL.B Admissions for School of Law - Contact: 9606484800",
    },
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-brand-blue via-brand-blue/90 to-brand-blue overflow-hidden py-1 md:py-1.5">
      {/* Scrolling Container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="px-4 md:px-6 py-0.5 text-white font-semibold text-xs md:text-sm flex items-center shrink-0"
          >
            <span>•</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="ml-2 hover:text-amber-200 transition-colors cursor-pointer"
              >
                {item.text}
              </a>
            ) : (
              <span className="ml-2">{item.text}</span>
            )}
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tickerItems.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="px-4 md:px-6 py-0.5 text-white font-semibold text-xs md:text-sm flex items-center shrink-0"
          >
            <span>•</span>
            {item.href ? (
              <a
                href={item.href}
                target={item.external ? "_blank" : undefined}
                rel={item.external ? "noopener noreferrer" : undefined}
                className="ml-3 hover:text-amber-200 transition-colors cursor-pointer"
              >
                {item.text}
              </a>
            ) : (
              <span className="ml-3">{item.text}</span>
            )}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 8s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
