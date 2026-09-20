"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Maximize2 } from "lucide-react";

interface PortfolioSectionProps {
  onSelectProject: (project: any) => void;
}

const portfolioProjects = [
  {
    id: "stellar",
    title: "Stellar Home for Saturion",
    category: "Villas",
    location: "Costa Brava, Spain",
    area: "14,500 sq.ft",
    year: "2025",
    img: "/assets/terascape-hero.jpg",
    desc: "Multi-tiered brutalist raw concrete cantilever residence overlooking the Mediterranean, featuring floor-to-ceiling acoustic glass balustrades and custom walnut carpentry.",
  },
  {
    id: "penthouse",
    title: "The Obsidian Sky Penthouse",
    category: "Penthouses",
    location: "Mayfair, London",
    area: "8,200 sq.ft",
    year: "2025",
    img: "/assets/terascape-hero-2.jpg",
    desc: "Triple-height duplex penthouse offering 360-degree skyline views, private infinity sky pool, and custom hand-carved Calacatta marble hearth.",
  },
  {
    id: "sanctuary",
    title: "Al-Khor Desert Sanctuary",
    category: "Estates",
    location: "Doha, Qatar",
    area: "22,000 sq.ft",
    year: "2026",
    img: "/assets/terascape-hero-3.jpg",
    desc: "Passive-cooling rammed earth and concrete estate with sunken biophilic courtyard oasis and thermal labyrinth cooling.",
  },
  {
    id: "coastal",
    title: "Monaco Cliffside Atelier",
    category: "Villas",
    location: "Monaco",
    area: "11,800 sq.ft",
    year: "2024",
    img: "/assets/after.jpg",
    desc: "Post-tensioned cantilever architecture carved directly into the seaside rockface with underwater wine cellar and helipad.",
  },
];

const categories = ["All", "Villas", "Penthouses", "Estates"];

export default function PortfolioSection({
  onSelectProject,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header and Filter Buttons */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700 block mb-2 font-mono">
              (SELECTED WORKS)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight">
              Featured residential
              <br />
              portfolios.
            </h2>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-700 border border-slate-200 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200 hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative h-72 sm:h-84 w-full overflow-hidden bg-slate-200">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                    <span>Inspect Blueprint & Gallery</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded text-xs font-semibold text-slate-900">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-mono">
                  <span className="flex items-center gap-1 text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-sky-600" />
                    {project.location}
                  </span>
                  <span>{project.area}</span>
                </div>
                <h3 className="text-xl font-heading font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
