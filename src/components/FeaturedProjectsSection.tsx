"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2, Sparkles, Filter } from "lucide-react";

export interface ProjectItem {
  id: string;
  title: string;
  category: "Architecture" | "Interiors" | "Penthouse" | "Commercial";
  typeLabel: string;
  location: string;
  area: string;
  year: string;
  img: string;
  desc: string;
  highlights: string[];
}

export const curatedProjects: ProjectItem[] = [
  {
    id: "cantilever-villa",
    title: "The Cantilever Glass Villa",
    category: "Architecture",
    typeLabel: "Custom Villa Architecture",
    location: "Islamabad, Pakistan",
    area: "9,500 sq.ft",
    year: "2025",
    img: "/project/project (1).png",
    desc: "Sculptural post-tensioned residence featuring monolithic raw concrete volumes, floor-to-ceiling thermal glass walls, and a central reflection pool courtyard.",
    highlights: ["Post-tensioned Cantilever", "Courtyard Reflection Pool", "Acoustic Glass Envelope"],
  },
  {
    id: "obsidian-penthouse",
    title: "The Obsidian Sky Penthouse",
    category: "Penthouse",
    typeLabel: "Luxury Duplex Penthouse",
    location: "DHA Phase 8, Lahore",
    area: "8,200 sq.ft",
    year: "2025",
    img: "/assets/terascape-hero-2.jpg",
    desc: "Triple-height duplex penthouse offering 360-degree skyline views, private infinity sky pool, and custom hand-carved Calacatta marble hearth.",
    highlights: ["Double-Height Living Gallery", "Custom Calacatta Marble", "Private Sky Terrace"],
  },
  {
    id: "alkhor-estate",
    title: "Al-Khor Waterfront Estate",
    category: "Architecture",
    typeLabel: "Luxury Estate & Landscape",
    location: "Coastal Haven",
    area: "16,500 sq.ft",
    year: "2026",
    img: "/assets/terascape-hero-3.jpg",
    desc: "Passive-cooling cantilevered estate with sunken biophilic reflection pools, travertine colonnades, and private atelier wing.",
    highlights: ["Passive Solar Shading", "Sunken Biophilic Courtyard", "Thermal Travertine Massing"],
  },
  {
    id: "stellar-sanctuary",
    title: "Stellar Modern Sanctuary",
    category: "Interiors",
    typeLabel: "Residential Interior & Styling",
    location: "F-7/2 Islamabad",
    area: "11,200 sq.ft",
    year: "2025",
    img: "/project/project (3).png",
    desc: "White stone cantilever modern villa with seamless indoor-outdoor water transition, bespoke Italian millwork, and warm diffused lighting.",
    highlights: ["Zero-Edge Water Transition", "Warm Diffused Light Wells", "Bespoke Italian Millwork"],
  },
  {
    id: "monaco-cliffside",
    title: "Monaco Cliffside Atelier",
    category: "Architecture",
    typeLabel: "Cantilever Residence",
    location: "International Commission",
    area: "11,800 sq.ft",
    year: "2024",
    img: "/assets/after.jpg",
    desc: "Post-tensioned cantilever architecture carved directly into the seaside rockface with floor-to-ceiling glass balustrades and sea panoramas.",
    highlights: ["Rockface Structural Anchorage", "Acoustic Double-Glazing", "Panoramic Sea Terraces"],
  },
  {
    id: "creative-hq",
    title: "Creative Studio & Workspace",
    category: "Commercial",
    typeLabel: "Commercial Interior Architecture",
    location: "Gulberg, Lahore",
    area: "7,500 sq.ft",
    year: "2024",
    img: "/assets/delivered-1.jpg",
    desc: "Boutique creative office combining exposed board-formed concrete, biophilic green lightwells, and custom acoustic timber slat fins.",
    highlights: ["Daylit Biophilic Core", "Acoustic Timber Louvers", "Ergonomic Custom Workspace"],
  },
];

const categories = ["All", "Architecture", "Interiors", "Penthouse", "Commercial"] as const;

interface FeaturedProjectsSectionProps {
  onSelectProject: (project: ProjectItem) => void;
  onOpenConsultation?: () => void;
}

export default function FeaturedProjectsSection({
  onSelectProject,
  onOpenConsultation,
}: FeaturedProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects =
    activeCategory === "All"
      ? curatedProjects
      : curatedProjects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="featured-projects"
      className="py-24 lg:py-32 bg-slate-50 text-slate-900 border-b border-slate-200 select-none relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Visitor Journey Stage Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 lg:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>02 · BUILD INTEREST</span>
              <span className="text-slate-400">•</span>
              <span className="italic">“Can they create something I would love?”</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
              Featured architectural
              <br />
              & interior portfolios.
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-xl leading-relaxed">
              Explore 6 curated commissions reflecting our signature balance of sculptural mass, natural light, and bespoke material warmth.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 hover:text-slate-950 border border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 6-Card Responsive Bento / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.12)] transition-all duration-500 flex flex-col justify-between cursor-pointer hover:-translate-y-1.5"
            >
              {/* Image Container with Badge */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20 opacity-80 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge: Type */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-white/90 backdrop-blur-md text-slate-900 text-[11px] font-mono font-medium px-3 py-1 rounded-full border border-white shadow-sm">
                    {project.typeLabel}
                  </span>
                </div>

                {/* Hover trigger icon */}
                <div className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/50 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <Maximize2 className="w-4 h-4" />
                </div>

                {/* Bottom Overlay on Image: Location & Year */}
                <div className="absolute bottom-3.5 left-4 right-4 z-10 flex items-center justify-between text-white text-xs">
                  <span className="flex items-center gap-1 font-light drop-shadow">
                    <MapPin className="w-3.5 h-3.5 text-sky-300" />
                    {project.location}
                  </span>
                  <span className="font-mono text-[11px] text-white/80">
                    {project.area} • {project.year}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-sky-700 transition-colors tracking-tight">
                    {project.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-[13px] text-slate-600 line-clamp-2 font-light leading-relaxed">
                    {project.desc}
                  </p>

                  {/* Highlights pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {project.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Link */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-900 uppercase tracking-wider group-hover:text-sky-700 flex items-center gap-1.5 transition-colors">
                    Explore Project
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    View Blueprint & Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-heading font-semibold text-slate-900">
              Envisioning a custom residence or commercial project?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Every home we build is 100% tailored to your plot, lifestyle, and aesthetic sensibilities.
            </p>
          </div>
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="shrink-0 bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow hover:shadow-md cursor-pointer"
            >
              Discuss Your Project
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

