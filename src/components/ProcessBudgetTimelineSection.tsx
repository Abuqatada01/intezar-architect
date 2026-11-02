"use client";

import React, { useState } from "react";
import {
  Calendar,
  Calculator,
  Compass,
  FileSpreadsheet,
  HardHat,
  KeyRound,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Clock,
  Layers,
  HelpCircle,
} from "lucide-react";

interface ProcessBudgetTimelineSectionProps {
  onOpenConsultation?: () => void;
}

export default function ProcessBudgetTimelineSection({
  onOpenConsultation,
}: ProcessBudgetTimelineSectionProps) {
  const [activeTab, setActiveTab] = useState<"process" | "cost" | "timeline">("process");

  // Estimator State
  const [sqft, setSqft] = useState<number>(6500);
  const [tier, setTier] = useState<"contemporary" | "ultra" | "bespoke">("ultra");
  const [scope, setScope] = useState<"full" | "architecture" | "interior">("full");

  // Cost calculation constants (PKR or standard luxury benchmark index)
  // Base rates per sq.ft
  const rates = {
    contemporary: { full: 6500, architecture: 1800, interior: 3500 },
    ultra: { full: 9500, architecture: 2500, interior: 5200 },
    bespoke: { full: 14000, architecture: 3600, interior: 7800 },
  };

  const currentRate = rates[tier][scope];
  const totalCost = sqft * currentRate;

  // Timeline calculation
  const monthsBase = {
    contemporary: 8,
    ultra: 10,
    bespoke: 13,
  }[tier];
  const estimatedMonths = Math.round(monthsBase + (sqft / 4000));

  const steps = [
    {
      step: "01",
      title: "Discovery & Lifestyle Brief",
      duration: "Weeks 1–2",
      icon: Compass,
      tag: "Spatial Analysis",
      desc: "One-on-one consultation with Architect Intezar Ahmed. We analyze your lifestyle, plot topography, solar trajectory, and municipal regulations.",
      deliverables: ["Lifestyle questionnaire", "Topographical & zoning review", "Initial spatial feasibility study"],
    },
    {
      step: "02",
      title: "Concept & 3D Spatial Walkthrough",
      duration: "Weeks 3–6",
      icon: Layers,
      tag: "Visual Design",
      desc: "We translate your ideas into volumetric 3D models and photorealistic renderings. You see and experience the daylight, circulation, and massing before finalizing.",
      deliverables: ["2D floor plans & elevations", "3D exterior & interior photorealistic renders", "VR spatial model walkthrough"],
    },
    {
      step: "03",
      title: "5D BIM & Fixed Itemized BOQ",
      duration: "Weeks 7–10",
      icon: FileSpreadsheet,
      tag: "Cost Certainty",
      desc: "Every beam, pipe, and electrical conduit is clash-tested in BIM. We prepare a line-by-line itemized Bill of Quantities with locked material pricing.",
      deliverables: ["Clash-free MEP & structural drawings", "Itemized Bill of Quantities (BOQ)", "Municipal authority submission set"],
    },
    {
      step: "04",
      title: "Turnkey Execution & Key Handover",
      duration: "Months 4–12",
      icon: KeyRound,
      tag: "Flawless Delivery",
      desc: "Master artisans and site engineers execute the construction under Architect Intezar's direct supervision, culminating in a pristine key handover.",
      deliverables: ["Weekly video progress reports", "Stringent quality audit signoffs", "Defect-liability warranty manual"],
    },
  ];

  return (
    <section
      id="process"
      className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>07 · ANSWER PRACTICAL CONCERNS</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“How does it work? What will it cost? How long will it take?”</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Process, budget & timeline:
            <br />
            Total clarity before you begin.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Uncertainty causes stress. We demystify the design-to-execution workflow, detail what drives investment costs, and show how schedules are maintained.
          </p>
        </div>

        {/* 3 Main Interactive Navigation Tabs */}
        <div className="flex border-b border-slate-200 mb-12 overflow-x-auto pb-1 gap-2 sm:gap-6">
          <button
            onClick={() => setActiveTab("process")}
            className={`pb-4 px-2 text-sm sm:text-base font-medium transition-all duration-200 border-b-2 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "process"
                ? "border-slate-900 text-slate-950 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Compass className="w-4 h-4 text-sky-600" />
            <span>1. How Does It Work? (The Process)</span>
          </button>

          <button
            onClick={() => setActiveTab("cost")}
            className={`pb-4 px-2 text-sm sm:text-base font-medium transition-all duration-200 border-b-2 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "cost"
                ? "border-slate-900 text-slate-950 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>2. What Will It Cost? (Live Estimator)</span>
          </button>

          <button
            onClick={() => setActiveTab("timeline")}
            className={`pb-4 px-2 text-sm sm:text-base font-medium transition-all duration-200 border-b-2 cursor-pointer flex items-center gap-2 whitespace-nowrap ${
              activeTab === "timeline"
                ? "border-slate-900 text-slate-950 font-semibold"
                : "border-transparent text-slate-500 hover:text-slate-800"
            }`}
          >
            <Calendar className="w-4 h-4 text-amber-600" />
            <span>3. How Long Will It Take? (Timeline)</span>
          </button>
        </div>

        {/* ================= TAB 1: THE PROCESS ================= */}
        {activeTab === "process" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((st) => {
                const Icon = st.icon;
                return (
                  <div
                    key={st.step}
                    className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition-all duration-300"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-mono font-bold text-sky-700 bg-sky-100/70 px-2.5 py-1 rounded">
                          PHASE {st.step}
                        </span>
                        <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" />
                          {st.duration}
                        </span>
                      </div>

                      <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5" />
                      </div>

                      <h3 className="text-lg font-heading font-semibold text-slate-900 mb-2">
                        {st.title}
                      </h3>

                      <p className="text-xs sm:text-[13px] text-slate-600 font-light leading-relaxed mb-5">
                        {st.desc}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200/80">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Key Deliverables
                      </span>
                      <ul className="space-y-1.5">
                        {st.deliverables.map((d, i) => (
                          <li key={i} className="text-xs text-slate-700 flex items-start gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-slate-900 mt-1.5 shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-lg font-heading font-semibold text-white">
                  Want a tailored architectural roadmap for your specific plot?
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 font-light">
                  Architect Intezar Ahmed reviews site topography and bylaws during the initial consultation.
                </p>
              </div>
              {onOpenConsultation && (
                <button
                  onClick={onOpenConsultation}
                  className="shrink-0 bg-white hover:bg-slate-100 text-slate-900 px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow cursor-pointer"
                >
                  Book Discovery Call
                </button>
              )}
            </div>
          </div>
        )}

        {/* ================= TAB 2: LIVE ESTIMATOR & COST DRIVERS ================= */}
        {activeTab === "cost" && (
          <div className="space-y-10 animate-in fade-in duration-300">
            {/* What Affects Costs Explanation Bar */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <div>
                <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                  01. Covered Area
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Overall square footage directly dictates raw material volumes (concrete, steel, brickwork).
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                  02. Structural Cantilevers
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Post-tensioned deep cantilevers, basements, or rooftop swimming pools require specialized rebar engineering.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                  03. Material Palette
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Imported Italian marble, thermally-broken double glazing, and solid walnut joinery elevate finishing budgets.
                </p>
              </div>

              <div>
                <span className="text-xs font-mono font-bold text-slate-900 block mb-1">
                  04. Scope of Work
                </span>
                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  Comprehensive Turnkey (foundation to furniture) vs. Architectural drawings and structural framing only.
                </p>
              </div>
            </div>

            {/* Interactive Calculator Component */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Left Controls */}
                <div className="lg:col-span-7 space-y-8">
                  {/* SQFT Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                        Total Covered Area
                      </label>
                      <span className="font-mono text-xl font-bold text-sky-400">
                        {sqft.toLocaleString()} sq.ft
                      </span>
                    </div>
                    <input
                      type="range"
                      min={2000}
                      max={20000}
                      step={500}
                      value={sqft}
                      onChange={(e) => setSqft(Number(e.target.value))}
                      className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-sky-400"
                    />
                    <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-2">
                      <span>2,000 sq.ft (Boutique)</span>
                      <span>10,000 sq.ft</span>
                      <span>20,000 sq.ft (Estate)</span>
                    </div>
                  </div>

                  {/* Scope Selector */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Project Scope
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        onClick={() => setScope("full")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          scope === "full"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Full Turnkey</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">Architecture + Interior</span>
                      </button>

                      <button
                        onClick={() => setScope("architecture")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          scope === "architecture"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Architecture Only</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">Design & Structure</span>
                      </button>

                      <button
                        onClick={() => setScope("interior")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          scope === "interior"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Interior & Styling</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">Fitout & Millwork</span>
                      </button>
                    </div>
                  </div>

                  {/* Quality & Finish Tier */}
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider mb-3">
                      Finishing Specification Tier
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      <button
                        onClick={() => setTier("contemporary")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          tier === "contemporary"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Contemporary Luxury</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">High-grade local stone</span>
                      </button>

                      <button
                        onClick={() => setTier("ultra")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          tier === "ultra"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Ultra-Luxury</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">Italian marble + double-glaze</span>
                      </button>

                      <button
                        onClick={() => setTier("bespoke")}
                        className={`p-3 rounded-xl border text-left transition-all ${
                          tier === "bespoke"
                            ? "bg-sky-500/20 border-sky-400 text-white"
                            : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                        }`}
                      >
                        <span className="block text-xs font-semibold">Bespoke Landmark</span>
                        <span className="block text-[10px] text-slate-400 mt-0.5">Museum-grade cantilevers</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Output Card */}
                <div className="lg:col-span-5 bg-slate-800/90 rounded-2xl p-6 sm:p-8 border border-slate-700 text-center flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 block mb-2">
                      ESTIMATED INVESTMENT RANGE
                    </span>

                    <div className="my-4">
                      <span className="text-3xl sm:text-4xl font-mono font-bold text-white tracking-tight">
                        PKR {(totalCost / 10000000).toFixed(2)} Cr
                      </span>
                      <span className="block text-xs text-slate-400 mt-1">
                        ~ PKR {currentRate.toLocaleString()} / sq.ft benchmark
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 my-6 pt-4 border-t border-slate-700/80 text-left">
                      <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <span className="block text-[10px] font-mono text-slate-400">EST. TIMELINE</span>
                        <span className="block text-base font-bold text-white mt-0.5">
                          {estimatedMonths} Months
                        </span>
                      </div>

                      <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/50">
                        <span className="block text-[10px] font-mono text-slate-400">COST VARIANCE</span>
                        <span className="block text-base font-bold text-emerald-400 mt-0.5">
                          0% Locked BOQ
                        </span>
                      </div>
                    </div>

                    <p className="text-[11px] text-slate-400 font-light leading-relaxed mb-6">
                      * Ballpark estimate based on current market materials. Actual investment is fixed line-by-line via 5D BIM itemized BOQ.
                    </p>
                  </div>

                  {onOpenConsultation && (
                    <button
                      onClick={onOpenConsultation}
                      className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold py-3.5 rounded-full text-xs tracking-wider uppercase transition-all shadow-lg cursor-pointer"
                    >
                      Request Itemized Project BOQ
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= TAB 3: TIMELINE & HOW IT IS DETERMINED ================= */}
        {activeTab === "timeline" && (
          <div className="space-y-8 animate-in fade-in duration-300">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h3 className="text-xl font-heading font-semibold text-slate-900 mb-4">
                How We Determine and Guarantee Timelines
              </h3>
              <p className="text-sm text-slate-600 font-light leading-relaxed max-w-3xl mb-8">
                Construction delays are usually caused by three mistakes: vague drawings, clash between plumbing/structural trades, and late material ordering. Here is how our studio eliminates all three.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                    01
                  </div>
                  <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                    Digital Twin First
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    We resolve every structural and MEP conflict in 3D BIM before touching the site. Zero on-site demolition or redesign delays.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                    02
                  </div>
                  <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                    Early Long-Lead Procurement
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Custom imported stones, double-glazed glass units, and elevator shafts are ordered during foundation stages, arriving precisely when needed.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center font-bold font-mono text-sm mb-4">
                    03
                  </div>
                  <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                    Weather Buffer Buffering
                  </h4>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    Our schedules incorporate monsoon and winter curing buffers upfront, ensuring promised handover dates remain unbroken.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

