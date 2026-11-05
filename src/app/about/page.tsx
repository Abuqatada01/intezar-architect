"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerNavbar from "@/components/InnerNavbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Sparkles,
  ShieldCheck,
  Compass,
  Building2,
  Award,
  ArrowRight,
  CheckCircle2,
  UserCheck,
} from "lucide-react";

export default function AboutPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/about"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Hero Section */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>THE ATELIER • ESTABLISHED 2013</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[64px] font-heading font-semibold text-slate-950 tracking-tight leading-[1.08] mb-6">
              Architecture rooted in structural honesty, light, and human scale.
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-3xl">
              Led by Architect Intezar Ahmed, our practice operates on a rare standard: every line drawn, every cantilever engineered, and every on-site stone joint is personally directed by the principal architect.
            </p>
          </div>
        </div>
      </section>

      {/* Main Biography & Atelier Profile */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Architect Portrait Card */}
            <div className="lg:col-span-5 sticky top-28 self-start">
              <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200">
                <Image
                  src="/intezar/intezar-ahmed.png"
                  alt="Architect Intezar Ahmed"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 mb-1.5 uppercase tracking-wider">
                    Founder & Principal Architect
                  </span>
                  <h2 className="text-2xl font-heading font-bold tracking-tight">
                    Intezar Ahmed
                  </h2>
                  <p className="text-xs text-white/80 font-mono mt-1">
                    PCATP Registered • 11+ Years Architectural Practice
                  </p>
                </div>
              </div>

              {/* Quick Credentials Badge Box */}
              <div className="mt-6 p-5 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Licensed PCATP Member (Pakistan Council of Architects)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-sky-600 shrink-0" />
                  <span>5D BIM Digital Pre-Coordination Certified</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Bespoke Residential & Commercial Distinctions</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Biography & Philosophy */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-3">
                  PRACTICE PHILOSOPHY
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold text-slate-950 tracking-tight leading-snug mb-6">
                  “We reject the trend of superficial decoration that wears out in five years. We craft enduring landmarks.”
                </h3>
                <div className="space-y-5 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  <p>
                    Over eleven years of continuous practice across Islamabad, Lahore, and international commissions, Architect Intezar Ahmed has developed a reputation for rigorous spatial purity. While many design firms delegate client projects to junior drafting pools, Intezar maintains strict direct authorship on every project.
                  </p>
                  <p>
                    Every residential villa is tailored specifically to its plot topography, solar path, wind direction, and the living rituals of the family. From 40-foot post-tensioned column-free spans to acoustically insulated travertine hearths, our work balances structural audacity with peaceful domestic warmth.
                  </p>
                </div>
              </div>

              {/* 4 Pillars of Excellence */}
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-6">
                  CORE PRINCIPLES OF THE ATELIER
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                      <UserCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                      Zero Junior Delegation
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      You meet directly with Intezar Ahmed from the initial sketch to on-site quality control and final handover.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                      <Compass className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                      5D BIM Clash Prevention
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Every structural pipe, beam, and duct is digitally modeled in 3D prior to pouring concrete, eliminating on-site rework.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                      Locked & Itemized BOQ
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      No vague estimates. You receive a millimeter-precise Bill of Quantities with locked material pricing before ground is broken.
                    </p>
                  </div>

                  <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80">
                    <div className="w-10 h-10 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h4 className="text-base font-heading font-semibold text-slate-900 mb-2">
                      Municipal Authority Mastery
                    </h4>
                    <p className="text-xs text-slate-600 font-light leading-relaxed">
                      Complete approval sets compliant with CDA, RDA, DHA, and municipal building bye-laws with guaranteed clearances.
                    </p>
                  </div>
                </div>
              </div>

              {/* Atelier Statistics Showcase */}
              <div className="p-8 sm:p-10 rounded-[28px] bg-slate-900 text-white">
                <h4 className="text-xl font-heading font-semibold mb-6">
                  Practice Numbers & Milestones
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-amber-400 block">
                      35+
                    </span>
                    <span className="text-xs text-slate-300 font-light mt-1 block">
                      Bespoke Villas Delivered
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-amber-400 block">
                      11+
                    </span>
                    <span className="text-xs text-slate-300 font-light mt-1 block">
                      Years Continuous Practice
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-amber-400 block">
                      100%
                    </span>
                    <span className="text-xs text-slate-300 font-light mt-1 block">
                      Direct Principal Audits
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-amber-400 block">
                      99%
                    </span>
                    <span className="text-xs text-slate-300 font-light mt-1 block">
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>

              {/* Consultation CTA Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-slate-900 hover:bg-black text-white px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase shadow-xl transition-all"
                >
                  <span>Book Consultation With Intezar</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <Link
                  href="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-slate-300 text-slate-700 hover:text-slate-950 px-8 py-4 rounded-full text-xs font-semibold tracking-wider uppercase transition-all"
                >
                  <span>Explore Disciplines</span>
                </Link>
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

