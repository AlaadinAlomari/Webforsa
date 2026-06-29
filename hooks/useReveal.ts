'use client';

import { useCallback, useRef, useState } from 'react';

export function useReveal<T extends Element = HTMLDivElement>() {
  const [isVisible, setIsVisible] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const ref = useCallback((el: T | null) => {
    if (observerRef.current) {
      observerRef.current.disconnect();
      observerRef.current = null;
    }
    if (!el) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    observerRef.current.observe(el);
  }, []);

  return { ref, isVisible };
}
