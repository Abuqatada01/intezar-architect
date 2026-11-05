"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

interface FloatingNavProps {
  onOpenMenu: () => void;
  onOpenConsultation: () => void;
}

export default function FloatingNav({
  onOpenMenu,
  onOpenConsultation,
}: FloatingNavProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateVisibility = () => {
      const shouldShow = window.scrollY > 120;
      setIsVisible((prev) => (prev !== shouldShow ? shouldShow : prev));
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateVisibility);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateVisibility();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      aria-label="Floating architectural header"
      className={`fixed top-0 left-0 right-0 z-[950] transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isVisible
          ? "opacity-100 translate-y-0 shadow-[0_10px_35px_rgba(0,0,0,0.15)]"
          : "opacity-0 -translate-y-full pointer-events-none shadow-none"
      }`}
    >
      <div className="w-full bg-[#43729b]/95 backdrop-blur-md text-white grid grid-cols-[auto_1fr_auto] sm:grid-cols-[210px_200px_1fr_auto] h-[68px] min-h-[68px] border-b border-white/20 items-stretch select-none">
        {/* Col 1: Brand */}
        <div className="flex items-center px-4 sm:px-8 border-r border-white/20">
          <Link
            href="/"
            className="flex items-center gap-2.5 font-semibold text-base tracking-tight text-white hover:opacity-90 transition-opacity"
          >
            <svg
              className="w-4 h-4 text-white shrink-0"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
            <span className="font-heading whitespace-nowrap">Architect Intezar</span>
          </Link>
        </div>

        {/* Col 2: Tagline */}
        <div className="hidden sm:flex items-center px-6 border-r border-white/20 text-xs leading-snug text-white/90 font-light">
          <span>
            Spaces for
            <br />
            modern living.
          </span>
        </div>

        {/* Col 3: Dedicated Page Links (Replacing section anchors) */}
        <div className="hidden lg:flex items-center px-8 gap-6 xl:gap-8 text-xs font-mono tracking-wider uppercase text-white/90">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-200 py-1"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-white transition-colors duration-200 py-1"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-white transition-colors duration-200 py-1"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-white transition-colors duration-200 py-1"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="hover:text-white transition-colors duration-200 py-1"
          >
            Contact Us
          </Link>
          <Link
            href="/privacy-policy"
            className="hover:text-white transition-colors duration-200 py-1 text-white/80"
          >
            Privacy
          </Link>
        </div>
        <div className="flex-1 lg:hidden" />

        {/* Col 4: Explore / Menu trigger & Consultation */}
        <div className="flex items-center gap-3 sm:gap-6 px-4 sm:px-8 md:px-10 border-l lg:border-l border-white/20">
          <button
            onClick={onOpenConsultation}
            className="hidden md:inline-flex items-center gap-2 text-xs font-medium bg-white/15 hover:bg-white text-white hover:text-slate-900 px-3.5 py-1.5 rounded transition-all duration-200"
          >
            <span>Book Consultation</span>
          </button>

          <button
            onClick={onOpenMenu}
            aria-label="Open navigation menu"
            className="flex flex-col items-start text-left text-white group cursor-pointer"
          >
            <span className="text-[11px] text-white/75 font-normal tracking-wide group-hover:text-white transition-colors">
              Explore studio
            </span>
            <span className="text-sm font-semibold text-white/95 -mt-0.5 group-hover:translate-x-0.5 transition-transform">
              + Menu
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
