"use client";

import React, { useState } from "react";
import Link from "next/link";
import InnerNavbar from "@/components/InnerNavbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import { Shield, Lock, FileText, CheckCircle2, ArrowRight } from "lucide-react";

export default function PrivacyPolicyPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-[#43729b] selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/privacy-policy"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Hero Header */}
      <section className="py-20 sm:py-28 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-6">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>LEGAL COMPLIANCE & CLIENT DISCRETION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-heading font-semibold text-slate-950 tracking-tight leading-[1.1] mb-6">
              Privacy Policy & Client Discretion Standards
            </h1>

            <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
              Last updated: November 2026. This policy outlines how Architect Intezar Ahmed Atelier collects, safeguards, and respects the private data, plot specifications, and architectural blueprints of our clients.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Policy Content Body */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Table of Contents */}
            <div className="lg:col-span-4 sticky top-28 hidden lg:block bg-slate-50 p-6 rounded-2xl border border-slate-200">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-4">
                POLICY SECTIONS
              </span>
              <ul className="space-y-2.5 text-xs font-mono text-slate-700">
                <li>
                  <a href="#client-confidentiality" className="hover:text-slate-950 transition-colors">
                    01 · Client Confidentiality
                  </a>
                </li>
                <li>
                  <a href="#information-collected" className="hover:text-slate-950 transition-colors">
                    02 · Information Collected
                  </a>
                </li>
                <li>
                  <a href="#use-of-data" className="hover:text-slate-950 transition-colors">
                    03 · Architectural Data Usage
                  </a>
                </li>
                <li>
                  <a href="#plot-security" className="hover:text-slate-950 transition-colors">
                    04 · Plot & Blueprint Security
                  </a>
                </li>
                <li>
                  <a href="#third-parties" className="hover:text-slate-950 transition-colors">
                    05 · Municipal Authorities & Engineers
                  </a>
                </li>
                <li>
                  <a href="#cookies-analytics" className="hover:text-slate-950 transition-colors">
                    06 · Digital Cookies & Tracking
                  </a>
                </li>
                <li>
                  <a href="#client-rights" className="hover:text-slate-950 transition-colors">
                    07 · Your Rights & Data Deletion
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Legal Text Content */}
            <div className="lg:col-span-8 space-y-12 text-slate-700 text-sm sm:text-[15px] font-light leading-relaxed">
              {/* Section 1 */}
              <div id="client-confidentiality" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  01. Commitment to High-Net-Worth Client Confidentiality
                </h2>
                <p>
                  Architect Intezar Ahmed Atelier designs bespoke private residences, executive estates, and sensitive corporate headquarters. We recognize that our clients value total discretion regarding plot locations, interior floorplans, security vault rooms, and overall financial investments. We operate under strict internal non-disclosure protocols. No finished residence or floorplan is published on our portfolio without explicit written consent from the homeowner.
                </p>
              </div>

              {/* Section 2 */}
              <div id="information-collected" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  02. Information We Collect
                </h2>
                <p className="mb-3">
                  When you engage with our website, request a consultation, or submit a project brief, we collect information necessary to assess project feasibility:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                  <li><strong>Personal Contact Information:</strong> Full name, telephone number, WhatsApp contact, and email address.</li>
                  <li><strong>Project & Plot Particulars:</strong> Plot dimensions, municipal sector/society (e.g. Islamabad F-7, DHA Phase 6), topography, and existing site photographs.</li>
                  <li><strong>Investment Parameters:</strong> Estimated construction budget bracket and desired square footage.</li>
                  <li><strong>Design Brief & Lifestyle Notes:</strong> Spatial requirements, family size, and aesthetic preferences.</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div id="use-of-data" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  03. How We Use Architectural Data
                </h2>
                <p>
                  Information collected is used strictly to conduct architectural feasibility analysis, generate 5D BIM itemized Bill of Quantities (BOQ), formulate bespoke design presentations, coordinate on-site structural inspections, and maintain direct communications with you. We do not sell, rent, or monetize your contact details to third-party marketing companies.
                </p>
              </div>

              {/* Section 4 */}
              <div id="plot-security" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  04. Plot & Blueprint Security Protocols
                </h2>
                <p>
                  All digital CAD drawings, Revit 5D BIM models, structural calculations, and permit files are stored in enterprise-grade encrypted cloud repositories with multi-factor authentication. Access is strictly limited to Architect Intezar Ahmed and certified project team members bound by non-disclosure agreements.
                </p>
              </div>

              {/* Section 5 */}
              <div id="third-parties" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  05. Municipal Authorities & Licensed Engineers
                </h2>
                <p>
                  In order to legally construct your villa, architectural blueprint sets must be submitted to statutory municipal authorities (including the Capital Development Authority - CDA, Rawalpindi Development Authority - RDA, Defense Housing Authority - DHA, and local cantonment boards). Such submissions are conducted transparently in accordance with municipal building bye-laws and PCATP professional guidelines.
                </p>
              </div>

              {/* Section 6 */}
              <div id="cookies-analytics" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  06. Digital Cookies & Web Performance
                </h2>
                <p>
                  Our website utilizes modern, lightweight cookies to enhance site navigation, remember consultation form preferences, and measure anonymized traffic statistics (such as page visit durations and device screen sizes). You can disable cookies at any time via your browser settings without affecting core site usability.
                </p>
              </div>

              {/* Section 7 */}
              <div id="client-rights" className="scroll-mt-28">
                <h2 className="text-xl sm:text-2xl font-heading font-semibold text-slate-950 mb-3">
                  07. Your Rights & Data Deletion
                </h2>
                <p>
                  You retain complete ownership of your personal data. At any stage of our inquiry or upon project completion, you may request a copy of all stored personal records or formally request the permanent deletion of non-statutory correspondence.
                </p>
                <div className="mt-6 p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-heading font-semibold text-slate-900 mb-2">
                    Studio Legal & Privacy Inquiries
                  </h3>
                  <p className="text-xs text-slate-600 mb-3">
                    For any questions regarding our client discretion protocol or privacy standards, please contact our legal desk:
                  </p>
                  <p className="text-xs font-mono text-slate-900">
                    Email: <a href="mailto:privacy@architectintezar.com" className="underline">privacy@architectintezar.com</a>
                    <br />
                    Atelier: Executive Studio, Blue Area / F-7, Islamabad, Pakistan
                  </p>
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
    </main>
  );
}

