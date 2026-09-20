"use client";

import React, { useState } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

export default function TransformationSection() {
  const [sliderPos, setSliderPos] = useState(50);
  const [activePhase, setActivePhase] = useState(1);

  const phases = [
    {
      id: 1,
      name: "Phase 01: Concept & Topography",
      desc: "Topographical lidar mapping, solar trajectory calculations, and microclimate orientation modeling.",
      time: "Weeks 1 - 4",
    },
    {
      id: 2,
      name: "Phase 02: 4D BIM & Structural Engineering",
      desc: "Full post-tensioned cantilever finite element analysis, clash-free MEP layouts, and digital twin construction schedule.",
      time: "Weeks 5 - 12",
    },
    {
      id: 3,
      name: "Phase 03: Turnkey Atelier Execution",
      desc: "Raw board-formed concrete casting, acoustic insulated glass installations, and bespoke Italian marble masonry.",
      time: "Weeks 13 - 36",
    },
  ];

  return (
    <section id="timeline" className="py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-700 block mb-2 font-mono">
            (BLUEPRINT TO REALITY)
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight mb-4">
            Interactive transformation
            <br />
            before & after.
          </h2>
          <p className="text-slate-600 text-sm">
            Slide horizontally to see the transformation from architectural
            wireframe schematic to finished luxury estate.
          </p>
        </div>

        {/* Interactive Before/After Split Slider */}
        <div className="relative w-full h-[380px] sm:h-[520px] rounded-xl overflow-hidden border border-slate-200 shadow-xl select-none mb-14">
          {/* AFTER IMAGE (Full width behind) */}
          <div className="absolute inset-0">
            <Image
              src="/assets/after.jpg"
              alt="Completed luxury estate"
              fill
              className="object-cover"
            />
            <div className="absolute top-6 right-6 bg-black/75 backdrop-blur-md px-3.5 py-1.5 rounded text-xs font-semibold text-white tracking-wide uppercase">
              Completed Residence
            </div>
          </div>

          {/* BEFORE IMAGE (Clipped with slider width) */}
          <div
            className="absolute inset-y-0 left-0 overflow-hidden border-r-2 border-white"
            style={{ width: `${sliderPos}%` }}
          >
            <div className="relative w-full h-full min-w-[700px] lg:min-w-[1200px]">
              <Image
                src="/assets/before.jpg"
                alt="Blueprint schematic"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute top-6 left-6 bg-sky-950/85 backdrop-blur-md px-3.5 py-1.5 rounded text-xs font-semibold text-white tracking-wide uppercase">
              Blueprint & Wireframe
            </div>
          </div>

          {/* Draggable Divider Handle */}
          <div
            className="absolute top-0 bottom-0 z-20 flex items-center justify-center -ml-4 cursor-ew-resize pointer-events-none"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="w-8 h-8 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center border-2 border-slate-900">
              <MoveHorizontal className="w-4 h-4" />
            </div>
          </div>

          {/* Range input for easy touch/mouse sliding */}
          <input
            type="range"
            min="0"
            max="100"
            value={sliderPos}
            onChange={(e) => setSliderPos(Number(e.target.value))}
            className="absolute inset-0 opacity-0 cursor-ew-resize z-30 w-full h-full"
            aria-label="Before and after comparison slider"
          />
        </div>

        {/* Timeline Phase Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <button
              key={phase.id}
              onClick={() => setActivePhase(phase.id)}
              className={`text-left p-6 rounded-lg border transition-all ${
                activePhase === phase.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-lg scale-[1.02]"
                  : "bg-slate-50 text-slate-800 border-slate-200 hover:bg-slate-100"
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-mono font-bold ${
                    activePhase === phase.id ? "text-sky-400" : "text-sky-700"
                  }`}
                >
                  {phase.time}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${
                    activePhase === phase.id ? "bg-sky-400" : "bg-slate-300"
                  }`}
                />
              </div>
              <h3 className="font-heading font-semibold text-base mb-2">
                {phase.name}
              </h3>
              <p
                className={`text-xs leading-relaxed ${
                  activePhase === phase.id ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {phase.desc}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
