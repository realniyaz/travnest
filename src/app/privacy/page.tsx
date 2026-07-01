"use html";
"use client";

import React from "react";
import { ShieldCheck, FileText, Lock, EyeOff } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
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
            <ShieldCheck className="h-3 w-3" /> Privacy Framework
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-[1.15]">
            Privacy Policy & Data <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">Protection Safeguards.</span>
          </h1>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-xl font-light">
            We values your trust. This document outlines how we secure, process, and respect your personal variables when interacting with our systems.
          </p>
        </div>

        {/* Soft elegant linear blend divider to shift into the light section smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfcfb] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: PRIVACY CONTENT WORKSPACE - CLEAN LIGHT EDITORIAL LOOK */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Overview / Sticky Label (4 cols) */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Policy Scope
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 bg-transparent space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <FileText className="h-3.5 w-3.5 text-[#00b4d8]" />
                <span>Effective: July 2026</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                This legal declaration details our commitment to absolute data minimization, secure cloud transmission pipelines, and explicit privacy protocols.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Privacy Content Stack (8 cols) */}
          <div className="md:col-span-8 space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                1. Information We Collect
              </h3>
              <p>
                We only gather essential operational details necessary to coordinate high-end Himalayan itineraries. This includes contact variables provided directly during registration, structural party counts, and specific stay selections. We strictly adhere to data minimization principles, ensuring no unnecessary analytical telemetry or secondary behavioral metrics are quietly tracked.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                2. Storage Security & Handoff
              </h3>
              <p>
                Your personal journey records are transmitted across the web using encrypted SSL layers and managed on heavily isolated cloud production environments. Booking details processed for our Uttarakhand and Himachal Pradesh packages are kept strictly confidential. They are never sold, rented, or distributed to outside programmatic ad networks.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                3. Third-Party Vendor Data Node Boundaries
              </h3>
              <p>
                To provide premium hospitality experiences, necessary journey details are selectively passed down to verified local operators—including regional transportation partners and the coordinators looking after your glass domes or pine treehouses. These native stakeholders receive only the specific variables required to manage your active booking securely.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                4. Cookies & Transient Metrics
              </h3>
              <p>
                Our server configurations rely on lightweight session keys to keep user options stable while building itineraries. We do not integrate complex behavioral tracking matrices or cross-site fingerprinting tracking code inside our primary layouts, ensuring your architectural browsing sessions remain entirely clean and anonymous.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                5. User Rights & Data Purges
              </h3>
              <p>
                You retain complete governance over your digital profile history. At any point, travelers have the full right to request a complete system sweep, forcing our database records to entirely purge active numbers, email indexes, and past stay records permanently from the network array.
              </p>
            </div>

            {/* Bottom Status Panel */}
            <div className="pt-6 border-t border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs">
              <Lock className="h-4 w-4 text-[#00b4d8]" />
              <span className="font-medium text-zinc-950">System Status: Fully Encrypted Privacy Tunnel Active.</span>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}