import { useEffect, useRef, useState } from "react";
import { useScrollTrigger } from "@/hooks/useScrollTrigger";

export function VirtualTourSection() {
  const { elementRef, isVisible } = useScrollTrigger({ threshold: 0.2 });
  const tourLink =
    "https://dsu.edu.in/virtual-tour/#DayanandaSagarUniversity_01,2.01108,-3.39268,75,4";
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Automatically click start button when section becomes visible
  useEffect(() => {
    if (isVisible && iframeRef.current) {
      // Try to interact with iframe to trigger tour
      try {
        const iframeDoc =
          iframeRef.current.contentDocument ||
          iframeRef.current.contentWindow?.document;
        if (iframeDoc) {
          // Find and click the start/play button inside the iframe
          const startButton = iframeDoc.querySelector(
            '[class*="start"], [class*="play"], button[type="button"]',
          );
          if (startButton) {
            (startButton as HTMLElement).click();
          }
        }
      } catch (err) {
        // If iframe interaction fails (due to CORS), open in new window instead
        console.log(
          "Could not interact with iframe, tour will be displayed normally",
        );
      }
    }
  }, [isVisible]);

  return (
    <section
      ref={elementRef}
      className="virtual-tour-section px-3 py-10 md:py-12 pb-4 md:pb-6 relative bg-background"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="headline-2 mb-6">
            <span className="text-foreground">
              Walk the DSU Smart Campus -{" "}
            </span>
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              360° Virtually (Main Campus)
            </span>
          </h2>
          <p className="subheadline text-foreground max-w-2xl mx-auto font-display">
            Explore our state-of-the-art facilities, cutting-edge labs, and
            AI-integrated spaces designed to inspire innovation and
            transformative learning
          </p>
        </div>

        {/* Virtual Tour Embedded - Constrained Width */}
        <div className="mx-auto max-w-4xl bg-background rounded-2xl overflow-hidden h-[47vh] border-2 border-brand-blue/20 shadow-2xl">
          <iframe
            ref={iframeRef}
            title="DSU Virtual Tour"
            src={tourLink}
            frameBorder="0"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
            className="w-full h-full"
            style={{
              border: "none",
            }}
          />
        </div>
      </div>
    </section>
  );
}
