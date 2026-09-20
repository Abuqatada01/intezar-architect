"use client";

import React from "react";
import Image from "next/image";
import { X, MapPin, Calendar, CheckCircle } from "lucide-react";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
  onOpenConsultation: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onOpenConsultation,
}: ProjectModalProps) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Dialog */}
      <div className="relative w-full max-w-2xl bg-white text-slate-900 rounded-2xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
          aria-label="Close modal"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Project Image */}
        <div className="relative h-64 sm:h-80 w-full shrink-0 bg-slate-900">
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 text-white">
            <span className="text-[11px] font-mono uppercase bg-white/20 backdrop-blur-md px-2.5 py-1 rounded">
              {project.category}
            </span>
            <h3 className="text-2xl font-heading font-semibold mt-2">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Project Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1">
          <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-600 mb-4 pb-4 border-b border-slate-200">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-sky-600" />
              {project.location}
            </span>
            <span>•</span>
            <span>Area: {project.area}</span>
            <span>•</span>
            <span>Year: {project.year}</span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
            {project.desc}
          </p>

          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-2">
              Architectural Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                Post-tensioned cantilever slabs
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                Double-glazed acoustic balustrades
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                Passive microclimate air ventilation
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                Integrated 4D BIM digital twin
              </div>
            </div>
          </div>

          <button
            onClick={() => {
              onClose();
              onOpenConsultation();
            }}
            className="w-full bg-slate-900 text-white font-semibold text-xs sm:text-sm py-3 px-6 rounded-lg hover:bg-black transition-transform active:scale-[0.98] shadow-lg flex items-center justify-center gap-2"
          >
            <span>Inquire About Similar Architecture</span>
            <span className="w-2 h-2 bg-white inline-block rounded-[0.5px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
