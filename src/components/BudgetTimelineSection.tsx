"use client";

import React, { useState } from "react";
import {
  Calculator,
  Calendar,
  Sparkles,
  ShieldCheck,
  Clock,
  Coins,
  ArrowRight,
  TrendingDown,
  Layers,
} from "lucide-react";

interface BudgetTimelineSectionProps {
  onOpenConsultation?: () => void;
}

export default function BudgetTimelineSection({
  onOpenConsultation,
}: BudgetTimelineSectionProps) {
  // Estimator Interactive State
  const [sqft, setSqft] = useState<number>(6500);
  const [tier, setTier] = useState<"contemporary" | "ultra" | "bespoke">("ultra");
  const [scope, setScope] = useState<"full" | "architecture" | "interior">("full");

  // Rates benchmark
  const rates = {
    contemporary: { full: 6500, architecture: 1800, interior: 3500 },
    ultra: { full: 9500, architecture: 2500, interior: 5200 },
    bespoke: { full: 14000, architecture: 3600, interior: 7800 },
  };

  const currentRate = rates[tier][scope];
  const totalCost = sqft * currentRate;

  // Timeline computation
  const monthsBase = {
    contemporary: 8,
    ultra: 10,
    bespoke: 13,
  }[tier];
  const estimatedMonths = Math.round(monthsBase + sqft / 4500);

  return (
    <section
      id="budget-timeline"
      className="py-24 lg:py-32 bg-slate-50 text-slate-900 border-b border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Stage 08 Tag */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>08 · PRACTICAL CONCERNS</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“What will it cost? How long will it take?”</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Budget & timeline:
            <br />
            Practical numbers, zero surprises.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            We reject the industry habit of vague ballpark estimates that balloon midway through construction. Explore real cost drivers and calculate your ballpark investment below.
          </p>
        </div>

        {/* 4 Cost Drivers Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-900 mb-4">
              01
            </div>
            <h3 className="text-base font-heading font-semibold text-slate-900 mb-2">
              Covered Area (Sq.Ft)
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Overall building footprint directly dictates foundational concrete mass, structural steel tonnage, and brickwork volume.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-900 mb-4">
              02
            </div>
            <h3 className="text-base font-heading font-semibold text-slate-900 mb-2">
              Structural Spans & Cantilevers
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Double-height grand voids, column-free 40ft living spans, and cantilevered balconies require post-tensioned engineering.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-900 mb-4">
              03
            </div>
            <h3 className="text-base font-heading font-semibold text-slate-900 mb-2">
              Finishing Material Palette
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Imported Calacatta marble vs. local travertine, thermally-broken double acoustic glazing, and bespoke Italian millwork.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center font-mono font-bold text-slate-900 mb-4">
              04
            </div>
            <h3 className="text-base font-heading font-semibold text-slate-900 mb-2">
              Scope of Delivery
            </h3>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Full turnkey management (excavation to bespoke furniture) vs. core structural gray-structure design and MEP supervision.
            </p>
          </div>
        </div>

        {/* Interactive Live Budget & Timeline Estimator */}
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-slate-800 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-400 block mb-1">
                  INTERACTIVE ESTIMATOR
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-semibold text-white">
                  Estimate Your Project Investment
                </h3>
              </div>

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
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
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
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
                        : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="block text-xs font-semibold">Architecture Only</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Structure & Facade</span>
                  </button>

                  <button
                    onClick={() => setScope("interior")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      scope === "interior"
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
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
                  Specification Tier
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    onClick={() => setTier("contemporary")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === "contemporary"
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
                        : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="block text-xs font-semibold">Contemporary</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Fine local travertine</span>
                  </button>

                  <button
                    onClick={() => setTier("ultra")}
                    className={`p-3 rounded-xl border text-left transition-all ${
                      tier === "ultra"
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
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
                        ? "bg-sky-500/20 border-sky-400 text-white shadow-sm"
                        : "bg-slate-800/80 border-slate-700 text-slate-400 hover:text-white"
                    }`}
                  >
                    <span className="block text-xs font-semibold">Bespoke Landmark</span>
                    <span className="block text-[10px] text-slate-400 mt-0.5">Post-tensioned cantilevers</span>
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
                  * Ballpark estimate based on current market indices. Actual contract pricing is locked line-by-line via 5D BIM itemized Bill of Quantities.
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

        {/* Timeline Guarantees Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Clock className="w-5 h-5 text-sky-700 mb-3" />
            <h4 className="text-base font-heading font-semibold text-slate-900 mb-1">
              5D BIM Pre-Coordination
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Every structural pipe and beam clash is resolved digitally before concrete is poured, eliminating site redesign halts.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <Coins className="w-5 h-5 text-emerald-700 mb-3" />
            <h4 className="text-base font-heading font-semibold text-slate-900 mb-1">
              Advance Procurement
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Imported stone slabs and custom double-glazed glass units are pre-ordered during foundation pouring to arrive precisely when required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <ShieldCheck className="w-5 h-5 text-amber-700 mb-3" />
            <h4 className="text-base font-heading font-semibold text-slate-900 mb-1">
              Weather & Curing Buffers
            </h4>
            <p className="text-xs text-slate-600 font-light leading-relaxed">
              Concrete curing durations and seasonal monsoon windows are factored into contractual handover schedules upfront.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

