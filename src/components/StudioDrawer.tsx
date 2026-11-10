"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { X, ArrowRight } from "lucide-react";

interface StudioDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenConsultation: () => void;
}

const studioPages = [
  { num: "01", title: "Home", href: "/" },
  { num: "02", title: "About Studio", href: "/about" },
  { num: "03", title: "Services & Disciplines", href: "/services" },
  { num: "04", title: "Articles & Blog", href: "/blog" },
  { num: "05", title: "Contact Atelier", href: "/contact" },
  { num: "06", title: "Privacy Policy", href: "/privacy-policy" },
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

        {/* Dedicated Pages Navigation */}
        <div className="my-8 flex-1 flex flex-col justify-center">
          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#5485b0] block mb-4 font-semibold">
            ATELIER DIRECTORY
          </span>
          <nav className="flex flex-col space-y-4">
            {studioPages.map((item) => (
              <Link
                key={item.num}
                href={item.href}
                onClick={onClose}
                className="group flex items-center justify-between py-2 border-b border-white/5 hover:border-white/20 transition-all text-white/90 hover:text-[#5485b0]"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-white/40">
                    {item.num}
                  </span>
                  <span className="text-xl font-medium tracking-tight">
                    {item.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[#5485b0]" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Footer CTA */}
        <div className="pt-6 border-t border-white/10">
          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full bg-white text-black font-semibold text-sm py-3.5 px-6 rounded-full flex items-center justify-center gap-3 hover:bg-slate-100 transition-transform active:scale-[0.98] shadow-lg"
          >
            <span>Book Consultation</span>
            <span className="w-2.5 h-2.5 bg-black inline-block rounded-[1px]" />
          </button>
          <p className="text-[11px] text-center text-white/40 mt-3 font-mono">
            Direct Atelier Practice • Islamabad & International
          </p>
        </div>
      </div>
    </div>
  );
}
