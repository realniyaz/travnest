"use html";
"use client";

import React from "react";
import { ShieldAlert, FileText, Scale, ArrowUpRight } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function DisclaimerPage() {
  return (
    <main className="w-full min-h-screen bg-[#fdfcfb] text-zinc-900 overflow-x-hidden select-none">
      
      {/* GLOBAL HEADER */}
      <Navbar />

      {/* SECTION 1: HERO VIEWPORT - DARK NAVY LUXURY AESTHETIC */}
      <section className="relative w-full min-h-[40vh] sm:min-h-[45vh] flex items-center pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#051329]">
        
        {/* Subtle geometric light trace background lines */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#00b4d8] to-transparent rounded-full blur-3xl opacity-30" />
        </div>

        {/* HERO TYPOGRAPHY STACK */}
        <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col space-y-4 text-left text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 RegalTextAccent self-start text-[10px] font-semibold uppercase tracking-widest text-[#00b4d8] backdrop-blur-md">
            <ShieldAlert className="h-3 w-3" /> Legal Information
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-[1.15]">
            Terms of Disclaimer & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">Liability Limitations.</span>
          </h1>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-xl font-light">
            Please read this legal overview carefully before referencing our routes, booking valley stays, or executing regional itineraries.
          </p>
        </div>

        {/* Soft elegant linear blend divider to shift into the light section smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfcfb] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: LEGAL TEXT WORKSPACE - CLEAN LIGHT EDITORIAL LOOK */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Overview / Sticky Label (4 cols) */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Document Scope
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 bg-transparent space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <FileText className="h-3.5 w-3.5 text-[#00b4d8]" />
                <span>Last Updated: July 2026</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                This framework defines liability parameters regarding our curated mountain trails, itineraries, and hospitality partner nodes.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Legal Content Stack (8 cols) */}
          <div className="md:col-span-8 space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                1. Information Accuracy
              </h3>
              <p>
                All informational text materials, custom map pathways, route coordinates, and valley guides provided by TravNest are meant for general educational references only. While we actively vet each node directly from our local basecamps, regional conditions, trail layouts, and alpine weather patterns can change instantly. We cannot completely guarantee absolute runtime accuracy.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                2. Assumption of Risk
              </h3>
              <p>
                Travel through high-altitude zones—including locations across Uttarakhand and Himachal Pradesh like Auli, Kasol, and Manali—carries inherent physical risks. By embarking on these routes or staying at our vetted properties, you explicitly assume all associated safety risks, including micro-climate shifts, altitude sickness, wildlife encounters, or random road closures.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                3. Third-Party Limitations
              </h3>
              <p>
                TravNest operates as an elite hospitality aggregator and direct experience curator. We partner with local mountain families, cottage owners, and independent transport operators. TravNest is not directly liable for unforeseen changes, logistical failures, or personal asset losses caused by third-party vendor providers during your custom journey window.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                4. Local Regulation Compliance
              </h3>
              <p>
                Travelers are entirely responsible for securing valid personal IDs, dynamic travel permits, and medical clearances needed to access protected border passes or high-altitude terrain segments. You are required to fully respect all local environmental guidelines and safety rules set by municipal operators and forest checkpoint authorities.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}