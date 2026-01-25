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
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClosed, setIsClosed] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [hasBeenShown, setHasBeenShown] = useState(false);

  // Handle scroll to show popup on first scroll, then hide on scroll back to top
  useEffect(() => {
    const handleScroll = () => {
      if (!isClosed) {
        const isScrolledDown = window.scrollY > 100;

        if (isScrolledDown && !hasBeenShown && !isVisible) {
          // Show popup on first scroll down only
          setIsVisible(true);
          setHasBeenShown(true);
          setIsFadingOut(false);
        } else if (!isScrolledDown && isVisible && hasBeenShown) {
          // Hide popup when scrolling back to top (don't show again)
          setIsFadingOut(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 300);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isVisible, isClosed, isFadingOut, hasBeenShown]);

  // Countdown timer logic
  useEffect(() => {
    const calculateTimeLeft = () => {
      // Target date: February 10, 2026, 23:59:59
      const targetDate = new Date("2026-02-10T23:59:59").getTime();
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
    <div
      className={`fixed left-3 bottom-20 z-40 ${
        isFadingOut ? "animate-fadeOutDown" : "animate-fadeInUp"
      }`}
      style={{ maxWidth: "288px" }}
    >
      <div className="bg-background rounded-xl shadow-2xl overflow-visible border-2 border-brand-orange/30 backdrop-blur-sm relative">
        {/* Close Button - Top Right Corner */}
        <button
          onClick={() => setIsClosed(true)}
          className="absolute -top-2 -right-2 p-1 hover:bg-brand-orange/80 rounded-full transition-colors z-50 bg-brand-orange/60 shadow-lg"
          aria-label="Close"
        >
          <X className="w-4 h-4 text-white" />
        </button>

        {/* Header - Brand Gradient */}
        <div className="bg-gradient-to-r from-brand-orange to-brand-blue px-3 pt-2.5 pb-2.5">
          <p className="body-sm text-white/90 text-center font-semibold leading-tight">
            Application window for PhD Admissions
          </p>
          <p className="body-sm text-white/90 text-center mt-1 font-semibold leading-tight">
            (2025-26 Even sem) Closes on
          </p>
          <p className="title-xs font-bold text-white text-center mt-2">
            10<sup className="body-sm">th</sup> February 2026
          </p>
        </div>

        {/* Countdown - Dark Theme */}
        <div className="px-2 py-2.5 bg-card/50">
          <div className="grid grid-cols-4 gap-1.5">
            {[
              { label: "DAYS", value: timeLeft.days },
              { label: "HOURS", value: timeLeft.hours },
              { label: "MINS", value: timeLeft.minutes },
              { label: "SECS", value: timeLeft.seconds },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-background rounded-md p-1 text-center border border-brand-orange/20 overflow-hidden"
              >
                <div className="text-brand-orange font-bold body-md leading-tight">
                  {String(item.value).padStart(2, "0")}
                </div>
                <div className="text-foreground/60 body-sm font-semibold mt-0.5 leading-tight truncate">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="px-2 py-2 bg-foreground/5 border-t border-brand-orange/20">
          <a
            href="https://www.dsu.edu.in/images/phd/Syllabus/2025_dec/Application_2025.pdf"
            target="_blank"
            rel="noreferrer"
            className="block no-underline"
          >
            <Button className="w-full bg-gradient-to-r from-brand-orange to-brand-blue hover:from-brand-orange hover:to-brand-blue text-white font-bold py-2 px-2 rounded-md transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-brand-orange/50 body-sm">
              APPLY NOW !
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
