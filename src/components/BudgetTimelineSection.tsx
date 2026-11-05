"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";

interface BudgetTimelineSectionProps {
  onOpenConsultation?: () => void;
}

export default function BudgetTimelineSection({
  onOpenConsultation,
}: BudgetTimelineSectionProps) {
  // Estimator Interactive State
  const [sqft, setSqft] = useState<number>(6500);
  const [scopeIndex, setScopeIndex] = useState<number>(3); // 1 = Architecture, 2 = Interior, 3 = Turnkey
  const [tierIndex, setTierIndex] = useState<number>(2); // 1 = Contemporary, 2 = Ultra-Luxury, 3 = Bespoke

  // Scope definitions
  const scopeMap: Record<number, { key: "architecture" | "interior" | "full"; label: string; sub: string }> = {
    1: { key: "architecture", label: "Architecture Only", sub: "Structure, Facade & Blueprint Sets" },
    2: { key: "interior", label: "Interior & Styling", sub: "Millwork, Joinery & Finishes" },
    3: { key: "full", label: "Full Turnkey", sub: "End-to-End Architecture + Execution" },
  };

  // Tier definitions
  const tierMap: Record<number, { key: "contemporary" | "ultra" | "bespoke"; label: string; sub: string }> = {
    1: { key: "contemporary", label: "Contemporary Luxury", sub: "High-grade local stone & double-glaze" },
    2: { key: "ultra", label: "Ultra-Luxury", sub: "Imported Italian marble & custom joinery" },
    3: { key: "bespoke", label: "Bespoke Landmark", sub: "Post-tensioned spans & museum finishes" },
  };

  const selectedScope = scopeMap[scopeIndex];
  const selectedTier = tierMap[tierIndex];

  // Luxury Architectural Benchmarks in INR (₹ per sq.ft)
  const inrRates: Record<string, Record<string, number>> = {
    contemporary: { architecture: 1600, interior: 2800, full: 4500 },
    ultra: { architecture: 2400, interior: 4200, full: 7500 },
    bespoke: { architecture: 3500, interior: 6500, full: 11500 },
  };

  const currentRate = inrRates[selectedTier.key][selectedScope.key];
  const totalCost = sqft * currentRate;

  // Timeline calculation
  const monthsBase: Record<string, number> = {
    contemporary: 8,
    ultra: 10,
    bespoke: 13,
  };
  const estimatedMonths = Math.round(monthsBase[selectedTier.key] + sqft / 4500);

  // Format in INR Crores or Lakhs
  const formatINRLarge = (amount: number) => {
    if (amount >= 10000000) {
      const cr = (amount / 10000000).toFixed(2);
      return `₹ ${cr} Cr`;
    }
    const lakhs = (amount / 100000).toFixed(2);
    return `₹ ${lakhs} Lakhs`;
  };

  // Full amount with Indian grouping
  const formatINRFull = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Slider background gradients (blue up to thumb, grey after)
  const sqftPercent = Math.round(((sqft - 1000) / (20000 - 1000)) * 100);
  const scopePercent = Math.round(((scopeIndex - 1) / 2) * 100);
  const tierPercent = Math.round(((tierIndex - 1) / 2) * 100);

  return (
    <section
      id="budget-timeline"
      className="py-16 sm:py-24 lg:py-32 bg-[#f4f5f7] text-slate-900 border-b border-slate-200 select-none overflow-hidden"
    >
      <div className="max-w-[1360px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Stage 08 Header Tag */}
        <div className="max-w-3xl mb-10 sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-3 sm:mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>08 · PRACTICAL CONCERNS</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“What will it cost? How long will it take?”</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.18] sm:leading-[1.15]">
            Budget & timeline:
            <br />
            Practical numbers, zero surprises.
          </h2>
          <p className="mt-3 sm:mt-4 text-slate-600 text-xs sm:text-base font-light max-w-2xl leading-relaxed">
            We reject the industry habit of vague ballpark estimates that balloon midway through construction. Explore real cost drivers and calculate your ballpark investment below.
          </p>
        </div>

        {/* ================= 4 COST DRIVERS BENTO GRID (MOBILE ADAPTIVE) ================= */}
        <div className="mb-12 sm:mb-20">
          {/* Top Featured Hero Card (1 Wide Card) */}
          <div className="bg-white rounded-[22px] sm:rounded-[28px] border border-slate-200/90 shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-hidden mb-4 sm:mb-6 group transition-all duration-300 hover:shadow-xl">
            <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
              {/* Left Image with Artistic Vignette */}
              <div className="md:col-span-5 relative min-h-[200px] sm:min-h-[260px] md:min-h-[300px] bg-slate-900 overflow-hidden">
                <Image
                  src="/assets/before.jpg"
                  alt="Architectural strategy and blueprint costing"
                  fill
                  sizes="(max-width: 768px) 100vw, 42vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-transparent via-transparent to-white/95" />
              </div>

              {/* Right Content */}
              <div className="md:col-span-7 p-5 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="inline-block bg-slate-100 text-slate-700 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 sm:px-3 py-1 rounded-full border border-slate-200 mb-3 sm:mb-4">
                    Strategy
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-semibold text-slate-900 tracking-tight leading-snug mb-2 sm:mb-3">
                    Why Traditional Construction Keeps Getting Budgets Wrong
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed max-w-xl">
                    Many clients move fast on excitement but fall behind on costing. Unclear drawings and trade clashes cause 25–40% budget overruns. This breakdown explains what truly dictates investment and how 5D BIM locks every line item before breaking ground.
                  </p>
                </div>

                {/* Bottom Row */}
                <div className="flex items-center justify-between pt-4 sm:pt-6 border-t border-slate-100 mt-5 sm:mt-6 text-xs text-slate-500">
                  <span className="flex items-center gap-1.5 font-mono text-[10px] sm:text-[11px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-900" />
                    <span>Cost Analysis & Strategy</span>
                  </span>

                  <span className="font-serif italic text-xs sm:text-sm text-slate-900 tracking-wide font-medium">
                    by Architect Intezar
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Row of 3 Vertical Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            {/* Card 1: Scale */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <Image
                  src="/assets/pillar-spatial.jpg"
                  alt="Covered Area and Volumetric Scale"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 z-10 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border border-white shadow-sm">
                  Growth & Scale
                </div>
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              <div className="p-5 sm:p-7 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-slate-900 leading-snug mb-1.5 group-hover:text-sky-700 transition-colors">
                    Covered Area & Volumetric Mass
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed">
                    Overall square footage directly dictates foundational concrete mass, structural steel tonnage, and excavation depth.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Operations / Engineering */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <Image
                  src="/project/project (1).png"
                  alt="Structural Spans and Cantilevers"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 z-10 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border border-white shadow-sm">
                  Engineering
                </div>
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              <div className="p-5 sm:p-7 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-slate-900 leading-snug mb-1.5 group-hover:text-sky-700 transition-colors">
                    Spans, Cantilevers & Double Heights
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed">
                    Column-free 40ft living spans and floating cantilever balconies require post-tensioned engineering and vibration analysis.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Workflow / Materials */}
            <div className="bg-white rounded-[20px] sm:rounded-[28px] overflow-hidden border border-slate-200/90 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group">
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/11] overflow-hidden bg-slate-100">
                <Image
                  src="/assets/renovation-2.jpg"
                  alt="Material Palette and Luxury Finishes"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute top-3.5 right-3.5 z-10 bg-white/90 backdrop-blur-md text-slate-800 text-[10px] sm:text-[11px] font-mono font-medium px-2.5 py-1 rounded-full border border-white shadow-sm">
                  Finishes & Millwork
                </div>
                <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-white via-white/50 to-transparent" />
              </div>

              <div className="p-5 sm:p-7 pt-2 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-base sm:text-lg font-heading font-semibold text-slate-900 leading-snug mb-1.5 group-hover:text-sky-700 transition-colors">
                    Material Palette & Imported Stone
                  </h4>
                  <p className="text-xs sm:text-[13px] text-slate-500 font-light leading-relaxed">
                    Imported Italian Calacatta marble vs. local travertine, bespoke fluted millwork, and acoustic double glazing define finishing tiers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            CALCULATOR REDESIGN (MATCHING SCREENSHOT WITH INR - MOBILE ADAPTIVE)
            ========================================================================= */}
        <div className="bg-white rounded-[24px] sm:rounded-[36px] p-5 sm:p-10 lg:p-14 border border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.06)]">
          {/* Centered Heading */}
          <h3 className="text-2xl sm:text-3xl lg:text-[42px] font-heading font-bold text-slate-900 text-center tracking-tight mb-8 sm:mb-14">
            Architectural Investment Calculator
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-stretch">
            {/* ================= LEFT COLUMN: 3 SLIDER CONTROLS ================= */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 sm:space-y-10">
              {/* Control 1: Covered Area */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                  <label className="text-xs sm:text-base font-semibold text-slate-900">
                    Covered Area
                  </label>
                  <div className="border border-slate-200 rounded-lg px-3 sm:px-4 py-1 text-xs sm:text-base font-mono font-medium text-slate-900 bg-white shadow-sm min-w-[100px] sm:min-w-[130px] text-right">
                    {sqft.toLocaleString()} sq.ft
                  </div>
                </div>

                {/* Range Slider with dynamic blue fill */}
                <input
                  type="range"
                  min={1000}
                  max={20000}
                  step={250}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #0066ff 0%, #0066ff ${sqftPercent}%, #e2e8f0 ${sqftPercent}%, #e2e8f0 100%)`,
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#0066ff] touch-pan-x"
                />

                <div className="flex justify-between text-[11px] sm:text-xs font-mono text-slate-400 mt-1.5 sm:mt-2">
                  <span>1 000 sq.ft</span>
                  <span>20 000 sq.ft</span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 font-light mt-1">
                  Enter the total planned built-up residential or commercial area.
                </p>
              </div>

              {/* Control 2: Project Scope */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                  <label className="text-xs sm:text-base font-semibold text-slate-900">
                    Scope of Work
                  </label>
                  <div className="border border-slate-200 rounded-lg px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-slate-900 bg-white shadow-sm min-w-[100px] sm:min-w-[130px] text-right">
                    {selectedScope.label}
                  </div>
                </div>

                {/* 3-Step Slider with dynamic blue fill */}
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={1}
                  value={scopeIndex}
                  onChange={(e) => setScopeIndex(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #0066ff 0%, #0066ff ${scopePercent}%, #e2e8f0 ${scopePercent}%, #e2e8f0 100%)`,
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#0066ff] touch-pan-x"
                />

                <div className="flex justify-between text-[11px] sm:text-xs font-mono text-slate-400 mt-1.5 sm:mt-2">
                  <span>Architecture</span>
                  <span>Turnkey Execution</span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 font-light mt-1">
                  {selectedScope.sub}
                </p>
              </div>

              {/* Control 3: Specification Tier */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2 sm:mb-3">
                  <label className="text-xs sm:text-base font-semibold text-slate-900">
                    Specification Tier
                  </label>
                  <div className="border border-slate-200 rounded-lg px-3 sm:px-4 py-1 text-xs sm:text-sm font-semibold text-slate-900 bg-white shadow-sm min-w-[100px] sm:min-w-[130px] text-right">
                    {selectedTier.label}
                  </div>
                </div>

                {/* 3-Step Slider with dynamic blue fill */}
                <input
                  type="range"
                  min={1}
                  max={3}
                  step={1}
                  value={tierIndex}
                  onChange={(e) => setTierIndex(Number(e.target.value))}
                  style={{
                    background: `linear-gradient(to right, #0066ff 0%, #0066ff ${tierPercent}%, #e2e8f0 ${tierPercent}%, #e2e8f0 100%)`,
                  }}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[#0066ff] touch-pan-x"
                />

                <div className="flex justify-between text-[11px] sm:text-xs font-mono text-slate-400 mt-1.5 sm:mt-2">
                  <span>Contemporary</span>
                  <span>Bespoke Landmark</span>
                </div>

                <p className="text-[11px] sm:text-xs text-slate-500 font-light mt-1">
                  {selectedTier.sub}
                </p>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: LIGHT-BLUE TINTED SUMMARY CARD ================= */}
            <div className="lg:col-span-5 bg-[#f0f6ff] rounded-[20px] sm:rounded-[24px] p-5 sm:p-8 border border-[#e0edfb] flex flex-col justify-between shadow-sm">
              <div>
                {/* Monthly Payment style -> Estimated Investment in INR */}
                <div className="mb-3 sm:mb-4">
                  <span className="text-xs sm:text-base font-semibold text-slate-900 block">
                    Estimated Investment
                  </span>
                  <div className="text-2xl sm:text-4xl lg:text-[44px] font-heading font-bold text-slate-950 tracking-tight leading-none my-2 sm:my-2.5">
                    {formatINRLarge(totalCost)}
                  </div>
                  <span className="block text-[11px] sm:text-xs font-mono text-slate-500">
                    Exact total: {formatINRFull(totalCost)}
                  </span>
                </div>

                <p className="text-xs text-slate-600 font-light leading-relaxed">
                  This is an approximate estimated investment range for your project based on current luxury construction benchmarks in INR.
                </p>

                {/* Divider Line */}
                <div className="border-t border-[#d8e7fa] my-4 sm:my-6" />

                {/* Metrics Breakdown Rows matching reference */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <span className="block text-xs font-semibold text-slate-900">
                        Estimated Timeline
                      </span>
                      <span className="block text-[10px] sm:text-[11px] text-slate-500 font-light">
                        Groundbreak to key handover.
                      </span>
                    </div>
                    <span className="font-mono font-bold text-slate-900 text-xs sm:text-base shrink-0">
                      {estimatedMonths} Months
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-3 sm:gap-4">
                    <div>
                      <span className="block text-xs font-semibold text-slate-900">
                        Benchmark Rate per Sq.Ft
                      </span>
                      <span className="block text-[10px] sm:text-[11px] text-slate-500 font-light">
                        INR cost index per sq.ft area.
                      </span>
                    </div>
                    <span className="font-mono font-bold text-slate-900 text-xs sm:text-base shrink-0">
                      ₹ {currentRate.toLocaleString("en-IN")} / sq.ft
                    </span>
                  </div>
                </div>
              </div>

              {/* Ready to get started? CTA Block matching reference */}
              <div className="pt-6 sm:pt-8">
                <h4 className="text-base sm:text-xl font-heading font-semibold text-slate-900 mb-1">
                  Ready to get started?
                </h4>
                <p className="text-xs text-slate-600 font-light leading-relaxed mb-3 sm:mb-4">
                  Get in touch with Architect Intezar for personalized advice and an itemized 5D BIM BOQ!
                </p>

                {onOpenConsultation && (
                  <button
                    onClick={onOpenConsultation}
                    className="w-full bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium py-3 sm:py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-xs sm:text-sm tracking-wide text-center cursor-pointer active:scale-98"
                  >
                    Book a Meeting
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
