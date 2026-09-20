"use client";

import React from "react";
import { MessageCircle, Instagram, Linkedin } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer id="contact" className="bg-white text-slate-900 pt-20 sm:pt-28 pb-10 border-t border-slate-200 selection:bg-slate-900 selection:text-white">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top 3-Column Info & Inquiries Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 sm:mb-20">
          {/* Left Block: Commission & Regulation Inquiries */}
          <div className="lg:col-span-6 xl:col-span-6 space-y-4">
            <h3 className="text-2xl sm:text-3xl lg:text-[32px] font-heading font-normal text-slate-900 tracking-[-0.02em] leading-tight max-w-lg">
              Is your property in violation of planning regulations?
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-md">
              Visit our{" "}
              <a
                href="#portfolio"
                className="underline underline-offset-2 decoration-slate-400 hover:decoration-slate-900 text-slate-900 font-medium"
              >
                planning offences
              </a>{" "}
              page to learn more or consult one of{" "}
              <span className="inline-flex items-center gap-1">
                <a
                  href="#portfolio"
                  className="underline underline-offset-2 decoration-slate-400 hover:decoration-slate-900 text-slate-900 font-medium"
                >
                  our regularizations
                </a>
                <span className="inline-flex items-center justify-center px-2 py-0.5 text-[10px] font-mono font-bold bg-[#b8956e] text-white rounded-full leading-none">
                  99+
                </span>
              </span>
            </p>

            <div className="pt-2">
              <p className="text-xs text-slate-600 font-medium mb-3">
                Let&apos;s begin your regularization
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <a
                  href="tel:+32493751798"
                  className="inline-flex items-center gap-2 bg-black text-white text-xs font-semibold px-4 py-2.5 rounded hover:bg-slate-800 transition-colors shadow-sm"
                >
                  <MessageCircle className="w-3.5 h-3.5 fill-white text-white" />
                  <span>+32 493 75 17 98</span>
                </a>
                <button
                  onClick={onOpenConsultation}
                  className="text-xs font-medium text-slate-900 underline underline-offset-4 decoration-slate-300 hover:decoration-slate-900 hover:text-black transition-colors cursor-pointer"
                >
                  Contact us
                </button>
              </div>
            </div>
          </div>

          {/* Middle Block: Pages Nav */}
          <div className="lg:col-span-3 xl:col-span-3 lg:pl-8">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-900 font-semibold mb-4">
              PAGES
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-[13px] text-slate-700 font-normal">
              <li>
                <a href="#pillars" className="hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-black transition-colors">
                  Residential
                </a>
              </li>
              <li>
                <a href="#bim" className="hover:text-black transition-colors">
                  Professional
                </a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-black transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <button
                  onClick={onOpenConsultation}
                  className="hover:text-black transition-colors text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Right Block: Desk & Contact Info */}
          <div className="lg:col-span-3 xl:col-span-3">
            <h4 className="text-[11px] font-mono uppercase tracking-[0.16em] text-slate-900 font-semibold mb-4">
              DESK
            </h4>
            <div className="space-y-3 text-xs sm:text-[13px] text-slate-700 leading-relaxed font-normal">
              <p>
                Rue des Dauphins 2 box 11
                <br />
                1080 Brussels
              </p>
              <p>
                <a
                  href="mailto:info@ks-architectes.be"
                  className="text-slate-900 underline underline-offset-2 decoration-slate-300 hover:decoration-black transition-colors"
                >
                  info@ks-architectes.be
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
            </div>
          </div>
        </div>

        {/* Gigantic Architectural Wordmark Banner */}
        <div className="w-full overflow-hidden border-b border-slate-200/80 pb-3 mb-6">
          <h2 className="text-[10.5vw] font-heading font-black tracking-[-0.04em] uppercase text-black leading-[0.88] whitespace-nowrap select-none w-full">
            ARCHITECT INTEZAR
          </h2>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[11px] text-slate-500 pt-2">
          <div>
            <a href="#hero" className="hover:text-slate-900 transition-colors block">
              Legal notice
            </a>
            <p className="mt-1 text-slate-500">
              ARCHITECT INTEZAR © {new Date().getFullYear()} All rights reserved
            </p>
          </div>

          <div className="md:text-center">
            <a href="#hero" className="hover:text-slate-900 transition-colors">
              Privacy Policy
            </a>
          </div>

          <div className="md:text-right">
            <a href="#hero" className="hover:text-slate-900 transition-colors block">
              Cookie Policy
            </a>
            <p className="mt-1 text-slate-500">
              Made with love by <span className="font-semibold text-slate-900">AKIS</span>{" "}
              <span className="text-[#b8956e] font-bold">◆</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

