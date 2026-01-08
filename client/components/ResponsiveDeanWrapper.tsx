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

  let styles: React.CSSProperties = {
    position: "relative",
    overflow: "hidden",
    paddingLeft: "0.75rem",
    paddingRight: "0.75rem",
    paddingBottom: "0.5rem",
  };

  if (isMobileLandscape) {
    styles.marginTop = "-6rem"; // Negative to allow overlap
    styles.paddingTop = "8rem"; // But add internal padding to push content down
  } else if (isMobilePortrait) {
    styles.marginTop = "-3rem"; // Pull up in mobile portrait
    styles.paddingTop = "0.5rem";
  } else if (isTablet) {
    styles.marginTop = "-10rem"; // Pull up in tablet
    styles.paddingTop = "0.5rem";
  } else if (isDesktop) {
    styles.marginTop = "-5rem"; // Pull up in desktop
    styles.paddingTop = "0.5rem";
  }

  return (
    <section style={styles}>
      {children}
    </section>
  );
}
