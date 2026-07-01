"use html";
"use client";

import { Portal } from "@/components/sections/Portal";
import { Navbar } from "@/components/ui/Navbar";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { Destinations } from "@/components/sections/Destinations";
import { Experiences } from "@/components/sections/Experiences";
import { Stays } from "@/components/sections/Stays";
import { Contact } from "lucide-react";
import ContactMini from "@/components/sections/contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <Portal>
      {/* 
        The main website wrapper container is fully revealed and interactive 
        only after the traveller initiates the cinematic loading gate phase.
      */}
      <main className="relative min-h-screen w-full bg-background overflow-x-hidden selection:bg-white/20">
        
        {/* Fixed blurred floating navigation system header featuring your custom brand logo */}
        <Navbar />

        {/* Deep immersive parallax viewport framework */}
        <CinematicHero />

        {/* Symmetrical responsive six-valleys destination layout with side-drawer booking forms */}
        <Destinations />

        {/* 
          High-contrast Light Editorial Landscape Section:
          Switches into crisp alabaster backdrops and charcoal typography, 
          underpinned by an interactive Three.js mathematical particle canvas.
        */}
        <Experiences />

        {/* Subsequent visual sections will stitch directly under the grid framework.
          e.g., <Stays />, <Footer />
        */}
        <Stays/>
        <ContactMini/>
        <Footer/>
        <div className="relative z-40 bg-background py-16 px-6 text-center text-white/20 text-[10px] tracking-[0.3em] border-t border-white/5">
          TRAVNEST HIMALAYAN ENGINE · STANDBY FOR DOWNSTREAM PROPERTY SLIDER
        </div>
        
      </main>
    </Portal>
  );
}