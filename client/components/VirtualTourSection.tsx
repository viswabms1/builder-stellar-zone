import { useState, useEffect } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";
import { ExternalLink, Zap } from "lucide-react";

export function VirtualTourSection() {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.3 });
  const [hasOpened, setHasOpened] = useState(false);
  const tourLink = "https://my.matterport.com/show/?m=nH2v6Nsdy8e&utm_source=dsu&utm_medium=website";

  // Automatically open tour link when section becomes visible on scroll
  useEffect(() => {
    if (isVisible && !hasOpened) {
      // Open the tour in a new tab
      window.open(tourLink, "_blank");
      setHasOpened(true);
    }
  }, [isVisible, hasOpened, tourLink]);

  return (
    <section ref={elementRef} className="px-3 py-10 md:py-16 relative bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-6">
            <span className="text-foreground">Step Inside </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Dayananda Sagar University – Virtually!
            </span>
          </h2>
          <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
            Explore our state-of-the-art campus through an immersive 360° virtual tour
          </p>
        </div>

        {/* Virtual Tour Container */}
        <div className="w-full bg-gradient-to-br from-brand-orange/10 to-brand-blue/10 rounded-2xl overflow-hidden h-96 md:h-[500px] flex items-center justify-center">
          <div className="text-center px-6">
            <div className="mb-6">
              <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 rounded-full flex items-center justify-center">
                <ExternalLink className="w-12 h-12 text-brand-orange animate-pulse" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-foreground mb-3 font-display">
              Virtual Campus Tour
            </h3>
            <p className="text-foreground/70 mb-8 max-w-md mx-auto">
              Explore our state-of-the-art campus with an immersive 360° virtual tour.
              The tour opens automatically or click below to experience it now!
            </p>
            <a
              href={tourLink}
              target="_blank"
              rel="noreferrer"
              onClick={() => setHasOpened(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-orange to-brand-blue hover:from-brand-orange hover:to-brand-blue text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Start Virtual Tour</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Tour Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "360° Campus Views",
              description:
                "Explore every corner of our world-class campus with immersive 360-degree photography",
            },
            {
              title: "Interactive Navigation",
              description:
                "Point, click, and scroll to navigate seamlessly through different campus areas and facilities",
            },
            {
              title: "Accessible Anytime",
              description:
                "Visit our campus virtually at your own pace, 24/7, from anywhere in the world",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 bg-card/50 rounded-xl border border-brand-orange/20 hover:border-brand-orange/40 transition-all duration-300"
            >
              <h3 className="text-lg font-bold text-foreground font-display mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-foreground/70 font-body">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
