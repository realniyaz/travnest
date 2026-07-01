"use client";

import React from "react";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative w-full bg-zinc-950 text-white border-t border-white/10 pt-16 pb-6 px-4 sm:px-6 lg:px-8 z-40 select-none selection:bg-[#00b4d8]/20">
      <div className="mx-auto max-w-7xl">
        
        {/* CORE FOOTER: 3-Column Architectural Framework */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/10">
          
          {/* COLUMN 1: Brand Concept & Narrative */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/20 bg-white/5">
                <img src="/logo.jpeg" alt="TravNest Logo" className="h-full w-full object-cover" />
              </div>
              <span className="font-display text-base font-light tracking-widest text-white">
                TravNest
              </span>
            </div>
            {/* Contrast Boost: Upgraded from text-white/50 to text-zinc-300 */}
            <p className="text-xs leading-relaxed text-zinc-300 max-w-sm">
              An elite Himalayan hospitality engine engineered for slowness. We curate intentional journeys, luxury valley stays, and carbon-positive routes for mindful explorers.
            </p>
          </div>

          {/* COLUMN 2: Contact Vectors & Coordinates */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#00b4d8] font-bold">
              Coordinates
            </h4>
            {/* Contrast Boost: Upgraded from text-white/60 to text-zinc-200 */}
            <div className="space-y-3 text-xs text-zinc-200">
              <a 
                href="tel:8368834331" 
                className="flex items-center gap-3 transition-colors duration-300 hover:text-[#00b4d8] group"
              >
                <Phone className="h-3.5 w-3.5 text-[#00b4d8] shrink-0" />
                <span className="underline decoration-transparent hover:decoration-current transition-all">
                  +91 83688 34331
                </span>
              </a>
              <a 
                href="mailto:contact.travnest@gmail.com" 
                className="flex items-center gap-3 transition-colors duration-300 hover:text-[#00b4d8] group"
                title="Mail support@travnest.com"
              >
                <Mail className="h-3.5 w-3.5 text-[#00b4d8] shrink-0" />
                <div className="flex flex-col">
                  <span>support@travnest.com</span>
                  {/* Contrast Boost: Increased helper email opacity */}
                  <span className="text-[9px] text-zinc-400 font-medium">via contact.travnest@gmail.com</span>
                </div>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="h-3.5 w-3.5 text-[#00b4d8] shrink-0" />
                <span>Lansdowne, Uttarakhand</span>
              </div>
            </div>
          </div>

          {/* COLUMN 3: Social Channels */}
          <div className="space-y-4">
            <h4 className="text-[10px] uppercase tracking-[0.25em] text-[#00b4d8] font-bold">
              Social Channels
            </h4>
            {/* Contrast Boost: Upgraded from text-white/40 to text-zinc-300 */}
            <p className="text-[11px] text-zinc-300">Follow frames from our road logs and seasonal field notes.</p>
            
            {/* Contrast Boost: Increased base visibility of icons from text-white/60 to text-zinc-300 */}
            <div className="flex items-center gap-4 pt-1">
              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-[#00b4d8]" aria-label="Instagram Profile">
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>

              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-[#00b4d8]" aria-label="Facebook Profile">
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>

              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-[#00b4d8]" aria-label="LinkedIn Profile">
                <svg className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a href="#" className="p-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 transition-all duration-300 hover:text-white hover:bg-white/10 hover:border-[#00b4d8]" aria-label="X Profile">
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* SECONDARY FOOTER: Legal Utility Line & Attribution Links */}
        {/* Contrast Boost: Upgraded text visibility from text-white/30 to text-zinc-400 */}
        <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] uppercase tracking-widest text-zinc-400 font-medium">
          <div>
            © 2026 TravNest Travel. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-zinc-300">
            <a href="/disclaimer" className="hover:text-[#00b4d8] transition-colors">Disclaimer</a>
            <a href="/privacy" className="hover:text-[#00b4d8] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#00b4d8] transition-colors">Terms</a>
            <a href="/booking-policy" className="hover:text-[#00b4d8] transition-colors">Booking Policy</a>
            <a href="/dispute-resolution" className="hover:text-[#00b4d8] transition-colors">Dispute Resolution</a>
          </div>

          <div className="flex items-center gap-1 font-semibold tracking-[0.15em] text-zinc-400">
            <span>Powered by</span>
            {/* Contrast Boost: Upgraded technical builder link to full text-white */}
            <a 
              href="https://triarchgroup.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:text-[#00b4d8] flex items-center gap-0.5 transition-colors uppercase"
            >
              Triarch Group
              <ExternalLink className="h-2 w-2" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}