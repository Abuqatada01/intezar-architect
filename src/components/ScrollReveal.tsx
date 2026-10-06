"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in ms
  duration?: number; // Duration in ms
  threshold?: number;
  rootMargin?: string;
  yOffset?: number; // Y translation offset in px
  blurAmount?: number; // Blur in px
  once?: boolean;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  duration = 850,
  threshold = 0.05,
  rootMargin = "0px 0px -40px 0px",
  yOffset = 20,
  blurAmount = 6,
  once = true,
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      setIsCompleted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(node);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  // Clean up GPU layers and filters once transition finishes
  useEffect(() => {
    if (isVisible && once) {
      const timer = setTimeout(() => {
        setIsCompleted(true);
      }, duration + delay + 50);
      return () => clearTimeout(timer);
    }
  }, [isVisible, duration, delay, once]);

  // If completed, render with zero overhead styles
  if (isCompleted) {
    return <div className={`w-full ${className}`}>{children}</div>;
  }

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        filter: isVisible ? "none" : `blur(${blurAmount}px)`,
        transform: isVisible
          ? "translate3d(0, 0, 0)"
          : `translate3d(0, ${yOffset}px, 0)`,
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: isVisible ? "auto" : "opacity, transform",
        backfaceVisibility: "hidden",
      }}
      className={`w-full ${className}`}
    >
      {children}
    </div>
  );
}
