"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface DifferentiatorItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  description: string;
  brief: string;
  image: string;
  alt: string;
}

const baseItems: DifferentiatorItem[] = [
  {
    id: "principal",
    num: "01",
    tag: "Personalized",
    title: "Direct Principal Architect Oversight",
    description:
      "Every spatial line, material choice, and on-site milestone is directed personally by Architect Intezar Ahmed—never delegated to junior interns.",
    brief: "Direct principal involvement from first sketch to final stone.",
    image: "/project/project (1).png",
    alt: "Architectural landmark and structural elegance",
  },
  {
    id: "budget",
    num: "02",
    tag: "Certainty",
    title: "100% Locked & Itemized BOQ",
    description:
      "Millimeter-accurate Bill of Quantities with locked material pricing and zero hidden costs, eliminating mid-construction budget inflation.",
    brief: "Fixed-cost certainty with zero surprise budget escalations.",
    image: "/assets/before.jpg",
    alt: "5D BIM clash-free blueprint and precision engineering",
  },
  {
    id: "bim",
    num: "03",
    tag: "Precision",
    title: "5D BIM Digital Twin Modeling",
    description:
      "Every structural beam, conduit, and pipe is digitally clash-tested in 3D before a single ounce of concrete is cast on your site.",
    brief: "Zero on-site rework through digital twin pre-coordination.",
    image: "/assets/terascape-hero-2.jpg",
    alt: "High-rise structural cantilever and daylight design",
  },
  {
    id: "turnkey",
    num: "04",
    tag: "Execution",
    title: "Unified Turnkey Site Execution",
    description:
      "A single accountable atelier managing master masons, structural engineers, and custom joinery under one cohesive contract.",
    brief: "Single-source accountability from groundbreak to key handover.",
    image: "/assets/after.jpg",
    alt: "Finished turnkey architectural masterwork residence",
  },
];

// Tripled array for infinite seamless looping
const extendedItems = [...baseItems, ...baseItems, ...baseItems];
const BASE_COUNT = baseItems.length; // 4
const INITIAL_INDEX = BASE_COUNT; // 4 (starts at the first item of the middle set)

interface WhyChooseUsSectionProps {
  onOpenConsultation?: () => void;
}

