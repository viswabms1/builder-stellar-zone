import { ReactNode, useEffect, useState } from "react";

interface ResponsiveDeanWrapperProps {
  children: ReactNode;
}

export function ResponsiveDeanWrapper({ children }: ResponsiveDeanWrapperProps) {
  const [dimensions, setDimensions] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  // Calculate margins based on window dimensions
  const isLandscape = dimensions.height < dimensions.width;
  const isMobileLandscape = isLandscape && dimensions.width < 768;
  const isMobilePortrait = !isLandscape && dimensions.width < 768;
  const isTablet = dimensions.width >= 768 && dimensions.width < 1024;
  const isDesktop = dimensions.width >= 1024;

  let marginTop = "0";

  if (isMobileLandscape) {
    marginTop = "12rem"; // Push down significantly in mobile landscape
  } else if (isMobilePortrait) {
    marginTop = "-3rem"; // Pull up in mobile portrait
  } else if (isTablet) {
    marginTop = "-10rem"; // Pull up in tablet
  } else if (isDesktop) {
    marginTop = "-5rem"; // Pull up in desktop
  }

  return (
    <section
      className="relative overflow-hidden px-3 py-2"
      style={{
        marginTop,
      }}
    >
      {children}
    </section>
  );
}
