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
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentStepData = steps[activeStep];

  const scrollToStep = (index: number) => {
    setActiveStep(index);
    const target = stepRefs.current[index];
    if (target) {
      const yOffset = -120;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="process"
      className="py-24 lg:py-36 bg-[#12161c] text-white border-b border-white/10 select-none relative"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* ================= LEFT COLUMN: EXPANDED FIXED / STICKY PROJECT IMAGE ================= */}
          <div className="lg:col-span-6 lg:sticky lg:top-24 xl:top-28 z-20">
            {/* Enlarged Image Container with Smooth 700ms Crossfade */}
            <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[580px] xl:h-[640px] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] group">
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
            <div className="flex items-center justify-between text-xs sm:text-[13px] font-mono text-white/70 pt-3.5 px-1">
              <span className="tracking-wider uppercase text-white/80 font-medium">
                {currentStepData.stageTag}
              </span>
              <span className="text-white/50 tracking-wide">
                {currentStepData.caption}
              </span>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: STACK SCROLL ALL 5 STEPS ================= */}
          <div className="lg:col-span-6 lg:pl-4 xl:pl-8">
            {/* Top Header matching screenshot */}
            <div className="mb-14 sm:mb-20">
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
                    className={`py-8 sm:py-12 lg:py-16 transition-all duration-500 cursor-pointer group ${
                      isActive ? "opacity-100" : "opacity-35 hover:opacity-80"
                    }`}
                  >
                    {/* Top Row: Step Number on Left + Duration on Right */}
                    <div className="flex items-center justify-between text-xs sm:text-sm font-mono tracking-wider mb-3">
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
                      className={`text-2xl sm:text-3xl lg:text-[36px] font-heading font-medium tracking-tight mb-3.5 transition-colors duration-300 ${
                        isActive ? "text-white" : "text-white/50 group-hover:text-white/90"
                      }`}
                    >
                      {step.title}
                    </h3>

                    {/* Step Description */}
                    <p
                      className={`text-sm sm:text-[15px] font-light leading-relaxed max-w-lg transition-colors duration-300 ${
                        isActive ? "text-white/85" : "text-white/45 group-hover:text-white/70"
                      }`}
                    >
                      {step.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Bottom Atelier Action Call */}
            {onOpenConsultation && (
              <div className="pt-12 pb-6">
                <button
                  onClick={onOpenConsultation}
                  className="inline-flex items-center gap-3 bg-white text-slate-950 px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl hover:bg-slate-100 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
                >
                  <span>Start Step 01: Schedule First Visit</span>
                  <ArrowRight className="w-4 h-4 text-slate-900" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
