"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "What is the first step in the design process?",
    answer:
      "We begin with an in-depth architectural consultation and comprehensive site survey to understand your spatial ambitions, aesthetic vision, budget parameters, and regulatory requirements.",
  },
  {
    id: 2,
    question: "How long does an interior design project take?",
    answer:
      "Timelines vary depending on project scope. Concept development typically spans 3–6 weeks, detailed BIM engineering takes 4–8 weeks, and turnkey site construction or renovation ranges from 4 to 12 months.",
  },
  {
    id: 3,
    question: "What’s included in your design fees?",
    answer:
      "Our comprehensive fee includes conceptual spatial plans, 3D photorealistic renderings, 4D BIM engineering clash detection, bespoke millwork shop drawings, custom material sourcing, and full on-site contractor supervision.",
  },
  {
    id: 4,
    question: "Do you offer virtual design services?",
    answer:
      "Yes, we offer global remote architectural consultations with immersive 3D digital twins, VR spatial walkthroughs, and live coordinated BIM sessions for international private clients.",
  },
  {
    id: 5,
    question: "Will I be able to see a preview of the design before it’s finalized?",
    answer:
      "Absolutely. You will experience full 3D interactive photorealistic renders, physical stone and timber material samples, and VR walkthroughs before any on-site construction begins.",
  },
  {
    id: 6,
    question: "Do you offer post-project support?",
    answer:
      "Yes, every commission includes a dedicated post-handover warranty, structural maintenance manuals, defect liability inspection, and ongoing atelier concierge support.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 lg:py-36 bg-white text-slate-900 border-t border-slate-100 selection:bg-slate-900 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Intro */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-36">
            <h2 className="text-4xl sm:text-5xl lg:text-[56px] xl:text-[64px] font-heading font-medium tracking-tight text-slate-900 leading-[1.08] mb-6">
              FAQ&apos;s
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md font-light">
              Common questions about our interior design services, processes,
              and what to expect when working with us.
            </p>
          </div>

          {/* Right Column: Accordion List */}
          <div className="lg:col-span-7 xl:col-span-7 divide-y divide-slate-200">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 sm:py-6 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-start gap-4 text-left group cursor-pointer transition-colors"
                  >
                    {/* Left-Aligned Chevron matching Reference */}
                    <span className="shrink-0 mt-1 text-slate-500 group-hover:text-slate-900 transition-colors">
                      <ChevronDown
                        className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${
                          isOpen ? "rotate-180 text-slate-900" : ""
                        }`}
                      />
                    </span>

                    <span
                      className={`text-base sm:text-lg lg:text-[19px] font-heading font-normal tracking-tight transition-colors duration-200 leading-snug ${
                        isOpen
                          ? "text-slate-900 font-medium"
                          : "text-slate-800 group-hover:text-slate-950"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </button>

                  {/* Expandable Answer Content */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100 mt-4"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden pl-8 sm:pl-9">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light pb-2">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
