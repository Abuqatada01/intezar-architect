"use client";

import React, { useState } from "react";
import {
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Send,
} from "lucide-react";

export default function FinalCtaEnquirySection() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    projectType: "Custom Villa Architecture",
    coveredArea: "5,000 - 10,000 sq.ft",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Architect Intezar, I would like to discuss my project (${formData.projectType || "Architecture / Interior"}) in ${formData.city || "Islamabad"}.`
    );
    window.open(`https://wa.me/32493751798?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact-enquiry"
      className="py-24 lg:py-32 bg-white text-slate-900 border-b border-slate-200 select-none relative"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Visitor Journey Stage Tag */}
        <div className="max-w-3xl mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>11 · CONVERSION</span>
            <span className="text-slate-400">•</span>
            <span className="italic">“I'm interested. What should I do now?”</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15]">
            Ready to build your landmark?
            <br />
            Let&apos;s discuss your project.
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base font-light max-w-2xl leading-relaxed">
            Every great residence begins with a simple, honest conversation. Share your plot or vision below, and Architect Intezar Ahmed will personally review your brief.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Left Form + Right Studio Contact & What Happens Next */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-sky-700 font-semibold block mb-1">
                    PROJECT DISCOVERY INQUIRY
                  </span>
                  <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900">
                    Schedule a Consultation
                  </h3>
                </div>

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tariq Khan"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>

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
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Email & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="tariq@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Project Location / City *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Islamabad, DHA Lahore, Overseas"
                      value={formData.city}
                      onChange={(e) =>
                        setFormData({ ...formData, city: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Project Type & Approximate Area */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Project Type
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all cursor-pointer"
                    >
                      <option>Custom Villa Architecture</option>
                      <option>Luxury Interior Design & Styling</option>
                      <option>Full Renovation & Remodeling</option>
                      <option>Turnkey Architecture & Construction</option>
                      <option>Commercial Headquarters / Retail</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                      Estimated Area
                    </label>
                    <select
                      value={formData.coveredArea}
                      onChange={(e) =>
                        setFormData({ ...formData, coveredArea: e.target.value })
                      }
                      className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all cursor-pointer"
                    >
                      <option>Under 4,000 sq.ft (Boutique Villa)</option>
                      <option>4,000 - 8,000 sq.ft (1 Kanal)</option>
                      <option>8,000 - 15,000 sq.ft (2 Kanal Estate)</option>
                      <option>15,000+ sq.ft (Palatial Compound)</option>
                    </select>
                  </div>
                </div>

                {/* Brief Message */}
                <div>
                  <label className="block text-xs font-mono text-slate-700 uppercase tracking-wider mb-2 font-medium">
                    Tell us about your plot or vision (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Plot size, orientation, specific architectural desires, or desired completion timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-white text-slate-900 px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all placeholder:text-slate-400"
                  />
                </div>

                {/* Primary CTA Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-slate-900 hover:bg-black text-white font-semibold py-4 rounded-full text-xs tracking-wider uppercase transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>{isSubmitting ? "Submitting Inquiry..." : "Discuss Your Project"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-[11px] text-slate-500 text-center font-light">
                  Direct privacy guaranteed. We reply within 24 hours. No sales spam.
                </p>
              </form>
            ) : (
              <div className="py-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <div>
                  <h3 className="text-2xl font-heading font-semibold text-slate-900">
                    Inquiry Received Successfully
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 font-light max-w-md mx-auto">
                    Thank you, {formData.fullName}. Architect Intezar Ahmed has received your project brief and will personally get in touch within 24 hours.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp Now</span>
                  </button>

                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="w-full sm:w-auto text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4"
                  >
                    Submit another inquiry
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Direct Contact & What Happens Next Guide */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Atelier Contact Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 border border-slate-800 shadow-xl">
              <span className="text-[10px] font-mono uppercase tracking-widest text-sky-400 block mb-2">
                DIRECT ATELIER CONTACT
              </span>
              <h3 className="text-xl font-heading font-semibold text-white mb-6">
                Prefer to call or message directly?
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/32493751798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">WhatsApp Atelier</span>
                    <span className="block text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      +32 493 75 17 98
                    </span>
                  </div>
                </a>

                <a
                  href="tel:+32493751798"
                  className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 transition-colors border border-slate-700/60 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Phone Consultation</span>
                    <span className="block text-sm font-semibold text-white group-hover:text-sky-300 transition-colors">
                      +32 493 75 17 98
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-800/80 border border-slate-700/60">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-mono text-slate-400">Main Practice Studio</span>
                    <span className="block text-xs font-semibold text-white">
                      Islamabad Atelier • Blue Area / F-7
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* "What Happens Next?" 3-Step Confidence Box */}
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
              <h4 className="text-base font-heading font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-sky-700" />
                <span>What Happens After You Inquire?</span>
              </h4>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">
                      Personal Review Within 24 Hours
                    </span>
                    <span className="block text-xs text-slate-500 font-light mt-0.5">
                      Architect Intezar examines your location, plot specifics, and feasibility.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">
                      Discovery Conversation
                    </span>
                    <span className="block text-xs text-slate-500 font-light mt-0.5">
                      A 30-minute studio coffee or video call to align on aesthetics, scope, and budget.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <div>
                    <span className="block text-xs font-semibold text-slate-900">
                      Tailored Spatial Roadmap & BOQ
                    </span>
                    <span className="block text-xs text-slate-500 font-light mt-0.5">
                      Receive an itemized architectural proposal and schedule before committing.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