export default function WhyChooseUsSection({
  onOpenConsultation,
}: WhyChooseUsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState<number>(INITIAL_INDEX);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isMovingRef = useRef<boolean>(false);

  // Active item index in range 0..3 for indicators
  const activeNormalizedIndex = ((currentIndex % BASE_COUNT) + BASE_COUNT) % BASE_COUNT;
  const activeItem = baseItems[activeNormalizedIndex];

  // Intersection Observer for scroll entrance animation
  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Handle seamless infinite wrap-around without visual jumps
  const handleTransitionEnd = useCallback(() => {
    isMovingRef.current = false;

    // If moved into the third set (index >= 8), quietly snap back to middle set (index - 4)
    if (currentIndex >= BASE_COUNT * 2) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev - BASE_COUNT);
    }
    // If moved into the first set (index < 4), quietly snap forward to middle set (index + 4)
    else if (currentIndex < BASE_COUNT) {
      setIsTransitioning(false);
      setCurrentIndex((prev) => prev + BASE_COUNT);
    }
  }, [currentIndex]);

  const handleNext = () => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    if (isMovingRef.current) return;
    isMovingRef.current = true;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section
      ref={sectionRef}
      id="why-choose-us"
      className="py-16 sm:py-24 lg:py-32 bg-[#f4f5f7] text-slate-900 border-b border-slate-200 select-none overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Main Floating Rounded Canvas with Entrance Animation */}
        <div
          className={`bg-white rounded-[28px] sm:rounded-[40px] p-8 sm:p-12 lg:p-16 shadow-[0_20px_60px_rgba(0,0,0,0.06)] border border-slate-200/80 transform-gpu transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isInView
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-[0.98]"
          }`}
        >
          {/* Top Row: Pill Badge + Big Headline (Left) & Narrative Subtext (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-12 lg:mb-16">
            {/* Top Left */}
            <div className="lg:col-span-7">
              <div
                className={`inline-block bg-slate-50 border border-slate-200/90 rounded-lg px-3.5 py-1 text-xs font-mono text-slate-700 font-medium mb-5 transition-all duration-700 delay-100 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Why Choose Us
              </div>

              <h2
                className={`text-3xl sm:text-5xl lg:text-[54px] font-heading font-normal text-slate-900 tracking-[-0.03em] leading-[1.08] max-w-xl transition-all duration-800 delay-200 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                Designed to Work at Scale
              </h2>
            </div>

            {/* Top Right Subtext */}
            <div className="lg:col-span-5 lg:pt-8">
              <p
                className={`text-sm sm:text-[15px] text-slate-600 font-light leading-relaxed max-w-md transition-all duration-800 delay-300 ${
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
              >
                A structured approach to managing complex architectural projects—from initial spatial brief to lifelong handover and defect-free operation.
              </p>
            </div>
          </div>

          {/* Lower Row: Counter + Nav Arrows (Left) & Infinite Smooth Sliding Carousel (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            {/* Left Column: Number Index & Navigation Buttons */}
            <div
              className={`lg:col-span-4 flex flex-col justify-between h-full min-h-[180px] lg:min-h-[380px] transition-all duration-800 delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div>
                {/* 01/04 Counter with Smooth Numeric Flip */}
                <div className="flex items-baseline font-heading tracking-tight mb-3">
                  <span
                    key={`counter-${activeItem.num}`}
                    className="text-5xl sm:text-6xl lg:text-[68px] font-medium text-slate-900 inline-block transition-transform duration-300 transform-gpu animate-in fade-in"
                  >
                    {activeItem.num}
                  </span>
                  <span className="text-2xl sm:text-3xl text-slate-400 font-normal ml-1">
                    /0{BASE_COUNT}
                  </span>
                </div>

                {/* Dynamic brief description with smooth crossfade */}
                <div className="min-h-[48px]">
                  <p
                    key={`desc-${activeItem.id}`}
                    className="text-sm sm:text-base text-slate-600 font-light leading-snug max-w-xs transition-opacity duration-300 animate-in fade-in"
                  >
                    {activeItem.brief}
                  </p>
                </div>
              </div>

              {/* Navigation Arrows: Left (White), Right (Black) matching screenshot */}
              <div className="flex items-center gap-3 pt-8 lg:pt-0">
                <button
                  onClick={handlePrev}
                  aria-label="Previous slide"
                  className="w-12 h-12 rounded-xl bg-white border border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300 active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4 text-slate-900" />
                </button>

                <button
                  onClick={handleNext}
                  aria-label="Next slide"
                  className="w-12 h-12 rounded-xl bg-black text-white hover:bg-slate-800 active:scale-90 flex items-center justify-center transition-all cursor-pointer shadow-md"
                >
                  <ArrowRight className="w-4 h-4 text-white" />
                </button>
              </div>
            </div>

            {/* Right Column: Smooth Hardware-Accelerated Sliding Track */}
            <div
              className={`lg:col-span-8 overflow-hidden relative w-full transition-all duration-900 delay-300 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
            >
              {/* 
                Responsive CSS variables:
                - Mobile (< 640px): 1 card visible, gap is 16px.
                - Desktop (>= 640px): 2 cards visible, gap is 24px, card width = calc((100% - 24px) / 2).
              */}
              <div
                onTransitionEnd={handleTransitionEnd}
                className="flex gap-4 sm:gap-6 will-change-transform [--card-gap:16px] sm:[--card-gap:24px] [--card-width:100%] sm:[--card-width:calc((100%-24px)/2)]"
                style={{
                  transform: `translateX(calc(-${currentIndex} * (var(--card-width) + var(--card-gap))))`,
                  transition: isTransitioning
                    ? "transform 750ms cubic-bezier(0.22, 1, 0.36, 1)"
                    : "none",
                }}
              >
                {extendedItems.map((card, i) => {
                  const isCurrent = i === currentIndex;

                  return (
                    <div
                      key={`${card.id}-${i}`}
                      onClick={() => {
                        if (i > currentIndex) handleNext();
                        else if (i < currentIndex) handlePrev();
                      }}
                      className="group relative shrink-0 w-[var(--card-width)] aspect-[4/5] sm:aspect-[3.6/4.5] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-900 shadow-md border border-slate-200/60 cursor-pointer transition-all duration-500 hover:shadow-2xl hover:-translate-y-1"
                    >
                      {/* Background Image */}
                      <Image
                        src={card.image}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 640px) 100vw, 40vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />

                      {/* Scrim Gradient for Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 transition-opacity" />

                      {/* Top Left Tag Badge matching screenshot */}
                      <div className="absolute top-5 left-5 z-10">
                        <span className="inline-block bg-white/85 backdrop-blur-md text-slate-900 text-[11px] sm:text-xs font-medium px-3.5 py-1.5 rounded-lg border border-white/40 shadow-sm">
                          {card.tag}
                        </span>
                      </div>

                      {/* Bottom Copy Overlay matching screenshot */}
                      <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7 z-10 text-white">
                        <h3 className="text-xl sm:text-2xl font-heading font-medium text-white tracking-tight leading-snug mb-2">
                          {card.title}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-white/80 font-light leading-relaxed line-clamp-3">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
