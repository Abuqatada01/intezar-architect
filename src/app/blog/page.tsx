"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import InnerNavbar from "@/components/InnerNavbar";
import Footer from "@/components/Footer";
import ConsultationModal from "@/components/ConsultationModal";
import {
  Sparkles,
  ArrowRight,
  Clock,
  BookOpen,
  Calendar,
  Tag,
  CheckCircle2,
  X,
} from "lucide-react";

interface ArticleItem {
  id: string;
  category: "Strategy & BIM" | "Architecture" | "Materials & Stone" | "Turnkey Process";
  title: string;
  excerpt: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  featured?: boolean;
  content: string[];
}

const articles: ArticleItem[] = [
  {
    id: "traditional-construction-budgets",
    category: "Strategy & BIM",
    title: "Why Traditional Construction Keeps Getting Budgets Wrong",
    excerpt:
      "Unclear 2D blueprints and trade clashes cause 25–40% budget overruns on luxury homes. Discover how 5D BIM digital twin modeling locks every rupee before breaking ground.",
    readTime: "6 min read",
    date: "November 2026",
    author: "Architect Intezar Ahmed",
    image: "/assets/before.jpg",
    featured: true,
    content: [
      "In traditional residential construction, clients sign contracts based on ballpark approximations. When on-site excavations begin, unexpected soil bearing issues or uncoordinated plumbing runs collide with post-tensioned beams, forcing halts and costly redesigns.",
      "The 5D BIM (Building Information Modeling) approach resolves every pipe, conduit, and rebar overlap digitally in 3D before pouring a single bucket of concrete. Furthermore, material quantities are locked down to millimeter precision.",
      "By eliminating on-site re-work and material wastage, homeowners maintain strict financial predictability throughout the 14-month construction lifecycle.",
    ],
  },
  {
    id: "passive-solar-microclimate-villas",
    category: "Architecture",
    title: "Designing with the Sun: Passive Microclimates in Modern Villas",
    excerpt:
      "How intelligent solar orientation, deep cantilever overhangs, and cross-ventilation courtyards reduce summer air-conditioning loads by up to 35% without sacrificing glass.",
    readTime: "5 min read",
    date: "October 2026",
    author: "Architect Intezar Ahmed",
    image: "/project/project (1).png",
    content: [
      "Modern luxury architecture often faces criticism for excessive glass that turns living rooms into heat traps during harsh subcontinental summers. The secret to enduring comfort lies in microclimate orientation.",
      "By positioning expansive floor-to-ceiling glass on the north and shielded east facades, and employing deep parametric concrete cantilevers on south-facing exposures, direct thermal solar gain is deflected while retaining breathtaking daylight.",
      "Internal landscaped courtyards with shallow reflective water features introduce evaporative cooling, naturally circulating fresh air throughout double-height volumes.",
    ],
  },
  {
    id: "italian-marble-vs-local-travertine",
    category: "Materials & Stone",
    title: "Italian Calacatta vs. Local Travertine: An Honest Stone Guide",
    excerpt:
      "A pragmatic analysis of imported stone vs. regional limestone, examining porosity, maintenance routines, bookmatching, and realistic rate indices per square foot.",
    readTime: "7 min read",
    date: "October 2026",
    author: "Architect Intezar Ahmed",
    image: "/assets/renovation-2.jpg",
    content: [
      "Every luxury homeowner desires statement stone hearths and master bath slabs. However, choosing imported Italian Calacatta or Statuario requires understanding porosity and sealant technology.",
      "Local honed travertine offers extraordinary tactile warmth, high compressive strength, and natural slip resistance at approximately 40% of the cost of imported Italian marble. When combined in deliberate architectural zoning, it yields an understated, museum-grade aesthetic.",
      "Our atelier hand-selects every quarry batch, verifying density and vein consistency before cutting and installation.",
    ],
  },
  {
    id: "column-free-living-spans",
    category: "Architecture",
    title: "The Engineering Behind 40-Foot Column-Free Living Spans",
    excerpt:
      "Post-tensioned slab technology and vibration harmonics: How we create seamless, unobstructed living pavilions with floating structural glass walls.",
    readTime: "5 min read",
    date: "September 2026",
    author: "Architect Intezar Ahmed",
    image: "/assets/terascape-hero-2.jpg",
    content: [
      "Nothing conveys spatial serenity quite like an uninterrupted 40-foot living space opening onto gardens without intermediate concrete columns obstructing sightlines.",
      "Achieving this requires post-tensioned (PT) structural tendons tensioned after concrete curing. This technique minimizes slab deflection, slims beam depths, and ensures zero micro-vibration under dynamic foot traffic.",
      "Coordinating PT anchorages with recessed motorized curtain tracks is where true architectural mastery separates ordinary villas from landmark estates.",
    ],
  },
  {
    id: "turnkey-contract-guarantees",
    category: "Turnkey Process",
    title: "From Tracing Paper to Key Handover: What Turnkey Really Means",
    excerpt:
      "Understanding single-source accountability. Why hiring separate architects, decorators, and contractors leads to finger-pointing and how unified turnkey protects you.",
    readTime: "4 min read",
    date: "September 2026",
    author: "Architect Intezar Ahmed",
    image: "/assets/after.jpg",
    content: [
      "When a client hires an independent architect and separately tenders to an outside builder, every minor drawing ambiguity becomes an excuse for contractor variation claims.",
      "In our turnkey execution model, the atelier assumes 100% contractual responsibility for structural integrity, master masonry, joinery fitting, and milestone deadlines.",
      "The client enjoys a single accountable relationship, weekly milestone photo reports, and locked cost guarantees.",
    ],
  },
  {
    id: "double-height-acoustic-grandeur",
    category: "Architecture",
    title: "Double-Height Voids: Balancing Acoustic Warmth and Visual Grandeur",
    excerpt:
      "How to prevent cathedral-like echo chambers in high-ceiling living rooms through concealed acoustic plaster, slatted timber millwork, and balanced volume.",
    readTime: "4 min read",
    date: "August 2026",
    author: "Architect Intezar Ahmed",
    image: "/assets/pillar-spatial.jpg",
    content: [
      "A 24-foot double-height foyer creates immediate emotional awe, but without acoustic pre-planning, conversation echoes and television sound can bleed throughout upper bedroom galleries.",
      "We integrate discreet sound absorption layers: micro-perforated timber ceiling slats, fabric-wrapped acoustic panels concealed behind art walls, and textured mineral lime plasters.",
      "The result is a cathedral-scaled volume that feels intimate, quiet, and peaceful to live in every day.",
    ],
  },
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<ArticleItem | null>(null);
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const categories = [
    "All",
    "Strategy & BIM",
    "Architecture",
    "Materials & Stone",
    "Turnkey Process",
  ];

  const filteredArticles =
    selectedCategory === "All"
      ? articles
      : articles.filter((a) => a.category === selectedCategory);

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <main className="min-h-screen bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      {/* Top Universal Navbar */}
      <InnerNavbar
        activePath="/blog"
        onOpenConsultation={() => setIsConsultOpen(true)}
      />

      {/* Hero Header */}
      <section className="py-20 sm:py-28 lg:py-36 bg-[#f8f9fb] border-b border-slate-200/80">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-slate-200/80 border border-slate-300 text-slate-800 px-3.5 py-1 rounded-full text-xs font-mono font-medium mb-6">
              <BookOpen className="w-3.5 h-3.5 text-sky-600" />
              <span>THE ATELIER JOURNAL & MONOGRAPHS</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[62px] font-heading font-semibold text-slate-950 tracking-tight leading-[1.08] mb-6">
              Architectural strategy, costing honesty, and spatial craft.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed max-w-2xl">
              In-depth essays, engineering breakthroughs, and material guides written directly by Architect Intezar Ahmed for discerning homeowners and developers.
            </p>
          </div>
        </div>
      </section>

      {/* Main Journal Body */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-12 space-y-16">
          {/* Featured Lead Article */}
          <div
            onClick={() => setActiveArticle(featuredArticle)}
            className="bg-[#121214] text-white rounded-[28px] sm:rounded-[36px] overflow-hidden border border-zinc-800 shadow-2xl cursor-pointer group transition-all hover:border-zinc-700"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[420px] bg-slate-900 overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-transparent to-[#121214]" />
              </div>

              <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-mono text-amber-400 mb-4">
                    <span className="uppercase tracking-wider font-semibold">
                      {featuredArticle.category}
                    </span>
                    <span>•</span>
                    <span className="text-slate-400">{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-semibold tracking-tight text-white mb-4 leading-snug group-hover:text-amber-300 transition-colors">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-xs sm:text-sm text-slate-400 font-light leading-relaxed line-clamp-3">
                    {featuredArticle.excerpt}
                  </p>
                </div>

                <div className="pt-8 mt-8 border-t border-zinc-800 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">{featuredArticle.author}</span>
                  <span className="text-white font-medium inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    Read Article ↗
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-950 text-white font-semibold shadow-sm"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between cursor-pointer group"
              >
                <div>
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                    <div className="absolute top-3.5 right-3.5 bg-white/90 backdrop-blur-md text-[10px] font-mono px-3 py-1 rounded-full text-slate-800 border border-white">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 sm:p-7">
                    <div className="flex items-center gap-2 text-[11px] font-mono text-slate-400 mb-2.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                      <span>•</span>
                      <span>{article.date}</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-heading font-semibold text-slate-900 group-hover:text-sky-700 transition-colors leading-snug mb-3">
                      {article.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-slate-600 font-light leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                  </div>
                </div>

                <div className="px-6 sm:px-7 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{article.author}</span>
                  <span className="text-slate-900 font-medium group-hover:text-sky-700 inline-flex items-center gap-1">
                    Read ↗
                  </span>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter / Monograph Subscription Banner */}
          <div className="p-8 sm:p-12 rounded-[32px] bg-slate-50 border border-slate-200 text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 font-semibold block">
              ATELIER MONOGRAPHS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-slate-950">
              Receive quarterly architectural essays & costing briefs.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-md mx-auto">
              Curated by Architect Intezar Ahmed. Zero marketing noise; strictly spatial analysis, stone market updates, and structural engineering studies.
            </p>
            {!isSubscribed ? (
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-2 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full bg-white px-4 py-3 rounded-full border border-slate-300 text-xs sm:text-sm outline-none focus:border-slate-900"
                />
                <button
                  type="button"
                  onClick={() => setIsSubscribed(true)}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer shadow-md"
                >
                  Subscribe
                </button>
              </div>
            ) : (
              <div className="pt-3 text-xs font-mono text-emerald-700 bg-emerald-50 border border-emerald-200 py-2.5 px-4 rounded-full inline-block">
                ✓ Thank you for subscribing to Atelier Monographs.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/75 backdrop-blur-md"
            onClick={() => setActiveArticle(null)}
          />

          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-10 z-10 shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveArticle(null)}
              aria-label="Close article"
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-6">
              <div>
                <span className="inline-block bg-sky-100 text-sky-800 text-xs font-mono font-medium px-3 py-1 rounded-full mb-3">
                  {activeArticle.category}
                </span>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-950 leading-tight">
                  {activeArticle.title}
                </h2>
                <div className="flex items-center gap-4 text-xs font-mono text-slate-500 mt-3 pt-3 border-t border-slate-100">
                  <span>By {activeArticle.author}</span>
                  <span>•</span>
                  <span>{activeArticle.date}</span>
                  <span>•</span>
                  <span>{activeArticle.readTime}</span>
                </div>
              </div>

              <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 font-light leading-relaxed">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-500 font-light">
                  Have questions about this approach for your plot?
                </span>
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    setIsConsultOpen(true);
                  }}
                  className="w-full sm:w-auto bg-slate-900 hover:bg-black text-white px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all"
                >
                  Consult with Intezar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <Footer onOpenConsultation={() => setIsConsultOpen(true)} />

      {/* Consultation Modal */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />
    </main>
  );
}

