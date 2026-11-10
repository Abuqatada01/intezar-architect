"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  Maximize2,
  X,
  Building2,
  Clock,
  Award,
  Percent,
} from "lucide-react";

interface AboutStudioSectionProps {
  onOpenConsultation?: () => void;
}

export default function AboutStudioSection({
  onOpenConsultation,
}: AboutStudioSectionProps) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const photos = [
    {
      src: "/intezar/intezar-with-hafeez.png",
      alt: "Architect Intezar Ahmed with World-Renowned Architect Hafeez Contractor (13 Years Associated)",
      caption: "13 Years with World-Renowned Ar. Hafeez Contractor",
      focal: "object-[50%_15%]",
      subCaption: "13 Years of Collaboration with Padma Bhushan Ar. Hafeez Contractor",
    },
    {
      src: "/intezar/intezar-ahmed.png",
      alt: "Architect Intezar Ahmed — Principal Atelier (20+ Years Practice)",
      caption: "Architect Intezar Ahmed — 20+ Years Practice",
      focal: "object-top",
      subCaption: "Direct Authorship, PCATP Licensed & Turnkey Leadership",
    },
  ];

  return (
    <section
      id="about-studio"
      className="py-16 sm:py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200/80 select-none overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12 space-y-16 sm:space-y-24">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#43729b]" />
            <span>03 · PERSONAL TRUST & LEADERSHIP</span>
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
            BLOCK 1: EDITORIAL ABOUT REDESIGN (LIGHT THEME)
            Left: Large Rounded Image Card with Carousel Indicator & Caption Below
            Right: Personal Greeting, Bio Story, 4 Value Cards (Clarity, Craft, Candour, Calm), & "Book a call →" Button
            ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* ================= LEFT COLUMN: LARGE PHOTO CARD ================= */}
          <div className="lg:col-span-5 flex flex-col items-center">
            {/* Image Container with Rounded Corners & Subtle Border */}
            <div className="relative w-full rounded-[24px] sm:rounded-[36px] overflow-hidden bg-slate-100 border border-slate-200/90 shadow-[0_10px_40px_rgba(0,0,0,0.06)] min-h-[500px] sm:min-h-[580px] lg:min-h-[640px] flex flex-col justify-between group">
              {/* Full-Bleed Photograph */}
              <Image
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 42vw"
                className={`object-cover ${photos[activePhoto].focal} group-hover:scale-[1.02] transition-transform duration-700 ease-out cursor-pointer`}
                priority
                onClick={() => setIsLightboxOpen(true)}
              />

              {/* Top Bar: Expand / Fullscreen Trigger */}
              <div className="relative z-10 p-4 sm:p-5 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1 rounded-full border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Atelier</span>
                </span>

                <button
                  onClick={() => setIsLightboxOpen(true)}
                  title="View full image in high resolution"
                  className="inline-flex items-center gap-1.5 bg-black/50 hover:bg-black/80 backdrop-blur-md text-white text-[11px] font-mono px-3 py-1.5 rounded-full border border-white/20 transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">View Large</span>
                </button>
              </div>

              {/* Bottom Subtle Gradient for Pill Contrast */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

              {/* Floating Slide Indicator Pill matching Reference Image */}
              <div className="relative z-10 pb-5 flex items-center justify-center gap-2">
                <div className="bg-black/50 hover:bg-black/70 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/20 flex items-center gap-2 transition-all shadow-lg">
                  {photos.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={(e) => {
                        e.stopPropagation();
                        setActivePhoto(idx);
                      }}
                      aria-label={`Switch to photo ${idx + 1}`}
                      className={`transition-all duration-300 rounded-full cursor-pointer ${
                        activePhoto === idx
                          ? "w-6 h-2 bg-white"
                          : "w-2 h-2 bg-white/50 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Caption Underneath Image matching Reference Image ("Morning ritual" style) */}
            <p className="text-xs sm:text-[13px] font-mono text-slate-500 text-center mt-3 tracking-wide">
              {photos[activePhoto].caption}
            </p>
          </div>

          {/* ================= RIGHT COLUMN: GREETING, STORY, 4 CARDS & CTA ================= */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              {/* Heading: Hi, I'm Intezar. */}
              <div className="mb-6 sm:mb-8">
                {/* Prestige Pedigree Badge */}
                <div className="inline-flex items-center gap-2 bg-[#43729b]/10 border border-[#43729b]/25 text-[#315777] text-[11px] sm:text-xs font-mono font-medium px-3.5 py-1.5 rounded-full mb-3.5 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-[#43729b] animate-pulse shrink-0" />
                  <span className="tracking-wide">13 Years with Ar. Hafeez Contractor • 20+ Years Practice</span>
                </div>

                <h3 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-bold text-slate-950 tracking-[-0.03em] leading-[1.08] mb-2 sm:mb-3">
                  Hi, I&apos;m Intezar.
                </h3>
                <p className="text-xl sm:text-2xl lg:text-[27px] font-heading font-medium text-slate-800 tracking-[-0.02em] leading-snug">
                  An architect who believes good work feels inevitable.
                </p>
              </div>

              {/* Story Bio Paragraphs */}
              <div className="space-y-4 text-sm sm:text-[15px] font-sans text-slate-600 font-light leading-relaxed max-w-2xl mb-8 sm:mb-10">
                <p>
                  With over <strong className="text-slate-900 font-semibold">20+ years of comprehensive architectural practice</strong> — including <strong className="text-slate-900 font-semibold">13 formative years working alongside world-renowned master architect Hafeez Contractor (Padma Bhushan)</strong> — I lead an atelier dedicated to bespoke luxury residences, private villas, and landmark estates.
                </p>
                <p>
                  Collaborating for over a decade with Ar. Hafeez Contractor on monumental, complex developments instilled a rare standard of structural daring, civic scale, and flawless spatial planning. Today, I bring that world-class institutional discipline directly into private residences: cantilevered concrete slabs, 40-foot column-free spans, and microclimate solar orientation.
                </p>
                <p>
                  I accept only a limited number of residential commissions each year so that every line drawn, every structural audit, and every on-site detail is personally directed by me.
                </p>
              </div>

              {/* 4 Experience Metric Cards (2x2 Grid) in Light Theme matching Reference Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 max-w-2xl mb-8 sm:mb-10">
                {/* Card 1: 20+ Years Total Practice */}
                <div className="bg-[#f8f9fb] hover:bg-slate-100/80 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none">
                      20<span className="text-[#43729b]">+</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#43729b]/10 text-[#43729b] flex items-center justify-center border border-[#43729b]/20 shrink-0">
                      <Clock className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mb-0.5">
                      Years Total Practice
                    </h4>
                    <p className="text-[11px] sm:text-xs font-sans text-slate-500 font-light leading-relaxed">
                      Two decades of master architectural leadership.
                    </p>
                  </div>
                </div>

                {/* Card 2: 13 Years with Hafeez Contractor (Special Highlight) */}
                <div className="bg-gradient-to-br from-[#43729b]/10 via-[#43729b]/5 to-white hover:from-[#43729b]/15 hover:to-slate-50 rounded-2xl p-4 sm:p-5 border border-[#43729b]/30 shadow-[0_4px_12px_rgba(67,114,155,0.08)] transition-all duration-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none">
                      13<span className="text-[#43729b] font-bold text-base sm:text-xl ml-0.5">Yrs</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#43729b]/15 text-[#315777] flex items-center justify-center border border-[#43729b]/30 shrink-0">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-bold text-slate-950 mb-0.5">
                      With Ar. Hafeez Contractor
                    </h4>
                    <p className="text-[11px] sm:text-xs font-sans text-slate-600 font-normal leading-relaxed">
                      13 years with world-renowned master architect.
                    </p>
                  </div>
                </div>

                {/* Card 3: 30+ Projects Completed */}
                <div className="bg-[#f8f9fb] hover:bg-slate-100/80 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none">
                      30<span className="text-[#43729b]">+</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#43729b]/10 text-[#43729b] flex items-center justify-center border border-[#43729b]/20 shrink-0">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mb-0.5">
                      Projects Completed
                    </h4>
                    <p className="text-[11px] sm:text-xs font-sans text-slate-500 font-light leading-relaxed">
                      Luxury residences & bespoke private villas.
                    </p>
                  </div>
                </div>

                {/* Card 4: 99% Satisfaction Level */}
                <div className="bg-[#f8f9fb] hover:bg-slate-100/80 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all duration-200 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-slate-950 tracking-tight leading-none">
                      99<span className="text-[#43729b]">%</span>
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#43729b]/10 text-[#43729b] flex items-center justify-center border border-[#43729b]/20 shrink-0">
                      <Percent className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-heading font-semibold text-slate-900 mb-0.5">
                      Satisfaction Level
                    </h4>
                    <p className="text-[11px] sm:text-xs font-sans text-slate-500 font-light leading-relaxed">
                      Zero handover disputes and verified audits.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button matching Reference Image ("Book a call →") */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="inline-flex items-center gap-2 bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book a call</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <Link
                href="/about"
                className="text-xs sm:text-sm font-mono text-slate-600 hover:text-slate-950 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors"
              >
                Read full studio biography →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close modal"
              className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-Resolution Uncropped Image */}
            <div className="relative w-full aspect-[3/4] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950">
              <Image
                src={photos[activePhoto].src}
                alt={photos[activePhoto].alt}
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white space-y-1">
              <h4 className="text-base sm:text-lg font-heading font-semibold tracking-tight">
                {photos[activePhoto].caption}
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                {photos[activePhoto].subCaption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
