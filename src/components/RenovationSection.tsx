"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface RenovationSectionProps {
  onOpenConsultation?: () => void;
}

interface ServiceItem {
  id: number;
  num: string;
  title: string;
  lines: string[];
  category: string;
  desc: string;
  img: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    num: "01",
    title: "Renovation & Remodeling",
    lines: ["Renovation &", "Remodeling"],
    category: "Full Architectural Remodeling",
    desc: "Transforming residential estates and historical properties into contemporary, light-filled architectural masterworks with structural precision.",
    img: "/assets/renovation-1.jpg",
  },
  {
    id: 2,
    num: "02",
    title: "Interior Styling",
    lines: ["Interior", "Styling"],
    category: "Bespoke Millwork & Textures",
    desc: "Curating bespoke furniture, fine stone masonry, acoustic timber louvers, and warm ambient lighting fixtures tailored to elevated living.",
    img: "/assets/renovation-2.jpg",
  },
  {
    id: 3,
    num: "03",
    title: "Space Planning",
    lines: ["Space", "Planning"],
    category: "Volumetric Flow & Circulation",
    desc: "Orchestrating double-height volumes, panoramic daylight corridors, and effortless circulation throughout the entire residence.",
    img: "/assets/pillar-spatial.jpg",
  },
];

export default function RenovationSection({ onOpenConsultation }: RenovationSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight || 800;
      const targetLine = windowHeight * 0.45; // trigger point near center of viewport

      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const cardCenter = rect.top + rect.height * 0.4;
        const distance = Math.abs(cardCenter - targetLine);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentService = services[activeIndex];

  return (
    <section
      id="renovation"
      className="py-20 sm:py-28 lg:py-36 bg-white text-slate-900 border-t border-slate-100 selection:bg-slate-900 selection:text-white"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Sticky Column */}
          <div className="lg:col-span-5 xl:col-span-5 lg:sticky lg:top-36 flex flex-col justify-between min-h-[340px] lg:min-h-[500px]">
            <div>
              {/* Category Pill & Index */}
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <span className="text-xs sm:text-sm font-mono tracking-wider uppercase text-slate-500 font-semibold">
                  Services
                </span>
                <span className="w-1 h-1 rounded-full bg-slate-400" />
                <span className="text-xs font-mono text-slate-400">
                  {currentService.num} / 0{services.length}
                </span>
              </div>

              {/* Dynamic Animated Title on Scroll */}
              <div className="min-h-[140px] sm:min-h-[160px] lg:min-h-[180px] flex flex-col justify-center">
                <h2
                  key={currentService.id}
                  className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[66px] font-heading font-medium tracking-[-0.03em] text-slate-900 leading-[1.08] animate-in fade-in slide-in-from-bottom-3 duration-500"
                >
                  {currentService.lines.map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < currentService.lines.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </h2>
              </div>

              {/* Dynamic Description on Scroll */}
              <p
                key={`desc-${currentService.id}`}
                className="text-xs sm:text-sm text-slate-600 max-w-sm mt-4 sm:mt-6 leading-relaxed animate-in fade-in duration-500"
              >
                {currentService.desc}
              </p>

              {/* Service Step Navigation Dots */}
              <div className="flex items-center gap-2 mt-6 sm:mt-8">
                {services.map((s, idx) => (
                  <button
                    key={s.id}
                    onClick={() => {
                      cardRefs.current[idx]?.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      });
                    }}
                    aria-label={`Jump to ${s.title}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeIndex === idx
                        ? "w-8 bg-slate-900"
                        : "w-2 bg-slate-200 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Bottom Link: View All */}
            <div className="pt-8 lg:pt-0">
              <button
                onClick={onOpenConsultation}
                className="group inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-900 hover:text-sky-600 transition-colors duration-200 cursor-pointer"
              >
                <span>View All</span>
                <span className="text-base leading-none group-hover:translate-x-1.5 transition-transform duration-200">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Cards Stack */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-10 sm:space-y-16">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`group relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl sm:rounded-3xl overflow-hidden bg-slate-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] border transition-all duration-500 cursor-pointer ${
                  activeIndex === index
                    ? "border-slate-400/60 ring-2 ring-slate-900/5"
                    : "border-slate-200/70 opacity-90"
                }`}
                onClick={onOpenConsultation}
              >
                <Image
                  src={service.img}
                  alt={service.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Number Badge */}
                <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-mono font-bold text-slate-900 shadow-sm">
                  {service.num}
                </div>

                {/* Bottom Overlay & Hover Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex flex-col justify-end p-6 sm:p-8">
                  <span className="text-[11px] uppercase tracking-widest font-mono text-white/80 mb-1">
                    {service.category}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-heading font-medium text-white tracking-tight">
                    {service.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
