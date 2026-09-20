"use client";

import React, { useEffect } from "react";
import { X, ArrowRight } from "lucide-react";

interface StudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

const navItems = [
  { num: "01", title: "Overview & Studio", href: "#hero" },
  { num: "02", title: "Architectural Pillars", href: "#pillars" },
  { num: "03", title: "Transformation Timeline", href: "#timeline" },
  { num: "04", title: "BIM & Engineering Precision", href: "#bim" },
  { num: "05", title: "Selected Works & Villas", href: "#portfolio" },
  { num: "06", title: "Interactive Budget Estimator", href: "#estimator" },
  { num: "07", title: "Featured Press & Accolades", href: "#press" },
  { num: "08", title: "Contact Atelier & Inquiry", href: "#contact" },
];

export default function StudioDrawer({
  isOpen,
  onClose,
  onOpenConsultation,
}: StudioDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex justify-end">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide-out Panel */}
      <div className="relative w-full max-w-md h-full bg-[#12161c] text-white p-8 md:p-10 flex flex-col justify-between shadow-2xl z-10 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <span className="text-xs uppercase tracking-[0.14em] font-semibold text-white/70 font-mono">
            ARCHITECT INTEZAR ATELIER
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="p-1 text-white/70 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="my-8 flex flex-col space-y-3">
          {navItems.map((item) => (
            <a
              key={item.num}
              href={item.href}
              onClick={onClose}
              className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-white/20 transition-all text-white/90 hover:text-sky-400"
            >
              <div className="flex items-center gap-4">
                <span className="text-xs font-mono text-white/40">
                  {item.num}
                </span>
                <span className="text-lg font-medium tracking-tight">
                  {item.title}
                </span>
              </div>
              <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-sky-400" />
            </a>
          ))}
        </nav>

        {/* Footer CTA */}
        <div className="pt-4 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full bg-white text-black font-semibold text-sm py-3 px-6 rounded flex items-center justify-center gap-3 hover:bg-slate-100 transition-transform active:scale-[0.98]"
          >
            <span>Start a project</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rounded-[1px]" />
          </button>
          <p className="text-[11px] text-center text-white/40 mt-3">
            Ateliers in Paris • Dubai • London • Mumbai
          </p>
        </div>
      </div>
    </div>
  );
}
