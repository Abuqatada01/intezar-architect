"use client";

import React from "react";
import Image from "next/image";

export interface PhilosophyProject {
  id: number;
  title: string;
  category: string;
  location: string;
  area: string;
  year: string;
  src: string;
  img: string;
  alt: string;
  desc: string;
}

export const philosophyImages: PhilosophyProject[] = [
  {
    id: 1,
    title: "The Vertex Tower Residence",
    category: "Architecture",
    location: "Islamabad, Pakistan",
    area: "185,000 sq.ft",
    year: "2025",
    src: "/project/project (1).png",
    img: "/project/project (1).png",
    alt: "High-rise contemporary residential tower with cantilevered louver facade",
    desc: "A contemporary high-rise residential landmark with sculptural facade fins, passive louver shading, and open double-height balconies.",
  },
  {
    id: 2,
    title: "Neoclassical Grand Residences",
    category: "Architecture",
    location: "Lahore, Pakistan",
    area: "210,000 sq.ft",
    year: "2024",
    src: "/project/project (2).png",
    img: "/project/project (2).png",
    alt: "Classical luxury apartment tower with pediment and dome",
    desc: "Monumental classical facade blending timeless pediments, carved stone cornices, and ultra-modern luxury residential floor plates.",
  },
  {
    id: 3,
    title: "Metro Spire Skyscraper",
    category: "Commercial & Residential",
    location: "Metropolitan Corridor",
    area: "320,000 sq.ft",
    year: "2026",
    src: "/project/project (3).png",
    img: "/project/project (3).png",
    alt: "Modern skyscraper overlooking elevated transit",
    desc: "A soaring aerodynamically profiled vertical sanctuary integrated directly with elevated transit and panoramic mountain outlooks.",
  },
  {
    id: 4,
    title: "Symmetrical Twin Grand Suites",
    category: "Architecture",
    location: "Islamabad, Pakistan",
    area: "175,000 sq.ft",
    year: "2025",
    src: "/project/project (4).png",
    img: "/project/project (4).png",
    alt: "Symmetrical residential landmark tower",
    desc: "Harmonious architectural balance of axial symmetry, dual-core circulation, and panoramic double-height terraces.",
  },
  {
    id: 5,
    title: "Metropolitan Mixed-Use Complex",
    category: "Commercial",
    location: "Urban Core",
    area: "240,000 sq.ft",
    year: "2024",
    src: "/project/project (5).png",
    img: "/project/project (5).png",
    alt: "Curvilinear illuminated retail podium and tower",
    desc: "Multi-tiered mixed-use development combining luxury boutique retail, elevated open-air gardens, and luxury living suites.",
  },
  {
    id: 6,
    title: "Minimalist Waterfront Pavilion",
    category: "Architecture",
    location: "Coastal Haven",
    area: "12,500 sq.ft",
    year: "2025",
    src: "/project/project (6).png",
    img: "/project/project (6).png",
    alt: "Minimalist cubic pavilion on calm water",
    desc: "Light-sculpted pavilion resting serenely over water with cantilevered stone slabs and diffused daylight wells.",
  },
  {
    id: 7,
    title: "Cantilevered Horizon Residence",
    category: "Architecture",
    location: "Islamabad",
    area: "14,000 sq.ft",
    year: "2025",
    src: "/project/project (7).png",
    img: "/project/project (7).png",
    alt: "Cantilevered modern villa facade",
    desc: "Post-tensioned cantilever architecture carved with floor-to-ceiling acoustic glass balustrades.",
  },
  {
    id: 8,
    title: "The Courtyard Sanctuary",
    category: "Architecture",
    location: "Lahore",
    area: "9,800 sq.ft",
    year: "2025",
    src: "/project/project (8).png",
    img: "/project/project (8).png",
    alt: "Biophilic modern villa",
    desc: "Passive-cooling travertine and concrete estate with sunken biophilic reflection pool oasis.",
  },
  {
    id: 9,
    title: "Monolithic Stone Atelier",
    category: "Architecture",
    location: "Islamabad",
    area: "11,500 sq.ft",
    year: "2024",
    src: "/project/project (9).png",
    img: "/project/project (9).png",
    alt: "Contemporary stone atelier residence",
    desc: "White stone cantilever modern villa with seamless indoor-outdoor water transition and custom oak carpentry.",
  },
];

interface PhilosophySectionProps {
  onSelectProject?: (project: PhilosophyProject) => void;
}

export default function PhilosophySection({
  onSelectProject,
}: PhilosophySectionProps) {
  return (
    <section
      id="featured-projects"
      className="py-20 lg:py-28 bg-white text-slate-900 border-b border-slate-100 overflow-hidden select-none"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12 mb-14 lg:mb-18">
        {/* Top Philosophy Typography Header matching screenshot 1:1 */}
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

      {/* Auto-sliding Infinite Marquee Track matching screenshot */}
      <div className="relative w-full overflow-hidden">
        {/* Edge Fade Gradients */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="animate-marquee-scroll flex items-center gap-4 sm:gap-5">
          {/* Primary Set */}
          {philosophyImages.map((img) => (
            <div
              key={`set1-${img.id}`}
              onClick={() => onSelectProject && onSelectProject(img)}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded">
                    {img.category}
                  </span>
                  <h4 className="font-heading font-semibold text-sm mt-1.5 line-clamp-1">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-white/80 font-mono mt-0.5">
                    {img.location}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Seamless Duplicate Set for Infinite Marquee */}
          {philosophyImages.map((img) => (
            <div
              key={`set2-${img.id}`}
              aria-hidden="true"
              onClick={() => onSelectProject && onSelectProject(img)}
              className="group relative flex-shrink-0 w-[240px] sm:w-[280px] md:w-[310px] lg:w-[340px] aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.14)] transition-all duration-500 cursor-pointer"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 text-white">
                <div>
                  <span className="text-[10px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded">
                    {img.category}
                  </span>
                  <h4 className="font-heading font-semibold text-sm mt-1.5 line-clamp-1">
                    {img.title}
                  </h4>
                  <p className="text-[11px] text-white/80 font-mono mt-0.5">
                    {img.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
