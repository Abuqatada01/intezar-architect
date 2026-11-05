"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight, MessageCircle } from "lucide-react";

interface InnerNavbarProps {
  onOpenConsultation?: () => void;
  activePath?: string;
}

export default function InnerNavbar({
  onOpenConsultation,
  activePath = "",
}: InnerNavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/90 select-none transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 font-heading font-bold text-base sm:text-lg tracking-tight text-slate-950 hover:opacity-85 transition-opacity"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-slate-900 shrink-0" />
          <span>ARCHITECT INTEZAR</span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-mono tracking-wider uppercase">
          {navLinks.map((link) => {
            const isActive = activePath === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-200 py-1 border-b-2 ${
                  isActive
                    ? "border-slate-900 text-slate-950 font-semibold"
                    : "border-transparent text-slate-600 hover:text-slate-950 hover:border-slate-300"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="https://wa.me/32493751798"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-200 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>+32 493 75 17 98</span>
          </a>

          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="bg-slate-900 hover:bg-black text-white text-xs font-semibold px-4 py-2 rounded-full tracking-wider uppercase transition-all shadow-sm active:scale-95 cursor-pointer"
            >
              Book Consultation
            </button>
          )}
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center gap-2 lg:hidden">
          {onOpenConsultation && (
            <button
              onClick={onOpenConsultation}
              className="sm:hidden bg-slate-900 text-white text-[11px] font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider"
            >
              Inquire
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="p-2 text-slate-800 hover:text-slate-950 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-6 space-y-4 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-3 font-mono text-xs uppercase tracking-wider">
            {navLinks.map((link) => {
              const isActive = activePath === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 border-b border-slate-100 ${
                    isActive ? "text-slate-950 font-bold" : "text-slate-600 hover:text-slate-950"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="https://wa.me/32493751798"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 text-xs font-mono font-medium text-emerald-800 bg-emerald-50 px-4 py-2.5 rounded-full border border-emerald-200 text-center"
            >
              <MessageCircle className="w-4 h-4 fill-emerald-600 text-emerald-600" />
              <span>WhatsApp Atelier (+32 493 75 17 98)</span>
            </a>

            {onOpenConsultation && (
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenConsultation();
                }}
                className="w-full bg-slate-900 text-white text-xs font-semibold py-3 rounded-full uppercase tracking-wider shadow"
              >
                Book Studio Consultation
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

