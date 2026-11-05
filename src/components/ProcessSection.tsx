"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProcessStep {
  step: string;
  duration: string;
  title: string;
  description: string;
  image: string;
  stageTag: string;
  caption: string;
}

const steps: ProcessStep[] = [
  {
    step: "01",
    duration: "1 to 2 weeks",
    title: "First visit",
    description:
      "We walk the site or the rooms with you, listen, measure and photograph. You leave with a short brief written in your own words.",
    image: "/assets/pillar-spatial.jpg",
    stageTag: "Stage 01",
    caption: "Sketch on tracing paper",
  },
  {
    step: "02",
    duration: "3 to 6 weeks",
    title: "Concept",
    description:
      "Sketches, simple card models and a first idea of cost, so we agree on direction before anything becomes expensive.",
    image: "/assets/pillar-interior.jpg",
    stageTag: "Stage 02",
    caption: "Card models & material moodboard",
  },
  {
    step: "03",
    duration: "2 to 4 months",
    title: "Design and permits",
    description:
      "Detailed drawings, materials and planning applications, coordinated with engineers from the very start.",
    image: "/assets/before.jpg",
    stageTag: "Stage 03",
    caption: "Construction drawing set",
  },
  {
    step: "04",
    duration: "6 to 14 months",
    title: "Construction",
    description:
      "We are on site every week with the builder, checking details, samples and the budget, so nothing is decided by accident.",
    image: "/assets/pillar-turnkey.jpg",
    stageTag: "Stage 04",
    caption: "On-site builder supervision",
  },
  {
    step: "05",
    duration: "2 to 4 weeks",
    title: "Handover",
    description:
      "Snagging, styling and a final walk through together. We come back after a year to see how the place is being lived in.",
    image: "/assets/after.jpg",
    stageTag: "Stage 05",
    caption: "Turnkey key handover",
  },
];

interface ProcessSectionProps {
  onOpenConsultation?: () => void;
}

export default function ProcessSection({ onOpenConsultation }: ProcessSectionProps) {
  const [activeStep, setActiveStep] = useState<number>(0);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll spy tracking: pins the active step and changes image as user scrolls
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight || 800;
      const targetLine = windowHeight * 0.45; // trigger point near center of viewport

      let closestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const distance = Math.abs(rect.top - targetLine);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveStep(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStep = (index: number) => {
    const el = stepRefs.current[index];
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  const currentStepData = steps[activeStep] || steps[0];

  return (
    <section
      id="process"
      className="py-16 sm:py-24 lg:py-32 bg-[#2B231D] text-white border-b border-stone-800 select-none relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Mobile Header (Shown on mobile above the sticky image) */}
        <div className="block lg:hidden mb-8">
          <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-white/50 block mb-2">
            How we work
          </span>
          <h2 className="text-2xl sm:text-4xl font-heading font-normal text-white leading-[1.15] tracking-[-0.03em]">
            Five steps from the first visit to the day you move in.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start relative">
          {/* ================= LEFT COLUMN: STICKY ENLARGED IMAGE ================= */}
          <div className="lg:col-span-6 sticky top-16 sm:top-20 lg:top-24 self-start z-20">
            {/* Enlarged Fixed/Sticky Image Canvas */}
            <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] lg:aspect-[4/4.3] xl:aspect-[4/4.1] rounded-2xl overflow-hidden bg-stone-900 border border-white/10 shadow-2xl">
              {steps.map((item, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={item.step}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />

                    {/* Subtle Depth Scrim Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />
                  </div>
                );
              })}
            </div>

            {/* Captions Under Image matching screenshot */}
            <div className="flex items-center justify-between text-[11px] sm:text-[13px] font-mono text-white/70 pt-2.5 sm:pt-3.5 px-1 bg-[#2B231D]/90 backdrop-blur-sm">
              <span className="tracking-wider uppercase text-white/80 font-medium">
                {currentStepData.stageTag}
              </span>
              <span className="text-white/50 tracking-wide truncate max-w-[200px] sm:max-w-none text-right">
                {currentStepData.caption}
              </span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STACK SCROLL ALL 5 STEPS ================= */}
          <div className="lg:col-span-6 lg:pl-4 xl:pl-8">
            {/* Desktop Top Header */}
            <div className="hidden lg:block mb-14 sm:mb-20">
              <span className="text-xs font-mono uppercase tracking-[0.22em] text-white/50 block mb-4">
                How we work
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-normal text-white leading-[1.08] tracking-[-0.03em] max-w-xl">
                Five steps from the first visit to the day you move in.
              </h2>
            </div>

            {/* The 5 Stacked Steps */}
            <div className="divide-y divide-white/10 border-b border-white/10">
              {steps.map((step, idx) => {
                const isActive = activeStep === idx;

                return (
                  <div
                    key={step.step}
                    ref={(el) => {
                      stepRefs.current[idx] = el;
                    }}
                    onClick={() => scrollToStep(idx)}
                    className={`py-6 sm:py-12 lg:py-16 transition-all duration-500 cursor-pointer group ${
                      isActive ? "opacity-100" : "opacity-35 hover:opacity-80"
                    }`}
                  >
                    {/* Top Row: Step Number on Left + Duration on Right */}
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-2 sm:mb-3">
                      <span
                        className={`transition-colors duration-300 ${
                          isActive ? "text-sky-400 font-semibold" : "text-white/50"
                        }`}
                      >
                        {step.step}
                      </span>

                      <span
                        className={`transition-colors duration-300 ${
                          isActive ? "text-white/80" : "text-white/40"
                        }`}
                      >
                        {step.duration}
                      </span>
                    </div>

                    {/* Step Title */}
                    <h3
                      className={`text-xl sm:text-3xl lg:text-[36px] font-heading font-medium tracking-tight mb-2 sm:mb-3.5 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/90"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p className="text-xs sm:text-base font-light text-white/70 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Consultation CTA */}
            {onOpenConsultation && (
              <div className="pt-8 sm:pt-14 pb-4">
                <button
                  onClick={onOpenConsultation}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-stone-900 px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-stone-100 transition-all cursor-pointer active:scale-95 text-center"
                >
                  <span>Book Initial Site Walkthrough</span>
                  <ArrowRight className="w-4 h-4 text-stone-900" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
