"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
  MoveHorizontal,
  Clock,
  DollarSign,
  Sun,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface CaseStudyData {
  id: string;
  tabLabel: string;
  title: string;
  subtitle: string;
  location: string;
  area: string;
  duration: string;
  budgetStatus: string;
  beforeImg: string;
  afterImg: string;
  beforeLabel: string;
  afterLabel: string;
  challenge: {
    points: string[];
    summary: string;
  };
  solution: {
    points: string[];
    summary: string;
  };
  results: {
    points: string[];
    summary: string;
    stats: { label: string; value: string }[];
  };
}

const caseStudies: CaseStudyData[] = [
  {
    id: "cantilever-renovation",
    tabLabel: "Villa Structural Renovation",
    title: "The Cantilever House — Structural Transformation",
    subtitle: "From a dark, partitioned 1990s house to a continuous 9,200 sq.ft light-filled modern architectural sanctuary.",
    location: "Sector F-7, Islamabad",
    area: "9,200 sq.ft covered",
    duration: "8.5 Months Total",
    budgetStatus: "Delivered Exactly on Budget (0% Cost Overrun)",
    beforeImg: "/assets/before.jpg",
    afterImg: "/assets/after.jpg",
    beforeLabel: "Original Blueprint & Framing",
    afterLabel: "Completed Turnkey Masterpiece",
    challenge: {
      summary: "A heavy, compartmentalized 1990s layout where 6 interior load-bearing walls suffocated natural daylight and blocked garden views.",
      points: [
        "Dark, isolated ground floor with low 9-foot ceilings and zero airflow.",
        "6 internal structural walls restricting open circulation and modern living flow.",
        "Poor insulation leading to extreme temperature fluctuations and high energy bills.",
        "The client wanted an expansive contemporary feel without razing the foundation.",
      ],
    },
    solution: {
      summary: "Engineered post-tensioned steel box beams to eliminate all 6 interior walls, paired with a central skylight atrium and 14ft acoustic glass curtain walls.",
      points: [
        "Inserted hidden post-tensioned steel beams enabling a 42-foot clear, column-free living span.",
        "Carved a double-height central light atrium that pulls sunlight deep into the basement and core.",
        "Installed thermally broken double-glazed acoustic glass that insulates against summer heat.",
        "Integrated bespoke cantilevered balconies that double as passive solar sunshades.",
      ],
    },
    results: {
      summary: "A seamless, light-flooded family residence that reduced artificial lighting dependency to zero during daytime hours.",
      points: [
        "Delivered turnkey in 8.5 months, fully coordinated with master masonry and bespoke woodwork.",
        "Passed all municipal structural safety and zoning certifications on first submission.",
        "Integrated sunken living lounge overlooking the newly landscaped reflection pool.",
      ],
      stats: [
        { label: "Daylight Penetration", value: "+65%" },
        { label: "HVAC Energy Savings", value: "42%" },
        { label: "Clear Open Span", value: "42 ft" },
        { label: "Budget Adherence", value: "100%" },
      ],
    },
  },
  {
    id: "penthouse-reconfig",
    tabLabel: "Duplex Penthouse Reconfiguration",
    title: "The Obsidian Penthouse — Spatial Volumetric Overhaul",
    subtitle: "Overcoming severe ceiling duct restrictions to unlock a triple-height skyline living gallery with private pool.",
    location: "DHA Phase 8, Lahore",
    area: "8,200 sq.ft duplex",
    duration: "6 Months Turnkey",
    budgetStatus: "Fixed Itemized Costing Adhered",
    beforeImg: "/assets/terascape-hero-2.jpg",
    afterImg: "/assets/terascape-hero.jpg",
    beforeLabel: "Standard High-Rise Shell",
    afterLabel: "Sculptural Sky Gallery",
    challenge: {
      summary: "A standard developer-grade concrete shell plagued with low MEP service drop ceilings, rigid plumbing shafts, and zero acoustic separation from neighboring units.",
      points: [
        "Heavy concrete columns dissecting the intended living room orientation.",
        "Acoustic vibration transmission from the building's central elevator cores.",
        "Rigid high-rise structural plumbing cores that could not be relocated.",
      ],
    },
    solution: {
      summary: "Engineered a custom 5D BIM MEP routing system that recaptured 2.4 feet of lost vertical ceiling height, enveloped in acoustic timber louvers.",
      points: [
        "Re-routed building services through hidden micro-bulkheads, elevating clear ceiling heights to 14.5 ft.",
        "Applied decoupled acoustic wall assemblies providing 55dB sound isolation from exterior city noise.",
        "Custom-cast Calacatta marble hearth anchored directly into structural columns as functional art.",
      ],
    },
    results: {
      summary: "An iconic sky residence celebrated for whisper-quiet acoustics, bespoke Italian millwork, and private rooftop infinity pool.",
      points: [
        "Completed within 6 months turnkey execution under single-contractor supervision.",
        "Bespoke Italian walnut millwork custom-fabricated and installed with millimeter tolerance.",
        "Zero warranty claims or water ingress issues post-handover.",
      ],
      stats: [
        { label: "Vertical Height Gained", value: "+2.4 ft" },
        { label: "Acoustic Attenuation", value: "55 dB" },
        { label: "Turnkey Timeline", value: "6 Mo." },
        { label: "Client Satisfaction", value: "100%" },
      ],
    },
  },
];

