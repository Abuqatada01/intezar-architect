"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Menu } from "lucide-react";

interface HeroSectionProps {
  onOpenMenu?: () => void;
  onOpenConsultation?: () => void;
}

export default function HeroSection({
  onOpenMenu,
  onOpenConsultation,
}: HeroSectionProps) {
  const handleScrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("portfolio");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen bg-[#2c435c] p-2.5 sm:p-4 md:p-6 lg:p-7 flex flex-col justify-center select-none"
    >
      {/* Outer Framed Canvas with Rounded Border */}
      <div className="relative w-full h-[calc(100vh-20px)] sm:h-[calc(100vh-32px)] md:h-[calc(100vh-48px)] min-h-[640px] max-h-[1050px] rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/20 shadow-2xl flex flex-col justify-between bg-gradient-to-b from-[#3a5879] via-[#486b91] to-[#2b415a]">
        
        {/* Subtle Architectural Drafting Grid Columns (Vertical Lines) */}
        <div className="absolute inset-0 grid grid-cols-4 sm:grid-cols-6 pointer-events-none z-10 divide-x divide-white/[0.07]">
          <div />
          <div />
          <div />
          <div />
          <div className="hidden sm:block" />
          <div className="hidden sm:block" />
        </div>

        {/* 1. Top Architectural Header */}
        <header className="relative z-30 w-full px-6 sm:px-10 md:px-14 pt-6 sm:pt-8 md:pt-10 flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="text-white text-xs sm:text-sm md:text-[15px] font-bold tracking-[0.18em] uppercase hover:opacity-85 transition-opacity"
          >
            ARCHLINE®
          </a>

          {/* Center Links (Muted & Elegantly Lowercased with commas) */}
          <nav className="hidden md:flex items-center gap-2 text-white/80 text-xs sm:text-[13px] font-normal tracking-wide">
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
            className="flex items-center gap-2 text-white text-xs sm:text-sm font-semibold tracking-wider group cursor-pointer hover:opacity-85 transition-opacity"
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
        <div className="relative z-20 w-full px-6 sm:px-10 md:px-14 pt-6 sm:pt-10 md:pt-14 pb-2">
          {/* Main Statement */}
          <h1 className="text-white font-heading font-normal sm:font-medium text-4xl sm:text-6xl md:text-7xl lg:text-[76px] xl:text-[84px] leading-[1.08] sm:leading-[1.05] tracking-[-0.03em] max-w-5xl">
            Harmony shaped by light,
            <br />
            material, and space.
          </h1>

          {/* Two-Column Bottom Row in Mid-Section: Subtext on Left & Pill CTA on Right */}
          <div className="mt-6 sm:mt-8 md:mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
            {/* Left Dialogue Paragraph */}
            <p className="text-white/85 text-xs sm:text-sm md:text-[14.5px] font-light leading-relaxed max-w-lg">
              We craft spaces where light, texture, and proportion form a quiet
              dialogue between architecture and emotion — timeless, balanced,
              and deeply human.
            </p>

            {/* Right Action Button */}
            <div className="shrink-0 pb-1">
              <a
                href="#portfolio"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-3 bg-white text-slate-950 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full font-semibold text-xs sm:text-sm tracking-wider uppercase shadow-lg hover:bg-slate-100 hover:scale-[1.03] active:scale-95 transition-all duration-200 group cursor-pointer"
              >
                <span>EXPLORE OUR PROJECTS</span>
                <ArrowRight className="w-4 h-4 text-slate-900 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Bottom Landscape Visual & Scroll Tag */}
        <div className="relative z-20 w-full mt-auto">
          {/* Architectural Villa Visual sitting at the bottom */}
          <div className="relative w-full h-44 sm:h-56 md:h-72 lg:h-80 overflow-hidden">
            <Image
              src="/assets/archline-hero.jpg"
              alt="Architectural minimalist villa by Archline"
              fill
              priority
              sizes="100vw"
              className="object-cover object-bottom"
            />
            {/* Smooth Top Gradient Blend with the Sky */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-[#3a5879]/90 pointer-events-none" />
            
            {/* Scroll Down Tag over bottom left */}
            <div className="absolute top-4 sm:top-6 left-6 sm:left-10 md:left-14 z-30">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] text-white/70 uppercase">
                (SCROLL DOWN)
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
