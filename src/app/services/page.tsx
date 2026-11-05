"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerNavbar from "@/components/InnerNavbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Layers,
  Ruler,
  Compass,
  FileCheck,
  Building,
  Hammer,
} from "lucide-react";

const disciplines = [
  {
    id: "architecture",
    num: "01",
    code: "DISCIPLINE 01",
    title: "Bespoke Villa Architecture & Master Planning",
    subtitle: "Custom residential architecture engineered for lifelong permanence.",
    description:
      "We design custom private villas, palatial compounds, and high-end residential estates. Every scheme begins with microclimate solar-path studies, soil bearing capacity analysis, and spatial choreography to ensure daylight, acoustic privacy, and seamless indoor-outdoor transitions.",
    deliverables: [
      "Master layout & site zoning",
      "Structural engineering & post-tensioned spans",
      "Municipal authority approvals (CDA, RDA, DHA)",
      "Photorealistic 3D external visualizations",
      "MEP (Mechanical, Electrical & Plumbing) coordination",
    ],
    image: "/project/project (1).png",
    stat: "100%",
    statLabel: "Approved permit sets",
  },
  {
    id: "interior",
    num: "02",
    code: "DISCIPLINE 02",
    title: "Luxury Interior Architecture & Bespoke Styling",
    subtitle: "Atmospheric domestic sanctuaries crafted with tactile, honest materials.",
    description:
      "Our interior architecture is not an afterthought; it is integrated into the structural shell from day one. We curate imported natural stone slabs, custom fluted timber millwork, architectural recessed illumination, and bespoke furniture pieces that age gracefully over time.",
    deliverables: [
      "Comprehensive interior drawing sets & elevations",
      "Custom kitchen, closet & joinery detailing",
      "Imported marble slab selection & bookmatching",
      "Curated FF&E (Furniture, Fixtures & Equipment) schedules",
      "Acoustic treatment & multi-layered lighting design",
    ],
    image: "/assets/renovation-2.jpg",
    stat: "40ft",
    statLabel: "Column-free living spaces",
  },
  {
    id: "bim",
    num: "03",
    code: "DISCIPLINE 03",
    title: "5D BIM Engineering & Cost Advisory",
    subtitle: "Digital twin modeling that eliminates budget overruns before breaking ground.",
    description:
      "Traditional construction suffers from 25–40% cost escalations caused by on-site trade clashes and incomplete drawings. We model your residence in 5D BIM (Building Information Modeling) where every pipe, rebar, and conduit is clash-tested digitally before pouring concrete.",
    deliverables: [
      "Digital Twin 3D BIM model",
      "Automated clash detection across MEP & Structure",
      "Locked itemized Bill of Quantities (BOQ)",
      "Material quantity takeoff down to the millimeter",
      "Precise project timeline & critical path schedule",
    ],
    image: "/assets/before.jpg",
    stat: "Zero",
    statLabel: "On-site clash reworks",
  },
  {
    id: "elevation",
    num: "04",
    code: "DISCIPLINE 04",
    title: "Elevation, Facade & Parametric Aesthetic",
    subtitle: "Unmistakable architectural massing and modern vernacular proportions.",
    description:
      "A home should command quiet distinction without shouting. We engineer sculptural cantilevered volumes, parametric privacy louvers, textured fair-face concrete, and floor-to-ceiling thermally broken double-glazed curtains to achieve curb presence that endures.",
    deliverables: [
      "Parametric sun-shading & louver engineering",
      "Facade material specification & weatherproofing",
      "Architectural night facade illumination",
      "Curtain wall & structural glazing details",
      "Landscape and entrance gateway synthesis",
    ],
    image: "/assets/archline-hero.jpg",
    stat: "11+",
    statLabel: "Years facade mastery",
  },
];