export default function CaseStudySection() {
  const [activeStudyIndex, setActiveStudyIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const study = caseStudies[activeStudyIndex];

  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleSliderMove(e.touches[0].clientX, rect);
  };

  return (
    <section
      id="case-study"
      className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>03 · PROVE CAPABILITY</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“Can they solve my specific design problem?”</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Project case study:
            <br />
            Where portfolio becomes proof.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Beautiful renders are easy; solving complex structural limitations, dark rooms, and rigid zoning codes is where true architectural mastery matters.
          </p>
        </div>

        {/* Case Study Selector Tabs */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 border-b border-slate-200">
          {caseStudies.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => {
                setActiveStudyIndex(idx);
                setSliderPos(50);
              }}
              className={`pb-3 px-1 text-sm font-medium transition-all duration-200 border-b-2 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
                activeStudyIndex === idx
                  ? "border-slate-900 text-slate-950 font-semibold"
                  : "border-transparent text-slate-500 hover:text-slate-800"
              }`}
            >
              <span className="font-mono text-xs opacity-60">0{idx + 1}.</span>
              <span>{cs.tabLabel}</span>
            </button>
          ))}
        </div>

        {/* Project Header Info Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 mb-12 shadow-xl border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2 text-xs font-mono text-sky-400">
                <span>{study.location}</span>
                <span>•</span>
                <span>{study.area}</span>
                <span>•</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  {study.budgetStatus}
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-semibold tracking-tight text-white">
                {study.title}
              </h3>
              <p className="mt-2 text-sm text-slate-300 max-w-2xl font-light">
                {study.subtitle}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 lg:gap-6 bg-slate-800/80 p-4 rounded-xl border border-slate-700/60 shrink-0">
              {study.results.stats.map((stat, i) => (
                <div key={i} className="text-center px-2">
                  <span className="block text-xl sm:text-2xl font-bold font-mono text-white">
                    {stat.value}
                  </span>
                  <span className="block text-[11px] font-medium text-slate-400 mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interactive Before & After Slider */}
        <div className="mb-14">
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-slate-500">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <MoveHorizontal className="w-4 h-4 text-sky-600 animate-pulse" />
              DRAG SLIDER HORIZONTALLY TO REVEAL TRANSFORMATION
            </span>
            <span className="hidden sm:inline">Split: {Math.round(sliderPos)}% / {100 - Math.round(sliderPos)}%</span>
          </div>

          <div
            className="relative w-full h-[380px] sm:h-[500px] lg:h-[540px] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl select-none cursor-ew-resize"
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
          >
            {/* AFTER IMAGE (Underneath, full view) */}
            <div className="absolute inset-0">
              <Image
                src={study.afterImg}
                alt="Completed space"
                fill
                priority
                className="object-cover"
              />
              <div className="absolute top-5 right-5 z-10 bg-slate-900/85 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>{study.afterLabel}</span>
              </div>
            </div>

            {/* BEFORE IMAGE (Clipped on the left) */}
            <div
              className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(0,0,0,0.4)]"
              style={{ width: `${sliderPos}%` }}
            >
              <div className="relative w-full h-full min-w-[700px] md:min-w-[1000px] lg:min-w-[1240px]">
                <Image
                  src={study.beforeImg}
                  alt="Original challenge / schematic"
                  fill
                  className="object-cover filter contrast-105"
                />
              </div>
              <div className="absolute top-5 left-5 z-10 bg-black/85 backdrop-blur-md text-white text-xs font-semibold px-4 py-2 rounded-full border border-white/20 shadow-lg flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-400" />
                <span>{study.beforeLabel}</span>
              </div>
            </div>

            {/* Drag Handle Knob */}
            <div
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="w-11 h-11 rounded-full bg-white text-slate-900 shadow-2xl border-2 border-slate-900 flex items-center justify-center">
                <MoveHorizontal className="w-5 h-5 text-slate-900" />
              </div>
            </div>
          </div>
        </div>

        {/* 3 Structured Pillars of Proof: Challenge -> Solution -> Result */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {/* 1. The Original Challenge */}
          <div className="bg-rose-50/50 rounded-2xl p-6 sm:p-7 border border-rose-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-rose-100 border border-rose-200 flex items-center justify-center text-rose-700 mb-5">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-rose-700 block mb-1">
                STEP 01: THE CHALLENGE
              </span>
              <h4 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                Original Structural Hurdles
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-light mb-4 leading-relaxed">
                {study.challenge.summary}
              </p>
              <ul className="space-y-2.5">
                {study.challenge.points.map((pt, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-rose-200/60 text-[11px] font-mono text-rose-800">
              Risk: High demolition or structural failure
            </div>
          </div>

          {/* 2. The Architectural Solution */}
          <div className="bg-sky-50/50 rounded-2xl p-6 sm:p-7 border border-sky-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-sky-100 border border-sky-200 flex items-center justify-center text-sky-700 mb-5">
                <Lightbulb className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-sky-700 block mb-1">
                STEP 02: THE SOLUTION
              </span>
              <h4 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                Our Engineering Response
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-light mb-4 leading-relaxed">
                {study.solution.summary}
              </p>
              <ul className="space-y-2.5">
                {study.solution.points.map((pt, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-600 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-sky-200/60 text-[11px] font-mono text-sky-800">
              Method: 5D BIM Coordinated Structural Steel
            </div>
          </div>

          {/* 3. The Completed Space */}
          <div className="bg-emerald-50/50 rounded-2xl p-6 sm:p-7 border border-emerald-200/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-emerald-700 mb-5">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-emerald-700 block mb-1">
                STEP 03: THE RESULT
              </span>
              <h4 className="text-xl font-heading font-semibold text-slate-900 mb-3">
                The Completed Landmark
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 font-light mb-4 leading-relaxed">
                {study.results.summary}
              </p>
              <ul className="space-y-2.5">
                {study.results.points.map((pt, i) => (
                  <li key={i} className="text-xs text-slate-600 flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200/60 text-[11px] font-mono text-emerald-800">
              Outcome: 100% Client Satisfaction & Zero Snags
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

