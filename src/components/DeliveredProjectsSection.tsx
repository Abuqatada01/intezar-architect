"use client";

import React from "react";
import Image from "next/image";

interface DeliveredProjectsSectionProps {
  onOpenConsultation?: () => void;
}

export default function DeliveredProjectsSection({
  onOpenConsultation,
}: DeliveredProjectsSectionProps) {
  return (
    <section
      id="delivered-projects"
      className="py-16 sm:py-24 lg:py-32 bg-white text-slate-900 border-t border-slate-100 selection:bg-slate-900 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* 2-Column Asymmetric Bento Grid matching Reference */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
            {/* Top-Left Title Header */}
            <div className="pb-2 sm:pb-4">
              <span className="text-xs sm:text-sm font-medium text-slate-500 tracking-tight block mb-2 sm:mb-3">
                Projects
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-heading font-medium tracking-[-0.03em] text-slate-900 leading-[1.08]">
                We&apos;ve Delivered
              </h2>
            </div>

            {/* Card 1: Coastal Boutique */}
            <div
              onClick={onOpenConsultation}
              className="group relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-200/60 cursor-pointer"
            >
              <Image
                src="/assets/delivered-1.jpg"
                alt="Coastal Boutique"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glassmorphic Category Badge (Top Right) */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
                <span className="inline-block bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-white border border-white/30 shadow-sm">
                  Commercial Interior Design
                </span>
              </div>

              {/* Title (Bottom Left) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 sm:p-7">
                <h3 className="text-base sm:text-lg font-heading font-medium text-white tracking-tight">
                  Coastal Boutique
                </h3>
              </div>
            </div>

            {/* Card 3: Sea Retreat */}
            <div
              onClick={onOpenConsultation}
              className="group relative w-full aspect-[16/11] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-200/60 cursor-pointer"
            >
              <Image
                src="/assets/delivered-3.jpg"
                alt="Sea Retreat"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glassmorphic Category Badge (Top Right) */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
                <span className="inline-block bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-white border border-white/30 shadow-sm">
                  Interior Styling
                </span>
              </div>

              {/* Title (Bottom Left) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 sm:p-7">
                <h3 className="text-base sm:text-lg font-heading font-medium text-white tracking-tight">
                  Sea Retreat
                </h3>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN ================= */}
          <div className="lg:col-span-6 flex flex-col space-y-6 sm:space-y-8">
            {/* Card 2: Workspace Makeover (Starts at top) */}
            <div
              onClick={onOpenConsultation}
              className="group relative w-full aspect-[4/3.4] sm:aspect-[16/13] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-200/60 cursor-pointer"
            >
              <Image
                src="/assets/delivered-2.jpg"
                alt="Workspace Makeover"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glassmorphic Category Badge (Top Right) */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
                <span className="inline-block bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-white border border-white/30 shadow-sm">
                  Residential Interior Design
                </span>
              </div>

              {/* Title (Bottom Left) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 sm:p-7">
                <h3 className="text-base sm:text-lg font-heading font-medium text-white tracking-tight">
                  Workspace Makeover
                </h3>
              </div>
            </div>

            {/* Card 4: Living Revival */}
            <div
              onClick={onOpenConsultation}
              className="group relative w-full aspect-[16/10] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] border border-slate-200/60 cursor-pointer"
            >
              <Image
                src="/assets/delivered-4.jpg"
                alt="Living Revival"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />

              {/* Glassmorphic Category Badge (Top Right) */}
              <div className="absolute top-4 sm:top-5 right-4 sm:right-5 z-10">
                <span className="inline-block bg-white/25 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[11px] sm:text-xs font-normal text-white border border-white/30 shadow-sm">
                  Renovation & Remodeling
                </span>
              </div>

              {/* Title (Bottom Left) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end p-5 sm:p-7">
                <h3 className="text-base sm:text-lg font-heading font-medium text-white tracking-tight">
                  Living Revival
                </h3>
              </div>
            </div>

            {/* Bottom Centered / Right Action Link */}
            <div className="flex justify-center sm:justify-center pt-2 sm:pt-4">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
              >
                <span>View All</span>
                <span className="text-base leading-none group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
