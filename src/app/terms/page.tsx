"use html";
"use client";

import React from "react";
import { Gavel, FileText, CheckCircle, ShieldAlert } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function TermsAndConditionsPage() {
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
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 self-start text-[10px] font-semibold uppercase tracking-widest text-[#00b4d8] backdrop-blur-md">
            <Gavel className="h-3 w-3" /> User Agreement
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-[1.15]">
            Terms of Service & Rules <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">of Mountain Conduct.</span>
          </h1>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-xl font-light">
            By browsing our platform, booking packages, or referencing our custom valley maps, you agree to follow these core guidelines.
          </p>
        </div>

        {/* Soft elegant linear blend divider to shift into the light section smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfcfb] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: TERMS CONTENT WORKSPACE - CLEAN LIGHT EDITORIAL LOOK */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Overview / Sticky Label (4 cols) */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Agreement Scope
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 bg-transparent space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <FileText className="h-3.5 w-3.5 text-[#00b4d8]" />
                <span>Revised: July 2026</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                This rulebook governs active booking sequences, site usage terms, and local code responsibilities when out on the trail.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Terms Content Stack (8 cols) */}
          <div className="md:col-span-8 space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                1. Acceptance of Terms
              </h3>
              <p>
                Welcome to TravNest. By accessing our specialized travel platform, curating local mountain itineraries, or scheduling regional valley tours, you acknowledge that you have read, understood, and consented to comply with these comprehensive rules. If you do not agree, please discontinue using our framework.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                2. Intended Platform Usage
              </h3>
              <p>
                Our services are designed explicitly to connect you with curated Himalayan stays, local walks, and carbon-positive packages. You agree to utilize this interface solely for authentic, legitimate bookings. Any systematic scraping, structural code mining, or simulated reservation injections targeting our operational systems is strictly prohibited.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                3. Accuracy of Booking Details
              </h3>
              <p>
                When coordinating journey profiles, travelers must provide true, complete, and accurate personal information variables. Registering with intentionally deceptive credentials, incorrect phone records, or invalid contact parameters can result in the swift cancellation of your upcoming stays without a refund.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                4. Local Mountain Code of Conduct
              </h3>
              <p>
                TravNest is deeply committed to preserving the fragile ecosystems of Uttarakhand and Himachal Pradesh. Travelers are expected to respect local guidelines, minimize plastic waste, and treat community families, regional guides, and fellow visitors with utmost dignity. Vandalizing historical architecture or ignoring regional environmental safety commands will immediately invalidate your itinerary support.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                5. Intellectual Property Rights
              </h3>
              <p>
                All structural UI components, proprietary photography logs, editorial descriptions, and custom maps visible on this site are the sole intellectual property of TravNest. Copying, republishing, or redistribution of our design systems without direct permission from our team is completely prohibited.
              </p>
            </div>

            {/* Bottom Status Panel */}
            <div className="pt-6 border-t border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs">
              <CheckCircle className="h-4 w-4 text-[#00b4d8]" />
              <span className="font-medium text-zinc-950">Agreement Status: Terms verified and active system-wide.</span>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}