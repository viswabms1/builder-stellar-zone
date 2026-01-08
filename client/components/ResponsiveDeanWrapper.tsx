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

  // Calculate responsive margins based on orientation and screen size
  let marginTop = "0";

  const isMobileLandscape = isLandscape && window.innerWidth < 768;
  const isMobilePortrait = !isLandscape && window.innerWidth < 768;
  const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
  const isDesktop = window.innerWidth >= 1024;

  if (isMobileLandscape) {
    marginTop = "10rem"; // Push down significantly in mobile landscape
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
