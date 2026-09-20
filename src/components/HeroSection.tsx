"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowUpRight, Box } from "lucide-react";

interface HeroSectionProps {
  onOpenMenu: () => void;
  onOpenConsultation: () => void;
}

const heroSlides = [
  {
    num: "(01)",
    title: "Stellar home for Saturion",
    mainHeading: "Home with<br />the hearth",
    img: "/assets/terascape-hero.jpg",
    progress: "33%",
  },
  {
    num: "(02)",
    title: "The Obsidian Sky Penthouse",
    mainHeading: "Crown over<br />the skyline",
    img: "/assets/terascape-hero-2.jpg",
    progress: "66%",
  },
  {
    num: "(03)",
    title: "Al-Khor Desert Sanctuary",
    mainHeading: "Sanctuary for<br />the senses",
    img: "/assets/terascape-hero-3.jpg",
    progress: "100%",
  },
];

export default function HeroSection({
  onOpenMenu,
  onOpenConsultation,
}: HeroSectionProps) {
  const [currentIdx, setCurrentIdx] = useState(0);

  const slide = heroSlides[currentIdx];

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[640px] bg-[#43729b] text-white flex flex-col overflow-hidden select-none"
    >
      {/* 1. Top Architectural Grid Header */}
      <header className="grid grid-cols-[210px_220px_1fr_auto] h-[68px] min-h-[68px] border-b border-white/20 relative z-20 items-stretch">
        {/* Col 1: Brand */}
        <div className="flex items-center px-8 border-r border-white/20">
          <a
            href="#hero"
            className="flex items-center gap-2.5 font-semibold text-base tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-4 h-4 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-heading whitespace-nowrap">Architect Intezar</span>
          </a>
        </div>

        {/* Col 2: Tagline */}
        <div className="hidden sm:flex items-center px-6 border-r border-white/20 text-xs leading-snug text-white/90 font-light">
          <span>
            Spaces for
            <br />
            modern living.
          </span>
        </div>

        {/* Col 3: Spacer */}
        <div className="flex-1" />

        {/* Col 4: Explore / Menu trigger */}
        <div className="flex items-center px-8 md:px-10">
          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="flex flex-col items-start text-left text-white group cursor-pointer"
          >
            <span className="text-[11px] text-white/75 font-normal tracking-wide group-hover:text-white transition-colors">
              Explore studio
            </span>
            <span className="text-sm font-semibold text-white/95 -mt-0.5 group-hover:translate-x-0.5 transition-transform">
              + Menu
            </span>
          </button>
        </div>
      </header>

      {/* 2. Main Hero Architectural Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[430px_1fr] flex-1 h-[calc(100vh-68px)] relative">
        {/* Left Column: Typography & Action */}
        <div className="flex flex-col justify-between pt-16 lg:pt-24 px-8 lg:px-12 pb-0 border-r border-white/20 relative z-10">
          {/* Main Copy */}
          <div>
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/90 block mb-6">
              DESIGNING SPACES FOR MODERN LIVING.
            </span>
            <h1
              className="font-heading font-semibold text-white text-5xl sm:text-6xl xl:text-7xl leading-[1.04] tracking-[-0.03em] mb-8"
              dangerouslySetInnerHTML={{ __html: slide.mainHeading }}
            />
            <div className="mb-10">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-3.5 bg-white text-black font-semibold text-sm py-3 px-6 rounded-[4px] shadow-[0_4px_14px_rgba(0,0,0,0.08)] hover:bg-slate-100 hover:-translate-y-0.5 transition-all active:scale-[0.98]"
              >
                <span>Start a project</span>
                <span className="w-2.5 h-2.5 bg-black inline-block rounded-[1px]" />
              </button>
            </div>
          </div>

          {/* Bottom Left Footer Tag */}
          <div className="border-t border-white/20 -mx-8 lg:-mx-12 px-8 lg:px-12 py-4">
            <span className="text-[11px] font-semibold tracking-[0.14em] uppercase text-white/70">
              (SCROLL DOWN)
            </span>
          </div>
        </div>

        {/* Right Column: Visual Stage & Glassmorphism Slider */}
        <div className="relative flex flex-col justify-between overflow-hidden">
          {/* Top Right Mission Statement */}
          <div className="absolute top-6 sm:top-7 right-8 sm:right-12 z-10 text-right text-[11px] font-bold tracking-[0.09em] leading-relaxed text-white/95 uppercase">
            <p>
              UNCOMPROMISING DETAIL.
              <br />
              TAILORED ARCHITECTURE.
              <br />
              ELEGANTLY CRAFTED.
            </p>
          </div>

          {/* Background Architectural Image */}
          <div className="relative flex-1 w-full h-full overflow-hidden">
            <Image
              src={slide.img}
              alt={slide.title}
              fill
              priority
              className="object-cover object-right transition-opacity duration-500"
            />

            {/* View Project Link Overlay */}
            <a
              href="#portfolio"
              className="absolute bottom-24 sm:bottom-24 right-8 sm:right-12 z-10 text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-1.5 drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)] hover:opacity-85 transition-opacity"
            >
              <span>View Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Frosted Glass Slider Card */}
            <div className="absolute bottom-5 sm:bottom-6 right-8 sm:right-12 z-10 bg-[#e1ebf5]/80 backdrop-blur-xl border border-white/50 rounded-[4px] p-3.5 sm:p-4 min-w-[240px] shadow-[0_10px_30px_rgba(0,0,0,0.15)]">
              <div className="text-xs font-semibold text-slate-900 mb-2.5 tracking-tight">
                {slide.title}
              </div>
              <div className="flex items-center justify-between gap-3">
                <button
                  onClick={handlePrev}
                  aria-label="Previous project slide"
                  className="w-6 h-6 rounded bg-white/60 hover:bg-white border border-black/5 flex items-center justify-center text-black transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                </button>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-slate-600 font-mono">
                  <span>{slide.num}</span>
                  <div className="w-12 sm:w-14 h-[2px] bg-black/20 rounded relative overflow-hidden">
                    <div
                      className="h-full bg-black transition-all duration-300"
                      style={{ width: slide.progress }}
                    />
                  </div>
                  <span>(03)</span>
                </div>

                <button
                  onClick={handleNext}
                  aria-label="Next project slide"
                  className="w-6 h-6 rounded bg-white/60 hover:bg-white border border-black/5 flex items-center justify-center text-black transition-colors"
                >
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Right Studio Tag Bar */}
          <div className="border-t border-white/20 px-8 sm:px-12 py-4 flex items-center justify-between z-10 bg-[#43729b]/40 backdrop-blur-md">
            <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-white/85">
              ARCHITECT INTEZAR STUDIO
            </span>
          </div>
        </div>
      </div>

      {/* 3. Docked Floating Badges on Bottom Right */}
      <div className="absolute bottom-3.5 right-4 z-30 flex flex-col gap-1.5 items-end">
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-[4px] text-xs font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_6px_18px_rgba(0,0,0,0.18)] transition-all"
        >
          <Box className="w-3.5 h-3.5 text-slate-700" />
          <span>Get template</span>
        </button>
        <div className="inline-flex items-center gap-2 bg-white text-black px-3 py-1.5 rounded-[4px] text-xs font-semibold shadow-[0_4px_14px_rgba(0,0,0,0.12)]">
          <svg
            className="w-3 h-3 text-black"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
          </svg>
          <span>Made in Framer</span>
        </div>
      </div>
    </section>
  );
}
