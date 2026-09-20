"use client";

import React, { useState } from "react";
import { Calculator, ArrowRight, CheckCircle } from "lucide-react";

interface EstimatorSectionProps {
  onOpenConsultation: () => void;
}

export default function EstimatorSection({
  onOpenConsultation,
}: EstimatorSectionProps) {
  const [sqft, setSqft] = useState(6500);
  const [tier, setTier] = useState<"standard" | "ultra" | "bespoke">("ultra");
  const [scope, setScope] = useState<"full" | "architecture" | "interior">("full");

  // Calculations
  const ratePerSqft = {
    standard: 450,
    ultra: 680,
    bespoke: 950,
  }[tier];

  const scopeMultiplier = {
    full: 1.0,
    architecture: 0.65,
    interior: 0.45,
  }[scope];

  const estimatedTotal = Math.round(sqft * ratePerSqft * scopeMultiplier);
  const estimatedMonths = Math.round(10 + (sqft / 1500) * (tier === "bespoke" ? 2.2 : 1.5));

  return (
    <section id="estimator" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700 block mb-2 font-mono">
            (REAL-TIME CALCULATOR)
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-semibold text-slate-900 tracking-tight">
            Interactive project
            <br />
            budget & timeline estimator.
          </h2>
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 shadow-2xl border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-7 space-y-8">
              {/* Slider for SQFT */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider">
                    Total Residential Area (Sq.Ft)
                  </label>
                  <span className="font-mono text-lg font-bold text-sky-400">
                    {sqft.toLocaleString()} sq.ft
                  </span>
                </div>
                <input
                  type="range"
                  min="2500"
                  max="30000"
                  step="500"
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="w-full accent-sky-400 cursor-pointer h-2 bg-slate-700 rounded-lg"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                  <span>2,500 sq.ft</span>
                  <span>15,000 sq.ft</span>
                  <span>30,000 sq.ft</span>
                </div>
              </div>

              {/* Tier Selection */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                  Specification & Finishes Tier
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "standard", label: "Executive", desc: "$450 / sq.ft" },
                    { id: "ultra", label: "Ultra Luxury", desc: "$680 / sq.ft" },
                    { id: "bespoke", label: "Museum Grade", desc: "$950 / sq.ft" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setTier(t.id as any)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        tier === t.id
                          ? "bg-sky-500/20 border-sky-400 text-white shadow-lg"
                          : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      <div className="text-xs font-bold">{t.label}</div>
                      <div className="text-[11px] text-slate-400 font-mono mt-0.5">
                        {t.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Scope Selection */}
              <div>
                <label className="text-xs sm:text-sm font-semibold text-slate-300 uppercase tracking-wider block mb-3">
                  Project Engagement Scope
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "full", label: "Full Turnkey (Arch + Interior)" },
                    { id: "architecture", label: "Pure Architecture & Shell" },
                    { id: "interior", label: "Turnkey Interior Atelier" },
                  ].map((s) => (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => setScope(s.id as any)}
                      className={`p-3 rounded-lg border text-left text-xs font-semibold transition-all ${
                        scope === s.id
                          ? "bg-sky-500/20 border-sky-400 text-white"
                          : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-800"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Output Display */}
            <div className="lg:col-span-5 bg-slate-950/80 p-8 rounded-xl border border-slate-800 flex flex-col justify-between h-full">
              <div>
                <div className="text-xs text-sky-400 font-mono font-bold uppercase tracking-wider mb-2">
                  Preliminary Turnkey Estimate
                </div>
                <div className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight">
                  ${(estimatedTotal / 1000000).toFixed(2)}M
                  <span className="text-sm font-normal text-slate-400 ml-2">
                    USD
                  </span>
                </div>
                <div className="text-xs text-slate-400 mt-1 font-mono">
                  Approx. ${estimatedTotal.toLocaleString()} total investment
                </div>

                <div className="mt-6 pt-6 border-t border-slate-800 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Projected Timeline:</span>
                    <span className="font-mono font-bold text-white">
                      {estimatedMonths} Months
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">BIM Precision Model:</span>
                    <span className="text-sky-400 font-semibold">Included (5D)</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Site Supervision:</span>
                    <span className="text-white font-semibold">100% Turnkey</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button
                  onClick={onOpenConsultation}
                  className="w-full bg-white text-black font-semibold text-xs sm:text-sm py-3 px-6 rounded-md flex items-center justify-center gap-2 hover:bg-slate-100 transition-transform active:scale-95"
                >
                  <span>Request Feasibility Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
