"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";

interface WhatWeDoSectionProps {
  onOpenConsultation: () => void;
}

export default function WhatWeDoSection({
  onOpenConsultation,
}: WhatWeDoSectionProps) {
  const [activeHighlight, setActiveHighlight] = useState<string>("We Build");

  return (
    <section className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-18 lg:mb-24">
          <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/80 px-3.5 py-1 rounded-full text-xs font-mono font-medium text-slate-700 mb-6">
            <span className="w-2 h-2 rounded-full bg-slate-900 animate-pulse" />
            <span>What We Do</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-medium text-slate-900 tracking-[-0.025em] leading-[1.2]">
            We help turn your ideas into spaces that
            <br className="hidden sm:inline" />
            are functional, refined, and built to last.
          </h2>
        </div>

        {/* 3-Column Architectural Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center mb-16">
          {/* Left Column: Services 1 & 2 */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
            {/* Service 1 */}
            <div
              onMouseEnter={() => setActiveHighlight("Architectural Design")}
              className="group cursor-pointer p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-slate-50"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                Architectural Design
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 font-light">
                We turn ideas into architectural plans that balance beauty and function, creating thoughtful spaces that reflect your vision.
              </p>
            </div>

            <div className="w-full h-[1px] bg-slate-200" />

            {/* Service 2 */}
            <div
              onMouseEnter={() => setActiveHighlight("Quality Construction")}
              className="group cursor-pointer p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-slate-50"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                Quality Construction
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 font-light">
                We bring designs to life with careful attention and quality workmanship, creating spaces that are strong, refined, and built to last.
              </p>
            </div>
          </div>

          {/* Center Column: Interactive Visual Showcase Card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[460px] sm:h-[520px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.12)] border border-slate-200 group bg-slate-100">
              <Image
                src="/assets/what-we-build.jpg"
                alt="Architect Intezar Atelier Interior & Exterior"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-black/25 group-hover:bg-black/35 transition-colors flex items-center justify-center backdrop-blur-[1px]">
                <div className="bg-white/90 backdrop-blur-md px-6 py-3 rounded-full border border-white shadow-xl">
                  <span className="font-heading font-semibold text-base sm:text-lg text-slate-900 tracking-wide">
                    {activeHighlight}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Services 3 & 4 */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-10">
            {/* Service 3 */}
            <div
              onMouseEnter={() => setActiveHighlight("Modern Renovation")}
              className="group cursor-pointer p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-slate-50"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                Modern Renovation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 font-light">
                We improve existing buildings while honoring their character, creating refreshed spaces that work better for how people live and work.
              </p>
            </div>

            <div className="w-full h-[1px] bg-slate-200" />

            {/* Service 4 */}
            <div
              onMouseEnter={() => setActiveHighlight("Project Consultation")}
              className="group cursor-pointer p-4 -mx-4 rounded-xl transition-all duration-300 hover:bg-slate-50"
            >
              <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900 group-hover:text-sky-600 transition-colors">
                Project Consultation
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mt-3 font-light">
                We help you explore ideas and make informed decisions, providing guidance so your project moves forward with confidence.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Centered Button */}
        <div className="flex justify-center pt-4">
          <button
            onClick={onOpenConsultation}
            className="inline-flex items-center gap-2.5 bg-slate-900 text-white font-medium text-sm py-3.5 px-8 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:bg-black hover:scale-105 active:scale-95 transition-all"
          >
            <span>Start a Project</span>
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
