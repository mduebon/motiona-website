import { useEffect } from 'react';

/**
 * Custom hook for triggering fade-in and slide-up animations on scroll
 * Observes all elements with the 'scroll-animation' class and triggers animation when visible
 */
export function useScrollAnimation(): void {
  useEffect(() => {
    // Find all elements with scroll-animation class
    const elements = document.querySelectorAll('.scroll-animation');
    
    if (elements.length === 0) return;

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

    // Observe all elements with scroll-animation class
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      // Cleanup observer on unmount
      observer.disconnect();
    };
  }, []);
}
