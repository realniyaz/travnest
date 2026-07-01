"use html";
"use client";

import React from "react";
import { CalendarCheck, FileText, BadgePercent, ShieldCheck } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function BookingPolicyPage() {
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
            <CalendarCheck className="h-3 w-3" /> Reservation Blueprint
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-[1.15]">
            Booking Policy, Cancellations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">& Refund Frameworks.</span>
          </h1>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-xl font-light">
            Please review our reservation terms, confirmation parameters, and seasonal cancellation timelines before staging your journey window.
          </p>
        </div>

        {/* Soft elegant linear blend divider to shift into the light section smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfcfb] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: POLICY CONTENT WORKSPACE - CLEAN LIGHT EDITORIAL LOOK */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Overview / Sticky Label (4 cols) */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Policy Overview
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 bg-transparent space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <FileText className="h-3.5 w-3.5 text-[#00b4d8]" />
                <span>Active Since: July 2026</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                This matrix outlines validation sequences, advance booking slots, and clear cancellation rules for all Himalayan stay segments.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Policy Content Stack (8 cols) */}
          <div className="md:col-span-8 space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                1. Confirmation & Verification Sequence
              </h3>
              <p>
                All custom itineraries and property reservations staged through the TravNest platform require explicit verification from our basecamp operators. A reservation is considered finalized only when the required deposit structure is processed and a secure booking voucher code is issued to your registered communication channel.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                2. Standard Cancellation Window Matrix
              </h3>
              <p>
                Because we work directly with local families and maintain limited luxury properties in fragile regions like Auli and Kasol, cancellations impact our native partners significantly. Our refund tiers are structured as follows:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 pt-1 text-zinc-600 text-xs">
                <li><strong>15+ Days Before Check-in:</strong> Full refund minus a standard 10% processing and staging charge.</li>
                <li><strong>7 to 14 Days Before Check-in:</strong> 50% refund of the total scheduled booking allocation.</li>
                <li><strong>Less than 7 Days Before Check-in:</strong> Completely non-refundable, as local spaces cannot be easily re-allocated at short notice.</li>
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                3. Date Modifications & Rescheduling
              </h3>
              <p>
                Travelers may request to shift their itinerary timelines up to 10 days before their check-in date, subject to active space availability inside our glass domes, treehouses, or villas. Rescheduling requests made within the 10-day window are handled selectively and may incur custom adjustments based on local seasonal rates.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                4. Force Majeure & Weather Exceptions
              </h3>
              <p>
                High-altitude travel across Uttarakhand and Himachal Pradesh can occasionally be affected by sudden climate shifts, extreme cloudbursts, or unexpected land disruptions. If municipal checkposts issue mandatory evacuation alerts or seal route networks completely, TravNest will credit your payments toward alternative flexible travel slots within a 12-month window.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                5. Check-in Requirements & Verification
              </h3>
              <p>
                Guests must present identical identification credentials at check-in that match the parameters listed on their booking voucher. Property check-in and check-out times are set locally to ensure our native maintenance teams have ample room to perfectly clean and sanitize each boutique mountain space before you arrive.
              </p>
            </div>

            {/* Bottom Status Panel */}
            <div className="pt-6 border-t border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs">
              <ShieldCheck className="h-4 w-4 text-[#00b4d8]" />
              <span className="font-medium text-zinc-950">Policy Verification: Staged transparently for elite traveler clarity.</span>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}