import { useEffect, useRef, RefObject } from 'react';

/**
 * Custom hook for triggering fade-in and slide-up animations on scroll
 * Observes elements with the 'scroll-animation' class and triggers animation when visible
 */
export function useScrollAnimation(): { ref: RefObject<HTMLDivElement | null> } {
  const elementRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    // Create intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add animation class when element enters viewport
            entry.target.classList.add('animate-fade-in-up');
            // Stop observing this element to prevent re-triggering
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: '0px 0px -50px 0px', // Start animation slightly before element is fully visible
      }
    );

    observer.observe(elementRef.current);
    observerRef.current = observer;

    return () => {
      // Cleanup observer on unmount
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return { ref: elementRef };
}
