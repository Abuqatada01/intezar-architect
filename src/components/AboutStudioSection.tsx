"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  ArrowUpRight,
  ArrowDownRight,
  ArrowRight,
} from "lucide-react";

interface AboutStudioSectionProps {
  onOpenConsultation?: () => void;
}

export default function AboutStudioSection({
  onOpenConsultation,
}: AboutStudioSectionProps) {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="about-studio"
      className="py-16 sm:py-24 lg:py-32 bg-[#f8f9fb] text-slate-900 border-b border-slate-200/80 select-none overflow-hidden"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300/80 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>09 · PERSONAL TRUST</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“Who is behind this? Can I trust them?”</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
            About the Architect:
            <br />
            Direct mastery, personal accountability.
          </h2>
        </div>

        {/* =========================================================================
            BLOCK 1: ABOUT US REDESIGN (MATCHING IMAGE 1 - MOBILE ADAPTIVE)
            Left: Dark Card ("Strategy first. Always.")
            Right: Portrait Card with 2 Floating Number Cards at Bottom
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 lg:gap-8 items-stretch">
          {/* ================= LEFT CARD (DARK CARD) ================= */}
          <div className="lg:col-span-6 bg-[#151518] text-white rounded-[24px] sm:rounded-[36px] p-6 sm:p-10 lg:p-12 flex flex-col justify-between shadow-xl border border-white/5">
            <div>
              {/* Eyebrow Tag with Amber Sparkle */}
              <div className="inline-flex items-center gap-2 text-amber-400 text-xs font-mono font-medium mb-4 sm:mb-6">
                <span>✦</span>
                <span className="tracking-wide">About the architect</span>
              </div>

              {/* Main Headline */}
              <h3 className="text-2xl sm:text-4xl lg:text-[44px] font-heading font-bold text-white tracking-tight leading-[1.15] mb-3 sm:mb-5">
                Strategy first.
                <br />
                <span className="text-slate-300 font-medium">Always.</span>
              </h3>

              {/* Description Paragraph */}
              <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed max-w-lg mb-6 sm:mb-8">
                I lead every architectural and interior project with direct personal oversight, combining structural rigor and spatial sensitivity to build residences that endure for generations.
              </p>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center gap-2.5 sm:gap-3.5 mb-6 sm:mb-10">
                <button
                  onClick={onOpenConsultation}
                  className="bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-semibold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] tracking-wide inline-flex items-center gap-1.5 transition-all shadow-md active:scale-98 cursor-pointer"
                >
                  <span>More About Me</span>
                  <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>

                <button
                  onClick={() => scrollToSection("services")}
                  className="bg-white hover:bg-slate-100 text-slate-950 font-semibold px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] tracking-wide inline-flex items-center gap-1.5 transition-all shadow-sm active:scale-98 cursor-pointer"
                >
                  <span>See Services</span>
                  <ArrowDownRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </button>
              </div>
            </div>

            {/* Inset Featured Case Card at Bottom of Dark Card */}
            <div className="bg-[#212126] rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-white/10 flex items-center gap-3 sm:gap-4 transition-all hover:border-amber-400/40 group">
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl overflow-hidden relative shrink-0 bg-slate-800">
                <Image
                  src="/assets/after.jpg"
                  alt="Featured architectural project"
                  fill
                  sizes="64px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="text-xs sm:text-sm font-heading font-medium text-white truncate group-hover:text-amber-300 transition-colors">
                  Bespoke Cantilever Villa — DHA Phase 6
                </h4>
                <button
                  onClick={() => scrollToSection("case-study")}
                  className="text-[11px] sm:text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 mt-0.5 cursor-pointer"
                >
                  <span>See Details</span>
                  <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                </button>
              </div>
            </div>
          </div>

          {/* ================= RIGHT CARD (PORTRAIT WITH 2 FLOATING NUMBER CARDS - MOBILE ADAPTIVE) ================= */}
          <div className="lg:col-span-6 relative rounded-[24px] sm:rounded-[36px] overflow-hidden bg-slate-900 border border-slate-200/80 shadow-xl min-h-[420px] sm:min-h-[500px] flex flex-col justify-end group">
            {/* Full-Bleed Portrait Background */}
            <Image
              src="/intezar/intezar-ahmed.png"
              alt="Architect Intezar Ahmed"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              priority
            />

            {/* Gradient Overlay for card legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

            {/* 2 Floating White Number Cards Overlaid at Bottom (Side-by-side on Mobile & Desktop) */}
            <div className="relative z-10 p-3 sm:p-6 lg:p-7 grid grid-cols-2 gap-2 sm:gap-4">
              {/* Floating Card 1 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border border-white flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none mb-1 flex items-baseline gap-0.5">
                    <span>11</span>
                    <span className="text-[#f59e0b] font-bold text-base sm:text-2xl">+</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight line-clamp-1">
                    Years of Practice
                  </p>
                </div>
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-slate-100 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-500">
                  <span className="text-emerald-600 font-bold shrink-0">↑</span>
                  <span className="truncate">PCATP Licensed</span>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="bg-white/95 backdrop-blur-md rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl border border-white flex flex-col justify-between">
                <div>
                  <div className="text-xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none mb-1 flex items-baseline gap-0.5">
                    <span>99</span>
                    <span className="text-[#f59e0b] font-bold text-base sm:text-2xl">%</span>
                  </div>
                  <p className="text-[11px] sm:text-xs text-slate-600 font-medium leading-tight line-clamp-1">
                    Satisfaction Rate
                  </p>
                </div>
                <div className="pt-2 sm:pt-3 mt-2 sm:mt-3 border-t border-slate-100 flex items-center gap-1 text-[10px] sm:text-[11px] font-mono text-slate-500">
                  <span className="text-emerald-600 font-bold shrink-0">↑</span>
                  <span className="truncate">Zero Junior Delegation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BLOCK 2: EXPERIENCE REDESIGN (MATCHING IMAGE 2 - MOBILE ADAPTIVE)
            Centered Headline with Gold Sparkle
            3 Large Number Cards in a Row
            ========================================================================= */}
        <div className="pt-4 sm:pt-10">
          {/* Centered Heading matching reference image */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 px-2">
            <h3 className="text-xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-900 tracking-tight leading-snug flex items-center justify-center gap-2 flex-wrap">
              <span>The most-trusted architectural studio for building success</span>
              <span className="text-amber-500">✨</span>
            </h3>
          </div>

          {/* 3 Large Number Cards in a Row matching reference image 1:1 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {/* Card 1: 35+ / Projects */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-[68px] font-heading font-bold text-slate-950 tracking-tight leading-none mb-3 sm:mb-4">
                  35+
                </div>
                <p className="text-xs sm:text-base text-slate-700 font-normal leading-snug">
                  luxury residences & estates
                  <br />
                  designed & delivered
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-400">
                PCATP, CDA & RDA Municipal Blueprint Sets
              </div>
            </div>

            {/* Card 2: 11+ / Years Experience */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-[68px] font-heading font-bold text-slate-950 tracking-tight leading-none mb-3 sm:mb-4">
                  11+
                </div>
                <p className="text-xs sm:text-base text-slate-700 font-normal leading-snug">
                  years of continuous practice
                  <br />
                  in high-end residential architecture
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-400">
                Active Practice Across Islamabad & Overseas
              </div>
            </div>

            {/* Card 3: 99% / Satisfaction Rate */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.03)] hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="text-4xl sm:text-5xl lg:text-[68px] font-heading font-bold text-slate-950 tracking-tight leading-none mb-3 sm:mb-4">
                  99%
                </div>
                <p className="text-xs sm:text-base text-slate-700 font-normal leading-snug">
                  client satisfaction rate
                  <br />
                  with zero handover disputes
                </p>
              </div>
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-slate-100 text-[10px] sm:text-[11px] font-mono text-slate-400">
                Verified Milestone Sign-Offs & Site Audits
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        {onOpenConsultation && (
          <div className="pt-2 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-black text-white px-8 py-3.5 sm:py-4 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer text-center"
            >
              <span>Schedule Direct Consultation with Intezar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
