"use client";

import React, { useEffect, useRef, useState } from "react";

interface PillarsSectionProps {
  onOpenConsultation?: () => void;
}

const statementText =
  "We believe architecture should shape how people live and experience space through clarity and disciplined thinking. Our work is guided by proportion, material honesty, and long term relevance beyond the present moment. We value precision over noise and purpose over trend, creating spaces that feel intentional and considered. Every project balances strong vision with responsibility and structural performance. For us, architecture is about building environments that quietly endure and continue to matter over time.";

const words = statementText.split(" ");

export default function PillarsSection({ onOpenConsultation }: PillarsSectionProps) {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [scrollProgress, setScrollProgress] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      if (!textRef.current) return;
      const rect = textRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Reveal starts as the text enters from the bottom (92% of viewport)
      // Completely finishes unblurring when centered in view (48% of viewport)
      const startPoint = windowHeight * 0.92;
      const endPoint = windowHeight * 0.48;
      const rawProgress = (startPoint - rect.top) / (startPoint - endPoint);
      const progress = Math.min(Math.max(rawProgress, 0), 1);

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="pillars"
      className="py-20 sm:py-24 lg:py-28 bg-white text-slate-900 border-t border-slate-100 selection:bg-slate-900 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Studio Label */}
          <div className="lg:col-span-3 xl:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block shrink-0" />
              <span className="text-xs sm:text-sm font-mono tracking-tight text-slate-900">
                Our Studio
              </span>
            </div>
          </div>

          {/* Right Column: Narrative & Stats */}
          <div className="lg:col-span-9 xl:col-span-8">
            {/* Scroll-Revealed Statement Text with Blur Effect */}
            <p
              ref={textRef}
              className="text-lg sm:text-xl md:text-2xl lg:text-[25px] xl:text-[27px] font-heading font-normal text-slate-900 leading-[1.6] sm:leading-[1.65] tracking-[-0.015em] flex flex-wrap gap-x-[0.3em] gap-y-1"
            >
              {words.map((word, index) => {
                // Word reveal progress mapping
                const wordThreshold = (index / words.length) * 0.62;
                const windowSpan = 0.22;
                const factor = Math.min(
                  Math.max((scrollProgress - wordThreshold) / windowSpan, 0),
                  1
                );

                const opacity = 0.2 + factor * 0.8;
                const blur = (1 - factor) * 5;

                return (
                  <span
                    key={`${word}-${index}`}
                    style={{
                      opacity: Number(opacity.toFixed(3)),
                      filter: `blur(${blur.toFixed(1)}px)`,
                      transition:
                        "opacity 0.28s cubic-bezier(0.16, 1, 0.3, 1), filter 0.28s cubic-bezier(0.16, 1, 0.3, 1)",
                      willChange: "opacity, filter",
                    }}
                    className="inline-block transform-gpu"
                  >
                    {word}
                  </span>
                );
              })}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}


