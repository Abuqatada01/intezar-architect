"use client";

import React from "react";
import Link from "next/link";
import { MessageCircle, Instagram, Linkedin, MapPin, Mail, ArrowUp } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer" className="bg-white text-slate-900 pt-20 sm:pt-28 pb-10 border-t border-slate-200 selection:bg-slate-900 selection:text-white select-none">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top 3-Column Info & Inquiries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 sm:mb-20">
          {/* Left Block: Atelier Mission & Direct Contact */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-medium text-slate-900 tracking-[-0.02em] leading-tight max-w-lg">
              Creating landmarks that balance human emotion, light, and architectural permanence.
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md font-light">
              Bespoke architecture, luxury interior design, and turnkey execution atelier led by Architect Intezar Ahmed. Serving discerning clients nationwide and internationally.
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-500 font-medium mb-3">
                Let&apos;s begin your architectural journey:
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="https://wa.me/32493751798"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-full hover:bg-black transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                  <span>+32 493 75 17 98</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 transition-colors cursor-pointer"
                >
                  Book Studio Consultation
                </button>
              </div>
            </div>
          </div>

          {/* Middle Block: Pages Nav */}
          <div className="lg:col-span-3 xl:col-span-3 lg:pl-8">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-900 font-semibold mb-4">
              STUDIO PAGES
            </h4>
            <ul className="space-y-3 text-xs sm:text-[13px] text-slate-700 font-medium">
              <li>
                <Link href="/" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>Home</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>About Us</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>Services</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>Articles & Blog</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>Contact Us</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-black transition-colors flex items-center justify-between">
                  <span>Privacy Policy</span>
                  <span className="text-slate-400 font-mono text-[11px]">→</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Right Block: Desk & Contact Info */}
          <div className="lg:col-span-3 xl:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-900 font-semibold mb-4">
              ATELIER DESK
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#43729b] mt-0.5 shrink-0" />
                <span>
                  Executive Studio, Blue Area / F-7
                  <br />
                  Islamabad, Pakistan
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#43729b] shrink-0" />
                <a
                  href="mailto:atelier@intezarahmed.com"
                  className="text-slate-900 underline underline-offset-2 decoration-slate-300 hover:decoration-black transition-colors"
                >
                  atelier@intezarahmed.com
                </a>
              </p>
              <div className="flex items-center gap-3 pt-2 text-slate-900">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-1 hover:text-slate-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-1 hover:text-slate-500 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>

              <div className="pt-4">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-900 transition-colors"
                >
                  <ArrowUp className="w-3.5 h-3.5" />
                  <span>Back to top</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Gigantic Architectural Wordmark Banner */}
        <div className="w-full overflow-hidden border-b border-slate-200/80 pb-3 mb-6">
          <h2 className="text-[9.5vw] font-heading font-black tracking-[-0.04em] uppercase text-black leading-[0.88] whitespace-nowrap select-none w-full">
            ARCHITECT INTEZAR
          </h2>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] text-slate-500 pt-2 items-center">
          <div>
            <span className="text-slate-500">
              ARCHITECT INTEZAR © {new Date().getFullYear()} All rights reserved.
            </span>
          </div>

          <div className="md:text-center space-x-3">
            <span className="text-slate-400">
              PCATP Registered • Luxury Architecture
            </span>
            <span>•</span>
            <Link
              href="/privacy-policy"
              className="text-slate-600 hover:text-slate-900 underline underline-offset-2 transition-colors font-mono"
            >
              Privacy Policy
            </Link>
          </div>

          <div className="md:text-right">
            <p className="text-slate-500">
              Crafted for timeless architectural living <span className="text-[#43729b] font-bold">◆</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
