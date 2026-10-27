"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * Default slideshow images. 
 * Add or replace image paths here as you add more images into public/hero/
 */
export const DEFAULT_HERO_SLIDES = [
  "/hero/hero.png",
  "/hero/hero-2.png",
  "/hero/hero-3.png",
];

interface HeroSectionProps {
  onOpenMenu?: () => void;
  onOpenConsultation?: () => void;
  slides?: string[];
  autoPlayIntervalMs?: number;
}

export default function HeroSection({
  onOpenMenu,
  onOpenConsultation,
  slides = DEFAULT_HERO_SLIDES,
  autoPlayIntervalMs = 3500,
}: HeroSectionProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const handleNext = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const handlePrev = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const handleGoToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  // Continuous Auto-play timer that advances slides every 3.5s
  useEffect(() => {
    if (totalSlides <= 1) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, autoPlayIntervalMs);
    return () => clearInterval(interval);
  }, [totalSlides, autoPlayIntervalMs]);

  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollDown = (e: React.MouseEvent) => {
    e.preventDefault();
    const target =
      document.getElementById("philosophy") ||
      document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#2c435c] md:bg-black p-2.5 sm:p-4 md:p-0 flex flex-col justify-center select-none"
    >
      {/* 
        Canvas Container:
        - Mobile: Framed rounded canvas with blue gradient & outer padding
        - Large devices (md+): Edge-to-edge full screen container with background slideshow
      */}
      <div className="relative w-full h-[calc(100vh-0px)] sm:h-[calc(100vh-32px)] md:h-[100vh] min-h-[640px] md:min-h-[100vh] md:max-h-none rounded-[24px] sm:rounded-[32px] md:rounded-none overflow-hidden border border-white/20 md:border-none shadow-2xl md:shadow-none flex flex-col justify-between bg-gradient-to-b from-[#3a5879] via-[#486b91] to-[#2b415a] md:bg-none">
        
        {/* Full-Screen Architectural Background Slideshow (Large Devices Only) */}
        <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
          {slides.map((slideSrc, index) => {
            const isActive = index === currentSlide;
            return (
              <div
                key={slideSrc}
                style={{ zIndex: isActive ? 5 : 1 }}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <Image
                  src={slideSrc}
                  alt={`Architectural landmark slide ${index + 1}`}
                  fill
                  priority
                  quality={95}
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            );
          })}

          {/* Scrim Overlays for Superior Contrast & Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/70 via-slate-950/30 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/45 via-transparent to-slate-950/55 pointer-events-none z-10" />
        </div>

        {/* Subtle Architectural Drafting Grid Columns (Vertical Lines) */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 pointer-events-none z-10 divide-x divide-white/[0.07] md:divide-white/[0.06]">
          <div />
          <div />
          <div />
          <div />
          <div className="hidden sm:block" />
          <div className="hidden sm:block" />
        </div>

        {/* 1. Top Architectural Header */}
        <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-8 md:pt-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="text-white text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.18em] uppercase hover:opacity-85 transition-opacity drop-shadow-sm"
          >
            Intezar Ahmed
          </a>

          {/* Center Links (Desktop only - Muted & Elegantly Lowercased with commas) */}
          <nav className="hidden md:flex items-center gap-2 text-white/90 text-xs sm:text-[13px] font-normal tracking-wide drop-shadow-sm">
            <a
              href="#philosophy"
              className="hover:text-white transition-colors duration-200"
            >
              studio
            </a>
            <span className="text-white/40">,</span>
            <a
              href="#portfolio"
              className="hover:text-white transition-colors duration-200"
            >
              projects
            </a>
            <span className="text-white/40">,</span>
            <a
              href="#what-we-do"
              className="hover:text-white transition-colors duration-200"
            >
              expertise
            </a>
            <span className="text-white/40">,</span>
            <a
              href="#press"
              className="hover:text-white transition-colors duration-200"
            >
              insights
            </a>
            <span className="text-white/40">,</span>
            <a
              href="#faq"
              className="hover:text-white transition-colors duration-200"
            >
              contact
            </a>
          </nav>

          {/* Right Menu Trigger */}
          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wider group cursor-pointer hover:opacity-85 transition-opacity drop-shadow-sm"
          >
            <span className="text-sm font-mono leading-none group-hover:-translate-x-0.5 transition-transform">
              =
            </span>
            <span className="uppercase text-[11px] sm:text-xs tracking-[0.14em]">
              MENU
            </span>
          </button>
        </header>

        {/* 2. Middle Content Area: Editorial Headline & Dialogue Copy */}
        <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 pt-6 sm:pt-10 md:pt-14 pb-2">
          {/* Main Statement */}
          <h1 className="text-white font-heading capitalize font-normal sm:font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] max-w-5xl drop-shadow-md">
            We don't just design , 
            <br />
            we create landmarks
          </h1>

          {/* Two-Column Bottom Row in Mid-Section: Subtext on Left & Pill CTA on Right */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            {/* Left Dialogue Paragraph */}
            <p className="text-white/85 md:text-white/95 text-xs sm:text-sm md:text-[14.5px] font-light leading-relaxed max-w-lg drop-shadow-sm">
              We craft spaces where light, texture, and proportion form a quiet
              dialogue between architecture and emotion — timeless, balanced,
              and deeply human.
            </p>

            {/* Right Action Button */}
            <div className="shrink-0 pb-1">
              <a
                href="#portfolio"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-xl hover:bg-slate-100 hover:scale-[1.03] active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <span>EXPLORE OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 2.5 Mobile Center Architectural Feature (Connected to active slideshow) */}
        <div className="md:hidden relative z-20 px-6 my-auto py-2">
          <div className="relative w-full h-[290px] sm:h-[360px] rounded-2xl overflow-hidden border border-white/25 shadow-2xl group">
            {slides.map((slideSrc, index) => {
              const isActive = index === currentSlide;
              return (
                <div
                  key={slideSrc}
                  style={{ zIndex: isActive ? 5 : 1 }}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <Image
                    src={slideSrc}
                    alt={`Featured architectural design ${index + 1}`}
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              );
            })}
            {/* Subtle overlay & editorial label */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-black/10 pointer-events-none z-10" />
            <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between text-white pointer-events-none z-20">
              <span className="text-[11px] font-medium tracking-wider uppercase bg-white/15 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 shadow-sm">
                Atelier Project • 2026
              </span>
              <span className="text-[10px] font-mono tracking-widest text-white/90">
                0{currentSlide + 1} / 0{totalSlides}
              </span>
            </div>
          </div>
        </div>

        {/* Mobile (SCROLL DOWN) Tag & Slide Dots */}
        <div className="md:hidden relative z-20 px-6 pb-6 pt-1 flex items-center justify-between">
          <span className="text-[10px] font-mono tracking-[0.2em] text-white/70 uppercase">
            (SCROLL DOWN)
          </span>
          <div className="flex items-center gap-1.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleGoToSlide(index)}
                aria-label={`Slide ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "w-5 bg-white" : "w-1.5 bg-white/40"
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3. Large Device Bottom Status, Slideshow Controls & Scroll Down Indicator */}
        <div className="hidden md:flex relative z-20 w-full px-6 sm:px-10 md:px-14 lg:px-20 pb-8 sm:pb-10 items-end justify-between mt-auto">
          {/* Left: Scroll Down link */}
          <div className="flex items-center gap-2.5">
            <a
              href="#philosophy"
              onClick={handleScrollDown}
              className="group/scroll inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/80 hover:text-white uppercase transition-colors cursor-pointer"
            >
              <span>(SCROLL DOWN)</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-white/70 group-hover/scroll:scale-125 transition-transform animate-pulse" />
            </a>
          </div>

          {/* Center / Right: Slideshow Navigation & Controls */}
          {totalSlides > 1 && (
            <div className="flex items-center gap-4 bg-slate-950/50 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full shadow-lg">
              {/* Prev Slide Button */}
              <button
                onClick={handlePrev}
                aria-label="Previous image slide"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              {/* Slide Dots / Indicators with Animated Progress Line */}
              <div className="flex items-center gap-1.5">
                {slides.map((_, index) => {
                  const isActive = index === currentSlide;
                  return (
                    <button
                      key={index}
                      onClick={() => handleGoToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer relative overflow-hidden ${
                        isActive
                          ? "w-8 bg-white/25"
                          : "w-2 bg-white/40 hover:bg-white/70"
                      }`}
                    >
                      {isActive && (
                        <span
                          key={`progress-${currentSlide}`}
                          className="absolute inset-0 bg-white origin-left"
                          style={{
                            animation: `heroProgressBar ${autoPlayIntervalMs}ms linear forwards`,
                          }}
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Slide Counter (01 / 03) */}
              <div className="text-[11px] font-mono tracking-widest text-white/90 px-1 select-none">
                <span>0{currentSlide + 1}</span>
                <span className="text-white/40 mx-1">/</span>
                <span className="text-white/60">0{totalSlides}</span>
              </div>

              {/* Next Slide Button */}
              <button
                onClick={handleNext}
                aria-label="Next image slide"
                className="w-7 h-7 rounded-full flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all cursor-pointer"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          )}

          {/* Far Right: Studio Tag */}
          <div className="text-right">
            <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.18em] text-white/75 uppercase drop-shadow-sm">
              ARCHLINE ATELIER • 2026
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
