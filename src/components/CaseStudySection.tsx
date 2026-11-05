"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface CaseStudySectionProps {
  onOpenConsultation?: () => void;
}

export default function CaseStudySection({ onOpenConsultation }: CaseStudySectionProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [containerWidth, setContainerWidth] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  // Keep track of container width for pixel-perfect before/after alignment on all screen sizes
  useEffect(() => {
    if (!containerRef.current) return;
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.clientWidth);
      }
    };
    updateWidth();

    const resizeObserver = new ResizeObserver(() => {
      updateWidth();
    });
    resizeObserver.observe(containerRef.current);

    window.addEventListener("resize", updateWidth);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  const updateSliderPosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.clientX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    updateSliderPosition(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="case-study"
      className="py-16 sm:py-24 lg:py-32 bg-[#EEE9E3] text-slate-900 border-b border-stone-300/60 select-none overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* ================= TOP HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-end mb-8 sm:mb-14">
          {/* Left: • Drawn / • then built */}
          <div className="lg:col-span-6 flex flex-col space-y-1 sm:space-y-2">
            {/* Line 1: • Drawn */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-slate-900 inline-block shrink-0" />
              <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-heading font-normal tracking-[-0.03em] text-slate-900 leading-[1.08] sm:leading-[1.05]">
                Drawn
              </h2>
            </div>

            {/* Line 2: • then built (with terracotta accent dot) */}
            <div className="flex items-center gap-2.5 sm:gap-3">
              <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#BF4423] inline-block shrink-0" />
              <h2 className="text-3xl sm:text-5xl lg:text-[58px] font-heading font-normal tracking-[-0.03em] text-slate-900 leading-[1.08] sm:leading-[1.05]">
                then built
              </h2>
            </div>
          </div>

          {/* Right: From drawing to built narrative paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-end lg:pl-10">
            <span className="text-[11px] sm:text-xs font-mono text-slate-600 mb-1.5 sm:mb-2 tracking-wider uppercase font-medium">
              From drawing to built
            </span>
            <p className="text-xs sm:text-[15px] font-light text-slate-700 leading-relaxed max-w-lg">
              Every room we hand over existed first as a drawing. Slide across Linen Apartment to see how closely the finished apartment follows the section we drew on day one.
            </p>
          </div>
        </div>

        {/* ================= INTERACTIVE BEFORE / AFTER SLIDER (MOBILE ADAPTIVE) ================= */}
        <div className="relative w-full">
          <div
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className="relative w-full aspect-[16/11] sm:aspect-[16/9] lg:aspect-[16/8.2] min-h-[280px] sm:min-h-[440px] lg:min-h-[580px] overflow-hidden select-none cursor-ew-resize bg-stone-300 shadow-sm rounded-lg sm:rounded-none touch-none"
          >
            {/* 1. BUILT (AFTER) IMAGE - Full width behind */}
            <div className="absolute inset-0">
              <Image
                src="/assets/after.jpg"
                alt="Built completed interior architecture"
                fill
                priority
                sizes="(max-width: 1400px) 100vw, 1400px"
                className="object-cover"
              />

              {/* Built Label (Top Right) */}
              <div className="absolute top-4 right-4 sm:top-5 sm:right-6 z-10 pointer-events-none">
                <span className="text-[11px] sm:text-[13px] font-medium text-white tracking-wider drop-shadow-md bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full sm:bg-transparent sm:p-0">
                  Built
                </span>
              </div>
            </div>

            {/* 2. DRAWING (BEFORE) IMAGE - Clipped with exact slider width */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div
                className="relative h-full"
                style={{ width: containerWidth > 0 ? `${containerWidth}px` : "100%" }}
              >
                <Image
                  src="/assets/before.jpg"
                  alt="Architectural line drawing and schematic"
                  fill
                  priority
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover filter contrast-[1.08] brightness-[1.02]"
                />
              </div>

              {/* Drawing Label (Top Left) */}
              <div className="absolute top-4 left-4 sm:top-5 sm:left-6 z-10 pointer-events-none">
                <span className="text-[11px] sm:text-[13px] font-medium text-white tracking-wider drop-shadow-md bg-black/30 backdrop-blur-sm px-2.5 py-0.5 rounded-full sm:bg-transparent sm:p-0">
                  Drawing
                </span>
              </div>
            </div>

            {/* 3. TERRACOTTA SLIDER DIVIDER LINE */}
            <div
              className="absolute inset-y-0 w-[2px] bg-[#BF4423] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            />

            {/* 4. CIRCULAR TERRACOTTA DRAGGABLE HANDLE */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-full bg-[#BF4423] text-white shadow-xl flex items-center justify-center border border-white/30 transition-transform active:scale-90">
                <MoveHorizontal className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM METADATA ROW ================= */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] sm:text-[13px] text-slate-600 font-light pt-2.5 sm:pt-3 px-1">
            <span className="tracking-wide">
              Drag the line to compare
            </span>
            <span className="tracking-wide text-slate-500">
              Linen Apartment, Copenhagen, 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
