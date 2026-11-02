"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ServiceItem {
  id: string;
  num: string;
  code: string;
  title: string;
  description: string;
  tags: string[];
  image: string;
  alt: string;
}

const servicesData: ServiceItem[] = [
  {
    id: "architecture",
    num: "01",
    code: "S - 01 / ARCHITECTURE",
    title: "Architecture",
    description:
      "End-to-end architectural planning, structural synthesis, passive microclimate design, and municipal authority approvals for bespoke residences, villas, and commercial landmarks.",
    tags: ["MASTER PLANNING", "STRUCTURAL SYNTHESIS", "MUNICIPAL PERMITS", "PASSIVE SOLAR"],
    image: "/project/project (1).png",
    alt: "Contemporary architectural tower and residence",
  },
  {
    id: "interior",
    num: "02",
    code: "S - 02 / INTERIOR DESIGN",
    title: "Interior",
    description:
      "Atmospheric living spaces crafted with honest materials—bespoke fluted joinery, hand-carved Italian stone hearths, curated textiles, and discreet architectural illumination layers.",
    tags: ["BESPOKE MILLWORK", "MATERIAL CURATION", "FF&E SPECIFICATION", "LIGHTING DESIGN"],
    image: "/assets/renovation-2.jpg",
    alt: "Luxury bespoke interior living space",
  },
  {
    id: "design-advisory",
    num: "03",
    code: "S - 03 / DESIGN ADVISORY",
    title: "Design Advisory",
    description:
      "Strategic spatial consulting, plot acquisition assessment, 5D BIM digital twin auditing, and rigorous value-engineering to de-risk investment before ground is broken.",
    tags: ["FEASIBILITY AUDIT", "5D BIM DIGITAL TWIN", "VALUE ENGINEERING", "DEVELOPMENT STRATEGY"],
    image: "/assets/before.jpg",
    alt: "Architectural blueprint and BIM engineering advisory",
  },
  {
    id: "elevation-aesthetic",
    num: "04",
    code: "S - 04 / ELEVATION & AESTHETIC",
    title: "Elevation and Aesthetic Design",
    description:
      "Sculptural facade compositions, parametric louvers, cantilevered massing, and modern vernacular proportions engineered to turn everyday properties into unmistakable landmarks.",
    tags: ["FACADE COMPOSITION", "PARAMETRIC LOUVERS", "CANTILEVER PROPORTIONS", "CURB DISTINCTION"],
    image: "/assets/archline-hero.jpg",
    alt: "Architectural elevation and modern facade aesthetic",
  },
];

interface ServicesExpertiseSectionProps {
  onOpenConsultation?: () => void;
}

export default function ServicesExpertiseSection({
  onOpenConsultation,
}: ServicesExpertiseSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const activeService = servicesData[activeIndex];

  return (
    <section
      id="services"
      className="py-24 lg:py-32 bg-[#121212] text-white border-b border-zinc-800/80 select-none relative overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Header Row matching screenshot */}
        <div className="relative mb-16 lg:mb-24">
          {/* Top Left Tag */}
          <div className="lg:absolute lg:top-2 lg:left-0 mb-4 lg:mb-0">
            <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em] text-zinc-400">
              04 — SERVICES
            </span>
          </div>

          {/* Centered Large Headline */}
          <div className="text-left lg:text-center">
            <h2 className="text-3xl sm:text-5xl lg:text-[60px] font-heading font-normal text-white tracking-[-0.03em] leading-[1.08]">
              Four disciplines, one studio.
            </h2>
          </div>
        </div>

        {/* 2-Column Interactive Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: 4 Accordion Services List */}
          <div className="lg:col-span-7 flex flex-col border-b border-zinc-800">
            {servicesData.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`border-t border-zinc-800 transition-colors duration-300 py-6 sm:py-8 cursor-pointer group ${
                    isActive ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
                  }`}
                >
                  <div className="flex items-start justify-between gap-6">
                    {/* Left: Number + Title */}
                    <div className="flex items-baseline gap-6 sm:gap-10">
                      <span className="text-xs font-mono tracking-widest text-zinc-500 shrink-0">
                        {service.num}
                      </span>

                      <div>
                        <h3
                          className={`text-2xl sm:text-3xl lg:text-[34px] font-heading tracking-tight transition-all duration-300 ${
                            isActive
                              ? "text-white font-medium"
                              : "text-zinc-500 group-hover:text-zinc-300 font-normal"
                          }`}
                        >
                          {service.title}
                        </h3>

                        {/* Expandable Content Area on Hover / Active */}
                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${
                            isActive
                              ? "max-h-[220px] opacity-100 mt-4 sm:mt-5"
                              : "max-h-0 opacity-0"
                          }`}
                        >
                          <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed max-w-xl">
                            {service.description}
                          </p>

                          {/* Category Tags */}
                          <div className="flex flex-wrap gap-x-4 gap-y-1.5 mt-4 sm:mt-5 text-[10px] sm:text-[11px] font-mono tracking-[0.16em] text-zinc-500 uppercase">
                            {service.tags.map((tag, i) => (
                              <span key={i} className="hover:text-zinc-300 transition-colors">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right: Diagonal Arrow */}
                    <div className="shrink-0 pt-1">
                      <span
                        className={`inline-block transition-all duration-300 ${
                          isActive
                            ? "text-white translate-x-1 -translate-y-1"
                            : "text-zinc-600 group-hover:text-zinc-400"
                        }`}
                      >
                        <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Visual Preview Card matching screenshot */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative w-full max-w-[480px] mx-auto lg:ml-auto aspect-[4/5] rounded-none overflow-hidden bg-zinc-900 border border-zinc-800 shadow-2xl group">
              {/* Image with smooth transition */}
              {servicesData.map((service, index) => {
                const isSelected = activeIndex === index;
                return (
                  <div
                    key={service.id}
                    className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                      isSelected ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
                    }`}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 480px"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
                  </div>
                );
              })}

              {/* Bottom Overlay Label (e.g. S - 03 / PROCUREMENT) */}
              <div className="absolute bottom-5 left-5 z-20 pointer-events-none">
                <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.2em] uppercase text-white/90 bg-black/60 backdrop-blur-md px-3 py-1.5 border border-white/10">
                  {activeService.code}
                </span>
              </div>
            </div>

            {/* Bottom Explore Link matching screenshot */}
            <div className="w-full max-w-[480px] mx-auto lg:ml-auto pt-4 border-b border-zinc-800 pb-2.5 mt-2">
              <button
                onClick={onOpenConsultation}
                className="w-full flex items-center justify-between text-[11px] sm:text-xs font-mono uppercase tracking-[0.2em] text-zinc-300 hover:text-white transition-colors cursor-pointer group"
              >
                <span>EXPLORE SERVICES</span>
                <span className="text-zinc-500 group-hover:text-white group-hover:translate-x-1 transition-transform">
                  ↗
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
