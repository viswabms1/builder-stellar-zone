import { ReactNode, useEffect, useState } from "react";

interface ResponsiveDeanWrapperProps {
  children: ReactNode;
}

export function ResponsiveDeanWrapper({ children }: ResponsiveDeanWrapperProps) {
  const [isLandscape, setIsLandscape] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsLandscape(window.innerHeight < window.innerWidth);
    };

    checkOrientation();
    window.addEventListener("orientationchange", checkOrientation);
    window.addEventListener("resize", checkOrientation);

    return () => {
      window.removeEventListener("orientationchange", checkOrientation);
      window.removeEventListener("resize", checkOrientation);
    };
  }, []);

  // Mobile landscape: add top margin to prevent overlap
  // Mobile portrait: reduce gap with negative margin
  // Tablet and up: use aggressive negative margin
  const isMobileLandscape = isLandscape && window.innerWidth < 768;
  const marginTop = isMobileLandscape ? "2rem" : "-3rem";
  const marginTopTablet = window.innerWidth >= 768 ? "-10rem" : marginTop;
  const marginTopDesktop = window.innerWidth >= 1024 ? "-5rem" : marginTopTablet;

  return (
    <section
      className="relative overflow-hidden px-3 py-2"
      style={{
        marginTop: marginTopDesktop,
      }}
    >
      {children}
    </section>
  );
}
