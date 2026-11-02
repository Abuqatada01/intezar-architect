"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle } from "lucide-react";

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  tag: string;
}

const faqs: FaqItem[] = [
  {
    id: 1,
    question: "How are your architectural and design fees structured?",
    tag: "Pricing & Fees",
    answer:
      "Our architectural design fees are structured transparently as a fixed lump sum based on covered area and structural scope—never as vague percentages with unexpected markups. For turnkey construction commissions, we provide a line-by-line itemized Bill of Quantities (BOQ) with fixed material specifications and locked stage payments.",
  },
  {
    id: 2,
    question: "What happens if I want changes to the initial 3D design concept?",
    tag: "Design Revisions",
    answer:
      "Your satisfaction is paramount. During Phase 02 (Concept & 3D Walkthrough), we conduct dedicated design review charrettes where we refine layout, ceiling volumes, window placements, and materials. We do not freeze the design or proceed to construction blueprints until you are 100% in love with the 3D model and VR walkthrough.",
  },
  {
    id: 3,
    question: "Can you guarantee that construction won't exceed my budget?",
    tag: "Cost Control",
    answer:
      "Yes. Cost overruns in traditional construction occur because drawings are vague or structural/plumbing clashes require demolition on site. By building a 5D BIM digital twin first, we detect all clashes digitally and lock in an exact, itemized Bill of Quantities (BOQ) before breaking ground. Any scope variation is pre-approved in writing.",
  },
  {
    id: 4,
    question: "Do you handle municipal authority approvals (CDA, DHA, RDA, etc.)?",
    tag: "Regulatory Permits",
    answer:
      "Yes, from start to finish. Architect Intezar Ahmed is a licensed Member of PCATP (Pakistan Council of Architects and Town Planners) with over 11 years of regulatory experience. We prepare all structural calculations, architectural drawings, and environmental submissions to obtain lawful municipal permits.",
  },
  {
    id: 5,
    question: "Will Architect Intezar personally oversee construction on my site?",
    tag: "Direct Accountability",
    answer:
      "Yes. Unlike large corporate design factories that pitch with senior partners and then hand off your residence to junior interns, Architect Intezar personally leads key milestone inspections—including foundation casting, cantilever rebar checks, marble block selection, and final snagging.",
  },
  {
    id: 6,
    question: "Can I commission a project if I live overseas (UK, USA, Gulf)?",
    tag: "Overseas Clients",
    answer:
      "Yes, a significant portion of our commissions are for overseas Pakistani families and expatriates. We provide seamless remote project management: weekly 4K video walkthroughs, drone site scans, digital milestone approvals, and transparent online account ledgers.",
  },
  {
    id: 7,
    question: "What post-handover warranty or defect liability is provided?",
    tag: "Warranty & Support",
    answer:
      "Every turnkey delivery includes a 12-month comprehensive defect liability warranty covering all MEP systems, waterproofing integrity, stone masonry, and bespoke joinery, alongside an operations manual and ongoing atelier concierge support.",
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-24 lg:py-32 bg-slate-50 text-slate-900 border-b border-slate-200 selection:bg-slate-900 selection:text-white select-none"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Stage Tag */}
          <div className="lg:col-span-5 lg:sticky lg:top-36">
            <div className="inline-flex items-center gap-2 bg-sky-100/80 border border-sky-200 text-sky-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-4">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>10 · RESOLVE REMAINING OBJECTIONS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-slate-900 tracking-tight leading-[1.15] mb-4">
              Frequently asked
              <br />
              questions.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light mb-8">
              Straightforward answers about our architectural fees, budget limits, design revisions, construction supervision, and post-handover guarantees.
            </p>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900 uppercase">
                <HelpCircle className="w-4 h-4 text-sky-700" />
                <span>Have a specific question not listed here?</span>
              </div>
              <p className="text-xs text-slate-600 font-light leading-relaxed">
                Architect Intezar Ahmed is available for direct questions regarding your plot or project.
              </p>
              <a
                href="#contact-enquiry"
                className="inline-block text-xs font-semibold text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 hover:text-black transition-colors"
              >
                Send your question directly →
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 divide-y divide-slate-200/90 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            {faqs.map((faq) => {
              const isOpen = openId === faq.id;
              return (
                <div key={faq.id} className="py-5 first:pt-0 last:pb-0">
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-start justify-between gap-4 text-left group cursor-pointer transition-colors"
                  >
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-100 mb-2">
                        {faq.tag}
                      </span>
                      <h3
                        className={`text-base sm:text-lg font-heading font-medium tracking-tight transition-colors duration-200 leading-snug ${
                          isOpen
                            ? "text-slate-950 font-semibold"
                            : "text-slate-800 group-hover:text-slate-950"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>

                    <span className="shrink-0 mt-1 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-slate-900 group-hover:text-white transition-all">
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="pt-3 pr-8 text-xs sm:text-sm text-slate-600 leading-relaxed font-light animate-in fade-in duration-200">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
