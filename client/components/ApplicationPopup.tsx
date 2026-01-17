import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function ApplicationPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClosed, setIsClosed] = useState(false);

  // Handle scroll to show popup after first scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!hasScrolled && window.scrollY > 100) {
        setHasScrolled(true);
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolled]);

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: January 31, 2026, 23:59:59
      const targetDate = new Date("2026-01-31T23:59:59").getTime();
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  if (isClosed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed left-3 bottom-20 z-40 max-w-xs animate-fadeInUp">
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-2 border-red-500/20">
        {/* Close Button */}
        <button
          onClick={() => setIsClosed(true)}
          className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full transition-colors z-50"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-4 pt-4 pb-3">
          <h3 className="text-sm font-bold text-white text-center leading-tight">
            Application Window for CUCET
          </h3>
          <p className="text-xs text-red-100 text-center mt-1 font-semibold">
            (Phase-I) Closes on
          </p>
          <p className="text-xl font-bold text-white text-center mt-2">
            31<sup className="text-sm">st</sup> January 2026
          </p>
        </div>

        {/* Countdown */}
        <div className="px-3 py-4 bg-black">
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINUTES", value: timeLeft.minutes },
              { label: "SECONDS", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-gray-900 rounded-lg p-2 text-center border border-gray-700"
              >
                <div className="text-white font-bold text-lg leading-tight">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-gray-400 text-xs font-semibold mt-1">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-3 py-3 bg-gradient-to-r from-gray-50 to-gray-100">
          <a
            href="https://admissions.dsu.edu.in/"
            target="_blank"
            rel="noreferrer"
            className="block no-underline"
          >
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm">
              APPLY NOW !
            </Button>
          </a>
        </div>

        {/* Footer Note */}
        <div className="px-3 py-2 bg-gray-50 border-t border-gray-200">
          <p className="text-xs text-gray-600 text-center font-medium">
            Don't miss the deadline
          </p>
        </div>
      </div>
    </div>
  );
}
