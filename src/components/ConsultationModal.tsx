"use client";

import React, { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({
  isOpen,
  onClose,
}: ConsultationModalProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    scope: "villa",
    notes: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-md transition-opacity"
        onClick={handleReset}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-white text-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 z-10 animate-in fade-in zoom-in-95 duration-200">
        {/* Close button */}
        <button
          onClick={handleReset}
          className="absolute top-5 right-5 text-slate-400 hover:text-slate-900 transition-colors p-1"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-sky-600 font-mono block mb-1">
                (ATELIER INQUIRY)
              </span>
              <h3 className="text-2xl font-heading font-semibold text-slate-900">
                Start a project with Architect Intezar
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Tell us about your residential vision, location, and scale.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Eleanor Vance"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="eleanor@domain.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+1 (555) 000-0000"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Project Location *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Dubai, London, Costa Brava..."
                    value={formData.location}
                    onChange={(e) =>
                      setFormData({ ...formData, location: e.target.value })
                    }
                    className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Scope
                </label>
                <select
                  value={formData.scope}
                  onChange={(e) =>
                    setFormData({ ...formData, scope: e.target.value })
                  }
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 bg-white"
                >
                  <option value="villa">Luxury Villa / Private Estate</option>
                  <option value="penthouse">Sky Duplex Penthouse</option>
                  <option value="interiors">Complete Turnkey Interiors</option>
                  <option value="commercial">Boutique Atelier / Gallery</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Project Notes & Timeline
                </label>
                <textarea
                  rows={3}
                  placeholder="Estimated square footage, site status, or bespoke requirements..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white font-semibold text-sm py-3 px-6 rounded-lg flex items-center justify-center gap-3 hover:bg-black transition-transform active:scale-[0.98] mt-2 shadow-lg"
              >
                <span>Submit Atelier Inquiry</span>
                <span className="w-2.5 h-2.5 bg-white inline-block rounded-[1px]" />
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="w-12 h-12 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="text-2xl font-heading font-semibold text-slate-900 mb-2">
              Inquiry Dispatched
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mb-6 max-w-sm mx-auto">
              Our executive atelier will review your architectural brief and contact you within 24 hours.
            </p>
            <button
              onClick={handleReset}
              className="bg-slate-900 text-white text-xs font-semibold py-2.5 px-6 rounded-full hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