export default function ServicesPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/services"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Hero Header */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#121214] text-white border-b border-zinc-800">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white/90 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>FOUR DISCIPLINES • ONE ACCOUNTABLE ATELIER</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-heading font-semibold text-white tracking-tight leading-[1.08] mb-6">
              Comprehensive architectural scope, from first sketch to key handover.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-zinc-400 font-light leading-relaxed max-w-3xl">
              We eliminate the fragmentation between architects, interior decorators, and site contractors. Explore our four disciplines engineered for discerning residential and commercial clients.
            </p>
          </div>
        </div>
      </section>

      {/* Disciplines Detailed Catalog */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-24 sm:space-y-32">
          {disciplines.map((item, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={item.id}
                id={item.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Image Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/11] sm:aspect-[4/3] rounded-[24px] sm:rounded-[32px] overflow-hidden bg-slate-900 shadow-xl border border-slate-200 group">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />

                    {/* Stat Badge Overlaid */}
                    <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                      <div>
                        <span className="text-3xl sm:text-4xl font-heading font-bold text-white block">
                          {item.stat}
                        </span>
                        <span className="text-xs font-mono text-slate-300">
                          {item.statLabel}
                        </span>
                      </div>
                      <span className="text-xs font-mono uppercase bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {item.code}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-sky-700 font-semibold block mb-2">
                      {item.num} · {item.code}
                    </span>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-slate-950 tracking-tight leading-tight">
                      {item.title}
                    </h2>
                    <p className="mt-2 text-sm sm:text-base text-slate-700 font-medium italic">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.description}
                  </p>

                  {/* Deliverables Checklist */}
                  <div className="pt-2">
                    <h3 className="text-xs font-mono uppercase tracking-wider text-slate-900 font-semibold mb-3">
                      Key Atelier Deliverables:
                    </h3>
                    <ul className="space-y-2.5">
                      {item.deliverables.map((del, dIdx) => (
                        <li key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{del}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setIsConsultOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-900 hover:text-sky-700 underline underline-offset-4 decoration-slate-300 transition-colors cursor-pointer"
                    >
                      <span>Inquire about this scope</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Engagement Options Matrix: Advisory vs Turnkey */}
      <section className="py-20 sm:py-28 bg-[#f8f9fb] border-y border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-slate-950 tracking-tight">
              Flexible Studio Engagement Models
            </h2>
            <p className="mt-3 text-sm text-slate-600 font-light">
              Choose the level of involvement that suits your project needs, from pure architectural blueprints to end-to-end turnkey site construction.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Model 1: Architectural & Design Advisory */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-xs font-mono uppercase text-slate-500 font-semibold block mb-2">
                  OPTION A
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 mb-2">
                  Architectural & Interior Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Complete blueprint sets, 3D visualizations, structural engineering, and periodic site quality supervision while you hire your preferred builder.
                </p>

                <ul className="space-y-2 text-xs text-slate-700 border-t border-slate-100 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Full Architectural & Structural Sets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Municipal Authority Approval Sets
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Interior Material & Lighting Schedules
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    Weekly Milestone Quality Site Audits
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors"
                >
                  Request Advisory Scope
                </button>
              </div>
            </div>

            {/* Model 2: Turnkey Design & Build Execution */}
            <div className="bg-[#151518] text-white rounded-3xl p-8 border border-white/10 shadow-xl flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-4 right-4 bg-amber-400 text-slate-950 text-[10px] font-mono font-bold uppercase px-3 py-1 rounded-full">
                RECOMMENDED
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-slate-400 font-semibold block mb-2">
                  OPTION B
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white mb-2">
                  Full Turnkey Design & Build
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed mb-6">
                  Single-source accountability from groundbreak to key handover. We engineer, procure, supervise masons, and deliver your villa under one locked contract.
                </p>

                <ul className="space-y-2 text-xs text-slate-300 border-t border-white/10 pt-5">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Everything in Option A Included
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    100% Locked Itemized BOQ Contract
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Direct Material Sourcing (Italian stone, timber)
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                    Guaranteed Handover Date With Zero Clashes
                  </li>
                </ul>
              </div>

              <div className="pt-8 mt-6 border-t border-white/10">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full bg-[#f59e0b] hover:bg-[#d97706] text-slate-950 font-semibold py-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow-md"
                >
                  Request Turnkey Proposal
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </main>
  );
}

