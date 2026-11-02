"use client";

import React from "react";
import Image from "next/image";
import {
  Award,
  BookOpen,
  CheckCircle2,
  Sparkles,
  MapPin,
  Calendar,
  Layers,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface MeetArchitectSectionProps {
  onOpenConsultation?: () => void;
}

export default function MeetArchitectSection({
  onOpenConsultation,
}: MeetArchitectSectionProps) {
  const credentials = [
    { label: "Credentials", value: "Registered Architect (PCATP)" },
    { label: "Experience", value: "11+ Years in Practice" },
    { label: "Track Record", value: "100+ Delivered Landmarks" },
    { label: "Education", value: "B.Arch with Architectural Honors" },
  ];

  return (
    <section
      id="meet-architect"
      className="py-24 lg:py-32 bg-slate-50 text-slate-900 border-b border-slate-200 select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>08 · PERSONAL CONNECTION</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“Who will I actually be working with?”</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Meet your lead architect:
            <br />
            Architect Intezar Ahmed.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            When you build something meant to stand for generations, knowing the mind and character behind the work is everything.
          </p>
        </div>

        {/* Architect Feature Showcase */}
        <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden p-8 sm:p-10 lg:p-14 mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column: Portrait & Credentials */}
            <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
              <div className="relative w-full aspect-[4/5] max-w-[420px] rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-slate-900 group">
                <Image
                  src="/intezar/intezar-ahmed.png"
                  alt="Architect Intezar Ahmed - Principal Architect & Founder"
                  fill
                  priority
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 mb-1.5 uppercase">
                    Founder & Principal Architect
                  </span>
                  <h3 className="text-2xl font-heading font-semibold tracking-tight">
                    Intezar Ahmed
                  </h3>
                  <p className="text-xs text-white/80 font-light mt-0.5">
                    Member PCATP • 11 Years Leading Architectural Practice
                  </p>
                </div>
              </div>

              {/* 4 Credentials Badges */}
              <div className="w-full max-w-[420px] grid grid-cols-2 gap-3 mt-6">
                {credentials.map((cred, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 p-3.5 rounded-xl border border-slate-200/80 text-left"
                  >
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-400">
                      {cred.label}
                    </span>
                    <span className="block text-xs font-semibold text-slate-900 mt-0.5">
                      {cred.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Philosophy, Letter from the Architect & Direct Commitment */}
            <div className="lg:col-span-7 space-y-8">
              {/* Philosophy Quote */}
              <div className="border-l-2 border-slate-900 pl-6 space-y-2">
                <span className="text-[11px] font-mono uppercase tracking-widest text-sky-700 font-semibold block">
                  Design Philosophy
                </span>
                <blockquote className="text-xl sm:text-2xl font-heading font-medium text-slate-900 leading-snug tracking-tight">
                  &ldquo;Architecture is not merely about constructing walls or enclosing square footage. It is about understanding how human beings breathe, feel, and experience light in everyday life.&rdquo;
                </blockquote>
              </div>

              {/* Personal Letter from the Architect */}
              <div className="space-y-4 text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                <h4 className="font-heading font-semibold text-base text-slate-900">
                  A Personal Letter to Prospective Homeowners & Developers
                </h4>
                <p>
                  When you commission a custom villa or landmark commercial headquarters, you are investing more than financial capital—you are entrusting your lifestyle and family memories to an architect.
                </p>
                <p>
                  At our atelier, we intentionally limit the number of active commissions we accept each year. Why? Because I refuse to delegate your project to junior interns or treat your dream like an assembly-line product.
                </p>
                <p>
                  From the first hand-drawn conceptual trace sketch to 5D BIM clash detection, and from raw structural concrete casting to the final Italian marble hand-polish, I am personally engaged on your site ensuring our shared vision is built to perfection.
                </p>
              </div>

              {/* Atelier Principles Checklist */}
              <div className="space-y-2.5 pt-4 border-t border-slate-100">
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Direct phone, WhatsApp, and in-person access to the Principal Architect</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Honest material expression: real stone, timber, natural light, zero synthetic veneers</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Contractual itemized pricing and guaranteed handover timeline</span>
                </div>
              </div>

              {/* Consultation Call to Action */}
              {onOpenConsultation && (
                <div className="pt-4">
                  <button
                    onClick={onOpenConsultation}
                    className="inline-flex items-center gap-3 bg-slate-900 hover:bg-black text-white px-7 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow-md hover:shadow-xl cursor-pointer"
                  >
                    <span>Schedule Initial Conversation with Intezar</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Studio Atelier Craftsmen & Team Banner */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <Layers className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <span className="block text-sm font-heading font-semibold text-slate-900">
                Master Stone & Wood Artisans
              </span>
              <span className="block text-xs text-slate-500 font-light">
                Generational stone masons and joiners
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <span className="block text-sm font-heading font-semibold text-slate-900">
                Licensed Structural Engineers
              </span>
              <span className="block text-xs text-slate-500 font-light">
                Post-tensioned cantilever specialists
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-slate-700" />
            </div>
            <div>
              <span className="block text-sm font-heading font-semibold text-slate-900">
                5D BIM Digital Modelers
              </span>
              <span className="block text-xs text-slate-500 font-light">
                Millimeter-exact clash detection
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

