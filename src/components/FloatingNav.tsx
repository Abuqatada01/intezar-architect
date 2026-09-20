"use client";

import React, { useEffect, useState } from "react";

interface FloatingNavProps {
  onOpenConsultation: () => void;
}

export default function FloatingNav({
  onOpenConsultation,
}: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-4 left-0 right-0 z-[900] flex justify-center px-4 transition-all duration-300 pointer-events-none ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-12"
      }`}
    >
      <div className="pointer-events-auto flex items-center justify-between gap-6 sm:gap-10 bg-white/90 backdrop-blur-xl border border-black/10 py-2 px-5 sm:px-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.08)] max-w-4xl w-full">
        {/* Brand */}
        <a
          href="#hero"
          className="font-heading font-bold text-xs sm:text-sm tracking-tight text-slate-900 flex items-center gap-1.5"
        >
          <span>ARCHITECT INTEZAR</span>
          <span className="text-sky-600 font-normal">STUDIO</span>
        </a>

        {/* Links */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-slate-600">
          <a href="#pillars" className="hover:text-black transition-colors">
            Pillars
          </a>
          <a href="#timeline" className="hover:text-black transition-colors">
            Transformation
          </a>
          <a href="#bim" className="hover:text-black transition-colors">
            BIM Precision
          </a>
          <a href="#portfolio" className="hover:text-black transition-colors">
            Projects
          </a>
          <a href="#estimator" className="hover:text-black transition-colors">
            Estimator
          </a>
        </nav>

        {/* CTA */}
        <button
          onClick={onOpenConsultation}
          className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-black transition-transform active:scale-95"
        >
          <span>Start a project</span>
          <span className="w-1.5 h-1.5 bg-white rounded-[0.5px]" />
        </button>
      </div>
    </div>
  );
}
