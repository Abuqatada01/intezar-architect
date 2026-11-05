"use client";

import React, { useState } from "react";
import Image from "next/image";
import InnerNavbar from "@/components/InnerNavbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

export default function ContactPage() {
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    service: "Custom Villa Architecture",
    plotSize: "1 Kanal (50x90)",
    budgetRange: "₹ 1.5 - 3 Cr",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Architect Intezar, my name is ${formData.firstName} ${formData.lastName}. I would like to inquire about my project in ${formData.city || "Islamabad"} (${formData.service}, budget ${formData.budgetRange}).`
    );
    window.open(`https://wa.me/32493751798?text=${text}`, "_blank");
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/contact"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Hero Header */}
      <section className="py-20 sm:py-28 lg:py-32 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-6">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>DIRECT ATELIER COMMUNICATION</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[60px] font-heading font-semibold text-slate-950 tracking-tight leading-[1.08] mb-6">
              Let&apos;s begin your architectural journey.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed">
              Every landmark residence begins with an honest, unhurried conversation. Share your plot dimensions or aspirations, and Architect Intezar Ahmed will personally review your brief.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Grid: Left Form + Right Atelier Info */}
      <section className="py-20 sm:py-28 lg:py-32 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* ================= LEFT COLUMN: INQUIRY FORM ================= */}
            <div className="lg:col-span-7 bg-[#fafbfc] rounded-[32px] p-6 sm:p-10 lg:p-12 border border-slate-200 shadow-sm">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-[11px] font-mono uppercase tracking-[0.18em] text-sky-700 font-semibold block mb-1">
                      PROJECT DISCOVERY INQUIRY
                    </span>
                    <h2 className="text-2xl font-heading font-semibold text-slate-900">
                      Submit Your Project Brief
                    </h2>
                  </div>

                  {/* Name Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        First Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Phone & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>
                  </div>

                  {/* Location & Scope */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        City / Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Islamabad, DHA Lahore, Overseas"
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Desired Scope
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all cursor-pointer"
                      >
                        <option>Custom Villa Architecture</option>
                        <option>Turnkey Design & Build</option>
                        <option>Luxury Interior Architecture</option>
                        <option>Commercial HQ / Retail</option>
                        <option>Complete Spatial Renovation</option>
                      </select>
                    </div>
                  </div>

                  {/* Plot Size & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Plot Size / Dimensions
                      </label>
                      <select
                        value={formData.plotSize}
                        onChange={(e) =>
                          setFormData({ ...formData, plotSize: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all cursor-pointer"
                      >
                        <option>Under 10 Marla (Boutique)</option>
                        <option>1 Kanal (50x90)</option>
                        <option>2 Kanal Estate (75x120)</option>
                        <option>4 Kanal+ Palatial Compound</option>
                        <option>Penthouse / Duplex Apartment</option>
                        <option>Commercial Plot</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                        Estimated Investment Range
                      </label>
                      <select
                        value={formData.budgetRange}
                        onChange={(e) =>
                          setFormData({ ...formData, budgetRange: e.target.value })
                        }
                        className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all cursor-pointer"
                      >
                        <option>Under ₹ 1.5 Crore</option>
                        <option>₹ 1.5 - 3 Crore</option>
                        <option>₹ 3 - 6 Crore</option>
                        <option>₹ 6 - 12 Crore</option>
                        <option>₹ 12 Crore+</option>
                      </select>
                    </div>
                  </div>

                  {/* Notes / Vision */}
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Tell us about your plot or vision (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Specific architectural preferences (cantilevers, double height, natural light), timeline requirements, or family lifestyle rituals..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-base sm:text-sm focus:border-slate-900 focus:ring-1 focus:ring-slate-900 outline-none transition-all placeholder:text-slate-400 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-slate-900 hover:bg-black text-white font-semibold py-4 rounded-full text-xs uppercase tracking-wider shadow-xl transition-all cursor-pointer active:scale-98 flex items-center justify-center gap-2"
                  >
                    <span>{isSubmitting ? "Submitting Brief..." : "Submit Project Inquiry"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <p className="text-[11px] text-slate-500 text-center font-light">
                    Direct privacy guaranteed. We reply within 24 hours. No sales spam.
                  </p>
                </form>
              ) : (
                /* Success Feedback */
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-heading font-semibold text-slate-900">
                    Brief Received by the Atelier
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto font-light leading-relaxed">
                    Thank you, {formData.firstName}. Architect Intezar Ahmed has received your project details and will personally review the location and feasibility before reaching out.
                  </p>
                  <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsApp}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase shadow"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4"
                    >
                      Submit another brief
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* ================= RIGHT COLUMN: DIRECT CONTACT DETAILS ================= */}
            <div className="lg:col-span-5 space-y-8">
              {/* Studio Desk Card */}
              <div className="bg-[#121418] text-white rounded-[32px] p-8 border border-slate-800 shadow-xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-sky-400 block mb-3 font-semibold">
                  DIRECT ATELIER DESK
                </span>
                <h2 className="text-2xl font-heading font-semibold mb-6">
                  Prefer to call or message directly?
                </h2>

                <div className="space-y-4">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/32493751798"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <MessageCircle className="w-5 h-5 fill-emerald-400" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        WhatsApp Atelier
                      </span>
                      <span className="block text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                        +32 493 75 17 98
                      </span>
                    </div>
                  </a>

                  {/* Direct Phone */}
                  <a
                    href="tel:+32493751798"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Direct Phone Line
                      </span>
                      <span className="block text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                        +32 493 75 17 98
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:intezar@architectintezar.com"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors border border-white/10 group"
                  >
                    <div className="w-11 h-11 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Email Correspondence
                      </span>
                      <span className="block text-sm font-semibold text-white group-hover:text-amber-300 transition-colors truncate">
                        intezar@architectintezar.com
                      </span>
                    </div>
                  </a>

                  {/* Physical Address */}
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-11 h-11 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                        Practice Studio Location
                      </span>
                      <span className="block text-xs font-semibold text-white">
                        Executive Studio, Blue Area / Sector F-7, Islamabad
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* What Happens Next Guide */}
              <div className="bg-slate-50 rounded-[28px] p-7 border border-slate-200">
                <h3 className="text-sm font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-700" />
                  <span>The Atelier Consultation Protocol</span>
                </h3>

                <div className="space-y-3.5 text-xs text-slate-600">
                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      1
                    </span>
                    <p>
                      <strong>Personal Review:</strong> Architect Intezar reviews your plot orientation, local municipal zoning, and spatial feasibility within 24 hours.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      2
                    </span>
                    <p>
                      <strong>Discovery Dialogue:</strong> A 30-minute studio meeting or video call to align on architectural expectations, lifestyle rituals, and budget limits.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white font-mono text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                      3
                    </span>
                    <p>
                      <strong>Locked Spatial Roadmap:</strong> You receive an itemized architectural engagement proposal and 5D BIM cost framework prior to any financial commitment.
                    </p>
                  </div>
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

