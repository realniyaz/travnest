"use client";

import { motion, AnimatePresence } from "framer-motion"; // Note: Updated to standard framer-motion import syntax for maximum cross-environment compatibility
import { useEffect, useState } from "react";
import { Mountain } from "lucide-react";

type Phase = "loading" | "ready" | "opening" | "done";

export function Portal({ children }: { children: React.ReactNode }) {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);

  // Prevent SSR hydration mismatch for randomized values and window calculations
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (phase !== "loading") return;
    let p = 0;
    const id = setInterval(() => {
      // Smooth dynamic incremental step simulation
      p += Math.random() * 14 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(id);
        setProgress(100);
        setTimeout(() => setPhase("ready"), 400); // Polished pacing break
      } else {
        setProgress(p);
      }
    }, 160);
    return () => clearInterval(id);
  }, [phase]);

  const begin = () => {
    setPhase("opening");
    setTimeout(() => setPhase("done"), 1800); // Syncs with radial expansion duration
  };

  if (!mounted) return null;

  return (
    <>
      {/* Main Website Wrapper Container */}
      <div
        aria-hidden={phase !== "done"}
        style={{
          opacity: phase === "done" ? 1 : 0,
          transition: "opacity 800ms cubic-bezier(0.25, 1, 0.5, 1)",
          pointerEvents: phase === "done" ? "auto" : "none",
        }}
      >
        {children}
      </div>

      {/* Cinematic Portal Shield Layer */}
      <AnimatePresence mode="wait">
        {phase !== "done" && (
          <motion.div
            key="portal-container"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] h-screen w-screen overflow-hidden bg-[var(--ink)] touch-none select-none"
          >
            {/* Ambient Aurora Sky Layer */}
            <div
              className="absolute inset-0 transition-opacity duration-1000"
              style={{ 
                background: "var(--gradient-aurora)",
                opacity: phase === "opening" ? 0.2 : 1 
              }}
            />
            <div className="absolute inset-0 opacity-50 [background:radial-gradient(70%_50%_at_50%_70%,transparent,oklch(0.05_0.01_250)_80%)]" />

            {/* Micro-Animated Starfield */}
            <div className="absolute inset-0 pointer-events-none">
              {Array.from({ length: 45 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="absolute h-[1.5px] w-[1.5px] rounded-full bg-white md:h-[2px] md:w-[2px]"
                  style={{
                    left: `${(i * 73) % 100}%`,
                    top: `${(i * 41) % 65}%`,
                  }}
                  animate={{ 
                    opacity: phase === "opening" ? 0 : [0.15, 0.85, 0.15],
                    scale: phase === "opening" ? 0.5 : [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 3 + (i % 4),
                    repeat: phase === "opening" ? 0 : Infinity,
                    delay: (i % 5) * 0.2,
                  }}
                />
              ))}
            </div>

            {/* Vector Mountain Silhouette Horizon Layout */}
            <svg
              className="absolute bottom-0 left-0 w-full transform pointer-events-none transition-transform duration-[1500ms] ease-out"
              style={{ 
                height: "55vmax",
                transform: phase === "opening" ? "scale(1.08) translateY(10%)" : "scale(1) translateY(0%)"
              }}
              viewBox="0 0 1440 600"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="mountain-back" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.38 0.12 250)" stopOpacity="0.45" />
                  <stop offset="1" stopColor="oklch(0.08 0.02 250)" />
                </linearGradient>
                <linearGradient id="mountain-front" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="oklch(0.42 0.11 175)" stopOpacity="0.5" />
                  <stop offset="1" stopColor="oklch(0.08 0.02 250)" />
                </linearGradient>
              </defs>
              <motion.path
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
                d="M0,420 L180,260 L320,360 L520,180 L720,340 L900,220 L1100,360 L1280,240 L1440,360 L1440,600 L0,600 Z"
                fill="url(#mountain-back)"
              />
              <motion.path
                initial={{ y: 120, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                d="M0,500 L160,400 L340,470 L520,360 L700,460 L880,380 L1080,470 L1260,400 L1440,470 L1440,600 L0,600 Z"
                fill="url(#mountain-front)"
              />
            </svg>

            {/* Immersive Spreading Light Tunnel Portal Shockwave Ring */}
            <AnimatePresence>
              {phase === "opening" && (
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                  initial={{ width: 0, height: 0, opacity: 1 }}
                  animate={{
                    width: "300vmax",
                    height: "300vmax",
                    opacity: 0,
                  }}
                  transition={{ duration: 1.8, ease: [0.65, 0, 0.15, 1] }}
                  style={{
                    background:
                      "radial-gradient(circle, oklch(0.65 0.15 175 / 0.95) 0%, oklch(0.45 0.15 250 / 0.4) 50%, transparent 75%)",
                    boxShadow:
                      "0 0 150px 60px oklch(0.65 0.15 175 / 0.6), inset 0 0 100px oklch(1 0 0 / 0.4)",
                  }}
                />
              )}
            </AnimatePresence>

            {/* Operational Typography Focus Center Wrapper */}
            <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 md:px-12">
              <AnimatePresence mode="wait">
                
                {/* STATE A: Preloader Sequence Grid */}
                {phase === "loading" && (
                  <motion.div
                    key="portal-loader-layout"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -15 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                      className="mb-6 grid h-16 w-16 place-items-center rounded-full border border-white/10 bg-[var(--gradient-brand)] shadow-elegant md:h-20 md:w-20"
                    >
                      <Mountain className="h-7 w-7 text-white md:h-9 md:w-9" />
                    </motion.div>
                    <p className="font-display text-2xl font-light tracking-wide text-white/90 md:text-4xl lg:text-5xl">
                      Awakening the Himalayas
                    </p>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.3em] text-white/40 md:text-xs">
                      TravNest · Constructing Interface
                    </p>
                    <div className="mt-8 h-[2px] w-48 overflow-hidden rounded-full bg-white/5 md:w-64">
                      <motion.div
                        className="h-full bg-[var(--gradient-brand)]"
                        style={{ width: `${progress}%` }}
                        transition={{ ease: "easeOut" }}
                      />
                    </div>
                    <p className="mt-3 font-mono text-[11px] text-white/30 tracking-wider">
                      {Math.floor(progress)}%
                    </p>
                  </motion.div>
                )}

                {/* STATE B: Action Gate Loaded Welcome Matrix Screen Layout */}
                {(phase === "ready" || phase === "opening") && (
                  <motion.div
                    key="portal-ready-layout"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ 
                      opacity: phase === "opening" ? 0 : 1, 
                      y: phase === "opening" ? -20 : 0,
                      scale: phase === "opening" ? 0.96 : 1
                    }}
                    transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                    className="flex flex-col items-center text-center"
                  >
                    <motion.p
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                      className="text-[10px] uppercase tracking-[0.4em] text-white/40 md:text-xs"
                    >
                      Welcome, traveller
                    </motion.p>
                    <motion.h1
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25, duration: 0.8 }}
                      className="font-display mt-4 text-4xl font-light leading-[1.1] tracking-tight text-white sm:text-5xl md:text-7xl"
                    >
                      More Journeys.
                      <br />
                      <span className="text-gradient-brand">Better Stories.</span>
                    </motion.h1>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="mt-6 max-w-sm text-xs leading-relaxed text-white/60 sm:max-w-md sm:text-sm md:text-base md:text-white/70"
                    >
                      Step through the portal into the Himalayas — luxury stays,
                      curated routes, and stories worth telling.
                    </motion.p>
                    
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      whileHover={{ scale: 1.03, boxShadow: "0 0 40px 5px oklch(0.55 0.15 170 / 0.3)" }}
                      whileTap={{ scale: 0.98 }}
                      onClick={begin}
                      disabled={phase === "opening"}
                      className="group relative mt-10 inline-flex items-center gap-3 overflow-hidden rounded-full bg-[var(--gradient-brand)] px-6 py-3.5 text-[11px] font-medium uppercase tracking-[0.25em] text-white shadow-elegant transition-transform duration-300 md:px-8 md:py-4 md:text-xs cursor-pointer"
                    >
                      <span className="absolute inset-0 -translate-x-full bg-white/15 transition-transform duration-700 ease-out group-hover:translate-x-full" />
                      <span className="relative">Begin Your Journey</span>
                      <span className="relative transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </motion.button>
                    
                    <p className="mt-6 text-[9px] uppercase tracking-[0.3em] text-white/20 md:text-[10px]">
                      Press to enter · Cinematic experience
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}