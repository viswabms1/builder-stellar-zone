import { useEffect, useRef, useState } from 'react';

/**
 * Hook that triggers an animation when an element comes into view
 * Uses Intersection Observer API for performance
 */
export function useScrollTrigger(options = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Stop observing after animation triggers (optional - remove if you want repeat animations)
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1, // Trigger when 10% of element is visible
      ...options,
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [options]);

  return { elementRef, isVisible };
}
