"use client";

import React from "react";
import Image from "next/image";
import {
  Building2,
  Heart,
  Award,
  Percent,
  Compass,
  ShieldCheck,
  UserCheck,
  Sparkles,
  ArrowRight,
} from "lucide-react";

interface AboutStudioSectionProps {
  onOpenConsultation?: () => void;
}

export default function AboutStudioSection({
  onOpenConsultation,
}: AboutStudioSectionProps) {
  return (
    <section
      id="about-studio"
      className="py-20 sm:py-28 lg:py-32 bg-white text-slate-900 border-b border-slate-100 select-none"
    >
      <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16 sm:space-y-24">
        {/* =========================================================================
            BLOCK 1: ABOUT INTEZAR AHMED (IMAGE ON LEFT, CONTENT ON RIGHT)
            ========================================================================= */}
        <div>
          {/* Section Header with Accent Dot & Line matching screenshot style */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-normal tracking-tight text-slate-900 whitespace-nowrap">
              About Intezar Ahmed
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shrink-0" />
            <div className="h-[1px] bg-slate-200 flex-1 max-w-sm hidden sm:block" />
          </div>

          {/* Main Rounded Canvas */}
          <div className="bg-[#f5f6f8] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* LEFT: Portrait Image of Architect Intezar Ahmed */}
              <div className="lg:col-span-6">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-md border border-slate-200/60 group">
                  <Image
                    src="/intezar/intezar-ahmed.png"
                    alt="Architect Intezar Ahmed - Principal Architect & Founder"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/10" />

                  {/* Bottom Overlay Label */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <span className="inline-block bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 mb-1 uppercase tracking-wider">
                      Founder & Principal Architect
                    </span>
                    <h3 className="text-xl sm:text-2xl font-heading font-medium tracking-tight">
                      Intezar Ahmed
                    </h3>
                    <p className="text-xs text-white/80 font-light mt-0.5">
                      PCATP Registered • 11+ Years Architectural Practice
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT: 4 White Content Cards in 2x2 Grid */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-heading font-medium text-slate-900 tracking-tight">
                        Principal
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-light mt-2 leading-relaxed">
                        Direct design leadership on every commission from concept to key handover.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-4">
                      <UserCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-heading font-medium text-slate-900 tracking-tight">
                        PCATP
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-light mt-2 leading-relaxed">
                        Licensed member with complete municipal authority approval experience.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-4">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-heading font-medium text-slate-900 tracking-tight">
                        B.Arch
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-light mt-2 leading-relaxed">
                        Architectural honors degree with extensive structural engineering mastery.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-4">
                      <Compass className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 4 */}
                  <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[175px] hover:shadow-md transition-shadow">
                    <div>
                      <h4 className="text-2xl sm:text-3xl font-heading font-medium text-slate-900 tracking-tight">
                        100%
                      </h4>
                      <p className="text-xs sm:text-[13px] text-slate-600 font-light mt-2 leading-relaxed">
                        Zero junior delegation. Direct client dialogue and personal site audits.
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-4">
                      <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Personal Philosophy Quote */}
                <div className="mt-5 bg-white rounded-2xl p-5 border border-slate-200/70">
                  <p className="text-xs sm:text-sm text-slate-700 italic font-light leading-relaxed">
                    &ldquo;Architecture is not merely about constructing walls or enclosing square footage. It is about understanding how human beings breathe, feel, and experience light in everyday life.&rdquo;
                  </p>
                  <span className="block mt-2 text-[11px] font-mono text-slate-500 uppercase tracking-wider font-medium">
                    — Intezar Ahmed, Principal Architect
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            BLOCK 2: EXPERIENCE SECTION (CONTENT ON LEFT, IMAGE ON RIGHT)
            ========================================================================= */}
        <div>
          {/* Section Header with Accent Dot & Line matching screenshot 1:1 */}
          <div className="flex items-center gap-4 mb-8 sm:mb-10">
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-heading font-normal tracking-tight text-slate-900 whitespace-nowrap">
              Experience
            </h2>
            <span className="w-2.5 h-2.5 rounded-full bg-[#10b981] shrink-0" />
            <div className="h-[1px] bg-slate-200 flex-1 max-w-sm hidden sm:block" />
          </div>

          {/* Main Rounded Canvas */}
          <div className="bg-[#f5f6f8] rounded-[28px] sm:rounded-[36px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-[0_15px_40px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* LEFT: 4 White Stats Cards in 2x2 Grid matching screenshot 1:1 */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Card 1: 30+ / 100+ Projects Completed */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium text-slate-900 tracking-tight leading-none block">
                        30+
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-snug">
                        Projects Completed
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-6">
                      <Building2 className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 2: 10+ / 11+ Years of Experience */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium text-slate-900 tracking-tight leading-none block">
                        10+
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-snug">
                        Years of Experience
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-6">
                      <Heart className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 3: 7 Awards of Architecture */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium text-slate-900 tracking-tight leading-none block">
                        7
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-snug">
                        Awards of Architecture
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-6">
                      <Award className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Card 4: 99% Satisfaction Level */}
                  <div className="bg-white rounded-2xl p-6 sm:p-7 shadow-sm border border-slate-200/70 flex flex-col justify-between min-h-[160px] sm:min-h-[180px] hover:shadow-md transition-shadow">
                    <div>
                      <span className="text-3xl sm:text-4xl lg:text-[42px] font-heading font-medium text-slate-900 tracking-tight leading-none block">
                        99%
                      </span>
                      <p className="text-xs sm:text-sm text-slate-600 font-light mt-3 leading-snug">
                        Satisfaction Level
                      </p>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-[#10b981]/15 text-[#059669] flex items-center justify-center shrink-0 mt-6">
                      <Percent className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: Architectural Pavilion Image matching screenshot 1:1 */}
              <div className="lg:col-span-6 order-1 lg:order-2">
                <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-900 shadow-md border border-slate-200/60 group">
                  <Image
                    src="/project/project (6).png"
                    alt="Minimalist architectural pavilion overlooking serene water"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                  {/* Subtle Corner Badge */}
                  <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                    <span className="inline-block bg-white/20 backdrop-blur-md text-[10px] sm:text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 uppercase tracking-wider">
                      Atelier Portfolio Landmark
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Consultation CTA */}
        {onOpenConsultation && (
          <div className="pt-4 flex justify-center">
            <button
              onClick={onOpenConsultation}
              className="inline-flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase shadow-lg hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer"
            >
              <span>Schedule Direct Consultation with Intezar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
