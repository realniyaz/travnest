"use html";
"use client";

import React from "react";
import { Scale, FileText, ShieldAlert, CheckCircle } from "lucide-react";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/sections/Footer";

export default function DisputeResolutionPage() {
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
            <Scale className="h-3 w-3" /> Arbitration Protocol
          </div>
          
          <h1 className="font-display text-4xl sm:text-5xl font-light tracking-tight leading-[1.15]">
            Dispute Resolution & Legal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-[#00b4d8] font-normal italic">Mediation Frameworks.</span>
          </h1>
          
          <p className="text-xs sm:text-sm leading-relaxed text-zinc-400 max-w-xl font-light">
            Review our systematic process for addressing operational concerns, reservation friction, or regional policy disagreements fairly.
          </p>
        </div>

        {/* Soft elegant linear blend divider to shift into the light section smoothly */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#fdfcfb] to-transparent pointer-events-none" />
      </section>

      {/* SECTION 2: DISPUTE CONTENT WORKSPACE - CLEAN LIGHT EDITORIAL LOOK */}
      <section className="relative w-full bg-[#fdfcfb] px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Quick Navigation Overview / Sticky Label (4 cols) */}
          <div className="md:col-span-4 space-y-4 md:sticky md:top-28">
            <h2 className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
              Resolution Matrix
            </h2>
            <div className="p-4 rounded-xl border border-zinc-200 bg-transparent space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-zinc-900">
                <FileText className="h-3.5 w-3.5 text-[#00b4d8]" />
                <span>Document Version: 2026.1</span>
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed font-light">
                This blueprint sets down the mandatory steps required to resolve any operational friction through simple, structured mediation before pursuing court options.
              </p>
            </div>
          </div>

          {/* Right Column: Deep Legal Content Stack (8 cols) */}
          <div className="md:col-span-8 space-y-8 text-sm text-zinc-700 leading-relaxed font-light">
            
            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                1. Friendly Mediation First
              </h3>
              <p>
                At TravNest, we aim for absolute clarity and high-end hospitality. If any issues come up regarding your package details, stay expectations, or itinerary shifts, you agree to first bring your case directly to our operations team. We commit to reviewing your logs within 14 business days to settle things smoothly and amicably without escalating.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                2. Formal Internal Review
              </h3>
              <p>
                If simple mediation does not completely settle the issue, the matter can be forwarded into a formal review process. Our lead regional managers out of our basecamp hubs will review all contract details, recorded system messages, and local partner logs to deliver a fair, detailed resolution assessment.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                3. Mandatory Arbitration Terms
              </h3>
              <p>
                If the dispute cannot be settled through our internal reviews, both parties agree that the concern will be resolved exclusively through private, individual arbitration rather than moving to public courtrooms. This avoids long, complex legal procedures and ensures the case is evaluated fairly by a neutral, certified coordinator.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                4. Legal Jurisdiction Boundaries
              </h3>
              <p>
                This agreement and all reservation frameworks are governed explicitly by the local rules of the region where our key basecamp offices sit. Any necessary arbitration proceedings or local filings will happen solely under the jurisdiction of the courts in Dehradun, Uttarakhand, India.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="font-display text-lg font-semibold text-zinc-950 tracking-tight">
                5. Severe Liability Caps
              </h3>
              <p>
                To the maximum extent permitted by local law, the total cumulative liability of TravNest for any claims brought under this agreement is strictly limited to the exact amount paid by the traveler for that specific booking package slot. We are not liable for any secondary or indirect costs, such as separate flight changes or external personal arrangements.
              </p>
            </div>

            {/* Bottom Status Panel */}
            <div className="pt-6 border-t border-zinc-200 flex items-center gap-3 text-zinc-500 text-xs">
              <CheckCircle className="h-4 w-4 text-[#00b4d8]" />
              <span className="font-medium text-zinc-950">Protocol Status: Dispute guidelines active and unified across all packages.</span>
            </div>

          </div>

        </div>
      </section>

      {/* GLOBAL FOOTER */}
      <Footer />

    </main>
  );
}