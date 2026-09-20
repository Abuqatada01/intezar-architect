import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Activity, HardHat } from "lucide-react";

export default function BimSection() {
  const metrics = [
    { value: "0.2mm", label: "Structural BIM Tolerance" },
    { value: "100%", label: "Clash-Free Mechanical Layout" },
    { value: "35%", label: "Faster Turnkey Delivery" },
    { value: "150+", label: "Estates Worldwide" },
  ];

  const features = [
    "LIDAR 3D laser-point topography mapping for cliffside precision",
    "Finite element analysis (FEA) for ultra-wide cantilever overhangs",
    "Full MEP clash-detection and thermal insulation simulation",
    "Real-time client mobile dashboard with daily site telemetry",
  ];

  return (
    <section id="bim" className="py-24 bg-slate-900 text-white border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual */}
          <div className="relative h-[420px] sm:h-[500px] rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
            <Image
              src="/assets/pillar-engineering.jpg"
              alt="BIM and Engineering precision"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />
            
            {/* Overlay Metric Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-lg">
              <div className="flex items-center gap-3 text-sky-400 mb-2">
                <Activity className="w-5 h-5 animate-pulse" />
                <span className="text-xs uppercase font-mono font-bold tracking-wider">
                  4D BIM Digital Twin Model
                </span>
              </div>
              <p className="text-xs text-slate-200 leading-relaxed">
                Zero guesswork. Every bolt, reinforcement bar, and acoustic glass seam is pre-simulated prior to groundbreaking.
              </p>
            </div>
          </div>

          {/* Right Details */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.14em] text-sky-400 block mb-2 font-mono">
              (ENGINEERING EXCELLENCE)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-semibold text-white tracking-tight mb-6">
              BIM 5D precision.
              <br />
              Zero construction friction.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              We eliminate traditional contractor overrun by utilizing full digital twin parametric modeling. Our structural engineers, interior artisans, and landscape architects operate on a single synchronous ledger.
            </p>

            {/* Checklist */}
            <div className="space-y-3.5 mb-10">
              {features.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800">
              {metrics.map((m, idx) => (
                <div key={idx} className="text-center sm:text-left">
                  <div className="text-2xl sm:text-3xl font-heading font-bold text-white tracking-tight">
                    {m.value}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1 uppercase tracking-wider">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
