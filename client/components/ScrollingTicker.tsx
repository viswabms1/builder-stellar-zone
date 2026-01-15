import { useEffect, useState } from "react";

export default function ScrollingTicker() {
  const tickerItems = [
    "Net Zero Conclave on 29/12/2025",
    "Academic Calendar for 2025-26 Even Semester (SOE)",
    "Academic Calendar for 2025-26",
    "Apply for March 2026 Executive MBA Batch - Contact: Aravind N.V. 9972598981 / aravind.nv@dsu.edu.in",
    "National Anti Ragging Help Line: 1800-180-5522",
    "DSU 3 Years LL.B Admissions for School of Law - Contact: 9606484800",
    "AIC-DSU Foundation - Scholarships for Research Scholars & Scientific Officers",
    "AICTE Recognition",
  ];

  return (
    <div className="relative w-full bg-blue-900 overflow-hidden py-1 md:py-1.5">
      {/* Scrolling Container */}
      <div className="flex animate-scroll whitespace-nowrap">
        {/* First set of items */}
        {tickerItems.map((item, index) => (
          <div
            key={index}
            className="px-6 md:px-8 py-1 text-white font-semibold text-xs md:text-sm flex items-center shrink-0"
          >
            <span>•</span>
            <span className="ml-3">{item}</span>
          </div>
        ))}
        {/* Duplicate set for seamless loop */}
        {tickerItems.map((item, index) => (
          <div
            key={`duplicate-${index}`}
            className="px-6 md:px-8 py-1 text-white font-semibold text-xs md:text-sm flex items-center shrink-0"
          >
            <span>•</span>
            <span className="ml-3">{item}</span>
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
          animation: scroll 12s linear infinite;
        }

        @media (min-width: 768px) {
          .animate-scroll {
            animation: scroll 30s linear infinite;
          }
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
