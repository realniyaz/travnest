"use html";
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Eye, MapPin, Feather, Globe, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

const PILLARS = [
  {
    id: "slowness",
    title: "Relaxed Travel",
    desc: "We plan trips that let you stay in one beautiful spot long enough to truly enjoy it. No rushing through crowded checklists here.",
    icon: Feather
  },
  {
    id: "vetted",
    title: "100% Verified Places",
    desc: "Every glass dome, cozy treehouse, and mountain path we offer is personally checked and looked after by our local team.",
    icon: ShieldCheck
  },
  {
    id: "impact",
    title: "Supporting Locals",
    desc: "We protect the beautiful mountain communities of Uttarakhand and Himachal Pradesh by working directly with local families and neighborhood builders.",
    icon: Globe
  }
];

export default function AboutPage() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <main className="w-full min-h-screen bg-[#fdfcfb] text-zinc-900 overflow-x-hidden select-none">
      
      {/* GLOBAL HEADER */}
      <Navbar />

      {/* SECTION 1: FULL-BLEED IMAGE HERO HERO (NO FLOATING CARDS) */}
      <section className="relative w-full min-h-[80vh] sm:min-h-screen flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-zinc-950">
        
        {/* BACKGROUND IMAGE LAYER */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/about-hero.png" 
            alt="TravNest Immersive Background" 
            className="w-full h-full object-cover object-center opacity-50 brightness-[0.75]" 
          />
          {/* Flat smooth overlay gradient transitioning directly into the next content section */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdfcfb] via-transparent to-black/30 z-10 pointer-events-none" />
        </div>

        {/* HERO TYPOGRAPHY STACK rest directly on top of the image */}
        <div className="relative z-20 w-full max-w-4xl mx-auto flex flex-col space-y-6 text-left text-white">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#00b4d8] backdrop-blur-md">
              <Compass className="h-3 w-3" /> Our Story
            </div>
            
            {/* Small right-aligned minimalist badge containing logo.jpeg */}
            <div className="flex items-center gap-2 self-start sm:self-auto bg-black/40 border border-white/10 px-2.5 py-1 rounded-full backdrop-blur-sm">
              <span className="text-[9px] uppercase tracking-wider text-zinc-300 font-medium">Verified Core</span>
              <img src="/logo.jpeg" alt="TravNest Seal" className="h-4 w-4 rounded-full object-cover" />
            </div>
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight leading-[1.15]">
            Mountain travel, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">made simple and beautiful.</span>
          </h1>
          
          <p className="text-sm sm:text-base leading-relaxed text-zinc-300 max-w-2xl font-light">
            TravNest is a premium collection of stays and journeys built for travelers who want to slow down. We skip the noisy tourist spots to help you find truly peaceful corners in the hills.
          </p>

          <div className="flex items-center gap-2 text-xs text-zinc-400 font-medium pt-2">
            <MapPin className="h-4 w-4 text-[#00b4d8]" />
            <span>Lansdowne Basecamp</span>
          </div>

        </div>
      </section>

      {/* SECTION 2: CLEAN LIGHT NARRATIVE (NO DEP SHADOW BOXES) */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-6xl mx-auto space-y-24 sm:space-y-32">
          
          {/* THE PERSPECTIVE BLOCK */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 border-t border-zinc-200 pt-12 sm:pt-16">
            <div className="md:col-span-4">
              <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
                Our Perspective
              </h2>
            </div>
            <div className="md:col-span-8 space-y-5 text-sm sm:text-base text-zinc-700 leading-relaxed font-light">
              <p>
                We believe a great trip should feel like reading a good book—taken one beautiful chapter at a time. TravNest focuses on the little things: the crisp morning air in Kasol's pine woods, authentic stone architecture in Kumaon valleys, and the wide mountain skylines of Auli.
              </p>
              <p className="font-medium text-zinc-950">
                Our main offices run locally out of Dehradun, Lansdowne, and Manali. We do not just put up random internet listings. We inspect, check, and personally care for every single property so you get absolute comfort and safety along with unmatched mountain views.
              </p>
            </div>
          </div>

          {/* PRINCIPLES MODULE */}
          <div className="space-y-12">
            <div className="max-w-md">
              <h2 className="text-[10px] uppercase tracking-[0.25em] text-[#00b4d8] font-bold">
                Our Principles
              </h2>
              <h3 className="font-display text-2xl font-light text-zinc-950 mt-1 tracking-tight">
                How we build your journey.
              </h3>
            </div>

            {/* Flat architectural grid (No deep shadows, borders only) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div
                    key={pillar.id}
                    onMouseEnter={() => setHoveredCard(pillar.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className="group relative flex flex-col justify-between rounded-xl border border-zinc-200 bg-transparent p-6 transition-all duration-300 hover:border-zinc-400 hover:bg-zinc-50"
                  >
                    <div className="space-y-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0b2545]/5 text-[#0b2545] group-hover:bg-[#0b2545] group-hover:text-white transition-colors duration-300">
                        <Icon className="h-4 w-4" />
                      </div>
                      
                      <div className="space-y-1.5">
                        <h4 className="font-display text-base font-semibold text-zinc-950 tracking-tight">
                          {pillar.title}
                        </h4>
                        <p className="text-xs text-zinc-600 leading-relaxed font-light">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 pt-3 border-t border-zinc-100 flex items-center justify-between text-[10px] uppercase tracking-widest text-zinc-400 group-hover:text-zinc-900 font-semibold transition-colors">
                      <span>Vetted Concept</span>
                      <Eye className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}