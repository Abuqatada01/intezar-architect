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
  Clock,
  Leaf,
  Layers,
  Ruler,
  Maximize2,
  X,
  Droplets,
  Cpu,
  Mail,
  MapPin,
  MessageCircle,
  FileText,
  Check,
  Lightbulb,
  Building,
  Target,
  Sparkle,
} from "lucide-react";

export default function AboutPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#43729b] selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/about"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* =========================================================================
          HERO BANNER: INTEZAR AHMED ARCHITECTS
          "Beyond Spaces. Creating Landmarks."
          ========================================================================= */}
      <section className="relative py-20 sm:py-28 lg:py-36 bg-[#f8f9fb] border-b border-slate-200/80 overflow-hidden">
        {/* Subtle architectural grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

        <div className="relative max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl space-y-6">
            {/* Practice Identity Tag */}
            <div className="inline-flex items-center gap-2.5 bg-white border border-slate-300/80 px-4 py-1.5 rounded-full text-xs font-mono font-medium text-slate-800 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#43729b] animate-pulse" />
              <span className="tracking-widest uppercase font-semibold">INTEZAR AHMED ARCHITECTS</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">PCATP REGISTERED</span>
            </div>

            {/* Main Headline & Discipline Subtitle */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-[66px] font-heading font-bold text-slate-950 tracking-[-0.03em] leading-[1.06]">
                Architecture | Planning | Interior Design
              </h1>
              <p className="text-xl sm:text-2xl lg:text-3xl font-heading font-medium text-[#43729b] italic tracking-tight">
                Beyond Spaces. Creating Landmarks.
              </p>
            </div>

            <p className="text-base sm:text-lg lg:text-xl text-slate-600 font-light leading-relaxed max-w-3xl pt-2">
              Intezar Ahmed Architects is an architectural design practice focused on creating thoughtful, distinctive and enduring built environments. Over 20+ years of comprehensive practice, including 13 formative years working directly alongside world-renowned master architect Hafeez Contractor (Padma Bhushan).
            </p>

            {/* Quick Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setIsConsultOpen(true)}
                className="inline-flex items-center gap-2.5 bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold px-7 py-4 rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95 cursor-pointer"
              >
                <span>Book Atelier Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="#services"
                className="inline-flex items-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl shadow-xs transition-all"
              >
                <span>Explore Disciplines</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          01. ABOUT THE PRACTICE & PRINCIPAL ARCHITECT LEADERSHIP
          ========================================================================= */}
      <section id="practice" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
            <span>01</span>
            <span className="w-8 h-[1px] bg-[#43729b]" />
            <span>ABOUT THE PRACTICE</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left: Architect Portrait & Credentials */}
            <div className="lg:col-span-5 sticky top-28 self-start space-y-6">
              <div className="relative aspect-[4/5] rounded-[28px] sm:rounded-[36px] overflow-hidden bg-slate-900 shadow-2xl border border-slate-200 group">
                <Image
                  src="/intezar/intezar-ahmed.png"
                  alt="Architect Intezar Ahmed — Principal Architect"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top group-hover:scale-102 transition-transform duration-700"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 text-white z-10">
                  <span className="inline-block bg-white/20 backdrop-blur-md text-[11px] font-mono px-3 py-1 rounded-full border border-white/25 mb-1.5 uppercase tracking-wider">
                    Founder & Principal Architect
                  </span>
                  <h2 className="text-2xl font-heading font-bold tracking-tight">
                    Ar. Intezar Ahmed
                  </h2>
                  <p className="text-xs text-white/80 font-mono mt-1">
                    PCATP Registered • 20+ Years Practice (13 Yrs with Ar. Hafeez Contractor)
                  </p>
                </div>
              </div>

              {/* Quick Credentials Badge Box */}
              <div className="p-5 rounded-2xl bg-[#f8f9fb] border border-slate-200/90 space-y-3 text-xs font-mono text-slate-700">
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#43729b] shrink-0" />
                  <span>Licensed PCATP Member (Pakistan Council of Architects)</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Compass className="w-4 h-4 text-[#43729b] shrink-0" />
                  <span>13 Years with World-Renowned Ar. Hafeez Contractor</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-4 h-4 text-[#43729b] shrink-0" />
                  <span>20+ Years Residential, Planning & Interior Mastery</span>
                </div>
              </div>
            </div>

            {/* Right: Detailed Practice Profile & Narrative */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-heading font-semibold text-slate-950 tracking-tight leading-snug mb-6">
                  Creating thoughtful, distinctive and enduring built environments.
                </h2>
                <div className="space-y-5 text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  <p>
                    <strong>Intezar Ahmed Architects</strong> is an architectural design practice focused on creating thoughtful, distinctive and enduring built environments.
                  </p>
                  <p>
                    Our approach combines architectural creativity, functional planning, contextual sensitivity and attention to detail to develop spaces that respond to the aspirations and lifestyles of our clients.
                  </p>
                  <p>
                    We believe architecture is more than the creation of buildings. It is about shaping experiences, enhancing everyday living and establishing a meaningful relationship between people, spaces and their surroundings.
                  </p>
                </div>
              </div>

              {/* Mentorship & Pedigree Feature Card: 13 Years with Hafeez Contractor */}
              <div className="relative rounded-[28px] overflow-hidden bg-slate-950 text-white border border-slate-200/80 shadow-xl p-6 sm:p-8 flex flex-col md:flex-row items-center gap-6 sm:gap-8 group">
                <div className="relative w-full md:w-56 aspect-[3/4] rounded-2xl overflow-hidden shrink-0 bg-slate-900 border border-white/10 shadow-lg cursor-pointer" onClick={() => setIsLightboxOpen(true)}>
                  <Image
                    src="/intezar/intezar-with-hafeez.png"
                    alt="Architect Intezar Ahmed with Padma Bhushan Ar. Hafeez Contractor"
                    fill
                    sizes="(max-width: 768px) 100vw, 240px"
                    className="object-cover object-[50%_15%] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-2.5 right-2.5 bg-black/60 backdrop-blur-md p-1.5 rounded-full text-white/80">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>
                <div className="space-y-3 flex-1">
                  <div className="inline-flex items-center gap-2 bg-[#43729b]/25 text-[#5485b0] text-[11px] font-mono px-3 py-1 rounded-full border border-[#43729b]/40">
                    <span>✦ 13 YEARS DIRECT COLLABORATION</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-white tracking-tight">
                    Associated with World-Renowned Ar. Hafeez Contractor
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
                    Over thirteen formative years working directly on monumental, complex developments with Padma Bhushan Ar. Hafeez Contractor, South Asia’s most iconic master architect. This background instilled an uncompromising standard of institutional structural rigor, civic scale, and precision planning now focused on private luxury estates.
                  </p>
                </div>
              </div>

              {/* Practice Milestones */}
              <div className="p-8 sm:p-10 rounded-[28px] bg-[#f8f9fb] border border-slate-200/90">
                <h3 className="text-lg font-heading font-semibold text-slate-950 mb-6">
                  Atelier Practice Metrics
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 block">
                      20<span className="text-[#43729b]">+</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-1 block">
                      Years Total Practice
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 block">
                      13 <span className="text-[#43729b] text-xl font-normal">Yrs</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-1 block">
                      With Ar. Hafeez Contractor
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 block">
                      35<span className="text-[#43729b]">+</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-1 block">
                      Bespoke Villas Delivered
                    </span>
                  </div>
                  <div>
                    <span className="text-3xl sm:text-4xl font-heading font-bold text-slate-950 block">
                      99<span className="text-[#43729b]">%</span>
                    </span>
                    <span className="text-xs text-slate-500 font-mono mt-1 block">
                      Client Satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          02. OUR DESIGN PHILOSOPHY
          "Architecture with Purpose. Design with Identity."
          ========================================================================= */}
      <section id="philosophy" className="py-20 sm:py-28 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
            <span>02</span>
            <span className="w-8 h-[1px] bg-[#43729b]" />
            <span>OUR DESIGN PHILOSOPHY</span>
          </div>

          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1] mb-4">
              Architecture with Purpose.
              <br />
              <span className="text-[#43729b]">Design with Identity.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Every project begins with understanding the client&apos;s vision, the site and its context. Our philosophy is guided by seven core principles:
            </p>
          </div>

          {/* 7 Guiding Principles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {[
              {
                num: "01",
                title: "Context-Sensitive Architecture",
                desc: "Structures that harmonize organically with the local topography, climate, sun orientation, and regional architectural fabric.",
              },
              {
                num: "02",
                title: "Intelligent Space Planning",
                desc: "Fluid, column-free living layouts engineered for seamless everyday flow, natural acoustic zoning, and long-term flexibility.",
              },
              {
                num: "03",
                title: "Timeless Aesthetics",
                desc: "We reject fleeting superficial decoration in favor of clean lines, proportion, monumental daylight, and architectural permanence.",
              },
              {
                num: "04",
                title: "Functional & Efficient Layouts",
                desc: "Zero wasted circulation, optimized servant-master programmatic separation, and spaces tuned to the exact rituals of the home.",
              },
              {
                num: "05",
                title: "Material & Detailing Excellence",
                desc: "Rigorous curation of honest materials — honed stone, architectural concrete, bespoke millwork, and flush shadow gaps.",
              },
              {
                num: "06",
                title: "Climate-Responsive Design",
                desc: "Deep cantilevered overhangs, passive cross-ventilation courtyards, and thermal mass strategies to minimize artificial energy dependency.",
              },
              {
                num: "07",
                title: "Personalised Lifestyle Spaces",
                desc: "Bespoke sanctuaries customized to individual living patterns, entertaining traditions, and privacy requirements.",
              },
              {
                num: "★",
                title: "Direct Principal Mastery",
                desc: "Personal oversight on every structural beam, material invoice, and municipal blueprint from start to handover.",
                highlight: true,
              },
            ].map((item) => (
              <div
                key={item.num}
                className={`p-6 sm:p-7 rounded-2xl border transition-all duration-200 flex flex-col justify-between ${
                  item.highlight
                    ? "bg-slate-950 text-white border-slate-900 shadow-md"
                    : "bg-white text-slate-900 border-slate-200/90 hover:border-slate-300 hover:shadow-sm"
                }`}
              >
                <div>
                  <span className={`text-xs font-mono font-semibold block mb-3 ${item.highlight ? "text-[#5485b0]" : "text-[#43729b]"}`}>
                    {item.num}
                  </span>
                  <h3 className="text-base sm:text-lg font-heading font-semibold tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className={`text-xs sm:text-[13px] font-light leading-relaxed ${item.highlight ? "text-slate-300" : "text-slate-600"}`}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. OUR SERVICES
          Architectural Consultancy | Interior Architecture | Planning & Design | Project Design Support
          ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
            <span>03</span>
            <span className="w-8 h-[1px] bg-[#43729b]" />
            <span>OUR SERVICES</span>
          </div>

          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1] mb-4">
              Comprehensive Architectural Disciplines
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              We provide end-to-end design, planning, and execution-stage support structured around four core pillars:
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Pillar 1: Architectural Consultancy */}
            <div className="bg-[#f8f9fb] rounded-3xl p-8 sm:p-10 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  Architectural Consultancy
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Comprehensive architectural leadership from initial schematic visions through structural approval drawings.
                </p>
                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
                  {[
                    "Architectural concept development",
                    "Site planning and master planning",
                    "Residential and commercial architecture",
                    "Building planning and detailed drawings",
                    "Façade design and development",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 2: Interior Architecture */}
            <div className="bg-[#f8f9fb] rounded-3xl p-8 sm:p-10 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  Interior Architecture
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Creating domestic sanctuaries with tactile materiality, customized joinery, and tailored lighting environments.
                </p>
                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
                  {[
                    "Residential interior design",
                    "Space planning and furniture layouts",
                    "Material and finish selection",
                    "Lighting design coordination",
                    "Custom interior detailing",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 3: Planning and Design */}
            <div className="bg-[#f8f9fb] rounded-3xl p-8 sm:p-10 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  Planning and Design
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Strategic site feasibility, environmental analysis, and maximum programmatic plot optimization.
                </p>
                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
                  {[
                    "Feasibility and development studies",
                    "Site analysis",
                    "Building area optimisation",
                    "Landscape design coordination",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Pillar 4: Project Design Support */}
            <div className="bg-[#f8f9fb] rounded-3xl p-8 sm:p-10 border border-slate-200/90 flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-slate-950 text-white flex items-center justify-center mb-6">
                  <Ruler className="w-6 h-6" />
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  Project Design Support
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed mb-6">
                  Rigorous execution coordination, contractor guidance, and technical blueprint fidelity.
                </p>
                <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
                  {[
                    "Design development",
                    "Technical documentation",
                    "Consultant coordination",
                    "Design intent and execution-stage coordination, as agreed in the appointment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          04 & 05. LUXURY & ULTRA-LUXURY RESIDENTIAL ARCHITECTURE
          "Exceptional Homes. Individually Designed."
          ========================================================================= */}
      <section id="residential" className="py-20 sm:py-28 lg:py-32 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
          {/* Top: 04. Luxury Residential Architecture */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
              <span>04</span>
              <span className="w-8 h-[1px] bg-[#43729b]" />
              <span>LUXURY RESIDENTIAL ARCHITECTURE</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              <div className="lg:col-span-6 space-y-5">
                <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-heading font-bold text-slate-950 tracking-tight leading-tight">
                  Residences that balance elegance, functionality and comfort.
                </h2>
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  We develop private residences that balance understated elegance with effortless livability. Every residence is an enduring response to the specific ritual of daily living.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {[
                    "Distinctive architectural character",
                    "Spacious and efficient planning",
                    "Thoughtful natural lighting",
                    "Premium material selection",
                    "Seamless indoor-outdoor relationships",
                    "Refined interior spaces",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-xs sm:text-[13px] font-medium text-slate-800 bg-white p-3 rounded-xl border border-slate-200/80">
                      <Sparkle className="w-3.5 h-3.5 text-[#43729b] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-6 relative aspect-[16/10] rounded-3xl overflow-hidden shadow-xl border border-slate-200">
                <Image
                  src="/project/project (1).png"
                  alt="Luxury Residential Villa Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Bottom: 05. Ultra-Luxury Residences */}
          <div className="pt-12 border-t border-slate-200">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
              <span>05</span>
              <span className="w-8 h-[1px] bg-[#43729b]" />
              <span>ULTRA-LUXURY RESIDENCES</span>
            </div>

            <div className="max-w-3xl mb-10">
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1] mb-4">
                Exceptional Homes.
                <br />
                <span className="text-[#43729b]">Individually Designed.</span>
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                Our ultra-luxury residential design offering is centred on personalised architecture and exclusive living experiences. Every element is considered in relation to the site, architecture, lifestyle and project requirements.
              </p>
            </div>

            {/* 10 Potential Ultra-Luxury Design Elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5">
              {[
                { title: "Bespoke Façades", desc: "Cantilevered stone & glass expressions" },
                { title: "Double-Height Lobbies", desc: "Monumental arrival experiences" },
                { title: "Landscaped Courtyards", desc: "Private interior light wells" },
                { title: "Infinity Pools", desc: "Reflecting architectural waters" },
                { title: "Luxury Master Suites", desc: "Dual dressing & spa retreats" },
                { title: "Wellness & Fitness", desc: "Private home gym & thermal zones" },
                { title: "Home Theatres", desc: "Acoustically calibrated screening" },
                { title: "Smart-Home Systems", desc: "Automated climate, blinds & lights" },
                { title: "Personalised Interiors", desc: "Custom millwork & bookmatched marble" },
                { title: "Sustainable Tech", desc: "Solar integration & thermal barriers" },
              ].map((item, idx) => (
                <div key={item.title} className="bg-white p-5 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-slate-300 transition-all flex flex-col justify-between">
                  <span className="text-[11px] font-mono text-[#43729b] font-semibold mb-2">
                    0{idx + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-heading font-semibold text-slate-950 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-light leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          06. OUR DESIGN PROCESS (01 - 06 SEQUENCE)
          ========================================================================= */}
      <section id="process" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
            <span>06</span>
            <span className="w-8 h-[1px] bg-[#43729b]" />
            <span>OUR DESIGN PROCESS</span>
          </div>

          <div className="max-w-3xl mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1] mb-4">
              Disciplined Architectural Delivery
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              A structured six-stage methodology ensuring clarity, risk reduction, and faithful realization of the design intent:
            </p>
          </div>

          {/* 6 Step Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                name: "Understanding",
                desc: "Understanding the client's aspirations, requirements, lifestyle and project objectives.",
              },
              {
                step: "02",
                name: "Site Analysis",
                desc: "Studying site conditions, orientation, climate, access and applicable development regulations.",
              },
              {
                step: "03",
                name: "Concept Development",
                desc: "Developing the architectural concept, spatial organisation and design direction.",
              },
              {
                step: "04",
                name: "Design Development",
                desc: "Refining plans, elevations, sections, materials and architectural details.",
              },
              {
                step: "05",
                name: "Technical Documentation",
                desc: "Preparing coordinated architectural drawings and relevant technical documentation.",
              },
              {
                step: "06",
                name: "Project Coordination",
                desc: "Coordinating with consultants and providing agreed design-stage support during project implementation.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-[#f8f9fb] p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-950 text-white font-mono text-sm font-semibold flex items-center justify-center mb-5">
                    {item.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-heading font-semibold text-slate-950 mb-2">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          07. SUSTAINABLE AND SMART ARCHITECTURE
          ========================================================================= */}
      <section id="sustainability" className="py-20 sm:py-28 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-700 uppercase tracking-widest mb-3">
            <span>07</span>
            <span className="w-8 h-[1px] bg-emerald-700" />
            <span>SUSTAINABLE AND SMART ARCHITECTURE</span>
          </div>

          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.1] mb-4">
              Intelligent buildings that respond to their environment.
            </h2>
            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              We recognise the importance of designing buildings that respond intelligently to their environment, minimizing life-cycle operational costs and conserving precious natural resources.
            </p>
          </div>

          {/* 7 Sustainable Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {[
              { title: "Climate-Responsive Planning", desc: "Orientation tailored to solar paths and prevailing wind currents.", icon: Compass },
              { title: "Natural Ventilation & Daylight", desc: "Courtyards and strategic fenestration maximizing daylighting.", icon: Sparkles },
              { title: "Energy-Efficient Systems", desc: "High-performance insulation, double glazing & heat deflection.", icon: Cpu },
              { title: "Rainwater Harvesting", desc: "Sub-surface filtration and greywater reuse for gardens.", icon: Droplets },
              { title: "Water-Efficient Fixtures", desc: "Precision sensor fixtures and water conservation circuits.", icon: CheckCircle2 },
              { title: "Appropriate Material Selection", desc: "Locally sourced stone and low-embodied-carbon masonry.", icon: Layers },
              { title: "Smart-Home Integration", desc: "Automated environmental controls and load shedding management.", icon: Lightbulb },
              { title: "5D BIM Life-Cycle Audits", desc: "Digital verification of thermal and mechanical efficiency.", icon: Building },
            ].map((item) => {
              const IconComp = item.icon;
              return (
                <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 border border-emerald-200/60">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm sm:text-base font-heading font-semibold text-slate-950 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. OUR COMMITMENT & 09. SELECTED PROJECTS
          ========================================================================= */}
      <section id="commitment-projects" className="py-20 sm:py-28 lg:py-32 bg-white border-b border-slate-100">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
          {/* 08. Our Commitment */}
          <div className="p-8 sm:p-12 rounded-3xl bg-slate-950 text-white relative overflow-hidden">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#5485b0] uppercase tracking-widest mb-4">
              <span>08</span>
              <span className="w-8 h-[1px] bg-[#5485b0]" />
              <span>OUR COMMITMENT</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <h2 className="text-2xl sm:text-4xl font-heading font-semibold tracking-tight text-white leading-snug">
                “We approach every assignment with professional responsibility, design sensitivity and a commitment to understanding the client&apos;s expectations.”
              </h2>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Our objective is to create architecture that is relevant to its context, meaningful to its users and enduring in its character.
              </p>
            </div>
          </div>

          {/* 09. Selected Projects Preview */}
          <div>
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
              <span>09</span>
              <span className="w-8 h-[1px] bg-[#43729b]" />
              <span>SELECTED PROJECTS</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
              <div>
                <h2 className="text-2xl sm:text-4xl font-heading font-bold text-slate-950 tracking-tight">
                  Landmarks of Enduring Permanence
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 font-light mt-1">
                  Each presentation includes site location, plot area, architectural concept, and fully executed drawings.
                </p>
              </div>

              <Link
                href="/#featured-projects"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-950 hover:text-[#43729b] transition-colors"
              >
                <span>View Complete Portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "The Cantilever Estate",
                  loc: "DHA Phase 6, Islamabad",
                  type: "Ultra-Luxury Private Villa",
                  area: "1 Kanal (4,500 sq ft)",
                  img: "/project/project (1).png",
                },
                {
                  name: "Travertine Courtyard Residence",
                  loc: "Sector F-7/2, Islamabad",
                  type: "Passive Solar Compound",
                  area: "2 Kanals (9,200 sq ft)",
                  img: "/assets/renovation-2.jpg",
                },
                {
                  name: "Modern Brutalist Sanctuary",
                  loc: "Bahria Golf City, Rawalpindi",
                  type: "Hillside Post-Tensioned Villa",
                  area: "2 Kanals (8,700 sq ft)",
                  img: "/assets/after.jpg",
                },
              ].map((proj) => (
                <div key={proj.name} className="group rounded-3xl overflow-hidden border border-slate-200/90 bg-[#f8f9fb] shadow-2xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between">
                  <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                    <Image
                      src={proj.img}
                      alt={proj.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 right-3 bg-slate-950/70 backdrop-blur-md text-white text-[10px] font-mono px-3 py-1 rounded-full border border-white/20">
                      {proj.type}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-base sm:text-lg font-heading font-semibold text-slate-950 mb-1">
                      {proj.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mb-2">
                      {proj.loc}
                    </p>
                    <div className="text-[11px] font-mono text-[#43729b] font-medium">
                      Plot Area: {proj.area}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          10. CONTACT & ATELIER DESK
          INTEZAR AHMED ARCHITECTS
          ========================================================================= */}
      <section id="contact-desk" className="py-20 sm:py-28 bg-[#f8f9fb]">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          {/* Section Numbering Tag */}
          <div className="flex items-center gap-2 text-xs font-mono font-semibold text-[#43729b] uppercase tracking-widest mb-3">
            <span>10</span>
            <span className="w-8 h-[1px] bg-[#43729b]" />
            <span>CONTACT & ENGAGEMENT</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block mb-2">
                  DIRECT CONSULTATION DESK
                </span>
                <h2 className="text-3xl sm:text-5xl font-heading font-bold text-slate-950 tracking-tight leading-[1.08]">
                  INTEZAR AHMED ARCHITECTS
                </h2>
                <p className="text-base font-mono text-[#43729b] font-medium mt-1">
                  Architecture | Planning | Interior Design
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed max-w-xl">
                Ready to discuss your architectural vision? Connect directly with Architect Intezar Ahmed for a preliminary plot review, zoning assessment, and feasibility discussion.
              </p>

              <div className="space-y-3 pt-2 text-xs sm:text-sm font-mono text-slate-700">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-slate-900 shrink-0" />
                  <span>Executive Studio: Blue Area / Sector F-7, Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <a href="https://wa.me/32493751798" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    WhatsApp Atelier: +32 493 75 17 98
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-slate-900 shrink-0" />
                  <a href="mailto:atelier@intezarahmed.com" className="hover:underline">
                    atelier@intezarahmed.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-4 h-4 text-slate-900 shrink-0" />
                  <span>PCATP Licensed Practice • Council of Architects Registration</span>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setIsConsultOpen(true)}
                  className="bg-slate-950 hover:bg-black text-white text-xs sm:text-sm font-semibold px-8 py-4 rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  Book Private Consultation
                </button>
                <Link
                  href="/contact"
                  className="bg-white hover:bg-slate-100 text-slate-900 border border-slate-300 text-xs sm:text-sm font-semibold px-6 py-4 rounded-xl shadow-xs transition-all"
                >
                  Submit Project Brief
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-md">
              <h3 className="text-xl font-heading font-semibold text-slate-950 mb-4">
                Consultation Protocol
              </h3>
              <p className="text-xs text-slate-600 font-light leading-relaxed mb-6">
                To maintain the highest caliber of execution, Intezar Ahmed Architects accepts a restricted number of commissions concurrently.
              </p>
              <div className="space-y-4 text-xs font-mono text-slate-700">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-semibold text-slate-900 block mb-1">01. Confidentiality Guaranteed</span>
                  <span>Non-disclosure protection for all client site blueprints and investment details.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-semibold text-slate-900 block mb-1">02. Direct Principal Meeting</span>
                  <span>Initial architectural review is conducted directly with Architect Intezar Ahmed.</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                  <span className="font-semibold text-slate-900 block mb-1">03. Plot & Feasibility Audit</span>
                  <span>Site analysis, solar path mapping, and municipal setback clearance assessment.</span>
                </div>
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

      {/* High-Resolution Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setIsLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              aria-label="Close modal"
              className="absolute -top-12 right-0 sm:right-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>

            {/* High-Resolution Uncropped Image */}
            <div className="relative w-full aspect-[3/4] max-h-[80vh] rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-slate-950">
              <Image
                src="/intezar/intezar-with-hafeez.png"
                alt="Architect Intezar Ahmed with Padma Bhushan Ar. Hafeez Contractor"
                fill
                sizes="(max-width: 1024px) 100vw, 85vw"
                className="object-contain"
                priority
              />
            </div>

            {/* Lightbox Caption */}
            <div className="mt-4 text-center text-white space-y-1">
              <h3 className="text-base sm:text-lg font-heading font-semibold tracking-tight">
                Architect Intezar Ahmed with Padma Bhushan Ar. Hafeez Contractor
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 font-mono">
                13 Years of Collaboration • Institutional Discipline & Master Residential Design
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
