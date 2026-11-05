"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Mail,
  CheckCircle2,
  Sparkles,
  ChevronDown,
  ArrowRight,
  MessageSquare,
} from "lucide-react";

interface FinalCtaEnquirySectionProps {
  onOpenConsultation?: () => void;
}

export default function FinalCtaEnquirySection({
  onOpenConsultation,
}: FinalCtaEnquirySectionProps) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Custom Villa Architecture",
    budgetRange: "₹ 1.5 - 3 Cr",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetOptions = [
    "₹ 1.5 - 3 Cr",
    "₹ 3 - 6 Cr",
    "₹ 6 Cr+",
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate brief network submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Architect Intezar, I would like to discuss my project (${formData.service}, budget ${formData.budgetRange}). My name is ${formData.firstName} ${formData.lastName}.`
    );
    window.open(`https://wa.me/32493751798?text=${text}`, "_blank");
  };

  return (
    <section
      id="contact-enquiry"
      className="py-16 sm:py-24 lg:py-32 bg-[#f6f7f9] text-slate-900 border-b border-slate-200/80 select-none relative overflow-hidden"
    >
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/4 -left-48 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-sky-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Floating Rounded Canvas Container matching reference */}
        <div className="bg-white rounded-[24px] sm:rounded-[36px] lg:rounded-[44px] p-5 sm:p-10 lg:p-16 border border-slate-200/90 shadow-[0_20px_60px_rgba(0,0,0,0.04)]">
          {/* Visitor Journey Stage Tag */}
          <div className="text-center mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 bg-slate-100 border border-slate-200/90 text-slate-700 px-3.5 py-1 rounded-full text-xs font-mono font-medium">
              <Sparkles className="w-3.5 h-3.5 text-slate-500" />
              <span>11 · CONVERSION</span>
              <span className="text-slate-400">•</span>
              <span className="italic">“Let&apos;s build together”</span>
            </div>
          </div>

          {/* Centered Main Heading matching screenshot typography */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-4xl lg:text-[50px] font-heading font-semibold text-slate-950 tracking-tight leading-[1.15] sm:leading-[1.12]">
              Let&apos;s ship strategy
              <br />
              and <span className="text-slate-400 font-light">design endures</span>
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-slate-500 font-light max-w-lg mx-auto leading-relaxed px-2">
              Tell us about your goals, and we&apos;ll help you turn vision into enduring, timeless architectural landmarks.
            </p>
          </div>

          {/* 2-Column Responsive Layout: Left Black Card + Right Conversational Form */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* ================= LEFT COLUMN: BLACK SCHEDULE CARD ================= */}
            <div className="lg:col-span-4 flex flex-col justify-between">
              {/* Dark Rounded Card */}
              <div className="bg-[#0e0e11] text-white rounded-[22px] sm:rounded-[30px] p-6 sm:p-8 shadow-xl flex flex-col justify-between">
                <div>
                  {/* Avatar in rounded square */}
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden relative mb-5 sm:mb-6 bg-slate-800 border border-white/10 shadow-md">
                    <Image
                      src="/intezar/intezar-ahmed.png"
                      alt="Architect Intezar Ahmed"
                      fill
                      sizes="80px"
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-2xl font-heading font-semibold text-white tracking-tight leading-snug mb-2 sm:mb-3">
                    Let&apos;s schedule
                    <br />
                    a conversation
                  </h3>

                  {/* Subtitle */}
                  <p className="text-xs sm:text-[13px] text-slate-400 font-light leading-relaxed mb-6 sm:mb-8">
                    Pick a time that works for you and let&apos;s discuss your project goals.
                  </p>
                </div>

                {/* White Pill Button */}
                <button
                  type="button"
                  onClick={() => {
                    if (onOpenConsultation) {
                      onOpenConsultation();
                    } else {
                      window.open("https://wa.me/32493751798", "_blank");
                    }
                  }}
                  className="w-full bg-white hover:bg-slate-100 text-slate-950 font-medium py-3 px-5 sm:px-6 rounded-full text-xs sm:text-sm tracking-wide transition-all shadow-sm text-center cursor-pointer active:scale-98"
                >
                  Book a free call
                </button>
              </div>

              {/* Direct Email Contact Below Card */}
              <div className="flex items-center gap-3 mt-4 sm:mt-6 px-1">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg sm:rounded-xl bg-slate-900 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Mail className="w-4 h-4 text-slate-200" />
                </div>
                <div className="min-w-0">
                  <span className="block text-[11px] font-mono text-slate-400">
                    Do you prefer email?
                  </span>
                  <a
                    href="mailto:intezar@architectintezar.com"
                    className="text-xs font-medium text-slate-900 hover:text-sky-600 transition-colors truncate block"
                  >
                    intezar@architectintezar.com
                  </a>
                </div>
              </div>
            </div>

            {/* ================= RIGHT COLUMN: CONVERSATIONAL INQUIRY FORM ================= */}
            <div className="lg:col-span-8">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
                  {/* Row 1: First Name & Last Name */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                        Hi, my first name is...
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({ ...formData, firstName: e.target.value })
                        }
                        className="w-full bg-[#f8f9fa] hover:bg-white focus:bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base sm:text-sm placeholder:text-slate-400 outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                        And my last name is...
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        className="w-full bg-[#f8f9fa] hover:bg-white focus:bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base sm:text-sm placeholder:text-slate-400 outline-none"
                      />
                    </div>
                  </div>

                  {/* Row 2: Email */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                      My email is...
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="heyjohn@business.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full bg-[#f8f9fa] hover:bg-white focus:bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base sm:text-sm placeholder:text-slate-400 outline-none"
                    />
                  </div>

                  {/* Row 3: Interested in + Investment Range */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8 items-start">
                    {/* Select Service */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                        I&apos;m interested in...
                      </label>
                      <div className="relative">
                        <select
                          value={formData.service}
                          onChange={(e) =>
                            setFormData({ ...formData, service: e.target.value })
                          }
                          className="w-full bg-[#f8f9fa] hover:bg-white focus:bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base sm:text-sm appearance-none outline-none cursor-pointer pr-10"
                        >
                          <option>Custom Villa Architecture</option>
                          <option>Turnkey Design & Build</option>
                          <option>Luxury Interior Architecture</option>
                          <option>Commercial Headquarters / Retail</option>
                          <option>Comprehensive Spatial Renovation</option>
                        </select>
                        <ChevronDown className="w-4 h-4 text-slate-500 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                      </div>
                    </div>

                    {/* Radio Options for Investment Range */}
                    <div>
                      <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                        My investment range...
                      </label>
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 pt-1 sm:pt-2">
                        {budgetOptions.map((option) => {
                          const isSelected = formData.budgetRange === option;
                          return (
                            <label
                              key={option}
                              onClick={() =>
                                setFormData({ ...formData, budgetRange: option })
                              }
                              className="inline-flex items-center gap-2 cursor-pointer group py-1"
                            >
                              {/* Custom Radio Circle */}
                              <span
                                className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center transition-all ${
                                  isSelected
                                    ? "border-slate-950 bg-slate-950"
                                    : "border-slate-400 group-hover:border-slate-600 bg-white"
                                }`}
                              >
                                {isSelected && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                )}
                              </span>
                              <span
                                className={`text-xs sm:text-[13px] transition-colors ${
                                  isSelected
                                    ? "font-medium text-slate-900"
                                    : "text-slate-600 group-hover:text-slate-900"
                                }`}
                              >
                                {option}
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Row 4: Planning to (Textarea) */}
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-slate-800 mb-1.5 sm:mb-2">
                      I&apos;m planning to...
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Build a custom villa in Islamabad / discuss spatial requirements and architectural direction..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="w-full bg-[#f8f9fa] hover:bg-white focus:bg-white text-slate-900 px-3.5 sm:px-4 py-2.5 sm:py-3 rounded-xl border border-slate-200 focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all text-base sm:text-sm placeholder:text-slate-400 outline-none resize-none"
                    />
                  </div>

                  {/* Row 5: Full-width Black Pill Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-black hover:bg-slate-800 text-white font-medium py-3.5 sm:py-4 rounded-full text-sm sm:text-base tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99] disabled:opacity-75"
                    >
                      <span>{isSubmitting ? "Sending..." : "Send message"}</span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4 ml-1" />}
                    </button>
                  </div>
                </form>
              ) : (
                /* Success Feedback State */
                <div className="py-8 sm:py-16 text-center space-y-5 sm:space-y-6 animate-in fade-in zoom-in-95 duration-300 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>

                  <div>
                    <h3 className="text-xl sm:text-2xl font-heading font-semibold text-slate-900">
                      Message Received
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 font-light max-w-md mx-auto">
                      Thank you, {formData.firstName}. Architect Intezar Ahmed has received your project details and will personally follow up with you.
                    </p>
                  </div>

                  <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <button
                      type="button"
                      onClick={handleWhatsAppDirect}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all shadow"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Chat on WhatsApp Directly</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs text-slate-600 hover:text-slate-900 underline underline-offset-4 pt-1 sm:pt-0"
                    >
                      Send another message
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
