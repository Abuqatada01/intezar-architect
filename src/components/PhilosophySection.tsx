"use client";

import React from "react";
import Image from "next/image";

const philosophyImages = [
  { id: 1, src: "/assets/philo-1.jpg", alt: "Modern architectural facade with louvers" },
  { id: 2, src: "/assets/philo-2.jpg", alt: "Mediterranean seaside balcony and terrace" },
  { id: 3, src: "/assets/philo-3.jpg", alt: "White stone cantilever modern villa" },
  { id: 4, src: "/assets/philo-4.jpg", alt: "Architectural facade with floating staircase" },
  { id: 5, src: "/assets/philo-5.jpg", alt: "Curvilinear water pavilion with warm glow" },
  { id: 6, src: "/assets/philo-6.jpg", alt: "Minimalist cubic pavilion on calm water" },
];

export default function PhilosophySection() {
  return (
    <section className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-100 overflow-hidden select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mb-14 lg:mb-18">
        {/* Top Philosophy Typography Header */}
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[11px] sm:text-xs font-mono font-medium text-slate-500 uppercase tracking-[0.14em]">
              (OUR PHILOSOPHY)
            </span>
            <div className="w-14 sm:w-20 h-[1px] bg-slate-300" />
            <span className="text-xl sm:text-2xl lg:text-3xl font-heading font-normal text-slate-800 tracking-tight">
              By world class designers
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-heading font-normal text-slate-900 leading-[1.3] tracking-[-0.02em]">
            Architect Intezar&apos;s Design Lab shapes tomorrow&apos;s living experience —
            through smart digital architecture and spatial solutions.
          </h2>
        </div>
      </div>

      {/* Auto-sliding Infinite Marquee Track */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-scroll flex items-center gap-4 sm:gap-5">
          {/* Primary Set */}
          {philosophyImages.map((img) => (
            <div
              key={`set1-${img.id}`}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[340px] aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}

          {/* Seamless Duplicate Set */}
          {philosophyImages.map((img) => (
            <div
              key={`set2-${img.id}`}
              aria-hidden="true"
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[340px] aspect-square rounded-lg overflow-hidden bg-slate-100 border border-slate-200/80 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_12px_30px_rgba(0,0,0,0.12)] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
