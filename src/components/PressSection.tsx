import React from "react";
import { Award, Star } from "lucide-react";

export default function PressSection() {
  const accolades = [
    { title: "Gold A' Design Award 2025", desc: "Best Architectural Sustainable Villa" },
    { title: "World Architecture Festival 2024", desc: "Future Residential Winner" },
    { title: "Architectural Digest Top 50", desc: "Global Living Masters Selection" },
    { title: "Mies Crown Hall Americas Finalist", desc: "Excellence in Structural Cantilevers" },
  ];

  return (
    <section id="press" className="py-20 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-400 block mb-2 font-mono">
            (RECOGNITION & CRITIQUE)
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white tracking-tight">
            International awards & studio press.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {accolades.map((acc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-lg bg-slate-800/60 border border-slate-700/80 hover:border-sky-500/50 transition-colors"
            >
              <Award className="w-6 h-6 text-sky-400 mb-3" />
              <h3 className="text-sm font-bold text-white mb-1.5 font-heading">
                {acc.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {acc.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
