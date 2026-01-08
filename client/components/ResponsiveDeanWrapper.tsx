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
  const marginClass = isMobileLandscape ? "mt-8" : "-mt-12";
  const paddingClass = "py-2";
  const tabletMargin = "md:-mt-40";
  const desktopMargin = "lg:-mt-20";

  return (
    <section
      className={`relative overflow-hidden px-3 ${paddingClass} ${marginClass} ${tabletMargin} ${desktopMargin}`}
    >
      {children}
    </section>
  );
}
