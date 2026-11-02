"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

interface TestimonialItem {
  id: number;
  clientName: string;
  clientRole: string;
  projectContext: string;
  location: string;
  year: string;
  quote: string;
  projectImage: string;
  scopeTag: string;
}

const testimonials: TestimonialItem[] = [
  {
    id: 1,
    clientName: "Dr. Farhan Malik",
    clientRole: "Homeowner & Surgeon",
    projectContext: "Custom Cantilever Villa",
    location: "Sector F-7/2, Islamabad",
    year: "2025",
    quote:
      "Working with Architect Intezar felt like a true collaboration. They didn't just deliver what we asked—they elevated our vision into something more thoughtful, refined, and bold. Delivered strictly on our agreed budget and ahead of schedule.",
    projectImage: "/project/project (1).png",
    scopeTag: "Custom Villa Architecture",
  },
  {
    id: 2,
    clientName: "Sarah & Tariq Qureshi",
    clientRole: "Overseas Investors",
    projectContext: "The Obsidian Penthouse",
    location: "DHA Phase 6, Lahore",
    year: "2024",
    quote:
      "We met three different architecture firms before choosing Intezar. He was the only one who provided a transparent itemized BOQ before asking for commitment. Living in this duplex with double-height windows and quiet acoustic walls has completely elevated our daily lives.",
    projectImage: "/assets/after.jpg",
    scopeTag: "Duplex Penthouse Renovation",
  },
  {
    id: 3,
    clientName: "Kamran Raza",
    clientRole: "Founder & CEO, TechAtelier",
    projectContext: "Boutique Corporate HQ",
    location: "Blue Area, Islamabad",
    year: "2024",
    quote:
      "Our headquarters had to convey prestige and creative energy to visiting international investors. Intezar's integration of raw board-formed concrete, biophilic green atriums, and acoustic timber fins created an extraordinary environment. Clients are constantly blown away.",
    projectImage: "/assets/delivered-1.jpg",
    scopeTag: "Commercial Interior Architecture",
  },
  {
    id: 4,
    clientName: "Brig. (R) Javed Akhtar",
    clientRole: "Estate Owner",
    projectContext: "Contemporary 1-Kanal Residence",
    location: "Bahria Town, Islamabad",
    year: "2025",
    quote:
      "Intezar Ahmed is a true master of his craft. His on-site supervision was relentless—inspecting marble joints, structural cantilevers, and lighting angles with millimeter precision. In an industry full of vague promises, Architect Intezar delivers pure honesty and uncompromised quality.",
    projectImage: "/assets/terascape-hero-2.jpg",
    scopeTag: "Full Architectural Design & Execution",
  },
];

export default function TestimonialsProofSection() {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isInView, setIsInView] = useState<boolean>(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Touch Swipe tracking
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = testimonials.length;
  const current = testimonials[activeIndex];

  // Scroll entrance animation
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

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  // Swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Threshold in px

    if (distance > minSwipeDistance) {
      // Swiped left -> next
      handleNext();
    } else if (distance < -minSwipeDistance) {
      // Swiped right -> prev
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 sm:py-28 lg:py-32 bg-white text-slate-900 border-b border-slate-100 select-none overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Row matching screenshot 1:1 */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-12 sm:mb-16 lg:mb-20">
          <div>
            <h2
              className={`text-4xl sm:text-5xl lg:text-[54px] font-heading font-normal tracking-[-0.03em] text-slate-900 leading-[1.08] transition-all duration-800 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              Words From
              <br />
              Our Clients
            </h2>
            <p
              className={`mt-3 text-xs sm:text-sm text-slate-500 font-light leading-relaxed max-w-sm transition-all duration-800 delay-100 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              Everything you need to plan and shape your sanctuary.
            </p>
          </div>

          <div
            className={`pt-1 transition-all duration-800 delay-150 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-slate-400">
              (TESTIMONIAL)
            </span>
          </div>
        </div>

        {/* 2-Column Main Content Row with Touch / Swipe */}
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left Column: Exactly 1 Project Image (Changes smoothly when review changes) */}
          <div className="lg:col-span-5">
            <div className="relative w-full aspect-square max-w-[460px] mx-auto lg:mx-0 rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-[0_15px_40px_rgba(0,0,0,0.08)] border border-slate-200/80 group">
              {testimonials.map((t, idx) => {
                const isActive = activeIndex === idx;

                return (
                  <div
                    key={t.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      isActive
                        ? "opacity-100 scale-100 z-10 pointer-events-auto"
                        : "opacity-0 scale-105 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={t.projectImage}
                      alt={t.projectContext}
                      fill
                      priority={idx === 0}
                      sizes="(max-width: 1024px) 100vw, 460px"
                      className="object-cover"
                    />

                    {/* Subtle Scrim for Bottom Label */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />

                    {/* Project Label at bottom of the project image */}
                    <div className="absolute bottom-5 left-5 right-5 text-white z-20">
                      <span className="inline-block bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 mb-1.5 uppercase tracking-wider">
                        {t.scopeTag}
                      </span>
                      <h4 className="text-sm sm:text-base font-heading font-medium text-white tracking-tight leading-snug">
                        {t.projectContext}
                      </h4>
                      <p className="text-[11px] text-white/80 font-mono mt-0.5">
                        {t.location} • Delivered {t.year}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Quote + Client Info + Pagination Controls matching screenshot */}
          <div className="lg:col-span-7 flex flex-col justify-between min-h-[340px] lg:min-h-[380px]">
            {/* The Review Quote with smooth crossfade */}
            <div className="relative">
              <blockquote
                key={`quote-${current.id}`}
                className="text-xl sm:text-2xl lg:text-[28px] font-heading font-normal text-slate-800 leading-[1.38] tracking-[-0.015em] animate-in fade-in duration-500"
              >
                &ldquo;{current.quote}&rdquo;
              </blockquote>
            </div>

            {/* Bottom Row: Quote Mark + Client Name & Title (Left) and Pagination Controls (Right) */}
            <div className="pt-8 sm:pt-10 flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-t border-slate-100">
              {/* Client Info with Quote Icon */}
              <div key={`client-${current.id}`} className="animate-in fade-in duration-500">
                <Quote className="w-6 h-6 text-slate-300 rotate-180 mb-3" />

                <h3 className="text-base sm:text-lg font-heading font-medium text-slate-900 tracking-tight">
                  {current.clientName}
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-500 font-light mt-0.5">
                  {current.clientRole}
                </p>
              </div>

              {/* Pagination Controls matching screenshot: < [01] / 04 > */}
              <div className="flex items-center gap-2 shrink-0">
                {/* Left Arrow Button */}
                <button
                  onClick={handlePrev}
                  aria-label="Previous client review"
                  className="w-9 h-9 rounded border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Counter matching screenshot e.g. [01] / 04 */}
                <div className="px-3 font-mono text-xs sm:text-[13px] text-slate-700 tracking-wider select-none">
                  <span className="font-medium text-slate-900">
                    [0{activeIndex + 1}]
                  </span>
                  <span className="text-slate-400 mx-1.5">/</span>
                  <span className="text-slate-500">0{total}</span>
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={handleNext}
                  aria-label="Next client review"
                  className="w-9 h-9 rounded border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50 hover:border-slate-300 flex items-center justify-center transition-all cursor-pointer active:scale-95 shadow-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
