"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Person {
  id: number;
  name: string;
  role: string;
  quote: string;
  portrait: string;
  artwork: string;
  thumb: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "INTEZAR AHMED",
    role: "PRINCIPAL ARCHITECT & FOUNDER",
    quote:
      "My practice centers on the physical architecture of memory and spatial light. The materials are layered, carved, and stripped back—bringing poetic clarity to human habitation.",
    portrait: "/intezar/intezar-ahmed.png",
    artwork: "/assets/art-artwork-1.jpg",
    thumb: "/intezar/intezar-ahmed.png",
  },
  {
    id: 2,
    name: "ELENA VASSILY",
    role: "HEAD OF BIOPHILIC DESIGN & CONCEPTS, PARIS",
    quote:
      "Architecture is the gentle conversation between human emotion and natural geometry. Every volume we sculpt allows sunlight and sea breezes to become essential living materials.",
    portrait: "/assets/art-architect-2.jpg",
    artwork: "/assets/pillar-biophilic.jpg",
    thumb: "/assets/art-architect-2.jpg",
  },
  {
    id: 3,
    name: "KENJIRO SATO",
    role: "MASTER ATELIER CRAFTSMAN & MODEL MAKER, JAPAN",
    quote:
      "From initial physical wood prototypes to millimeter-exact stone facades, true luxury is discovered in structural precision, proportion, and quiet material honesty.",
    portrait: "/assets/art-architect-3.jpg",
    artwork: "/assets/pillar-interior.jpg",
    thumb: "/assets/art-architect-3.jpg",
  },
];

export default function PeopleBehindArtSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const currentPerson = people[activeIndex];

  return (
    <section
      id="people-behind-art"
      className="py-20 sm:py-28 lg:py-36 bg-white text-slate-900 border-t border-slate-100 selection:bg-slate-900 selection:text-white select-none overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ================= LEFT COLUMN ================= */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 sm:space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-heading font-semibold uppercase tracking-tight text-slate-900 leading-[1.12]">
                THE PEOPLE
                <br />
                BEHIND THE ART
              </h2>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-sm mt-4 sm:mt-5 font-light">
                Each artist sees the world uniquely. This season, we highlight
                one whose vibe fits our collection perfectly.
              </p>
            </div>

            {/* Interactive Thumbnail Avatars */}
            <div className="flex items-center gap-3 pt-2">
              {people.map((person, idx) => (
                <button
                  key={person.id}
                  onClick={() => setActiveIndex(idx)}
                  aria-label={`View profile of ${person.name}`}
                  className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 cursor-pointer ${
                    activeIndex === idx
                      ? "border-slate-900 ring-2 ring-slate-900/20 scale-105 shadow-md opacity-100"
                      : "border-slate-200 opacity-60 hover:opacity-100 hover:border-slate-400"
                  }`}
                >
                  <Image
                    src={person.thumb}
                    alt={person.name}
                    fill
                    sizes="64px"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* ================= CENTER COLUMN (OVERLAPPING PORTRAIT & ARTWORK) ================= */}
          <div className="lg:col-span-4 flex justify-center py-4 sm:py-6">
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.09)] border border-slate-200/80">
              {/* Main Portrait */}
              <Image
                key={currentPerson.portrait}
                src={currentPerson.portrait}
                alt={currentPerson.name}
                fill
                sizes="(max-width: 768px) 280px, 340px"
                className="object-cover animate-in fade-in zoom-in-95 duration-500"
              />

              {/* Overlapping Secondary Artwork / Texture Card */}
              <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 w-[130px] sm:w-[155px] lg:w-[170px] aspect-square rounded-xl overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.22)] border-2 border-white z-10 bg-slate-200">
                <Image
                  key={`art-${currentPerson.id}`}
                  src={currentPerson.artwork}
                  alt={`${currentPerson.name} artwork`}
                  fill
                  sizes="170px"
                  className="object-cover animate-in fade-in duration-500"
                />
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (BIO & QUOTE) ================= */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-3 lg:pl-6">
            <div key={`info-${currentPerson.id}`} className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <h3 className="text-xl sm:text-2xl lg:text-[28px] font-heading font-semibold tracking-tight text-slate-900 uppercase">
                {currentPerson.name}
              </h3>

              <p className="text-[11px] sm:text-xs font-mono uppercase tracking-widest text-slate-500 italic mt-1.5 font-medium">
                {currentPerson.role}
              </p>

              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light mt-5 max-w-sm">
                &ldquo;{currentPerson.quote}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
