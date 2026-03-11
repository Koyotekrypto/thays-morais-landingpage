"use client";

import React, { useRef, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

interface ScrollScaleSectionProps {
  children: React.ReactNode;
  enableAnimations?: boolean;
  className?: string;
  startScale?: number;
}

export function ScrollScaleSection({
  children,
  enableAnimations = true,
  className = "",
  startScale = 0.85,
}: ScrollScaleSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [scrollScale, setScrollScale] = useState(startScale);
  const [isDesktop, setIsDesktop] = useState(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(typeof window !== 'undefined' ? window.innerWidth >= 1024 : true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!enableAnimations || shouldReduceMotion || !isDesktop) return;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress based on container position
      const scrolled = Math.max(0, -rect.top);
      const maxScroll = containerHeight - windowHeight;
      const progress = maxScroll > 0 ? Math.min(scrolled / maxScroll, 1) : 1;
      
      // Scale from startScale to 1
      const newScale = startScale + (progress * (1 - startScale));
      setScrollScale(newScale);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableAnimations, shouldReduceMotion, startScale, isDesktop]);

  const shouldAnimate = enableAnimations && !shouldReduceMotion && isDesktop;

  return (
    <div className={`relative ${className}`}>
      {isDesktop ? (
        /* Desktop Scroll Container */
        <div
          ref={containerRef}
          className="relative h-[150vh] bg-white"
        >
          {/* Fixed Content Container */}
          <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center z-10">
            <div
              className="w-full will-change-transform"
              style={{
                transform: shouldAnimate ? `scale(${scrollScale})` : 'scale(1)',
                transformOrigin: "center center",
              }}
            >
              {children}
            </div>
          </div>
        </div>
      ) : (
        /* Mobile Normal Flow Container */
        <div className="w-full">
          {children}
        </div>
      )}
    </div>
  );
}
