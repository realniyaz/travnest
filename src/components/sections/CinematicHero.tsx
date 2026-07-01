"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Play, Compass, Flame, ShieldCheck, Award } from "lucide-react";

export function CinematicHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Hook into viewport scroll progress for premium cross-device scroll parallax orchestration
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // FIXED: Speeds mapped precisely. Negative values float elements UPward during down-scroll.
  const yStars = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const yMountainBack = useTransform(scrollYProgress, [0, 1], ["0%", "-12%"]);
  const yMountainFront = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacityFadeOut = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative h-[100vh] min-h-[650px] w-full overflow-hidden bg-background select-none"
    >
      {/* LAYER 1: Parallax Hero Image Canvas Base with Luxury Space & Aurora Overlays */}
      <motion.div 
        style={{ y: yStars }} 
        className="absolute inset-0 z-0 select-none pointer-events-none"
      >
        {/* Core Asset Background Image Integration */}
        <img 
          src="/hero-himalayas.jpg" 
          alt="Himalayan Mountain Range" 
          className="h-full w-full object-cover object-center scale-105"
        />
        
        {/* Dark Tint & Custom Ambient Aurora Glow Gradients layered on top of image */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ink)] via-black/40 to-black/30 mix-blend-multiply" />
        <div 
          className="absolute inset-0 opacity-80 mix-blend-screen"
          style={{ background: "var(--gradient-aurora)" }}
        />
        <div className="absolute inset-0 opacity-60 [background:radial-gradient(75%_55%_at_50%_60%,transparent,oklch(0.08_0.02_250)_85%)]" />

        {/* Dynamic Glowing Nebulae Clouds */}
        <div className="absolute top-[-10%] left-[-20%] h-[60vw] w-[60vw] rounded-full bg-luxury-deepBlue/10 mix-blend-screen filter blur-[120px] animate-pulse duration-[8s]" />
        <div className="absolute top-[20%] right-[-10%] h-[50vw] w-[50vw] rounded-full bg-luxury-teal/10 mix-blend-screen filter blur-[140px] animate-pulse duration-[12s]" />

        {/* Micro-twinkling stellar grid */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-[1.5px] w-[1.5px] rounded-full bg-white opacity-30 animate-ping"
              style={{
                left: `${(i * 93) % 100}%`,
                top: `${(i * 57) % 65}%`,
                animationDuration: `${4 + (i % 4)}s`,
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* LAYER 2: Centered Hero Copy System (Now floats up smoothly behind foreground peaks) */}
      <motion.div
        style={{ y: yText, opacity: opacityFadeOut }}
        className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 pt-12 text-center"
      >
        {/* Active Live Status Pill badge Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-4 py-1.5 backdrop-blur-md shadow-inner"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-luxury-mint opacity-75"></span>
            <span className="relative inline-flex h-2 w-2 rounded-full bg-luxury-mint"></span>
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/85 sm:text-xs">
            Live now — Spring in the Himalayas
          </span>
        </motion.div>

        {/* Editorial Brand H1 Header */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display mt-6 max-w-5xl text-4xl font-light leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          Discover the Himalayas <br />
          <span className="text-gradient-brand italic font-normal">like never before.</span>
        </motion.h1>

        {/* Descriptive Micro-Copy block */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-sm text-xs leading-relaxed text-white/60 sm:max-w-xl sm:text-sm md:text-base md:text-white/70"
        >
          Luxury stays, curated adventures and unforgettable memories across Uttarakhand and Himachal Pradesh — designed slowly, for travellers who notice.
        </motion.p>

        {/* Primary Call-to-Action Group Framework Linked Bindings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:gap-6"
        >
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-white px-8 py-4 text-xs font-semibold uppercase tracking-widest text-black shadow-2xl transition-transform duration-300 active:scale-95 cursor-pointer"
          >
            <span>Begin Journey</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/30 px-7 py-3.5 text-xs font-medium uppercase tracking-widest text-white backdrop-blur-md transition-all duration-300 hover:bg-white/5 hover:border-white/20 active:scale-95 cursor-pointer"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-colors">
              <Play className="h-2.5 w-2.5 fill-white text-white translate-x-[1px]" />
            </div>
            <span>Watch the experience</span>
          </a>
        </motion.div>
      </motion.div>

      {/* LAYER 3: Background Mountain Silhouette Layout */}
      <motion.svg
        style={{ y: yMountainBack, height: "48vmax" }}
        className="absolute bottom-0 left-0 w-full pointer-events-none z-20 opacity-90"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,420 L180,260 L320,360 L520,180 L720,340 L900,220 L1100,360 L1280,240 L1440,360 L1440,600 L0,600 Z"
          fill="url(#m1)"
        />
      </motion.svg>

      {/* LAYER 4: Foreground Mountain Silhouette Layout */}
      <motion.svg
        style={{ y: yMountainFront, height: "42vmax" }}
        className="absolute bottom-0 left-0 w-full pointer-events-none z-30"
        viewBox="0 0 1440 600"
        preserveAspectRatio="none"
      >
        <path
          d="M0,500 L160,400 L340,470 L520,360 L700,460 L880,380 L1080,470 L1260,400 L1440,470 L1440,600 L0,600 Z"
          fill="url(#m2)"
        />
      </motion.svg>

      {/* LAYER 5: Global Continuous Editorial Metric Strips Banner Layout */}
      <div className="absolute bottom-0 left-0 right-0 z-40 w-full bg-gradient-to-t from-black via-black/90 to-transparent pt-12 pb-6 px-4 md:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-4 gap-x-6 border-t border-white/5 pt-6 text-[10px] font-medium uppercase tracking-[0.2em] text-white/50 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
            <Award className="h-3.5 w-3.5 text-luxury-mint" />
            <span>AWWWARDS TRAVEL · 2026</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
            <Compass className="h-3.5 w-3.5 text-luxury-mint" />
            <span>FEATURED IN CONDÉ NAST</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
            <Flame className="h-3.5 w-3.5 text-luxury-mint" />
            <span>CARBON-POSITIVE ROUTES</span>
          </div>
          <div className="flex items-center gap-2 transition-colors duration-300 hover:text-white">
            <ShieldCheck className="h-3.5 w-3.5 text-luxury-mint" />
            <span>VETTED LOCAL GUIDES</span>
          </div>
        </div>
      </div>
    </section>
  );
}