"use client";

import React, { useState, useRef, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

interface CaseStudySectionProps {
  onOpenConsultation?: () => void;
}

export default function CaseStudySection({ onOpenConsultation }: CaseStudySectionProps) {
  const [sliderPos, setSliderPos] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

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
      className="py-20 sm:py-28 lg:py-32 bg-[#EEE9E3] text-slate-900 border-b border-stone-300/60 select-none overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* ================= TOP HEADER ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-12 sm:mb-16">
          {/* Left: • Drawn / • then built */}
          <div className="lg:col-span-6 flex flex-col space-y-2">
            {/* Line 1: • Drawn */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block shrink-0" />
              <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-heading font-normal tracking-[-0.03em] text-slate-900 leading-[1.05]">
                Drawn
              </h2>
            </div>

            {/* Line 2: • then built (with terracotta accent dot) */}
            <div className="flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#BF4423] inline-block shrink-0" />
              <h2 className="text-4xl sm:text-5xl lg:text-[58px] font-heading font-normal tracking-[-0.03em] text-slate-900 leading-[1.05]">
                then built
              </h2>
            </div>
          </div>

          {/* Right: From drawing to built narrative paragraph */}
          <div className="lg:col-span-6 flex flex-col justify-end lg:pl-10">
            <span className="text-xs font-mono text-slate-600 mb-2 tracking-wider uppercase font-medium">
              From drawing to built
            </span>
            <p className="text-sm sm:text-[15px] font-light text-slate-700 leading-relaxed max-w-lg">
              Every room we hand over existed first as a drawing. Slide across Linen Apartment to see how closely the finished apartment follows the section we drew on day one.
            </p>
          </div>
        </div>

        {/* ================= INTERACTIVE BEFORE / AFTER SLIDER ================= */}
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
            className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[16/8.2] min-h-[380px] sm:min-h-[480px] lg:min-h-[580px] xl:min-h-[620px] overflow-hidden select-none cursor-ew-resize bg-stone-300 shadow-sm"
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

              {/* Built Label (Top Right) matching screenshot */}
              <div className="absolute top-5 right-6 z-10 pointer-events-none">
                <span className="text-xs sm:text-[13px] font-medium text-white tracking-wider drop-shadow-md">
                  Built
                </span>
              </div>
            </div>

            {/* 2. DRAWING (BEFORE) IMAGE - Clipped with slider width */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[700px] sm:min-w-[1000px] lg:min-w-[1400px]">
                <Image
                  src="/assets/before.jpg"
                  alt="Architectural line drawing and schematic"
                  fill
                  priority
                  sizes="(max-width: 1400px) 100vw, 1400px"
                  className="object-cover filter contrast-[1.08] brightness-[1.02]"
                />
              </div>

              {/* Drawing Label (Top Left) matching screenshot */}
              <div className="absolute top-5 left-6 z-10 pointer-events-none">
                <span className="text-xs sm:text-[13px] font-medium text-white tracking-wider drop-shadow-md">
                  Drawing
                </span>
              </div>
            </div>

            {/* 3. TERRACOTTA SLIDER DIVIDER LINE */}
            <div
              className="absolute inset-y-0 w-[1.5px] bg-[#BF4423] pointer-events-none z-20"
              style={{ left: `${sliderPos}%` }}
            />

            {/* 4. CIRCULAR TERRACOTTA DRAGGABLE HANDLE matching screenshot */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-30 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#BF4423] text-white shadow-xl flex items-center justify-center border border-white/20 transition-transform active:scale-95">
                <MoveHorizontal className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
            </div>
          </div>

          {/* ================= BOTTOM METADATA ROW matching screenshot ================= */}
          <div className="flex items-center justify-between text-xs sm:text-[13px] text-slate-600 font-light pt-3 px-1">
            {/* Left: Drag the line to compare */}
            <span className="tracking-wide">
              Drag the line to compare
            </span>

            {/* Right: Linen Apartment, Copenhagen, 2023 */}
            <span className="tracking-wide">
              Linen Apartment, Copenhagen, 2023
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
