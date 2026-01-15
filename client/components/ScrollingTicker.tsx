import { useEffect, useState } from "react";

export default function ScrollingTicker() {
  const tickerItems = [
    "Admissions Open for 2026-27 Batch",
    "AI-Infused Curriculum Across All Programs",
    "Merit Scholarships Available",
    "Industry Partnerships & Internships",
    "NVIDIA AI Architecture Lab",
    "100% Placement Record",
    "International Collaborations",
    "Campus Innovation Hub Now Open",
  ];

  return (
    <div className="relative w-full bg-gradient-to-r from-orange-500 via-red-600 to-orange-500 overflow-hidden py-2 md:py-3">
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
          animation: scroll 40s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
