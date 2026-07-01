"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Shield, Home, Sparkles, ArrowUpRight } from "lucide-react";

function AmbientGlowMesh() {
  const meshRef = useRef<any>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.z = time * 0.05;
      meshRef.current.scale.x = 1 + Math.sin(time * 0.5) * 0.05;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -2]}>
      <planeGeometry args={[5, 5]} />
      <meshBasicMaterial 
        color="#0b2545"
        wireframe={true}
        transparent={true}
        opacity={0.15}
      />
    </mesh>
  );
}

// Data Matrix configured to cycle automatically through all 9 provided assets
const STAYS_COLLECTION = [
  { 
    id: "domes", 
    name: "Glass Domes", 
    loc: "Auli · Sleeps 2", 
    icon: Sparkles,
    slides: [
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.06 AM (1).jpeg", feature: "Stone Wall Interior Architecture" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.07 AM (1).jpeg", feature: "Fine Valley Dining Deck" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.07 AM.jpeg", feature: "Pristine Mountain View Greens" }
    ]
  },
  { 
    id: "treehouses", 
    name: "Pine Treehouses", 
    loc: "Kasol · Sleeps 3", 
    icon: Home,
    slides: [
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.08 AM (1).jpeg", feature: "Elevated Stone Cottage Lines" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.08 AM (3).jpeg", feature: "Isolated Riverside Basecamp View" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.09 AM (2).jpeg", feature: "Stone Ring Twilight Bonfires" }
    ]
  },
  { 
    id: "villas", 
    name: "Cliffside Villas", 
    loc: "Manali · Sleeps 6", 
    icon: Shield,
    slides: [
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.10 AM (2).jpeg", feature: "Private Panoramic View Verandas" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.11 AM.jpeg", feature: "Sunset Edge Infinity Pool" },
      { image: "/pics/WhatsApp Image 2026-06-29 at 6.19.12 AM.jpeg", feature: "Open Sky Lawn Lounging Layouts" }
    ]
  }
];

export function Stays() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    setMounted(true);
    
    // Core timing engine orchestrating the automatic crossfade intervals
    const interval = setInterval(() => {
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="stays" className="relative w-full bg-background py-24 px-4 sm:px-6 lg:px-8 overflow-hidden select-none z-30">
      
      {/* LAYER 1: Ambient Background Engine */}
      {mounted && (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
          <Canvas camera={{ position: [0, 0, 1] }}>
            <AmbientGlowMesh />
          </Canvas>
        </div>
      )}

      {/* LAYER 2: Grid Layout Container */}
      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Section Header */}
        <div className="max-w-xl mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-[#00b4d8] font-bold">
            Stays Collection
          </p>
          <h2 className="font-display text-3xl font-light text-white mt-3 sm:text-4xl md:text-5xl tracking-tight">
            Homes with a view of the weather.
          </h2>
          <p className="mt-4 text-xs leading-relaxed text-white/50 sm:text-sm">
            Glass domes, pine treehouses, cliffside villas. Each property is visited in person before it joins the collection.
          </p>
        </div>

        {/* Short, Adaptable Symmetrical Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {STAYS_COLLECTION.map((stay, index) => {
            const Icon = stay.icon;
            const isHovered = hoveredId === stay.id;
            const activeSlide = stay.slides[currentSlideIndex];

            return (
              <motion.div
                key={stay.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredId(stay.id)}
                onMouseLeave={() => setHoveredId(null)}
                onTouchStart={() => setHoveredId(stay.id)}
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/40 p-5 h-[380px] sm:h-[400px] backdrop-blur-md transition-all duration-500 hover:border-white/20 hover:shadow-2xl"
              >
                {/* AUTOMATED BACKGROUND INTERCHANGING CANVAS */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent z-10" />
                  
                  <AnimatePresence mode="popLayout">
                    <motion.img 
                      key={activeSlide.image}
                      src={activeSlide.image} 
                      alt={stay.name}
                      initial={{ opacity: 0, scale: 1.02 }}
                      animate={{ opacity: 1, scale: isHovered ? 1.06 : 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.9, ease: "easeInOut" }}
                      className="h-full w-full object-cover object-center brightness-[0.8]"
                    />
                  </AnimatePresence>
                </div>

                {/* Top Row Indicators */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/40 border border-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                    <Icon className="h-4 w-4" />
                  </div>
                  
                  {/* Dynamic subtitle text changing in tandem with slide transitions */}
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={activeSlide.feature}
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 5 }}
                      transition={{ duration: 0.3 }}
                      className="inline-flex items-center gap-1.5 rounded-full bg-black/40 border border-white/10 px-3 py-1 text-[10px] font-medium tracking-wide text-white/90 backdrop-blur-md"
                    >
                      <span className="h-1 w-1 rounded-full bg-[#00b4d8] animate-pulse" />
                      {activeSlide.feature}
                    </motion.span>
                  </AnimatePresence>
                </div>

                {/* Lower Typography Stack Frame */}
                <div className="relative z-10 mt-auto">
                  <p className="text-[10px] uppercase tracking-widest text-[#00b4d8] font-semibold">
                    {stay.loc}
                  </p>
                  <h3 className="font-display text-2xl font-light text-white mt-1 group-hover:text-[#00b4d8] transition-colors duration-300">
                    {stay.name}
                  </h3>

                  {/* Micro-Interactive Pull Action Trigger */}
                  <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-3 overflow-hidden h-7">
                    <span className="text-[10px] text-white/40 tracking-widest uppercase">Vetted Space Node</span>
                    <div className="flex items-center gap-1 text-[10px] uppercase tracking-widest text-white font-semibold cursor-pointer transition-transform duration-300 group-hover:translate-x-0.5">
                      <span className="group-hover:text-[#00b4d8] transition-colors">Explore Stay</span>
                      <ArrowUpRight className="h-3.5 w-3.5 text-white group-hover:text-[#00b4d8] transition-colors" />
                    </div>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}